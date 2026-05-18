// DOM Elements
const inputs = {
    dmgType: document.getElementById('main-dmg-type'),
    perspective: document.getElementsByName('perspective'),
    swapBtn: document.getElementById('swap-stats-btn'),
    
    self: {
        preset: document.getElementById('self-preset'),
        saveBtn: document.getElementById('save-self-preset'),
        delBtn: document.getElementById('del-self-preset'),
        atk: document.getElementById('self-atk'),
        crit: document.getElementById('self-crit'),
        critDmg: document.getElementById('self-crit-dmg'),
        def: document.getElementById('self-def'),
        critRes: document.getElementById('self-crit-res'),
        critDmgRes: document.getElementById('self-crit-dmg-res'),
        
        // Crayon bonuses
        atkC: { cur: document.getElementById('self-atk-cur'), new: document.getElementById('self-atk-new') },
        critC: { cur: document.getElementById('self-crit-cur'), new: document.getElementById('self-crit-new') },
        critDmgC: { cur: document.getElementById('self-crit-dmg-cur'), new: document.getElementById('self-crit-dmg-new') },
        defC: { cur: document.getElementById('self-def-cur'), new: document.getElementById('self-def-new') },
        critResC: { cur: document.getElementById('self-crit-res-cur'), new: document.getElementById('self-crit-res-new') },
        critDmgResC: { cur: document.getElementById('self-crit-dmg-res-cur'), new: document.getElementById('self-crit-dmg-res-new') },
        
        mult: {
            skill: document.getElementById('self-mult-skill-number'),
            add: document.getElementById('self-mult-add-number'),
            type: document.getElementById('self-mult-type'),
            special: document.getElementById('self-mult-sp-number'),
            other: document.getElementById('self-mult-other-number'),
            skillDropdown: document.getElementById('self-main-skill-dropdown')
        },
        adds: {
            atkP: document.getElementById('self-add-atk-p'),
            critRateP: document.getElementById('self-add-crit-rate-p'),
            critDmgP: document.getElementById('self-add-crit-dmg-p'),
            defP: document.getElementById('self-add-def-p'),
            critResP: document.getElementById('self-add-crit-res-p'),
            critDmgResP: document.getElementById('self-add-crit-dmg-res-p')
        }
    },
    
    enemy: {
        preset: document.getElementById('enemy-preset'),
        saveBtn: document.getElementById('save-enemy-preset'),
        delBtn: document.getElementById('del-enemy-preset'),
        phase: document.getElementById('enemy-phase'),
        phaseGroup: document.getElementById('enemy-phase-group'),
        atk: document.getElementById('enemy-atk'),
        crit: document.getElementById('enemy-crit'),
        critDmg: document.getElementById('enemy-crit-dmg'),
        def: document.getElementById('enemy-def'),
        critRes: document.getElementById('enemy-crit-res'),
        critDmgRes: document.getElementById('enemy-crit-dmg-res'),
        
        mult: {
            skill: document.getElementById('enemy-mult-skill-number'),
            add: document.getElementById('enemy-mult-add-number'),
            type: document.getElementById('enemy-mult-type'),
            special: document.getElementById('enemy-mult-sp-number'),
            other: document.getElementById('enemy-mult-other-number'),
            skillDropdown: document.getElementById('enemy-main-skill-dropdown')
        },
        adds: {
            atkP: document.getElementById('enemy-add-atk-p'),
            critRateP: document.getElementById('enemy-add-crit-rate-p'),
            critDmgP: document.getElementById('enemy-add-crit-dmg-p'),
            defP: document.getElementById('enemy-add-def-p'),
            critResP: document.getElementById('enemy-add-crit-res-p'),
            critDmgResP: document.getElementById('enemy-add-crit-dmg-res-p')
        }
    }
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

const impTexts = {
    expected: document.getElementById('imp-expected'),
    normal: document.getElementById('imp-normal'),
    critDmg: document.getElementById('imp-crit-dmg'),
    critRate: document.getElementById('imp-crit-rate')
};

const graphControls = {
    perspective: document.getElementById('graph-perspective'),
    showExpected: document.getElementById('show-expected'),
    showNormal: document.getElementById('show-normal'),
    showCrit: document.getElementById('show-crit')
};

let damageChart = null;
let isRestoringState = false;
let syncToggleCirclePosition = () => {};

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


    const getSideStats = (side) => ({
        atk: parseFloat(inputs[side].atk.value) || 0,
        crit: parseFloat(inputs[side].crit.value) || 0,
        critDmg: parseFloat(inputs[side].critDmg.value) || 0,
        def: parseFloat(inputs[side].def.value) || 0,
        critRes: parseFloat(inputs[side].critRes.value) || 0,
        critDmgRes: parseFloat(inputs[side].critDmgRes.value) || 0
    });

    const getCrayonBoardBonuses = () => {
        const stats = ['hp', 'atk', 'def', 'crit', 'critres'];
        const boards = [
            { id: 1, cost: 2, p: 3 },
            { id: 2, cost: 4, p: 4 },
            { id: 3, cost: 6, p: 5 }
        ];
        let curCost = 0;
        let reqCost = 0;
        let curBuffs = { hp: 0, atk: 0, def: 0, crit: 0, critDmg: 0, critRes: 0, critDmgRes: 0 };
        let tgtBuffs = { hp: 0, atk: 0, def: 0, crit: 0, critDmg: 0, critRes: 0, critDmgRes: 0 };
        
        boards.forEach(b => {
            stats.forEach(s => {
                const curStr = document.getElementById(`cb${b.id}-${s}-cur`)?.value;
                const tgtStr = document.getElementById(`cb${b.id}-${s}-tgt`)?.value;
                const cur = parseInt(curStr) || 0;
                let tgt = tgtStr === '' ? cur : (parseInt(tgtStr) || 0);
                
                const curBuff = cur * (b.p / 100);
                const tgtBuff = tgt * (b.p / 100);
                
                const apply = (obj, key, val) => obj[key] += val;
                if (s === 'crit') { apply(curBuffs, 'crit', curBuff); apply(curBuffs, 'critDmg', curBuff); apply(tgtBuffs, 'crit', tgtBuff); apply(tgtBuffs, 'critDmg', tgtBuff); }
                else if (s === 'critres') { apply(curBuffs, 'critRes', curBuff); apply(curBuffs, 'critDmgRes', curBuff); apply(tgtBuffs, 'critRes', tgtBuff); apply(tgtBuffs, 'critDmgRes', tgtBuff); }
                else { apply(curBuffs, s, curBuff); apply(tgtBuffs, s, tgtBuff); }
                
                curCost += cur * b.cost;
                if (tgt !== cur) reqCost += (tgt - cur) * b.cost;
            });
        });

        const fCurBuff = document.getElementById('cb-follow-cur')?.checked ? 0.03 : 0;
        const fTgtBuff = document.getElementById('cb-follow-tgt')?.checked ? 0.03 : 0;
        
        const aBuff = (id) => {
            const el = document.getElementById(id);
            return el ? { val: (parseFloat(el.value) || 0) / 100, str: el.value } : { val: 0, str: '' };
        };
        
        const asideCur = {
            hp: aBuff('aside-hp-cur').val, atk: aBuff('aside-atk-cur').val, def: aBuff('aside-def-cur').val,
            crit: aBuff('aside-crit-cur').val, critRes: aBuff('aside-critres-cur').val
        };
        
        const asideTgt = {
            hp: aBuff('aside-hp-tgt').str === '' ? asideCur.hp : aBuff('aside-hp-tgt').val,
            atk: aBuff('aside-atk-tgt').str === '' ? asideCur.atk : aBuff('aside-atk-tgt').val,
            def: aBuff('aside-def-tgt').str === '' ? asideCur.def : aBuff('aside-def-tgt').val,
            crit: aBuff('aside-crit-tgt').str === '' ? asideCur.crit : aBuff('aside-crit-tgt').val,
            critRes: aBuff('aside-critres-tgt').str === '' ? asideCur.critRes : aBuff('aside-critres-tgt').val
        };

        const applyExtra = (obj, key, val) => obj[key] += val;
        ['hp', 'atk', 'def'].forEach(s => {
            applyExtra(curBuffs, s, fCurBuff + asideCur[s]);
            applyExtra(tgtBuffs, s, fTgtBuff + asideTgt[s]);
        });
        
        applyExtra(curBuffs, 'crit', fCurBuff + asideCur.crit);
        applyExtra(curBuffs, 'critDmg', fCurBuff + asideCur.crit);
        applyExtra(curBuffs, 'critRes', fCurBuff + asideCur.critRes);
        applyExtra(curBuffs, 'critDmgRes', fCurBuff + asideCur.critRes);

        applyExtra(tgtBuffs, 'crit', fTgtBuff + asideTgt.crit);
        applyExtra(tgtBuffs, 'critDmg', fTgtBuff + asideTgt.crit);
        applyExtra(tgtBuffs, 'critRes', fTgtBuff + asideTgt.critRes);
        applyExtra(tgtBuffs, 'critDmgRes', fTgtBuff + asideTgt.critRes);

        // Update UI
        const curCostEl = document.getElementById('crayon-current-cost');
        if (curCostEl) curCostEl.textContent = curCost + ' 個';
        const reqCostEl = document.getElementById('crayon-required-cost');
        if (reqCostEl) reqCostEl.textContent = reqCost + ' 個';
        
        const setBuffValue = (prefix, key, value) => {
            const el = document.getElementById(`${prefix}-${key}`);
            if (el) el.textContent = `+${(value * 100).toFixed(0)}%`;
        };
        setBuffValue('crayon-cur-buff', 'hp', curBuffs.hp);
        setBuffValue('crayon-cur-buff', 'atk', curBuffs.atk);
        setBuffValue('crayon-cur-buff', 'def', curBuffs.def);
        setBuffValue('crayon-cur-buff', 'crit', curBuffs.crit);
        setBuffValue('crayon-cur-buff', 'critres', curBuffs.critRes);
        setBuffValue('crayon-tgt-buff', 'hp', tgtBuffs.hp);
        setBuffValue('crayon-tgt-buff', 'atk', tgtBuffs.atk);
        setBuffValue('crayon-tgt-buff', 'def', tgtBuffs.def);
        setBuffValue('crayon-tgt-buff', 'crit', tgtBuffs.crit);
        setBuffValue('crayon-tgt-buff', 'critres', tgtBuffs.critRes);

        // Return multipliers
        const mult = (key) => (1 + tgtBuffs[key]) / (1 + curBuffs[key]);
        const hasDiff = reqCost !== 0 || fCurBuff !== fTgtBuff || ['hp','atk','def','crit','critRes'].some(k => asideCur[k] !== asideTgt[k]);
        const applyEnabled = !!document.getElementById('crayon-apply-toggle')?.checked;
        return {
            atk: { new: mult('atk'), cur: 1 }, // We already did the division in the multiplier
            crit: { new: mult('crit'), cur: 1 },
            critDmg: { new: mult('critDmg'), cur: 1 },
            def: { new: mult('def'), cur: 1 },
            critRes: { new: mult('critRes'), cur: 1 },
            critDmgRes: { new: mult('critDmgRes'), cur: 1 },
            hasDiff: hasDiff,
            applyEnabled: applyEnabled
        };
    };

    const perspective = Array.from(inputs.perspective).find(r => r.checked)?.value || 'self';
    const crayonBoard = getCrayonBoardBonuses();

    return {
        perspective,
        dmgType: inputs.dmgType.value,
        isCrayon: crayonBoard.hasDiff && crayonBoard.applyEnabled,
        self: getSideStats('self'),
        enemy: getSideStats('enemy'),
        crayonBonuses: crayonBoard,
        common: (() => {
            const isSelfAttacker = perspective === 'self';
            const att = isSelfAttacker ? inputs.self : inputs.enemy;
            const def = isSelfAttacker ? inputs.enemy : inputs.self;
            
            const rawAdd = parseFloat(att.mult.add?.value || 100);
            let addM = (rawAdd === 0 ? 0 : rawAdd) / 100;
            if (addM < 0.2 && addM !== 0) addM = 0.2;
            
            return {
                skill: (parseFloat(att.mult.skill?.value) === 0 ? 0 : (parseFloat(att.mult.skill?.value) || 100)) / 100,
                add: addM,
                type: (parseFloat(att.mult.type?.value) === 0 ? 0 : (parseFloat(att.mult.type?.value) || 100)) / 100,
                special: (parseFloat(att.mult.special?.value) === 0 ? 0 : (parseFloat(att.mult.special?.value) || 100)) / 100,
                other: (parseFloat(att.mult.other?.value) === 0 ? 0 : (parseFloat(att.mult.other?.value) || 100)) / 100,
                atkP: parseFloat(att.adds.atkP?.value) || 0,
                critRateP: parseFloat(att.adds.critRateP?.value) || 0,
                critDmgP: parseFloat(att.adds.critDmgP?.value) || 0,
                defP: parseFloat(def.adds.defP?.value) || 0,
                critResP: parseFloat(def.adds.critResP?.value) || 0,
                critDmgResP: parseFloat(def.adds.critDmgResP?.value) || 0
            };
        })()
    };
}

