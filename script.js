// DOM Elements
const inputs = {
    atk: { s: document.getElementById('atk-slider'), n: document.getElementById('atk-number') },
    crit: { s: document.getElementById('crit-slider'), n: document.getElementById('crit-number') },
    critDmgAtk: { s: document.getElementById('crit-dmg-slider'), n: document.getElementById('crit-dmg-number') },
    def: { s: document.getElementById('def-slider'), n: document.getElementById('def-number') },
    critRes: { s: document.getElementById('crit-res-slider'), n: document.getElementById('crit-res-number') },
    critDmgRes: { s: document.getElementById('crit-dmg-res-slider'), n: document.getElementById('crit-dmg-res-number') },
    
    atkC: { cur: document.getElementById('atk-cur-bonus'), new: document.getElementById('atk-new-bonus') },
    critC: { cur: document.getElementById('crit-cur-bonus'), new: document.getElementById('crit-new-bonus') },
    defC: { cur: document.getElementById('def-cur-bonus'), new: document.getElementById('def-new-bonus') },
    critResC: { cur: document.getElementById('crit-res-cur-bonus'), new: document.getElementById('crit-res-new-bonus') },

    skill: document.getElementById('mult-skill-number'),
    add: document.getElementById('mult-add-number'),
    type: document.getElementById('mult-type'),
    special: document.getElementById('mult-sp-number'),
    other: document.getElementById('mult-other-number'),
    
    atkP: document.getElementById('add-atk-p'),
    critRateP: document.getElementById('add-crit-rate-p'),
    critDmgP: document.getElementById('add-crit-dmg-p'),
    defP: document.getElementById('add-def-p'),
    critResP: document.getElementById('add-crit-res-p'),
    critDmgResP: document.getElementById('add-crit-dmg-res-p'),

    atkPreset: document.getElementById('atk-preset'),
    defPreset: document.getElementById('enemy-preset'),
    dmgType: document.getElementById('main-dmg-type'),
    crayonSwitch: document.getElementById('enable-crayon'),
    skillDropdown: document.getElementById('main-skill-dropdown')
};

// Helper for Smart 100-base start
function setupSmartStart(input) {
    if (input.type !== 'number') return;

    const getBaseline = () => {
        const ph = parseFloat(input.placeholder);
        if (!isNaN(ph) && ph > 0) return ph;
        const isMultiplier = ph >= 100 || (input.id && input.id.includes('mult')) || (input.defaultValue && parseFloat(input.defaultValue) >= 100);
        return isMultiplier ? 100 : null;
    };

    let isKeyboard = false;
    input.addEventListener('keydown', (e) => {
        isKeyboard = true;
        if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && input.value === "") {
            const base = getBaseline();
            if (base !== null) {
                input.value = base;
                e.preventDefault();
            }
        }
    });

    input.addEventListener('mousedown', () => { isKeyboard = false; });

    input.addEventListener('input', (e) => {
        // Handle mouse spinners (▲▼ buttons)
        // If not from keyboard, and value changed from empty to 1 or -1
        if (!isKeyboard && (input.value === "1" || input.value === "-1")) {
            const base = getBaseline();
            if (base !== null) {
                // If the user clicked Up, start at base. If Down, start at base - 1.
                input.value = input.value === "1" ? base : base - 1;
            }
        }
    });
}
document.querySelectorAll('input[type="number"]').forEach(setupSmartStart);

const results = {
    expected: document.getElementById('res-expected'),
    normal: document.getElementById('res-normal'),
    critDmg: document.getElementById('res-crit-dmg'),
    critRate: document.getElementById('res-crit-rate')
};

const graphControls = { perspective: document.getElementById('graph-perspective'), showExpected: document.getElementById('show-expected'), showNormal: document.getElementById('show-normal'), showCrit: document.getElementById('show-crit') };
const crayonToggle = document.getElementById('enable-crayon');
const crayonInputsDivs = document.querySelectorAll('.crayon-inputs');
const impTexts = { expected: document.getElementById('imp-expected'), normal: document.getElementById('imp-normal'), critDmg: document.getElementById('imp-crit-dmg'), critRate: document.getElementById('imp-crit-rate') };

let damageChart = null;

// Formulas
function calcBaseDamageRate(atk, def) {
    const x = atk / def;
    let rate = 0;
    if (x >= 0.5) rate = 1.2 * (1 - 0.5 / (1 + (10/3) * (x - 0.5)));
    else rate = 0.6 * (1 - ((13/3) * (0.5 - x)) / (1 + (10/3) * (0.5 - x)));
    return Math.max(0.1125, Math.min(1.2, rate));
}
function calcCritRate(critAtk, critDef) {
    const x = critAtk / critDef;
    let rate = 0;
    if (x >= 1.0) rate = 0.30 + 0.50 * ((x - 1) / (x + 2));
    else rate = 0.05 + 0.25 * (x / (2 - x));
    return Math.max(0.05, Math.min(0.8, rate));
}
function calcCritMultiplier(critAtk, critDmgRes) {
    const x = critAtk / critDmgRes;
    let mult = 0;
    if (x >= 1.0) mult = 1.75 + 0.85 * (x - 1) / (x + 2);
    else mult = 1.75 - 1.10 * (1 - x) / (2 - x);
    return Math.max(1.2, Math.min(2.5, mult));
}

