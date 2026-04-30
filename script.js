// DOM Elements
const inputs = {
    atk: { s: document.getElementById('atk-slider'), n: document.getElementById('atk-number') },
    crit: { s: document.getElementById('crit-slider'), n: document.getElementById('crit-number') },
    critDmgAtk: { s: document.getElementById('crit-dmg-slider'), n: document.getElementById('crit-dmg-number') },
    def: { s: document.getElementById('def-slider'), n: document.getElementById('def-number') },
    critRes: { s: document.getElementById('crit-res-slider'), n: document.getElementById('crit-res-number') },
    critDmgRes: { s: document.getElementById('crit-dmg-res-slider'), n: document.getElementById('crit-dmg-res-number') },
    
    // Crayon Comparison (Bonuses) - ID Mapping
    atkC: { cur: document.getElementById('atk-cur-bonus'), new: document.getElementById('atk-new-bonus') },
    critC: { cur: document.getElementById('crit-cur-bonus'), new: document.getElementById('crit-new-bonus') },
    defC: { cur: document.getElementById('def-cur-bonus'), new: document.getElementById('def-new-bonus') },
    critResC: { cur: document.getElementById('crit-res-cur-bonus'), new: document.getElementById('crit-res-new-bonus') },

    // Multipliers
    skill: document.getElementById('mult-skill-number'),
    add: document.getElementById('mult-add-number'),
    type: document.getElementById('mult-type'),
    special: document.getElementById('mult-sp-number'),
    other: document.getElementById('mult-other-number'),
    
    // Additional %
    atkP: document.getElementById('add-atk-p'),
    critRateP: document.getElementById('add-crit-rate-p'),
    critDmgP: document.getElementById('add-crit-dmg-p'),
    defP: document.getElementById('add-def-p'),
    critResP: document.getElementById('add-crit-res-p'),
    critDmgResP: document.getElementById('add-crit-dmg-res-p'),

    // Presets & Switches
    atkPreset: document.getElementById('atk-preset'),
    defPreset: document.getElementById('enemy-preset'),
    dmgType: document.getElementById('main-dmg-type'),
    crayonSwitch: document.getElementById('enable-crayon')
};

// Helper for Smart 100-base start
function setupSmartStart(input) {
    if (input.type !== 'number') return;
    
    let lastValue = input.value;
    
    input.addEventListener('keydown', (e) => {
        if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && input.value === "") {
            const ph = parseFloat(input.placeholder);
            const isMultiplier = ph >= 100 || (input.id && input.id.includes('mult')) || (input.defaultValue && parseFloat(input.defaultValue) >= 100);
            if (isMultiplier) {
                input.value = 100;
            }
        }
    });

    input.addEventListener('input', () => {
        const ph = parseFloat(input.placeholder);
        const isMultiplier = ph >= 100 || (input.id && input.id.includes('mult')) || (input.defaultValue && parseFloat(input.defaultValue) >= 100);
        
        if (isMultiplier && lastValue === "" && (input.value === "1" || input.value === "-1")) {
            input.value = (input.value === "1") ? 101 : 99;
            // Trigger another input event if needed, but usually the UI will update because of this change
        }
        lastValue = input.value;
    });
}

document.querySelectorAll('input[type="number"]').forEach(setupSmartStart);

// Logic starts here...

const results = {
    expected: document.getElementById('res-expected'),
    normal: document.getElementById('res-normal'),
    critDmg: document.getElementById('res-crit-dmg'),
    critRate: document.getElementById('res-crit-rate')
};

const graphControls = {
    perspective: document.getElementById('graph-perspective'),
    showExpected: document.getElementById('show-expected'),
    showNormal: document.getElementById('show-normal'),
    showCrit: document.getElementById('show-crit')
};


const crayonToggle = document.getElementById('enable-crayon');
const crayonInputsDivs = document.querySelectorAll('.crayon-inputs');
const impTexts = {
    expected: document.getElementById('imp-expected'),
    normal: document.getElementById('imp-normal'),
    critDmg: document.getElementById('imp-crit-dmg'),
    critRate: document.getElementById('imp-crit-rate')
};