function calculateAll(v, overrideSelf = null) {
    const s = overrideSelf || v.self;
    const e = v.enemy;

    const attacker = v.perspective === 'self' ? s : e;
    const defender = v.perspective === 'self' ? e : s;

    const finalAtk = attacker.atk * (1 + v.common.atkP / 100);
    const finalDef = defender.def * (1 + v.common.defP / 100);
    const rate = calcBaseDamageRate(finalAtk, finalDef);
    const baseDamage = finalAtk * rate;
    
    let finalAdd = v.common.add;
    if (v.perspective === 'self') {
        const enemyPresetVal = inputs.enemy.preset.value;
        if (enemyPresetVal && enemyPresetVal.startsWith('e_')) {
            const key = enemyPresetVal.substring(2);
            const p = ENEMY_PRESETS[key];
            if (p && p.weakness && p.weakness[v.dmgType]) {
                const w = p.weakness[v.dmgType];
                if (w.add) {
                    finalAdd += w.add / 100;
                }
            }
        }
    }
    
    const normalDamage = baseDamage * v.common.skill * finalAdd * v.common.type * v.common.special * v.common.other;

    const baseCritRate = calcCritRate(attacker.crit, defender.critRes);
    const finalCritRate = Math.max(0.05, Math.min(0.8, baseCritRate + (v.common.critRateP - v.common.critResP) / 100));

    const baseCritMult = calcCritMultiplier(attacker.critDmg, defender.critDmgRes);
    const finalCritMult = Math.max(1.2, Math.min(2.5, baseCritMult + (v.common.critDmgP - v.common.critDmgResP) / 100));

    const criticalDamage = normalDamage * finalCritMult;
    const expectedDamage = normalDamage * (1 - finalCritRate) + criticalDamage * finalCritRate;

    return { normal: normalDamage, crit: criticalDamage, expected: expectedDamage, critRate: finalCritRate };
}

