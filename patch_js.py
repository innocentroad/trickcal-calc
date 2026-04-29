import re

def main():
    path = r"d:\Games\etc\trickcal\calculator\script.js"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add crayon DOM elements to inputs mapping
    dom_addition = '''    atkC: { cur: document.getElementById('atk-cur-bonus'), new: document.getElementById('atk-new-bonus') },
    critC: { cur: document.getElementById('crit-cur-bonus'), new: document.getElementById('crit-new-bonus') },
    critDmgAtkC: { cur: document.getElementById('crit-dmg-cur-bonus'), new: document.getElementById('crit-dmg-new-bonus') },
    defC: { cur: document.getElementById('def-cur-bonus'), new: document.getElementById('def-new-bonus') },
    critResC: { cur: document.getElementById('crit-res-cur-bonus'), new: document.getElementById('crit-res-new-bonus') },
    critDmgResC: { cur: document.getElementById('crit-dmg-res-cur-bonus'), new: document.getElementById('crit-dmg-res-new-bonus') },
'''
    content = content.replace("    skill: document.getElementById('mult-skill-number'),", dom_addition + "    skill: document.getElementById('mult-skill-number'),")

    misc_dom = '''
const crayonToggle = document.getElementById('enable-crayon');
const crayonInputsDivs = document.querySelectorAll('.crayon-inputs');
const impTexts = {
    expected: document.getElementById('imp-expected'),
    normal: document.getElementById('imp-normal'),
    critDmg: document.getElementById('imp-crit-dmg'),
    critRate: document.getElementById('imp-crit-rate')
};
'''
    content = content.replace("const addWarning = document.getElementById('add-mult-warning');", "const addWarning = document.getElementById('add-mult-warning');" + misc_dom)

    getValues_replace = '''
    return {
        isCrayon: crayonToggle.checked,
        atk: parseFloat(inputs.atk.n.value),
        crit: parseFloat(inputs.crit.n.value),
        critDmgAtk: parseFloat(inputs.critDmgAtk.n.value),
        def: parseFloat(inputs.def.n.value),
        critRes: parseFloat(inputs.critRes.n.value),
        critDmgRes: parseFloat(inputs.critDmgRes.n.value),
        atk_c: { cur: parseFloat(inputs.atkC.cur.value)/100, new: parseFloat(inputs.atkC.new.value)/100 },
        crit_c: { cur: parseFloat(inputs.critC.cur.value)/100, new: parseFloat(inputs.critC.new.value)/100 },
        critDmgAtk_c: { cur: parseFloat(inputs.critDmgAtkC.cur.value)/100, new: parseFloat(inputs.critDmgAtkC.new.value)/100 },
        def_c: { cur: parseFloat(inputs.defC.cur.value)/100, new: parseFloat(inputs.defC.new.value)/100 },
        critRes_c: { cur: parseFloat(inputs.critResC.cur.value)/100, new: parseFloat(inputs.critResC.new.value)/100 },
        critDmgRes_c: { cur: parseFloat(inputs.critDmgResC.cur.value)/100, new: parseFloat(inputs.critDmgResC.new.value)/100 },
        skill: parseFloat(inputs.skill.value) / 100,
        add: addMult,
        type: parseFloat(inputs.type.value) / 100,
        special: parseFloat(inputs.special.value) / 100,
        other: parseFloat(inputs.other.value) / 100
    };'''
    
    content = re.sub(r'    return {[\s\S]*?other: parseFloat\(inputs\.other\.value\) / 100\n    };', getValues_replace, content)

    updateUI_replace = '''
function formatImp(oldV, newV, isPct=false) {
    if (oldV === 0) return '+0.0%';
    const ratio = (newV / oldV - 1) * 100;
    const sign = ratio > 0 ? '+' : '';
    let cls = 'imp-neutral';
    if (ratio > 0) cls = 'imp-positive';
    if (ratio < 0) cls = 'imp-negative';
    return `<span class="${cls}">${sign}${ratio.toFixed(1)}%</span>`;
}

function updateUI() {
    const v = getValues();
    const oldRes = calculateAll(v);
    
    let res = oldRes;
    if (v.isCrayon) {
        let newV = { ...v };
        newV.atk = (v.atk / v.atk_c.cur) * v.atk_c.new;
        newV.crit = (v.crit / v.crit_c.cur) * v.crit_c.new;
        newV.critDmgAtk = (v.critDmgAtk / v.critDmgAtk_c.cur) * v.critDmgAtk_c.new;
        newV.def = (v.def / v.def_c.cur) * v.def_c.new;
        newV.critRes = (v.critRes / v.critRes_c.cur) * v.critRes_c.new;
        newV.critDmgRes = (v.critDmgRes / v.critDmgRes_c.cur) * v.critDmgRes_c.new;
        res = calculateAll(newV);
        
        impTexts.expected.innerHTML = formatImp(oldRes.expected, res.expected);
        impTexts.normal.innerHTML = formatImp(oldRes.normal, res.normal);
        impTexts.critDmg.innerHTML = formatImp(oldRes.crit, res.crit);
        impTexts.critRate.innerHTML = formatImp(oldRes.critRate, res.critRate, true);
    }
    
    results.normal.textContent = Math.floor(res.normal).toLocaleString();
    results.critDmg.textContent = Math.floor(res.crit).toLocaleString();
    results.expected.textContent = Math.floor(res.expected).toLocaleString();
    results.critRate.textContent = (res.critRate * 100).toFixed(1) + '%';
    
    updateChart(v.isCrayon ? { ...v, atk: (v.atk / v.atk_c.cur) * v.atk_c.new, def: (v.def / v.def_c.cur) * v.def_c.new } : v);
}
'''
    content = re.sub(r'function updateUI\(\) {[\s\S]*?updateChart\(v\);\n}', updateUI_replace.strip(), content)

    event_listeners_replace = '''
crayonToggle.addEventListener('change', (e) => {
    const display = e.target.checked ? 'grid' : 'none';
    crayonInputsDivs.forEach(el => el.style.display = display);
    const spanDisplay = e.target.checked ? 'block' : 'none';
    Object.values(impTexts).forEach(el => el.style.display = spanDisplay);
    updateUI();
});

Object.values(inputs).forEach(obj => {
    if (obj.s && obj.n) {
        syncInputs(obj.s, obj.n);
    } else if (obj.cur && obj.new) {
        obj.cur.addEventListener('input', () => { if(obj.cur.value==='') obj.cur.value=100; updateUI(); });
        obj.new.addEventListener('input', () => { if(obj.new.value==='') obj.new.value=100; updateUI(); });
    } else if (obj instanceof HTMLElement && obj.tagName === 'INPUT') {'''
    content = content.replace("Object.values(inputs).forEach(obj => {\n    if (obj.s && obj.n) {\n        syncInputs(obj.s, obj.n);\n    } else if (obj instanceof HTMLElement && obj.tagName === 'INPUT') {", event_listeners_replace.strip())

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Patched script.js")

if __name__ == "__main__":
    main()