let damageChart = null;

// Formulas
function calcBaseDamageRate(atk, def) {
    const x = atk / def;
    let rate = 0;
    if (x >= 0.5) {
        rate = 1.2 * (1 - 0.5 / (1 + (10/3) * (x - 0.5)));
    } else {
        rate = 0.6 * (1 - ((13/3) * (0.5 - x)) / (1 + (10/3) * (0.5 - x)));
    }
    return Math.max(0.1125, Math.min(1.2, rate));
}

function calcCritRate(critAtk, critDef) {
    const x = critAtk / (2 * critDef);
    let rate = 0;
    if (x >= 1.0) {
        rate = 0.45 + 0.35 * ((x - 1) / (x - 1 + 10/3));
    } else {
        rate = 0.05 + 0.40 * (x / (x + 0.29 * (1 - x)));
    }
    return Math.max(0.05, Math.min(0.8, rate));
}

function calcCritMultiplier(critAtk, critDmgRes) {
    const x = critAtk / critDmgRes;
    let mult = 0;
    if (x >= 1.0) {
        mult = 1.75 + 0.85 * (x - 1) / (x + 2);
    } else {
        mult = 1.75 - 1.10 * (1 - x) / (2 - x);
    }
    return Math.max(1.2, Math.min(2.5, mult));
}

function getValues() {
    const rawAdd = parseFloat(inputs.add?.value || 100);
    let addMult = (rawAdd === 0 ? 0 : rawAdd) / 100;
    if (addMult < 0.2 && addMult !== 0) addMult = 0.2;

    const getBonus = (key) => ({
        cur: 1.0 + (parseFloat(inputs[key]?.cur?.value) || 0)/100,
        new: 1.0 + (parseFloat(inputs[key]?.new?.value) || 0)/100
    });

    return {
        isCrayon: crayonToggle.checked,
        atk: parseFloat(inputs.atk.n.value) || 0,
        crit: parseFloat(inputs.crit.n.value) || 0,
        critDmgAtk: parseFloat(inputs.critDmgAtk.n.value) || 0,
        def: parseFloat(inputs.def.n.value) || 0,
        critRes: parseFloat(inputs.critRes.n.value) || 0,
        critDmgRes: parseFloat(inputs.critDmgRes.n.value) || 0,
        
        atk_c: getBonus('atkC'),
        crit_c: { cur: 1.0, new: 1.0 }, // No crayon for crit rate
        critDmgAtk_c: getBonus('critC'),
        def_c: getBonus('defC'),
        critRes_c: { cur: 1.0, new: 1.0 }, // No crayon for crit res
        critDmgRes_c: getBonus('critResC'),

        skill: (parseFloat(inputs.skill?.value) === 0 ? 0 : (parseFloat(inputs.skill?.value) || 100)) / 100,
        add: addMult,
        type: (parseFloat(inputs.type?.value) === 0 ? 0 : (parseFloat(inputs.type?.value) || 100)) / 100,
        special: (parseFloat(inputs.special?.value) === 0 ? 0 : (parseFloat(inputs.special?.value) || 100)) / 100,
        other: (parseFloat(inputs.other?.value) === 0 ? 0 : (parseFloat(inputs.other?.value) || 100)) / 100,
        
        atkP: parseFloat(inputs.atkP?.value) || 0,
        critRateP: parseFloat(inputs.critRateP?.value) || 0,
        critDmgP: parseFloat(inputs.critDmgP?.value) || 0,
        defP: parseFloat(inputs.defP?.value) || 0,
        critResP: parseFloat(inputs.critResP?.value) || 0,
        critDmgResP: parseFloat(inputs.critDmgResP?.value) || 0
    };
}

