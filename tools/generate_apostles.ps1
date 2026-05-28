$ErrorActionPreference = "Stop"

$baseUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3CUX8t7JVmCPZv5grrc1MwSxW54ScZeLbi5tOuuzCFqoNNOzu3PP0MDuO3vo9INw9rNGlck1z3aBj/pub?single=true&output=csv&gid="
$csvDir = Join-Path $PSScriptRoot "..\tmp\apostles"
$outPath = Join-Path $PSScriptRoot "..\apostles.js"

$sheets = [ordered]@{
    basic = "2049454371"
    skills = "1025804217"
    favoriteCard = "145473913"
    asideStats = "2012675803"
    asideSpecials = "315718244"
    board = "1892423665"
}

$keyMap = @{
    "id" = "id"
    "使徒名" = "name"
    "(en)" = "id"
    "en" = "id"
    "レア度" = "rarity"
    "エルダイン" = "eldain"
    "性格" = "personality"
    "種族" = "race"
    "役割" = "role"
    "配列" = "position"
    "攻撃タイプ" = "attackType"
    "HPタイプ" = "hpType"
    "物理攻撃力タイプ" = "atkPType"
    "魔法攻撃力タイプ" = "atkMType"
    "物理防御力タイプ" = "defPType"
    "魔法防御力タイプ" = "defMType"
    "会心タイプ" = "critType"
    "会心DMGタイプ" = "critDmgType"
    "会心抵抗タイプ" = "critResType"
    "会心DMG抵抗タイプ" = "critDmgResType"
    "SP回復" = "initialSp"
    "初期SP" = "initialSp"
    "毎秒SP回復量" = "spRecoveryPerSecond"
    "ボードタイプ" = "boardType"
    "ボード形" = "boardShape"
    "no" = "no"
    "スキル種別" = "skillType"
    "スキル名" = "skillName"
    "説明" = "description"
    "硬直秒" = "stunSeconds"
    "クールタイム秒" = "cooldownSeconds"
    "高学年クールタイム秒" = "cooldownSeconds"
    "値の種類" = "valueKind"
    "値分類" = "valueClass"
    "効果タイプ" = "effectType"
    "効果対象" = "effectTarget"
    "対象スキル" = "targetSkill"
    "参照" = "reference"
    "持続時間" = "duration"
    "固定値" = "fixedValue"
    "遺物名" = "cardName"
    "カード名" = "cardName"
    "カード種別" = "cardKind"
    "解放Lv" = "unlockLevel"
    "Lv1_説明" = "lv1Description"
    "効果1種別" = "effect1Kind"
    "効果1値" = "effect1Value"
    "効果2種別" = "effect2Kind"
    "効果2値" = "effect2Value"
    "アサイド名" = "asideName"
    "Lv" = "level"
    "Lv内名前" = "levelName"
    "効果説明" = "effectDescription"
    "ステ適用" = "statApplyTo"
    "ステ能力値" = "statName"
    "上昇%" = "increaseP"
    "種族タイプ" = "raceBoardType"
}

$allowedValueClasses = @(
    "倍率",
    "固定値",
    "持続時間",
    "状態付与",
    "状態免疫",
    "ヒット数",
    "対象数",
    "回数",
    "周期",
    "クールタイム",
    "条件",
    "SP量",
    "スキル変更"
)

$validationWarnings = @()

function Clean-Value($value) {
    if ($null -eq $value) { return $null }
    $text = [string]$value
    $text = $text.Replace(([string][char]0xFEFF), "").Replace(([string][char]0x2003), " ").Replace(([string][char]0x00A0), " ").Trim()
    if ($text -eq "" -or $text -eq "-") { return $null }

    $intValue = 0
    if ([int]::TryParse($text, [ref]$intValue)) { return $intValue }

    $doubleValue = 0.0
    if ([double]::TryParse($text, [System.Globalization.NumberStyles]::Float, [System.Globalization.CultureInfo]::InvariantCulture, [ref]$doubleValue)) {
        return $doubleValue
    }

    return $text
}

function Normalize-Id($id) {
    if (-not $id) { return $null }
    return (([string]$id).ToLowerInvariant() -replace "[^0-9a-z]+", "_").Trim("_")
}