function getValues() {
    const rawAdd = parseFloat(inputs.add?.value || 100);
    let addMult = (rawAdd === 0 ? 0 : rawAdd) / 100;
    if (addMult < 0.2 && addMult !== 0) addMult = 0.2;
    const getBonus = (key) => ({ cur: 1.0 + (parseFloat(inputs[key]?.cur?.value) || 0)/100, new: 1.0 + (parseFloat(inputs[key]?.new?.value) || 0)/100 });
    return {
        isCrayon: crayonToggle.checked, atk: parseFloat(inputs.atk.n.value) || 0, crit: parseFloat(inputs.crit.n.value) || 0, critDmgAtk: parseFloat(inputs.critDmgAtk.n.value) || 0, def: parseFloat(inputs.def.n.value) || 0, critRes: parseFloat(inputs.critRes.n.value) || 0, critDmgRes: parseFloat(inputs.critDmgRes.n.value) || 0,
        atk_c: getBonus('atkC'), crit_c: getBonus('critC'), critDmgAtk_c: getBonus('critC'), def_c: getBonus('defC'), critRes_c: getBonus('critResC'), critDmgRes_c: getBonus('critResC'),
        skill: (parseFloat(inputs.skill?.value) === 0 ? 0 : (parseFloat(inputs.skill?.value) || 100)) / 100, add: addMult, type: (parseFloat(inputs.type?.value) === 0 ? 0 : (parseFloat(inputs.type?.value) || 100)) / 100, special: (parseFloat(inputs.special?.value) === 0 ? 0 : (parseFloat(inputs.special?.value) || 100)) / 100, other: (parseFloat(inputs.other?.value) === 0 ? 0 : (parseFloat(inputs.other?.value) || 100)) / 100,
        atkP: parseFloat(inputs.atkP?.value) || 0, critRateP: parseFloat(inputs.critRateP?.value) || 0, critDmgP: parseFloat(inputs.critDmgP?.value) || 0, defP: parseFloat(inputs.defP?.value) || 0, critResP: parseFloat(inputs.critResP?.value) || 0, critDmgResP: parseFloat(inputs.critDmgResP?.value) || 0
    };
}
function calculateAll(v) {
    const finalAtk = v.atk * (1 + v.atkP / 100); const finalDef = v.def * (1 + v.defP / 100); const rate = calcBaseDamageRate(finalAtk, finalDef); const baseDamage = finalAtk * rate; const normalDamage = baseDamage * v.skill * v.add * v.type * v.special * v.other;
    const baseCritRate = calcCritRate(v.crit, v.critRes); const finalCritRate = Math.max(0.05, Math.min(0.8, baseCritRate + (v.critRateP - v.critResP) / 100));
    const baseCritMult = calcCritMultiplier(v.critDmgAtk, v.critDmgRes); const finalCritMult = Math.max(1.2, Math.min(2.5, baseCritMult + (v.critDmgP - v.critDmgResP) / 100));
    const criticalDamage = normalDamage * finalCritMult; const expectedDamage = normalDamage * (1 - finalCritRate) + criticalDamage * finalCritRate;
    return { normal: normalDamage, crit: criticalDamage, expected: expectedDamage, critRate: finalCritRate };
}
function formatImp(oldV, newV) { if (oldV === 0) return '+0.0%'; const ratio = (newV / oldV - 1) * 100; const sign = ratio > 0 ? '+' : ''; let cls = ratio > 0 ? 'imp-positive' : (ratio < 0 ? 'imp-negative' : 'imp-neutral'); return `<span class="${cls}">${sign}${ratio.toFixed(1)}%</span>`; }
function shortenNumber(v) {
    if (Math.abs(v) >= 1e9) return (v / 1e9).toFixed(1).replace(/\.0$/, '') + 'G';
    if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (Math.abs(v) >= 1e3) return (v / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
    return v;
}
function updateUI() {
    const v = getValues(); const oldRes = calculateAll(v); let res = oldRes; let newV = null;
    if (v.isCrayon) {
        newV = { ...v }; 
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
        
        // Show corrected stats
        document.getElementById('crayon-stats-display').style.display = 'block';
        document.getElementById('corr-atk').textContent = Math.floor(newV.atk).toLocaleString();
        document.getElementById('corr-crit').textContent = Math.floor(newV.crit).toLocaleString();
        document.getElementById('corr-crit-dmg').textContent = Math.floor(newV.critDmgAtk).toLocaleString();
        document.getElementById('corr-def').textContent = Math.floor(newV.def).toLocaleString();
        document.getElementById('corr-crit-res').textContent = Math.floor(newV.critRes).toLocaleString();
        document.getElementById('corr-crit-dmg-res').textContent = Math.floor(newV.critDmgRes).toLocaleString();
    } else {
        document.getElementById('crayon-stats-display').style.display = 'none';
    }
    results.normal.textContent = Math.floor(res.normal).toLocaleString(); results.critDmg.textContent = Math.floor(res.crit).toLocaleString(); results.expected.textContent = Math.floor(res.expected).toLocaleString(); results.critRate.textContent = (res.critRate * 100).toFixed(1) + '%';
    updateChart(v.isCrayon ? newV : v);
}
function updateChart(v) {
    const isAttacker = graphControls.perspective.value === 'attacker'; const expectedData = []; const normalData = []; const critData = []; const pointColors = []; const pointRadii = []; let currentVal = isAttacker ? v.atk : v.def; let baseParam = isAttacker ? v.def : v.atk;
    let minRange = baseParam * 0.1, maxRange = baseParam * 3; if (currentVal < minRange) minRange = currentVal * 0.8; if (currentVal > maxRange) maxRange = currentVal * 1.2;
    let step = (maxRange - minRange) / 50, xValues = []; for (let i = minRange; i <= maxRange + step * 0.01; i += step) xValues.push(i);
    xValues.push(currentVal); xValues.push(minRange); xValues.push(maxRange); xValues.sort((a, b) => a - b); xValues = xValues.filter((item, pos, ary) => !pos || item - ary[pos - 1] > step * 0.01);
    for (let i of xValues) {
        let testV = { ...v }; if (isAttacker) testV.atk = i; else testV.def = i;
        let res = calculateAll(testV); expectedData.push({ x: i, y: res.expected }); normalData.push({ x: i, y: res.normal }); critData.push({ x: i, y: res.crit });
        if (Math.abs(i - currentVal) < step * 0.01) { pointColors.push('#fff'); pointRadii.push(6); } else { pointColors.push('transparent'); pointRadii.push(0); }
    }
    const datasets = [];
    if (graphControls.showNormal.checked) datasets.push({ label: '通常ダメージ', data: normalData, borderColor: '#94a3b8', tension: 0.4, pointBackgroundColor: pointColors, pointRadius: pointRadii });
    if (graphControls.showExpected.checked) datasets.push({ label: '期待値', data: expectedData, borderColor: '#6366f1', borderDash: [5, 5], backgroundColor: 'rgba(99, 102, 241, 0.1)', fill: true, tension: 0.4, pointBackgroundColor: pointColors, pointRadius: pointRadii });
    if (graphControls.showCrit.checked) datasets.push({ label: '会心ダメージ', data: critData, borderColor: '#ec4899', borderDash: [5, 5], tension: 0.4, pointBackgroundColor: pointColors, pointRadius: pointRadii });
    if (damageChart) damageChart.destroy();
    const ctx = document.getElementById('damageChart').getContext('2d');
    damageChart = new Chart(ctx, {
        type: 'line', data: { datasets },
        options: {
            animation: false, responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            plugins: { legend: { labels: { color: '#f8fafc' } } },
            scales: {
                x: { type: 'linear', min: minRange, max: maxRange, title: { display: true, text: isAttacker ? '攻撃力' : '防御力', color: '#94a3b8' }, ticks: { color: '#94a3b8', callback: v => shortenNumber(Math.round(v)) }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                y: { title: { display: true, text: 'ダメージ', color: '#94a3b8' }, ticks: { color: '#94a3b8', callback: v => shortenNumber(Math.round(v)) }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
            }
        }
    });
}
function syncInputs(slider, number) { slider.addEventListener('input', () => { number.value = slider.value; updateUI(); }); number.addEventListener('input', () => { slider.value = number.value || 0; updateUI(); }); }
crayonToggle.addEventListener('change', (e) => { const display = e.target.checked ? 'grid' : 'none'; crayonInputsDivs.forEach(el => el.style.display = display); Object.values(impTexts).forEach(el => el.style.display = e.target.checked ? 'block' : 'none'); updateUI(); });
Object.values(inputs).forEach(obj => { 
    if (obj.s && obj.n) syncInputs(obj.s, obj.n); 
    else if (obj.cur && obj.new) { 
        let lastCur = obj.cur.value;
        obj.cur.addEventListener('input', () => {
            // If 'new' was perfectly following 'lastCur', keep following the new value
            if (obj.new.value === lastCur || obj.new.value === "" || obj.new.value === "0") {
                obj.new.value = obj.cur.value;
            }
            lastCur = obj.cur.value;
            updateUI();
        });
        obj.new.addEventListener('input', () => {
            updateUI();
            // Once user touches 'new', it will naturally diverge from lastCur, stopping the sync.
        }); 
    } 
    else if (obj instanceof HTMLElement && obj.tagName === 'INPUT') obj.addEventListener('input', updateUI); 
});
inputs.type.addEventListener('change', updateUI); Object.values(graphControls).forEach(ctrl => ctrl.addEventListener('change', updateUI));
function getDamageType() { return inputs.dmgType.value; }
function setDamageType(type) { inputs.dmgType.value = type; }

const enemyPhaseDropdown = document.getElementById('enemy-phase');
const enemyPhaseGroup = document.getElementById('enemy-phase-group');
const atkPhaseDropdown = document.getElementById('atk-phase');
const atkPhaseGroup = document.getElementById('atk-phase-group');

function toggleHighlight(inputObj, isHighlighted) {
    if (!inputObj) return;
    if (inputObj.n) {
        inputObj.n.classList.toggle('highlight-preset', isHighlighted);
        if (inputObj.s) inputObj.s.classList.toggle('highlight-preset', isHighlighted);
    } else {
        inputObj.classList.toggle('highlight-preset', isHighlighted);
    }
}

function applyPreset(side, key, skipDmgTypeOverride = false) {
    const group = side === 'atk' ? atkPhaseGroup : enemyPhaseGroup;
    const dropdown = side === 'atk' ? atkPhaseDropdown : enemyPhaseDropdown;

    if (!key || !ENEMY_PRESETS[key]) {
        // When no preset is selected (manual input), reset UI
        group.style.display = 'none';
        dropdown.dataset.currentPreset = '';
        if (side === 'atk') {
            toggleHighlight(inputs.atk, false);
            toggleHighlight(inputs.crit, false);
            toggleHighlight(inputs.critDmgAtk, false);
            inputs.special.value = 100;
            toggleHighlight(inputs.special, false);
            toggleHighlight(inputs.dmgType, false);
        } else {
            toggleHighlight(inputs.def, false);
            toggleHighlight(inputs.critRes, false);
            toggleHighlight(inputs.critDmgRes, false);
            inputs.add.value = 100;
            inputs.add.dataset.weaknessAdd = 0;
            toggleHighlight(inputs.add, false);
        }
        return;
    }

    const data = ENEMY_PRESETS[key]; 
    
    let isDmgTypeForced = false;
    if (side === 'atk' && data.dmgType && !skipDmgTypeOverride) {
        setDamageType(data.dmgType);
        isDmgTypeForced = true;
    }
    const type = getDamageType();
    
    if (side === 'atk') {
        toggleHighlight(inputs.dmgType, isDmgTypeForced);
    }
    
    let phaseMult = 1.0;
    let phaseScaleStats = [];

    if (data.phases && data.phases.length > 0) {
        group.style.display = 'block';
        if (dropdown.dataset.currentPreset !== key) {
            dropdown.innerHTML = '';
            data.phases.forEach((p, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.textContent = p.name;
                dropdown.appendChild(opt);
            });
            dropdown.dataset.currentPreset = key;
            dropdown.selectedIndex = 0;
        }
        const activePhase = data.phases[dropdown.selectedIndex] || data.phases[0];
        phaseMult = activePhase.mult;
        phaseScaleStats = activePhase.scaleStats || [];
    } else {
        group.style.display = 'none';
        dropdown.dataset.currentPreset = '';
    }

    const applyPhase = (statName, val, inputObj) => {
        const isModified = phaseScaleStats.includes(statName) && phaseMult !== 1.0;
        toggleHighlight(inputObj, isModified);
        if (isModified) {
            return Math.floor(val * phaseMult);
        }
        return val;
    };

    if (side === 'atk') { 
        setInputValue(inputs.atk, applyPhase('atk_' + (type === 'phys' ? 'p' : 'm'), type === 'phys' ? data.atk_p : data.atk_m, inputs.atk)); 
        setInputValue(inputs.crit, applyPhase('crit', data.crit, inputs.crit)); 
        setInputValue(inputs.critDmgAtk, applyPhase('critDmg', data.critDmg, inputs.critDmgAtk)); 
        
        if (data.special !== undefined && data.special !== 100) {
            inputs.special.value = data.special;
            toggleHighlight(inputs.special, true);
        } else {
            inputs.special.value = 100;
            toggleHighlight(inputs.special, false);
        }
    }
    else { 
        setInputValue(inputs.def, applyPhase('def_' + (type === 'phys' ? 'p' : 'm'), type === 'phys' ? data.def_p : data.def_m, inputs.def)); 
        setInputValue(inputs.critRes, applyPhase('critRes', data.critRes, inputs.critRes)); 
        setInputValue(inputs.critDmgRes, applyPhase('critDmgRes', data.critDmgRes, inputs.critDmgRes)); 
        
        let isWeak = false;
        let prevWeakness = parseFloat(inputs.add.dataset.weaknessAdd) || 0;
        let baseAdd = (parseFloat(inputs.add.value) || 100) - prevWeakness;
        let newWeakness = 0;

        if (data.weakness && data.weakness[type]) {
            if (data.weakness[type].add !== undefined) {
                newWeakness = data.weakness[type].add;
                isWeak = true;
            }
        }
        
        inputs.add.value = baseAdd + newWeakness;
        inputs.add.dataset.weaknessAdd = newWeakness;
        toggleHighlight(inputs.add, isWeak);
    }
    updateUI();
    if (side === 'atk') updateMainSkillList();
}
inputs.atkPreset.addEventListener('change', (e) => applyPreset('atk', e.target.value)); inputs.defPreset.addEventListener('change', (e) => applyPreset('def', e.target.value));
enemyPhaseDropdown.addEventListener('change', () => applyPreset('def', inputs.defPreset.value));
atkPhaseDropdown.addEventListener('change', () => applyPreset('atk', inputs.atkPreset.value));
inputs.dmgType.addEventListener('change', () => { 
    toggleHighlight(inputs.dmgType, false);
    applyPreset('atk', inputs.atkPreset.value, true); 
    applyPreset('def', inputs.defPreset.value, true); 
    updateUI(); 
});

function updateMainSkillList() {
    const key = inputs.atkPreset.value;
    const select = inputs.skillDropdown;
    if (!select) return;
    select.innerHTML = '<option value="" hidden>リスト</option><option value="100">100%</option>';
    select.value = ""; // 表面を「リスト」にする
    if (key && ENEMY_PRESETS[key] && ENEMY_PRESETS[key].skills) {
        ENEMY_PRESETS[key].skills.forEach(s => {
            const opt = document.createElement('option'); opt.value = s.mult; opt.textContent = `${s.name} (${s.mult}%)`;
            select.appendChild(opt);
        });
    }
}
inputs.skillDropdown.addEventListener('change', (e) => {
    if (e.target.value !== "") {
        inputs.skill.value = e.target.value;
        updateUI();
        e.target.value = ""; // 表示を「リスト」に戻す
    }
});
function setInputValue(inputPair, value) { if (inputPair.s && inputPair.n) { inputPair.s.value = value; inputPair.n.value = value; } }

// --- Estimator Logic ---
const estimator = {
    mode: document.getElementById('est-mode'), samplesList: document.getElementById('samples-list'), addBtn: document.getElementById('add-sample-btn'), output: document.getElementById('est-output'), headerRow: document.getElementById('samples-header-row'),
    common: { add: document.getElementById('est-common-add'), critAdd: document.getElementById('est-common-crit-add'), critRes: document.getElementById('est-common-crit-res'), type: document.getElementById('est-common-type'), other: document.getElementById('est-common-other') }
};
let estCommonStats = {
    'atk-side': { add: '100', type: '100', other: '100', critAdd: '0', critRes: '0' },
    'def-side': { add: '100', type: '100', other: '100', critAdd: '0', critRes: '0' }
};
document.querySelectorAll('.tab-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active')); btn.classList.add('active'); document.getElementById('tab-' + btn.dataset.tab).classList.add('active'); saveState(); }); });
function createSampleRow() {
    const mode = estimator.mode.value; const row = document.createElement('div'); row.className = 'sample-row';
    let mainHtml = mode === 'atk-side' ? `<input type="number" placeholder="自攻撃力" class="est-atk"><input type="number" placeholder="自会心DMG" class="est-crit-stat"><input type="number" placeholder="スキル%" class="est-skill" value="100"><input type="number" placeholder="通常ダメ" class="est-dmg"><input type="number" placeholder="会心ダメ" class="est-crit-dmg">` : `<input type="number" placeholder="自防御力" class="est-def"><input type="number" placeholder="自会心抵抗" class="est-crit-res"><input type="number" placeholder="スキル%" class="est-skill-enemy"><input type="number" placeholder="被ダメ" class="est-dmg-taken"><input type="number" placeholder="会心被ダメ" class="est-crit-taken">`;
    row.innerHTML = `<div class="sample-row-top"><div class="sample-main-inputs">${mainHtml}</div><div class="sample-actions"><button class="btn-detail">+</button><button class="btn-remove">×</button></div></div><div class="sample-detail-inputs collapsed"><div class="detail-grid"><div class="detail-item"><label>与被%</label><input type="number" class="ov-add" placeholder="${estimator.common.add.value}"></div><div class="detail-item"><label>相性%</label><select class="ov-type"><option value=""></option><option value="50">50</option><option value="75">75</option><option value="100">100</option><option value="150">150</option><option value="200">200</option></select></div><div class="detail-item"><label>他%</label><input type="number" class="ov-other" placeholder="${estimator.common.other.value}"></div><div class="detail-item"><label>会増%</label><input type="number" class="ov-crit-add" placeholder="${estimator.common.critAdd.value}"></div><div class="detail-item"><label>会減%</label><input type="number" class="ov-crit-res" placeholder="${estimator.common.critRes.value}"></div></div></div>`;
    row.querySelector('.btn-remove').addEventListener('click', () => { row.remove(); runEstimation(); saveState(); });
    row.querySelector('.btn-detail').addEventListener('click', () => { const detail = row.querySelector('.sample-detail-inputs'); detail.classList.toggle('collapsed'); row.querySelector('.btn-detail').textContent = detail.classList.contains('collapsed') ? '+' : '−'; });
    row.querySelectorAll('input, select').forEach(input => { input.addEventListener('input', () => { debouncedRunEstimation(); saveState(); }); if (input.tagName === 'INPUT') setupSmartStart(input); });
    const typeSelect = row.querySelector('.ov-type');
    if (typeSelect) {
        typeSelect.options[0].textContent = estimator.common.type.value;
        typeSelect.style.color = typeSelect.value === "" ? "var(--placeholder-gray)" : "var(--text-main)";
        typeSelect.addEventListener('change', () => { typeSelect.style.color = typeSelect.value === "" ? "var(--placeholder-gray)" : "var(--text-main)"; });
    }
    row.dataset.mode = estimator.mode.value;
    return row;
}
estimator.addBtn.addEventListener('click', () => { estimator.samplesList.appendChild(createSampleRow()); saveState(); });
function updateHeaders() { 
    const mode = estimator.mode.value; 
    const labels = mode === 'atk-side' ? 
        ['自攻撃力', '自会心DMG', 'スキル%', '通常ダメ', '会心ダメ'] : 
        ['自防御力', '自会心抵抗', 'スキル%', '被ダメ', '会心被ダメ'];
    
    estimator.headerRow.innerHTML = `
        <div class="sample-row-header-spacer">
            ${labels.map(l => `<span>${l}</span>`).join('')}
        </div>
        <div class="sample-row-header-actions"></div>
    `; 
}
estimator.mode.addEventListener('change', () => {
    updateHeaders();
    const mode = estimator.mode.value;
    const stats = estCommonStats[mode];
    Object.entries(stats).forEach(([k, v]) => { if (estimator.common[k]) estimator.common[k].value = v; });
    estimator.samplesList.querySelectorAll('.sample-row').forEach(row => {
        row.style.display = row.dataset.mode === mode ? 'block' : 'none';
        if (row.dataset.mode === mode) {
            if (row.querySelector('.ov-add')) row.querySelector('.ov-add').placeholder = estimator.common.add.value;
            if (row.querySelector('.ov-other')) row.querySelector('.ov-other').placeholder = estimator.common.other.value;
            if (row.querySelector('.ov-crit-add')) row.querySelector('.ov-crit-add').placeholder = estimator.common.critAdd.value;
            if (row.querySelector('.ov-crit-res')) row.querySelector('.ov-crit-res').placeholder = estimator.common.critRes.value;
        }
    });
    if (Array.from(estimator.samplesList.querySelectorAll('.sample-row')).filter(r => r.dataset.mode === mode).length === 0) {
        estimator.samplesList.appendChild(createSampleRow());
    }
    runEstimation();
    saveState();
});
Object.entries(estimator.common).forEach(([key, input]) => { 
    input.addEventListener('input', () => { 
        estCommonStats[estimator.mode.value][key] = input.value;
        debouncedRunEstimation(); saveState(); 
        estimator.samplesList.querySelectorAll('.sample-row').forEach(row => { 
            if (row.dataset.mode === estimator.mode.value) {
                if (row.querySelector('.ov-add')) row.querySelector('.ov-add').placeholder = estimator.common.add.value; 
                if (row.querySelector('.ov-other')) row.querySelector('.ov-other').placeholder = estimator.common.other.value; 
                if (row.querySelector('.ov-crit-add')) row.querySelector('.ov-crit-add').placeholder = estimator.common.critAdd.value; 
                if (row.querySelector('.ov-crit-res')) row.querySelector('.ov-crit-res').placeholder = estimator.common.critRes.value; 
                const typeSelect = row.querySelector('.ov-type');
                if (typeSelect) typeSelect.options[0].textContent = estimator.common.type.value;
            }
        }); 
    }); 
});
function runEstimation() {
    const mode = estimator.mode.value, common = { add: (parseFloat(estimator.common.add.value) || 100) / 100, critAdd: (parseFloat(estimator.common.critAdd.value) || 0) / 100, critRes: (parseFloat(estimator.common.critRes.value) || 0) / 100, type: (parseFloat(estimator.common.type.value) || 100) / 100, other: (parseFloat(estimator.common.other.value) || 100) / 100 };
    const rows = Array.from(estimator.samplesList.querySelectorAll('.sample-row')).filter(r => r.dataset.mode === mode); if (rows.length === 0) return; if (mode === 'atk-side') estimateAtkSide(rows, common); else estimateDefSide(rows, common);
}
let _estTimer = null;
function debouncedRunEstimation() {
    if (_estTimer) clearTimeout(_estTimer);
    _estTimer = setTimeout(() => { runEstimation(); _estTimer = null; }, 300);
}
estimator.output.addEventListener('click', (e) => {
    if (e.target.classList.contains('est-detail-toggle')) {
        const row = e.target.closest('.est-result-row');
        const details = row.querySelector('.est-result-details');
        details.classList.toggle('collapsed');
        e.target.textContent = details.classList.contains('collapsed') ? '+' : '−';
    }
});

