// DOM Elements
const inputs = {
    dmgType: document.getElementById('main-dmg-type'),
    perspective: document.getElementsByName('perspective'),
    swapBtn: document.getElementById('swap-stats-btn'),
    
    self: {
        preset: document.getElementById('self-preset'),
        saveBtn: document.getElementById('save-self-preset'),
        delBtn: document.getElementById('del-self-preset'),
        hp: document.getElementById('self-hp'),
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
            special: null,
            other: document.getElementById('self-mult-other-number'),
            skillDropdown: document.getElementById('self-main-skill-dropdown')
        },
        adds: {
            hpP: document.getElementById('self-add-hp-p'),
            atkP: document.getElementById('self-add-atk-p'),
            critRateP: document.getElementById('self-add-crit-rate-p'),
            critDmgP: document.getElementById('self-add-crit-dmg-p'),
            defP: document.getElementById('self-add-def-p'),
            critResP: document.getElementById('self-add-crit-res-p'),
            critDmgResP: document.getElementById('self-add-crit-dmg-res-p')
        },
        debuffs: {
            poison: document.getElementById('self-debuff-poison'),
            noise: document.getElementById('self-debuff-noise')
        }
    },
    
    enemy: {
        preset: document.getElementById('enemy-preset'),
        saveBtn: document.getElementById('save-enemy-preset'),
        delBtn: document.getElementById('del-enemy-preset'),
        phase: document.getElementById('enemy-phase'),
        phaseGroup: document.getElementById('enemy-phase-group'),
        hp: document.getElementById('enemy-hp'),
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
            hpP: document.getElementById('enemy-add-hp-p'),
            atkP: document.getElementById('enemy-add-atk-p'),
            critRateP: document.getElementById('enemy-add-crit-rate-p'),
            critDmgP: document.getElementById('enemy-add-crit-dmg-p'),
            defP: document.getElementById('enemy-add-def-p'),
            critResP: document.getElementById('enemy-add-crit-res-p'),
            critDmgResP: document.getElementById('enemy-add-crit-dmg-res-p')
        },
        debuffs: {
            poison: document.getElementById('enemy-debuff-poison'),
            noise: document.getElementById('enemy-debuff-noise'),
            anger: document.getElementById('enemy-debuff-anger')
        }
    }
};

const hpSurvivalToggle = document.getElementById('hp-survival-toggle');
const hpSurvivalToggleEnemy = document.getElementById('hp-survival-toggle-enemy');

function isHpSurvivalEnabled() {
    return !!(hpSurvivalToggle?.checked || hpSurvivalToggleEnemy?.checked);
}

function syncHpSurvivalToggles(source = null) {
    const checked = !!source?.checked;
    [hpSurvivalToggle, hpSurvivalToggleEnemy].filter(Boolean).forEach(toggle => {
        if (toggle !== source) toggle.checked = checked;
    });
}

function updateHpSurvivalToggleVisibility() {
    const isSelfDefender = document.getElementById('perspective-enemy')?.checked;
    document.querySelectorAll('.self-side .hp-survival-toggle-inline').forEach(el => {
        el.style.display = isSelfDefender ? 'inline-flex' : 'none';
    });
    document.querySelectorAll('.enemy-side .hp-survival-toggle-inline').forEach(el => {
        el.style.display = isSelfDefender ? 'none' : 'inline-flex';
    });
}

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

const hpResultTexts = {
    normal: document.getElementById('hp-normal-rate'),
    expected: document.getElementById('hp-expected-rate'),
    crit: document.getElementById('hp-crit-rate')
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
let isSpellSelectedPanelOpen = false;
let isCalcSpellSelectedPanelOpen = false;
let mobileVisibleSide = 'self';
let mobileCrayonVisibleSide = 'current';
let spellApplyEnabled = true;
let artifactApplyEnabled = true;
let spellSelections = {};
let activeSpellEffectPopoverCardId = null;
let activeSpellEffectPopoverAnchor = null;
let activeRelicPickerSlot = null;
let activeRelicEffectAnchor = null;
let activeSolderPopoverAnchor = null;
let activeSolderPopoverContext = null;
const preloadedCardImages = new Map();

function syncBottomBarSafeArea() {
    const bottomBar = document.querySelector('.bottom-result-bar');
    if (!bottomBar || bottomBar.style.display === 'none') {
        document.documentElement.style.setProperty('--bottom-bar-safe', '0px');
        return;
    }
    const rect = bottomBar.getBoundingClientRect();
    const safePadding = Math.ceil(rect.height) + 16;
    document.documentElement.style.setProperty('--bottom-bar-safe', `${safePadding}px`);
}

function syncRelicPickerSafeArea() {
    const header = document.querySelector('header');
    const bottomBar = document.querySelector('.bottom-result-bar');
    const toggleCircle = document.getElementById('perspective-toggle-circle');
    const root = document.documentElement;
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
    const bottomHeight = bottomBar ? Math.ceil(bottomBar.getBoundingClientRect().height) : 0;
    const toggleBottom = toggleCircle ? Math.ceil(toggleCircle.getBoundingClientRect().bottom) : 0;
    const topSafe = Math.max(headerHeight + 12, toggleBottom + 12);
    root.style.setProperty('--relic-picker-top-safe', `${topSafe}px`);
    root.style.setProperty('--relic-picker-bottom-safe', `${bottomHeight + 12}px`);
}

function isSpellApplyEnabled() {
    const toggle = document.getElementById('spell-apply-toggle') || document.getElementById('self-spell-apply-toggle');
    return toggle ? !!toggle.checked : spellApplyEnabled;
}

function isArtifactApplyEnabled() {
    const toggle = document.getElementById('self-artifact-apply-toggle');
    return toggle ? !!toggle.checked : artifactApplyEnabled;
}

function getSpellApplyToggles() {
    return [
        document.getElementById('spell-apply-toggle'),
        document.getElementById('self-spell-apply-toggle')
    ].filter(Boolean);
}

function setSpellApplyEnabled(enabled) {
    spellApplyEnabled = !!enabled;
    getSpellApplyToggles().forEach(toggle => {
        toggle.checked = spellApplyEnabled;
    });
}

function getArtifactApplyToggles() {
    return [
        document.getElementById('self-artifact-apply-toggle')
    ].filter(Boolean);
}

function setArtifactApplyEnabled(enabled) {
    artifactApplyEnabled = !!enabled;
    getArtifactApplyToggles().forEach(toggle => {
        toggle.checked = artifactApplyEnabled;
    });
}

function bindApplyToggles() {
    getSpellApplyToggles().forEach(applyToggle => {
        if (applyToggle.dataset.bound) return;
        applyToggle.dataset.bound = '1';
        applyToggle.addEventListener('change', () => {
            setSpellApplyEnabled(applyToggle.checked);
            updateUI();
            saveSpellSelectionsState();
            saveState();
        });
    });

    getArtifactApplyToggles().forEach(applyToggle => {
        if (applyToggle.dataset.bound) return;
        applyToggle.dataset.bound = '1';
        applyToggle.addEventListener('change', () => {
            setArtifactApplyEnabled(applyToggle.checked);
            updateUI();
            saveState();
        });
    });
}

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

function createEmptyCardBonus() {
    return {
        hpP: 0,
        healingP: 0,
        hpRecoveryP: 0,
        atkP: 0,
        defP: 0,
        enemyDefDownP: 0,
        hasteP: 0,
        critRateP: 0,
        critDmgP: 0,
        critResP: 0,
        critDmgResP: 0,
        enemyCritResDownP: 0,
        enemyCritDmgResDownP: 0,
        addP: 0,
        takenDmgP: 0,
        specialP: 0,
        otherP: 0,
        notes: []
    };
}

function accumulateCardBonus(target, source) {
    if (!source) return target;
    ['hpP', 'healingP', 'hpRecoveryP', 'atkP', 'defP', 'enemyDefDownP', 'hasteP', 'critRateP', 'critDmgP', 'critResP', 'critDmgResP', 'enemyCritResDownP', 'enemyCritDmgResDownP', 'addP', 'takenDmgP', 'specialP', 'otherP'].forEach(key => {
        target[key] = (target[key] || 0) + (source[key] || 0);
    });
    return target;
}

function createEmptyCardEffectState(card) {
    const state = {};
    (card?.conditionalEffects || []).forEach(effect => {
        state[effect.id] = !!effect.defaultEnabled;
    });
    return state;
}

function getCardSolderMaxLevel(card) {
    const explicitMax = parseInt(card?.solderMax ?? '', 10);
    if (explicitMax > 0) return explicitMax;
    if (card?.solderBonuses && typeof card.solderBonuses === 'object') {
        const levels = Object.keys(card.solderBonuses)
            .map(key => parseInt(key, 10))
            .filter(Number.isFinite);
        if (levels.length > 0) return Math.max(...levels);
    }
    return 2;
}

function normalizeCardSolderLevel(card, rawLevel) {
    const maxLevel = getCardSolderMaxLevel(card);
    const level = Math.max(0, parseInt(rawLevel || 0, 10) || 0);
    return Math.min(level, maxLevel);
}

function normalizeSolderForStar(card, star, rawLevel) {
    const normalizedStar = Math.max(1, Math.min(5, parseInt(star || 1, 10) || 1));
    if (normalizedStar < 5) return 0;
    return normalizeCardSolderLevel(card, rawLevel || 0);
}

function getDisplayedSolderLevel(card, star, rawLevel) {
    const normalizedStar = Math.max(1, Math.min(5, parseInt(star || 1, 10) || 1));
    return normalizedStar >= 5 ? normalizeCardSolderLevel(card, rawLevel || 0) : 0;
}

function normalizeSpellEntry(card, rawEntry = {}) {
    const normalized = {
        star: Math.max(1, Math.min(5, parseInt(rawEntry.star || 1, 10) || 1)),
        qty: Math.max(0, parseInt(rawEntry.qty || 0, 10) || 0),
        solder: normalizeCardSolderLevel(card, rawEntry.solder || 0),
        effects: createEmptyCardEffectState(card)
    };
    if (rawEntry.effects && typeof rawEntry.effects === 'object') {
        Object.keys(normalized.effects).forEach(effectId => {
            normalized.effects[effectId] = !!rawEntry.effects[effectId];
        });
    }
    return normalized;
}

function getCardLabel(card) {
    return `${card.rarity} | ${card.name}`;
}

function getCardImagePath(card) {
    const folder = card.kind === 'artifact' ? 'Artifact' : 'Spell';
    return `img/Card/${folder}/${card.imageFile || `${card.name}.webp`}`;
}

function getCardCost(card, star = 1) {
    if (Array.isArray(card.costByStar) && card.costByStar.length > 0) {
        const idx = Math.max(0, Math.min(card.costByStar.length - 1, (parseInt(star, 10) || 1) - 1));
        return card.costByStar[idx];
    }
    return card.cost || 0;
}

function getCardRarityBadgePath(card) {
    if (card.signature) return 'img/Card/Card_Signature.webp';
    if (card.rarity === '伝説') return 'img/Card/Card_Legendary.webp';
    if (card.rarity === '希少') return 'img/Card/Card_Unique.webp';
    if (card.rarity === '高級') return 'img/Card/Card_Rare.webp';
    return '';
}

function collectCardImageUrls() {
    const urls = new Set();
    const addUrl = (src) => {
        if (typeof src === 'string' && src.trim()) {
            urls.add(src.trim());
        }
    };

    addUrl('img/Card/cost.webp');
    addUrl('img/Card/sunshine_token.webp');
    addUrl('img/Card/Card_Signature.webp');
    addUrl('img/Card/Card_Legendary.webp');
    addUrl('img/Card/Card_Unique.webp');
    addUrl('img/Card/Card_Rare.webp');

    if (typeof CARD_LIBRARY !== 'undefined') {
        ['artifacts', 'spells'].forEach((category) => {
            const collection = CARD_LIBRARY[category];
            if (!Array.isArray(collection)) return;
            collection.forEach((card) => {
                addUrl(getCardImagePath(card));
                addUrl(getCardRarityBadgePath(card));
            });
        });
    }

    return Array.from(urls);
}

function preloadCardImages() {
    collectCardImageUrls().forEach((src) => {
        if (preloadedCardImages.has(src)) return;
        const img = new Image();
        img.decoding = 'async';
        img.src = src;
        preloadedCardImages.set(src, img);
    });
    return preloadedCardImages.size;
}

function scheduleCardImagePreload() {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(preloadCardImages, { timeout: 1200 });
    } else {
        window.setTimeout(preloadCardImages, 250);
    }
}

function getCardRarityLabel(card) {
    return card.signature ? '愛用' : (card.rarity || '');
}

function getCardFrameClass(card) {
    if (card.signature) return 'rarity-signature';
    if (card.rarity === '伝説') return 'rarity-legendary';
    if (card.rarity === '希少') return 'rarity-unique';
    if (card.rarity === '高級') return 'rarity-rare';
    return '';
}

function getCardRarityRank(card) {
    if (card?.signature) return 0;
    if (card?.rarity === '伝説') return 1;
    if (card?.rarity === '希少') return 2;
    if (card?.rarity === '高級') return 3;
    return 9;
}

function sortCardsForDisplay(cards = []) {
    return [...cards].sort((a, b) => {
        const rarityDiff = getCardRarityRank(a) - getCardRarityRank(b);
        if (rarityDiff !== 0) return rarityDiff;
        return String(a.name || '').localeCompare(String(b.name || ''), 'ja');
    });
}

function paintGradePicker(picker, starValue) {
    const star = Math.max(1, Math.min(5, parseInt(starValue, 10) || 1));
    picker.querySelectorAll('.grade-star-btn').forEach((btn, idx) => {
        const img = btn.querySelector('.grade-star-icon');
        if (img) {
            img.src = idx < star ? 'img/Grade_on.webp' : 'img/Grade_off.webp';
        }
    });
}

function createGradePicker(currentStar, onChange, cardId = '') {
    const wrap = document.createElement('div');
    wrap.className = 'grade-picker';
    if (cardId) wrap.dataset.cardId = cardId;
    const star = Math.max(1, Math.min(5, parseInt(currentStar, 10) || 1));
    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'grade-star-btn';
        btn.dataset.value = String(i);
        btn.setAttribute('aria-label', `星${i}`);

        const img = document.createElement('img');
        img.className = 'grade-star-icon';
        img.src = i <= star ? 'img/Grade_on.webp' : 'img/Grade_off.webp';
        img.alt = '';

        btn.appendChild(img);
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            onChange(i);
        });
        wrap.appendChild(btn);
    }
    return wrap;
}

function createGradeDisplay(currentStar) {
    const wrap = document.createElement('div');
    wrap.className = 'grade-picker grade-picker-readonly';
    const star = Math.max(1, Math.min(5, parseInt(currentStar, 10) || 1));
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.className = 'grade-star-icon grade-star-icon-readonly';
        img.src = i <= star ? 'img/Grade_on.webp' : 'img/Grade_off.webp';
        img.alt = '';
        wrap.appendChild(img);
    }
    return wrap;
}

function createSolderButton(card, currentLevel, onOpen, enabled = true) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'solder-pill-btn';
    btn.dataset.level = String(currentLevel);
    btn.classList.toggle('is-disabled', !enabled);
    const levelText = String(currentLevel);
    btn.innerHTML = `
        <img src="img/Card/sunshine_token.webp" alt="" class="solder-token-icon">
        <span class="solder-token-value-fill"><span class="solder-token-plus">+</span><span class="solder-token-number">${levelText}</span></span>
        <span class="solder-token-value"><span class="solder-token-plus">+</span><span class="solder-token-number">${levelText}</span></span>
    `;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!enabled) return;
        onOpen(btn);
    });
    return btn;
}

function ensureSolderPopoverLayer() {
    const appContainer = document.querySelector('.app-container');
    let popover = document.getElementById('solder-level-popover');
    if (!popover) {
        popover = document.createElement('div');
        popover.id = 'solder-level-popover';
        popover.className = 'solder-level-popover';
        popover.style.display = 'none';
        appContainer?.appendChild(popover);
    } else if (appContainer && popover.parentElement !== appContainer) {
        appContainer.appendChild(popover);
    }
    return popover;
}

function closeSolderPopover() {
    const popover = document.getElementById('solder-level-popover');
    if (popover) popover.style.display = 'none';
    activeSolderPopoverAnchor = null;
    activeSolderPopoverContext = null;
}

function positionSolderPopover(anchorEl) {
    const popover = document.getElementById('solder-level-popover');
    if (!popover || !anchorEl) return;
    const anchorRect = anchorEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const gap = 8;
    let left = anchorRect.left + (anchorRect.width / 2) - (popRect.width / 2);
    let top = anchorRect.bottom + gap;
    const maxLeft = window.innerWidth - popRect.width - 12;
    left = Math.max(12, Math.min(maxLeft, left));
    const maxTop = window.innerHeight - popRect.height - 12;
    if (top > maxTop) {
        top = Math.max(12, anchorRect.top - popRect.height - gap);
    }
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
}

function openSolderPopover(card, currentLevel, onSelect, anchorEl, options = {}) {
    const popover = ensureSolderPopoverLayer();
    if (!popover || !card || !anchorEl) return;
    const maxLevel = options.maxLevel ?? getCardSolderMaxLevel(card);
    popover.innerHTML = '';
    const list = document.createElement('div');
    list.className = 'solder-level-list';
    for (let level = 0; level <= maxLevel; level++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'solder-level-option';
        btn.dataset.level = String(level);
        const title = document.createElement('span');
        title.className = 'solder-level-option-title';
        title.innerHTML = `
            <span class="solder-level-option-prefix">はんだ</span>
            <span class="solder-level-option-token">
                <img src="img/Card/sunshine_token.webp" alt="" class="solder-token-icon solder-token-icon-small">
                <span class="solder-token-value-fill solder-token-value-fill-small"><span class="solder-token-plus">+</span><span class="solder-token-number">${level}</span></span>
                <span class="solder-token-value solder-token-value-small"><span class="solder-token-plus">+</span><span class="solder-token-number">${level}</span></span>
            </span>
        `;
        const parts = typeof options.getDescriptionParts === 'function'
            ? (options.getDescriptionParts(level) || [])
            : (level > 0 && card.solderBonuses?.[level] ? formatCardSummaryParts(card.solderBonuses[level]) : []);
        const desc = document.createElement('span');
        desc.className = 'solder-level-option-desc';
        desc.textContent = level === 0
            ? (options.zeroText || '追加効果なし')
            : (parts.length ? parts.join(' / ') : '追加効果データなし');
        btn.classList.toggle('active', level === currentLevel);
        btn.appendChild(title);
        btn.appendChild(desc);
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect(level);
            closeSolderPopover();
        });
        list.appendChild(btn);
    }
    popover.appendChild(list);
    popover.style.display = 'block';
    activeSolderPopoverAnchor = anchorEl;
    activeSolderPopoverContext = options.context || { cardId: card.id };
    positionSolderPopover(anchorEl);
}

function populateCardSelectOptions(select, kind) {
    const cards = CARD_LIBRARY[kind === 'artifact' ? 'artifacts' : 'spells'] || [];
    const currentValue = select.value;
    const placeholder = kind === 'artifact' ? '-- 遺物カードなし --' : '-- スペルカードなし --';
    select.innerHTML = `<option value="">${placeholder}</option>`;
    cards.forEach(card => {
        const opt = document.createElement('option');
        opt.value = card.id;
        opt.textContent = getCardLabel(card);
        select.appendChild(opt);
    });
    select.value = Array.from(select.options).some(opt => opt.value === currentValue) ? currentValue : '';
}

function getRelicCards() {
    return CARD_LIBRARY.artifacts || [];
}

function getArtifactSelectionCost(side = 'self') {
    const selections = collectCardSelections(side);
    return (selections.artifacts || selections.relics || []).reduce((sum, selection) => {
        if (!selection?.cardId) return sum;
        const card = CARD_INDEX[selection.cardId];
        if (!card) return sum;
        return sum + getCardCost(card, selection.star || 1);
    }, 0);
}

function closeRelicPicker() {
    activeRelicPickerSlot = null;
    const popover = document.getElementById('relic-picker-popover');
    if (popover) popover.style.display = 'none';
}

function ensureEffectPopoverLayer() {
    const appContainer = document.querySelector('.app-container');
    const spellPopover = document.getElementById('spell-effect-popover');
    const relicPopover = document.getElementById('relic-effect-popover');
    if (appContainer && spellPopover && spellPopover.parentElement !== appContainer) {
        appContainer.appendChild(spellPopover);
    }
    if (appContainer && relicPopover && relicPopover.parentElement !== appContainer) {
        appContainer.appendChild(relicPopover);
    }
}

function openRelicPicker(slot) {
    const popover = document.getElementById('relic-picker-popover');
    const grid = document.getElementById('relic-picker-grid');
    if (!slot || !popover || !grid) return;

    activeRelicPickerSlot = slot;
    grid.innerHTML = '';
    const currentCardId = slot.querySelector('.card-select')?.value || '';

    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'relic-picker-card relic-picker-clear-card';
    clearBtn.title = '外す';
    clearBtn.innerHTML = '<span class="relic-picker-clear-mark">×</span>';
    clearBtn.addEventListener('click', () => {
        const select = slot.querySelector('.card-select');
        if (select) select.value = '';
        slot.dataset.star = '1';
        setRelicEffectState(slot, null, {});
        updateRelicSlotVisual(slot);
        closeRelicPicker();
        updateUI();
        saveState();
    });
    grid.appendChild(clearBtn);

    getRelicCards().forEach(card => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'relic-picker-card';
        if (card.id === currentCardId) btn.classList.add('active');

        const frameClass = getCardFrameClass(card);
        const media = document.createElement('div');
        media.className = 'relic-picker-card-media';
        if (frameClass) media.classList.add(frameClass);

        const bg = document.createElement('img');
        bg.className = 'relic-picker-card-bg';
        bg.alt = '';

        const img = document.createElement('img');
        img.className = 'relic-picker-card-thumb';
        img.src = getCardImagePath(card);
        img.alt = card.name;
        const thumbClip = document.createElement('div');
        thumbClip.className = 'relic-picker-card-thumb-clip';
        thumbClip.appendChild(img);

        const name = document.createElement('div');
        name.className = 'relic-picker-card-name sr-only';
        name.textContent = card.name;

        const rarityBg = getCardRarityBadgePath(card);
        if (rarityBg) bg.src = rarityBg;
        media.appendChild(bg);
        media.appendChild(thumbClip);
        btn.appendChild(media);
        btn.appendChild(name);
        btn.title = card.name;
        btn.addEventListener('click', () => {
            const select = slot.querySelector('.card-select');
            if (select) select.value = card.id;
            setRelicEffectState(slot, card, {});
            updateRelicSlotVisual(slot);
            closeRelicPicker();
            updateUI();
            saveState();
        });
        grid.appendChild(btn);
    });

    syncRelicPickerSafeArea();
    popover.style.display = 'block';
}

function closeRelicEffectPopover() {
    activeRelicEffectAnchor = null;
    const popover = document.getElementById('relic-effect-popover');
    if (popover) {
        popover.style.display = 'none';
        popover.style.visibility = 'hidden';
    }
}

function positionRelicEffectPopover(anchorEl) {
    const popover = document.getElementById('relic-effect-popover');
    const bottomBar = document.querySelector('.bottom-result-bar');
    if (!popover || !anchorEl) return;
    const rect = anchorEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const margin = 12;
    const bottomBarRect = bottomBar?.getBoundingClientRect();
    const bottomLimit = bottomBarRect ? (bottomBarRect.top - margin) : (window.innerHeight - margin);
    const maxLeft = Math.max(margin, window.innerWidth - popRect.width - margin);
    let left = rect.left + rect.width * 0.5 - popRect.width * 0.5;
    let top = rect.bottom + 8;

    if (top + popRect.height > bottomLimit) {
        top = rect.top - popRect.height - 8;
    }
    if (top < margin) {
        top = margin;
    }

    left = Math.min(Math.max(margin, left), maxLeft);
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
}