function Has-Value($value) {
    if ($null -eq $value) { return $false }
    if ($value -is [string] -and $value -eq "") { return $false }
    return $true
}

function Read-NormalizedCsv($name) {
    $rows = Import-Csv -LiteralPath (Join-Path $csvDir "$name.csv") -Encoding utf8
    $items = @()

    foreach ($row in $rows) {
        $hash = [ordered]@{}

        foreach ($prop in $row.PSObject.Properties) {
            $rawKey = $prop.Name.Trim()
            $key = if ($keyMap.ContainsKey($rawKey)) { $keyMap[$rawKey] } else { $rawKey }
            $value = Clean-Value $prop.Value
            if (Has-Value $value) { $hash[$key] = $value }
        }

        if ($hash.Contains("id")) { $hash["id"] = Normalize-Id $hash["id"] }
        $items += [pscustomobject]$hash
    }

    return $items
}

function Compact-Row($row, [string[]]$remove = @("id", "name")) {
    $out = [ordered]@{}

    foreach ($prop in $row.PSObject.Properties) {
        if ($remove -contains $prop.Name) { continue }
        if (Has-Value $prop.Value) { $out[$prop.Name] = $prop.Value }
    }

    return $out
}

function Extract-Levels($data) {
    $levels = [ordered]@{}

    foreach ($i in 1..15) {
        $key = "Lv$i"
        if ($data.Contains($key)) {
            $levels[[string]$i] = $data[$key]
            $data.Remove($key)
        }
    }

    return $levels
}

function Has-EffectPayload($data) {
    foreach ($key in @("valueKind", "valueClass", "effectType", "effectTarget", "targetSkill", "reference", "duration", "fixedValue", "levels")) {
        if ($data.Contains($key) -and (Has-Value $data[$key])) { return $true }
    }
    return $false
}

function Apply-EffectDefaults($data) {
    if (
        $data.Contains("valueKind") -and
        -not $data.Contains("valueClass") -and
        $data.Contains("effectType") -and
        $data["effectType"] -eq "攻撃" -and
        ([string]$data["valueKind"]) -match "ダメージ$"
    ) {
        $data["valueClass"] = "倍率"
    }

    return $data
}

function Add-EffectIfPresent($effects, $data) {
    $data = Apply-EffectDefaults $data
    if (-not (Has-EffectPayload $data)) { return @($effects) }
    return @($effects) + @($data)
}

function Get-RowValue($row, [string]$key) {
    $prop = $row.PSObject.Properties | Where-Object { $_.Name -eq $key } | Select-Object -First 1
    if ($prop) { return $prop.Value }
    return $null
}

function New-GroupKey($row, [string[]]$keys) {
    $parts = @()
    foreach ($key in $keys) {
        $value = Get-RowValue $row $key
        if ($null -ne $value) { $parts += [string]$value } else { $parts += "" }
    }
    return ($parts -join "|")
}

function Add-GroupedEffect($list, $row, [string[]]$groupKeys, [string[]]$parentKeys, [string[]]$effectRemoveKeys) {
    $groupKey = New-GroupKey $row $groupKeys
    $group = $list | Where-Object { $_._groupKey -eq $groupKey } | Select-Object -First 1

    if (-not $group) {
        $group = [ordered]@{ _groupKey = $groupKey; effects = @() }
        foreach ($key in $parentKeys) {
            $value = Get-RowValue $row $key
            if (Has-Value $value) {
                $group[$key] = $value
            }
        }
        $list = @($list) + @($group)
    }

    $data = Compact-Row $row
    foreach ($key in $effectRemoveKeys) {
        if ($data.Contains($key)) { $data.Remove($key) }
    }

    $levels = Extract-Levels $data
    if ($levels.Count -gt 0) { $data["levels"] = $levels }
    $group.effects = Add-EffectIfPresent $group.effects $data

    return $list
}

function Remove-InternalGroupKeys($list) {
    if (-not $list) { return @() }
    foreach ($item in $list) {
        if ($item.Contains("_groupKey")) { $item.Remove("_groupKey") }
    }
    return $list
}