function getImpClass(delta, isDefender = false) {
    if (delta === 0) return 'imp-neutral';
    const isGood = isDefender ? delta < 0 : delta > 0;
    return isGood ? 'imp-positive' : 'imp-negative';
}

function formatSignedNumber(value, digits = 1) {
    const sign = value > 0 ? '+' : '';
    if (digits === 0) {
        return `${sign}${Math.round(value).toLocaleString()}`;
    }
    return `${sign}${value.toFixed(digits)}`;
}

function formatValue(value, isCritRate = false) {
    if (isCritRate) return `${(value * 100).toFixed(1)}%`;
    return Math.floor(value).toLocaleString();
}

function formatDelta(oldV, newV, isCritRate = false) {
    const delta = newV - oldV;
    if (isCritRate) return `${formatSignedNumber(delta * 100, 1)}pt`;
    return formatSignedNumber(delta, 0);
}

function formatRatio(oldV, newV) {
    if (oldV === 0) return '0.0%';
    const ratio = (newV / oldV - 1) * 100;
    return `${formatSignedNumber(ratio, 1)}%`;
}

function formatImp(oldV, newV, isCritRate = false, isDefender = false) {
    const delta = newV - oldV;
    const cls = getImpClass(delta, isDefender);
    const ratioText = formatRatio(oldV, newV);
    const deltaText = isCritRate ? ` (${formatDelta(oldV, newV, true)})` : '';
    return [
        `<span class="imp-line imp-before-after">(${formatValue(oldV, isCritRate)})</span>`,
        `<span class="imp-line ${cls}">${ratioText}${deltaText}</span>`
    ].join('');
}
function shortenNumber(v) {
    if (Math.abs(v) >= 1e9) return (v / 1e9).toFixed(1).replace(/\.0$/, '') + 'G';
    if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (Math.abs(v) >= 1e3) return (v / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
    return v;
}

function updateWeaknessBadge() {
    const badge = document.getElementById('weakness-badge');
    if (!badge) return;

    const v = getValues();
    const enemyPresetVal = inputs.enemy.preset.value;
    
    if (v.perspective === 'self' && enemyPresetVal && enemyPresetVal.startsWith('e_')) {
        const key = enemyPresetVal.substring(2);
        const p = ENEMY_PRESETS[key];
        
        if (p && p.weakness) {
            const types = Object.keys(p.weakness);
            if (types.length > 0) {
                const wType = types[0]; // e.g. 'phys'
                const wData = p.weakness[wType];
                const typeName = wType === 'phys' ? '物理' : '魔法';
                
                badge.style.display = 'inline-flex';
                if (v.dmgType === wType) {
                    badge.className = 'weakness-badge active';
                    badge.textContent = `${typeName}弱点 +${wData.add}%`;
                } else {
                    badge.style.display = 'none';
                }
                return;
            }
        }
    }
    badge.style.display = 'none';
}

function updateDamageTypeIcon() {
    const chip = document.querySelector('.dmg-type-chip');
    const icon = document.getElementById('main-dmg-type-icon');
    if (!icon || !chip) return;
    const isPhys = inputs.dmgType.value === 'phys';
    icon.src = isPhys ? 'img/Attack_phys.webp' : 'img/Attack_mag.webp';
    icon.alt = isPhys ? '物理' : '魔法';
    chip.classList.toggle('phys', isPhys);
    chip.classList.toggle('mag', !isPhys);
}

function updateUI() {
    updateDamageTypeIcon();
    updateWeaknessBadge();
    const v = getValues(); const oldRes = calculateAll(v); let res = oldRes; let newSelf = null;
    if (v.isCrayon) {
        newSelf = { ...v.self };
        const b = v.crayonBonuses;
        newSelf.atk = (v.self.atk / b.atk.cur) * b.atk.new;
        newSelf.crit = (v.self.crit / b.crit.cur) * b.crit.new;
        newSelf.critDmg = (v.self.critDmg / b.critDmg.cur) * b.critDmg.new;
        newSelf.def = (v.self.def / b.def.cur) * b.def.new;
        newSelf.critRes = (v.self.critRes / b.critRes.cur) * b.critRes.new;
        newSelf.critDmgRes = (v.self.critDmgRes / b.critDmgRes.cur) * b.critDmgRes.new;
        
        res = calculateAll(v, newSelf);
        const isDefender = v.perspective === 'enemy';
        impTexts.expected.innerHTML = formatImp(oldRes.expected, res.expected, false, isDefender); 
        impTexts.normal.innerHTML = formatImp(oldRes.normal, res.normal, false, isDefender); 
        impTexts.critDmg.innerHTML = formatImp(oldRes.crit, res.crit, false, isDefender); 
        impTexts.critRate.innerHTML = formatImp(oldRes.critRate, res.critRate, true, isDefender);
        
        Object.values(impTexts).forEach(el => { if (el) el.style.display = 'block'; });
        
        // Show corrected stats
        document.getElementById('crayon-stats-display').style.display = 'block';
        document.getElementById('corr-atk').textContent = Math.floor(newSelf.atk).toLocaleString();
        document.getElementById('corr-crit').textContent = Math.floor(newSelf.crit).toLocaleString();
        document.getElementById('corr-crit-dmg').textContent = Math.floor(newSelf.critDmg).toLocaleString();
        document.getElementById('corr-def').textContent = Math.floor(newSelf.def).toLocaleString();
        document.getElementById('corr-crit-res').textContent = Math.floor(newSelf.critRes).toLocaleString();
        document.getElementById('corr-crit-dmg-res').textContent = Math.floor(newSelf.critDmgRes).toLocaleString();
    } else {
        document.getElementById('crayon-stats-display').style.display = 'none';
        Object.values(impTexts).forEach(el => { if (el) el.style.display = 'none'; });
    }
    results.normal.textContent = Math.floor(res.normal).toLocaleString(); 
    results.critDmg.textContent = Math.floor(res.crit).toLocaleString(); 
    results.expected.textContent = Math.floor(res.expected).toLocaleString(); 
    results.critRate.textContent = (res.critRate * 100).toFixed(1) + '%';
    
    updateChart(v, v.isCrayon ? newSelf : null);
    if (!isRestoringState) saveState();
}

function swapRoles() {
    const s = getValues().self;
    const e = getValues().enemy;
    
    // Swap main stats
    const stats = ['atk', 'crit', 'critDmg', 'def', 'critRes', 'critDmgRes'];
    stats.forEach(k => {
        const temp = inputs.self[k].value;
        inputs.self[k].value = inputs.enemy[k].value;
        inputs.enemy[k].value = temp;
    });
    
    updateUI();
}
function updateChart(v, overrideSelf = null) {
    const isSelfAxis = graphControls.perspective.value === 'attacker'; 
    const expectedData = []; const normalData = []; const critData = []; 
    const pointColors = []; const pointRadii = [];

    const currentSelf = overrideSelf || v.self;
    let currentXVal = isSelfAxis ? (v.perspective === 'self' ? currentSelf.atk : currentSelf.def) : (v.perspective === 'self' ? v.enemy.def : v.enemy.atk);
    let baseParam = isSelfAxis ? (v.perspective === 'self' ? v.enemy.def : v.enemy.atk) : (v.perspective === 'self' ? currentSelf.atk : currentSelf.def);

    let minRange = baseParam * 0.1, maxRange = baseParam * 3; 
    if (currentXVal < minRange) minRange = currentXVal * 0.8; 
    if (currentXVal > maxRange) maxRange = currentXVal * 1.2;
    
    let step = (maxRange - minRange) / 50, xValues = []; 
    for (let i = minRange; i <= maxRange + step * 0.01; i += step) xValues.push(i);
    xValues.push(currentXVal); xValues.sort((a, b) => a - b);
    xValues = xValues.filter((item, pos, ary) => !pos || item - ary[pos - 1] > step * 0.01);

    for (let i of xValues) {
        let testSelf = { ...currentSelf };
        let testEnemy = { ...v.enemy };
        
        if (isSelfAxis) {
            if (v.perspective === 'self') testSelf.atk = i; else testSelf.def = i;
        } else {
            if (v.perspective === 'self') testEnemy.def = i; else testEnemy.atk = i;
        }

        let res = calculateAll({ ...v, self: testSelf, enemy: testEnemy });
        expectedData.push({ x: i, y: res.expected }); 
        normalData.push({ x: i, y: res.normal }); 
        critData.push({ x: i, y: res.crit });
        
        if (Math.abs(i - currentXVal) < step * 0.01) { pointColors.push('#fff'); pointRadii.push(6); } 
        else { pointColors.push('transparent'); pointRadii.push(0); }
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
                x: { type: 'linear', min: minRange, max: maxRange, title: { display: true, text: isSelfAxis ? '攻撃力' : '防御力', color: '#94a3b8' }, ticks: { color: '#94a3b8', callback: v => shortenNumber(Math.round(v)) }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                y: { title: { display: true, text: 'ダメージ', color: '#94a3b8' }, ticks: { color: '#94a3b8', callback: v => shortenNumber(Math.round(v)) }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
            }
        }
    });
}
// --- Custom Presets & Dropdown Population ---
const CUSTOM_PRESETS_KEY = 'trickcal_custom_presets_v1.8';