function calculateAll(v) {
    const finalAtk = v.atk * (1 + v.atkP / 100);
    const finalDef = v.def * (1 + v.defP / 100);
    
    const rate = calcBaseDamageRate(finalAtk, finalDef);
    const baseDamage = finalAtk * rate;
    
    const normalDamage = baseDamage * v.skill * v.add * v.type * v.special * v.other;
    
    const baseCritRate = calcCritRate(v.crit, v.critRes);
    const finalCritRate = Math.max(0.05, Math.min(0.8, baseCritRate + (v.critRateP - v.critResP) / 100));
    
    const baseCritMult = calcCritMultiplier(v.critDmgAtk, v.critDmgRes);
    const finalCritMult = Math.max(1.2, Math.min(2.5, baseCritMult + (v.critDmgP - v.critDmgResP) / 100));
    
    const criticalDamage = normalDamage * finalCritMult;
    const expectedDamage = normalDamage * (1 - finalCritRate) + criticalDamage * finalCritRate;
    
    return {
        normal: normalDamage,
        crit: criticalDamage,
        expected: expectedDamage,
        critRate: finalCritRate
    };
}

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
    let newV = null;
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
    }
    
    results.normal.textContent = Math.floor(res.normal).toLocaleString();
    results.critDmg.textContent = Math.floor(res.crit).toLocaleString();
    results.expected.textContent = Math.floor(res.expected).toLocaleString();
    results.critRate.textContent = (res.critRate * 100).toFixed(1) + '%';
    
    updateChart(v.isCrayon ? newV : v);
}

function updateChart(v) {
    const isAttacker = graphControls.perspective.value === 'attacker';
    const expectedData = [];
    const normalData = [];
    const critData = [];
    
    const pointColors = [];
    const pointRadii = [];

    let currentVal = isAttacker ? v.atk : v.def;
    let baseParam = isAttacker ? v.def : v.atk;
    
    let minRange = baseParam * 0.1;
    let maxRange = baseParam * 3;
    
    if (currentVal < minRange) minRange = currentVal * 0.8;
    if (currentVal > maxRange) maxRange = currentVal * 1.2;
    
    let step = (maxRange - minRange) / 50;

    let xValues = [];
    for (let i = minRange; i <= maxRange + step * 0.01; i += step) {
        xValues.push(i);
    }
    xValues.push(currentVal);
    xValues.push(minRange);
    xValues.push(maxRange);
    // Sort to keep graph linear, remove floating point duplicates
    xValues.sort((a, b) => a - b);
    xValues = xValues.filter((item, pos, ary) => !pos || item - ary[pos - 1] > step * 0.01);

    for (let i of xValues) {
        let testV = { ...v };
        if (isAttacker) testV.atk = i;
        else testV.def = i;
        
        let res = calculateAll(testV);
        expectedData.push({ x: i, y: res.expected });
        normalData.push({ x: i, y: res.normal });
        critData.push({ x: i, y: res.crit });

        if (Math.abs(i - currentVal) < step * 0.01) {
            pointColors.push('#fff');
            pointRadii.push(6);
        } else {
            pointColors.push('transparent');
            pointRadii.push(0);
        }
    }

    const datasets = [];
    if (graphControls.showNormal.checked) {
        datasets.push({
            label: '通常ダメージ',
            data: normalData,
            borderColor: '#94a3b8',
            borderDash: [],
            tension: 0.4,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii
        });
    }
    if (graphControls.showExpected.checked) {
        datasets.push({
            label: '期待値',
            data: expectedData,
            borderColor: '#6366f1',
            borderDash: [5, 5],
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii
        });
    }
    if (graphControls.showCrit.checked) {
        datasets.push({
            label: '会心ダメージ',
            data: critData,
            borderColor: '#ec4899',
            borderDash: [5, 5],
            tension: 0.4,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii
        });
    }

    if (damageChart) {
        damageChart.destroy();
    }

    const ctx = document.getElementById('damageChart').getContext('2d');
    damageChart = new Chart(ctx, {
        type: 'line',
        data: { datasets },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: { labels: { color: '#f8fafc' } }
            },
            scales: {
                x: {
                    type: 'linear',
                    min: minRange,
                    max: maxRange,
                    title: { display: true, text: isAttacker ? '攻撃力' : '防御力', color: '#94a3b8' },
                    ticks: { 
                        color: '#94a3b8',
                        maxRotation: 0,
                        minRotation: 0,
                        callback: function(value) {
                            return Math.floor(value).toLocaleString();
                        }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' }
                },
                y: {
                    title: { display: true, text: 'ダメージ', color: '#94a3b8' },
                    ticks: { 
                        color: '#94a3b8',
                        callback: function(value) {
                            return Math.floor(value).toLocaleString();
                        }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' }
                }
            }
        }
    });
}