function Ensure-AsideLevel($apostle, $row) {
    $asideName = Get-RowValue $row "asideName"
    if ($asideName -and -not $apostle.aside.Contains("name")) {
        $apostle.aside["name"] = $asideName
    }

    $level = Get-RowValue $row "level"
    if (-not $level) { return $null }

    $levelKey = [string]$level
    if (-not $apostle.aside.levels.Contains($levelKey)) {
        $levelData = [ordered]@{
            name = Get-RowValue $row "levelName"
            stats = @()
            effects = @()
        }
        $apostle.aside.levels[$levelKey] = $levelData
    }

    $levelItem = $apostle.aside.levels[$levelKey]
    $levelName = Get-RowValue $row "levelName"
    if ($levelName -and -not $levelItem.name) {
        $levelItem.name = $levelName
    }

    return $levelItem
}

function Add-AsideStat($apostle, $row) {
    $levelItem = Ensure-AsideLevel $apostle $row
    if (-not $levelItem) { return }

    $data = Compact-Row $row
    foreach ($key in @("asideName", "level", "levelName", "effectDescription")) {
        if ($data.Contains($key)) { $data.Remove($key) }
    }

    $levels = Extract-Levels $data
    if ($levels.Count -gt 0) { $data["levels"] = $levels }
    if ($data.Count -gt 0) {
        $levelItem.stats = @($levelItem.stats) + @($data)
    }
}

function Add-AsideSpecial($apostle, $row) {
    $levelItem = Ensure-AsideLevel $apostle $row
    if (-not $levelItem) { return }

    $description = Get-RowValue $row "effectDescription"
    if ($description) {
        $levelItem["description"] = $description
    }

    $data = Compact-Row $row
    foreach ($key in @("asideName", "level", "levelName", "effectDescription")) {
        if ($data.Contains($key)) { $data.Remove($key) }
    }

    $levels = Extract-Levels $data
    if ($levels.Count -gt 0) { $data["levels"] = $levels }
    $levelItem.effects = Add-EffectIfPresent $levelItem.effects $data
}

function Ensure-FavoriteCardLevel($apostle, $row) {
    $cardName = Get-RowValue $row "cardName"
    $cardKind = Get-RowValue $row "cardKind"
    if ($cardName -and -not $apostle.favoriteCard.Contains("name")) {
        $apostle.favoriteCard["name"] = $cardName
    }
    if ($cardKind -and -not $apostle.favoriteCard.Contains("kind")) {
        $apostle.favoriteCard["kind"] = $cardKind
    }
    if (-not $apostle.favoriteCard.Contains("levels")) {
        $apostle.favoriteCard["levels"] = [ordered]@{}
    }

    $unlockLevel = Get-RowValue $row "unlockLevel"
    if ($null -eq $unlockLevel) { $unlockLevel = 0 }
    $levelKey = [string]$unlockLevel

    if (-not $apostle.favoriteCard.levels.Contains($levelKey)) {
        $apostle.favoriteCard.levels[$levelKey] = @()
    }

    return $levelKey
}

function Add-FavoriteCardEffect($apostle, $row) {
    $levelKey = Ensure-FavoriteCardLevel $apostle $row
    $groupKey = New-GroupKey $row @("unlockLevel", "targetSkill", "skillName", "lv1Description")
    $groups = @($apostle.favoriteCard.levels[$levelKey])
    $group = $groups | Where-Object { $_._groupKey -eq $groupKey } | Select-Object -First 1

    if (-not $group) {
        $group = [ordered]@{ _groupKey = $groupKey; effects = @() }
        foreach ($key in @("targetSkill", "skillName", "lv1Description")) {
            $value = Get-RowValue $row $key
            if (Has-Value $value) {
                if ($key -eq "lv1Description") {
                    $group["description"] = $value
                } else {
                    $group[$key] = $value
                }
            }
        }
        $groups = @($groups) + @($group)
        $apostle.favoriteCard.levels[$levelKey] = $groups
    }

    $data = Compact-Row $row
    foreach ($key in @("cardName", "cardKind", "unlockLevel", "targetSkill", "skillName", "lv1Description")) {
        if ($data.Contains($key)) { $data.Remove($key) }
    }

    $levels = Extract-Levels $data
    if ($levels.Count -gt 0) { $data["levels"] = $levels }
    $group.effects = Add-EffectIfPresent $group.effects $data
}

