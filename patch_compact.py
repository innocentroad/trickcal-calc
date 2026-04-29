import re

def main():
    # --- UPDATE INDEX.HTML ---
    html_path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    replacements = {
        'Crayon Comparison (クレヨン比較)': 'クレヨン比較',
        'Attacker Stats': '攻撃側ステータス',
        'Attack (攻撃力)': '攻撃力',
        'Crit (会心)': '会心',
        'Crit DMG (会心DMG)': '会心DMG',
        'Defender Stats': '防御側ステータス',
        'Defense (防御力)': '防御力',
        'Crit Resist (会心抵抗)': '会心抵抗',
        'Crit DMG Resist (会心DMG抵抗)': '会心DMG抵抗',
        'Multipliers (%)': '倍率 (%)',
        'Skill (スキル)': 'スキル',
        'Additional (追加)': '追加',
        'Type (相性)': '相性',
        'Special (特殊)': '特殊',
        'Other (その他)': 'その他',
        'Calculation Results': '計算結果',
        'Expected DMG (期待値)': '期待値',
        'Normal DMG (通常時)': '通常ダメージ',
        'Critical DMG (会心時)': '会心ダメージ',
        'Crit Rate (会心率)': '会心率',
        'Perspective:': '軸:',
        'Attacker Axis': '攻撃側',
        'Defender Axis': '防御側',
        'Expected DMG': '期待値',
        'Normal DMG': '通常ダメージ',
        'Critical DMG': '会心ダメージ',
    }

    for k, v in replacements.items():
        html = html.replace(k, v)

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)

    # --- UPDATE SCRIPT.JS ---
    js_path = r"d:\Games\etc\trickcal\calculator\script.js"
    with open(js_path, 'r', encoding='utf-8') as f:
        js = f.read()
        
    js_replacements = {
        "'Expected DMG'": "'期待値'",
        "'Normal DMG'": "'通常ダメージ'",
        "'Critical DMG'": "'会心ダメージ'",
        "'Attack (攻撃力)'": "'攻撃力'",
        "'Defense (防御力)'": "'防御力'",
        "'Damage'": "'ダメージ'"
    }

    for k, v in js_replacements.items():
        js = js.replace(k, v)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js)

    # --- UPDATE STYLE.CSS ---
    css_path = r"d:\Games\etc\trickcal\calculator\style.css"
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()

    # Rewrite result-card CSS for compact layout
    css_to_replace = r'''\.result-card \{
    background: rgba\(255, 255, 255, 0\.03\);
    padding: 1\.5rem;
    border-radius: 12px;
    border: 1px solid rgba\(255, 255, 255, 0\.05\);
    transition: transform 0\.2s;
\}
\.result-card:hover \{
    transform: translateY\(-2px\);
    background: rgba\(255, 255, 255, 0\.05\);
\}
\.result-card h3 \{
    font-size: 0\.9rem;
    color: #94a3b8;
    margin-bottom: 0\.5rem;
\}
\.result-card p \{
    font-size: 1\.5rem;
    font-weight: 800;
\}'''

    new_css = '''\.result-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
}
.result-card h3 {
    font-size: 0.9rem;
    color: #94a3b8;
    margin: 0;
}
.result-card p {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0;
}
.improvement-text {
    width: 100%;
    text-align: right;
    display: block;
    font-size: 0.85rem;
    font-weight: bold;
    margin-top: 0.2rem;
}'''

    css = re.sub(css_to_replace, new_css, css)
    
    # Also remove the block added to the end of style.css that contained improvement-text earlier
    css = re.sub(r'\.improvement-text \{[\s\S]*?\}', '', css) # We added it to new_css instead

    # Make .results-grid a bit denser
    css = re.sub(r'(\.results-grid \{[\s\S]*?gap: )1\.5rem(;\s*\})', r'\g<1>0.8rem\g<2>', css)

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css)

    print("Patched localization and compactness!")

if __name__ == "__main__":
    main()
