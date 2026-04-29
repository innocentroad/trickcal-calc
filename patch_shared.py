import re

def main():
    # 1. Update index.html
    html_path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove crayon-inputs for crit-dmg
    html = re.sub(
        r'<input type="number" id="crit-dmg-number"[^>]*>[\s]*</div>[\s]*<div class="crayon-inputs" style="display: none;">[\s\S]*?<input type="number" id="crit-dmg-new-bonus"[^>]*>[\s]*</div>[\s]*</div>',
        r'<input type="number" id="crit-dmg-number" min="1" max="1000000" value="30000">\n                    </div>',
        html
    )

    # Remove crayon-inputs for crit-dmg-res
    html = re.sub(
        r'<input type="number" id="crit-dmg-res-number"[^>]*>[\s]*</div>[\s]*<div class="crayon-inputs" style="display: none;">[\s\S]*?<input type="number" id="crit-dmg-res-new-bonus"[^>]*>[\s]*</div>[\s]*</div>',
        r'<input type="number" id="crit-dmg-res-number" min="1" max="1000000" value="30000">\n                    </div>',
        html
    )

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)


    # 2. Update script.js
    js_path = r"d:\Games\etc\trickcal\calculator\script.js"
    with open(js_path, 'r', encoding='utf-8') as f:
        js = f.read()

    # Remove from DOM mapping
    js = re.sub(r"[\s]*critDmgAtkC: \{ cur: document\.getElementById\('crit-dmg-cur-bonus'\), new: document\.getElementById\('crit-dmg-new-bonus'\) \},", "", js)
    js = re.sub(r"[\s]*critDmgResC: \{ cur: document\.getElementById\('crit-dmg-res-cur-bonus'\), new: document\.getElementById\('crit-dmg-res-new-bonus'\) \},", "", js)

    # Update getValues mapping
    js = re.sub(
        r"critDmgAtk_c: \{ cur: parseFloat\(inputs\.critDmgAtkC\.cur\.value\)/100, new: parseFloat\(inputs\.critDmgAtkC\.new\.value\)/100 \},",
        r"critDmgAtk_c: { cur: parseFloat(inputs.critC.cur.value)/100, new: parseFloat(inputs.critC.new.value)/100 },",
        js
    )
    js = re.sub(
        r"critDmgRes_c: \{ cur: parseFloat\(inputs\.critDmgResC\.cur\.value\)/100, new: parseFloat\(inputs\.critDmgResC\.new\.value\)/100 \},",
        r"critDmgRes_c: { cur: parseFloat(inputs.critResC.cur.value)/100, new: parseFloat(inputs.critResC.new.value)/100 },",
        js
    )

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js)

    print("Patched shared inputs!")

if __name__ == "__main__":
    main()
