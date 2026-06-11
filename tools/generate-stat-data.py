#!/usr/bin/env python3
"""Generate calculator/statData.js from the local Trickcal datasheet xlsx."""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

MAIN_NS = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
REL_NS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"
PKG_REL_NS = "{http://schemas.openxmlformats.org/package/2006/relationships}"

SHEET_KEYS = {
    "基本情報": "basicInfo",
    "Rank全体効果情報": "rankGlobalBonuses",
    "装備情報": "equipment",
    "装備効果": "equipmentValues",
    "研究効果": "research",
    "基礎ステータス値効果": "baseStatValues",
    "好感度効果": "bondBonuses",
    "ボード情報": "board",
    "スキル": "skills",
    "愛用カード": "favoriteCards",
    "アサイド ステ効果": "asideStatEffects",
    "アサイド 特殊効果": "asideSpecialEffects",
    "ボード特殊効果まとめ": "boardSpecialEffects",
}

INDEX_BY_ID = {
    "basicInfo",
    "rankGlobalBonuses",
    "equipment",
    "boardSpecialEffects",
}

GROUP_BY_ID = {
    "board",
    "skills",
    "favoriteCards",
    "asideStatEffects",
    "asideSpecialEffects",
}


def column_index(cell_ref: str) -> int:
    match = re.match(r"([A-Z]+)", cell_ref or "")
    if not match:
        return 0
    value = 0
    for char in match.group(1):
        value = value * 26 + ord(char) - ord("A") + 1
    return value


def parse_scalar(value: str, cell_type: str | None, shared_strings: list[str]):
    if value is None:
        return ""
    if cell_type == "s":
        if value.isdigit():
            index = int(value)
            return shared_strings[index] if index < len(shared_strings) else value
        return value
    if cell_type == "b":
        return value == "1"
    text = str(value).strip()
    if text == "":
        return ""
    try:
        number = float(text)
    except ValueError:
        return text
    if number.is_integer():
        return int(number)
    return number