function openRelicEffectPopover(slot, anchorEl) {
    const select = slot?.querySelector('.card-select');
    const card = CARD_INDEX[select?.value || ''];
    const popover = document.getElementById('relic-effect-popover');
    const titleEl = document.getElementById('relic-effect-popover-title');
    const bodyEl = document.getElementById('relic-effect-popover-body');
    if (!card || !popover || !titleEl || !bodyEl) return;

    titleEl.textContent = `${card.name} の効果`;
    bodyEl.innerHTML = '';

    const currentStar = parseInt(slot.dataset.star || '1', 10) || 1;
    const starIndex = Math.max(0, Math.min(4, currentStar - 1));
    const baseBonus = card.bonusesByStar?.[starIndex] || {};
    const bonusParts = formatCardSummaryParts(baseBonus);
    appendSpellEffectGroup(
        bodyEl,
        '基本補正',
        bonusParts.length ? bonusParts : ['なし'],
        (text) => createSpellBaseInfo(text)
    );

    const effectState = getRelicEffectState(slot, card);
    const effects = card.conditionalEffects || [];
    const toggleEffects = effects.filter(effect => effect.type === 'toggle');
    const infoEffects = effects.filter(effect => effect.type === 'info');
    const signatureToggleEffects = toggleEffects.filter(isSignatureEffect);
    const miscToggleEffects = toggleEffects.filter(effect => !isSignatureEffect(effect));
    const signatureInfoEffects = infoEffects
        .filter(isSignatureInfoEffect)
        .map(getArtifactSignatureDisplayEffect)
        .filter(Boolean);
    const miscInfoEffects = infoEffects.filter(effect => !isSignatureInfoEffect(effect));

    appendSpellEffectGroup(
        bodyEl,
        '切替効果',
        miscToggleEffects,
        (effect) => createRelicEffectToggle(slot, card, effect, !!effectState[effect.id], currentStar)
    );

    appendSpellEffectGroup(
        bodyEl,
        '補足効果',
        miscInfoEffects,
        (effect) => createSpellEffectInfo(effect, currentStar)
    );

    appendSignatureEffectGroup(
        bodyEl,
        card,
        signatureToggleEffects,
        signatureInfoEffects,
        (effect) => createRelicEffectToggle(slot, card, effect, !!effectState[effect.id], currentStar),
        (effect) => createSpellEffectInfo(effect, currentStar)
    );

    if (card.note && effects.length === 0) {
        const note = document.createElement('div');
        note.className = 'spell-effect-note';
        note.textContent = `※ ${card.note}`;
        bodyEl.appendChild(note);
    }

    popover.style.display = 'block';
    popover.style.visibility = 'hidden';
    activeRelicEffectAnchor = anchorEl;
    requestAnimationFrame(() => {
        positionRelicEffectPopover(activeRelicEffectAnchor);
        popover.style.visibility = 'visible';
    });
}

function updateRelicSlotVisual(slot) {
    if (!slot) return;
    const select = slot.querySelector('.card-select');
    const cardId = select?.value || '';
    const card = CARD_INDEX[cardId];
    const thumb = slot.querySelector('.card-relic-thumb');
    const name = slot.querySelector('.card-relic-name');
    const sub = slot.querySelector('.card-relic-sub');
    const media = slot.querySelector('.card-relic-media');
    const bg = slot.querySelector('.card-relic-bg');
    const gradeHost = slot.querySelector('.card-relic-grade-host');
    const solderHost = slot.querySelector('.card-relic-solder-host');
    const placeholder = slot.querySelector('.card-relic-placeholder');
    const costValue = slot.querySelector('.card-relic-cost-value');
    const costFill = slot.querySelector('.card-relic-cost-fill');
    const effectBtn = slot.querySelector('.card-relic-effect-btn');
    const removeBtn = slot.querySelector('.card-relic-remove-btn');
    const effectState = getRelicEffectState(slot, card);

    if (media) {
        media.classList.remove('rarity-legendary', 'rarity-unique', 'rarity-rare', 'rarity-signature', 'is-empty');
    }
    if (bg) {
        bg.removeAttribute('src');
        bg.style.display = 'none';
    }
    if (card && media) {
        const frameClass = getCardFrameClass(card);
        if (frameClass) media.classList.add(frameClass);
        const rarityBg = getCardRarityBadgePath(card);
        if (rarityBg && bg) {
            bg.src = rarityBg;
            bg.style.display = 'block';
        }
    } else if (media) {
        media.classList.add('is-empty');
    }

    if (thumb) {
        if (card) {
            thumb.src = getCardImagePath(card);
            thumb.alt = card.name;
            thumb.style.display = 'block';
            if (placeholder) placeholder.style.display = 'none';
        } else {
            thumb.removeAttribute('src');
            thumb.alt = '';
            thumb.style.display = 'none';
            if (placeholder) placeholder.style.display = 'flex';
        }
    }

    if (name) name.textContent = card ? card.name : '未装備';
    if (sub) sub.textContent = card ? '' : '遺物カードを選択';
    if (costValue) {
        const costText = card ? String(getCardCost(card, parseInt(slot.dataset.star || '1', 10) || 1)) : '';
        costValue.textContent = costText;
        if (costFill) costFill.textContent = costText;
        costValue.parentElement.style.display = card ? 'inline-flex' : 'none';
    }
    if (effectBtn) {
        effectBtn.style.display = card ? 'inline-flex' : 'none';
        if (card) {
            const toggleEffects = (card.conditionalEffects || []).filter(effect => effect.type === 'toggle');
            const enabledCount = toggleEffects.filter(effect => effectState[effect.id]).length;
            effectBtn.textContent = enabledCount > 0 ? `効果 ${enabledCount}` : (toggleEffects.length > 0 ? '切替' : '効果');
            effectBtn.classList.toggle('has-toggle', toggleEffects.length > 0);
            effectBtn.classList.toggle('active', enabledCount > 0);
        } else {
            effectBtn.classList.remove('has-toggle');
            effectBtn.classList.remove('active');
        }
    }
    if (removeBtn) {
        removeBtn.style.display = card ? 'inline-flex' : 'none';
    }

    if (gradeHost) {
        gradeHost.innerHTML = '';
        if (card) {
            const currentStar = parseInt(slot.dataset.star || '1', 10) || 1;
            const picker = createGradePicker(currentStar, (value) => {
                slot.dataset.star = String(value);
                updateRelicSlotVisual(slot);
                updateUI();
                saveState();
            });
            picker.classList.add('card-relic-grade-picker');
            gradeHost.appendChild(picker);
        }
    }
    if (solderHost) {
        solderHost.innerHTML = '';
        if (card) {
            const currentStar = parseInt(slot.dataset.star || '1', 10) || 1;
            const currentSolder = normalizeCardSolderLevel(card, slot.dataset.solder || 0);
            const displaySolder = getDisplayedSolderLevel(card, currentStar, currentSolder);
            const picker = createSolderButton(card, displaySolder, (anchorEl) => {
                openSolderPopover(card, currentSolder, (value) => {
                    slot.dataset.solder = String(normalizeCardSolderLevel(card, value));
                    updateRelicSlotVisual(slot);
                    updateUI();
                    saveState();
                }, anchorEl);
            }, currentStar === 5);
            picker.classList.add('card-relic-solder-btn');
            solderHost.appendChild(picker);
        }
    }
}

function createRelicSlot(side, selection = {}) {
    const slot = document.createElement('div');
    slot.className = 'card-relic-slot';
    slot.dataset.side = side;
    slot.dataset.kind = 'artifact';
    slot.dataset.star = String(selection.star || 1);
    slot.dataset.solder = String(selection.solder || 0);
    slot.dataset.effects = JSON.stringify(selection.effects || {});

    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'card-relic-media-wrap';

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'card-relic-remove-btn card-relic-remove-float';
    removeBtn.title = '外す';
    removeBtn.setAttribute('aria-label', '外す');
    removeBtn.textContent = '×';

    const media = document.createElement('div');
    media.className = 'card-relic-media is-empty';

    const bg = document.createElement('img');
    bg.className = 'card-relic-bg';
    bg.alt = '';

    const placeholder = document.createElement('div');
    placeholder.className = 'card-relic-placeholder';
    placeholder.textContent = '+';

    const thumb = document.createElement('img');
    thumb.className = 'card-relic-thumb';
    thumb.style.display = 'none';
    const thumbClip = document.createElement('div');
    thumbClip.className = 'card-relic-thumb-clip';
    thumbClip.appendChild(thumb);

    const gradeHost = document.createElement('div');
    gradeHost.className = 'card-relic-grade-host';

    const info = document.createElement('div');
    info.className = 'card-relic-info';
    info.innerHTML = `
        <div class="card-relic-name-row">
            <span class="card-relic-cost-inline" style="display:none;">
                <img src="img/Card/cost.webp" alt="" class="card-relic-cost-icon">
                <span class="card-relic-cost-fill"></span>
                <span class="card-relic-cost-value"></span>
            </span>
            <div class="card-relic-name">未装備</div>
            <button type="button" class="card-relic-effect-btn" title="効果を見る">効果</button>
        </div>
        <div class="card-relic-sub">遺物カードを選択</div>
        <div class="card-relic-grade-row">
            <div class="card-relic-grade-host-inline"></div>
            <div class="card-relic-solder-host"></div>
        </div>
    `;
    info.querySelector('.card-relic-grade-host-inline')?.appendChild(gradeHost);

    media.appendChild(bg);
    media.appendChild(placeholder);
    media.appendChild(thumbClip);

    const selectWrap = document.createElement('div');
    selectWrap.className = 'card-relic-select-wrap';
    selectWrap.style.display = 'none';

    const select = document.createElement('select');
    select.className = 'card-select relic-slot-select';
    select.dataset.side = side;
    select.dataset.kind = 'artifact';
    populateCardSelectOptions(select, 'artifact');
    select.value = selection.cardId || '';
    selectWrap.appendChild(select);

    mediaWrap.appendChild(media);
    mediaWrap.appendChild(removeBtn);
    slot.appendChild(mediaWrap);
    slot.appendChild(info);
    slot.appendChild(selectWrap);

    const effectBtn = slot.querySelector('.card-relic-effect-btn');

    media.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openRelicPicker(slot);
    });

    effectBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openRelicEffectPopover(slot, effectBtn);
    });

    removeBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        select.value = '';
        slot.dataset.star = '1';
        slot.dataset.solder = '0';
        setRelicEffectState(slot, null, {});
        updateRelicSlotVisual(slot);
        updateUI();
        saveState();
    });

    select.addEventListener('change', () => {
        const nextCard = CARD_INDEX[select.value || ''];
        slot.dataset.solder = '0';
        setRelicEffectState(slot, nextCard, {});
        updateRelicSlotVisual(slot);
        updateUI();
        saveState();
    });

    updateRelicSlotVisual(slot);
    return slot;
}

function getRelicEffectState(slot, card = null) {
    const currentCard = card || CARD_INDEX[slot?.querySelector('.card-select')?.value || ''];
    const baseState = createEmptyCardEffectState(currentCard);
    let saved = {};
    try {
        saved = JSON.parse(slot?.dataset.effects || '{}') || {};
    } catch {
        saved = {};
    }
    Object.keys(baseState).forEach(effectId => {
        if (Object.prototype.hasOwnProperty.call(saved, effectId)) {
            baseState[effectId] = !!saved[effectId];
        }
    });
    return baseState;
}

function setRelicEffectState(slot, card, nextState) {
    if (!slot) return;
    const currentCard = card || CARD_INDEX[slot.querySelector('.card-select')?.value || ''];
    const baseState = createEmptyCardEffectState(currentCard);
    Object.keys(baseState).forEach(effectId => {
        if (nextState && Object.prototype.hasOwnProperty.call(nextState, effectId)) {
            baseState[effectId] = !!nextState[effectId];
        }
    });
    slot.dataset.effects = JSON.stringify(baseState);
}

function setRelicEffectToggle(slot, effectId, enabled) {
    const card = CARD_INDEX[slot?.querySelector('.card-select')?.value || ''];
    if (!card?.conditionalEffects?.some(effect => effect.id === effectId && effect.type === 'toggle')) return;
    const nextState = getRelicEffectState(slot, card);
    nextState[effectId] = !!enabled;
    setRelicEffectState(slot, card, nextState);
    updateRelicSlotVisual(slot);
    updateUI();
    if (activeRelicEffectAnchor) {
        openRelicEffectPopover(slot, activeRelicEffectAnchor);
    }
    saveState();
}

function createRelicEffectToggle(slot, card, effect, enabled, star = 1) {
    const wrap = document.createElement('div');
    wrap.className = 'spell-effect-row';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'spell-effect-toggle';
    toggle.classList.toggle('active', enabled);
    toggle.textContent = enabled ? 'ON' : 'OFF';
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setRelicEffectToggle(slot, effect.id, !enabled);
    });

    const content = document.createElement('div');
    content.className = 'spell-effect-info-content';

    const label = createEffectLabelNode(effect.label, 'spell-effect-info-label');
    content.appendChild(label);

    const bonusText = formatEffectBonusText(effect, star);
    if (bonusText) {
        const desc = document.createElement('span');
        desc.className = 'spell-effect-info-desc';
        desc.textContent = bonusText;
        content.appendChild(desc);
    }
    const infoText = getSpellEffectInfoText(effect, star);
    if (infoText) {
        const desc = document.createElement('span');
        desc.className = 'spell-effect-info-desc';
        desc.textContent = infoText;
        content.appendChild(desc);
    }

    wrap.appendChild(toggle);
    wrap.appendChild(content);
    return wrap;
}

function createCardRow(side, kind, selection = {}) {
    if (kind === 'artifact') {
        return createRelicSlot(side, selection);
    }
    const row = document.createElement('div');
    row.className = `card-row ${kind}-row`;

    const select = document.createElement('select');
    select.className = 'card-select';
    select.dataset.side = side;
    select.dataset.kind = kind;
    populateCardSelectOptions(select, kind);
    select.value = selection.cardId || '';

    const starSelect = document.createElement('select');
    starSelect.className = 'card-star-select';
    starSelect.dataset.side = side;
    starSelect.dataset.kind = kind;
    for (let i = 1; i <= 5; i++) {
        const opt = document.createElement('option');
        opt.value = String(i);
        opt.textContent = `★${i}`;
        starSelect.appendChild(opt);
    }
    starSelect.value = String(selection.star || 1);

    select.addEventListener('change', updateUI);
    starSelect.addEventListener('change', updateUI);

    row.appendChild(select);
    row.appendChild(starSelect);

    if (kind === 'spell') {
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'card-remove-btn';
        removeBtn.textContent = '−';
        removeBtn.title = 'スペルカード行を削除';
        removeBtn.addEventListener('click', () => {
            row.remove();
            if (!document.querySelector(`#${side}-spell-slots .card-row`)) {
                addSpellCardRow(side);
            }
            updateUI();
            saveState();
        });
        row.appendChild(removeBtn);
    } else {
        const spacer = document.createElement('span');
        spacer.className = 'phase-action-spacer';
        spacer.setAttribute('aria-hidden', 'true');
        row.appendChild(spacer);
    }

    return row;
}

function initializeCardUI() {
    ensureEffectPopoverLayer();
    ['self'].forEach(side => {
        const relicContainer = document.getElementById(`${side}-relic-slots`);
        if (!relicContainer) return;

        relicContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            relicContainer.appendChild(createRelicSlot(side));
        }
    });

    const relicPickerClose = document.getElementById('relic-picker-close');
    if (relicPickerClose && !relicPickerClose.dataset.bound) {
        relicPickerClose.dataset.bound = '1';
        relicPickerClose.addEventListener('click', closeRelicPicker);
    }

    const relicEffectClose = document.getElementById('relic-effect-popover-close');
    if (relicEffectClose && !relicEffectClose.dataset.bound) {
        relicEffectClose.dataset.bound = '1';
        relicEffectClose.addEventListener('click', closeRelicEffectPopover);
    }

    const relicPickerBackdrop = document.getElementById('relic-picker-backdrop');
    if (relicPickerBackdrop && !relicPickerBackdrop.dataset.bound) {
        relicPickerBackdrop.dataset.bound = '1';
        relicPickerBackdrop.addEventListener('click', closeRelicPicker);
    }

    const clearAllBtn = document.getElementById('self-artifact-clear-all');
    if (clearAllBtn && !clearAllBtn.dataset.bound) {
        clearAllBtn.dataset.bound = '1';
        clearAllBtn.addEventListener('click', () => {
            const rows = Array.from(document.querySelectorAll('#self-relic-slots .card-relic-slot'));
            rows.forEach(row => {
                const select = row.querySelector('.card-select');
                if (select) select.value = '';
                row.dataset.star = '1';
                row.dataset.solder = '0';
                setRelicEffectState(row, null, {});
                updateRelicSlotVisual(row);
            });
            closeRelicEffectPopover();
            closeRelicPicker();
            updateUI();
            saveState();
        });
    }

    document.querySelectorAll('.artifact-preset-load').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', () => {
            const slot = btn.dataset.slot;
            loadArtifactPreset(slot);
        });
    });

    document.querySelectorAll('.spell-preset-load').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', () => {
            const slot = btn.dataset.slot;
            loadSpellPreset(slot);
        });
    });

    const presetSaveTrigger = document.getElementById('artifact-preset-save-trigger');
    if (presetSaveTrigger && !presetSaveTrigger.dataset.bound) {
        presetSaveTrigger.dataset.bound = '1';
        presetSaveTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openArtifactPresetPopover('save', presetSaveTrigger);
        });
    }

    const presetDeleteTrigger = document.getElementById('artifact-preset-delete-trigger');
    if (presetDeleteTrigger && !presetDeleteTrigger.dataset.bound) {
        presetDeleteTrigger.dataset.bound = '1';
        presetDeleteTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openArtifactPresetPopover('delete', presetDeleteTrigger);
        });
    }

    [
        document.getElementById('self-artifact-cost-label'),
        document.getElementById('self-artifact-cost-inline'),
        document.getElementById('self-artifact-total-cost-label'),
        document.getElementById('self-artifact-total-cost-inline'),
        document.getElementById('self-spell-cost-label'),
        document.getElementById('self-spell-cost-inline'),
        document.getElementById('spell-tab-cost-label'),
        document.getElementById('spell-tab-cost-inline')
    ]
        .filter(Boolean)
        .forEach(costTrigger => {
            if (costTrigger.dataset.bound) return;
            costTrigger.dataset.bound = '1';
            const open = (e) => {
                e.preventDefault();
                e.stopPropagation();
                openArtifactCostPopover(costTrigger);
            };
            costTrigger.addEventListener('click', open);
            costTrigger.addEventListener('keydown', (e) => {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                open(e);
            });
        });

    [
        document.getElementById('spell-preset-save-trigger'),
        document.getElementById('self-spell-preset-save-trigger')
    ].filter(Boolean).forEach(spellPresetSaveTrigger => {
        if (spellPresetSaveTrigger.dataset.bound) return;
        spellPresetSaveTrigger.dataset.bound = '1';
        spellPresetSaveTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSpellPresetPopover('save', spellPresetSaveTrigger);
        });
    });

    [
        document.getElementById('spell-preset-delete-trigger'),
        document.getElementById('self-spell-preset-delete-trigger')
    ].filter(Boolean).forEach(spellPresetDeleteTrigger => {
        if (spellPresetDeleteTrigger.dataset.bound) return;
        spellPresetDeleteTrigger.dataset.bound = '1';
        spellPresetDeleteTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSpellPresetPopover('delete', spellPresetDeleteTrigger);
        });
    });

    if (!document.body.dataset.relicPickerBound) {
        document.body.dataset.relicPickerBound = '1';
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('relic-picker-popover');
            if (!popover || popover.style.display === 'none') return;
            if (popover.contains(e.target)) return;
            closeRelicPicker();
        });
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('relic-effect-popover');
            if (!popover || popover.style.display === 'none') return;
            if (popover.contains(e.target) || e.target.closest('.card-relic-effect-btn')) return;
            closeRelicEffectPopover();
        });
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('artifact-preset-popover');
            if (!popover || popover.style.display === 'none') return;
            if (popover.contains(e.target) || e.target.closest('#artifact-preset-save-trigger') || e.target.closest('#artifact-preset-delete-trigger')) return;
            closeArtifactPresetPopover();
        });
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('artifact-cost-popover');
            if (!popover || popover.style.display === 'none') return;
            if (
                popover.contains(e.target) ||
                e.target.closest('#self-artifact-cost-label') ||
                e.target.closest('#self-artifact-cost-inline') ||
                e.target.closest('#self-artifact-total-cost-label') ||
                e.target.closest('#self-artifact-total-cost-inline') ||
                e.target.closest('#self-spell-cost-label') ||
                e.target.closest('#self-spell-cost-inline') ||
                e.target.closest('#spell-tab-cost-label') ||
                e.target.closest('#spell-tab-cost-inline')
            ) return;
            closeArtifactCostPopover();
        });
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('spell-preset-popover');
            if (!popover || popover.style.display === 'none') return;
            if (
                popover.contains(e.target) ||
                e.target.closest('#spell-preset-save-trigger') ||
                e.target.closest('#spell-preset-delete-trigger') ||
                e.target.closest('#self-spell-preset-save-trigger') ||
                e.target.closest('#self-spell-preset-delete-trigger')
            ) return;
            closeSpellPresetPopover();
        });
    }

    syncRelicPickerSafeArea();
}

function normalizeSpellSelections(raw = {}) {
    const normalized = {};
    getSpellCards().forEach(card => {
        normalized[card.id] = normalizeSpellEntry(card, raw[card.id] || {});
    });
    return normalized;
}

function collectCardSelections(side) {
    const artifactRows = Array.from(document.querySelectorAll(`#${side}-relic-slots .card-relic-slot`));
    const readRow = row => ({
        cardId: row.querySelector('.card-select')?.value || '',
        star: parseInt(row.dataset.star || '1', 10) || 1,
        solder: normalizeCardSolderLevel(CARD_INDEX[row.querySelector('.card-select')?.value || ''], row.dataset.solder || 0),
        effects: getRelicEffectState(row, CARD_INDEX[row.querySelector('.card-select')?.value || ''])
    });
    return {
        artifacts: artifactRows.map(readRow),
        spells: side === 'self' ? normalizeSpellSelections(spellSelections) : {}
    };
}

function restoreCardSelections(side, state = {}) {
    const relicContainer = document.getElementById(`${side}-relic-slots`);
    if (!relicContainer) return;

    const artifacts = Array.isArray(state.artifacts) ? state.artifacts : (Array.isArray(state.relics) ? state.relics : []);
    Array.from(relicContainer.querySelectorAll('.card-relic-slot')).forEach((row, idx) => {
        const saved = artifacts[idx] || {};
        const select = row.querySelector('.card-select');
        if (select) {
            populateCardSelectOptions(select, 'artifact');
            select.value = saved.cardId || '';
        }
        row.dataset.star = String(saved.star || 1);
        row.dataset.solder = String(saved.solder || 0);
        row.dataset.effects = JSON.stringify(saved.effects || {});
        updateRelicSlotVisual(row);
    });
    if (side === 'self' && Object.prototype.hasOwnProperty.call(state, 'spells')) {
        if (Array.isArray(state.spells)) {
            const migrated = {};
            state.spells.forEach(selection => {
                if (!selection?.cardId) return;
                const current = migrated[selection.cardId] || { star: 1, qty: 0 };
                current.star = parseInt(selection.star || current.star, 10) || 1;
                current.qty += 1;
                migrated[selection.cardId] = current;
            });
            spellSelections = normalizeSpellSelections(migrated);
        } else {
            spellSelections = normalizeSpellSelections(state.spells || {});
        }
    }
}