function loadCustomPresets() {
    const raw = localStorage.getItem(CUSTOM_PRESETS_KEY);
    if (!raw) return { self: {}, enemy: {} };
    try {
        return JSON.parse(raw);
    } catch (e) {
        return { self: {}, enemy: {} };
    }
}

function saveCustomPreset(side) {
    const name = prompt(side === 'self' ? 'キャラクタープリセット名を入力してください:' : 'エネミープリセット名を入力してください:');
    if (!name) return;
    
    const stats = getValues()[side];
    const custom = loadCustomPresets();
    custom[side][name] = stats;
    localStorage.setItem(CUSTOM_PRESETS_KEY, JSON.stringify(custom));
    
    populatePresets();
    inputs[side].preset.value = 'c_' + name;
    if (inputs[side].delBtn) {
        inputs[side].delBtn.style.display = 'inline-block';
    }
    saveState();
}

function populatePresets() {
    const selfSelect = inputs.self.preset;
    const enemySelect = inputs.enemy.preset;
    
    if (selfSelect) {
        const prevValue = selfSelect.value;
        selfSelect.innerHTML = '<option value="">-- 手動入力 --</option>';

        Object.entries(PLAYER_PRESETS || {}).forEach(([key, data]) => {
            const opt = document.createElement('option');
            opt.value = 'p_' + key;
            opt.textContent = data.name || key;
            selfSelect.appendChild(opt);
        });
        
        const custom = loadCustomPresets();
        if (custom && custom.self) {
            Object.keys(custom.self).forEach(name => {
                const opt = document.createElement('option');
                opt.value = 'c_' + name;
                opt.textContent = name;
                selfSelect.appendChild(opt);
            });
        }

        selfSelect.value = Array.from(selfSelect.options).some(opt => opt.value === prevValue) ? prevValue : '';
    }

    if (enemySelect) {
        const prevValue = enemySelect.value;
        enemySelect.innerHTML = '<option value="">-- 手動入力 --</option>';
        
        Object.entries(ENEMY_PRESETS || {}).forEach(([key, data]) => {
            const opt = document.createElement('option');
            opt.value = 'e_' + key;
            opt.textContent = data.name || key;
            enemySelect.appendChild(opt);
        });
        
        const custom = loadCustomPresets();
        if (custom && custom.enemy) {
            Object.keys(custom.enemy).forEach(name => {
                const opt = document.createElement('option');
                opt.value = 'c_' + name;
                opt.textContent = name;
                enemySelect.appendChild(opt);
            });
        }

        enemySelect.value = Array.from(enemySelect.options).some(opt => opt.value === prevValue) ? prevValue : '';
    }
}