// Cluster Logic
function findClusters(items, tolerance) {
    let clusters = [];
    for (let item of items) {
        let placed = false;
        for (let c of clusters) {
            if (Math.abs(c.center - item.val) <= tolerance) {
                c.items.push(item);
                c.center = c.items.reduce((a, b) => a + b.val, 0) / c.items.length;
                placed = true;
                break;
            }
        }
        if (!placed) clusters.push({ center: item.val, items: [item] });
    }
    clusters.sort((a, b) => b.items.length - a.items.length || a.center - b.center);
    return clusters;
}

function findBestSkillCluster(skills, tolerance) {
    let best = [];
    for (let i = 0; i < skills.length; i++) {
        let cluster = [skills[i]];
        for (let j = 0; j < skills.length; j++) {
            if (i === j) continue;
            if (Math.abs(skills[i].val - skills[j].val) / (skills[i].val || 1) <= tolerance) cluster.push(skills[j]);
        }
        if (cluster.length > best.length) best = cluster;
        else if (cluster.length === best.length && cluster.length > 0) {
            const getDiff = (c) => Math.max(...c.map(s=>s.val)) - Math.min(...c.map(s=>s.val));
            if (getDiff(cluster) < getDiff(best)) best = cluster;
        }
    }
    return best;
}

function solveDefRange(atk, skill, dmg, common) {
    const mult = skill * common.add * common.type * common.other; let fMin = 1, fMax = 1000000, l = 1, h = 1000000;
    while (l <= h) { let mid = Math.floor((l + h) / 2); if (Math.floor(atk * calcBaseDamageRate(atk, mid) * mult) >= dmg) { fMax = mid; l = mid + 1; } else h = mid - 1; }
    l = 1, h = 1000000; while (l <= h) { let mid = Math.floor((l + h) / 2); if (Math.floor(atk * calcBaseDamageRate(atk, mid) * mult) <= dmg) { fMin = mid; h = mid - 1; } else l = mid + 1; }
    return { min: fMin, max: fMax };
}
function solveCritResRange(critStat, normDmg, critDmg, common) {
    let fMin = 1, fMax = 1000000, l = 1, h = 1000000;
    while (l <= h) { let mid = Math.floor((l + h) / 2); const testMult = calcCritMultiplier(critStat, mid) + common.critAdd - common.critRes; if (Math.floor(normDmg * testMult) >= critDmg) { fMax = mid; l = mid + 1; } else h = mid - 1; }
    l = 1, h = 1000000; while (l <= h) { let mid = Math.floor((l + h) / 2); const testMult = calcCritMultiplier(critStat, mid) + common.critAdd - common.critRes; if (Math.floor(normDmg * testMult) <= critDmg) { fMin = mid; h = mid - 1; } else l = mid + 1; }
    return { min: fMin, max: fMax };
}
function getRowCommon(row, globalCommon) { const getVal = (cls, gVal) => { const input = row.querySelector('.' + cls); return (input && input.value !== "") ? (parseFloat(input.value) || 0) / 100 : gVal; }; return { add: getVal('ov-add', globalCommon.add), type: getVal('ov-type', globalCommon.type), other: getVal('ov-other', globalCommon.other), critAdd: getVal('ov-crit-add', globalCommon.critAdd), critRes: getVal('ov-crit-res', globalCommon.critRes) }; }
function formatResultRow(label, value, detailsHtml = "") { 
    return `
    <div class="est-result-row">
        <div class="est-result-main">
            <span class="est-result-label">${label}</span>
            <div class="est-result-value">
                ${value}
                ${detailsHtml ? '<button class="est-detail-toggle">+</button>' : ''}
            </div>
        </div>
        ${detailsHtml ? `<div class="est-result-details collapsed">${detailsHtml}</div>` : ''}
    </div>`;
}

