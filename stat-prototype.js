(function () {
  'use strict';

  const DATA = window.TRICKCAL_STAT_DATA;
  if (!DATA) {
    document.body.innerHTML = '<main class="stat-shell"><p>statData.jsを読み込めませんでした。</p></main>';
    return;
  }

  const STORAGE_KEY = 'trickcal_stat_prototype_v1';

  const STAT_GROUPS = [
    { key: 'HP', label: 'HP', total: 'hp', tone: 'hp' },
    { key: '物理攻撃', lookup: '物理攻撃力', label: '物攻', total: 'patk', tone: 'attack' },
    { key: '魔法攻撃', lookup: '魔法攻撃力', label: '魔攻', total: 'matk', tone: 'attack' },
    { key: '物理防御', lookup: '物理防御力', label: '物防', total: 'pdef', tone: 'defense' },
    { key: '魔法防御', lookup: '魔法防御力', label: '魔防', total: 'mdef', tone: 'defense' },
    { key: '会心/会心DMG', label: '会心/会心DMG', total: 'critPair', tone: 'crit' },
    { key: '会心抵抗/会心DMG抵抗', label: '会心抵抗/会心DMG抵抗', total: 'critResPair', tone: 'crit' }
  ];

  const TOTAL_LABELS = [
    { key: 'hp', label: 'HP', tone: 'hp' },
    { key: 'patk', label: '物理攻撃', tone: 'attack' },
    { key: 'matk', label: '魔法攻撃', tone: 'attack' },
    { key: 'pdef', label: '物理防御', tone: 'defense' },
    { key: 'mdef', label: '魔法防御', tone: 'defense' },
    { key: 'crit', label: '会心', tone: 'crit' },
    { key: 'critDmg', label: '会心DMG', tone: 'crit' },
    { key: 'critRes', label: '会心抵抗', tone: 'crit' },
    { key: 'critDmgRes', label: '会心DMG抵抗', tone: 'crit' }
  ];

  const BREAKDOWN_SOURCES = [
    { key: 'base', label: '基礎' },
    { key: 'rankUp', label: 'Rank補正' },
    { key: 'equipment', label: '装備' },
    { key: 'rankGlobal', label: 'Rank全体' },
    { key: 'research', label: '研究' },
    { key: 'board', label: 'ボード' },
    { key: 'bond', label: '好感度' },
    { key: 'asideManifest', label: 'アサイド発現' },
    { key: 'asideLevel', label: 'アサイドLv' }
  ];

  // 暫定値。実測リストが揃ったら使徒別/レベル別テーブルに差し替える。
  const ASIDE_LEVEL_STAT_MULTIPLIER = 3.18;

  const ASIDE_MANIFEST_BONUS_OVERRIDES = {
    Amelia: { hp: 2055, attack: 216, pdef: 324, mdef: 324 },
    Chloe: { hp: 5553, attack: 180, pdef: 468, mdef: 468 },
    Diana: { hp: 2928, attack: 180, pdef: 360, mdef: 360 },
    ED: { hp: 5553, attack: 180, pdef: 468, mdef: 468 },
    Hilde: { hp: 3804, attack: 162, pdef: 432, mdef: 432 },
    Kyarot: { hp: 2055, attack: 216, pdef: 324, mdef: 324 },
    Momo: { hp: 3804, attack: 216, pdef: 396, mdef: 396 },
    Ner: { hp: 3804, attack: 162, pdef: 432, mdef: 432 },
    Posher: { hp: 2056, attack: 216, pdef: 324, mdef: 324 },
    Selene: { hp: 5553, attack: 180, pdef: 468, mdef: 468 },
    Sist: { hp: 3804, attack: 216, pdef: 396, mdef: 396 },
    Snorky: { hp: 4680, attack: 216, pdef: 432, mdef: 432 },
    Ui: { hp: 4680, attack: 162, pdef: 432, mdef: 432 },
    Vivi: { hp: 5553, attack: 180, pdef: 468, mdef: 468 }
  };

  const STAT_ALIASES = {
    HP: 'hp',
    '最大HP': 'hp',
    '物理攻撃力': 'patk',
    '魔法攻撃力': 'matk',
    '攻撃': 'attackAll',
    '全体攻撃': 'attackAll',
    '物理防御力': 'pdef',
    '魔法防御力': 'mdef',
    '防御': 'defenseAll',
    '全体防御': 'defenseAll',
    '会心': 'crit',
    '会心ダメージ': 'critDmg',
    '会心DMG': 'critDmg',
    '会心抵抗': 'critRes',
    '会心DMG抵抗': 'critDmgRes',
    '会心ダメージ抵抗': 'critDmgRes',
    '全体会心': 'critPair',
    '全体会心抵抗': 'critResPair',
    '全体HP': 'hp'
  };

  const elements = {
    apostleSelect: document.getElementById('apostle-select'),
    rankSelect: document.getElementById('rank-select'),
    levelSelect: document.getElementById('level-select'),
    starSelect: document.getElementById('star-select'),
    bondSelect: document.getElementById('bond-select'),
    asideLevelSelect: document.getElementById('aside-level-select'),
    followToggle: document.getElementById('follow-toggle'),
    image: document.getElementById('apostle-image'),
    name: document.getElementById('apostle-name'),
    meta: document.getElementById('apostle-meta'),
    totals: document.getElementById('stat-total-grid'),
    breakdown: document.getElementById('stat-breakdown-table'),
    activeEffects: document.getElementById('active-effect-list'),
    equipment: document.getElementById('equipment-grid'),
    baseTypes: document.getElementById('base-type-list'),
    rankBonuses: document.getElementById('rank-bonus-list'),
    globalSettingTabs: Array.from(document.querySelectorAll('#global-setting-tabs button')),
    globalSettingPanels: Array.from(document.querySelectorAll('[data-setting-panel]')),
    researchProgressSelect: document.getElementById('research-progress-select'),
    researchLevelSelect: document.getElementById('research-level-select'),
    researchGrid: document.getElementById('research-grid'),
    activeResearch: document.getElementById('active-research-list'),
    rankOverviewSummary: document.getElementById('rank-overview-summary'),
    rankOverviewGrid: document.getElementById('rank-overview-grid'),
    boardTabs: Array.from(document.querySelectorAll('#board-tabs button')),
    fillBoard: document.getElementById('fill-board'),
    clearBoard: document.getElementById('clear-board'),
    boardSelectionSummary: document.getElementById('board-selection-summary'),
    boardSpecial: document.getElementById('board-special-list'),
    boardGrid: document.getElementById('board-grid')
  };

  const appState = loadState();
  const view = {
    id: '',
    board: 1
  };

  init();

  function init() {
    populateControls();
    view.id = appState.activeId || DATA.sheets.basicInfo[0]?.id || '';
    elements.apostleSelect.value = view.id;
    ensureApostleState(view.id);
    syncControlsFromState();
    bindEvents();
    render();
  }

  function populateControls() {
    elements.apostleSelect.innerHTML = DATA.sheets.basicInfo
      .map(row => `<option value="${escapeAttr(row.id)}">${escapeHtml(row.使徒名 || row.id)}</option>`)
      .join('');

    elements.rankSelect.innerHTML = Array.from({ length: 9 }, (_, index) => {
      const rank = index + 1;
      return `<option value="${rank}">Rank ${rank}</option>`;
    }).join('');

    elements.levelSelect.innerHTML = Array.from({ length: 300 }, (_, index) => {
      const level = index + 1;
      return `<option value="${level}">Lv ${level}</option>`;
    }).join('');

    elements.starSelect.innerHTML = Array.from({ length: 5 }, (_, index) => {
      const star = index + 1;
      return `<option value="${star}">★${star}</option>`;
    }).join('');

    elements.bondSelect.innerHTML = Array.from({ length: 31 }, (_, index) => {
      return `<option value="${index}">Lv ${index}</option>`;
    }).join('');

    elements.asideLevelSelect.innerHTML = Array.from({ length: 51 }, (_, index) => {
      const label = index === 0 ? '未発現' : `Lv ${index}`;
      return `<option value="${index}">${label}</option>`;
    }).join('');

    elements.researchProgressSelect.innerHTML = Array.from({ length: 45 }, (_, index) => {
      const label = index === 0 ? 'OFF' : `${index}回目`;
      return `<option value="${index}">${label}</option>`;
    }).join('');

    elements.researchLevelSelect.innerHTML = Array.from({ length: 11 }, (_, index) => {
      const label = index === 0 ? 'OFF' : `${index}段階`;
      return `<option value="${index}">${label}</option>`;
    }).join('');

    renderResearchControls();
    renderRankOverviewControls();
  }

  function bindEvents() {
    elements.apostleSelect.addEventListener('change', () => {
      persistCurrentControls();
      view.id = elements.apostleSelect.value;
      appState.activeId = view.id;
      ensureApostleState(view.id);
      syncControlsFromState();
      saveState();
      render();
    });

    elements.rankSelect.addEventListener('change', () => {
      currentApostleState().rank = Number(elements.rankSelect.value) || 1;
      saveState();
      render();
    });

    elements.levelSelect.addEventListener('change', () => {
      currentApostleState().level = Number(elements.levelSelect.value) || 1;
      saveState();
      render();
    });

    elements.starSelect.addEventListener('change', () => {
      currentApostleState().star = Number(elements.starSelect.value) || 1;
      saveState();
      render();
    });

    elements.bondSelect.addEventListener('change', () => {
      currentApostleState().bond = Number(elements.bondSelect.value) || 0;
      saveState();
      render();
    });

    elements.asideLevelSelect.addEventListener('change', () => {
      currentApostleState().asideLevel = Number(elements.asideLevelSelect.value) || 0;
      saveState();
      render();
    });

    elements.followToggle.addEventListener('change', () => {
      currentApostleState().follow = !!elements.followToggle.checked;
      saveState();
      render();
    });

    elements.globalSettingTabs.forEach(button => {
      button.addEventListener('click', () => {
        const tab = button.dataset.settingTab;
        elements.globalSettingTabs.forEach(item => item.classList.toggle('is-active', item === button));
        elements.globalSettingPanels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.settingPanel === tab));
      });
    });

    elements.boardTabs.forEach(button => {
      button.addEventListener('click', () => {
        const nextBoard = Number(button.dataset.board) || 1;
        if (!isBoardLayerUnlocked(nextBoard)) return;
        view.board = nextBoard;
        render();
      });
    });

    elements.fillBoard.addEventListener('click', () => {
      const board = currentBoardState();
      board.targets = [];
      getCurrentBoardRows().forEach(row => board.filled[boardKey(row)] = true);
      saveState();
      render();
    });

    elements.clearBoard.addEventListener('click', () => {
      const board = currentBoardState();
      board.filled = {};
      board.targets = [];
      pruneLockedBoardLayers();
      saveState();
      render();
    });

    elements.equipment.addEventListener('change', event => {
      const target = event.target;
      const cell = target.closest('.equip-cell');
      if (!cell) return;
      const key = cell.dataset.equipKey;
      const equip = currentApostleState().equipment[key] || { enabled: true, enhance: 0 };
      if (target.matches('.equip-enabled')) equip.enabled = target.checked;
      if (target.matches('.equip-enhance')) equip.enhance = Number(target.value) || 0;
      currentApostleState().equipment[key] = equip;
      saveState();
      render();
    });

    elements.researchProgressSelect.addEventListener('change', () => {
      appState.research.progress = Number(elements.researchProgressSelect.value) || 0;
      saveState();
      render();
    });

    elements.researchLevelSelect.addEventListener('change', () => {
      appState.research.level = Number(elements.researchLevelSelect.value) || 0;
      saveState();
      render();
    });

    elements.rankOverviewGrid.addEventListener('change', event => {
      const target = event.target;
      if (!target.matches('select[data-rank-apostle-id]')) return;
      const id = target.dataset.rankApostleId;
      ensureApostleState(id).rank = Number(target.value) || 1;
      if (id === view.id) elements.rankSelect.value = String(ensureApostleState(id).rank);
      saveState();
      render();
    });

    elements.boardGrid.addEventListener('click', event => {
      const node = event.target.closest('.board-node[data-node-key]');
      if (!node) return;
      const key = node.dataset.nodeKey;
      const rows = getCurrentBoardRows();
      const row = rows.find(item => boardKey(item) === key);
      if (!row || row.マス_type === 'スタート') return;
      const board = currentBoardState();
      board.targets = [];
      if (board.filled[key]) {
        delete board.filled[key];
        pruneDisconnectedBoardNodes(rows, board);
        pruneLockedBoardLayers();
      } else {
        const path = findBestBoardPath(rows, key);
        path.forEach(pathKey => {
          board.filled[pathKey] = true;
        });
      }
      saveState();
      render();
    });

    elements.boardSpecial.addEventListener('click', event => {
      const button = event.target.closest('button[data-board-shortcut-key]');
      if (!button || button.disabled) return;
      const layer = Number(button.dataset.boardShortcutLayer) || 1;
      const rows = getBoardRowsForLayer(layer);
      const key = button.dataset.boardShortcutKey;
      const target = rows.find(row => boardKey(row) === key);
      if (!target) return;
      const board = ensureBoardState(layer);
      toggleBoardShortcutTarget(board, key);
      rebuildAllShortcutBoardLayers();
      view.board = isBoardLayerUnlocked(layer) ? layer : getMaxUnlockedBoardLayer();
      saveState();
      render();
    });
  }

  function syncControlsFromState() {
    const state = currentApostleState();
    elements.rankSelect.value = String(state.rank);
    elements.levelSelect.value = String(state.level);
    elements.starSelect.value = String(state.star);
    elements.bondSelect.value = String(state.bond);
    elements.asideLevelSelect.value = String(state.asideLevel || 0);
    elements.followToggle.checked = !!state.follow;
  }

  function persistCurrentControls() {
    if (!view.id) return;
    const state = currentApostleState();
    state.rank = Number(elements.rankSelect.value) || 1;
    state.level = Number(elements.levelSelect.value) || 1;
    state.star = Number(elements.starSelect.value) || 1;
    state.bond = Number(elements.bondSelect.value) || 0;
    state.asideLevel = Number(elements.asideLevelSelect.value) || 0;
    state.follow = !!elements.followToggle.checked;
  }

  function render() {
    const basic = DATA.getById('basicInfo', view.id);
    const equipment = DATA.getById('equipment', view.id);
    const rankBonus = DATA.getById('rankGlobalBonuses', view.id);
    const boardRows = DATA.getById('board', view.id) || [];
    const totals = createEmptyTotals();
    const breakdown = createBreakdownTotals();
    const activeEffects = [];

    if (!isBoardLayerUnlocked(view.board)) {
      view.board = getMaxUnlockedBoardLayer();
    }

    elements.boardTabs.forEach(button => {
      const board = Number(button.dataset.board) || 1;
      const unlocked = isBoardLayerUnlocked(board);
      button.classList.toggle('is-active', board === view.board);
      button.classList.toggle('is-locked', !unlocked);
      button.disabled = !unlocked;
    });

    renderProfile(basic);
    applyBaseStats(basic, totals, activeEffects, breakdown);
    applyRankUpBonuses(basic, totals, activeEffects, breakdown);
    renderEquipment(equipment, totals, breakdown);
    applyBondBonus(totals, currentApostleState().bond, activeEffects, breakdown);
    applyAsideManifestBonus(basic, totals, activeEffects, breakdown);
    renderBaseTypes(basic);
    renderRankBonuses(rankBonus, totals, activeEffects, breakdown);
    renderActiveResearch(basic, totals, activeEffects, breakdown);
    renderRankOverview();
    renderBoardSpecial(boardRows);
    renderBoard(boardRows, totals, activeEffects, breakdown);
    renderTotals(totals, activeEffects);
    renderStatBreakdown(breakdown, totals);
  }

  function renderProfile(basic) {
    if (!basic) return;
    elements.name.textContent = basic.使徒名 || basic.id;
    elements.meta.textContent = [
      basic.レア度 ? `★${basic.レア度}` : '',
      `Lv${currentApostleState().level}`,
      `★${currentApostleState().star}`,
      basic.性格,
      basic.種族,
      basic.役割,
      basic.配列,
      basic.攻撃タイプ ? `${basic.攻撃タイプ}攻撃` : '',
      currentApostleState().asideLevel ? `アサイドLv${currentApostleState().asideLevel}` : '',
      currentApostleState().follow ? 'フォロー中' : ''
    ].filter(Boolean).join(' / ');

    elements.image.src = `img/Chara/${basic.id}.webp`;
    elements.image.alt = basic.使徒名 || basic.id;
    elements.image.onerror = () => {
      elements.image.removeAttribute('src');
      elements.image.alt = '';
    };
  }

  function renderEquipment(equipment, totals, breakdown) {
    if (!equipment) {
      elements.equipment.innerHTML = '<p class="muted-line">装備情報がありません。</p>';
      return;
    }

    const rank = currentApostleState().rank;
    const state = currentApostleState();
    const visibleGroups = STAT_GROUPS.filter(group => hasEquipmentTier(equipment, rank, group.key));
    elements.equipment.innerHTML = visibleGroups.map(group => {
      const tier = equipment[`Equip_Rank${rank}_${group.key}`];
      const normalizedTier = Number(tier);
      const lookupGroup = group.lookup || group.key;
      const key = group.key;
      const saved = state.equipment[key] || { enabled: true, enhance: 0 };
      state.equipment[key] = saved;
      const empty = !Number.isFinite(normalizedTier);
      const equipValue = !empty ? findEquipmentValue(rank, lookupGroup, normalizedTier, saved.enhance) : null;
      if (!empty && saved.enabled && equipValue) {
        addStatValue(totals, group.total, equipValue.value);
        addSourceStat(breakdown, 'equipment', group.total, equipValue.value);
      }
      const iconPath = !empty ? getEquipmentIconPath(rank, lookupGroup, normalizedTier) : '';

      return `
        <div class="equip-cell ${empty ? 'is-empty' : ''} ${saved.enabled ? '' : 'is-disabled'}" data-equip-key="${escapeAttr(key)}">
          ${iconPath ? `<img class="equip-icon" src="${escapeAttr(iconPath)}" alt="">` : ''}
          <div class="kind">${escapeHtml(group.label)}</div>
          <div class="tier">${empty ? '-' : `tier ${normalizedTier}`}</div>
          <div class="name">${equipValue ? `${escapeHtml(equipValue.name)} / ${formatNumber(equipValue.value)}` : '未装備'}</div>
          <div class="equip-controls">
            <label><input type="checkbox" class="equip-enabled" ${saved.enabled ? 'checked' : ''} ${empty ? 'disabled' : ''}> 装備</label>
            <select class="equip-enhance" ${empty ? 'disabled' : ''}>
              ${Array.from({ length: 6 }, (_, index) => `<option value="${index}" ${saved.enhance === index ? 'selected' : ''}>+${index}</option>`).join('')}
            </select>
          </div>
        </div>
      `;
    }).join('');
  }

  function applyBaseStats(basic, totals, activeEffects, breakdown) {
    if (!basic) return;
    const state = currentApostleState();
    const level = Number(state.level) || 1;
    const star = Number(state.star) || Number(basic.レア度) || 1;
    const entries = [
      ['hp', basic.HPタイプ, 'hp'],
      ['patk', basic.物理攻撃力タイプ, 'attack'],
      ['matk', basic.魔法攻撃力タイプ, 'attack'],
      ['pdef', basic.物理防御力タイプ, 'defense'],
      ['mdef', basic.魔法防御力タイプ, 'defense'],
      ['crit', basic.会心タイプ, 'crit'],
      ['critDmg', basic.会心DMGタイプ, 'crit'],
      ['critRes', basic.会心抵抗タイプ, 'crit'],
      ['critDmgRes', basic.会心DMG抵抗タイプ, 'crit']
    ];
    entries.forEach(([totalKey, tier, group]) => {
      const base = findBaseStatValue(tier, group);
      if (!base) return;
      const value = calculateBaseStat(base.base, base.coeff, level, star);
      totals[totalKey] += value;
      addSourceStat(breakdown, 'base', totalKey, value);
    });
    activeEffects.push(`基礎ステ Lv${level} ★${star}`);
  }

  function calculateBaseStat(base, coeff, level, star) {
    const baseValue = Number(base) || 0;
    const coeffValue = Number(coeff) || 0;
    const levelValue = Math.max(1, Number(level) || 1);
    const starValue = Math.max(1, Number(star) || 1);
    return Math.floor((baseValue + coeffValue * (levelValue - 1)) * (1 + 0.2 * (starValue - 1)));
  }

  function applyRankUpBonuses(basic, totals, activeEffects, breakdown) {
    if (!basic || !DATA.sheets.rankUpBonuses?.length) return;
    const rank = Math.max(1, Number(currentApostleState().rank) || 1);
    if (rank <= 1) return;

    const attackType = String(basic.攻撃タイプ || '');
    const attackKey = attackType === '物理' ? 'patk' : 'matk';
    const attackTier = attackType === '物理' ? basic.物理攻撃力タイプ : basic.魔法攻撃力タイプ;
    const steps = Array.from({ length: rank - 1 }, (_, index) => index + 1);

    steps.forEach(rankFrom => {
      addRankUpValue(totals, breakdown, rankFrom, basic.HPタイプ, 'HP', 'hp');
      addRankUpValue(totals, breakdown, rankFrom, attackTier, '攻撃力', attackKey);
      addRankUpValue(totals, breakdown, rankFrom, basic.物理防御力タイプ, '防御力', 'pdef');
      addRankUpValue(totals, breakdown, rankFrom, basic.魔法防御力タイプ, '防御力', 'mdef');
      addRankUpValue(totals, breakdown, rankFrom, basic.会心タイプ, '会心系', 'crit');
      addRankUpValue(totals, breakdown, rankFrom, basic.会心DMGタイプ, '会心系', 'critDmg');
      addRankUpValue(totals, breakdown, rankFrom, basic.会心抵抗タイプ, '会心系', 'critRes');
      addRankUpValue(totals, breakdown, rankFrom, basic.会心DMG抵抗タイプ, '会心系', 'critDmgRes');
    });

    activeEffects.push(`Rankアップ補正 Rank${rank}`);
  }

  function renderTotals(totals, activeEffects) {
    elements.totals.innerHTML = TOTAL_LABELS.map(item => `
      <div class="stat-card ${item.tone}">
        <div class="label">${escapeHtml(item.label)}</div>
        <div class="value">${formatNumber(totals[item.key] || 0)}</div>
      </div>
    `).join('');
    elements.activeEffects.innerHTML = activeEffects.length
      ? renderCompactTable(['適用中の効果'], activeEffects.map(effect => [effect]), { firstColumnHeader: true })
      : '<p class="empty-note">全体効果なし</p>';
  }

  function renderStatBreakdown(breakdown, totals) {
    const head = `
      <thead>
        <tr>
          <th>ステータス</th>
          ${BREAKDOWN_SOURCES.map(source => `<th>${escapeHtml(source.label)}</th>`).join('')}
          <th>合計</th>
        </tr>
      </thead>
    `;
    const body = TOTAL_LABELS.map(item => `
      <tr class="${item.tone}">
        <th>${escapeHtml(item.label)}</th>
        ${BREAKDOWN_SOURCES.map(source => `<td>${formatBreakdownValue(breakdown[source.key]?.[item.key])}</td>`).join('')}
        <td class="total">${formatBreakdownValue(totals[item.key])}</td>
      </tr>
    `).join('');
    elements.breakdown.innerHTML = `<table>${head}<tbody>${body}</tbody></table>`;
  }

  function renderBaseTypes(basic) {
    if (!basic) return;
    const rows = [
      ['HP', basic.HPタイプ, 'hp'],
      ['物攻', basic.物理攻撃力タイプ, 'attack'],
      ['魔攻', basic.魔法攻撃力タイプ, 'attack'],
      ['物防', basic.物理防御力タイプ, 'defense'],
      ['魔防', basic.魔法防御力タイプ, 'defense'],
      ['会心', basic.会心タイプ, 'crit'],
      ['会心DMG', basic.会心DMGタイプ, 'crit'],
      ['会心抵抗', basic.会心抵抗タイプ, 'crit'],
      ['会心DMG抵抗', basic.会心DMG抵抗タイプ, 'crit']
    ];
    elements.baseTypes.innerHTML = renderCompactTable(
      ['項目', 'tier', '基礎', '係数'],
      rows.map(([label, value, group]) => {
      const base = findBaseStatValue(value, group);
        return [label, value || '-', base?.base ?? '-', base?.coeff ?? '-'];
      })
    );
  }

  function renderRankBonuses(rankBonus, totals, activeEffects, breakdown) {
    if (!rankBonus) {
      elements.rankBonuses.innerHTML = '<p class="empty-note">Rank効果なし</p>';
      return;
    }
    const rankTotals = createEmptyTotals();
    const rankLimit = Math.min(currentApostleState().rank - 1, 9);
    for (let rank = 1; rank <= rankLimit; rank++) {
      for (let index = 1; index <= 2; index++) {
        const type = rankBonus[`Rank${rank}to${rank + 1}_type${index}`];
        const value = Number(rankBonus[`Rank${rank}to${rank + 1}_value${index}`]) || 0;
        if (!type || !value) continue;
        addNamedStat(totals, type, value);
        addNamedStat(rankTotals, type, value);
        addSourceNamedStat(breakdown, 'rankGlobal', type, value);
        activeEffects.push(`Rank ${type}+${value}`);
      }
    }
    elements.rankBonuses.innerHTML = renderStatTotalsTable(rankTotals, '現在Rankでは未適用');
  }

  function applyRankBonusToTotals(rankBonus, rankValue, totals) {
    if (!rankBonus) return;
    const rankLimit = Math.min(Number(rankValue) - 1, 9);
    for (let rank = 1; rank <= rankLimit; rank++) {
      for (let index = 1; index <= 2; index++) {
        const type = rankBonus[`Rank${rank}to${rank + 1}_type${index}`];
        const value = Number(rankBonus[`Rank${rank}to${rank + 1}_value${index}`]) || 0;
        if (!type || !value) continue;
        addNamedStat(totals, type, value);
      }
    }
  }

  function renderResearchControls() {
    elements.researchGrid.innerHTML = '';
  }

  function renderActiveResearch(basic, totals, activeEffects, breakdown) {
    if (!basic) return;
    const progress = Number(appState.research.progress) || 0;
    const level = Number(appState.research.level) || 0;
    elements.researchProgressSelect.value = String(progress);
    elements.researchLevelSelect.value = String(level);

    const rows = getActiveResearchRows().filter(row => row.種族 === basic.種族);
    const entries = [];
    rows.forEach(row => {
      const value = getResearchValue(row, level, progress);
      if (!value) return;
      addNamedStat(totals, row.ステータス, value);
      addSourceNamedStat(breakdown, 'research', row.ステータス, value);
      activeEffects.push(`研究${level}段階${progress}回目 ${row.ステータス}+${value}`);
      entries.push({
        count: row.id,
        stage: getResearchAppliedStage(row, level, progress),
        species: row.種族,
        stat: row.ステータス,
        value
      });
    });
    elements.activeResearch.innerHTML = renderResearchTable(entries, '選択使徒に適用中の研究なし', false);
    renderResearchOverview();
  }

  function getActiveResearchRows() {
    const progress = Number(appState.research.progress) || 0;
    const level = Number(appState.research.level) || 0;
    if (!progress || !level) return [];
    return DATA.sheets.research;
  }

  function renderResearchOverview() {
    const level = Number(appState.research.level) || 0;
    const progress = Number(appState.research.progress) || 0;
    const rows = getActiveResearchRows();
    if (!rows.length) {
      elements.researchGrid.innerHTML = '<p class="empty-note">研究効果OFF</p>';
      return;
    }
    const entries = rows
      .map(row => ({ row, value: getResearchValue(row, level, progress) }))
      .filter(item => item.value)
      .map(({ row, value }) => ({
        count: row.id,
        stage: getResearchAppliedStage(row, level, progress),
        species: row.種族,
        stat: row.ステータス,
        value
      }));
    elements.researchGrid.innerHTML = renderResearchTable(entries, '研究効果なし', true);
  }

  function renderResearchTable(entries, emptyText, showSpecies) {
    if (!entries.length) return `<p class="empty-note">${escapeHtml(emptyText)}</p>`;
    const speciesHeader = showSpecies ? '<th>種族</th>' : '';
    const rows = entries.map(entry => `
      <tr>
        <td>${escapeHtml(entry.count)}回目</td>
        <td>${escapeHtml(entry.stage)}</td>
        ${showSpecies ? `<td>${escapeHtml(entry.species || '')}</td>` : ''}
        <td>${escapeHtml(entry.stat || '')}</td>
        <td class="value">+${escapeHtml(entry.value)}</td>
      </tr>
    `).join('');
    return `
      <table class="research-table">
        <thead>
          <tr>
            <th>回目</th>
            <th>反映段階</th>
            ${speciesHeader}
            <th>ステータス</th>
            <th>上昇値</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function renderCompactTable(headers, rows, options = {}) {
    if (!rows.length) return `<p class="empty-note">${escapeHtml(options.emptyText || '表示なし')}</p>`;
    const body = rows.map(row => `
      <tr>
        ${row.map((cell, index) => {
          const tag = index === 0 && options.firstColumnHeader ? 'th' : 'td';
          const className = options.valueColumn === index ? ' class="value"' : '';
          return `<${tag}${className}>${escapeHtml(cell)}</${tag}>`;
        }).join('')}
      </tr>
    `).join('');
    return `
      <table class="compact-table">
        <thead>
          <tr>${headers.map(header => `<th>${escapeHtml(header)}</th>`).join('')}</tr>
        </thead>
        <tbody>${body}</tbody>
      </table>
    `;
  }

  function renderStatTotalsTable(totals, emptyText) {
    const rows = TOTAL_LABELS.map(item => [
      item.label,
      totals[item.key] ? `+${formatNumber(totals[item.key])}` : '-'
    ]);
    const hasValue = rows.some(([, value]) => value !== '-');
    if (!hasValue) return `<p class="empty-note">${escapeHtml(emptyText)}</p>`;
    return renderCompactTable(['ステータス', '上昇値'], rows, { firstColumnHeader: true, valueColumn: 1 });
  }

  function getResearchAppliedStage(row, stage, count) {
    const stageValue = Math.max(0, Number(stage) || 0);
    const countValue = Math.max(0, Number(count) || 0);
    if (!stageValue || !countValue) return '-';
    const rowCount = Number(row.id) || 0;
    const maxStageForRow = rowCount <= countValue ? stageValue : stageValue - 1;
    if (maxStageForRow <= 0) return '-';
    return maxStageForRow === 1 ? '1' : `1-${maxStageForRow}`;
  }

  function getResearchValue(row, stage, count) {
    const stageValue = Math.max(0, Number(stage) || 0);
    const countValue = Math.max(0, Number(count) || 0);
    if (!stageValue || !countValue) return 0;
    const rowCount = Number(row.id) || 0;
    const maxStageForRow = rowCount <= countValue ? stageValue : stageValue - 1;
    let total = 0;
    for (let index = 1; index <= maxStageForRow; index++) {
      total += Number(row[`段階${index}`]) || 0;
    }
    return total;
  }

  function renderRankOverviewControls() {
    elements.rankOverviewGrid.innerHTML = DATA.sheets.basicInfo.map(row => `
      <label class="rank-overview-row">
        <span class="apostle">${escapeHtml(row.使徒名 || row.id)}</span>
        <span class="meta">${escapeHtml(row.種族 || '')} / ${escapeHtml(row.攻撃タイプ || '')}</span>
        <select data-rank-apostle-id="${escapeAttr(row.id)}">
          ${Array.from({ length: 9 }, (_, index) => {
            const rank = index + 1;
            return `<option value="${rank}">R${rank}</option>`;
          }).join('')}
        </select>
      </label>
    `).join('');
  }

  function renderRankOverview() {
    elements.rankOverviewGrid.querySelectorAll('select[data-rank-apostle-id]').forEach(select => {
      const state = ensureApostleState(select.dataset.rankApostleId);
      select.value = String(state.rank);
    });

    const effects = createEmptyTotals();
    DATA.sheets.rankGlobalBonuses.forEach(row => {
      const state = ensureApostleState(row.id);
      applyRankBonusToTotals(row, state.rank, effects);
    });
    elements.rankOverviewSummary.innerHTML = renderStatTotalsTable(effects, 'Rank全体効果なし');
  }

  function renderBoardSpecial(rows) {
    if (!rows?.length) {
      elements.boardSpecial.innerHTML = '';
      return;
    }
    const html = [1, 2, 3].map(layer => {
      const unlocked = isBoardLayerUnlocked(layer);
      const shortcuts = rows
        .filter(row => Number(row.ボード階層) === layer)
        .filter(row => row.マス_type === '特殊')
        .sort((a, b) => Number(a.Y_pos) - Number(b.Y_pos) || Number(a.X_pos) - Number(b.X_pos));
      if (!shortcuts.length) return '';
      const buttons = shortcuts.map(row => {
        const iconPath = getBoardIconPath(row);
        const typeClass = boardNodeClass(row);
        const label = shortBoardLabel(row);
        const selected = (ensureBoardState(layer).targets || []).includes(boardKey(row));
        return `
          <button
            type="button"
            class="board-shortcut ${typeClass} ${selected ? 'is-filled' : ''} ${unlocked ? '' : 'will-unlock'}"
            data-board-shortcut-layer="${layer}"
            data-board-shortcut-key="${escapeAttr(boardKey(row))}"
            title="${escapeAttr(formatBoardEffect(row))}"
            style="--tile-base: url('${escapeAttr(getBoardTileBasePath(row))}');"
          >
            ${iconPath ? `<img src="${escapeAttr(iconPath)}" alt="">` : ''}
            <span>${escapeHtml(label)}</span>
          </button>
        `;
      }).join('');
      return `
        <div class="board-shortcut-group">
          <div class="board-shortcut-title">ボード${layer}</div>
          <div class="board-shortcut-list">${buttons}</div>
        </div>
      `;
    }).join('');
    elements.boardSpecial.innerHTML = html || '<p class="empty-note">ボードショートカットなし</p>';
  }

  function renderBoard(rows, totals, activeEffects, breakdown) {
    const filtered = getCurrentBoardRows(rows);
    if (!filtered.length) {
      elements.boardGrid.innerHTML = '<p class="muted-line">ボード情報がありません。</p>';
      return;
    }
    const boardState = currentBoardState();
    const xValues = filtered.map(row => Number(row.X_pos)).filter(Number.isFinite);
    const yValues = filtered.map(row => Number(row.Y_pos)).filter(Number.isFinite);
    const minX = 1;
    const maxX = Math.max(7, ...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    const entry = getBoardEntryRow(filtered);
    const hasVirtualStart = Number(view.board) > 1 && isBoardLayerUnlocked(view.board) && entry;
    const startY = hasVirtualStart ? minY - 1 : minY;
    const byPos = new Map(filtered.map(row => [`${Number(row.X_pos)}:${Number(row.Y_pos)}`, row]));
    const nodes = [];
    for (let x = minX; x <= maxX; x++) {
      for (let y = startY; y <= maxY; y++) {
        if (hasVirtualStart && x === Number(entry.X_pos) && y === startY) {
          nodes.push(`
            <div class="board-node type-gate is-filled is-virtual-start" title="前階層ゲート" style="--tile-base: url('img/Board/Tile_gate.webp');">
              <span class="board-node-label">START</span>
            </div>
          `);
          continue;
        }
        const row = byPos.get(`${x}:${y}`);
        if (!row) {
          nodes.push('<div class="board-node is-empty"></div>');
          continue;
        }
        const key = boardKey(row);
        const filled = row.マス_type === 'スタート' || !!boardState.filled[key];
        if (filled) {
          applyBoardRow(totals, row, activeEffects, breakdown);
        }
        const text = row.表示用 || formatBoardEffect(row);
        const baseIcon = getBoardTileBasePath(row);
        const icon = getBoardIconPath(row);
        nodes.push(`
          <button type="button" class="board-node ${boardNodeClass(row)} ${filled ? 'is-filled' : 'is-locked'}" data-node-key="${escapeAttr(key)}" title="${escapeAttr(text)}" style="--tile-base: url('${escapeAttr(baseIcon)}'); ${icon ? `--tile-icon: url('${escapeAttr(icon)}');` : ''}">
            <span class="board-node-label">${escapeHtml(shortBoardLabel(row))}</span>
          </button>
        `);
      }
    }
    elements.boardGrid.style.gridTemplateColumns = `repeat(${maxY - startY + 1}, minmax(28px, 35px))`;
    elements.boardGrid.innerHTML = nodes.join('');
    renderBoardSelectionSummary(filtered);
  }

  function applyBondBonus(totals, level, activeEffects, breakdown) {
    const value = getBondBonusValue(level);
    if (!value) return;
    ['crit', 'critDmg', 'critRes', 'critDmgRes'].forEach(key => {
      addStatValue(totals, key, value);
      addSourceStat(breakdown, 'bond', key, value);
    });
    activeEffects.push(`好感度 会心/会心DMG/会心抵抗/会心DMG抵抗+${value}`);
  }

  function getBondBonusValue(level) {
    const levelValue = Number(level) || 0;
    if (!levelValue) return 0;
    const perLevel = Number(DATA.sheets.bondBonuses.find(row => Number(row.会心系))?.会心系) || 0;
    return perLevel * levelValue;
  }

  function applyAsideManifestBonus(basic, totals, activeEffects, breakdown) {
    const level = Number(currentApostleState().asideLevel) || 0;
    if (!level) return;
    const result = getAsideManifestBonus(basic);
    if (!result) {
      activeEffects.push(`アサイドLv${level} ステータス補正(詳細未設定)`);
      return;
    }

    const attackKey = basic?.攻撃タイプ === '物理' ? 'patk' : 'matk';
    const values = [
      ['hp', result.hp],
      [attackKey, result.attack],
      ['pdef', result.pdef],
      ['mdef', result.mdef]
    ];
    values.forEach(([key, value]) => {
      addStatValue(totals, key, value);
      addSourceStat(breakdown, 'asideManifest', key, value);
    });

    const attackLabel = basic?.攻撃タイプ === '物理' ? '物理攻撃' : '魔法攻撃';
    activeEffects.push(`アサイド発現(${result.source}) HP+${result.hp} / ${attackLabel}+${result.attack} / 物防+${result.pdef} / 魔防+${result.mdef}`);
    const levelBonus = calculateAsideLevelBonus(basic, level);
    if (levelBonus) {
      const levelValues = [
        ['hp', levelBonus.hp],
        [attackKey, levelBonus.attack],
        ['pdef', levelBonus.pdef],
        ['mdef', levelBonus.mdef]
      ];
      levelValues.forEach(([key, value]) => {
        addStatValue(totals, key, value);
        addSourceStat(breakdown, 'asideLevel', key, value);
      });
      activeEffects.push(`アサイドLv${level}(暫定) HP+${levelBonus.hp} / ${attackLabel}+${levelBonus.attack} / 物防+${levelBonus.pdef} / 魔防+${levelBonus.mdef}`);
    }
  }

  function getAsideManifestBonus(basic) {
    if (!basic) return null;
    const override = ASIDE_MANIFEST_BONUS_OVERRIDES[basic.id];
    if (override) return { ...override, source: '実測値' };
    const calculated = calculateAsideManifestBonus(basic);
    return calculated ? { ...calculated, source: '計算値' } : null;
  }

  function calculateAsideManifestBonus(basic) {
    const attackTier = basic.攻撃タイプ === '物理' ? basic.物理攻撃力タイプ : basic.魔法攻撃力タイプ;
    const hpBase = Number(findBaseStatValue(basic.HPタイプ, 'hp')?.base) || 0;
    const attackBase = Number(findBaseStatValue(attackTier, 'attack')?.base) || 0;
    const pdefBase = Number(findBaseStatValue(basic.物理防御力タイプ, 'defense')?.base) || 0;
    const mdefBase = Number(findBaseStatValue(basic.魔法防御力タイプ, 'defense')?.base) || 0;
    if (!hpBase && !attackBase && !pdefBase && !mdefBase) return null;
    return {
      hp: hpBase * 3,
      attack: attackBase * 3,
      pdef: pdefBase * 3,
      mdef: mdefBase * 3
    };
  }

  function calculateAsideLevelBonus(basic, level) {
    const levelValue = Number(level) || 0;
    if (!basic || !levelValue) return null;
    const attackTier = basic.攻撃タイプ === '物理' ? basic.物理攻撃力タイプ : basic.魔法攻撃力タイプ;
    const hpCoeff = Number(findBaseStatValue(basic.HPタイプ, 'hp')?.coeff) || 0;
    const attackCoeff = Number(findBaseStatValue(attackTier, 'attack')?.coeff) || 0;
    const pdefCoeff = Number(findBaseStatValue(basic.物理防御力タイプ, 'defense')?.coeff) || 0;
    const mdefCoeff = Number(findBaseStatValue(basic.魔法防御力タイプ, 'defense')?.coeff) || 0;
    const bonus = {
      hp: Math.floor(hpCoeff * ASIDE_LEVEL_STAT_MULTIPLIER) * levelValue,
      attack: Math.floor(attackCoeff * ASIDE_LEVEL_STAT_MULTIPLIER) * levelValue,
      pdef: Math.floor(pdefCoeff * ASIDE_LEVEL_STAT_MULTIPLIER) * levelValue,
      mdef: Math.floor(mdefCoeff * ASIDE_LEVEL_STAT_MULTIPLIER) * levelValue
    };
    return Object.values(bonus).some(Boolean) ? bonus : null;
  }

  function renderBoardSelectionSummary(rows) {
    const selected = rows.filter(row => row.マス_type !== 'スタート' && isBoardRowFilled(row));
    if (!selected.length) {
      elements.boardSelectionSummary.innerHTML = '<p class="empty-note">選択中マスなし</p>';
      return;
    }

    const costs = {
      gold: 0,
      lower: 0,
      middle: 0,
      upper: 0,
      special: 0,
      token: 0
    };
    const effects = new Map();

    selected.forEach(row => {
      costs.gold += Number(row.ゴールド) || 0;
      costs.lower += Number(row.下級) || 0;
      costs.middle += Number(row.中級) || 0;
      costs.upper += Number(row.上級) || 0;
      costs.special += Number(row.特級) || 0;
      costs.token += Number(row.使徒証) || 0;
      addBoardSummaryEffect(effects, row.効果1_type, row.効果1_value, row.マス_type);
      addBoardSummaryEffect(effects, row.効果2_type, row.効果2_value, row.マス_type);
    });

    const costParts = [
      ['Gold', costs.gold],
      ['下級', costs.lower],
      ['中級', costs.middle],
      ['上級', costs.upper],
      ['特級', costs.special],
      ['使徒証', costs.token]
    ].filter(([, value]) => value);
    const effectParts = Array.from(effects.entries())
      .map(([key, value]) => [key, `+${formatBoardSummaryValue(value)}`]);

    elements.boardSelectionSummary.innerHTML = `
      <div class="summary-count">${selected.length}マス選択中</div>
      <div class="summary-table-grid">
        ${renderCompactTable(['コスト', '必要数'], costParts.map(([label, value]) => [label, formatNumber(value)]), { firstColumnHeader: true, valueColumn: 1, emptyText: 'コストなし' })}
        ${renderCompactTable(['ステータス', '上昇値'], effectParts, { firstColumnHeader: true, valueColumn: 1, emptyText: '効果なし' })}
      </div>
    `;
  }

  function addBoardSummaryEffect(effects, type, value, tileType) {
    const numeric = Number(value) || 0;
    if (!type || !numeric || type === 'ゲート') return;
    const key = tileType === '特殊' ? `${type}%` : type;
    effects.set(key, (effects.get(key) || 0) + numeric);
  }

  function formatBoardSummaryValue(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1);
  }

  function applyBoardRow(totals, row, activeEffects, breakdown) {
    [['効果1_type', '効果1_value'], ['効果2_type', '効果2_value']].forEach(([typeKey, valueKey]) => {
      const type = row[typeKey];
      const value = Number(row[valueKey]) || 0;
      if (!type || !value) return;
      addNamedStat(totals, type, value);
      addSourceNamedStat(breakdown, 'board', type, value);
      if (row.マス_type === '上級' || row.マス_type === '特殊') {
        activeEffects.push(`ボード${row.ボード階層} ${type}+${value}${row.マス_type === '特殊' ? '%' : ''}`);
      }
    });
  }

  function findEquipmentValue(rank, statGroup, tier, enhance) {
    const row = DATA.sheets.equipmentValues.find(item =>
      Number(item.rank) === Number(rank)
      && String(item.statGroup) === String(statGroup)
      && Number(item.tier) === Number(tier)
    );
    if (!row) return null;
    return {
      name: row.equipName || `${statGroup} tier${tier}`,
      value: Number(row[`enhance${enhance}`]) || 0
    };
  }

  function addRankUpValue(totals, breakdown, rankFrom, tier, valueKey, totalKey) {
    const row = DATA.sheets.rankUpBonuses.find(item =>
      Number(item.rank_from) === Number(rankFrom)
      && Number(item.tier) === Number(tier)
    );
    if (!row) return;
    const value = Number(row[valueKey]) || 0;
    addStatValue(totals, totalKey, value);
    addSourceStat(breakdown, 'rankUp', totalKey, value);
  }

  function hasEquipmentTier(equipment, rank, key) {
    const value = Number(equipment[`Equip_Rank${rank}_${key}`]);
    return Number.isFinite(value) && value > 0;
  }

  function getEquipmentIconPath(rank, statGroup, tier) {
    const category = statGroup === '会心/会心DMG' || statGroup === '会心抵抗/会心DMG抵抗'
      ? 'Accessory'
      : statGroup.includes('攻撃')
        ? 'Weapon'
        : 'Armor';
    const variantBase = (() => {
      if (statGroup === 'HP') return 0;
      if (statGroup === '物理攻撃力') return 0;
      if (statGroup === '魔法攻撃力') return 5;
      if (statGroup === '物理防御力') return 5;
      if (statGroup === '魔法防御力') return 10;
      if (statGroup === '会心/会心DMG') return 0;
      if (statGroup === '会心抵抗/会心DMG抵抗') return 5;
      return 0;
    })();
    const variant = variantBase + (6 - Number(tier));
    return `img/equipicons/Equip_${category}${String(rank).padStart(2, '0')}${String(variant).padStart(2, '0')}.webp`;
  }

  function findBaseStatValue(type, group) {
    const row = DATA.sheets.baseStatValues.find(item => String(item.col1) === `tier${type}`);
    if (!row) return null;
    const columns = {
      hp: ['HP基礎', 'HP係数'],
      attack: ['攻撃系基礎', '攻撃系係数'],
      defense: ['防御系基礎', '防御系係数'],
      crit: ['会心系基礎', '会心系係数']
    };
    const [baseKey, coeffKey] = columns[group] || [];
    return {
      base: row[baseKey],
      coeff: row[coeffKey]
    };
  }

  function addNamedStat(totals, name, value) {
    const key = STAT_ALIASES[name] || STAT_ALIASES[String(name).replace(/全体/g, '')] || '';
    addStatValue(totals, key, value);
  }

  function addSourceNamedStat(breakdown, source, name, value) {
    const key = STAT_ALIASES[name] || STAT_ALIASES[String(name).replace(/全体/g, '')] || '';
    addSourceStat(breakdown, source, key, value);
  }

  function addSourceStat(breakdown, source, key, value) {
    if (!breakdown?.[source] || !key || !value) return;
    addStatValue(breakdown[source], key, value);
  }

  function addStatValue(totals, key, value) {
    if (!key || !value) return;
    if (key === 'attackAll') {
      totals.patk += value;
      totals.matk += value;
      return;
    }
    if (key === 'defenseAll') {
      totals.pdef += value;
      totals.mdef += value;
      return;
    }
    if (key === 'critPair') {
      totals.crit += value;
      totals.critDmg += value;
      return;
    }
    if (key === 'critResPair') {
      totals.critRes += value;
      totals.critDmgRes += value;
      return;
    }
    if (Object.prototype.hasOwnProperty.call(totals, key)) totals[key] += value;
  }

  function createEmptyTotals() {
    return { hp: 0, patk: 0, matk: 0, pdef: 0, mdef: 0, crit: 0, critDmg: 0, critRes: 0, critDmgRes: 0 };
  }

  function createBreakdownTotals() {
    return Object.fromEntries(BREAKDOWN_SOURCES.map(source => [source.key, createEmptyTotals()]));
  }

  function getCurrentBoardRows(rows = DATA.getById('board', view.id) || []) {
    return rows.filter(row => Number(row.ボード階層) === view.board);
  }

  function getBoardRowsForLayer(layer) {
    return (DATA.getById('board', view.id) || []).filter(row => Number(row.ボード階層) === Number(layer));
  }

  function toggleBoardShortcutTarget(board, key) {
    const targets = new Set(Array.isArray(board.targets) ? board.targets : []);
    if (targets.has(key)) {
      targets.delete(key);
    } else {
      targets.add(key);
    }
    board.targets = Array.from(targets);
  }

  function rebuildAllShortcutBoardLayers() {
    for (let layer = 1; layer <= 3; layer++) {
      const extras = [];
      const needsGate = hasShortcutTargetsAboveLayer(layer);
      const rows = getBoardRowsForLayer(layer);
      const gate = rows.find(row => row.マス_type === 'ゲート');
      if (needsGate && gate) extras.push(boardKey(gate));
      rebuildBoardFromTargetsAndExtras(layer, extras);
    }
    pruneLockedBoardLayers();
  }

  function hasShortcutTargetsAboveLayer(layer) {
    const state = currentApostleState();
    for (let nextLayer = Number(layer) + 1; nextLayer <= 3; nextLayer++) {
      if (state.boards[String(nextLayer)]?.targets?.length) return true;
    }
    return false;
  }

  function rebuildBoardFromTargetsAndExtras(layer, extraTargets) {
    const originalBoard = view.board;
    view.board = Number(layer);
    try {
      const rows = getBoardRowsForLayer(layer);
      const board = ensureBoardState(layer);
      const targets = Array.from(new Set([...(board.targets || []), ...(extraTargets || [])]));
      board.filled = {};
      const remaining = targets
        .filter(targetKey => rows.some(row => boardKey(row) === targetKey))
        .sort(compareBoardKeys);
      findBestBoardPathSet(layer, rows, remaining).forEach(pathKey => {
        board.filled[pathKey] = true;
      });
    } finally {
      view.board = originalBoard;
    }
  }

  function findBestBoardPathSet(layer, rows, targets) {
    if (!targets.length) return [];
    if (targets.length <= 7) {
      return findBestBoardPathSetByPermutations(layer, rows, targets);
    }
    return findBestBoardPathSetGreedy(layer, rows, targets);
  }

  function findBestBoardPathSetByPermutations(layer, rows, targets) {
    let best = null;
    forEachPermutation(targets, order => {
      const result = simulateBoardTargetOrder(layer, rows, order);
      if (!best || comparePathScore(result.score, best.score) < 0) best = result;
    });
    return best?.keys || [];
  }

  function forEachPermutation(items, callback, start = 0) {
    if (start >= items.length) {
      callback(items.slice());
      return;
    }
    for (let index = start; index < items.length; index++) {
      [items[start], items[index]] = [items[index], items[start]];
      forEachPermutation(items, callback, start + 1);
      [items[start], items[index]] = [items[index], items[start]];
    }
  }

  function simulateBoardTargetOrder(layer, rows, order) {
    const originalBoard = view.board;
    const board = ensureBoardState(layer);
    const savedFilled = board.filled;
    view.board = Number(layer);
    board.filled = {};
    try {
      let failed = false;
      order.forEach(targetKey => {
        const path = findBestBoardPath(rows, targetKey);
        if (!path.length && !isBoardTargetAlreadyFilled(targetKey)) {
          failed = true;
          return;
        }
        path.forEach(pathKey => {
          board.filled[pathKey] = true;
        });
      });
      if (failed) return { keys: [], score: { gold: Number.POSITIVE_INFINITY, steps: Number.POSITIVE_INFINITY } };
      const keys = Object.keys(board.filled);
      return { keys, score: scoreBoardPath(keys) };
    } finally {
      board.filled = savedFilled;
      view.board = originalBoard;
    }
  }

  function findBestBoardPathSetGreedy(layer, rows, targets) {
    const originalBoard = view.board;
    const board = ensureBoardState(layer);
    const savedFilled = board.filled;
    view.board = Number(layer);
    board.filled = {};
    try {
      const remaining = targets.slice();
      while (remaining.length) {
        const best = remaining
          .map(targetKey => ({ targetKey, path: findBestBoardPath(rows, targetKey) }))
          .filter(item => item.path.length || isBoardTargetAlreadyFilled(item.targetKey))
          .sort(compareTargetPath)[0];
        if (!best) break;
        best.path.forEach(pathKey => {
          board.filled[pathKey] = true;
        });
        const index = remaining.indexOf(best.targetKey);
        if (index >= 0) remaining.splice(index, 1);
      }
      return Object.keys(board.filled);
    } finally {
      board.filled = savedFilled;
      view.board = originalBoard;
    }
  }

  function isBoardTargetAlreadyFilled(targetKey) {
    return !!currentBoardState().filled[targetKey];
  }

  function compareTargetPath(a, b) {
    const scoreDiff = scoreBoardPath(a.path).gold - scoreBoardPath(b.path).gold
      || scoreBoardPath(a.path).steps - scoreBoardPath(b.path).steps;
    return scoreDiff || compareBoardKeys(a.targetKey, b.targetKey);
  }

  function scoreBoardPath(path) {
    const rows = getBoardRowsForLayer(view.board);
    return path.reduce((score, key) => {
      const row = rows.find(item => boardKey(item) === key);
      return {
        gold: score.gold + (Number(row?.ゴールド) || 0),
        steps: score.steps + 1
      };
    }, { gold: 0, steps: 0 });
  }

  function compareBoardKeys(a, b) {
    const [aLayer, aX, aY] = String(a).split(':').map(Number);
    const [bLayer, bX, bY] = String(b).split(':').map(Number);
    return aLayer - bLayer || aY - bY || aX - bX;
  }

  function pruneLockedBoardLayers() {
    const state = currentApostleState();
    for (let layer = 2; layer <= 3; layer++) {
      if (isBoardLayerUnlocked(layer)) continue;
      if (state.boards[String(layer)]) {
        state.boards[String(layer)].filled = {};
        state.boards[String(layer)].targets = [];
      }
    }
    if (!isBoardLayerUnlocked(view.board)) view.board = getMaxUnlockedBoardLayer();
  }

  function findBestBoardPath(rows, targetKey) {
    const target = rows.find(row => boardKey(row) === targetKey);
    if (!target) return [];

    const starts = getBoardPathStartKeys(rows);
    const best = new Map();
    const prev = new Map();
    const queue = starts.map(key => ({ key, score: createPathScore() }));
    starts.forEach(key => best.set(key, createPathScore()));

    while (queue.length) {
      queue.sort(compareQueuedPath);
      const current = queue.shift();
      const currentBest = best.get(current.key);
      if (!currentBest || comparePathScore(current.score, currentBest) > 0) continue;
      if (current.key === targetKey) break;
      getNeighborBoardRowsForKey(rows, current.key).forEach(next => {
        const nextKey = boardKey(next);
        const nextScore = addPathScore(current.score, next);
        const saved = best.get(nextKey);
        if (saved && comparePathScore(nextScore, saved) >= 0) return;
        best.set(nextKey, nextScore);
        prev.set(nextKey, current.key);
        queue.push({ key: nextKey, score: nextScore });
      });
    }

    if (!best.has(targetKey)) return [];
    const path = [];
    let cursor = targetKey;
    while (cursor && !starts.includes(cursor)) {
      path.push(cursor);
      cursor = prev.get(cursor);
    }
    return path.reverse();
  }

  function createPathScore() {
    return { gold: 0, steps: 0 };
  }

  function addPathScore(score, row) {
    return {
      gold: score.gold + (Number(row.ゴールド) || 0),
      steps: score.steps + 1
    };
  }

  function compareQueuedPath(a, b) {
    return comparePathScore(a.score, b.score);
  }

  function comparePathScore(a, b) {
    return a.gold - b.gold || a.steps - b.steps;
  }

  function pruneDisconnectedBoardNodes(rows, board) {
    const connected = getConnectedFilledBoardKeys(rows);
    Object.keys(board.filled).forEach(key => {
      if (!connected.has(key)) delete board.filled[key];
    });
  }

  function getConnectedFilledBoardKeys(rows) {
    const starts = getBoardConnectionStartKeys(rows);
    const connected = new Set(starts);
    const queue = [...starts];
    while (queue.length) {
      const key = queue.shift();
      getNeighborBoardRowsForKey(rows, key).forEach(next => {
        const nextKey = boardKey(next);
        if (connected.has(nextKey) || !isBoardRowFilled(next)) return;
        connected.add(nextKey);
        queue.push(nextKey);
      });
    }
    return connected;
  }

  function getNeighborBoardRows(rows, row) {
    const x = Number(row.X_pos);
    const y = Number(row.Y_pos);
    return rows.filter(item => {
      const dx = Math.abs(Number(item.X_pos) - x);
      const dy = Math.abs(Number(item.Y_pos) - y);
      return dx + dy === 1;
    });
  }

  function getNeighborBoardRowsForKey(rows, key) {
    if (key === virtualBoardStartKey()) {
      const entry = getBoardEntryRow(rows);
      return entry ? [entry] : [];
    }
    const row = rows.find(item => boardKey(item) === key);
    return row ? getNeighborBoardRows(rows, row) : [];
  }

  function isBoardRowFilled(row) {
    return row.マス_type === 'スタート' || !!currentBoardState().filled[boardKey(row)];
  }

  function getBoardPathStartKeys(rows) {
    const starts = rows.filter(row => isBoardRowFilled(row)).map(boardKey);
    if (!starts.length && Number(view.board) > 1 && isBoardLayerUnlocked(view.board)) {
      starts.push(virtualBoardStartKey());
    }
    return starts;
  }

  function getBoardConnectionStartKeys(rows) {
    const starts = rows.filter(row => row.マス_type === 'スタート').map(boardKey);
    if (!starts.length && Number(view.board) > 1 && isBoardLayerUnlocked(view.board)) {
      starts.push(virtualBoardStartKey());
    }
    return starts;
  }

  function getBoardEntryRow(rows) {
    const minY = Math.min(...rows.map(row => Number(row.Y_pos)).filter(Number.isFinite));
    const candidates = rows
      .filter(row => Number(row.Y_pos) === minY)
      .sort((a, b) => Number(a.X_pos) - Number(b.X_pos));
    const previousGate = getPreviousBoardGateRow();
    if (previousGate) {
      const gateX = Number(previousGate.X_pos);
      return candidates.find(row => Number(row.X_pos) === gateX)
        || candidates.slice().sort((a, b) => Math.abs(Number(a.X_pos) - gateX) - Math.abs(Number(b.X_pos) - gateX))[0]
        || null;
    }
    return candidates[0] || null;
  }

  function getPreviousBoardGateRow() {
    const previousLayer = Number(view.board) - 1;
    if (previousLayer < 1) return null;
    const rows = DATA.getById('board', view.id) || [];
    return rows.find(row => Number(row.ボード階層) === previousLayer && row.マス_type === 'ゲート') || null;
  }

  function virtualBoardStartKey() {
    return `virtual-start:${view.board}`;
  }

  function isBoardLayerUnlocked(layer) {
    if (Number(layer) <= 1) return true;
    return isBoardGateFilled(Number(layer) - 1);
  }

  function getMaxUnlockedBoardLayer() {
    for (let layer = 3; layer >= 1; layer--) {
      if (isBoardLayerUnlocked(layer)) return layer;
    }
    return 1;
  }

  function isBoardGateFilled(layer) {
    const rows = DATA.getById('board', view.id) || [];
    const gate = rows.find(row => Number(row.ボード階層) === Number(layer) && row.マス_type === 'ゲート');
    if (!gate) return false;
    const state = currentApostleState();
    const board = state.boards[String(layer)];
    return !!board?.filled?.[boardKey(gate)];
  }

  function currentBoardState() {
    return ensureBoardState(view.board);
  }

  function ensureBoardState(layer) {
    const state = currentApostleState();
    const key = String(layer);
    if (!state.boards[key]) state.boards[key] = { filled: {}, targets: [] };
    if (!state.boards[key].filled) state.boards[key].filled = {};
    if (!Array.isArray(state.boards[key].targets)) state.boards[key].targets = [];
    return state.boards[key];
  }

  function boardKey(row) {
    return `${row.ボード階層}:${row.X_pos}:${row.Y_pos}`;
  }

  function formatBoardEffect(row) {
    const parts = [];
    if (row.効果1_type) parts.push(`${row.効果1_type}+${row.効果1_value}`);
    if (row.効果2_type) parts.push(`${row.効果2_type}+${row.効果2_value}`);
    return parts.join('\n') || row.マス_type || '';
  }

  function shortBoardLabel(row) {
    if (row.マス_type === 'スタート') return 'START';
    const suffix = row.マス_type === '特殊' ? '%' : '';
    const value = [row.効果1_value, row.効果2_value]
      .filter(value => value !== '' && value !== null && value !== undefined)
      .join('/');
    return value ? `+${value}${suffix}` : '';
  }

  function getBoardTileBasePath(row) {
    if (row.マス_type === 'ゲート') return 'img/Board/Tile_gate.webp';
    if (row.マス_type === '上級') return 'img/Board/Tile_2.webp';
    if (row.マス_type === '特殊') return 'img/Board/Tile_3.webp';
    return 'img/Board/Tile_1.webp';
  }

  function getBoardIconPath(row) {
    const types = [row.効果1_type, row.効果2_type].filter(Boolean).join('/');
    if (row.マス_type === 'スタート') return 'img/Board/Tile_Start.webp';
    if (row.マス_type === 'ゲート') return '';
    if (types.includes('HP')) return 'img/Board/Tile_Hp.webp';
    if (types.includes('物理攻撃') && types.includes('魔法攻撃')) return 'img/Board/Tile_AtkBoth.webp';
    if (types.includes('物理攻撃')) return 'img/Board/Tile_AtkP.webp';
    if (types.includes('魔法攻撃')) return 'img/Board/Tile_AtkM.webp';
    if (types.includes('物理防御') && types.includes('魔法防御')) return 'img/Board/Tile_DefBoth.webp';
    if (types.includes('物理防御')) return 'img/Board/Tile_DefP.webp';
    if (types.includes('魔法防御')) return 'img/Board/Tile_DefM.webp';
    if ((types.includes('会心DMG抵抗') || types.includes('会心ダメージ抵抗')) && types.includes('会心抵抗')) return 'img/Board/Tile_CritResBoth.webp';
    if (types.includes('会心DMG抵抗') || types.includes('会心ダメージ抵抗')) return 'img/Board/Tile_CritiDMGRes.webp';
    if (types.includes('会心抵抗')) return 'img/Board/Tile_CritiRes.webp';
    if ((types.includes('会心DMG') || types.includes('会心ダメージ')) && types.includes('会心')) return 'img/Board/Tile_CritBoth.webp';
    if (types.includes('会心DMG') || types.includes('会心ダメージ')) return 'img/Board/Tile_CritDMG.webp';
    if (types.includes('会心')) return 'img/Board/Tile_Crit.webp';
    if (types.includes('回復') || types.includes('治癒')) return 'img/Board/Tile_HealingOn.webp';
    return '';
  }

  function boardNodeClass(row) {
    if (row.マス_type === 'スタート') return 'type-start';
    if (row.マス_type === 'ゲート') return 'type-gate';
    if (row.マス_type === '上級') return 'type-advanced';
    if (row.マス_type === '特殊') return 'type-special';
    return '';
  }

  function ensureApostleState(id) {
    if (!appState.apostles[id]) {
      const basic = DATA.getById('basicInfo', id);
      appState.apostles[id] = {
        rank: 1,
        level: 1,
        star: Number(basic?.レア度) || 1,
        bond: 0,
        asideLevel: 0,
        follow: false,
        equipment: {},
        boards: {}
      };
    }
    const state = appState.apostles[id];
    if (!state.level) state.level = 1;
    if (!state.star) {
      const basic = DATA.getById('basicInfo', id);
      state.star = Number(basic?.レア度) || 1;
    }
    if (state.asideLevel === undefined) state.asideLevel = 0;
    return appState.apostles[id];
  }

  function currentApostleState() {
    return ensureApostleState(view.id);
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        activeId: parsed.activeId || '',
        apostles: parsed.apostles && typeof parsed.apostles === 'object' ? parsed.apostles : {},
        research: parsed.research && typeof parsed.research === 'object' ? parsed.research : {}
      };
    } catch (error) {
      return { activeId: '', apostles: {}, research: {} };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  }

  function formatNumber(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return '-';
    return Math.round(num).toLocaleString();
  }

  function formatBreakdownValue(value) {
    const num = Number(value) || 0;
    return num ? formatNumber(num) : '';
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }
})();
