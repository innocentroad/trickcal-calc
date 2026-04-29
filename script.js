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
    atkPreset: document.getElementById('atk-preset'),
    defPreset: document.getElementById('enemy-preset'),
    dmgType: document.getElementsByName('dmg-type'),
    atkP: document.getElementById('add-atk-p'),
    critRateP: document.getElementById('add-crit-rate-p'),
    critDmgP: document.getElementById('add-crit-dmg-p'),
    defP: document.getElementById('add-def-p'),
    critResP: document.getElementById('add-crit-res-p'),
    critDmgResP: document.getElementById('add-crit-dmg-res-p')
};

const ENEMY_PRESETS = {
    "lily_v15": {
        name: "[次元15]リリー(活発)",
        hp: 661796770,
        atk_p: 0,
        atk_m: 28118,
        def_p: 52196,
        def_m: 52196,
        dmgType: 'mag',
        crit: 44178,
        critDmg: 44178,
        critRes: 36146,
        critDmgRes: 36146
    }
};

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
    const rawAdd = parseFloat(inputs.add.value);
    let addMult = (rawAdd === 0 ? 0 : (rawAdd || 100)) / 100;
    if (addMult < 0.2 && addMult !== 0) {
        addMult = 0.2;
    }


    return {
        isCrayon: crayonToggle.checked,
        atk: parseFloat(inputs.atk.n.value) || 0,
        crit: parseFloat(inputs.crit.n.value) || 0,
        critDmgAtk: parseFloat(inputs.critDmgAtk.n.value) || 0,
        def: parseFloat(inputs.def.n.value) || 0,
        critRes: parseFloat(inputs.critRes.n.value) || 0,
        critDmgRes: parseFloat(inputs.critDmgRes.n.value) || 0,
        atk_c: { cur: 1.0 + (parseFloat(inputs.atkC.cur.value) || 0)/100, new: 1.0 + (parseFloat(inputs.atkC.new.value) || 0)/100 },
        crit_c: { cur: 1.0 + (parseFloat(inputs.critC.cur.value) || 0)/100, new: 1.0 + (parseFloat(inputs.critC.new.value) || 0)/100 },
        critDmgAtk_c: { cur: 1.0 + (parseFloat(inputs.critC.cur.value) || 0)/100, new: 1.0 + (parseFloat(inputs.critC.new.value) || 0)/100 },
        def_c: { cur: 1.0 + (parseFloat(inputs.defC.cur.value) || 0)/100, new: 1.0 + (parseFloat(inputs.defC.new.value) || 0)/100 },
        critRes_c: { cur: 1.0 + (parseFloat(inputs.critResC.cur.value) || 0)/100, new: 1.0 + (parseFloat(inputs.critResC.new.value) || 0)/100 },
        critDmgRes_c: { cur: 1.0 + (parseFloat(inputs.critResC.cur.value) || 0)/100, new: 1.0 + (parseFloat(inputs.critResC.new.value) || 0)/100 },
        skill: (parseFloat(inputs.skill.value) === 0 ? 0 : (parseFloat(inputs.skill.value) || 100)) / 100,
        add: addMult,
        type: (parseFloat(inputs.type.value) === 0 ? 0 : (parseFloat(inputs.type.value) || 100)) / 100,
        special: (parseFloat(inputs.special.value) === 0 ? 0 : (parseFloat(inputs.special.value) || 100)) / 100,
        other: (parseFloat(inputs.other.value) === 0 ? 0 : (parseFloat(inputs.other.value) || 100)) / 100,
        atkP: parseFloat(inputs.atkP.value) || 0,
        critRateP: parseFloat(inputs.critRateP.value) || 0,
        critDmgP: parseFloat(inputs.critDmgP.value) || 0,
        defP: parseFloat(inputs.defP.value) || 0,
        critResP: parseFloat(inputs.critResP.value) || 0,
        critDmgResP: parseFloat(inputs.critDmgResP.value) || 0
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
    for (const radio of inputs.dmgType) {
        if (radio.checked) return radio.value;
    }
    return 'phys';
}

function setDamageType(type) {
    for (const radio of inputs.dmgType) {
        if (radio.value === type) {
            radio.checked = true;
            break;
        }
    }
}

// Preset update logic
function applyPreset(side, key) {
    if (!key || !ENEMY_PRESETS[key]) return;
    const data = ENEMY_PRESETS[key];
    
    // Auto-select Damage Type if specified (Attacker priority)
    if (data.dmgType) {
        if (side === 'atk' || !inputs.atkPreset.value) {
            setDamageType(data.dmgType);
        }
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

inputs.dmgType.forEach(radio => {
    radio.addEventListener('change', () => {
        // If a preset is already selected, re-apply it to update ATK/DEF based on new type
        applyPreset('atk', inputs.atkPreset.value);
        applyPreset('def', inputs.defPreset.value);
        updateUI();
    });
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