function applyPreset(side, value, shouldSave = true) {
    let presetData = null;
    if (!value) {
        if (side === 'enemy') {
            inputs.enemy.phaseGroup.style.display = 'none';
            inputs.enemy.phase.dataset.currentPreset = '';
            updateMainSkillList();
            syncPhaseSpacer();
        }
        if (inputs[side]?.mult?.skill) inputs[side].mult.skill.value = 100;
        if (inputs[side]?.mult?.skillDropdown) inputs[side].mult.skillDropdown.value = "";
        updateUI();
        if (shouldSave) saveState();
        return;
    }
    
    let stats = null;
    if (value.startsWith('p_')) {
        const key = value.substring(2);
        presetData = PLAYER_PRESETS[key];
        stats = presetData;
    } else if (value.startsWith('e_')) {
        const key = value.substring(2);
        const p = ENEMY_PRESETS[key];
        presetData = p;
        const type = inputs.dmgType.value;
        stats = { 
            atk: type === 'phys' ? p.atk_p : p.atk_m,
            crit: p.crit, critDmg: p.critDmg,
            def: type === 'phys' ? p.def_p : p.def_m,
            critRes: p.critRes, critDmgRes: p.critDmgRes
        };
        // Special case: Enemy Phase
        if (side === 'enemy' && p.phases) {
            inputs.enemy.phaseGroup.style.display = 'block';
            inputs.enemy.phase.innerHTML = p.phases.map((ph, i) => `<option value="${i}">${ph.name}</option>`).join('');
            inputs.enemy.phase.dataset.currentPreset = key;
            syncPhaseSpacer();
        } else if (side === 'enemy') {
            inputs.enemy.phaseGroup.style.display = 'none';
            syncPhaseSpacer();
        }
    } else if (value.startsWith('c_')) {
        const name = value.substring(2);
        stats = loadCustomPresets()[side][name];
    }
    
    if (stats) {
        Object.keys(stats).forEach(k => {
            if (inputs[side][k]) inputs[side][k].value = stats[k];
        });
        
        if (value.startsWith('e_')) {
            const key = value.substring(2);
            const p = ENEMY_PRESETS[key];
            if (inputs[side].mult && inputs[side].mult.special) {
                inputs[side].mult.special.value = p.special !== undefined ? p.special : 100;
            }
        }
    }
    updateMainSkillList(side);
    const skillList = presetData?.skills;
    const initialSkillMult = Array.isArray(skillList) && skillList.length > 0 ? skillList[0].mult : 100;
    if (inputs[side]?.mult?.skill) inputs[side].mult.skill.value = initialSkillMult;
    if (inputs[side]?.mult?.skillDropdown) inputs[side].mult.skillDropdown.value = "";
    updateUI();
    if (shouldSave) saveState();
}

function updateMainSkillList(side = 'enemy') {
    const presetInput = inputs[side]?.preset;
    const dropdown = inputs[side]?.mult?.skillDropdown;
    const defaultHTML = '<option value="" hidden>リスト</option><option value="100">100%</option>';
    if (!presetInput || !dropdown) return;

    const val = presetInput.value;

    dropdown.innerHTML = defaultHTML;

    const isPlayer = side === 'self';
    const prefix = isPlayer ? 'p_' : 'e_';
    if (!val.startsWith(prefix)) return;

    const key = val.substring(2);
    const p = isPlayer ? PLAYER_PRESETS[key] : ENEMY_PRESETS[key];
    if (!p || !p.skills) return;

    let html = defaultHTML;
    p.skills.forEach(s => {
        html += `<option value="${s.mult}">${s.name} (${s.mult}%)</option>`;
    });

    dropdown.innerHTML = html;
    dropdown.value = "";
}

function syncPhaseSpacer() {
    const spacer = document.querySelector('.phase-row-spacer');
    if (!spacer) return;
    const shown = inputs.enemy.phaseGroup && inputs.enemy.phaseGroup.style.display !== 'none';
    spacer.classList.toggle('active', shown);
}

function applyEnemyPhaseSelection(shouldSave = true) {
    const key = inputs.enemy.phase.dataset.currentPreset;
    if (key && ENEMY_PRESETS[key]) {
        const p = ENEMY_PRESETS[key];
        const phase = p.phases?.[inputs.enemy.phase.value];
        if (phase) {
            const type = inputs.dmgType.value;
            const stats = {
                atk: type === 'phys' ? p.atk_p : p.atk_m,
                crit: p.crit,
                critDmg: p.critDmg,
                def: type === 'phys' ? p.def_p : p.def_m,
                critRes: p.critRes,
                critDmgRes: p.critDmgRes
            };
            const scale = phase.mult;
            const scaled = (k, v) => phase.scaleStats.includes(k) ? Math.floor(v * scale) : v;

            inputs.enemy.atk.value = scaled('atk_' + (type === 'phys' ? 'p' : 'm'), stats.atk);
            inputs.enemy.crit.value = scaled('crit', stats.crit);
            inputs.enemy.critDmg.value = scaled('critDmg', stats.critDmg);
            inputs.enemy.def.value = scaled('def_' + (type === 'phys' ? 'p' : 'm'), stats.def);
            inputs.enemy.critRes.value = scaled('critRes', stats.critRes);
            inputs.enemy.critDmgRes.value = scaled('critDmgRes', stats.critDmgRes);
        }
    }
    updateUI();
    if (shouldSave) {
        saveStatePatch({ enemyPreset: inputs.enemy.preset.value, enemyPhase: inputs.enemy.phase.value });
        saveState();
    }
}

