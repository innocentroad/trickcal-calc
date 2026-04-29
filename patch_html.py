import re

def main():
    path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add toggle checkbox at the top of input panel
    toggle_html = '''
                <div class="toggle-group crayon-toggle" style="margin-bottom: 1.5rem;">
                    <label style="cursor:pointer; display:flex; align-items:center; gap:0.5rem; font-weight:bold;">
                        <input type="checkbox" id="enable-crayon" style="width:1.2rem; height:1.2rem; accent-color:var(--accent-color);">
                        Crayon Comparison (クレヨン比較)
                    </label>
                </div>
                <h2>Attacker Stats</h2>'''
    content = content.replace('<h2>Attacker Stats</h2>', toggle_html, 1)

    # Add crayon inputs to stats
    stats = [
        ('atk', 'Attack (攻撃力)'),
        ('crit', 'Crit (会心)'),
        ('crit-dmg', 'Crit DMG (会心DMG)'),
        ('def', 'Defense (防御力)'),
        ('crit-res', 'Crit Resist (会心抵抗)'),
        ('crit-dmg-res', 'Crit DMG Resist (会心DMG抵抗)')
    ]

    for stat_id, _ in stats:
        pattern = rf'(<input type="number" id="{stat_id}-number"[\s\S]*?</div>)'
        crayon_html = f'''\\1
                    <div class="crayon-inputs" style="display: none;">
                        <div class="crayon-field">
                            <label>現在(%)</label>
                            <input type="number" id="{stat_id}-cur-bonus" value="100" min="1">
                        </div>
                        <div class="crayon-field">
                            <label>変更後(%)</label>
                            <input type="number" id="{stat_id}-new-bonus" value="100" min="1">
                        </div>
                    </div>'''
        content = re.sub(pattern, crayon_html, content)

    # Add improvement spans to results
    res_patterns = {
        'res-expected': 'imp-expected',
        'res-normal': 'imp-normal',
        'res-crit-dmg': 'imp-crit-dmg',
        'res-crit-rate': 'imp-crit-rate'
    }
    
    for res_id, imp_id in res_patterns.items():
        pattern = rf'(<p id="{res_id}">.*?</p>)'
        rep = f'\\1\n                        <span class="improvement-text" id="{imp_id}" style="display:none">+0.0%</span>'
        content = re.sub(pattern, rep, content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Patched index.html")

if __name__ == "__main__":
    main()