function estimateAtkSide(rows, common) {
    let defs = [], reses = [];
    rows.forEach((row, idx) => {
        const label = `サンプル ${idx + 1}`;
        const rowCommon = getRowCommon(row, common), atk = parseFloat(row.querySelector('.est-atk').value), critStat = parseFloat(row.querySelector('.est-crit-stat').value), skill = (parseFloat(row.querySelector('.est-skill').value) || 100) / 100, dmg = parseFloat(row.querySelector('.est-dmg').value), cDmg = parseFloat(row.querySelector('.est-crit-dmg').value);
        if (atk && dmg) { const r = solveDefRange(atk, skill, dmg, rowCommon); defs.push({ val: (r.min + r.max) / 2, label }); }
        if (critStat && dmg && cDmg) { const r = solveCritResRange(critStat, dmg, cDmg, rowCommon); reses.push({ val: (r.min + r.max) / 2, label }); }
    });
    let out = "";
    if (defs.length > 0) {
        const clusters = findClusters(defs, 50);
        out += `<div class="est-candidate-header">敵の防御力 候補</div>`;
        clusters.slice(0, 3).forEach((c, i) => {
            const detailsHtml = c.items.map(it => `<div><span>${it.label}</span><span>約 ${Math.floor(it.val).toLocaleString()}</span></div>`).join('');
            out += formatResultRow(`候補 ${i + 1}`, `約 ${Math.floor(c.center).toLocaleString()} <span style="color:#94a3b8; font-size:0.9em; margin-left:8px;">(${c.items.length}件一致)</span>`, detailsHtml);
        });
    }
    if (reses.length > 0) {
        const clusters = findClusters(reses, 50);
        out += `<div class="est-candidate-header">敵の会心DMG抵抗 候補</div>`;
        clusters.slice(0, 3).forEach((c, i) => {
            const detailsHtml = c.items.map(it => `<div><span>${it.label}</span><span>約 ${Math.floor(it.val).toLocaleString()}</span></div>`).join('');
            out += formatResultRow(`候補 ${i + 1}`, `約 ${Math.floor(c.center).toLocaleString()} <span style="color:#94a3b8; font-size:0.9em; margin-left:8px;">(${c.items.length}件一致)</span>`, detailsHtml);
        });
    }
    estimator.output.innerHTML = out || `<div class="est-result-label">データを入力してください</div>`;
}