// Event Listeners
function syncInputs(slider, number) {
    slider.addEventListener('input', () => {
        number.value = slider.value;
        updateUI();
    });
    number.addEventListener('input', () => {
        slider.value = number.value || 0;
        updateUI();
    });
}

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
        obj.cur.addEventListener('input', updateUI);
        obj.new.addEventListener('input', updateUI);
    } else if (obj instanceof HTMLElement && obj.tagName === 'INPUT') {
        obj.addEventListener('input', updateUI);
    }
});

inputs.type.addEventListener('change', updateUI);
Object.values(graphControls).forEach(ctrl => {
    ctrl.addEventListener('change', updateUI);
});

function getDamageType() {
    return inputs.dmgType.value;
}

function setDamageType(type) {
    inputs.dmgType.value = type;
}

// Preset update logic
function applyPreset(side, key) {
    if (!key || !ENEMY_PRESETS[key]) return;
    const data = ENEMY_PRESETS[key];
    
    // Auto-select Damage Type if specified
    if (data.dmgType) {
        setDamageType(data.dmgType);
    }
    
    const type = getDamageType();
    
    if (side === 'atk') {
        const atkVal = type === 'phys' ? data.atk_p : data.atk_m;
        setInputValue(inputs.atk, atkVal);
        setInputValue(inputs.crit, data.crit);
        setInputValue(inputs.critDmgAtk, data.critDmg);
    } else {
        const defVal = type === 'phys' ? data.def_p : data.def_m;
        setInputValue(inputs.def, defVal);
        setInputValue(inputs.critRes, data.critRes);
        setInputValue(inputs.critDmgRes, data.critDmgRes);
    }
    updateUI();
}

// Event Listeners
inputs.atkPreset.addEventListener('change', (e) => applyPreset('atk', e.target.value));
inputs.defPreset.addEventListener('change', (e) => applyPreset('def', e.target.value));

inputs.dmgType.addEventListener('change', () => {
    // If a preset is already selected, re-apply it to update ATK/DEF based on new type
    applyPreset('atk', inputs.atkPreset.value);
    applyPreset('def', inputs.defPreset.value);
    updateUI();
});

// Helper to update slider and number programmatically
function setInputValue(inputPair, value) {
    if (inputPair.s && inputPair.n) {
        inputPair.s.value = value;
        inputPair.n.value = value;
    }
}

// Initialize
updateUI();


// --- Estimator Logic ---
const estimator = {
    mode: document.getElementById('est-mode'),
    samplesList: document.getElementById('samples-list'),
    addBtn: document.getElementById('add-sample-btn'),
    output: document.getElementById('est-output'),
    headerRow: document.getElementById('samples-header-row'),
    common: {
        add: document.getElementById('est-common-add'),
        critAdd: document.getElementById('est-common-crit-add'),
        critRes: document.getElementById('est-common-crit-res'),
        type: document.getElementById('est-common-type'),
        other: document.getElementById('est-common-other')
    }
};

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const tabId = 'tab-' + btn.dataset.tab;
        document.getElementById(tabId).classList.add('active');
    });
});