function initListeners() {
    // Basic inputs
    const allNumeric = document.querySelectorAll('input[type="number"], select:not(.preset-select)');
    allNumeric.forEach(el => {
        el.addEventListener('input', updateUI);
        el.addEventListener('change', updateUI);
    });

    const persistentInputs = document.querySelectorAll('#tab-calc input, #tab-calc select, #tab-crayon input, #tab-crayon select, #tab-est input, #tab-est select');
    persistentInputs.forEach(el => {
        const persist = () => saveState();
        el.addEventListener('change', persist);
        if (el.tagName === 'INPUT' && !['checkbox', 'radio'].includes(el.type)) {
            el.addEventListener('input', persist);
        }
    });
    
    // Perspective & Global
    if (inputs.self.mult.skillDropdown) {
        inputs.self.mult.skillDropdown.addEventListener('change', (e) => {
            if (e.target.value) {
                inputs.self.mult.skill.value = e.target.value;
                updateUI();
            }
        });
    }
    if (inputs.enemy.mult.skillDropdown) {
        inputs.enemy.mult.skillDropdown.addEventListener('change', (e) => {
            if (e.target.value) {
                inputs.enemy.mult.skill.value = e.target.value;
                updateUI();
            }
        });
    }

    
function updatePerspectiveUI() {
    const isSelf = document.getElementById('perspective-self').checked;
    document.documentElement.dataset.initialPerspective = isSelf ? 'self' : 'enemy';
    
    const selfSide = document.querySelector('.self-side');
    const enemySide = document.querySelector('.enemy-side');
    
    // Update classes
    selfSide.classList.toggle('is-attacker', isSelf);
    selfSide.classList.toggle('is-defender', !isSelf);
    
    enemySide.classList.toggle('is-attacker', !isSelf);
    enemySide.classList.toggle('is-defender', isSelf);
    
    // Update Badges
    const selfBadge = selfSide.querySelector('.role-badge');
    const enemyBadge = enemySide.querySelector('.role-badge');
    if (selfBadge) selfBadge.textContent = isSelf ? 'Attacker' : 'Defender';
    if (enemyBadge) enemyBadge.textContent = isSelf ? 'Defender' : 'Attacker';
    
    // Update perspective toggle circle arrow colors
    const toggleCircle = document.getElementById('perspective-toggle-circle');
    if (toggleCircle) {
        toggleCircle.classList.toggle('defender', !isSelf);
    }
    
    // Toggle Disabled Sections (Gray-out)
    // Self
    const selfMult = document.querySelector('.self-mult-section');
    const selfAtkAdds = document.querySelector('.self-atk-adds-section');
    const selfDefAdds = document.querySelector('.self-def-adds-section');
    
    if (selfMult) selfMult.classList.toggle('disabled-section', !isSelf);
    if (selfAtkAdds) selfAtkAdds.classList.toggle('disabled-section', !isSelf);
    if (selfDefAdds) selfDefAdds.classList.toggle('disabled-section', isSelf);
    
    // Enemy
    const enemyMult = document.querySelector('.enemy-mult-section');
    const enemyAtkAdds = document.querySelector('.enemy-atk-adds-section');
    const enemyDefAdds = document.querySelector('.enemy-def-adds-section');
    
    if (enemyMult) enemyMult.classList.toggle('disabled-section', isSelf);
    if (enemyAtkAdds) enemyAtkAdds.classList.toggle('disabled-section', isSelf);
    if (enemyDefAdds) enemyDefAdds.classList.toggle('disabled-section', !isSelf);
    updateUI();
}

function updateTabUI(activeTab) {
    const circle = document.getElementById('perspective-toggle-circle');
    if (circle) circle.style.display = activeTab === 'calc' ? '' : 'none';

    const bottomBar = document.querySelector('.bottom-result-bar');
    if (bottomBar) bottomBar.style.display = activeTab === 'est' ? 'none' : '';

    if (activeTab === 'calc') {
        syncToggleCirclePosition();
    }

    if (activeTab === 'est') {
        runEstimation();
    }
}


inputs.perspective.forEach(r => r.addEventListener('change', updatePerspectiveUI));

    // Perspective toggle circle click handler
    const toggleCircle = document.getElementById('perspective-toggle-circle');
    if (toggleCircle) {
        toggleCircle.addEventListener('click', () => {
            const selfRadio = document.getElementById('perspective-self');
            const enemyRadio = document.getElementById('perspective-enemy');
            if (selfRadio.checked) {
                enemyRadio.checked = true;
            } else {
                selfRadio.checked = true;
            }
            updatePerspectiveUI();
            saveState();
        });
    }
    inputs.dmgType.addEventListener('change', () => {
        const enemyPresetVal = inputs.enemy.preset.value;
        if (enemyPresetVal && enemyPresetVal.startsWith('e_')) {
            applyPreset('enemy', enemyPresetVal);
        } else {
            updateUI();
            updateMainSkillList();
        }
    });
    if (inputs.swapBtn) inputs.swapBtn.addEventListener('click', swapRoles);
    
    const detailsBtn = document.getElementById('toggle-details-btn');
    if (detailsBtn) {
        detailsBtn.addEventListener('click', () => {
            detailsBtn.classList.toggle('active');
            const panel = document.getElementById('bottom-details-panel');
            if (panel) panel.classList.toggle('collapsed');
        });
    }

    const followCurCb = document.getElementById('cb-follow-cur');
    if (followCurCb) followCurCb.addEventListener('change', updateUI);
    
    const followTgtCb = document.getElementById('cb-follow-tgt');
    if (followTgtCb) followTgtCb.addEventListener('change', updateUI);

    const crayonApplyToggle = document.getElementById('crayon-apply-toggle');
    if (crayonApplyToggle) crayonApplyToggle.addEventListener('change', updateUI);
    
    const syncBtn = document.getElementById('btn-sync-crayon');
    if (syncBtn) {
        syncBtn.addEventListener('click', () => {
            // Copy Follow
            if (followCurCb && followTgtCb) followTgtCb.checked = followCurCb.checked;
            
            // Copy Boards
            const stats = ['hp', 'atk', 'def', 'crit', 'critres'];
            [1, 2, 3].forEach(bId => {
                stats.forEach(s => {
                    const curInput = document.getElementById(`cb${bId}-${s}-cur`);
                    const tgtInput = document.getElementById(`cb${bId}-${s}-tgt`);
                    if (curInput && tgtInput) {
                        tgtInput.value = curInput.value;
                    }
                });
            });
            updateUI();
            saveState();
        });
    }

    // Presets
    inputs.self.preset.addEventListener('change', (e) => {
        saveStatePatch({ selfPreset: e.target.value });
        applyPreset('self', e.target.value);
        if (inputs.self.delBtn) inputs.self.delBtn.style.display = e.target.value.startsWith('c_') ? 'inline-block' : 'none';
    });
    inputs.enemy.preset.addEventListener('change', (e) => {
        saveStatePatch({ enemyPreset: e.target.value, enemyPhase: '' });
        applyPreset('enemy', e.target.value);
        if (inputs.enemy.delBtn) inputs.enemy.delBtn.style.display = e.target.value.startsWith('c_') ? 'inline-block' : 'none';
    });
    
    ['self', 'enemy'].forEach(side => {
        if (inputs[side].delBtn) {
            inputs[side].delBtn.addEventListener('click', () => {
                const val = inputs[side].preset.value;
                if (!val.startsWith('c_')) return;
                if (!confirm('このカスタムプリセットを削除しますか？')) return;
                const name = val.substring(2);
                let custom = loadCustomPresets();
                if (custom[side] && custom[side][name]) {
                    delete custom[side][name];
                    localStorage.setItem(CUSTOM_PRESETS_KEY, JSON.stringify(custom));
                    populatePresets();
                    inputs[side].preset.value = "";
                    inputs[side].delBtn.style.display = 'none';
                    saveState();
                }
            });
        }
    });
    inputs.enemy.phase.addEventListener('change', () => applyEnemyPhaseSelection(true));

    // Save buttons
    inputs.self.saveBtn.addEventListener('click', () => saveCustomPreset('self'));
    inputs.enemy.saveBtn.addEventListener('click', () => saveCustomPreset('enemy'));

    // Estimator
    estimator.addBtn.addEventListener('click', () => {
        estimator.samplesList.appendChild(createSampleRow());
        saveState();
    });

    // Graph
    Object.values(graphControls).forEach(ctrl => ctrl.addEventListener('change', updateUI));

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
            updateTabUI(btn.dataset.tab);
            saveState();
        });
    });

    // Collapsibles
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            const content = header.nextElementSibling;
            if (content && content.classList.contains('collapsible-content')) content.classList.toggle('collapsed-content');
        });
    });
    updateTabUI(document.querySelector('.tab-btn.active')?.dataset.tab || 'calc');
    updatePerspectiveUI();

    // Help icon toggles
    document.querySelectorAll('.help-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const textEl = icon.parentElement?.querySelector('.help-text')
                || icon.closest('h2')?.nextElementSibling;
            if (textEl && textEl.classList.contains('help-text')) {
                textEl.style.display = textEl.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
}

// --- Estimator Logic ---
const estimator = {
    mode: document.getElementById('est-mode'), samplesList: document.getElementById('samples-list'), addBtn: document.getElementById('add-sample-btn'), output: document.getElementById('est-output'), headerRow: document.getElementById('samples-header-row'),
    common: { add: document.getElementById('est-common-add'), critAdd: document.getElementById('est-common-crit-add'), critRes: document.getElementById('est-common-crit-res'), type: document.getElementById('est-common-type'), other: document.getElementById('est-common-other') }
};
let estCommonStats = {
    'atk-side': { add: '100', type: '100', other: '100', critAdd: '0', critRes: '0' },
    'def-side': { add: '100', type: '100', other: '100', critAdd: '0', critRes: '0' }
};

function createSampleRow() {
    const mode = estimator.mode.value; const row = document.createElement('div'); row.className = 'sample-row';
    let mainHtml = mode === 'atk-side' ? `<input type="number" placeholder="自攻撃力" class="est-atk"><input type="number" placeholder="自会心DMG" class="est-crit-stat"><input type="number" placeholder="スキル%" class="est-skill" value="100"><input type="number" placeholder="通常ダメ" class="est-dmg"><input type="number" placeholder="会心ダメ" class="est-crit-dmg">` : `<input type="number" placeholder="自防御力" class="est-def"><input type="number" placeholder="自会心抵抗" class="est-crit-res"><input type="number" placeholder="スキル%" class="est-skill-enemy"><input type="number" placeholder="被ダメ" class="est-dmg-taken"><input type="number" placeholder="会心被ダメ" class="est-crit-taken">`;
    row.innerHTML = `<div class="sample-row-top"><div class="sample-main-inputs">${mainHtml}</div><div class="sample-actions"><button class="btn-detail">+</button><button class="btn-remove">×</button></div></div><div class="sample-detail-inputs collapsed"><div class="detail-grid"><div class="detail-item"><label>与被%</label><input type="number" class="ov-add" placeholder="${estimator.common.add.value}"></div><div class="detail-item"><label>相性%</label><select class="ov-type"><option value=""></option><option value="50">50</option><option value="75">75</option><option value="100">100</option><option value="150">150</option><option value="200">200</option></select></div><div class="detail-item"><label>他%</label><input type="number" class="ov-other" placeholder="${estimator.common.other.value}"></div><div class="detail-item"><label>会増%</label><input type="number" class="ov-crit-add" placeholder="${estimator.common.critAdd.value}"></div><div class="detail-item"><label>会減%</label><input type="number" class="ov-crit-res" placeholder="${estimator.common.critRes.value}"></div></div></div>`;
    row.querySelector('.btn-remove').addEventListener('click', () => { row.remove(); runEstimation(); saveState(); });
    row.querySelector('.btn-detail').addEventListener('click', () => { const detail = row.querySelector('.sample-detail-inputs'); detail.classList.toggle('collapsed'); row.querySelector('.btn-detail').textContent = detail.classList.contains('collapsed') ? '+' : '−'; });
    row.querySelectorAll('input, select').forEach(input => {
        const handler = () => { debouncedRunEstimation(); saveState(); };
        input.addEventListener('input', handler);
        input.addEventListener('change', handler);
        if (input.tagName === 'INPUT') setupSmartStart(input);
    });
    const typeSelect = row.querySelector('.ov-type');
    if (typeSelect) {
        typeSelect.options[0].textContent = estimator.common.type.value;
    }
    row.dataset.mode = estimator.mode.value;
    return row;
}

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
    });
    if (Array.from(estimator.samplesList.querySelectorAll('.sample-row')).filter(r => r.dataset.mode === mode).length === 0) {
        estimator.samplesList.appendChild(createSampleRow());
    }
    runEstimation();
    saveState();
});
Object.entries(estimator.common).forEach(([key, input]) => { 
    const handler = () => {
        estCommonStats[estimator.mode.value][key] = input.value;
        debouncedRunEstimation(); saveState();
    };
    input.addEventListener('input', handler);
    input.addEventListener('change', handler);
});