function getCardBonusFromSelection(selection, context = {}) {
    if (!selection?.cardId) return null;
    const card = CARD_INDEX[selection.cardId];
    if (!card) return null;
    const starIndex = Math.max(0, Math.min(4, (selection.star || 1) - 1));
    const baseBonus = card.bonusesByStar?.[starIndex];
    if (!baseBonus) return null;
    const resolved = {
        ...baseBonus,
        note: card.note ? `${card.name}: ${card.note}` : ''
    };
    const solderLevel = normalizeCardSolderLevel(card, selection.solder || 0);
    if ((selection.star || 1) >= 5 && solderLevel > 0 && card.solderBonuses?.[solderLevel]) {
        accumulateCardBonus(resolved, card.solderBonuses[solderLevel]);
    }
    const effects = card.conditionalEffects || [];
    const effectState = selection.effects || {};
    const appliedNonStackingEffects = context.appliedNonStackingEffects;
    effects.forEach(effect => {
        if (effect.type !== 'toggle' || !effectState[effect.id]) return;
        if (effect.onlyWhenDmgType && context.dmgType && effect.onlyWhenDmgType !== context.dmgType) return;
        if (effect.nonStacking && appliedNonStackingEffects?.has(effect.id)) return;
        const effectBonus = effect.bonusesByStar?.[starIndex];
        if (!effectBonus) return;
        accumulateCardBonus(resolved, effectBonus);
        if (effect.nonStacking && appliedNonStackingEffects) {
            appliedNonStackingEffects.add(effect.id);
        }
    });
    return resolved;
}

function getCardBonusesForSide(side, options = {}, context = {}) {
    const normalizedOptions = typeof options === 'boolean'
        ? { includeArtifacts: true, includeSpells: options }
        : {
            includeArtifacts: options.includeArtifacts !== false,
            includeSpells: !!options.includeSpells
        };
    const selections = collectCardSelections(side);
    const total = createEmptyCardBonus();
    const nextContext = {
        ...context,
        appliedNonStackingEffects: context.appliedNonStackingEffects || new Set()
    };
    if (normalizedOptions.includeArtifacts) {
        (selections.artifacts || selections.relics || []).forEach(selection => {
            const resolved = getCardBonusFromSelection(selection, nextContext);
            if (!resolved) return;
            accumulateCardBonus(total, resolved);
        });
    }
    if (side === 'self' && normalizedOptions.includeSpells) {
        Object.entries(selections.spells || {}).forEach(([cardId, entry]) => {
            const qty = entry?.qty || 0;
            if (qty <= 0) return;
            for (let i = 0; i < qty; i++) {
                const resolved = getCardBonusFromSelection({ cardId, star: entry.star, solder: entry.solder, effects: entry.effects }, nextContext);
                if (!resolved) continue;
                accumulateCardBonus(total, resolved);
            }
        });
    }
    return total;
}

function formatCardSummaryParts(bonus) {
    const parts = [];
    if (bonus.hpP) parts.push(`HP ${formatSignedPercent(bonus.hpP)}`);
    if (bonus.healingP) parts.push(`HP治癒量 ${formatSignedPercent(bonus.healingP)}`);
    if (bonus.hpRecoveryP) parts.push(`HP回復量 ${formatSignedPercent(bonus.hpRecoveryP)}`);
    if (bonus.atkP) parts.push(`攻撃 ${formatSignedPercent(bonus.atkP)}`);
    if (bonus.defP) parts.push(`防御 ${formatSignedPercent(bonus.defP)}`);
    if (bonus.enemyDefDownP) parts.push(`敵防御減 ${formatSignedPercent(bonus.enemyDefDownP)}`);
    if (bonus.critRateP) parts.push(`会心率 ${formatSignedPercent(bonus.critRateP)}`);
    if (bonus.critDmgP) parts.push(`会心DMG ${formatSignedPercent(bonus.critDmgP)}`);
    if (bonus.critResP) parts.push(`被会心率減 ${formatSignedPercent(bonus.critResP)}`);
    if (bonus.critDmgResP) parts.push(`会心被DMG減 ${formatSignedPercent(bonus.critDmgResP)}`);
    if (bonus.enemyCritResDownP) parts.push(`敵被会心率減 ${formatSignedPercent(bonus.enemyCritResDownP)}`);
    if (bonus.enemyCritDmgResDownP) parts.push(`敵会心被DMG減 ${formatSignedPercent(bonus.enemyCritDmgResDownP)}`);
    if (bonus.addP) parts.push(`与ダメ増 ${formatSignedPercent(bonus.addP)}`);
    if (bonus.takenDmgP) parts.push(`被ダメ減 ${formatSignedPercent(bonus.takenDmgP)}`);
    if (bonus.specialP) parts.push(`特殊 ${formatSignedPercent(bonus.specialP)}`);
    if (bonus.otherP) parts.push(`その他 ${formatSignedPercent(bonus.otherP)}`);
    if (bonus.hasteP) parts.push(`攻撃速度 ${formatSignedPercent(bonus.hasteP)}`);
    return parts;
}

function formatMultiplierPercent(value) {
    return `${(value * 100).toFixed(1)}%`;
}

function formatClampedMultiplier(rawValue, boundedValue, lowerBound, upperBound = Infinity, options = {}) {
    const { showNote = true, showRawWhenClamped = true } = options;
    const isClamped = boundedValue !== rawValue;
    const textValue = isClamped && showNote && showRawWhenClamped ? rawValue : boundedValue;
    const text = formatMultiplierPercent(textValue);
    if (!isClamped || !showNote) {
        return { text, isClamped, note: '' };
    }

    const boundary = rawValue < lowerBound ? lowerBound : upperBound;
    const note = ` (${Math.round(boundary * 100)}%)`;
    return { text: `${text}${note}`, isClamped, note };
}

function formatSignedPercent(value) {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
}

function getWeaknessAddBonus(v) {
    if (v.perspective !== 'self') return 0;
    const enemyPresetVal = inputs.enemy.preset.value;
    if (!enemyPresetVal || !enemyPresetVal.startsWith('e_')) return 0;
    const key = enemyPresetVal.substring(2);
    const preset = ENEMY_PRESETS[key];
    if (!preset?.weakness?.[v.dmgType]?.add) return 0;
    return preset.weakness[v.dmgType].add || 0;
}

function getBonusToneClass(text = '') {
    const label = String(text);
    if (/敵用補正|敵防御|敵被会心|敵会心|毒|ノイズ|怒り/.test(label)) return 'tone-enemy';
    if (/スキル|クールタイム|攻撃速度|SP/.test(label)) return 'tone-skill';
    if (/与被DMG|与ダメ|被ダメ|弱点|ダメージ量|倍率/.test(label)) return 'tone-damage';
    if (/相性|属性/.test(label)) return 'tone-type';
    if (/防御|被会心|会心被DMG|会心DMG抵抗|会心抵抗/.test(label)) return 'tone-defense';
    if (/攻撃|会心率|会心DMG|最終会心/.test(label)) return 'tone-attack';
    if (/HP|治癒|回復|シールド/.test(label)) return 'tone-hp';
    return '';
}

function createModifierChip(label, value, variant = 'multiplier') {
    const toneClass = getBonusToneClass(label);
    return `<span class="final-modifier-chip ${variant} ${toneClass}">${label} ${value}</span>`;
}

function calculateHpSurvivalForDamage(v, damage, overrideSelf = null) {
    const selfStats = overrideSelf || v.self;
    const enemyStats = v.enemy;
    const defender = v.perspective === 'self' ? enemyStats : selfStats;
    const finalHp = Math.max(0, defender.hp || 0) * (1 + (v.common.hpP || 0) / 100);
    const safeDamage = Math.max(0, damage || 0);
    const remainingHp = finalHp - safeDamage;
    const remainingRate = finalHp > 0 ? (remainingHp / finalHp) * 100 : 0;
    const surviveHits = safeDamage > 0 ? finalHp / safeDamage : Infinity;
    return { finalHp, damage: safeDamage, remainingHp, remainingRate, surviveHits };
}

function formatHpRate(rate) {
    return `${Math.max(0, rate).toFixed(1)}%`;
}

function formatSurviveHits(value) {
    return Number.isFinite(value) ? `${value.toFixed(2)}回` : '∞';
}

function updateHpResultBar(v, result, oldResult = null, overrideSelf = null) {
    const enabled = isHpSurvivalEnabled();
    const specs = [
        { key: 'normal', label: '通常DMG', damage: result?.normal || 0, oldDamage: oldResult?.normal },
        { key: 'expected', label: '期待値', damage: result?.expected || 0, oldDamage: oldResult?.expected },
        { key: 'crit', label: '会心DMG', damage: result?.crit || 0, oldDamage: oldResult?.crit }
    ];
    specs.forEach(spec => {
        const el = hpResultTexts[spec.key];
        if (!el) return;
        if (!enabled) {
            el.style.display = 'none';
            el.textContent = '';
            el.title = '';
            return;
        }
        const data = calculateHpSurvivalForDamage(v, spec.damage, overrideSelf);
        const oldData = oldResult ? calculateHpSurvivalForDamage(v, spec.oldDamage, null) : null;
        const delta = oldData ? data.remainingRate - oldData.remainingRate : 0;
        const deltaText = oldData ? ` (${delta >= 0 ? '+' : ''}${delta.toFixed(1)}%)` : '';
        el.style.display = 'block';
        el.textContent = `残HP率 ${formatHpRate(data.remainingRate)}${deltaText}`;
        el.title = `${spec.label}: 耐え回数 ${formatSurviveHits(data.surviveHits)} / 残HP ${Math.floor(data.remainingHp).toLocaleString()} / 最大HP ${Math.floor(data.finalHp).toLocaleString()}`;
        const cardEl = el.closest('.result-card');
        if (cardEl) cardEl.title = el.title;
        el.classList.toggle('is-danger', data.remainingHp < 0);
        el.classList.toggle('is-positive', oldData ? delta > 0 : data.remainingHp >= 0);
        el.classList.toggle('is-negative', oldData ? delta < 0 : data.remainingHp < 0);
    });
    if (!enabled) {
        document.querySelectorAll('.result-detail-trigger').forEach(card => {
            card.title = 'クリックで詳細を表示';
        });
    }
}

let latestResultDetailState = null;

function setResultDetailState(v, result, oldResult = null, overrideSelf = null) {
    latestResultDetailState = { v, result, oldResult, overrideSelf };
}

function openResultDetailPopover(kind) {
    if (!latestResultDetailState) return;
    const popover = document.getElementById('result-detail-popover');
    const titleEl = document.getElementById('result-detail-title');
    const bodyEl = document.getElementById('result-detail-body');
    if (!popover || !titleEl || !bodyEl) return;
    const { v, result, oldResult, overrideSelf } = latestResultDetailState;
    const map = {
        normal: { title: '通常ダメージ', damage: result.normal, oldDamage: oldResult?.normal },
        expected: { title: '期待値', damage: result.expected, oldDamage: oldResult?.expected },
        crit: { title: '会心ダメージ', damage: result.crit, oldDamage: oldResult?.crit },
        critRate: { title: '会心率', damage: null, oldDamage: null }
    };
    const spec = map[kind] || map.expected;
    titleEl.textContent = `${spec.title} 詳細`;
    const rows = [];
    if (kind === 'critRate') {
        rows.push({ label: '会心率', value: `${(result.critRate * 100).toFixed(1)}%`, tone: 'crit' });
        if (oldResult) rows.push({ label: '変更前', value: `${(oldResult.critRate * 100).toFixed(1)}%`, tone: 'muted' });
    } else {
        const hp = calculateHpSurvivalForDamage(v, spec.damage, overrideSelf);
        const oldHp = oldResult ? calculateHpSurvivalForDamage(v, spec.oldDamage, null) : null;
        rows.push({ label: 'ダメージ', value: Math.floor(spec.damage).toLocaleString(), tone: 'damage' });
        if (oldResult) rows.push({ label: '変更前ダメージ', value: Math.floor(spec.oldDamage).toLocaleString(), tone: 'muted' });
        if (isHpSurvivalEnabled()) {
            rows.push({ label: '最大HP', value: Math.floor(hp.finalHp).toLocaleString(), tone: 'hp' });
            rows.push({ label: '残HP', value: Math.floor(hp.remainingHp).toLocaleString(), tone: hp.remainingHp < 0 ? 'danger' : 'hp' });
            rows.push({ label: '残HP率', value: formatHpRate(hp.remainingRate), tone: hp.remainingHp < 0 ? 'danger' : 'survival' });
            rows.push({ label: '耐え回数', value: formatSurviveHits(hp.surviveHits), tone: 'survival' });
            if (oldHp) {
                const delta = hp.remainingRate - oldHp.remainingRate;
                rows.push({ label: '残HP率差分', value: `${delta >= 0 ? '+' : ''}${delta.toFixed(1)}%`, tone: delta >= 0 ? 'positive' : 'negative' });
            }
        }
    }
    bodyEl.innerHTML = rows.map(row => `<div class="result-detail-row ${row.tone || ''}"><span>${row.label}</span><strong>${row.value}</strong></div>`).join('');
    popover.style.display = 'flex';
}

function closeResultDetailPopover() {
    const popover = document.getElementById('result-detail-popover');
    if (popover) popover.style.display = 'none';
}

function updateFinalModifierSummary(v, result = null, overrideSelf = null) {
    const perspectiveEl = document.getElementById('final-modifier-perspective');
    const coreListEl = document.getElementById('final-core-chip-list');
    const multiplierListEl = document.getElementById('final-multiplier-chip-list');
    const statListEl = document.getElementById('final-stat-chip-list');
    const enemyDebuffListEl = document.getElementById('final-enemy-debuff-chip-list');
    if (!perspectiveEl || !coreListEl || !multiplierListEl || !statListEl) return;

    perspectiveEl.textContent = v.perspective === 'self' ? '自キャラ攻撃時' : '敵攻撃時';

    const selfStats = overrideSelf || v.self;
    const enemyStats = v.enemy;
    const attacker = v.perspective === 'self' ? selfStats : enemyStats;
    const defender = v.perspective === 'self' ? enemyStats : selfStats;
    const finalAtk = attacker.atk * (1 + v.common.atkP / 100);
    const finalDef = defender.def * (1 + (v.common.defP - v.common.enemyDefDownP) / 100);
    const finalHp = Math.max(0, defender.hp || 0) * (1 + (v.common.hpP || 0) / 100);

    const weaknessAdd = getWeaknessAddBonus(v);
    const poisonAddPenalty = (v.common.attackerDmgDownP || 0) / 100;
    const takenDmgPenalty = (v.common.takenDmgP || 0) / 100;
    const angerAddBonus = (v.common.attackerAngerP || 0) / 100;
    const rawFinalAdd = v.common.add + weaknessAdd / 100 - poisonAddPenalty + angerAddBonus - takenDmgPenalty;
    const boundedFinalAdd = Math.max(0.2, rawFinalAdd);
    const finalAddInfo = formatClampedMultiplier(rawFinalAdd, boundedFinalAdd, 0.2);
    const rawFinalCritRate = calcCritRate(attacker.crit, defender.critRes) + (v.common.critRateP - v.common.critResP + v.common.enemyCritResDownP) / 100;
    const boundedFinalCritRate = Math.max(0.05, Math.min(0.8, rawFinalCritRate));
    const finalCritRateInfo = formatClampedMultiplier(rawFinalCritRate, boundedFinalCritRate, 0.05, 0.8, { showNote: false });
    const rawFinalCritMult = calcCritMultiplier(attacker.critDmg, defender.critDmgRes) + (v.common.critDmgP - v.common.critDmgResP + v.common.enemyCritDmgResDownP) / 100;
    const boundedFinalCritMult = Math.max(1.2, Math.min(2.5, rawFinalCritMult));
    const finalCritMultInfo = formatClampedMultiplier(rawFinalCritMult, boundedFinalCritMult, 1.2, 2.5, { showNote: false });
    const attackerLabel = v.perspective === 'self' ? '自キャラ' : '敵キャラ';
    const defenderLabel = v.perspective === 'self' ? '敵キャラ' : '自キャラ';
    const coreChips = [
        createModifierChip(`${attackerLabel} 最終攻撃力`, Math.floor(finalAtk).toLocaleString(), 'core'),
        createModifierChip(`${defenderLabel} 最終防御力`, Math.floor(finalDef).toLocaleString(), 'core'),
        createModifierChip(`${defenderLabel} 最終HP`, Math.floor(finalHp).toLocaleString(), 'core')
    ];

    const multiplierChips = [
        createModifierChip('スキル倍率', formatMultiplierPercent(v.common.skill)),
        createModifierChip('与被DMG増減', finalAddInfo.text, `multiplier${finalAddInfo.isClamped ? ' clamped' : ''}`),
        createModifierChip('属性相性', formatMultiplierPercent(v.common.type)),
        createModifierChip('敵用補正', formatMultiplierPercent(v.common.special)),
        createModifierChip('その他', formatMultiplierPercent(v.common.other))
    ];

    if (weaknessAdd) {
        multiplierChips.push(createModifierChip('弱点補正', formatSignedPercent(weaknessAdd), 'muted'));
    }
    if (v.common.takenDmgP) {
        multiplierChips.push(createModifierChip('被ダメ減', formatSignedPercent(v.common.takenDmgP), 'muted'));
    }
    if (v.common.attackerDmgDownPoisonP) {
        multiplierChips.push(createModifierChip('毒', formatSignedPercent(-v.common.attackerDmgDownPoisonP), 'muted'));
    }
    if (v.common.attackerDmgDownNoiseP) {
        multiplierChips.push(createModifierChip('ノイズ', formatSignedPercent(-v.common.attackerDmgDownNoiseP), 'muted'));
    }
    if (v.common.attackerAngerP) {
        multiplierChips.push(createModifierChip('怒り', formatSignedPercent(v.common.attackerAngerP), 'muted'));
    }

    const statPairs = [
        ['HP', v.common.hpP],
        ['攻撃', v.common.atkP],
        ['会心率', v.common.critRateP],
        ['会心DMG', v.common.critDmgP],
        ['防御', v.common.defP],
        ['被会心率減', v.common.critResP],
        ['会心被DMG減', v.common.critDmgResP]
    ];
    const statChips = statPairs
        .map(([label, value]) => createModifierChip(label, formatSignedPercent(value), 'stat'));

    const finalStatChips = statChips.slice();
    finalStatChips.splice(4, 0, '<span class="final-modifier-break" aria-hidden="true"></span>');
    finalStatChips.push(createModifierChip('最終会心率', finalCritRateInfo.text, `stat${finalCritRateInfo.isClamped ? ' clamped' : ''}`));
    finalStatChips.push(createModifierChip('最終会心DMG', finalCritMultInfo.text, `stat${finalCritMultInfo.isClamped ? ' clamped' : ''}`));
    finalStatChips.splice(8, 0, '<span class="final-modifier-break" aria-hidden="true"></span>');

    const enemyDebuffPairs = [
        ['敵防御減', v.common.enemyDefDownP],
        ['敵被会心率減', v.common.enemyCritResDownP],
        ['敵会心被DMG減', v.common.enemyCritDmgResDownP]
    ];
    const enemyDebuffChips = enemyDebuffPairs
        .filter(([, value]) => value)
        .map(([label, value]) => createModifierChip(label, formatSignedPercent(value), 'muted'));

    coreListEl.innerHTML = coreChips.join('');
    multiplierListEl.innerHTML = multiplierChips.join('');
    statListEl.innerHTML = finalStatChips.join('');
    if (enemyDebuffListEl) {
        enemyDebuffListEl.innerHTML = enemyDebuffChips.join('');
    }
}

function formatEffectBonusParts(bonus) {
    const parts = [];
    if (bonus.hpP) parts.push(`HP ${formatSignedPercent(bonus.hpP)}`);
    if (bonus.healingP) parts.push(`HP治癒量 ${formatSignedPercent(bonus.healingP)}`);
    if (bonus.hpRecoveryP) parts.push(`HP回復量 ${formatSignedPercent(bonus.hpRecoveryP)}`);
    if (bonus.atkP) parts.push(`攻撃 ${formatSignedPercent(bonus.atkP)}`);
    if (bonus.defP) parts.push(`防御 ${formatSignedPercent(bonus.defP)}`);
    if (bonus.enemyDefDownP) parts.push(`敵防御減 ${formatSignedPercent(bonus.enemyDefDownP)}`);
    if (bonus.critRateP) parts.push(`会心率 ${formatSignedPercent(bonus.critRateP)}`);
    if (bonus.critDmgP) parts.push(`会心DMG ${formatSignedPercent(bonus.critDmgP)}`);
    if (bonus.critResP) parts.push(`被会心率減 ${formatSignedPercent(bonus.critResP)}`);
    if (bonus.critDmgResP) parts.push(`会心被DMG減 ${formatSignedPercent(bonus.critDmgResP)}`);
    if (bonus.enemyCritResDownP) parts.push(`敵被会心率減 ${formatSignedPercent(bonus.enemyCritResDownP)}`);
    if (bonus.enemyCritDmgResDownP) parts.push(`敵会心被DMG減 ${formatSignedPercent(bonus.enemyCritDmgResDownP)}`);
    if (bonus.addP) parts.push(`与ダメ増 ${formatSignedPercent(bonus.addP)}`);
    if (bonus.takenDmgP) parts.push(`被ダメ減 ${formatSignedPercent(bonus.takenDmgP)}`);
    if (bonus.specialP) parts.push(`特殊 ${formatSignedPercent(bonus.specialP)}`);
    if (bonus.otherP) parts.push(`その他 ${formatSignedPercent(bonus.otherP)}`);
    if (bonus.hasteP) parts.push(`攻撃速度 ${formatSignedPercent(bonus.hasteP)}`);
    return parts;
}

function formatEffectBonusText(effect, star) {
    const bonuses = effect?.bonusesByStar;
    if (!Array.isArray(bonuses) || bonuses.length === 0) return '';
    const idx = Math.max(0, Math.min(bonuses.length - 1, (parseInt(star, 10) || 1) - 1));
    const parts = formatEffectBonusParts(bonuses[idx] || {});
    return parts.join(' / ');
}

function getSpellEffectInfoText(effect, star) {
    const idx = Math.max(0, Math.min(4, (parseInt(star, 10) || 1) - 1));
    if (Array.isArray(effect?.descriptionByStar) && effect.descriptionByStar.length > 0) {
        return effect.descriptionByStar[Math.min(idx, effect.descriptionByStar.length - 1)] || '';
    }

    const text = effect?.description || '';
    const simpleSlashPattern = /^\s*([0-9]+(?:\.[0-9]+)?)(?:\/([0-9]+(?:\.[0-9]+)?)){4}([^\d].*)?\s*$/;
    if (simpleSlashPattern.test(text)) {
        const match = text.match(/([0-9]+(?:\.[0-9]+)?)/g);
        if (match && match.length >= 5) {
            const unitMatch = text.match(/(?:[0-9]+(?:\.[0-9]+)?\/){4}[0-9]+(?:\.[0-9]+)?(.*)$/);
            const unit = unitMatch ? unitMatch[1] : '';
            return `${match[idx]}${unit}`;
        }
    }

    return text;
}