New-Item -ItemType Directory -Force -Path $csvDir | Out-Null

foreach ($name in $sheets.Keys) {
    Invoke-WebRequest -Uri ($baseUrl + $sheets[$name]) -OutFile (Join-Path $csvDir "$name.csv")
}

$basicRows = Read-NormalizedCsv "basic"
$skillRows = Read-NormalizedCsv "skills"
$favoriteCardRows = Read-NormalizedCsv "favoriteCard"
$asideStatRows = Read-NormalizedCsv "asideStats"
$asideSpecialRows = Read-NormalizedCsv "asideSpecials"
$boardRows = Read-NormalizedCsv "board"

$byId = [ordered]@{}

foreach ($row in $basicRows) {
    if (-not $row.id) { continue }

    $basic = Compact-Row $row
    $statTypes = [ordered]@{}

    foreach ($pair in @(
        @("hp", "hpType"),
        @("atkP", "atkPType"),
        @("atkM", "atkMType"),
        @("defP", "defPType"),
        @("defM", "defMType"),
        @("crit", "critType"),
        @("critDmg", "critDmgType"),
        @("critRes", "critResType"),
        @("critDmgRes", "critDmgResType")
    )) {
        $outKey = $pair[0]
        $inKey = $pair[1]
        if ($basic.Contains($inKey)) {
            $statTypes[$outKey] = $basic[$inKey]
            $basic.Remove($inKey)
        }
    }

    $byId[$row.id] = [ordered]@{
        id = $row.id
        name = $row.name
        basic = $basic
        statTypes = $statTypes
        skills = @()
        favoriteCard = [ordered]@{}
        aside = [ordered]@{
            levels = [ordered]@{}
        }
        board = $null
    }
}