function runEstimation() {
    const mode = estimator.mode.value, common = { add: (parseFloat(estimator.common.add.value) || 100) / 100, critAdd: (parseFloat(estimator.common.critAdd.value) || 0) / 100, critRes: (parseFloat(estimator.common.critRes.value) || 0) / 100, type: (parseFloat(estimator.common.type.value) || 100) / 100, other: (parseFloat(estimator.common.other.value) || 100) / 100 };
    const rows = Array.from(estimator.samplesList.querySelectorAll('.sample-row')).filter(r => r.dataset.mode === mode);
    if (rows.length === 0) {
        estimator.output.innerHTML = `<div class="est-result-label">データを入力してください</div>`;
        return;
    }
    if (mode === 'atk-side') estimateAtkSide(rows, common);
    else estimateDefSide(rows, common);
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
    if (samples.length < 1) {
        estimator.output.innerHTML = `<div class="est-result-label">データを入力してください</div>`;
        return;
    }
    let atkResultHtml = ""; const allSkillKnown = samples.every(s => s.skill > 0);
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

// --- Persistence & Initialization ---
const STORAGE_KEY = 'trickcal_calc_state_v1.8';

function getActiveTab() {
    return document.querySelector('.tab-btn.active')?.dataset.tab
        || document.querySelector('.tab-page.active')?.id?.replace('tab-', '')
        || 'calc';
}

function collectFieldState() {
    const ignoredIds = new Set(['self-preset', 'enemy-preset', 'enemy-phase', 'perspective-self', 'perspective-enemy']);
    const state = {};
    document.querySelectorAll('#tab-calc input[id], #tab-calc select[id], #tab-crayon input[id], #tab-crayon select[id], #tab-est input[id], #tab-est select[id]').forEach(el => {
        if (ignoredIds.has(el.id)) return;
        state[el.id] = el.type === 'checkbox' ? { kind: 'checked', value: el.checked } : { kind: 'value', value: el.value };
    });
    return state;
}

function restoreFieldState(fieldState) {
    if (!fieldState) return;
    Object.entries(fieldState).forEach(([id, saved]) => {
        const el = document.getElementById(id);
        if (!el || !saved) return;
        if (saved.kind === 'checked') el.checked = !!saved.value;
        else el.value = saved.value;
    });
}

function saveStatePatch(patch) {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const state = raw ? JSON.parse(raw) : {};
        Object.assign(state, patch);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error("Partial save failed", e);
    }
}