function extractPercentValue(text) {
    const match = String(text || '').match(/([0-9]+(?:\.[0-9]+)?)%/);
    return match ? parseFloat(match[1]) || 0 : 0;
}

function updateCardSummary(side) {
    const summaryEl = document.getElementById(`${side}-card-summary`);
    if (!summaryEl) return;
    if (side === 'self') {
        const totalCost = getArtifactSelectionCost(side);
        const overallCost = getArtifactPresetTotalCost();
        const costValueEl = document.getElementById('self-artifact-cost-value');
        const costFillEl = document.getElementById('self-artifact-cost-fill');
        const totalValueEl = document.getElementById('self-total-cost-value');
        const totalFillEl = document.getElementById('self-total-cost-fill');
        if (costValueEl) costValueEl.textContent = String(totalCost);
        if (costFillEl) costFillEl.textContent = String(totalCost);
        if (totalValueEl) totalValueEl.textContent = String(overallCost);
        if (totalFillEl) totalFillEl.textContent = String(overallCost);
        if (activeArtifactCostPopoverAnchor) {
            openArtifactCostPopover(activeArtifactCostPopoverAnchor);
        }
    }
    const bonus = getCardBonusesForSide(side, { includeArtifacts: true, includeSpells: false }, { dmgType: inputs.dmgType.value });
    const parts = formatCardSummaryParts(bonus);
    const title = side === 'self' ? '遺物カード補正' : 'カード補正';
    const actionHtml = side === 'self'
        ? `<label class="card-summary-apply-toggle">
                <input type="checkbox" id="self-artifact-apply-toggle" ${isArtifactApplyEnabled() ? 'checked' : ''}>
                <span>計算結果に反映</span>
            </label>`
        : '';
    if (parts.length === 0) {
        summaryEl.className = 'card-summary card-summary-empty';
        summaryEl.innerHTML = `
            <div class="card-summary-head">
                <span class="card-summary-title">${title}</span>
                ${actionHtml}
            </div>
            <span class="card-summary-empty-text">なし</span>
        `;
        bindApplyToggles();
        return;
    }
    summaryEl.className = 'card-summary card-summary-active';
    const chips = parts.map(part => `<span class="card-summary-chip ${getBonusToneClass(part)}">${part}</span>`).join('');
    const noteText = bonus.notes.length ? `<div class="card-summary-note">※ ${bonus.notes[0]}</div>` : '';
    summaryEl.innerHTML = `
        <div class="card-summary-head">
            <span class="card-summary-title">${title}</span>
            ${actionHtml}
        </div>
        <div class="card-summary-chip-list">${chips}</div>
        ${noteText}
    `;
    bindApplyToggles();
}

function updateCalcSpellCardSummary() {
    const summaryEl = document.getElementById('self-spell-card-summary');
    if (!summaryEl) return;
    const bonus = getSpellBonusesSummary();
    const parts = formatCardSummaryParts(bonus);
    const actionHtml = `<label class="card-summary-apply-toggle">
            <input type="checkbox" id="self-spell-apply-toggle" ${isSpellApplyEnabled() ? 'checked' : ''}>
            <span>計算結果に反映</span>
        </label>`;
    if (parts.length === 0) {
        summaryEl.className = 'card-summary card-summary-empty';
        summaryEl.innerHTML = `
            <div class="card-summary-head">
                <span class="card-summary-title">スペルカード補正</span>
                ${actionHtml}
            </div>
            <span class="card-summary-empty-text">なし</span>
        `;
        bindApplyToggles();
        return;
    }
    summaryEl.className = 'card-summary card-summary-active';
    const chips = parts.map(part => `<span class="card-summary-chip ${getBonusToneClass(part)}">${part}</span>`).join('');
    summaryEl.innerHTML = `
        <div class="card-summary-head">
            <span class="card-summary-title">スペルカード補正</span>
            ${actionHtml}
        </div>
        <div class="card-summary-chip-list">${chips}</div>
    `;
    bindApplyToggles();
}

function getSpellCards() {
    return CARD_LIBRARY.spells || [];
}

function getSpellEntry(cardId) {
    if (!spellSelections[cardId]) {
        const card = CARD_INDEX[cardId];
        spellSelections[cardId] = normalizeSpellEntry(card, {});
    }
    return spellSelections[cardId];
}

function getSpellSelectionCost() {
    return Object.entries(spellSelections).reduce((sum, [cardId, entry]) => {
        const card = CARD_INDEX[cardId];
        return sum + (getCardCost(card || {}, entry?.star || 1) * (entry?.qty || 0));
    }, 0);
}

function getSpellBonusesSummary() {
    const total = createEmptyCardBonus();
    const notes = [];
    Object.entries(spellSelections).forEach(([cardId, entry]) => {
        const qty = entry?.qty || 0;
        if (qty <= 0) return;
        const resolved = getCardBonusFromSelection({ cardId, star: entry.star });
        if (!resolved) return;
        for (let i = 0; i < qty; i++) {
            accumulateCardBonus(total, resolved);
        }
        (CARD_INDEX[cardId]?.conditionalEffects || []).forEach(effect => {
            if (effect.type !== 'info') return;
            if (isSignatureInfoEffect(effect)) return;
            const value = extractPercentValue(getSpellEffectInfoText(effect, entry.star));
            if (!value) return;
            if (effect.label.includes('最大HP増加')) total.hpP += value * qty;
            if (effect.label.includes('攻撃速度増加')) total.hasteP += value * qty;
        });
        if (resolved.note) {
            notes.push(`${CARD_INDEX[cardId]?.name} x${qty}: ${CARD_INDEX[cardId]?.note || ''}`);
        }
    });
    total.notes = notes;
    return total;
}

function getTotalSelectedSpellCount() {
    return Object.values(spellSelections).reduce((sum, entry) => sum + (entry?.qty || 0), 0);
}

const SPECIAL_SPELL_QTY_COLOR_IDS = new Set([
    'spell_suspicious_potion',
    'spell_personality_madness',
    'spell_personality_lively',
    'spell_personality_pure',
    'spell_personality_gloomy',
    'spell_personality_calm'
]);

function getSpellQtyTierClass(qty, cardId = '') {
    const value = Math.max(0, parseInt(qty, 10) || 0);
    const usesEarlyThreshold = SPECIAL_SPELL_QTY_COLOR_IDS.has(cardId);
    if (value === 0) return 'qty-zero';
    if (usesEarlyThreshold) {
        if (value === 1) return 'qty-two';
        return 'qty-many';
    }
    if (value === 1) return 'qty-one';
    if (value === 2) return 'qty-two';
    return 'qty-many';
}

function syncSpellLibraryVisual(cardId) {
    const entry = getSpellEntry(cardId);
    document.querySelectorAll(`.grade-picker[data-card-id="${cardId}"]`).forEach(picker => {
        paintGradePicker(picker, entry.star);
    });
    document.querySelectorAll(`.spell-qty-value[data-card-id="${cardId}"]`).forEach(el => {
        el.textContent = String(entry.qty || 0);
        el.classList.remove('qty-zero', 'qty-one', 'qty-two', 'qty-many');
        el.classList.add(getSpellQtyTierClass(entry.qty, cardId));
    });
    document.querySelectorAll(`.spell-cost-badge-value[data-card-id="${cardId}"]`).forEach(el => {
        const card = CARD_INDEX[cardId];
        if (card) el.textContent = String(getCardCost(card, entry.star));
    });
    document.querySelectorAll(`.spell-cost-badge-fill[data-card-id="${cardId}"]`).forEach(el => {
        const card = CARD_INDEX[cardId];
        if (card) el.textContent = String(getCardCost(card, entry.star));
    });
}

function syncAllSpellLibraryVisuals() {
    Object.keys(spellSelections).forEach(cardId => {
        syncSpellLibraryVisual(cardId);
    });
}

function setSpellSelectedPanelOpen(open) {
    isSpellSelectedPanelOpen = open;
    const panel = document.getElementById('spell-selected-panel');
    const toggleBtn = document.getElementById('spell-toggle-selected');
    if (panel) panel.style.display = open ? 'block' : 'none';
    if (toggleBtn) {
        toggleBtn.classList.toggle('active', open);
        toggleBtn.textContent = open ? '詳細を隠す' : '選択スペル詳細';
    }
    saveSpellSelectionsState();
}

function setCalcSpellSelectedPanelOpen(open) {
    isCalcSpellSelectedPanelOpen = open;
    const panel = document.getElementById('self-spell-selected-panel');
    const toggleBtn = document.getElementById('self-spell-toggle-selected');
    if (panel) panel.style.display = open ? 'block' : 'none';
    if (toggleBtn) {
        toggleBtn.classList.toggle('active', open);
        toggleBtn.textContent = open ? '詳細を隠す' : 'スペル詳細';
    }
}

function closeSpellSelectedPopovers() {
    if (isSpellSelectedPanelOpen) setSpellSelectedPanelOpen(false);
    if (isCalcSpellSelectedPanelOpen) setCalcSpellSelectedPanelOpen(false);
}

function ensureSpellSelectedPopoverLayers() {
    const appContainer = document.querySelector('.app-container');
    if (!appContainer) return;
    ['spell-selected-panel', 'self-spell-selected-panel'].forEach(id => {
        const panel = document.getElementById(id);
        if (panel && panel.parentElement !== appContainer) {
            appContainer.appendChild(panel);
        }
    });
}

function updateSpellSelectedSummary() {
    const summaryEl = document.getElementById('spell-selected-summary');
    if (!summaryEl) return;
    const count = getTotalSelectedSpellCount();
    if (count === 0) {
        summaryEl.textContent = '未選択';
    } else {
        summaryEl.textContent = `${count}枚選択中`;
    }
}

function updateSpellTotalCost() {
    const totalEl = document.getElementById('spell-total-cost');
    const totalFillEl = document.getElementById('spell-total-cost-fill');
    const calcTotalEl = document.getElementById('self-spell-cost-value');
    const calcTotalFillEl = document.getElementById('self-spell-cost-fill');
    const totalText = getSpellSelectionCost().toLocaleString();
    if (totalEl) totalEl.textContent = totalText;
    if (totalFillEl) totalFillEl.textContent = totalText;
    if (calcTotalEl) calcTotalEl.textContent = totalText;
    if (calcTotalFillEl) calcTotalFillEl.textContent = totalText;
    updateSpellSelectedSummary();
    updateSpellBonusSummary();
    updateCalcSpellCardSummary();
}

function updateSpellBonusSummary() {
    const summaryEl = document.getElementById('spell-bonus-summary');
    if (!summaryEl) return;
    const bonus = getSpellBonusesSummary();
    const parts = formatCardSummaryParts(bonus);
    const applyToggle = `
        <label class="card-summary-apply-toggle spell-bonus-apply-toggle">
            <input type="checkbox" id="spell-apply-toggle" ${isSpellApplyEnabled() ? 'checked' : ''}>
            <span>計算結果に反映</span>
        </label>
    `;
    const summaryHead = `
        <div class="spell-bonus-head">
            <span class="spell-bonus-title">スペルカード補正合計</span>
            ${applyToggle}
        </div>
    `;
    if (parts.length === 0) {
        summaryEl.innerHTML = `${summaryHead}<span class="spell-bonus-empty">なし</span>`;
        bindApplyToggles();
        return;
    }
    const chips = parts.map(part => `<span class="spell-bonus-chip ${getBonusToneClass(part)}">${part}</span>`).join('');
    summaryEl.innerHTML = `${summaryHead}<div class="spell-bonus-chip-list">${chips}</div>`;
    bindApplyToggles();
}

function setSpellQuantity(cardId, nextQty, nextStar = null) {
    const entry = getSpellEntry(cardId);
    entry.qty = Math.max(0, nextQty);
    if (nextStar !== null) {
        entry.star = Math.max(1, Math.min(5, parseInt(nextStar, 10) || 1));
    }
    syncSpellLibraryVisual(cardId);
    renderSelectedSpellList();
    updateSpellTotalCost();
    updateBulkSolderState();
    updateUI();
    saveSpellSelectionsState();
    saveState();
}

function updateSpellSolder(cardId, nextLevel) {
    const entry = getSpellEntry(cardId);
    const card = CARD_INDEX[cardId];
    entry.solder = normalizeCardSolderLevel(card, nextLevel);
    renderSpellLibrary();
    renderSelectedSpellList();
    updateSpellTotalCost();
    updateBulkSolderState();
    updateUI();
    saveSpellSelectionsState();
    saveState();
}

function setSpellEffectToggle(cardId, effectId, enabled) {
    const entry = getSpellEntry(cardId);
    const card = CARD_INDEX[cardId];
    if (!card?.conditionalEffects?.some(effect => effect.id === effectId && effect.type === 'toggle')) return;
    entry.effects = entry.effects || createEmptyCardEffectState(card);
    entry.effects[effectId] = !!enabled;
    renderSpellLibrary();
    renderSelectedSpellList();
    updateSpellTotalCost();
    updateUI();
    const currentBadge = document.querySelector(`.spell-effect-badge[data-card-id="${cardId}"]`);
    if (activeSpellEffectPopoverCardId === cardId && currentBadge) {
        openSpellEffectPopover(cardId, currentBadge);
    }
    saveSpellSelectionsState();
    saveState();
}

function createEffectLabelNode(text, className = 'spell-effect-info-label') {
    const label = document.createElement('div');
    label.className = className;
    const levelMatch = text?.match(/^(?:愛用\s*)?Lv\.?\s*(\d+)\s*(.*)$/);
    if (levelMatch) {
        const levelTag = document.createElement('span');
        levelTag.className = 'spell-effect-level-tag';
        levelTag.textContent = `Lv.${levelMatch[1]}`;
        label.appendChild(levelTag);

        if (levelMatch[2]) {
            const labelText = document.createElement('span');
            labelText.className = 'spell-effect-info-label-text';
            labelText.textContent = levelMatch[2].trim();
            label.appendChild(labelText);
        }
    } else {
        label.textContent = text || '';
    }
    return label;
}

function createSpellEffectToggle(cardId, effect, enabled, compact = false, disabled = false, star = 1) {
    const wrap = document.createElement('div');
    wrap.className = compact ? 'spell-effect-row spell-effect-row-compact' : 'spell-effect-row';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = compact ? 'spell-effect-toggle spell-effect-toggle-compact' : 'spell-effect-toggle';
    toggle.classList.toggle('active', enabled);
    if (disabled) toggle.classList.add('disabled');
    toggle.textContent = enabled ? 'ON' : 'OFF';
    toggle.disabled = !!disabled;
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (disabled) return;
        setSpellEffectToggle(cardId, effect.id, !enabled);
    });

    const content = document.createElement('div');
    content.className = 'spell-effect-info-content';

    const label = createEffectLabelNode(
        compact ? (effect.shortLabel || effect.label) : effect.label,
        compact ? 'spell-effect-label spell-effect-label-compact' : 'spell-effect-info-label'
    );

    content.appendChild(label);
    const bonusText = formatEffectBonusText(effect, star);
    if (bonusText) {
        const desc = document.createElement('span');
        desc.className = 'spell-effect-info-desc';
        desc.textContent = bonusText;
        content.appendChild(desc);
    }
    const infoText = getSpellEffectInfoText(effect, star);
    if (infoText) {
        const desc = document.createElement('span');
        desc.className = 'spell-effect-info-desc';
        desc.textContent = infoText;
        content.appendChild(desc);
    }
    wrap.appendChild(toggle);
    wrap.appendChild(content);
    return wrap;
}

function createSpellEffectInfo(effect, star = 1) {
    const wrap = document.createElement('div');
    wrap.className = 'spell-effect-row spell-effect-row-info';

    const switchDummy = document.createElement('span');
    switchDummy.className = 'spell-effect-toggle spell-effect-toggle-dummy';
    switchDummy.textContent = 'INFO';

    const content = document.createElement('div');
    content.className = 'spell-effect-info-content';

    const label = createEffectLabelNode(effect.label, 'spell-effect-info-label');

    const desc = document.createElement('span');
    desc.className = 'spell-effect-info-desc';
    desc.textContent = getSpellEffectInfoText(effect, star);

    content.appendChild(label);
    if (desc.textContent) content.appendChild(desc);
    wrap.appendChild(switchDummy);
    wrap.appendChild(content);
    return wrap;
}

function createSpellBaseInfo(text) {
    const wrap = document.createElement('div');
    wrap.className = 'spell-effect-row spell-effect-row-base';

    const tag = document.createElement('span');
    tag.className = 'spell-effect-toggle spell-effect-toggle-dummy spell-effect-toggle-base';
    tag.textContent = 'BASE';

    const content = document.createElement('div');
    content.className = 'spell-effect-info-content';

    const label = document.createElement('span');
    label.className = 'spell-effect-info-label';
    label.textContent = text;

    content.appendChild(label);
    wrap.appendChild(tag);
    wrap.appendChild(content);
    return wrap;
}

function isSignatureEffect(effect) {
    if (!effect) return false;
    return effect.id?.includes('signature')
        || effect.label?.includes('愛用')
        || effect.label?.includes('専用');
}

function isSignatureInfoEffect(effect) {
    return !!effect && effect.type === 'info' && isSignatureEffect(effect);
}

function getArtifactSignatureDisplayEffect(effect) {
    if (!effect) return effect;
    if (effect.id === 'signature_skill' && effect.label === '愛用遺物効果') return null;
    if (/^Lv\.\d/.test(effect.label) || /^愛用 Lv\.\d/.test(effect.label)) return effect;
    return {
        ...effect,
        label: `Lv.1 ${effect.label}`
    };
}

function getSignatureGroupTitle(card) {
    return card?.kind === 'artifact' ? '愛用遺物効果' : '愛用効果';
}

function appendSpellEffectGroup(bodyEl, title, effects, renderer, extraClass = '', metaText = '') {
    if (!effects.length) return;
    const section = document.createElement('div');
    section.className = `spell-effect-group${extraClass ? ` ${extraClass}` : ''}`;

    const heading = document.createElement('div');
    heading.className = 'spell-effect-group-title';
    heading.textContent = title;
    if (metaText) {
        const meta = document.createElement('span');
        meta.className = 'spell-effect-group-meta';
        meta.textContent = metaText;
        heading.appendChild(meta);
    }
    section.appendChild(heading);

    effects.forEach(effect => {
        section.appendChild(renderer(effect));
    });

    bodyEl.appendChild(section);
}

function appendSignatureEffectGroup(bodyEl, card, toggleEffects, infoEffects, toggleRenderer, infoRenderer) {
    if (!toggleEffects.length && !infoEffects.length) return;
    const section = document.createElement('div');
    section.className = 'spell-effect-group spell-effect-group-signature';

    const heading = document.createElement('div');
    heading.className = 'spell-effect-group-title';
    heading.textContent = getSignatureGroupTitle(card);
    if (card.favoriteCharacter) {
        const meta = document.createElement('span');
        meta.className = 'spell-effect-group-meta';
        meta.textContent = `愛用使徒: ${card.favoriteCharacter}`;
        heading.appendChild(meta);
    }
    section.appendChild(heading);

    toggleEffects.forEach(effect => section.appendChild(toggleRenderer(effect)));
    infoEffects.forEach(effect => section.appendChild(infoRenderer(effect)));

    bodyEl.appendChild(section);
}

function createSpellEffectBadge(cardId, card, entry) {
    const effects = card.conditionalEffects?.filter(effect => effect.type === 'toggle') || [];
    const enabledCount = effects.filter(effect => !!entry.effects?.[effect.id]).length;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'spell-effect-badge';
    btn.dataset.cardId = cardId;
    if (effects.length > 0) btn.classList.add('has-toggle');
    if (enabledCount > 0) btn.classList.add('active');
    btn.textContent = enabledCount > 0 ? `効果 ${enabledCount}` : (effects.length > 0 ? '切替' : '効果');
    btn.title = 'カード効果を確認';
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSpellEffectPopover(cardId, btn);
    });
    return btn;
}

function closeSpellEffectPopover() {
    activeSpellEffectPopoverCardId = null;
    activeSpellEffectPopoverAnchor = null;
    const popover = document.getElementById('spell-effect-popover');
    if (popover) popover.style.display = 'none';
}

function positionSpellEffectPopover(anchorEl) {
    const popover = document.getElementById('spell-effect-popover');
    const bottomBar = document.querySelector('.bottom-result-bar');
    if (!popover || !anchorEl) return;
    const rect = anchorEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
    const desiredLeft = rect.left;
    const left = Math.min(Math.max(12, desiredLeft), maxLeft);

    const desiredTop = rect.bottom + 8;
    const bottomBarRect = bottomBar?.getBoundingClientRect();
    const bottomLimit = bottomBarRect ? (bottomBarRect.top - 12) : (window.innerHeight - 12);
    let top = desiredTop;
    if (top + popRect.height > bottomLimit) {
        top = rect.top - popRect.height - 8;
    }
    const maxTop = Math.max(12, window.innerHeight - popRect.height - 12);
    top = Math.min(Math.max(12, top), maxTop);

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
}

function openSpellEffectPopover(cardId, anchorEl) {
    const card = CARD_INDEX[cardId];
    const entry = getSpellEntry(cardId);
    const popover = document.getElementById('spell-effect-popover');
    const titleEl = document.getElementById('spell-effect-popover-title');
    const bodyEl = document.getElementById('spell-effect-popover-body');
    if (!card || !popover || !titleEl || !bodyEl) return;

    titleEl.textContent = `${card.name} の効果`;
    bodyEl.innerHTML = '';

    const starIndex = Math.max(0, Math.min(4, (entry.star || 1) - 1));
    const baseBonus = card.bonusesByStar?.[starIndex] || {};
    const bonusParts = formatCardSummaryParts(baseBonus);
    appendSpellEffectGroup(
        bodyEl,
        '基本補正',
        bonusParts.length ? bonusParts : ['なし'],
        (text) => createSpellBaseInfo(text)
    );

    const effects = card.conditionalEffects || [];
    const toggleEffects = effects.filter(effect => effect.type === 'toggle');
    const infoEffects = effects.filter(effect => effect.type === 'info');
    const signatureToggleEffects = toggleEffects.filter(isSignatureEffect);
    const miscToggleEffects = toggleEffects.filter(effect => !isSignatureEffect(effect));
    const signatureInfoEffects = infoEffects
        .filter(isSignatureInfoEffect)
        .map(getArtifactSignatureDisplayEffect)
        .filter(Boolean);
    const miscInfoEffects = infoEffects.filter(effect => !isSignatureInfoEffect(effect));

    const shouldShowGenericNote = !!card.note && effects.length === 0;
    if (shouldShowGenericNote) {
        const note = document.createElement('div');
        note.className = 'spell-effect-note';
        note.textContent = `※ ${card.note}`;
        bodyEl.appendChild(note);
    }

    appendSpellEffectGroup(
        bodyEl,
        '切替効果',
        miscToggleEffects,
        (effect) => {
            const enabled = !!entry.effects?.[effect.id];
            return createSpellEffectToggle(cardId, effect, enabled, false, false, entry.star || 1);
        }
    );

    appendSpellEffectGroup(
        bodyEl,
        '補足効果',
        miscInfoEffects,
        (effect) => createSpellEffectInfo(effect, entry.star || 1)
    );

    appendSignatureEffectGroup(
        bodyEl,
        card,
        signatureToggleEffects,
        signatureInfoEffects,
        (effect) => {
            const enabled = !!entry.effects?.[effect.id];
            return createSpellEffectToggle(cardId, effect, enabled, false, false, entry.star || 1);
        },
        (effect) => createSpellEffectInfo(effect, entry.star || 1)
    );

    popover.style.display = 'block';
    activeSpellEffectPopoverCardId = cardId;
    activeSpellEffectPopoverAnchor = anchorEl;
    positionSpellEffectPopover(anchorEl);
}