def read_shared_strings(zip_file: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in zip_file.namelist():
        return []
    root = ET.fromstring(zip_file.read("xl/sharedStrings.xml"))
    strings: list[str] = []
    for item in root.findall(f"{MAIN_NS}si"):
        parts = [text.text or "" for text in item.iter(f"{MAIN_NS}t")]
        strings.append("".join(parts))
    return strings


def read_sheet_rows(zip_file: zipfile.ZipFile, sheet_path: str, shared_strings: list[str]) -> list[list[object]]:
    root = ET.fromstring(zip_file.read(sheet_path))
    rows: list[list[object]] = []
    sheet_data = root.find(f"{MAIN_NS}sheetData")
    if sheet_data is None:
        return rows
    for row in sheet_data.findall(f"{MAIN_NS}row"):
        values: list[object] = []
        for cell in row.findall(f"{MAIN_NS}c"):
            idx = column_index(cell.attrib.get("r", ""))
            while len(values) < idx - 1:
                values.append("")

            cell_type = cell.attrib.get("t")
            value_node = cell.find(f"{MAIN_NS}v")
            if cell_type == "inlineStr":
                text_node = cell.find(f"{MAIN_NS}is/{MAIN_NS}t")
                raw = text_node.text if text_node is not None else ""
                values.append(raw or "")
                continue
            if value_node is None:
                values.append("")
                continue
            values.append(parse_scalar(value_node.text or "", cell_type, shared_strings))
        while values and values[-1] == "":
            values.pop()
        rows.append(values)
    return rows


def read_workbook(path: Path) -> dict[str, list[list[object]]]:
    with zipfile.ZipFile(path) as zip_file:
        shared_strings = read_shared_strings(zip_file)
        workbook = ET.fromstring(zip_file.read("xl/workbook.xml"))
        relationships = ET.fromstring(zip_file.read("xl/_rels/workbook.xml.rels"))
        rel_map = {rel.attrib["Id"]: rel.attrib["Target"] for rel in relationships.findall(f"{PKG_REL_NS}Relationship")}

        result: dict[str, list[list[object]]] = {}
        sheets_node = workbook.find(f"{MAIN_NS}sheets")
        if sheets_node is None:
            return result
        for sheet in sheets_node.findall(f"{MAIN_NS}sheet"):
            name = sheet.attrib.get("name", "")
            rid = sheet.attrib.get(f"{REL_NS}id", "")
            target = rel_map.get(rid, "")
            if not target:
                continue
            sheet_path = target.lstrip("/")
            if not sheet_path.startswith("xl/"):
                sheet_path = f"xl/{sheet_path}"
            result[name] = read_sheet_rows(zip_file, sheet_path, shared_strings)
        return result


def unique_headers(raw_headers: list[object]) -> list[str]:
    headers: list[str] = []
    counts: dict[str, int] = {}
    for index, raw in enumerate(raw_headers):
        header = str(raw).strip() if raw != "" else f"col{index + 1}"
        count = counts.get(header, 0) + 1
        counts[header] = count
        headers.append(header if count == 1 else f"{header}_{count}")
    return headers


def rows_to_objects(rows: list[list[object]]) -> list[dict[str, object]]:
    first = next((i for i, row in enumerate(rows) if any(value != "" for value in row)), None)
    if first is None:
        return []
    headers = unique_headers(rows[first])
    objects: list[dict[str, object]] = []
    for row in rows[first + 1 :]:
        if not any(value != "" for value in row):
            continue
        item: dict[str, object] = {}
        for index, header in enumerate(headers):
            value = row[index] if index < len(row) else ""
            if header.startswith("col") and value == "":
                continue
            item[header] = value
        objects.append(item)
    return objects


def parse_tsv_scalar(value: str) -> object:
    text = value.strip()
    if text == "":
        return ""
    try:
        number = float(text)
    except ValueError:
        return text
    if number.is_integer():
        return int(number)
    return number


def read_tsv_objects(path: Path) -> list[dict[str, object]]:
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8", newline="") as file:
        reader = csv.DictReader(file, delimiter="\t")
        return [
            {key: parse_tsv_scalar(value or "") for key, value in row.items() if key is not None}
            for row in reader
        ]


def build_indexes(sheets: dict[str, list[dict[str, object]]]) -> dict[str, object]:
    indexes: dict[str, object] = {}
    for key, rows in sheets.items():
        if key in INDEX_BY_ID:
            indexes[f"{key}ById"] = {
                str(row.get("id")): index for index, row in enumerate(rows) if row.get("id", "") != ""
            }
        if key in GROUP_BY_ID:
            grouped: dict[str, list[int]] = {}
            for index, row in enumerate(rows):
                row_id = row.get("id", "")
                if row_id == "":
                    continue
                grouped.setdefault(str(row_id), []).append(index)
            indexes[f"{key}ById"] = grouped
    return indexes


def generate(input_path: Path, output_path: Path) -> None:
    workbook = read_workbook(input_path)
    sheets: dict[str, list[dict[str, object]]] = {}
    ignored_sheets: list[str] = []

    for sheet_name, rows in workbook.items():
        key = SHEET_KEYS.get(sheet_name)
        if key is None:
            ignored_sheets.append(sheet_name)
            continue
        sheets[key] = rows_to_objects(rows)

    rank_up_bonus_path = input_path.parent / "rank-up-bonus.tsv"
    sheets["rankUpBonuses"] = read_tsv_objects(rank_up_bonus_path)

    data = {
        "generatedAt": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat(),
        "source": input_path.name,
        "sheets": sheets,
        "indexes": build_indexes(sheets),
        "ignoredSheets": ignored_sheets,
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    json_text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    output_path.write_text(
        "const TRICKCAL_STAT_DATA = "
        + json_text
        + ";\n"
        + "TRICKCAL_STAT_DATA.getById = function(table, id) {\n"
        + "  const index = this.indexes?.[`${table}ById`]?.[id];\n"
        + "  if (Array.isArray(index)) return index.map(i => this.sheets?.[table]?.[i]).filter(Boolean);\n"
        + "  return Number.isInteger(index) ? this.sheets?.[table]?.[index] : undefined;\n"
        + "};\n"
        + "window.TRICKCAL_STAT_DATA = TRICKCAL_STAT_DATA;\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--input",
        default="calculator/tools/trickcal_datasheet.xlsx",
        help="Path to the local Trickcal datasheet xlsx.",
    )
    parser.add_argument(
        "--output",
        default="calculator/statData.js",
        help="Path to the generated database JavaScript file.",
    )
    args = parser.parse_args()

    generate(Path(args.input), Path(args.output))


if __name__ == "__main__":
    main()