function createSampleRow() {
    const mode = estimator.mode.value;
    const row = document.createElement('div');
    row.className = 'sample-row';
    
    let mainHtml = '';
    if (mode === 'atk-side') {
        mainHtml = `
            <input type="number" placeholder="自攻撃力" class="est-atk" title="自分の攻撃力">
            <input type="number" placeholder="自会心DMG" class="est-crit-stat" title="自分の会心DMG(ステータス)">
            <input type="number" placeholder="スキル%" class="est-skill" value="100">
            <input type="number" placeholder="通常ダメ" class="est-dmg">
            <input type="number" placeholder="会心ダメ" class="est-crit-dmg">
        `;
    } else if (mode === 'def-side') {
        mainHtml = `
            <input type="number" placeholder="自防御力" class="est-def" title="自分の防御力">
            <input type="number" placeholder="自会心抵抗" class="est-crit-res" title="自分の会心抵抗(ステータス)">
            <input type="number" placeholder="スキル%" class="est-skill-enemy" title="敵のスキル倍率(不明なら空)">
            <input type="number" placeholder="被ダメ" class="est-dmg-taken">
            <input type="number" placeholder="会心被ダメ" class="est-crit-taken">
        `;
    }
    
    row.innerHTML = `
        <div class="sample-row-top">
            <div class="sample-main-inputs">
                ${mainHtml}
            </div>
            <div class="sample-actions">
                <button class="btn-detail" title="詳細補正の個別上書き">+</button>
                <button class="btn-remove">×</button>
            </div>
        </div>
        <div class="sample-detail-inputs collapsed">
            <div class="detail-grid">
                <div class="detail-item"><label>与被%</label><input type="number" class="ov-add" placeholder="${estimator.common.add.value}"></div>
                <div class="detail-item">
                    <label>相性%</label>
                    <select class="ov-type">
                        <option value="">(共通)</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                </div>
                <div class="detail-item"><label>他%</label><input type="number" class="ov-other" placeholder="${estimator.common.other.value}"></div>
                <div class="detail-item"><label>会増%</label><input type="number" class="ov-crit-add" placeholder="${estimator.common.critAdd.value}"></div>
                <div class="detail-item"><label>会減%</label><input type="number" class="ov-crit-res" placeholder="${estimator.common.critRes.value}"></div>
            </div>
        </div>
    `;
    
    row.querySelector('.btn-remove').addEventListener('click', () => {
        row.remove();
        runEstimation();
    });

    row.querySelector('.btn-detail').addEventListener('click', () => {
        const detail = row.querySelector('.sample-detail-inputs');
        detail.classList.toggle('collapsed');
        row.querySelector('.btn-detail').textContent = detail.classList.contains('collapsed') ? '+' : '−';
    });
    
    row.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', runEstimation);
        if (input.tagName === 'INPUT') setupSmartStart(input);
    });
    
    return row;
}

estimator.addBtn.addEventListener('click', () => {
    estimator.samplesList.appendChild(createSampleRow());
});

function updateHeaders() {
    const mode = estimator.mode.value;
    const header = estimator.headerRow;
    if (mode === 'atk-side') {
        header.innerHTML = `
            <span>自攻撃力</span>
            <span>自会心DMG</span>
            <span>スキル%</span>
            <span>通常ダメ</span>
            <span>会心ダメ</span>
            <span></span>
        `;
    } else {
        header.innerHTML = `
            <span>自防御力</span>
            <span>自会心抵抗</span>
            <span>スキル%</span>
            <span>被ダメ</span>
            <span>会心被ダメ</span>
            <span></span>
        `;
    }
}

estimator.mode.addEventListener('change', () => {
    estimator.samplesList.innerHTML = '';
    estimator.output.innerHTML = 'データを入力してください';
    updateHeaders();
    estimator.samplesList.appendChild(createSampleRow());
});