function toggleSpellEffectPopover(cardId, anchorEl) {
    if (activeSpellEffectPopoverCardId === cardId) {
        closeSpellEffectPopover();
        return;
    }
    openSpellEffectPopover(cardId, anchorEl);
}

function updateSpellStar(cardId, star) {
    const entry = getSpellEntry(cardId);
    entry.star = Math.max(1, Math.min(5, parseInt(star, 10) || 1));
    renderSpellLibrary();
    renderSelectedSpellList();
    updateSpellTotalCost();
    updateBulkSolderState();
    updateUI();
    saveSpellSelectionsState();
    saveState();
}

function setAllSpellStars(star) {
    const nextStar = Math.max(1, Math.min(5, parseInt(star, 10) || 1));
    getSpellCards().forEach(card => {
        const entry = getSpellEntry(card.id);
        entry.star = nextStar;
    });
    renderSpellLibrary();
    renderSelectedSpellList();
    syncAllSpellLibraryVisuals();
    updateSpellTotalCost();
    updateBulkSolderState();
    updateUI();
    saveSpellSelectionsState();
    saveState();
}

function updateBulkSolderState() {
    const actions = document.getElementById('spell-bulk-solder-actions');
    const solderBtn = document.getElementById('spell-bulk-solder-btn');
    const gradeActions = document.getElementById('spell-bulk-grade-actions');
    const allStarFive = getSpellCards().every(card => (getSpellEntry(card.id).star || 1) === 5);
    if (actions) actions.classList.toggle('is-muted', !allStarFive);
    if (solderBtn) {
        const solderLevels = getSpellCards().map(card => normalizeCardSolderLevel(card, getSpellEntry(card.id).solder || 0));
        const firstSolder = solderLevels[0] || 0;
        const sharedSolder = solderLevels.every(level => level === firstSolder) ? firstSolder : 0;
        solderBtn.dataset.level = String(sharedSolder);
        solderBtn.title = sharedSolder
            ? `全カードはんだ+${sharedSolder}`
            : '全カードはんだ変更';
        solderBtn.querySelectorAll('.solder-token-number').forEach(el => {
            el.textContent = String(sharedSolder);
        });
        solderBtn.classList.toggle('is-mixed', solderLevels.some(level => level !== firstSolder));
    }
    if (gradeActions) {
        const stars = getSpellCards().map(card => getSpellEntry(card.id).star || 1);
        const firstStar = stars[0] || 1;
        const sharedStar = stars.every(star => star === firstStar) ? firstStar : 0;
        gradeActions.querySelectorAll('.spell-bulk-grade-btn').forEach(btn => {
            const value = parseInt(btn.dataset.star, 10) || 1;
            const img = btn.querySelector('.grade-star-icon');
            if (img) img.src = sharedStar && value <= sharedStar ? 'img/Grade_on.webp' : 'img/Grade_off.webp';
            btn.classList.toggle('is-mixed', !sharedStar);
        });
    }
}

function setAllSpellSolder(level) {
    const nextLevel = Math.max(0, Math.min(2, parseInt(level, 10) || 0));
    getSpellCards().forEach(card => {
        const entry = getSpellEntry(card.id);
        entry.solder = normalizeCardSolderLevel(card, nextLevel);
    });
    renderSpellLibrary();
    renderSelectedSpellList();
    syncAllSpellLibraryVisuals();
    updateSpellTotalCost();
    updateBulkSolderState();
    updateUI();
    saveSpellSelectionsState();
    saveState();
}

function openBulkSpellSolderPopover(anchorEl) {
    const cards = getSpellCards();
    const levels = cards.map(card => normalizeCardSolderLevel(card, getSpellEntry(card.id).solder || 0));
    const firstLevel = levels[0] || 0;
    const currentLevel = levels.every(level => level === firstLevel) ? firstLevel : 0;
    openSolderPopover(
        { id: 'spell_bulk_solder', solderMax: 2 },
        currentLevel,
        (value) => setAllSpellSolder(value),
        anchorEl,
        {
            maxLevel: 2,
            zeroText: '全カードのはんだを+0に変更',
            context: { bulk: 'spell' },
            getDescriptionParts: (level) => {
                if (level <= 0) return [];
                return [`全カードのはんだを+${level}に変更`];
            }
        }
    );
}

function clearSpellSelections() {
    if (!confirm('選択中のスペルカードをすべて外しますか？')) return;
    spellSelections = normalizeSpellSelections();
    renderSelectedSpellList();
    renderSpellLibrary();
    updateSpellTotalCost();
    updateBulkSolderState();
    updateUI();
    saveSpellSelectionsState();
    saveState();
}

const SPELL_EFFECT_FILTER_KEYS = {
    attack: ['atkP'],
    defense: ['defP'],
    hp: ['hpP'],
    critRate: ['critRateP'],
    critDmg: ['critDmgP'],
    critRes: ['critResP', 'enemyCritResDownP'],
    critDmgRes: ['critDmgResP', 'enemyCritDmgResDownP'],
    damageUp: ['addP', 'specialP', 'otherP', 'enemyDefDownP', 'enemyCritResDownP', 'enemyCritDmgResDownP'],
    damageReduction: ['takenDmgP'],
    speed: ['hasteP'],
    healing: ['healingP'],
    hpRecovery: ['hpRecoveryP']
};

function cardHasBonusKeys(card, keys = []) {
    if (!card || keys.length === 0) return false;
    const hasKeys = (bonus = {}) => keys.some(key => Number(bonus?.[key] || 0) !== 0);
    if ((card.bonusesByStar || []).some(hasKeys)) return true;
    if ((card.solderBonuses && Object.values(card.solderBonuses).some(hasKeys))) return true;
    return (card.conditionalEffects || []).some(effect =>
        !isSignatureEffect(effect) && (effect.bonusesByStar || []).some(hasKeys)
    );
}

function cardMatchesSpellEffectFilter(card, filter) {
    if (!filter) return true;
    return cardHasBonusKeys(card, SPELL_EFFECT_FILTER_KEYS[filter] || []);
}

function applySpellLibraryFilters() {
    const grid = document.getElementById('spell-library-grid');
    const rarityFilter = document.getElementById('spell-rarity-filter')?.value || '';
    const effectFilter = document.getElementById('spell-effect-filter')?.value || '';
    if (!grid) return;

    grid.querySelectorAll('.spell-library-empty').forEach(el => el.remove());
    let visibleCount = 0;

    grid.querySelectorAll('.spell-card-tile').forEach(tile => {
        const card = CARD_INDEX[tile.dataset.cardId];
        const shouldShow = !!card
            && (!rarityFilter || card.rarity === rarityFilter)
            && cardMatchesSpellEffectFilter(card, effectFilter);
        tile.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
    });

    if (visibleCount === 0) {
        const empty = document.createElement('div');
        empty.className = 'spell-empty spell-library-empty';
        empty.textContent = '条件に合うスペルカードがありません。';
        grid.appendChild(empty);
    }
}

function renderSpellLibrary() {
    const grid = document.getElementById('spell-library-grid');
    if (!grid) return;

    const cards = getSpellCards();
    grid.innerHTML = '';

    cards.forEach(card => {
        const tile = document.createElement('div');
        tile.className = 'spell-card-tile';
        tile.dataset.cardId = card.id;
        const frameClass = getCardFrameClass(card);
        const entry = getSpellEntry(card.id);

        const media = document.createElement('div');
        media.className = 'spell-card-media';
        if (frameClass) media.classList.add(frameClass);

        const img = document.createElement('img');
        img.className = 'spell-card-thumb';
        img.src = getCardImagePath(card);
        img.alt = card.name;

        const costBadge = document.createElement('div');
        costBadge.className = 'spell-cost-badge';
        costBadge.innerHTML = `
            <img src="img/Card/cost.webp" alt="" class="spell-cost-badge-img">
            <span class="spell-cost-badge-value" data-card-id="${card.id}">${getCardCost(card, entry.star || 1)}</span>
            <span class="spell-cost-badge-fill" data-card-id="${card.id}">${getCardCost(card, entry.star || 1)}</span>
        `;

        const meta = document.createElement('div');
        meta.className = 'spell-card-meta';
        meta.innerHTML = `
            <div class="spell-card-name">${card.name}</div>
        `;

        const actions = document.createElement('div');
        actions.className = 'spell-card-actions';
        const gradePicker = createGradePicker(entry.star || 1, (value) => updateSpellStar(card.id, value), card.id);
        gradePicker.classList.add('grade-picker-overlay');
        const qtyControls = document.createElement('div');
        qtyControls.className = 'spell-qty-controls';
        const displaySolder = getDisplayedSolderLevel(card, entry.star || 1, entry.solder || 0);
        const solderControls = createSolderButton(card, displaySolder, (anchorEl) => {
            openSolderPopover(card, entry.solder || 0, (value) => updateSpellSolder(card.id, value), anchorEl);
        }, (entry.star || 1) === 5);
        solderControls.classList.add('spell-solder-controls', 'spell-solder-btn-overlay');

        const minusBtn = document.createElement('button');
        minusBtn.type = 'button';
        minusBtn.className = 'spell-qty-btn';
        minusBtn.textContent = '−';
        minusBtn.addEventListener('click', () => setSpellQuantity(card.id, (getSpellEntry(card.id).qty || 0) - 1, getSpellEntry(card.id).star));

        const qty = document.createElement('span');
        qty.className = 'spell-qty-value';
        qty.dataset.cardId = card.id;
        qty.textContent = String(entry.qty || 0);
        qty.classList.add(getSpellQtyTierClass(entry.qty, card.id));

        const plusBtn = document.createElement('button');
        plusBtn.type = 'button';
        plusBtn.className = 'spell-qty-btn';
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => setSpellQuantity(card.id, (getSpellEntry(card.id).qty || 0) + 1, getSpellEntry(card.id).star));

        actions.appendChild(gradePicker);
        qtyControls.appendChild(minusBtn);
        qtyControls.appendChild(qty);
        qtyControls.appendChild(plusBtn);
        actions.appendChild(qtyControls);
        media.appendChild(solderControls);

        media.appendChild(img);
        media.appendChild(costBadge);
        media.appendChild(gradePicker);
        const effectBadge = createSpellEffectBadge(card.id, card, entry);
        if (effectBadge) media.appendChild(effectBadge);
        tile.appendChild(media);
        tile.appendChild(meta);
        tile.appendChild(actions);
        grid.appendChild(tile);
    });

    applySpellLibraryFilters();
}

function renderSelectedSpellListInto(list) {
    if (!list) return;
    const selections = Object.entries(spellSelections).filter(([, entry]) => (entry?.qty || 0) > 0);
    list.innerHTML = '';

    if (selections.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'spell-empty';
        empty.textContent = 'まだスペルカードは選択されていません。';
        list.appendChild(empty);
        return;
    }

    selections.forEach(([cardId, entry]) => {
        const card = CARD_INDEX[cardId];
        if (!card) return;

        const item = document.createElement('div');
        item.className = 'spell-selected-item';
        const frameClass = getCardFrameClass(card);

        const media = document.createElement('div');
        media.className = 'spell-selected-media';
        if (frameClass) media.classList.add(frameClass);

        const img = document.createElement('img');
        img.className = 'spell-selected-thumb';
        img.src = getCardImagePath(card);
        img.alt = card.name;

        const costBadge = document.createElement('div');
        costBadge.className = 'spell-cost-badge spell-cost-badge-small';
        costBadge.innerHTML = `
            <img src="img/Card/cost.webp" alt="" class="spell-cost-badge-img">
            <span class="spell-cost-badge-value" data-card-id="${card.id}">${getCardCost(card, entry.star || 1)}</span>
            <span class="spell-cost-badge-fill" data-card-id="${card.id}">${getCardCost(card, entry.star || 1)}</span>
        `;

        const info = document.createElement('div');
        info.className = 'spell-selected-info';

        const nameEl = document.createElement('div');
        nameEl.className = 'spell-selected-name';
        nameEl.textContent = card.name;

        const subRow = document.createElement('div');
        subRow.className = 'spell-selected-sub-row';

        const qtySub = document.createElement('div');
        qtySub.className = `spell-selected-sub ${getSpellQtyTierClass(entry.qty, card.id)}`;
        qtySub.textContent = `枚数 ${entry.qty}`;

        const selectedGradePicker = createGradePicker(entry.star || 1, (value) => updateSpellStar(cardId, value), card.id);
        selectedGradePicker.classList.add('spell-selected-grade-picker');

        const solderBtn = createSolderButton(
            card,
            getDisplayedSolderLevel(card, entry.star || 1, entry.solder || 0),
            (anchorEl) => {
                openSolderPopover(card, entry.solder || 0, (value) => updateSpellSolder(cardId, value), anchorEl);
            },
            (entry.star || 1) === 5
        );
        solderBtn.classList.add('spell-selected-solder-btn');

        subRow.appendChild(qtySub);
        subRow.appendChild(selectedGradePicker);
        subRow.appendChild(solderBtn);
        info.appendChild(nameEl);
        info.appendChild(subRow);

        if (card.conditionalEffects?.length) {
            const effectsWrap = document.createElement('div');
            effectsWrap.className = 'spell-effect-list';
            card.conditionalEffects.forEach(effect => {
                if (effect.type !== 'toggle') return;
                const enabled = !!entry.effects?.[effect.id];
                effectsWrap.appendChild(createSpellEffectToggle(cardId, effect, enabled, false, false, entry.star || 1));
            });
            if (effectsWrap.childElementCount > 0) {
                info.appendChild(effectsWrap);
            }
        }

        if (card.note) {
            const note = document.createElement('div');
            note.className = 'spell-selected-note';
            note.textContent = `※ ${card.note}`;
            info.appendChild(note);
        }

        const actions = document.createElement('div');
        actions.className = 'spell-selected-actions';

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'spell-remove-btn';
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', () => setSpellQuantity(cardId, 0));

        actions.appendChild(removeBtn);

        media.appendChild(img);
        media.appendChild(costBadge);
        item.appendChild(media);
        item.appendChild(info);
        item.appendChild(actions);
        list.appendChild(item);
    });
}

function renderSelectedSpellList() {
    const list = document.getElementById('spell-selected-list');
    const calcList = document.getElementById('self-spell-selected-list');
    renderSelectedSpellListInto(list);
    renderSelectedSpellListInto(calcList);
    renderCalcSpellDeckPreview();
    updateSpellTotalCost();
}

function initializeSpellTab() {
    ensureEffectPopoverLayer();
    ensureSolderPopoverLayer();
    ensureSpellSelectedPopoverLayers();
    const filter = document.getElementById('spell-rarity-filter');
    if (filter && !filter.dataset.bound) {
        filter.dataset.bound = '1';
        filter.addEventListener('change', applySpellLibraryFilters);
    }
    const effectFilter = document.getElementById('spell-effect-filter');
    if (effectFilter && !effectFilter.dataset.bound) {
        effectFilter.dataset.bound = '1';
        effectFilter.addEventListener('change', applySpellLibraryFilters);
    }

    const clearBtn = document.getElementById('spell-clear-all');
    if (clearBtn && !clearBtn.dataset.bound) {
        clearBtn.dataset.bound = '1';
        clearBtn.addEventListener('click', clearSpellSelections);
    }

    const toggleBtn = document.getElementById('spell-toggle-selected');
    if (toggleBtn && !toggleBtn.dataset.bound) {
        toggleBtn.dataset.bound = '1';
        toggleBtn.addEventListener('click', () => setSpellSelectedPanelOpen(!isSpellSelectedPanelOpen));
    }

    const calcToggleBtn = document.getElementById('self-spell-toggle-selected');
    if (calcToggleBtn && !calcToggleBtn.dataset.bound) {
        calcToggleBtn.dataset.bound = '1';
        calcToggleBtn.addEventListener('click', () => setCalcSpellSelectedPanelOpen(!isCalcSpellSelectedPanelOpen));
    }

    document.querySelectorAll('[data-close-spell-selected]').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', () => {
            if (btn.dataset.closeSpellSelected === 'calc') {
                setCalcSpellSelectedPanelOpen(false);
            } else {
                setSpellSelectedPanelOpen(false);
            }
        });
    });

    const popoverCloseBtn = document.getElementById('spell-effect-popover-close');
    if (popoverCloseBtn && !popoverCloseBtn.dataset.bound) {
        popoverCloseBtn.dataset.bound = '1';
        popoverCloseBtn.addEventListener('click', closeSpellEffectPopover);
    }

    bindApplyToggles();

    const bulkGradeActions = document.getElementById('spell-bulk-grade-actions');
    if (bulkGradeActions && !bulkGradeActions.dataset.bound) {
        bulkGradeActions.dataset.bound = '1';
        bulkGradeActions.querySelectorAll('.spell-bulk-grade-btn').forEach(btn => {
            btn.addEventListener('click', () => setAllSpellStars(btn.dataset.star));
        });
    }

    const bulkSolderActions = document.getElementById('spell-bulk-solder-actions');
    if (bulkSolderActions && !bulkSolderActions.dataset.bound) {
        bulkSolderActions.dataset.bound = '1';
        const bulkSolderBtn = document.getElementById('spell-bulk-solder-btn');
        if (bulkSolderBtn) {
            bulkSolderBtn.addEventListener('click', () => openBulkSpellSolderPopover(bulkSolderBtn));
        }
    }

    loadSpellSelectionsState();
    spellSelections = normalizeSpellSelections(spellSelections);
    isSpellSelectedPanelOpen = false;
    renderSpellLibrary();
    renderSelectedSpellList();
    syncAllSpellLibraryVisuals();
    updateSpellTotalCost();
    updateCalcSpellCardSummary();
    updateBulkSolderState();
    setSpellSelectedPanelOpen(isSpellSelectedPanelOpen);
    setCalcSpellSelectedPanelOpen(isCalcSpellSelectedPanelOpen);
}