foreach ($row in $skillRows) {
    if (-not $row.id -or -not $byId.Contains($row.id)) { continue }
    $byId[$row.id].skills = Add-GroupedEffect `
        $byId[$row.id].skills `
        $row `
        @("skillType", "skillName") `
        @("no", "skillType", "skillName", "description", "stunSeconds", "cooldownSeconds") `
        @("no", "skillType", "skillName", "description", "stunSeconds", "cooldownSeconds")
}

foreach ($row in $favoriteCardRows) {
    if (-not $row.id -or -not $byId.Contains($row.id)) { continue }
    Add-FavoriteCardEffect $byId[$row.id] $row
}

foreach ($row in $asideStatRows) {
    if (-not $row.id -or -not $byId.Contains($row.id)) { continue }
    Add-AsideStat $byId[$row.id] $row
}

foreach ($row in $asideSpecialRows) {
    if (-not $row.id -or -not $byId.Contains($row.id)) { continue }
    Add-AsideSpecial $byId[$row.id] $row
}

foreach ($row in $boardRows) {
    if (-not $row.id -or -not $byId.Contains($row.id)) { continue }

    $board = Compact-Row $row
    $cells = [ordered]@{}

    foreach ($key in @($board.Keys)) {
        if ($key -match "^\d+-\d+$") {
            $cells[$key] = $board[$key]
            $board.Remove($key)
        }
    }

    $board["cells"] = $cells
    $byId[$row.id].board = $board
}

foreach ($apostle in $byId.Values) {
    $cleanSkills = Remove-InternalGroupKeys $apostle.skills
    $apostle.skills = if ($null -eq $cleanSkills) { [object[]]@() } else { @($cleanSkills) }

    if ($apostle.favoriteCard.Contains("levels")) {
        $sortedFavoriteLevels = [ordered]@{}
        foreach ($key in ($apostle.favoriteCard.levels.Keys | Sort-Object { [int]$_ })) {
            $cleanGroups = Remove-InternalGroupKeys $apostle.favoriteCard.levels[$key]
            $sortedFavoriteLevels[$key] = @($cleanGroups)
        }
        $apostle.favoriteCard.levels = $sortedFavoriteLevels
    }

    $sortedAside = [ordered]@{}
    if ($apostle.aside.Contains("name")) {
        $sortedAside["name"] = $apostle.aside.name
    }

    $sortedLevels = [ordered]@{}
    foreach ($key in ($apostle.aside.levels.Keys | Sort-Object { [int]$_ })) {
        $levelItem = $apostle.aside.levels[$key]
        $levelItem.stats = @($levelItem.stats)
        $levelItem.effects = @($levelItem.effects)
        $sortedLevels[$key] = $levelItem
    }
    $sortedAside["levels"] = $sortedLevels
    $apostle.aside = $sortedAside
}

$library = @($byId.Values)

foreach ($apostle in $library) {
    foreach ($skill in $apostle.skills) {
        if (-not (Has-Value $skill.skillName) -and (-not $skill.effects -or $skill.effects.Count -eq 0)) {
            $validationWarnings += "empty skill row: $($apostle.id) / skill:$($skill.skillType)"
        }

        foreach ($effect in $skill.effects) {
            if ($effect.valueKind -and -not $effect.valueClass) {
                $validationWarnings += "valueClass missing: $($apostle.id) / skill:$($skill.skillType) / $($effect.valueKind)"
            }
            if ($effect.valueClass -and ($allowedValueClasses -notcontains $effect.valueClass)) {
                $validationWarnings += "unknown valueClass '$($effect.valueClass)': $($apostle.id) / skill:$($skill.skillType) / $($effect.valueKind)"
            }
        }
    }

    if ($apostle.favoriteCard.Contains("levels")) {
        foreach ($levelKey in $apostle.favoriteCard.levels.Keys) {
            foreach ($group in $apostle.favoriteCard.levels[$levelKey]) {
                foreach ($effect in $group.effects) {
                    if ($effect.valueKind -and -not $effect.valueClass) {
                        $validationWarnings += "valueClass missing: $($apostle.id) / favoriteCard:Lv$levelKey / $($effect.valueKind)"
                    }
                    if ($effect.valueClass -and ($allowedValueClasses -notcontains $effect.valueClass)) {
                        $validationWarnings += "unknown valueClass '$($effect.valueClass)': $($apostle.id) / favoriteCard:Lv$levelKey / $($effect.valueKind)"
                    }
                }
            }
        }
    }

    foreach ($levelKey in $apostle.aside.levels.Keys) {
        foreach ($effect in $apostle.aside.levels[$levelKey].effects) {
            if ($effect.valueKind -and -not $effect.valueClass) {
                $validationWarnings += "valueClass missing: $($apostle.id) / aside:Lv$levelKey / $($effect.valueKind)"
            }
            if ($effect.valueClass -and ($allowedValueClasses -notcontains $effect.valueClass)) {
                $validationWarnings += "unknown valueClass '$($effect.valueClass)': $($apostle.id) / aside:Lv$levelKey / $($effect.valueKind)"
            }
        }
    }
}

$json = $library | ConvertTo-Json -Depth 20
$js = @"
// Trickcal Damage Calculator - Apostle Data
// Generated from: トリッカル使徒データ Google Sheet

const APOSTLE_LIBRARY = $json;

const APOSTLE_INDEX = Object.fromEntries(APOSTLE_LIBRARY.map(apostle => [apostle.id, apostle]));
"@

Set-Content -LiteralPath $outPath -Value $js -Encoding utf8

$skillCount = ($library | ForEach-Object { $_.skills.Count } | Measure-Object -Sum).Sum
Write-Output "Generated $outPath"
Write-Output "apostles=$($library.Count) skills=$skillCount"
$viviAsideLevels = if ($byId["vivi"].aside.levels) { $byId["vivi"].aside.levels.Keys.Count } else { 0 }
Write-Output "vivi skills=$($byId["vivi"].skills.Count) asideLevels=$viviAsideLevels"
if ($validationWarnings.Count -gt 0) {
    Write-Output "validation warnings=$($validationWarnings.Count)"
    $validationWarnings | Select-Object -First 30 | ForEach-Object { Write-Output "WARN: $_" }
    if ($validationWarnings.Count -gt 30) {
        Write-Output "WARN: ...and $($validationWarnings.Count - 30) more"
    }
}