Object.values(estimator.common).forEach(input => {
    input.addEventListener('input', () => {
        runEstimation();
        // Update placeholders in all rows
        const rows = estimator.samplesList.querySelectorAll('.sample-row');
        rows.forEach(row => {
            if (row.querySelector('.ov-add')) row.querySelector('.ov-add').placeholder = estimator.common.add.value;
            if (row.querySelector('.ov-other')) row.querySelector('.ov-other').placeholder = estimator.common.other.value;
            if (row.querySelector('.ov-crit-add')) row.querySelector('.ov-crit-add').placeholder = estimator.common.critAdd.value;
            if (row.querySelector('.ov-crit-res')) row.querySelector('.ov-crit-res').placeholder = estimator.common.critRes.value;
        });
    });
});

// Solvers
function runEstimation() {
    const mode = estimator.mode.value;
    const common = {
        add: (parseFloat(estimator.common.add.value) || 100) / 100,
        critAdd: (parseFloat(estimator.common.critAdd.value) || 0) / 100,
        critRes: (parseFloat(estimator.common.critRes.value) || 0) / 100,
        type: (parseFloat(estimator.common.type.value) || 100) / 100,
        other: (parseFloat(estimator.common.other.value) || 100) / 100
    };
    
    const rows = Array.from(estimator.samplesList.querySelectorAll('.sample-row'));
    if (rows.length === 0) return;

    if (mode === 'atk-side') {
        estimateAtkSide(rows, common);
    } else if (mode === 'def-side') {
        estimateDefSide(rows, common);
    }
}

function solveDefRange(atk, skill, dmg, common) {
    const mult = skill * common.add * common.type * common.other;
    let low = 1, high = 1000000;
    let fMin = 1, fMax = 1000000;
    
    // Max DEF (gives dmg)
    let l = 1, h = 1000000;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (Math.floor(atk * calcBaseDamageRate(atk, mid) * mult) >= dmg) {
            fMax = mid; l = mid + 1;
        } else { h = mid - 1; }
    }
    // Min DEF (gives dmg)
    l = 1, h = 1000000;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (Math.floor(atk * calcBaseDamageRate(atk, mid) * mult) <= dmg) {
            fMin = mid; h = mid - 1;
        } else { l = mid + 1; }
    }
    return { min: fMin, max: fMax };
}

function solveCritResRange(critStat, normDmg, critDmg, common) {
    let low = 1, high = 1000000;
    let fMin = 1, fMax = 1000000;
    // Max Res (gives critDmg)
    let l = 1, h = 1000000;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        const testMult = calcCritMultiplier(critStat, mid) + common.critAdd - common.critRes;
        if (Math.floor(normDmg * testMult) >= critDmg) {
            fMax = mid; l = mid + 1;
        } else { h = mid - 1; }
    }
    l = 1, h = 1000000;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        const testMult = calcCritMultiplier(critStat, mid) + common.critAdd - common.critRes;
        if (Math.floor(normDmg * testMult) <= critDmg) {
            fMin = mid; h = mid - 1;
        } else { l = mid + 1; }
    }
    return { min: fMin, max: fMax };
}

function getRowCommon(row, globalCommon) {
    const getVal = (cls, gVal) => {
        const input = row.querySelector('.' + cls);
        return (input && input.value !== "") ? (parseFloat(input.value) || 0) / 100 : gVal;
    };
    return {
        add: getVal('ov-add', globalCommon.add),
        type: getVal('ov-type', globalCommon.type),
        other: getVal('ov-other', globalCommon.other),
        critAdd: getVal('ov-crit-add', globalCommon.critAdd),
        critRes: getVal('ov-crit-res', globalCommon.critRes)
    };
}

function formatResultRow(label, value) {
    return `
        <div class="est-result-row">
            <span class="est-result-label">${label}</span>
            <div class="est-result-value">
                ${value}
            </div>
        </div>
    `;
}