function getValues() {


    const getSideStats = (side) => ({
        hp: parseFloat(inputs[side].hp?.value) || 0,
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
        
        const dmgType = inputs.dmgType.value === 'mag' ? 'm' : 'p';
        const activeAside = (kind, suffix) => aBuff(`aside-${kind}-${dmgType}-${suffix}`);
        const asideCur = {
            hp: aBuff('aside-hp-cur').val,
            atk: activeAside('atk', 'cur').val,
            def: activeAside('def', 'cur').val,
            crit: aBuff('aside-crit-cur').val,
            critRes: aBuff('aside-critres-cur').val
        };

        const asideTgtAtk = activeAside('atk', 'tgt');
        const asideTgtDef = activeAside('def', 'tgt');
        const asideTgt = {
            hp: aBuff('aside-hp-tgt').str === '' ? asideCur.hp : aBuff('aside-hp-tgt').val,
            atk: asideTgtAtk.str === '' ? asideCur.atk : asideTgtAtk.val,
            def: asideTgtDef.str === '' ? asideCur.def : asideTgtDef.val,
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
            hp: { new: mult('hp'), cur: 1 },
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
    const cardBonuses = {
        self: getCardBonusesForSide('self', { includeArtifacts: isArtifactApplyEnabled(), includeSpells: isSpellApplyEnabled() }, { dmgType: inputs.dmgType.value }),
        enemy: getCardBonusesForSide('enemy', { includeArtifacts: true, includeSpells: false }, { dmgType: inputs.dmgType.value })
    };

    return {
        perspective,
        dmgType: inputs.dmgType.value,
        isCrayon: crayonBoard.hasDiff && crayonBoard.applyEnabled,
        self: getSideStats('self'),
        enemy: getSideStats('enemy'),
        crayonBonuses: crayonBoard,
        cardBonuses,
        common: (() => {
            const isSelfAttacker = perspective === 'self';
            const att = isSelfAttacker ? inputs.self : inputs.enemy;
            const def = isSelfAttacker ? inputs.enemy : inputs.self;
            const attCard = isSelfAttacker ? cardBonuses.self : cardBonuses.enemy;
            const defCard = isSelfAttacker ? cardBonuses.enemy : cardBonuses.self;
            const attackerDebuffs = isSelfAttacker ? inputs.self.debuffs : inputs.enemy.debuffs;
            const attackerPoisonP = Math.max(0, Math.min(99, -(parseInt(attackerDebuffs.poison?.value || '0', 10) || 0)));
            const attackerNoiseP = Math.max(0, Math.min(50, -(parseInt(attackerDebuffs.noise?.value || '0', 10) || 0)));
            const attackerAngerP = isSelfAttacker ? 0 : Math.max(0, Math.min(200, parseInt(inputs.enemy.debuffs.anger?.value || '0', 10) || 0));
            
            const rawAdd = parseFloat(att.mult.add?.value || 0);
            let addM = 1 + (rawAdd / 100);
            if (addM < 0.2 && addM !== 0) addM = 0.2;
            const rawOther = parseFloat(att.mult.other?.value || 0);
            
            return {
                skill: (parseFloat(att.mult.skill?.value) === 0 ? 0 : (parseFloat(att.mult.skill?.value) || 100)) / 100,
                add: addM + (attCard.addP || 0) / 100,
                type: (parseFloat(att.mult.type?.value) === 0 ? 0 : (parseFloat(att.mult.type?.value) || 100)) / 100,
                special: ((parseFloat(att.mult.special?.value) === 0 ? 0 : (parseFloat(att.mult.special?.value) || 100)) + (attCard.specialP || 0)) / 100,
                other: 1 + (rawOther + (attCard.otherP || 0)) / 100,
                atkP: (parseFloat(att.adds.atkP?.value) || 0) + (attCard.atkP || 0),
                critRateP: (parseFloat(att.adds.critRateP?.value) || 0) + (attCard.critRateP || 0),
                critDmgP: (parseFloat(att.adds.critDmgP?.value) || 0) + (attCard.critDmgP || 0),
                hpP: (parseFloat(def.adds.hpP?.value) || 0) + (defCard.hpP || 0),
                defP: (parseFloat(def.adds.defP?.value) || 0) + (defCard.defP || 0),
                critResP: (parseFloat(def.adds.critResP?.value) || 0) + (defCard.critResP || 0),
                critDmgResP: (parseFloat(def.adds.critDmgResP?.value) || 0) + (defCard.critDmgResP || 0),
                enemyDefDownP: attCard.enemyDefDownP || 0,
                enemyCritResDownP: attCard.enemyCritResDownP || 0,
                enemyCritDmgResDownP: attCard.enemyCritDmgResDownP || 0,
                takenDmgP: defCard.takenDmgP || 0,
                attackerDmgDownPoisonP: attackerPoisonP,
                attackerDmgDownNoiseP: attackerNoiseP,
                attackerAngerP,
                attackerDmgDownP: attackerPoisonP + attackerNoiseP
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
    const finalDef = defender.def * (1 + (v.common.defP - v.common.enemyDefDownP) / 100);
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
    finalAdd -= (v.common.attackerDmgDownP || 0) / 100;
    finalAdd += (v.common.attackerAngerP || 0) / 100;
    finalAdd -= (v.common.takenDmgP || 0) / 100;
    finalAdd = Math.max(0.2, finalAdd);
    
    const normalDamage = baseDamage * v.common.skill * finalAdd * v.common.type * v.common.special * v.common.other;

    const baseCritRate = calcCritRate(attacker.crit, defender.critRes);
    const finalCritRate = Math.max(0.05, Math.min(0.8, baseCritRate + (v.common.critRateP - v.common.critResP + v.common.enemyCritResDownP) / 100));

    const baseCritMult = calcCritMultiplier(attacker.critDmg, defender.critDmgRes);
    const finalCritMult = Math.max(1.2, Math.min(2.5, baseCritMult + (v.common.critDmgP - v.common.critDmgResP + v.common.enemyCritDmgResDownP) / 100));

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

    document.querySelectorAll('.stat-icon-attack').forEach((statIcon) => {
        statIcon.src = isPhys ? 'img/物理攻撃力.webp' : 'img/魔法攻撃力.webp';
        statIcon.alt = isPhys ? '物理攻撃力' : '魔法攻撃力';
    });
    document.querySelectorAll('.stat-icon-defense').forEach((statIcon) => {
        statIcon.src = isPhys ? 'img/物理防御力.webp' : 'img/魔法防御力.webp';
        statIcon.alt = isPhys ? '物理防御力' : '魔法防御力';
    });
}

function updateUI() {
    updateDamageTypeIcon();
    updateHpSurvivalToggleVisibility();
    updateWeaknessBadge();
    updateCardSummary('self');
    updateCardSummary('enemy');
    updateCalcSpellCardSummary();
    renderArtifactPresetButtons();
    renderSpellPresetButtons();
    const v = getValues(); const oldRes = calculateAll(v); let res = oldRes; let newSelf = null;
    if (v.isCrayon) {
        newSelf = { ...v.self };
        const b = v.crayonBonuses;
        newSelf.hp = (v.self.hp / b.hp.cur) * b.hp.new;
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
        document.getElementById('corr-hp').textContent = Math.floor(newSelf.hp).toLocaleString();
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
    updateFinalModifierSummary(v, res, v.isCrayon ? newSelf : null);
    results.normal.textContent = Math.floor(res.normal).toLocaleString(); 
    results.critDmg.textContent = Math.floor(res.crit).toLocaleString(); 
    results.expected.textContent = Math.floor(res.expected).toLocaleString(); 
    results.critRate.textContent = (res.critRate * 100).toFixed(1) + '%';
    updateHpResultBar(v, res, v.isCrayon ? oldRes : null, v.isCrayon ? newSelf : null);
    setResultDetailState(v, res, v.isCrayon ? oldRes : null, v.isCrayon ? newSelf : null);
    
    updateChart(v, v.isCrayon ? newSelf : null);
    if (!isRestoringState) saveState();
}

function swapRoles() {
    const s = getValues().self;
    const e = getValues().enemy;
    
    // Swap main stats
    const stats = ['hp', 'atk', 'crit', 'critDmg', 'def', 'critRes', 'critDmgRes'];
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

function setDeleteButtonVisible(side, visible) {
    const btn = inputs[side]?.delBtn;
    if (!btn) return;
    btn.classList.toggle('preset-action-hidden', !visible);
}

function syncDeleteButtonVisibility() {
    ['self', 'enemy'].forEach(side => {
        const presetValue = inputs[side]?.preset?.value || '';
        setDeleteButtonVisible(side, presetValue.startsWith('c_'));
    });
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
    setDeleteButtonVisible(side, true);
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
            hp: p.hp,
            atk: type === 'phys' ? p.atk_p : p.atk_m,
            crit: p.crit, critDmg: p.critDmg,
            def: type === 'phys' ? p.def_p : p.def_m,
            critRes: p.critRes, critDmgRes: p.critDmgRes
        };
        // Special case: Enemy Phase
        if (side === 'enemy' && p.phases) {
            inputs.enemy.phaseGroup.style.display = 'grid';
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
                hp: p.hp,
                atk: type === 'phys' ? p.atk_p : p.atk_m,
                crit: p.crit,
                critDmg: p.critDmg,
                def: type === 'phys' ? p.def_p : p.def_m,
                critRes: p.critRes,
                critDmgRes: p.critDmgRes
            };
            const scale = phase.mult;
            const scaled = (k, v) => phase.scaleStats.includes(k) ? Math.floor(v * scale) : v;

            inputs.enemy.hp.value = scaled('hp', stats.hp);
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

function updateMobileSideUI(side = mobileVisibleSide) {
    mobileVisibleSide = side === 'enemy' ? 'enemy' : 'self';
    document.documentElement.dataset.mobileSide = mobileVisibleSide;
    const isSelfAttacker = document.getElementById('perspective-self')?.checked !== false;
    const targetSide = mobileVisibleSide === 'self' ? 'enemy' : 'self';
    const targetIsAttacker = targetSide === 'self' ? isSelfAttacker : !isSelfAttacker;
    document.querySelectorAll('.mobile-side-switch-btn').forEach(btn => {
        btn.dataset.side = targetSide;
        btn.textContent = targetSide === 'self' ? '自' : '敵';
        btn.setAttribute('aria-label', `${targetSide === 'self' ? '自キャラ' : '敵キャラ'}を表示`);
        btn.classList.toggle('target-attacker', targetIsAttacker);
        btn.classList.toggle('target-defender', !targetIsAttacker);
    });
}

function updateMobileCrayonUI(side = mobileCrayonVisibleSide) {
    mobileCrayonVisibleSide = side === 'target' ? 'target' : 'current';
    document.documentElement.dataset.mobileCrayonSide = mobileCrayonVisibleSide;
    const targetSide = mobileCrayonVisibleSide === 'current' ? 'target' : 'current';
    document.querySelectorAll('.mobile-crayon-switch-btn').forEach(btn => {
        btn.dataset.crayonSide = targetSide;
        btn.textContent = targetSide === 'current' ? '現在' : '目標';
        btn.setAttribute('aria-label', `${targetSide === 'current' ? '現在' : '目標'}を表示`);
        btn.classList.toggle('target-current', targetSide === 'current');
        btn.classList.toggle('target-target', targetSide === 'target');
    });
}

function isMobileCrayonInputMode() {
    return window.matchMedia('(max-width: 850px)').matches;
}

function getCrayonNumberInputs() {
    return Array.from(document.querySelectorAll('#tab-crayon input[type="number"]'));
}

function syncCrayonInputMode() {
    const useStepper = isMobileCrayonInputMode();
    getCrayonNumberInputs().forEach(input => {
        input.readOnly = useStepper;
        if (useStepper) {
            input.setAttribute('inputmode', 'none');
            input.classList.add('uses-crayon-stepper');
        } else {
            input.removeAttribute('inputmode');
            input.classList.remove('uses-crayon-stepper');
        }
    });
}

function ensureCrayonStepperPopover() {
    let popover = document.getElementById('crayon-stepper-popover');
    if (popover) return popover;
    popover = document.createElement('div');
    popover.id = 'crayon-stepper-popover';
    popover.className = 'crayon-stepper-popover';
    popover.style.display = 'none';
    popover.innerHTML = `
        <div class="crayon-stepper-actions">
            <button type="button" data-step="-10">-10</button>
            <button type="button" data-step="-1">-1</button>
            <button type="button" data-set="0">0</button>
            <button type="button" data-step="1">+1</button>
            <button type="button" data-step="10">+10</button>
        </div>
    `;
    document.body.appendChild(popover);
    popover.querySelectorAll('[data-step], [data-set]').forEach(btn => {
        btn.addEventListener('click', () => {
            const inputId = popover.dataset.inputId;
            const input = inputId ? document.getElementById(inputId) : null;
            if (!input) return;
            if (btn.dataset.set != null) {
                setCrayonStepperValue(input, Number(btn.dataset.set));
            } else {
                setCrayonStepperValue(input, getNumericValue(input) + Number(btn.dataset.step || 0));
            }
        });
    });
    return popover;
}

function getNumericValue(input) {
    const parsed = parseInt(input?.value, 10);
    return Number.isFinite(parsed) ? parsed : 0;
}

function setCrayonStepperValue(input, value) {
    if (!input) return;
    const min = input.min === '' ? 0 : Number(input.min);
    const next = Math.max(Number.isFinite(min) ? min : 0, Math.round(value));
    input.value = String(next);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
}

function openCrayonStepperPopover(input) {
    if (!input || !isMobileCrayonInputMode()) return;
    const popover = ensureCrayonStepperPopover();
    document.querySelectorAll('.crayon-stepper-active').forEach(el => el.classList.remove('crayon-stepper-active'));
    popover.dataset.inputId = input.id;
    input.classList.add('crayon-stepper-active');
    popover.style.display = 'block';
    positionCrayonStepperPopover(input, popover);
}

function closeCrayonStepperPopover() {
    const popover = document.getElementById('crayon-stepper-popover');
    if (popover) {
        popover.style.display = 'none';
        delete popover.dataset.inputId;
    }
    document.querySelectorAll('.crayon-stepper-active').forEach(el => el.classList.remove('crayon-stepper-active'));
}

function positionCrayonStepperPopover(input, popover = document.getElementById('crayon-stepper-popover')) {
    if (!input || !popover) return;
    const rect = input.getBoundingClientRect();
    const gap = 8;
    const margin = 8;
    const width = Math.min(340, window.innerWidth - margin * 2);
    const measuredHeight = popover.offsetHeight || 134;
    let left = rect.left + rect.width / 2 - width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));
    let top = rect.bottom + gap;
    if (top + measuredHeight > window.innerHeight - margin) {
        top = Math.max(margin, rect.top - measuredHeight - gap);
    }
    popover.style.width = `${width}px`;
    popover.style.left = `${left}px`;
    popover.style.right = 'auto';
    popover.style.top = `${top}px`;
    popover.style.bottom = 'auto';
}

function syncCrayonMobileControls() {
    const isMobileCrayon = window.matchMedia('(max-width: 850px)').matches;
    const panel = document.querySelector('.crayon-panel');
    const helpAnchor = document.querySelector('.crayon-help-anchor');
    const mobileCrayonSwitch = document.getElementById('mobile-crayon-switch');
    if (isMobileCrayon) {
        if (helpAnchor && helpAnchor.parentElement !== document.body) {
            document.body.appendChild(helpAnchor);
        }
        if (mobileCrayonSwitch && mobileCrayonSwitch.parentElement !== document.body) {
            document.body.appendChild(mobileCrayonSwitch);
        }
    } else if (panel) {
        if (helpAnchor && helpAnchor.parentElement !== panel) {
            panel.insertBefore(helpAnchor, panel.firstElementChild || null);
        }
        const columns = panel.querySelector('.crayon-columns');
        if (mobileCrayonSwitch && mobileCrayonSwitch.parentElement !== panel) {
            panel.insertBefore(mobileCrayonSwitch, columns || null);
        }
    }
    syncCrayonInputMode();
}

function updatePerspectiveUI() {
    const isSelf = document.getElementById('perspective-self').checked;
    document.documentElement.dataset.initialPerspective = isSelf ? 'self' : 'enemy';

    const selfSide = document.querySelector('.self-side');
    const enemySide = document.querySelector('.enemy-side');
    if (!selfSide || !enemySide) return;

    selfSide.classList.toggle('is-attacker', isSelf);
    selfSide.classList.toggle('is-defender', !isSelf);
    enemySide.classList.toggle('is-attacker', !isSelf);
    enemySide.classList.toggle('is-defender', isSelf);

    const selfBadge = selfSide.querySelector('.role-badge');
    const enemyBadge = enemySide.querySelector('.role-badge');
    if (selfBadge) selfBadge.textContent = isSelf ? 'Attacker' : 'Defender';
    if (enemyBadge) enemyBadge.textContent = isSelf ? 'Defender' : 'Attacker';

    const toggleCircle = document.getElementById('perspective-toggle-circle');
    if (toggleCircle) {
        toggleCircle.classList.toggle('defender', !isSelf);
    }

    const selfMult = document.querySelector('.self-mult-section');
    const selfAtkAdds = document.querySelector('.self-atk-adds-section');
    const selfDefAdds = document.querySelector('.self-def-adds-section');
    const selfDebuffs = document.querySelector('.self-debuff-section');
    if (selfMult) selfMult.classList.toggle('disabled-section', !isSelf);
    if (selfAtkAdds) selfAtkAdds.classList.toggle('disabled-section', !isSelf);
    if (selfDefAdds) selfDefAdds.classList.toggle('disabled-section', isSelf);
    if (selfDebuffs) selfDebuffs.classList.toggle('disabled-section', !isSelf);

    const enemyMult = document.querySelector('.enemy-mult-section');
    const enemyAtkAdds = document.querySelector('.enemy-atk-adds-section');
    const enemyDefAdds = document.querySelector('.enemy-def-adds-section');
    const enemyDebuffs = document.querySelector('.enemy-debuff-section');
    if (enemyMult) enemyMult.classList.toggle('disabled-section', isSelf);
    if (enemyAtkAdds) enemyAtkAdds.classList.toggle('disabled-section', isSelf);
    if (enemyDefAdds) enemyDefAdds.classList.toggle('disabled-section', !isSelf);
    if (enemyDebuffs) enemyDebuffs.classList.toggle('disabled-section', isSelf);
    updateMobileSideUI(mobileVisibleSide);
    updateUI();
}

function updateTabUI(activeTab) {
    document.documentElement.dataset.initialTab = activeTab || 'calc';
    const circle = document.getElementById('perspective-toggle-circle');
    if (circle) circle.style.display = activeTab === 'calc' ? '' : 'none';

    const mobileSwitch = document.getElementById('mobile-side-switch');
    if (mobileSwitch) mobileSwitch.style.display = activeTab === 'calc' ? '' : 'none';

    const mobileCrayonSwitch = document.getElementById('mobile-crayon-switch');
    if (mobileCrayonSwitch) mobileCrayonSwitch.style.display = activeTab === 'crayon' ? '' : 'none';
    const crayonHelpAnchor = document.querySelector('.crayon-help-anchor');
    if (crayonHelpAnchor) crayonHelpAnchor.style.display = activeTab === 'crayon' ? '' : 'none';
    syncCrayonMobileControls();

    const bottomBar = document.querySelector('.bottom-result-bar');
    if (bottomBar) bottomBar.style.display = activeTab === 'est' ? 'none' : '';
    syncBottomBarSafeArea();

    if (activeTab === 'calc') {
        syncToggleCirclePosition();
    }

    if (activeTab === 'est') {
        runEstimation();
    }
}

function switchTab(tab) {
    const targetBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    const targetPage = document.getElementById(`tab-${tab}`);
    if (!targetBtn || !targetPage) return;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-page').forEach(page => page.classList.remove('active'));
    targetBtn.classList.add('active');
    targetPage.classList.add('active');
    updateTabUI(tab);
    saveState();
    requestAnimationFrame(() => {
        targetPage.scrollIntoView({ block: 'start' });
    });
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

inputs.perspective.forEach(r => r.addEventListener('change', updatePerspectiveUI));

    document.querySelectorAll('.mobile-side-switch-btn').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', () => {
            updateMobileSideUI(btn.dataset.side);
            saveState();
        });
    });

    document.querySelectorAll('.mobile-crayon-switch-btn').forEach(btn => {
        if (btn.dataset.bound) return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', () => {
            updateMobileCrayonUI(btn.dataset.crayonSide);
            saveState();
        });
    });

    getCrayonNumberInputs().forEach(input => {
        if (input.dataset.crayonStepperBound) return;
        input.dataset.crayonStepperBound = '1';
        input.addEventListener('pointerdown', (e) => {
            if (!isMobileCrayonInputMode()) return;
            e.preventDefault();
            openCrayonStepperPopover(input);
        });
        input.addEventListener('focus', () => {
            if (isMobileCrayonInputMode()) openCrayonStepperPopover(input);
        });
    });

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
            requestAnimationFrame(syncBottomBarSafeArea);
            setTimeout(syncBottomBarSafeArea, 220);
            setTimeout(syncBottomBarSafeArea, 420);
        });
    }

    const bottomDetailsPanel = document.getElementById('bottom-details-panel');
    if (bottomDetailsPanel) {
        bottomDetailsPanel.addEventListener('transitionend', syncBottomBarSafeArea);
    }

    const followCurCb = document.getElementById('cb-follow-cur');
    if (followCurCb) followCurCb.addEventListener('change', updateUI);
    
    const followTgtCb = document.getElementById('cb-follow-tgt');
    if (followTgtCb) followTgtCb.addEventListener('change', updateUI);

    const crayonApplyToggle = document.getElementById('crayon-apply-toggle');
    if (crayonApplyToggle) crayonApplyToggle.addEventListener('change', updateUI);

    [hpSurvivalToggle, hpSurvivalToggleEnemy].filter(Boolean).forEach(toggle => {
        toggle.addEventListener('change', () => {
            syncHpSurvivalToggles(toggle);
            updateUI();
        });
    });

    document.querySelectorAll('.result-detail-trigger').forEach(card => {
        if (card.dataset.detailBound) return;
        card.dataset.detailBound = '1';
        card.addEventListener('click', () => openResultDetailPopover(card.dataset.resultKind || 'expected'));
    });
    const resultDetailClose = document.getElementById('result-detail-close');
    if (resultDetailClose) resultDetailClose.addEventListener('click', closeResultDetailPopover);
    
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
        setDeleteButtonVisible('self', e.target.value.startsWith('c_'));
    });
    inputs.enemy.preset.addEventListener('change', (e) => {
        saveStatePatch({ enemyPreset: e.target.value, enemyPhase: '' });
        applyPreset('enemy', e.target.value);
        setDeleteButtonVisible('enemy', e.target.value.startsWith('c_'));
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
                    setDeleteButtonVisible(side, false);
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
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    const goSpellTabBtn = document.getElementById('go-spell-tab-btn');
    if (goSpellTabBtn) {
        goSpellTabBtn.addEventListener('click', () => switchTab('spell'));
    }

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

    const spellHelpToggle = document.getElementById('spell-help-toggle');
    const spellHelpText = document.getElementById('spell-help-text');
    if (spellHelpToggle && spellHelpText && !spellHelpToggle.dataset.bound) {
        spellHelpToggle.dataset.bound = '1';
        spellHelpToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            spellHelpText.style.display = spellHelpText.style.display === 'none' ? 'block' : 'none';
        });
        document.addEventListener('click', (e) => {
            if (spellHelpText.style.display === 'none') return;
            if (spellHelpText.contains(e.target) || spellHelpToggle.contains(e.target)) return;
            spellHelpText.style.display = 'none';
        });
    }
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
const SPELL_STORAGE_KEY = `${STORAGE_KEY}:spell`;
const ARTIFACT_PRESETS_KEY = `${STORAGE_KEY}:artifact-presets`;
const SPELL_PRESETS_KEY = `${STORAGE_KEY}:spell-presets`;
const ARTIFACT_PRESET_SLOT_COUNT = 9;
let activeArtifactPresetSlotId = '';
let activeSpellPresetSlotId = '';