function estimateDefSide(rows, common) {
    const samples = rows.map((r, idx) => { const rowCommon = getRowCommon(r, common); return { label: `サンプル ${idx + 1}`, def: parseFloat(r.querySelector('.est-def').value), critRes: parseFloat(r.querySelector('.est-crit-res').value), skill: (parseFloat(r.querySelector('.est-skill-enemy').value) || 0) / 100, dmg: parseFloat(r.querySelector('.est-dmg-taken').value), cDmg: parseFloat(r.querySelector('.est-crit-taken').value), common: rowCommon }; }).filter(s => s.def && s.dmg);
    if (samples.length < 1) return; let atkResultHtml = ""; const allSkillKnown = samples.every(s => s.skill > 0);
    if (allSkillKnown) {
        let atks = [];
        for (const s of samples) {
            const mult = s.skill * s.common.add * s.common.type * s.common.other; let l = 1, h = 2000000, fMin = 1, fMax = 2000000;
            while (l <= h) { let mid = Math.floor((l + h) / 2); if (Math.floor(mid * calcBaseDamageRate(mid, s.def) * mult) <= s.dmg) { fMin = mid; l = mid + 1; } else h = mid - 1; }
            l = 1, h = 2000000; while (l <= h) { let mid = Math.floor((l + h) / 2); if (Math.floor(mid * calcBaseDamageRate(mid, s.def) * mult) >= s.dmg) { fMax = mid; h = mid - 1; } else l = mid + 1; }
            atks.push({ val: (fMin + fMax) / 2, label: s.label });
        }
        const clusters = findClusters(atks, 50);
        atkResultHtml += `<div class="est-candidate-header">敵の攻撃力 候補</div>`;
        clusters.slice(0, 3).forEach((c, i) => {
            const detailsHtml = c.items.map(it => `<div><span>${it.label}</span><span>約 ${Math.floor(it.val).toLocaleString()}</span></div>`).join('');
            atkResultHtml += formatResultRow(`候補 ${i + 1}`, `約 ${Math.floor(c.center).toLocaleString()} <span style="color:#94a3b8; font-size:0.9em; margin-left:8px;">(${c.items.length}件一致)</span>`, detailsHtml);
        });
    } else if (samples.length >= 2) {
        let candidates = [];
        const evalSkills = (atk, tol) => {
            const skills = samples.map(s => {
                const rate = calcBaseDamageRate(atk, s.def);
                if (rate <= 0.0001) return null;
                return { val: s.dmg / (atk * rate * s.common.add * s.common.type * s.common.other), label: s.label };
            });
            if (skills.includes(null)) return null;
            const cluster = findBestSkillCluster(skills, tol);
            if (cluster.length < 2) return null;
            const vals = cluster.map(s => s.val);
            const avg = vals.reduce((a, b) => a + b) / vals.length;
            const rel = (Math.max(...vals) - Math.min(...vals)) / (avg || 1);
            return { atk, rel, skill: avg, skills: cluster, count: cluster.length, total: samples.length };
        };

        // Pass 1: coarse scan (step 2000) — ~125 iters
        const roughHits = [];
        for (let atk = 1000; atk <= 250000; atk += 2000) {
            if (evalSkills(atk, 0.08)) roughHits.push(atk);
        }

        // Pass 2: medium scan (step 50) around rough hits — ~40 iters each
        const medHits = [];
        const medSeen = new Set();
        for (const rough of roughHits) {
            for (let atk = rough - 2000; atk <= rough + 2000; atk += 50) {
                if (atk < 1000 || atk > 250000 || medSeen.has(atk)) continue;
                medSeen.add(atk);
                if (evalSkills(atk, 0.06)) medHits.push(atk);
            }
        }

        // Deduplicate medium hits (merge within 500)
        const dedupMed = [];
        for (const atk of medHits) {
            if (!dedupMed.some(a => Math.abs(a - atk) < 500)) dedupMed.push(atk);
        }

        // Pass 3: fine scan (step 1) ±200 around each dedup'd medium hit — ~400 iters each
        for (const med of dedupMed) {
            let best = null;
            for (let atk = Math.max(1000, med - 200); atk <= Math.min(250000, med + 200); atk++) {
                const r = evalSkills(atk, 0.05);
                if (!r) continue;
                if (!best || r.count > best.count || (r.count === best.count && r.rel < best.rel)) best = r;
            }
            if (!best) continue;
            const existing = candidates.find(c => Math.abs(c.atk - best.atk) < 500 && c.count === best.count);
            if (existing) { if (best.rel < existing.rel) Object.assign(existing, best); }
            else candidates.push(best);
        }
        if (candidates.length > 0) {
            atkResultHtml += `<div class="est-candidate-header">敵の攻撃力 / スキル倍率 候補</div>`;
            candidates.sort((a, b) => b.count - a.count || a.rel - b.rel).slice(0, 3).forEach((c, i) => {
                const detailsHtml = samples.map(s => {
                    const inCluster = c.skills.find(cs => cs.label === s.label);
                    const style = inCluster ? '' : 'style="opacity:0.5; text-decoration:line-through;"';
                    const rate = calcBaseDamageRate(c.atk, s.def);
                    const val = s.dmg / (c.atk * rate * s.common.add * s.common.type * s.common.other);
                    return `<div ${style}><span>${s.label}</span><span>攻撃力 ${c.atk.toLocaleString()} / 倍率 ${(val * 100).toFixed(2)}%</span></div>`;
                }).join('');
                const valueHtml = `攻撃力 約 ${c.atk.toLocaleString()} / スキル倍率 約 ${(c.skill * 100).toFixed(1)}% <span style="color:#94a3b8; font-size:0.85em; margin-left:8px;">(${c.count}/${c.total}件一致)</span>`;
                atkResultHtml += formatResultRow(`候補 ${i + 1}`, valueHtml, detailsHtml);
            });
        } else atkResultHtml = formatResultRow("敵の攻撃力", "候補なし (一致データ不足)");
    } else atkResultHtml = formatResultRow("敵の攻撃力", "データ不足");
    
    let critResultHtml = ""; const critSamples = samples.filter(s => s.critRes && s.cDmg);
    if (critSamples.length > 0) {
        let reses = [];
        for (const s of critSamples) {
            let l = 1, h = 1000000, fMin = 1, fMax = 1000000;
            while (l <= h) { let mid = Math.floor((l + h) / 2); const testMult = calcCritMultiplier(mid, s.critRes) + s.common.critAdd - s.common.critRes; if (Math.floor(s.dmg * testMult) <= s.cDmg) { fMin = mid; l = mid + 1; } else h = mid - 1; }
            l = 1, h = 1000000; while (l <= h) { let mid = Math.floor((l + h) / 2); const testMult = calcCritMultiplier(mid, s.critRes) + s.common.critAdd - s.common.critRes; if (Math.floor(s.dmg * testMult) >= s.cDmg) { fMax = mid; h = mid - 1; } else l = mid + 1; }
            reses.push({ val: (fMin + fMax) / 2, label: s.label });
        }
        const clusters = findClusters(reses, 50);
        critResultHtml += `<div class="est-candidate-header">敵の会心DMG(ステ) 候補</div>`;
        clusters.slice(0, 3).forEach((c, i) => {
            const detailsHtml = c.items.map(it => `<div><span>${it.label}</span><span>約 ${Math.floor(it.val).toLocaleString()}</span></div>`).join('');
            critResultHtml += formatResultRow(`候補 ${i + 1}`, `約 ${Math.floor(c.center).toLocaleString()} <span style="color:#94a3b8; font-size:0.9em; margin-left:8px;">(${c.items.length}件一致)</span>`, detailsHtml);
        });
    }
    estimator.output.innerHTML = atkResultHtml + critResultHtml;
}