function estimateAtkSide(rows, common) {
    let defRange = { min: 1, max: 1000000 };
    let resRange = { min: 1, max: 1000000 };
    let vDef = 0, vRes = 0;

    for (const row of rows) {
        const rowCommon = getRowCommon(row, common);
        const atk = parseFloat(row.querySelector('.est-atk').value);
        const critStat = parseFloat(row.querySelector('.est-crit-stat').value);
        const skill = (parseFloat(row.querySelector('.est-skill').value) || 100) / 100;
        const dmg = parseFloat(row.querySelector('.est-dmg').value);
        const cDmg = parseFloat(row.querySelector('.est-crit-dmg').value);

        if (atk && dmg) {
            const r = solveDefRange(atk, skill, dmg, rowCommon);
            defRange.min = Math.max(defRange.min, r.min);
            defRange.max = Math.min(defRange.max, r.max);
            vDef++;
        }
        if (critStat && dmg && cDmg) {
            const r = solveCritResRange(critStat, dmg, cDmg, rowCommon);
            resRange.min = Math.max(resRange.min, r.min);
            resRange.max = Math.min(resRange.max, r.max);
            vRes++;
        }
    }

    let out = "";
    if (vDef > 0) {
        const center = Math.floor((defRange.min + defRange.max) / 2);
        out += formatResultRow("敵の防御力", `約 ${center.toLocaleString()}`);
    }
    if (vRes > 0) {
        const center = Math.floor((resRange.min + resRange.max) / 2);
        out += formatResultRow("敵の会心DMG抵抗", `約 ${center.toLocaleString()}`);
    }
    estimator.output.innerHTML = out || `<div class="est-result-label">データを入力してください</div>`;
}