function loadArtifactPresets() {
    try {
        const raw = localStorage.getItem(ARTIFACT_PRESETS_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        if (!parsed || typeof parsed !== 'object') return {};
        return parsed;
    } catch (e) {
        console.error("Artifact preset load failed", e);
        return {};
    }
}

function renderCalcSpellDeckPreview() {
    const previewEls = [
        document.getElementById('self-spell-deck-preview'),
        document.getElementById('spell-tab-deck-preview')
    ].filter(Boolean);
    if (previewEls.length === 0) return;
    previewEls.forEach(previewEl => { previewEl.innerHTML = ''; });
    const selections = Object.entries(spellSelections).filter(([, entry]) => (entry?.qty || 0) > 0);
    if (selections.length === 0) {
        previewEls.forEach(previewEl => {
            const empty = document.createElement('span');
            empty.className = 'calc-spell-deck-empty';
            empty.textContent = '未選択';
            previewEl.appendChild(empty);
        });
        return;
    }
    selections.forEach(([cardId, entry]) => {
        const card = CARD_INDEX[cardId];
        if (!card) return;
        const qty = Math.max(0, entry?.qty || 0);
        for (let i = 0; i < qty; i++) {
            previewEls.forEach(previewEl => {
                const mini = document.createElement('div');
                mini.className = 'calc-spell-mini-card';
                const frameClass = getCardFrameClass(card);
                if (frameClass) mini.classList.add(frameClass);
                mini.title = `${card.name} (${i + 1}/${qty})`;
                const img = document.createElement('img');
                img.src = getCardImagePath(card);
                img.alt = card.name;
                mini.appendChild(img);
                previewEl.appendChild(mini);
            });
        }
    });
}

function loadSpellPresets() {
    try {
        const raw = localStorage.getItem(SPELL_PRESETS_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        if (!parsed || typeof parsed !== 'object') return {};
        return parsed;
    } catch (e) {
        console.error("Spell preset load failed", e);
        return {};
    }
}

function saveSpellPresets(presets) {
    try {
        localStorage.setItem(SPELL_PRESETS_KEY, JSON.stringify(presets));
    } catch (e) {
        console.error("Spell preset save failed", e);
    }
}

function saveArtifactPresets(presets) {
    try {
        localStorage.setItem(ARTIFACT_PRESETS_KEY, JSON.stringify(presets));
    } catch (e) {
        console.error("Artifact preset save failed", e);
    }
}

function normalizeArtifactPresetSelection(selection = []) {
    return (Array.isArray(selection) ? selection : []).slice(0, 3).map(item => {
        const cardId = item?.cardId || '';
        const card = CARD_INDEX[cardId];
        const star = Math.max(1, Math.min(5, parseInt(item?.star || 1, 10) || 1));
        const solder = normalizeCardSolderLevel(card, item?.solder || 0);
        const effectState = item?.effects && typeof item.effects === 'object' ? item.effects : {};
        const baseEffects = createEmptyCardEffectState(card);
        const mergedEffects = { ...baseEffects };
        Object.keys(effectState).forEach(key => {
            mergedEffects[key] = !!effectState[key];
        });
        const orderedEffects = {};
        Object.keys(mergedEffects).sort().forEach(key => {
            orderedEffects[key] = !!mergedEffects[key];
        });
        return { cardId, star, solder, effects: orderedEffects };
    });
}

function getArtifactPresetCompareKey(selection = []) {
    const padded = Array.isArray(selection) ? selection.slice(0, 3) : [];
    while (padded.length < 3) padded.push({});
    return JSON.stringify(normalizeArtifactPresetSelection(padded));
}

function hasArtifactSelectionCards(selection = []) {
    return normalizeArtifactPresetSelection(selection).some(item => !!item.cardId);
}

function getCurrentArtifactPresetSelection() {
    return normalizeArtifactPresetSelection(collectCardSelections('self').artifacts || []);
}

function getArtifactPresetSelectionCost(selection = []) {
    return normalizeArtifactPresetSelection(selection).reduce((sum, item) => {
        const card = CARD_INDEX[item.cardId || ''];
        if (!card) return sum;
        return sum + getCardCost(card, item.star || 1);
    }, 0);
}

function getArtifactPresetTotalCost(presets = loadArtifactPresets()) {
    let total = 0;
    for (let slot = 1; slot <= ARTIFACT_PRESET_SLOT_COUNT; slot++) {
        const saved = presets[String(slot)];
        if (!Array.isArray(saved) || saved.length === 0) continue;
        total += getArtifactPresetSelectionCost(saved);
    }
    return total;
}

function normalizeSpellPresetSelection(selection = {}) {
    return normalizeSpellSelections(selection && typeof selection === 'object' ? selection : {});
}

function getSpellPresetSelectionCost(selection = {}) {
    return Object.entries(normalizeSpellPresetSelection(selection)).reduce((sum, [cardId, entry]) => {
        const card = CARD_INDEX[cardId];
        if (!card) return sum;
        return sum + (getCardCost(card, entry?.star || 1) * (entry?.qty || 0));
    }, 0);
}

function getCurrentSpellPresetSelection() {
    return normalizeSpellPresetSelection(spellSelections);
}

function getSpellPresetCompareKey(selection = {}) {
    const compact = {};
    Object.entries(normalizeSpellPresetSelection(selection)).forEach(([cardId, entry]) => {
        if ((entry?.qty || 0) <= 0) return;
        compact[cardId] = entry;
    });
    return JSON.stringify(compact);
}

function getCardDisplayName(cardId) {
    if (!cardId) return '空';
    return CARD_INDEX[cardId]?.name || cardId;
}

function getEnabledEffectLabels(card, effects = {}) {
    if (!card) return [];
    return (card.conditionalEffects || [])
        .filter(effect => effect.type === 'toggle' && effects?.[effect.id])
        .map(effect => effect.shortLabel || effect.label || effect.id);
}

function formatEffectDiff(card, beforeEffects = {}, afterEffects = {}) {
    const before = getEnabledEffectLabels(card, beforeEffects);
    const after = getEnabledEffectLabels(card, afterEffects);
    const beforeText = before.length ? before.join('、') : 'なし';
    const afterText = after.length ? after.join('、') : 'なし';
    return beforeText === afterText ? '' : `切替: ${beforeText} → ${afterText}`;
}

function createArtifactPresetDiffRows(slot) {
    const presets = loadArtifactPresets();
    const saved = normalizeArtifactPresetSelection(Array.isArray(presets[String(slot)]) ? presets[String(slot)] : []);
    const current = normalizeArtifactPresetSelection(getCurrentArtifactPresetSelection());
    const rows = [];
    const savedCost = getArtifactPresetSelectionCost(saved);
    const currentCost = getArtifactPresetSelectionCost(current);
    if (savedCost !== currentCost) {
        rows.push({ tone: 'cost', text: `合計コスト: ${savedCost} → ${currentCost}` });
    }

    for (let i = 0; i < 3; i++) {
        const before = saved[i] || {};
        const after = current[i] || {};
        const beforeCard = CARD_INDEX[before.cardId || ''];
        const afterCard = CARD_INDEX[after.cardId || ''];
        const slotLabel = `枠${i + 1}`;
        if ((before.cardId || '') !== (after.cardId || '')) {
            rows.push({ tone: 'card', text: `${slotLabel}: ${getCardDisplayName(before.cardId)} → ${getCardDisplayName(after.cardId)}` });
            continue;
        }
        if (!after.cardId) continue;
        const parts = [];
        if ((before.star || 1) !== (after.star || 1)) parts.push(`★${before.star || 1} → ★${after.star || 1}`);
        if ((before.solder || 0) !== (after.solder || 0)) parts.push(`はんだ+${before.solder || 0} → +${after.solder || 0}`);
        const effectText = formatEffectDiff(afterCard || beforeCard, before.effects, after.effects);
        if (effectText) parts.push(effectText);
        if (parts.length) {
            rows.push({ tone: 'detail', text: `${slotLabel} ${getCardDisplayName(after.cardId)}: ${parts.join(' / ')}` });
        }
    }
    return rows;
}

function createSpellPresetDiffRows(slot) {
    const presets = loadSpellPresets();
    const saved = normalizeSpellPresetSelection(presets[String(slot)] || {});
    const current = normalizeSpellPresetSelection(getCurrentSpellPresetSelection());
    const rows = [];
    const savedCost = getSpellPresetSelectionCost(saved);
    const currentCost = getSpellPresetSelectionCost(current);
    if (savedCost !== currentCost) {
        rows.push({ tone: 'cost', text: `合計コスト: ${savedCost} → ${currentCost}` });
    }

    const cardIds = new Set();
    Object.entries(saved).forEach(([cardId, entry]) => { if ((entry?.qty || 0) > 0) cardIds.add(cardId); });
    Object.entries(current).forEach(([cardId, entry]) => { if ((entry?.qty || 0) > 0) cardIds.add(cardId); });

    Array.from(cardIds).forEach(cardId => {
        const card = CARD_INDEX[cardId];
        const before = saved[cardId] || {};
        const after = current[cardId] || {};
        const beforeQty = before.qty || 0;
        const afterQty = after.qty || 0;
        const parts = [];
        if (beforeQty !== afterQty) parts.push(`枚数 ${beforeQty} → ${afterQty}`);
        if (beforeQty > 0 && afterQty > 0 && (before.star || 1) !== (after.star || 1)) parts.push(`★${before.star || 1} → ★${after.star || 1}`);
        if (beforeQty > 0 && afterQty > 0 && (before.solder || 0) !== (after.solder || 0)) parts.push(`はんだ+${before.solder || 0} → +${after.solder || 0}`);
        if (beforeQty > 0 && afterQty > 0) {
            const effectText = formatEffectDiff(card, before.effects, after.effects);
            if (effectText) parts.push(effectText);
        }
        if (parts.length) {
            rows.push({ tone: beforeQty === 0 ? 'add' : (afterQty === 0 ? 'remove' : 'detail'), text: `${getCardDisplayName(cardId)}: ${parts.join(' / ')}` });
        }
    });
    return rows;
}

function createPresetDiffRows(kindLabel, currentSlot) {
    const rows = kindLabel === '遺物'
        ? createArtifactPresetDiffRows(currentSlot)
        : createSpellPresetDiffRows(currentSlot);
    return rows.length ? rows : [{ tone: 'empty', text: '表示できる変更内容はありません。' }];
}

function hasArtifactPresetUnsavedChanges(slot = activeArtifactPresetSlotId) {
    const key = slot ? String(slot) : '';
    if (!key) return false;
    const presets = loadArtifactPresets();
    const saved = presets[key];
    const savedSelection = Array.isArray(saved) ? saved : [];
    return getArtifactPresetCompareKey(savedSelection) !== getArtifactPresetCompareKey(getCurrentArtifactPresetSelection());
}

function hasSpellPresetUnsavedChanges(slot = activeSpellPresetSlotId) {
    const key = slot ? String(slot) : '';
    if (!key) return false;
    const presets = loadSpellPresets();
    const saved = presets[key];
    const savedSelection = saved && typeof saved === 'object' ? saved : {};
    return getSpellPresetCompareKey(savedSelection) !== getSpellPresetCompareKey(getCurrentSpellPresetSelection());
}

function getMatchingArtifactPresetSlot(preferredSlot = '') {
    const presets = loadArtifactPresets();
    const current = getArtifactPresetCompareKey(getCurrentArtifactPresetSelection());
    const preferredKey = preferredSlot ? String(preferredSlot) : '';
    if (preferredKey) {
        const preferredSaved = presets[preferredKey];
        const preferredSelection = Array.isArray(preferredSaved) ? preferredSaved : [];
        if (getArtifactPresetCompareKey(preferredSelection) === current) {
            return preferredKey;
        }
    }
    for (let slot = 1; slot <= ARTIFACT_PRESET_SLOT_COUNT; slot++) {
        const saved = presets[String(slot)];
        const selection = Array.isArray(saved) ? saved : [];
        if (getArtifactPresetCompareKey(selection) === current) {
            return String(slot);
        }
    }
    return '';
}

function getMatchingSpellPresetSlot(preferredSlot = '') {
    const presets = loadSpellPresets();
    const current = getSpellPresetCompareKey(getCurrentSpellPresetSelection());
    const preferredKey = preferredSlot ? String(preferredSlot) : '';
    if (preferredKey) {
        const preferredSaved = presets[preferredKey];
        const preferredSelection = preferredSaved && typeof preferredSaved === 'object' ? preferredSaved : {};
        if (getSpellPresetCompareKey(preferredSelection) === current) {
            return preferredKey;
        }
    }
    for (let slot = 1; slot <= 7; slot++) {
        const saved = presets[String(slot)];
        const selection = saved && typeof saved === 'object' ? saved : {};
        if (getSpellPresetCompareKey(selection) === current) {
            return String(slot);
        }
    }
    return '';
}

function renderArtifactPresetLoadButtonContent(btn, slot, savedSelection = []) {
    if (!btn) return;
    btn.textContent = '';
    const normalized = normalizeArtifactPresetSelection(savedSelection);

    const numberEl = document.createElement('span');
    numberEl.className = 'artifact-preset-number';
    numberEl.textContent = String(slot);
    btn.appendChild(numberEl);

    const previewEl = document.createElement('span');
    previewEl.className = 'artifact-preset-preview';

    for (let index = 0; index < 3; index++) {
        const item = normalized[index] || null;
        const card = item?.cardId ? CARD_INDEX[item.cardId] : null;
        const orb = document.createElement('span');
        orb.className = 'artifact-preset-orb';
        if (card) {
            const frameClass = getCardFrameClass(card);
            if (frameClass) orb.classList.add(frameClass);
            orb.title = card.name;
            const bgPath = getCardRarityBadgePath(card);
            if (bgPath) {
                const bg = document.createElement('img');
                bg.className = 'artifact-preset-orb-bg';
                bg.src = bgPath;
                bg.alt = '';
                orb.appendChild(bg);
            }
            const img = document.createElement('img');
            img.className = 'artifact-preset-orb-img';
            img.src = getCardImagePath(card);
            img.alt = card.name;
            orb.appendChild(img);
        } else {
            orb.classList.add('is-empty');
            orb.setAttribute('aria-label', '未装備');
        }
        previewEl.appendChild(orb);
    }

    btn.appendChild(previewEl);
}

function renderArtifactPresetButtons() {
    const presets = loadArtifactPresets();
    let activeSlot = '';
    if (activeArtifactPresetSlotId) {
        activeSlot = String(activeArtifactPresetSlotId);
    }
    if (!activeSlot) {
        activeSlot = getMatchingArtifactPresetSlot('');
        activeArtifactPresetSlotId = activeSlot || '1';
        activeSlot = activeArtifactPresetSlotId;
    }
    const isDirty = hasArtifactPresetUnsavedChanges(activeSlot);
    document.querySelectorAll('.artifact-preset-load').forEach(btn => {
        const slot = btn.dataset.slot;
        const saved = Array.isArray(presets[slot]) ? presets[slot] : [];
        const hasCards = hasArtifactSelectionCards(saved);
        const cost = getArtifactPresetSelectionCost(saved);
        renderArtifactPresetLoadButtonContent(btn, slot, saved);
        btn.classList.toggle('is-filled', hasCards);
        btn.classList.toggle('is-empty', !hasCards);
        btn.classList.toggle('is-active', activeSlot === slot);
        btn.classList.toggle('is-dirty', isDirty && activeSlot === slot);
        btn.title = hasCards
            ? (isDirty && activeSlot === slot ? `遺物プリセット${slot}を編集中（未保存の変更あり / 合計コスト ${cost}）` : `遺物プリセット${slot}を読み込む（合計コスト ${cost}）`)
            : `遺物プリセット${slot}を読み込む（空 / 合計コスト 0）`;
    });
    document.querySelectorAll('.artifact-preset-delete').forEach(btn => {
        const slot = btn.dataset.slot;
        const hasCards = hasArtifactSelectionCards(Array.isArray(presets[slot]) ? presets[slot] : []);
        btn.classList.toggle('is-empty', !hasCards);
        btn.title = hasCards ? `プリセット${slot}を空にする` : `プリセット${slot}は空です`;
    });
    const costsEl = document.getElementById('self-artifact-preset-costs');
    if (costsEl) {
        costsEl.innerHTML = '';
        for (let slot = 1; slot <= ARTIFACT_PRESET_SLOT_COUNT; slot++) {
            const key = String(slot);
            const saved = presets[key];
            const selection = Array.isArray(saved) ? saved : [];
            const hasCards = hasArtifactSelectionCards(selection);
            const chip = document.createElement('div');
            chip.className = 'artifact-preset-cost-chip';
            chip.classList.toggle('is-empty', !hasCards);
            chip.classList.toggle('is-active', activeSlot === key);
            chip.classList.toggle('is-dirty', isDirty && activeSlot === key);
            const costText = String(getArtifactPresetSelectionCost(selection));
            chip.innerHTML = `<span class="artifact-preset-cost-slot">${key}</span><span class="artifact-preset-cost-label">コスト</span><span>${costText}</span>`;
            costsEl.appendChild(chip);
        }
    }
    const totalCost = getArtifactPresetTotalCost(presets);
    const totalValueEl = document.getElementById('self-total-cost-value');
    const totalFillEl = document.getElementById('self-total-cost-fill');
    if (totalValueEl) totalValueEl.textContent = String(totalCost);
    if (totalFillEl) totalFillEl.textContent = String(totalCost);
}

function renderSpellPresetButtons() {
    const presets = loadSpellPresets();
    let activeSlot = '';
    if (activeSpellPresetSlotId) {
        activeSlot = String(activeSpellPresetSlotId);
    }
    if (!activeSlot) {
        activeSlot = getMatchingSpellPresetSlot('');
        activeSpellPresetSlotId = activeSlot || '1';
        activeSlot = activeSpellPresetSlotId;
    }
    const isDirty = hasSpellPresetUnsavedChanges(activeSlot);
    document.querySelectorAll('.spell-preset-load').forEach(btn => {
        const slot = btn.dataset.slot;
        const saved = presets[slot];
        const selection = saved && typeof saved === 'object' ? normalizeSpellPresetSelection(saved) : {};
        const hasCards = Object.values(selection).some(entry => (entry?.qty || 0) > 0);
        btn.classList.toggle('is-filled', hasCards);
        btn.classList.toggle('is-empty', !hasCards);
        btn.classList.toggle('is-active', activeSlot === slot);
        btn.classList.toggle('is-dirty', isDirty && activeSlot === slot);
        btn.title = hasCards
            ? (isDirty && activeSlot === slot ? `スペルプリセット${slot}を編集中（未保存の変更あり）` : `スペルプリセット${slot}を読み込む`)
            : `スペルプリセット${slot}を読み込む（空）`;
    });
    const hasAnyPreset = Array.from({ length: 7 }, (_, index) => {
        const saved = presets[String(index + 1)];
        const selection = saved && typeof saved === 'object' ? normalizeSpellPresetSelection(saved) : {};
        return Object.values(selection).some(entry => (entry?.qty || 0) > 0);
    }).some(Boolean);
    [
        document.getElementById('spell-preset-delete-trigger'),
        document.getElementById('self-spell-preset-delete-trigger')
    ].filter(Boolean).forEach(deleteTrigger => {
        deleteTrigger.classList.toggle('is-empty', !hasAnyPreset);
    });
}

function saveArtifactPreset(slot) {
    const key = String(slot);
    const presets = loadArtifactPresets();
    presets[key] = normalizeArtifactPresetSelection(collectCardSelections('self').artifacts || []);
    saveArtifactPresets(presets);
    activeArtifactPresetSlotId = key;
    renderArtifactPresetButtons();
}

function saveSpellPreset(slot) {
    const key = String(slot);
    const presets = loadSpellPresets();
    presets[key] = normalizeSpellPresetSelection(spellSelections);
    saveSpellPresets(presets);
    activeSpellPresetSlotId = key;
    renderSpellPresetButtons();
    saveSpellSelectionsState();
    saveState();
}

function ensurePresetConflictDialog() {
    let dialog = document.getElementById('preset-conflict-dialog');
    if (dialog) return dialog;
    dialog = document.createElement('div');
    dialog.id = 'preset-conflict-dialog';
    dialog.className = 'preset-conflict-dialog';
    dialog.style.display = 'none';
    document.querySelector('.app-container')?.appendChild(dialog);
    return dialog;
}

function openPresetConflictDialog(kindLabel, currentSlot, targetSlot) {
    return new Promise(resolve => {
        const dialog = ensurePresetConflictDialog();
        if (!dialog) {
            resolve(null);
            return;
        }
        dialog.innerHTML = '';

        const panel = document.createElement('div');
        panel.className = 'preset-conflict-panel';

        const head = document.createElement('div');
        head.className = 'preset-conflict-head';

        const title = document.createElement('div');
        title.className = 'preset-conflict-title';
        title.textContent = `${kindLabel}プリセット${currentSlot}に未保存の変更があります`;

        const diffToggle = document.createElement('button');
        diffToggle.type = 'button';
        diffToggle.className = 'preset-conflict-diff-toggle';
        diffToggle.textContent = '変更内容';

        const message = document.createElement('div');
        message.className = 'preset-conflict-message';
        message.textContent = `プリセット${targetSlot}を選択する前に、変更の扱いを選んでください。`;

        const diffPanel = document.createElement('div');
        diffPanel.className = 'preset-conflict-diff';
        diffPanel.style.display = 'none';
        createPresetDiffRows(kindLabel, currentSlot).forEach(row => {
            const item = document.createElement('div');
            item.className = `preset-conflict-diff-row ${row.tone || ''}`;
            item.textContent = row.text;
            diffPanel.appendChild(item);
        });

        diffToggle.addEventListener('click', () => {
            const nextVisible = diffPanel.style.display === 'none';
            diffPanel.style.display = nextVisible ? 'grid' : 'none';
            diffToggle.classList.toggle('active', nextVisible);
        });

        const actions = document.createElement('div');
        actions.className = 'preset-conflict-actions';

        const sameSlot = String(currentSlot) === String(targetSlot);
        const choices = sameSlot
            ? [
                { value: 'discard', label: '変更前に戻す', className: 'danger' },
                { value: 'save-current', label: '変更を保存', className: 'primary' },
                { value: null, label: 'キャンセル', className: 'ghost' }
            ]
            : [
                { value: 'discard', label: `保存せずプリセット${targetSlot}に切り替え`, className: 'danger' },
                { value: 'save-current', label: `プリセット${currentSlot}に保存してプリセット${targetSlot}に切り替え`, className: 'primary' },
                { value: 'save-target', label: `プリセット${targetSlot}に変更を保存`, className: 'accent' },
                { value: null, label: 'キャンセル', className: 'ghost' }
            ];

        const close = (value) => {
            dialog.style.display = 'none';
            dialog.innerHTML = '';
            resolve(value);
        };

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `preset-conflict-btn ${choice.className}`;
            btn.textContent = choice.label;
            btn.addEventListener('click', () => close(choice.value));
            actions.appendChild(btn);
        });

        head.appendChild(title);
        head.appendChild(diffToggle);
        panel.appendChild(head);
        panel.appendChild(message);
        panel.appendChild(diffPanel);
        panel.appendChild(actions);
        dialog.appendChild(panel);
        dialog.style.display = 'flex';
    });
}

async function resolveArtifactPresetUnsavedAction(targetSlot) {
    const currentSlot = activeArtifactPresetSlotId ? String(activeArtifactPresetSlotId) : '';
    if (!currentSlot || !hasArtifactPresetUnsavedChanges(currentSlot)) return true;
    const action = await openPresetConflictDialog('遺物', currentSlot, targetSlot);
    if (action === 'discard') return true;
    if (action === 'save-current') {
        saveArtifactPreset(currentSlot);
        return true;
    }
    if (action === 'save-target') {
        saveArtifactPreset(targetSlot);
        return false;
    }
    return false;
}

async function resolveSpellPresetUnsavedAction(targetSlot) {
    const currentSlot = activeSpellPresetSlotId ? String(activeSpellPresetSlotId) : '';
    if (!currentSlot || !hasSpellPresetUnsavedChanges(currentSlot)) return true;
    const action = await openPresetConflictDialog('スペル', currentSlot, targetSlot);
    if (action === 'discard') return true;
    if (action === 'save-current') {
        saveSpellPreset(currentSlot);
        return true;
    }
    if (action === 'save-target') {
        saveSpellPreset(targetSlot);
        return false;
    }
    return false;
}

async function loadArtifactPreset(slot) {
    const key = String(slot);
    const presets = loadArtifactPresets();
    if (!(await resolveArtifactPresetUnsavedAction(key))) return;
    const nextPresets = loadArtifactPresets();
    const selection = Array.isArray(nextPresets[key]) ? nextPresets[key] : [];
    activeArtifactPresetSlotId = key;
    restoreCardSelections('self', { artifacts: selection });
    updateUI();
    renderArtifactPresetButtons();
    saveState();
}

async function loadSpellPreset(slot) {
    const key = String(slot);
    const presets = loadSpellPresets();
    if (!(await resolveSpellPresetUnsavedAction(key))) return;
    const nextPresets = loadSpellPresets();
    const selection = nextPresets[key] && typeof nextPresets[key] === 'object' ? nextPresets[key] : {};
    activeSpellPresetSlotId = key;
    spellSelections = normalizeSpellPresetSelection(selection);
    renderSpellLibrary();
    renderSelectedSpellList();
    syncAllSpellLibraryVisuals();
    updateSpellTotalCost();
    updateUI();
    renderSpellPresetButtons();
    saveSpellSelectionsState();
    saveState();
}

function deleteArtifactPreset(slot) {
    const key = String(slot);
    const presets = loadArtifactPresets();
    presets[key] = [];
    saveArtifactPresets(presets);
    if (activeArtifactPresetSlotId === key) {
        restoreCardSelections('self', { artifacts: [] });
        updateUI();
    }
    renderArtifactPresetButtons();
    saveState();
}

function deleteSpellPreset(slot) {
    const key = String(slot);
    const presets = loadSpellPresets();
    presets[key] = {};
    saveSpellPresets(presets);
    if (activeSpellPresetSlotId === key) {
        spellSelections = normalizeSpellPresetSelection({});
        renderSpellLibrary();
        renderSelectedSpellList();
        syncAllSpellLibraryVisuals();
        updateSpellTotalCost();
        updateUI();
    }
    renderSpellPresetButtons();
    saveSpellSelectionsState();
    saveState();
}

const SECTION_COLLAPSE_KEY = `${STORAGE_KEY}:collapsed-sections`;
let collapsedSections = {};