// --- Persistence Logic ---
const STORAGE_KEY = 'trickcal_calc_state_v1.7';
function saveState() {
    const state = { main: {}, estCommon: {}, estMode: estimator.mode.value, samples: [], tab: document.querySelector('.tab-btn.active').dataset.tab, dmgType: inputs.dmgType.value, crayon: inputs.crayonSwitch.checked };
    Object.entries(inputs).forEach(([key, obj]) => { 
        if (key === 'skillDropdown') return; // リストボタンの状態は保存しない
        if (obj.n) state.main[key] = obj.n.value; 
        else if (obj.cur) state.main[key] = { cur: obj.cur.value, new: obj.new.value }; 
    });
    ['skill', 'add', 'special', 'other', 'atkP', 'critRateP', 'critDmgP', 'defP', 'critResP', 'critDmgResP'].forEach(k => { if (inputs[k]) state.main[k] = inputs[k].value; });
    state.estCommonStats = estCommonStats;
    document.querySelectorAll('.sample-row').forEach(row => {
        const rowData = { mode: row.dataset.mode };
        row.querySelectorAll('input, select').forEach(input => { const cls = Array.from(input.classList).find(c => c.startsWith('est-') || c.startsWith('ov-')); if (cls) rowData[cls] = input.value; });
        state.samples.push(rowData);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return;
    try {
        const state = JSON.parse(raw);
        Object.entries(state.main).forEach(([key, val]) => {
            if (key === 'skillDropdown') return; // リストボタンの状態は読み込まない
            if (inputs[key]) { 
                if (inputs[key].n) { 
                    inputs[key].n.value = val; 
                    if (inputs[key].s) inputs[key].s.value = val; 
                } else if (inputs[key].cur) { 
                    inputs[key].cur.value = val.cur; 
                    inputs[key].new.value = val.new; 
                } else {
                    inputs[key].value = val; 
                }
            }
        });
        if (state.dmgType) inputs.dmgType.value = state.dmgType;
        if (state.crayon !== undefined) { inputs.crayonSwitch.checked = state.crayon; crayonInputsDivs.forEach(el => el.style.display = state.crayon ? 'grid' : 'none'); Object.values(impTexts).forEach(el => el.style.display = state.crayon ? 'block' : 'none'); }
        if (state.estCommonStats) {
            estCommonStats = state.estCommonStats;
            const currentMode = estimator.mode.value;
            if (estCommonStats[currentMode]) {
                Object.entries(estCommonStats[currentMode]).forEach(([key, val]) => { if (estimator.common[key]) estimator.common[key].value = val; });
            }
        }
        if (state.tab) { 
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
            const btn = document.querySelector(`.tab-btn[data-tab="${state.tab}"]`);
            if (btn) btn.classList.add('active');
            const page = document.getElementById('tab-' + state.tab);
            if (page) page.classList.add('active');
        }
        if (state.estMode) { estimator.mode.value = state.estMode; updateHeaders(); }
        if (state.samples && state.samples.length > 0) {
            estimator.samplesList.innerHTML = '';
            state.samples.forEach(rowData => { 
                const prevMode = estimator.mode.value;
                if (rowData.mode) estimator.mode.value = rowData.mode;
                const row = createSampleRow(); 
                Object.entries(rowData).forEach(([cls, val]) => { const input = row.querySelector('.' + cls); if (input) input.value = val; }); 
                row.style.display = row.dataset.mode === prevMode ? 'block' : 'none';
                estimator.samplesList.appendChild(row);
                estimator.mode.value = prevMode;
            });
        }
    } catch (e) { console.error("Failed to load state", e); }
}

document.getElementById('reset-btn').addEventListener('click', () => {
    // Determine active tab
    const activeTabElem = document.querySelector('.tab-btn.active');
    const activeTab = activeTabElem ? activeTabElem.dataset.tab : 'calc';
    
    // Show confirmation dialog
    const msg = activeTab === 'calc' ? '「通常計算」の入力内容をリセットしますか？' : '「ステータス推定」のデータサンプルをリセットしますか？';
    if (!confirm(msg)) return;

    if (activeTab === 'calc') {
        // Safe reset for Calculation tab
        if (inputs) {
            Object.values(inputs).forEach(obj => {
                if (!obj) return;
                if (obj.n && obj.s) {
                    obj.n.value = obj.n.defaultValue || 0;
                    obj.s.value = obj.s.defaultValue || 0;
                } else if (obj.cur && obj.new) {
                    obj.cur.value = "";
                    obj.new.value = "";
                }
            });
            const directInputs = ['skill', 'add', 'special', 'other', 'atkP', 'critRateP', 'critDmgP', 'defP', 'critResP', 'critDmgResP'];
            directInputs.forEach(k => {
                if (inputs[k]) inputs[k].value = inputs[k].defaultValue || "";
            });
            if (inputs.crayonSwitch) inputs.crayonSwitch.checked = false;
        }
        if (typeof crayonInputsDivs !== 'undefined') crayonInputsDivs.forEach(el => el.style.display = 'none');
        if (typeof impTexts !== 'undefined') Object.values(impTexts).forEach(el => el.style.display = 'none');
    } else {
        // Safe reset for Estimator tab
        if (estimator && estimator.common) {
            Object.entries(estimator.common).forEach(([key, input]) => {
                if (input) input.value = key === 'type' ? "100" : (input.defaultValue || "");
            });
        }
        if (estimator && estimator.samplesList) {
            estimator.samplesList.innerHTML = '';
            if (typeof createSampleRow === 'function') estimator.samplesList.appendChild(createSampleRow());
        }
        if (estimator && estimator.output) {
            estimator.output.innerHTML = 'データを入力してください';
        }
    }

    // Persist and update
    if (typeof saveState === 'function') saveState();
    if (typeof updateUI === 'function') updateUI();
    if (typeof runEstimation === 'function') runEstimation();
});
document.addEventListener('input', (e) => { if (e.target.closest('.app-container')) saveState(); });
loadState(); updateUI(); runEstimation();
document.querySelectorAll('.collapsible-header').forEach(header => { header.addEventListener('click', () => { header.classList.toggle('collapsed'); const content = header.nextElementSibling; if (content && content.classList.contains('collapsible-content')) content.classList.toggle('collapsed-content'); }); });
updateHeaders(); 
if (estimator.samplesList.children.length === 0) {
    estimator.samplesList.appendChild(createSampleRow());
} else {
    const mode = estimator.mode.value;
    estimator.samplesList.querySelectorAll('.sample-row').forEach(row => {
        row.style.display = row.dataset.mode === mode ? 'block' : 'none';
    });
}

// Initialize Preset Selectors
Object.entries(ENEMY_PRESETS).forEach(([key, data]) => {
    const opt = document.createElement('option'); opt.value = key; opt.textContent = data.name;
    inputs.atkPreset.appendChild(opt.cloneNode(true));
    inputs.defPreset.appendChild(opt.cloneNode(true));
});
updateMainSkillList();