function estimateDefSide(rows, common) {
    const samples = rows.map(r => {
        const rowCommon = getRowCommon(r, common);
        return {
            def: parseFloat(r.querySelector('.est-def').value),
            critRes: parseFloat(r.querySelector('.est-crit-res').value),
            skill: (parseFloat(r.querySelector('.est-skill-enemy').value) || 0) / 100,
            dmg: parseFloat(r.querySelector('.est-dmg-taken').value),
            cDmg: parseFloat(r.querySelector('.est-crit-taken').value),
            common: rowCommon
        };
    }).filter(s => s.def && s.dmg);

    if (samples.length < 1) return;

    let atkResultHtml = "";
    const allSkillKnown = samples.every(s => s.skill > 0);

    if (allSkillKnown) {
        // Case 1: All skills are provided. Estimate ATK by intersecting ranges.
        let atkRange = { min: 1, max: 2000000 };
        for (const s of samples) {
            const mult = s.skill * s.common.add * s.common.type * s.common.other;
            let l = 1, h = 2000000, fMin = 1, fMax = 2000000;
            while (l <= h) {
                let mid = Math.floor((l + h) / 2);
                if (Math.floor(mid * calcBaseDamageRate(mid, s.def) * mult) <= s.dmg) { fMin = mid; l = mid + 1; } else h = mid - 1;
            }
            l = 1, h = 2000000;
            while (l <= h) {
                let mid = Math.floor((l + h) / 2);
                if (Math.floor(mid * calcBaseDamageRate(mid, s.def) * mult) >= s.dmg) { fMax = mid; h = mid - 1; } else l = mid + 1;
            }
            atkRange.min = Math.max(atkRange.min, fMax);
            atkRange.max = Math.min(atkRange.max, fMin);
        }
        
        // If the range is inverted but close (due to integer jumps), just take the average
        if (atkRange.min <= atkRange.max + 5) {
            const center = Math.floor((atkRange.min + atkRange.max) / 2);
            atkResultHtml = formatResultRow("敵の攻撃力", `約 ${center.toLocaleString()}`);
        } else {
            atkResultHtml = formatResultRow("敵の攻撃力", "判定不可", "データに矛盾があります");
        }
    } else if (samples.length >= 2) {
        let candidates = [];
        for (let atk = 1000; atk <= 250000; atk += 100) {
            let skills = samples.map(s => {
                const rate = calcBaseDamageRate(atk, s.def);
                if (rate <= 0.0001) return null;
                return s.dmg / (atk * rate * s.common.add * s.common.type * s.common.other);
            });
            if (skills.includes(null)) continue;
            let diff = Math.max(...skills) - Math.min(...skills);
            let avg = skills.reduce((a,b)=>a+b)/skills.length;
            let relDiff = diff / (avg || 1);

            if (relDiff < 0.05) {
                let localBestAtk = atk, localMinRel = relDiff, localBestSkill = avg;
                for (let sub = atk - 50; sub <= atk + 50; sub++) {
                    if (sub < 1000) continue;
                    let sks = samples.map(s => {
                        const r = calcBaseDamageRate(sub, s.def);
                        if (r <= 0.0001) return null;
                        return s.dmg / (sub * r * s.common.add * s.common.type * s.common.other);
                    });
                    if (sks.includes(null)) continue;
                    let d = Math.max(...sks) - Math.min(...sks), a = sks.reduce((a,b)=>a+b)/sks.length, rd = d / (a || 1);
                if (rd < localMinRel) { localMinRel = rd; localBestAtk = sub; localBestSkill = a; }
                }
                
                // Group candidates: if close to existing, keep the one with lower relDiff
                let existing = candidates.find(c => Math.abs(c.atk - localBestAtk) < 300);
                if (existing) {
                    if (localMinRel < existing.rel) {
                        existing.atk = localBestAtk; existing.rel = localMinRel; existing.skill = localBestSkill;
                    }
                } else {
                    candidates.push({ atk: localBestAtk, rel: localMinRel, skill: localBestSkill });
                }
            }
        }
        candidates.sort((a, b) => a.rel - b.rel).slice(0, 3).forEach((c, idx) => {
            const title = candidates.length > 1 ? `候補 ${idx + 1}` : "敵の攻撃力";
            atkResultHtml += `<div class="est-candidate-header">${title}</div>`;
            atkResultHtml += formatResultRow("攻撃力", `約 ${c.atk.toLocaleString()}`);
            atkResultHtml += formatResultRow("スキル倍率", `約 ${(c.skill * 100).toFixed(1)} %`);
        });
    } else {
        atkResultHtml = formatResultRow("敵の攻撃力", "判定不可", "データが不足しています");
    }

    let critResultHtml = "";
    const critSamples = samples.filter(s => s.critRes && s.cDmg);
    if (critSamples.length > 0) {
        let range = { min: 1, max: 1000000 };
        for (const s of critSamples) {
            let l = 1, h = 1000000, fMin = 1, fMax = 1000000;
            while (l <= h) {
                let mid = Math.floor((l + h) / 2);
                const testMult = calcCritMultiplier(mid, s.critRes) + s.common.critAdd - s.common.critRes;
                if (Math.floor(s.dmg * testMult) <= s.cDmg) { fMin = mid; l = mid + 1; } else h = mid - 1;
            }
            l = 1, h = 1000000;
            while (l <= h) {
                let mid = Math.floor((l + h) / 2);
                const testMult = calcCritMultiplier(mid, s.critRes) + s.common.critAdd - s.common.critRes;
                if (Math.floor(s.dmg * testMult) >= s.cDmg) { fMax = mid; h = mid - 1; } else l = mid + 1;
            }
            range.min = Math.max(range.min, fMax); range.max = Math.min(range.max, fMin);
        }
        const center = Math.floor((range.min + range.max) / 2);
        critResultHtml = formatResultRow("敵の会心DMG(ステ)", `約 ${center.toLocaleString()}`);
    }

    estimator.output.innerHTML = atkResultHtml + critResultHtml;
}

// Initial Sample
updateHeaders();
estimator.samplesList.appendChild(createSampleRow());


// Collapsible Logic
document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('collapsed');
        const content = header.nextElementSibling;
        if (content && content.classList.contains('collapsible-content')) {
            content.classList.toggle('collapsed-content');
        }
    });
});