function loadCollapsedSections() {
    try {
        const raw = localStorage.getItem(SECTION_COLLAPSE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        collapsedSections = parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
        collapsedSections = {};
    }
}

function saveCollapsedSections() {
    try {
        localStorage.setItem(SECTION_COLLAPSE_KEY, JSON.stringify(collapsedSections));
    } catch (e) {
        console.error('Collapsed section save failed', e);
    }
}

function getSectionCollapseId(host, header, index) {
    if (host.id) return host.id;
    const side = host.closest('.self-side') ? 'self' : (host.closest('.enemy-side') ? 'enemy' : 'common');
    const title = (header.textContent || '').trim().replace(/\s+/g, '_') || `section_${index}`;
    const classKey = Array.from(host.classList || []).filter(cls =>
        cls.includes('section') || cls.includes('category') || cls.includes('card')
    ).join('_') || host.tagName.toLowerCase();
    return `${side}:${classKey}:${title}:${index}`;
}

function collectCollapsibleTargets(host, header) {
    if (host.classList.contains('card-section')) {
        return Array.from(host.children).filter(child => !child.classList.contains('card-section-header'));
    }
    if (host.classList.contains('dynamic-section')) {
        return Array.from(host.children).filter(child => child !== header);
    }
    if (host.classList.contains('stat-category')) {
        const targets = [];
        let node = header.nextElementSibling;
        while (node && !node.classList.contains('stat-cat-header')) {
            targets.push(node);
            node = node.nextElementSibling;
        }
        return targets;
    }
    return [];
}

function applySectionCollapsed(host, collapsed) {
    host.classList.toggle('is-collapsed-section', collapsed);
    const header = host.querySelector(':scope > .stat-cat-header, :scope .card-section-header .stat-cat-header');
    if (header) header.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    const btn = header?.querySelector('.section-collapse-btn');
    if (btn) btn.textContent = collapsed ? '＋' : '−';
}

function initCollapsibleSections() {
    loadCollapsedSections();
    const candidates = [
        ...document.querySelectorAll('.dynamic-section'),
        ...document.querySelectorAll('.card-section')
    ];

    candidates.forEach((host, index) => {
        if (host.dataset.collapseBound) return;
        const header = host.classList.contains('card-section')
            ? host.querySelector('.card-section-header .stat-cat-header')
            : host.querySelector(':scope > .stat-cat-header');
        if (!header) return;
        const targets = collectCollapsibleTargets(host, header);
        if (targets.length === 0) return;

        const collapseId = getSectionCollapseId(host, header, index);
        host.dataset.collapseId = collapseId;
        host.dataset.collapseBound = '1';
        host.classList.add('collapsible-section');
        targets.forEach(target => target.classList.add('collapsible-section-body'));

        header.classList.add('collapsible-section-header');
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        if (!header.querySelector('.section-collapse-btn')) {
            const btn = document.createElement('span');
            btn.className = 'section-collapse-btn';
            btn.setAttribute('aria-hidden', 'true');
            header.appendChild(btn);
        }

        const toggle = () => {
            const nextCollapsed = !host.classList.contains('is-collapsed-section');
            collapsedSections[collapseId] = nextCollapsed;
            applySectionCollapsed(host, nextCollapsed);
            saveCollapsedSections();
            requestAnimationFrame(syncBottomBarSafeArea);
        };
        header.addEventListener('click', (e) => {
            if (e.target.closest('select, input, button, a')) return;
            toggle();
        });
        header.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            toggle();
        });

        applySectionCollapsed(host, !!collapsedSections[collapseId]);
    });

    document.querySelectorAll('.stat-category > .stat-cat-header').forEach((header, index) => {
        if (header.dataset.collapseBound) return;
        const host = header.closest('.stat-category');
        if (!host) return;
        const targets = collectCollapsibleTargets(host, header);
        if (targets.length === 0) return;
        const collapseId = getSectionCollapseId(host, header, index);
        header.dataset.collapseId = collapseId;
        header.dataset.collapseBound = '1';
        targets.forEach(target => target.classList.add('collapsible-section-body'));
        header.classList.add('collapsible-section-header');
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        if (!header.querySelector('.section-collapse-btn')) {
            const btn = document.createElement('span');
            btn.className = 'section-collapse-btn';
            btn.setAttribute('aria-hidden', 'true');
            header.appendChild(btn);
        }

        const applyHeaderCollapsed = (collapsed) => {
            header.classList.toggle('is-collapsed-header', collapsed);
            header.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
            targets.forEach(target => target.classList.toggle('is-collapsed-body', collapsed));
            const btn = header.querySelector('.section-collapse-btn');
            if (btn) btn.textContent = collapsed ? '＋' : '−';
        };
        const toggle = () => {
            const nextCollapsed = !header.classList.contains('is-collapsed-header');
            collapsedSections[collapseId] = nextCollapsed;
            applyHeaderCollapsed(nextCollapsed);
            saveCollapsedSections();
            requestAnimationFrame(syncBottomBarSafeArea);
        };
        header.addEventListener('click', (e) => {
            if (e.target.closest('select, input, button, a')) return;
            toggle();
        });
        header.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            toggle();
        });
        applyHeaderCollapsed(!!collapsedSections[collapseId]);
    });
}

let activeArtifactPresetPopoverAnchor = null;
let activeArtifactPresetPopoverMode = null;
let activeArtifactCostPopoverAnchor = null;
let activeSpellPresetPopoverAnchor = null;
let activeSpellPresetPopoverMode = null;

function ensureArtifactPresetPopover() {
    const appContainer = document.querySelector('.app-container');
    let popover = document.getElementById('artifact-preset-popover');
    if (!popover) {
        popover = document.createElement('div');
        popover.id = 'artifact-preset-popover';
        popover.className = 'artifact-preset-popover';
        popover.style.display = 'none';
        appContainer?.appendChild(popover);
    } else if (appContainer && popover.parentElement !== appContainer) {
        appContainer.appendChild(popover);
    }
    return popover;
}

function ensureArtifactCostPopover() {
    const appContainer = document.querySelector('.app-container');
    let popover = document.getElementById('artifact-cost-popover');
    if (!popover) {
        popover = document.createElement('div');
        popover.id = 'artifact-cost-popover';
        popover.className = 'artifact-cost-popover';
        popover.style.display = 'none';
        appContainer?.appendChild(popover);
    } else if (appContainer && popover.parentElement !== appContainer) {
        appContainer.appendChild(popover);
    }
    return popover;
}

function ensureSpellPresetPopover() {
    const appContainer = document.querySelector('.app-container');
    let popover = document.getElementById('spell-preset-popover');
    if (!popover) {
        popover = document.createElement('div');
        popover.id = 'spell-preset-popover';
        popover.className = 'spell-preset-popover';
        popover.style.display = 'none';
        appContainer?.appendChild(popover);
    } else if (appContainer && popover.parentElement !== appContainer) {
        appContainer.appendChild(popover);
    }
    return popover;
}

function closeArtifactPresetPopover() {
    const popover = document.getElementById('artifact-preset-popover');
    if (popover) popover.style.display = 'none';
    activeArtifactPresetPopoverAnchor = null;
    activeArtifactPresetPopoverMode = null;
}

function closeArtifactCostPopover() {
    const popover = document.getElementById('artifact-cost-popover');
    if (popover) popover.style.display = 'none';
    activeArtifactCostPopoverAnchor = null;
}

function closeSpellPresetPopover() {
    const popover = document.getElementById('spell-preset-popover');
    if (popover) popover.style.display = 'none';
    activeSpellPresetPopoverAnchor = null;
    activeSpellPresetPopoverMode = null;
}

function positionArtifactPresetPopover(anchorEl) {
    const popover = document.getElementById('artifact-preset-popover');
    if (!popover || !anchorEl) return;
    const rect = anchorEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const gap = 8;
    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    let top = rect.bottom + gap;
    const maxLeft = window.innerWidth - popRect.width - 12;
    left = Math.max(12, Math.min(maxLeft, left));
    const maxTop = window.innerHeight - popRect.height - 12;
    if (top > maxTop) {
        top = Math.max(12, rect.top - popRect.height - gap);
    }
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
}

function positionArtifactCostPopover(anchorEl) {
    const popover = document.getElementById('artifact-cost-popover');
    if (!popover || !anchorEl) return;
    const rect = anchorEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const gap = 8;
    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    let top = rect.bottom + gap;
    const maxLeft = window.innerWidth - popRect.width - 12;
    left = Math.max(12, Math.min(maxLeft, left));
    const maxTop = window.innerHeight - popRect.height - 12;
    if (top > maxTop) {
        top = Math.max(12, rect.top - popRect.height - gap);
    }
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
}

function positionSpellPresetPopover(anchorEl) {
    const popover = document.getElementById('spell-preset-popover');
    if (!popover || !anchorEl) return;
    const rect = anchorEl.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    const gap = 8;
    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    let top = rect.bottom + gap;
    const maxLeft = window.innerWidth - popRect.width - 12;
    left = Math.max(12, Math.min(maxLeft, left));
    const maxTop = window.innerHeight - popRect.height - 12;
    if (top > maxTop) {
        top = Math.max(12, rect.top - popRect.height - gap);
    }
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
}

function openArtifactPresetPopover(mode, anchorEl) {
    const popover = ensureArtifactPresetPopover();
    if (!popover || !anchorEl) return;
    const presets = loadArtifactPresets();
    const currentSlot = activeArtifactPresetSlotId ? String(activeArtifactPresetSlotId) : '';
    const currentDirty = hasArtifactPresetUnsavedChanges(currentSlot);
    popover.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'artifact-preset-popover-title';
    title.textContent = mode === 'save' ? '保存先を選択' : '削除する番号を選択';
    popover.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'artifact-preset-popover-grid';
    for (let slot = 1; slot <= ARTIFACT_PRESET_SLOT_COUNT; slot++) {
        const key = String(slot);
        const hasCards = hasArtifactSelectionCards(Array.isArray(presets[key]) ? presets[key] : []);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'artifact-preset-popover-btn';
        btn.textContent = key;
        btn.classList.toggle('is-current', currentSlot === key);
        btn.classList.toggle('is-dirty', currentDirty && currentSlot === key);
        if (!hasCards && mode === 'delete') btn.classList.add('is-empty');
        btn.title = mode === 'save'
            ? `プリセット${key}へ保存`
            : (hasCards ? `プリセット${key}を空にする` : `プリセット${key}は空です`);
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mode === 'save') {
                saveArtifactPreset(key);
            } else {
                if (!hasCards) return;
                if (!confirm(`遺物プリセット${key}を空にしますか？`)) return;
                deleteArtifactPreset(key);
            }
            closeArtifactPresetPopover();
        });
        grid.appendChild(btn);
    }
    popover.appendChild(grid);
    popover.style.display = 'block';
    activeArtifactPresetPopoverAnchor = anchorEl;
    activeArtifactPresetPopoverMode = mode;
    positionArtifactPresetPopover(anchorEl);
}

function openArtifactCostPopover(anchorEl) {
    const popover = ensureArtifactCostPopover();
    if (!popover || !anchorEl) return;
    const presets = loadArtifactPresets();
    const spellPresets = loadSpellPresets();
    const isSpellCostView = !!anchorEl.closest?.('#self-spell-cost-label, #self-spell-cost-inline, #spell-tab-cost-label, #spell-tab-cost-inline');
    const currentSlot = activeArtifactPresetSlotId ? String(activeArtifactPresetSlotId) : '';
    const currentDirty = hasArtifactPresetUnsavedChanges(currentSlot);
    const currentCost = getArtifactSelectionCost('self');
    const presetTotalCost = getArtifactPresetTotalCost(presets);
    const spellCost = getSpellSelectionCost();
    const combinedCost = presetTotalCost + spellCost;
    popover.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'artifact-cost-popover-title';
    title.textContent = isSpellCostView ? 'スペルコスト詳細' : '遺物コスト詳細';
    popover.appendChild(title);

    const current = document.createElement('div');
    current.className = 'artifact-cost-current';
    current.innerHTML = isSpellCostView
        ? `
            <span>スペルカード</span><span>${spellCost}</span>
            <span>遺物総合＋スペル</span><span>${combinedCost}</span>
        `
        : `
            <span>現在の合計</span><span>${currentCost}</span>
            <span>遺物プリセット総合</span><span>${presetTotalCost}</span>
            <span>スペルカード</span><span>${spellCost}</span>
            <span>遺物総合＋スペル</span><span>${combinedCost}</span>
        `;
    popover.appendChild(current);

    const list = document.createElement('div');
    list.className = 'artifact-cost-list';
    const listCount = isSpellCostView ? 7 : ARTIFACT_PRESET_SLOT_COUNT;
    for (let slot = 1; slot <= listCount; slot++) {
        const key = String(slot);
        const saved = isSpellCostView ? spellPresets[key] : presets[key];
        const hasPreset = isSpellCostView
            ? !!saved && typeof saved === 'object'
            : Array.isArray(saved);
        const hasCards = isSpellCostView
            ? Object.values(normalizeSpellPresetSelection(hasPreset ? saved : {})).some(entry => (entry?.qty || 0) > 0)
            : hasArtifactSelectionCards(Array.isArray(saved) ? saved : []);
        const item = document.createElement('div');
        item.className = 'artifact-cost-item';
        item.classList.toggle('is-empty', !hasCards);
        item.classList.toggle('is-current', (isSpellCostView ? activeSpellPresetSlotId : currentSlot) === key);
        item.classList.toggle('is-dirty', !isSpellCostView && currentDirty && currentSlot === key);
        const costText = hasPreset
            ? String(isSpellCostView ? getSpellPresetSelectionCost(saved) : getArtifactPresetSelectionCost(saved))
            : '0';
        item.innerHTML = `<span class="artifact-cost-slot">${key}</span><span class="artifact-cost-value">${costText}</span>`;
        list.appendChild(item);
    }
    popover.appendChild(list);
    popover.style.display = 'block';
    activeArtifactCostPopoverAnchor = anchorEl;
    positionArtifactCostPopover(anchorEl);
}

function openSpellPresetPopover(mode, anchorEl) {
    const popover = ensureSpellPresetPopover();
    if (!popover || !anchorEl) return;
    const presets = loadSpellPresets();
    const currentSlot = activeSpellPresetSlotId ? String(activeSpellPresetSlotId) : '';
    const currentDirty = hasSpellPresetUnsavedChanges(currentSlot);
    popover.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'spell-preset-popover-title';
    title.textContent = mode === 'save' ? '保存先を選択' : '削除する番号を選択';
    popover.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'spell-preset-popover-grid';
    for (let slot = 1; slot <= 7; slot++) {
        const key = String(slot);
        const saved = presets[key] && typeof presets[key] === 'object' ? normalizeSpellPresetSelection(presets[key]) : {};
        const hasCards = Object.values(saved).some(entry => (entry?.qty || 0) > 0);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'spell-preset-popover-btn';
        btn.textContent = key;
        btn.classList.toggle('is-current', currentSlot === key);
        btn.classList.toggle('is-dirty', currentDirty && currentSlot === key);
        if (!hasCards && mode === 'delete') btn.classList.add('is-empty');
        btn.title = mode === 'save'
            ? `プリセット${key}へ保存`
            : (hasCards ? `プリセット${key}を空にする` : `プリセット${key}は空です`);
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mode === 'save') {
                saveSpellPreset(key);
            } else {
                if (!hasCards) return;
                if (!confirm(`スペルプリセット${key}を空にしますか？`)) return;
                deleteSpellPreset(key);
            }
            closeSpellPresetPopover();
        });
        grid.appendChild(btn);
    }
    popover.appendChild(grid);
    popover.style.display = 'block';
    activeSpellPresetPopoverAnchor = anchorEl;
    activeSpellPresetPopoverMode = mode;
    positionSpellPresetPopover(anchorEl);
}

function saveSpellSelectionsState() {
    try {
        localStorage.setItem(SPELL_STORAGE_KEY, JSON.stringify({
            selections: normalizeSpellSelections(spellSelections),
            panelOpen: isSpellSelectedPanelOpen,
            applyEnabled: isSpellApplyEnabled(),
            artifactApplyEnabled: isArtifactApplyEnabled(),
            presetSlot: activeSpellPresetSlotId
        }));
    } catch (e) {
        console.error("Spell save failed", e);
    }
}

function loadSpellSelectionsState() {
    try {
        const raw = localStorage.getItem(SPELL_STORAGE_KEY);
        if (!raw) return false;
        const state = JSON.parse(raw);
        if (state?.selections) {
            spellSelections = normalizeSpellSelections(state.selections);
        }
        if (typeof state?.panelOpen === 'boolean') {
            isSpellSelectedPanelOpen = state.panelOpen;
        }
        if (typeof state?.applyEnabled === 'boolean') {
            setSpellApplyEnabled(state.applyEnabled);
        }
        if (typeof state?.artifactApplyEnabled === 'boolean') {
            setArtifactApplyEnabled(state.artifactApplyEnabled);
        }
        if (typeof state?.presetSlot === 'string') {
            activeSpellPresetSlotId = state.presetSlot;
        }
        return true;
    } catch (e) {
        console.error("Spell load failed", e);
        return false;
    }
}

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

function migrateLegacyZeroBaseMultiplierInputs(state = {}) {
    if (state.multiplierInputBaseVersion === 2) return;
    [
        'self-mult-add-number',
        'self-mult-other-number',
        'enemy-mult-add-number',
        'enemy-mult-other-number'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const current = parseFloat(el.value);
        if (!Number.isFinite(current)) return;
        el.value = String(current - 100);
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
    const normalizedSpellSelections = normalizeSpellSelections(spellSelections);
    const state = {
        perspective: v.perspective,
        isCrayon: v.isCrayon,
        self: v.self,
        enemy: v.enemy,
        selfPreset: inputs.self.preset.value,
        enemyPreset: inputs.enemy.preset.value,
        enemyPhase: inputs.enemy.phase.value,
        spellSelectedPanelOpen: isSpellSelectedPanelOpen,
        spellApplyEnabled: isSpellApplyEnabled(),
        artifactApplyEnabled: isArtifactApplyEnabled(),
        spellSelections: normalizedSpellSelections,
        spellPresetSlot: activeSpellPresetSlotId,
        artifactPresetSlot: activeArtifactPresetSlotId,
        multiplierInputBaseVersion: 2,
        mobileVisibleSide,
        mobileCrayonVisibleSide,
        cards: {
            self: collectCardSelections('self'),
            enemy: collectCardSelections('enemy')
        },
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

        const hasDedicatedSpellState = loadSpellSelectionsState();

        if (state.cards) {
            restoreCardSelections('self', state.cards.self);
            restoreCardSelections('enemy', state.cards.enemy);
        }
        if (!hasDedicatedSpellState && state.spellSelections) {
            spellSelections = normalizeSpellSelections(state.spellSelections);
        }
        if (typeof state.spellPresetSlot === 'string' && !activeSpellPresetSlotId) {
            activeSpellPresetSlotId = state.spellPresetSlot;
        }
        if (typeof state.artifactPresetSlot === 'string') {
            activeArtifactPresetSlotId = state.artifactPresetSlot;
        }
        if (typeof state.mobileVisibleSide === 'string') {
            updateMobileSideUI(state.mobileVisibleSide);
        }
        if (typeof state.mobileCrayonVisibleSide === 'string') {
            updateMobileCrayonUI(state.mobileCrayonVisibleSide);
        }
        if (typeof state.spellSelectedPanelOpen === 'boolean') {
            isSpellSelectedPanelOpen = state.spellSelectedPanelOpen;
        }
        if (typeof state.spellApplyEnabled === 'boolean') {
            setSpellApplyEnabled(state.spellApplyEnabled);
        }
        if (typeof state.artifactApplyEnabled === 'boolean') {
            setArtifactApplyEnabled(state.artifactApplyEnabled);
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
        migrateLegacyZeroBaseMultiplierInputs(state);
        
        if (state.tab) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === state.tab));
            document.querySelectorAll('.tab-page').forEach(p => p.classList.toggle('active', p.id === 'tab-' + state.tab));
            updateTabUI(state.tab);
        }

        updatePerspectiveUI();
        updateUI();
        renderSpellLibrary();
        renderSelectedSpellList();
        syncAllSpellLibraryVisuals();
        updateSpellTotalCost();
        setSpellSelectedPanelOpen(isSpellSelectedPanelOpen);
        runEstimation();
        
        // Update delete buttons visibility on load
        syncDeleteButtonVisibility();
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
initializeCardUI();
initializeSpellTab();
renderArtifactPresetButtons();
loadState();
initCollapsibleSections();
updateMobileSideUI(mobileVisibleSide);
updateMobileCrayonUI(mobileCrayonVisibleSide);
initListeners();
updateHeaders();
if (estimator.samplesList.children.length === 0) estimator.samplesList.appendChild(createSampleRow());
updateMainSkillList('self');
updateMainSkillList('enemy');
syncDeleteButtonVisibility();
renderArtifactPresetButtons();
syncBottomBarSafeArea();
requestAnimationFrame(syncDeleteButtonVisibility);
requestAnimationFrame(syncBottomBarSafeArea);
scheduleCardImagePreload();

window.addEventListener('beforeunload', saveState);
window.addEventListener('pagehide', saveState);
window.addEventListener('resize', syncRelicPickerSafeArea);
window.addEventListener('resize', syncBottomBarSafeArea);
window.addEventListener('resize', () => {
    if (activeRelicEffectAnchor) positionRelicEffectPopover(activeRelicEffectAnchor);
});
window.addEventListener('resize', () => {
    if (activeSpellEffectPopoverCardId && activeSpellEffectPopoverAnchor) {
        positionSpellEffectPopover(activeSpellEffectPopoverAnchor);
    } else {
        closeSpellEffectPopover();
    }
    if (activeSolderPopoverAnchor) {
        positionSolderPopover(activeSolderPopoverAnchor);
    }
    if (activeArtifactPresetPopoverAnchor) {
        positionArtifactPresetPopover(activeArtifactPresetPopoverAnchor);
    }
    if (activeArtifactCostPopoverAnchor) {
        positionArtifactCostPopover(activeArtifactCostPopoverAnchor);
    }
});
window.addEventListener('scroll', () => {
    if (activeSpellEffectPopoverCardId && activeSpellEffectPopoverAnchor) {
        positionSpellEffectPopover(activeSpellEffectPopoverAnchor);
    }
    if (activeSolderPopoverAnchor) {
        positionSolderPopover(activeSolderPopoverAnchor);
    }
    if (activeArtifactCostPopoverAnchor) {
        positionArtifactCostPopover(activeArtifactCostPopoverAnchor);
    }
}, true);

document.addEventListener('click', (e) => {
    const resultDetailPopover = document.getElementById('result-detail-popover');
    if (resultDetailPopover && resultDetailPopover.style.display !== 'none') {
        if (e.target === resultDetailPopover) closeResultDetailPopover();
    }

    const popover = document.getElementById('spell-effect-popover');
    if (!popover || popover.style.display === 'none') return;
    if (e.target.closest('#spell-effect-popover') || e.target.closest('.spell-effect-badge')) return;
    closeSpellEffectPopover();
});

document.addEventListener('click', (e) => {
    const popover = document.getElementById('solder-level-popover');
    if (!popover || popover.style.display === 'none') return;
    if (popover.contains(e.target) || e.target.closest('.solder-pill-btn')) return;
    closeSolderPopover();
});

document.addEventListener('click', (e) => {
    if (!isSpellSelectedPanelOpen && !isCalcSpellSelectedPanelOpen) return;
    if (
        e.target.closest('.spell-selected-popover') ||
        e.target.closest('#spell-toggle-selected') ||
        e.target.closest('#self-spell-toggle-selected') ||
        e.target.closest('#solder-level-popover') ||
        e.target.closest('#spell-effect-popover')
    ) {
        return;
    }
    closeSpellSelectedPopovers();
});

document.addEventListener('click', (e) => {
    const popover = document.getElementById('crayon-stepper-popover');
    if (!popover || popover.style.display === 'none') return;
    if (popover.contains(e.target) || e.target.closest('#tab-crayon input[type="number"]')) return;
    closeCrayonStepperPopover();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSpellSelectedPopovers();
        closeCrayonStepperPopover();
    }
});

// Keep toggle circle outside .panel so position:fixed works consistently,
// and align it to the actual center line between the two side panels.
(function() {
    const circle = document.getElementById('perspective-toggle-circle');
    const sidePanels = document.querySelector('.side-panels');
    const appContainer = document.querySelector('.app-container');
    if (!circle || !sidePanels || !appContainer) return;

    appContainer.appendChild(circle);

    const mobileSideSwitch = document.getElementById('mobile-side-switch');
    if (mobileSideSwitch && mobileSideSwitch.parentElement !== document.body) {
        document.body.appendChild(mobileSideSwitch);
    }

    syncCrayonMobileControls();

    syncToggleCirclePosition = function(attempt = 0) {
        if (window.matchMedia('(max-width: 820px)').matches) {
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
    window.addEventListener('resize', () => syncCrayonMobileControls());
    window.addEventListener('resize', () => {
        if (!isMobileCrayonInputMode()) closeCrayonStepperPopover();
        const popover = document.getElementById('crayon-stepper-popover');
        const input = popover?.dataset.inputId ? document.getElementById(popover.dataset.inputId) : null;
        if (popover && input && popover.style.display !== 'none') positionCrayonStepperPopover(input, popover);
    });
    window.addEventListener('scroll', () => {
        syncToggleCirclePosition();
        const popover = document.getElementById('crayon-stepper-popover');
        const input = popover?.dataset.inputId ? document.getElementById(popover.dataset.inputId) : null;
        if (popover && input && popover.style.display !== 'none') positionCrayonStepperPopover(input, popover);
    }, { passive: true });
})();