function saveState() {
    if (isRestoringState) return;
    const v = getValues();
    const state = {
        perspective: v.perspective,
        isCrayon: v.isCrayon,
        self: v.self,
        enemy: v.enemy,
        selfPreset: inputs.self.preset.value,
        enemyPreset: inputs.enemy.preset.value,
        enemyPhase: inputs.enemy.phase.value,
        self_mult: Object.fromEntries(Object.entries(inputs.self.mult).map(([k,v]) => [k, v?.value || ''])),
        self_adds: Object.fromEntries(Object.entries(inputs.self.adds).map(([k,v]) => [k, v?.value || ''])),
        enemy_mult: Object.fromEntries(Object.entries(inputs.enemy.mult).map(([k,v]) => [k, v?.value || ''])),
        enemy_adds: Object.fromEntries(Object.entries(inputs.enemy.adds).map(([k,v]) => [k, v?.value || ''])),
        tab: getActiveTab(),
        dmgType: inputs.dmgType.value,
        estMode: estimator.mode.value,
        estCommonStats: estCommonStats,
        fieldState: collectFieldState(),
        crayonBoards: Array.from(document.querySelectorAll('input[id^="cb"]')).reduce((acc, el) => { acc[el.id] = el.value; return acc; }, {}),
        samples: []
    };
    
    document.querySelectorAll('.sample-row').forEach(row => {
        const rowData = { mode: row.dataset.mode };
        row.querySelectorAll('input, select').forEach(input => {
            const cls = Array.from(input.classList).find(c => c.startsWith('est-') || c.startsWith('ov-'));
            if (cls) rowData[cls] = input.value;
        });
        state.samples.push(rowData);
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
        isRestoringState = true;
        const state = JSON.parse(raw);
        if (state.perspective) {
            const r = Array.from(inputs.perspective).find(el => el.value === state.perspective);
            if (r) r.checked = true;
        }
        if (state.dmgType) inputs.dmgType.value = state.dmgType;

        const setSide = (side, data) => {
            if (!data) return;
            Object.entries(data).forEach(([k, val]) => {
                if (inputs[side][k]) inputs[side][k].value = val;
            });
        };
        setSide('self', state.self);
        setSide('enemy', state.enemy);

        if (state.selfPreset !== undefined) inputs.self.preset.value = state.selfPreset;
        if (state.enemyPreset !== undefined) inputs.enemy.preset.value = state.enemyPreset;
        
        const setSub = (group, data) => {
            if (!data) return;
            Object.entries(data).forEach(([k, val]) => {
                if (group[k]) group[k].value = val;
            });
        };
        if (state.self_mult) setSub(inputs.self.mult, state.self_mult);
        if (state.self_adds) setSub(inputs.self.adds, state.self_adds);
        if (state.enemy_mult) setSub(inputs.enemy.mult, state.enemy_mult);
        if (state.enemy_adds) setSub(inputs.enemy.adds, state.enemy_adds);
        
        if (state.selfPreset) {
            inputs.self.preset.value = state.selfPreset;
        }
        if (state.enemyPreset) {
            inputs.enemy.preset.value = state.enemyPreset;
            applyPreset('enemy', state.enemyPreset, false);
            if (inputs.enemy.phaseGroup.style.display !== 'none') {
                if (state.enemyPhase !== undefined && state.enemyPhase !== '') {
                    inputs.enemy.phase.value = state.enemyPhase;
                } else if (inputs.enemy.phase.options.length > 0) {
                    inputs.enemy.phase.value = inputs.enemy.phase.options[0].value;
                }
                applyEnemyPhaseSelection(false);
                setSide('enemy', state.enemy);
                if (state.enemy_mult) setSub(inputs.enemy.mult, state.enemy_mult);
                if (state.enemy_adds) setSub(inputs.enemy.adds, state.enemy_adds);
            }
        }
        
        if (state.estCommonStats) estCommonStats = state.estCommonStats;
        if (state.estMode) estimator.mode.value = state.estMode;
        updateHeaders();
        const currentEstStats = estCommonStats[estimator.mode.value];
        if (currentEstStats) {
            Object.entries(currentEstStats).forEach(([k, v]) => {
                if (estimator.common[k]) estimator.common[k].value = v;
            });
        }
        
        if (state.crayonBoards) {
            Object.entries(state.crayonBoards).forEach(([id, val]) => {
                const el = document.getElementById(id);
                if (el) el.value = val;
            });
        }
        
        if (state.samples) {
            estimator.samplesList.innerHTML = '';
            state.samples.forEach(rowData => {
                const prevMode = estimator.mode.value;
                if (rowData.mode) estimator.mode.value = rowData.mode;
                const row = createSampleRow();
                Object.entries(rowData).forEach(([cls, val]) => {
                    const input = row.querySelector('.' + cls);
                    if (input) input.value = val;
                });
                row.style.display = row.dataset.mode === prevMode ? 'block' : 'none';
                estimator.samplesList.appendChild(row);
                estimator.mode.value = prevMode;
            });
        }

        restoreFieldState(state.fieldState);
        
        if (state.tab) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === state.tab));
            document.querySelectorAll('.tab-page').forEach(p => p.classList.toggle('active', p.id === 'tab-' + state.tab));
            updateTabUI(state.tab);
        }

        updatePerspectiveUI();
        updateUI();
        runEstimation();
        
        // Update delete buttons visibility on load
        ['self', 'enemy'].forEach(side => {
            if (inputs[side].delBtn) {
                inputs[side].delBtn.style.display = inputs[side].preset.value.startsWith('c_') ? 'inline-block' : 'none';
            }
        });
    } catch (e) {
        console.error("Load failed", e);
    } finally {
        isRestoringState = false;
    }
}

document.getElementById('reset-btn').addEventListener('click', () => {
    const activeTab = getActiveTab();
    const messages = {
        calc: '計算機をリセットしますか？',
        crayon: 'クレヨンボードをリセットしますか？',
        est: '推定データをリセットしますか？'
    };
    if (!confirm(messages[activeTab] || 'リセットしますか？')) return;
    
    if (activeTab === 'calc') {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    } else if (activeTab === 'crayon') {
        document.querySelectorAll('input[id^="cb-"]').forEach(el => { el.value = 0; });
        const applyToggle = document.getElementById('crayon-apply-toggle');
        if (applyToggle) applyToggle.checked = false;
        updateUI();
        saveState();
    } else {
        estimator.samplesList.innerHTML = '';
        estimator.samplesList.appendChild(createSampleRow());
        runEstimation();
    }
});

document.addEventListener('input', (e) => { 
    if (e.target.closest('.app-container')) {
        saveState();
        if (e.target.classList.contains('est-input') || e.target.closest('.estimator-panel')) {
            runEstimation();
        }
    }
});

document.addEventListener('change', (e) => {
    if (e.target.closest('.app-container')) {
        saveState();
    }
});

// Initialize Everything
populatePresets();
loadState();
initListeners();
updateHeaders();
if (estimator.samplesList.children.length === 0) estimator.samplesList.appendChild(createSampleRow());
updateMainSkillList('self');
updateMainSkillList('enemy');

window.addEventListener('beforeunload', saveState);
window.addEventListener('pagehide', saveState);

// Keep toggle circle outside .panel so position:fixed works consistently,
// and align it to the actual center line between the two side panels.
(function() {
    const circle = document.getElementById('perspective-toggle-circle');
    const sidePanels = document.querySelector('.side-panels');
    const appContainer = document.querySelector('.app-container');
    if (!circle || !sidePanels || !appContainer) return;

    appContainer.appendChild(circle);

    syncToggleCirclePosition = function(attempt = 0) {
        if (window.matchMedia('(max-width: 700px)').matches) {
            circle.style.left = '';
            circle.style.right = '1rem';
            return;
        }

        const rect = sidePanels.getBoundingClientRect();
        if (rect.width <= 0) {
            if (attempt < 4) {
                requestAnimationFrame(() => syncToggleCirclePosition(attempt + 1));
            }
            return;
        }
        circle.style.right = '';
        circle.style.left = `${rect.left + rect.width / 2}px`;
    };

    syncToggleCirclePosition();
    window.addEventListener('resize', () => syncToggleCirclePosition());
    window.addEventListener('scroll', () => syncToggleCirclePosition(), { passive: true });
})();
