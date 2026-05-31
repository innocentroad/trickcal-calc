(function () {
  'use strict';

  const STORAGE_KEY = 'trickcal_board_prototype_v1';
  const BOARD_CONFIG = {
    1: { label: 'ボード1', value: 3, cost: 2 },
    2: { label: 'ボード2', value: 4, cost: 4 },
    3: { label: 'ボード3', value: 5, cost: 6 }
  };
  const REAL_BOARD_SIZE = 80;
  const REAL_BOARD_GAP = 5;
  const REAL_BOARD_PADDING = 40;

  const BOARD_DATA = typeof BOARD_NODE_DATA !== 'undefined' ? BOARD_NODE_DATA : { units: [], boards: {} };
  const BOARD_UNITS_BY_KEY = new Map((BOARD_DATA.units || []).map(unit => [normalizeKey(unit.name), unit]));
  const BOARD_ID_ALIASES = {
    xion: 'xxionx'
  };

  const SHAPE_LAYOUTS = {
    A: {
      1: [{ x: 42, y: 18 }, { x: 58, y: 18 }],
      2: [{ x: 32, y: 47 }, { x: 50, y: 42 }, { x: 68, y: 47 }],
      3: [{ x: 25, y: 78 }, { x: 42, y: 72 }, { x: 58, y: 72 }, { x: 75, y: 78 }]
    },
    B: {
      1: [{ x: 36, y: 19 }, { x: 64, y: 19 }],
      2: [{ x: 29, y: 43 }, { x: 50, y: 51 }, { x: 71, y: 43 }],
      3: [{ x: 30, y: 76 }, { x: 45, y: 69 }, { x: 60, y: 75 }, { x: 78, y: 68 }]
    },
    C: {
      1: [{ x: 48, y: 15 }, { x: 62, y: 27 }],
      2: [{ x: 31, y: 38 }, { x: 50, y: 49 }, { x: 69, y: 38 }],
      3: [{ x: 24, y: 69 }, { x: 41, y: 80 }, { x: 59, y: 68 }, { x: 76, y: 80 }]
    },
    D: {
      1: [{ x: 38, y: 28 }, { x: 62, y: 16 }],
      2: [{ x: 30, y: 52 }, { x: 50, y: 39 }, { x: 70, y: 52 }],
      3: [{ x: 23, y: 76 }, { x: 40, y: 67 }, { x: 60, y: 82 }, { x: 77, y: 72 }]
    },
    E: {
      1: [{ x: 34, y: 16 }, { x: 66, y: 28 }],
      2: [{ x: 30, y: 44 }, { x: 50, y: 36 }, { x: 70, y: 44 }],
      3: [{ x: 25, y: 75 }, { x: 42, y: 84 }, { x: 58, y: 68 }, { x: 75, y: 77 }]
    }
  };

  const STAT_MAP = {
    '全体HP': { key: 'hp', label: 'HP', group: 'defense' },
    '全体攻撃': { key: 'attack', label: '攻撃', group: 'attack' },
    '全体防御': { key: 'defense', label: '防御', group: 'defense' },
    '全体会心': { key: 'crit', label: '会心', group: 'crit' },
    '全体会心抵抗': { key: 'critResist', label: '会心抵抗', group: 'crit' },
    '全体会心ダメージ': { key: 'critDamage', label: '会心DMG', group: 'crit' },
    '全体会心ダメージ抵抗': { key: 'critDamageResist', label: '会心DMG抵抗', group: 'crit' },
    '物理攻撃': { key: 'physicalAttack', label: '物攻', group: 'attack' },
    '魔法攻撃': { key: 'magicalAttack', label: '魔攻', group: 'attack' },
    '物理防御': { key: 'physicalDefense', label: '物防', group: 'defense' },
    '魔法防御': { key: 'magicalDefense', label: '魔防', group: 'defense' }
  };
  const BOARD_STAT_DEFS = {
    1: { key: 'hp', label: 'HP', group: 'defense' },
    3: { key: 'physicalAttack', label: '物攻', group: 'attack' },
    4: { key: 'magicalAttack', label: '魔攻', group: 'attack' },
    5: { key: 'physicalDefense', label: '物防', group: 'defense' },
    6: { key: 'magicalDefense', label: '魔防', group: 'defense' },
    7: { key: 'crit', label: '会心率', group: 'crit' },
    8: { key: 'critDamage', label: '会心DMG', group: 'crit' },
    9: { key: 'critResist', label: '会心抵抗', group: 'crit' },
    10: { key: 'critDamageResist', label: '会心DMG抵抗', group: 'crit' },
    86: { key: 'allPhysicalAttack', label: '全体物攻', group: 'attack' },
    87: { key: 'allMagicalAttack', label: '全体魔攻', group: 'attack' },
    88: { key: 'allPhysicalAttackPercent', label: '全体物攻', group: 'attack' },
    89: { key: 'allMagicalAttackPercent', label: '全体魔攻', group: 'attack' },
    90: { key: 'allPhysicalDefense', label: '全体物防', group: 'defense' },
    91: { key: 'allMagicalDefense', label: '全体魔防', group: 'defense' },
    92: { key: 'allPhysicalDefensePercent', label: '全体物防', group: 'defense' },
    93: { key: 'allMagicalDefensePercent', label: '全体魔防', group: 'defense' },
    94: { key: 'allHp', label: '全体HP', group: 'defense' },
    95: { key: 'allHpPercent', label: '全体HP', group: 'defense' },
    96: { key: 'allCrit', label: '全体会心率', group: 'crit' },
    97: { key: 'allCritPercent', label: '全体会心率', group: 'crit' },
    98: { key: 'allCritResist', label: '全体会心抵抗', group: 'crit' },
    99: { key: 'allCritResistPercent', label: '全体会心抵抗', group: 'crit' },
    100: { key: 'allCritDamage', label: '全体会心DMG', group: 'crit' },
    101: { key: 'allCritDamagePercent', label: '全体会心DMG', group: 'crit' },
    102: { key: 'allCritDamageResist', label: '全体会心DMG抵抗', group: 'crit' },
    103: { key: 'allCritDamageResistPercent', label: '全体会心DMG抵抗', group: 'crit' }
  };
  const PERCENT_STAT_IDS = new Set(['88', '89', '92', '93', '95', '97', '99', '101', '103']);

  const EMPTY_RECORD = () => ({ current: {}, target: {} });

  const elements = {
    select: document.getElementById('apostle-select'),
    meta: document.getElementById('apostle-meta'),
    title: document.getElementById('board-title'),
    grid: document.getElementById('board-grid'),
    tileInfo: document.getElementById('tile-info'),
    summary: document.getElementById('summary-stack'),
    modeButtons: Array.from(document.querySelectorAll('.mode-button')),
    boardTabs: Array.from(document.querySelectorAll('.board-tab')),
    arrowButtons: Array.from(document.querySelectorAll('.arrow-button')),
    copyCurrent: document.getElementById('copy-current'),
    clearCurrent: document.getElementById('clear-current'),
    clearTarget: document.getElementById('clear-target')
  };

  const apostles = typeof APOSTLE_LIBRARY !== 'undefined' && Array.isArray(APOSTLE_LIBRARY) ? APOSTLE_LIBRARY : [];
  const state = loadState();

  init();

  function init() {
    if (!apostles.length) {
      elements.meta.innerHTML = '<p class="empty-note">使徒データを読み込めませんでした。</p>';
      return;
    }

    renderSelect();
    bindEvents();
    ensureSelectedApostle();
    render();
  }

  function renderSelect() {
    const options = apostles
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, 'ja'))
      .map(apostle => `<option value="${escapeHtml(apostle.id)}">${escapeHtml(apostle.name)}</option>`)
      .join('');
    elements.select.innerHTML = options;
  }

  function bindEvents() {
    elements.select.addEventListener('change', () => {
      state.selectedId = elements.select.value;
      ensureRecord(state.selectedId);
      saveState();
      render();
    });

    elements.modeButtons.forEach(button => {
      button.addEventListener('click', () => {
        state.mode = button.dataset.mode;
        saveState();
        renderMode();
      });
    });

    elements.boardTabs.forEach(button => {
      button.addEventListener('click', () => {
        state.activeLevel = button.dataset.level;
        saveState();
        render();
      });
    });

    elements.arrowButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        moveSelection(index === 0 ? -1 : 1);
      });
    });

    elements.grid.addEventListener('click', event => {
      const button = event.target.closest('.node-button');
      if (!button) return;

      const record = ensureRecord(state.selectedId);
      const side = state.mode === 'target' ? 'target' : 'current';
      const cellId = button.dataset.cellId;
      state.selectedCellId = cellId;
      record[side][cellId] = !record[side][cellId];
      if (!record[side][cellId]) {
        delete record[side][cellId];
      }
      saveState();
      render();
    });

    elements.copyCurrent.addEventListener('click', () => {
      const record = ensureRecord(state.selectedId);
      record.target = { ...record.current };
      saveState();
      render();
    });

    elements.clearCurrent.addEventListener('click', () => {
      const record = ensureRecord(state.selectedId);
      record.current = {};
      saveState();
      render();
    });

    elements.clearTarget.addEventListener('click', () => {
      const record = ensureRecord(state.selectedId);
      record.target = {};
      saveState();
      render();
    });
  }

  function render() {
    ensureSelectedApostle();
    elements.select.value = state.selectedId;
    renderMode();
    renderBoardTabs();
    renderMeta();
    renderBoard();
    renderTileInfo();
    renderSummary();
  }

  function renderMode() {
    elements.modeButtons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.mode === state.mode);
    });
  }

  function renderMeta() {
    const apostle = getSelectedApostle();
    if (!apostle) return;

    const basic = apostle.basic || {};
    const chips = [
      basic.rarity ? `★${basic.rarity}` : '',
      basic.personality,
      basic.race,
      basic.role,
      basic.position,
      basic.attackType,
      basic.boardType ? `ボード: ${basic.boardType}` : '',
      basic.boardShape ? `形状: ${basic.boardShape}` : ''
    ].filter(Boolean);

    elements.title.textContent = `${apostle.name} - Board`;
    elements.meta.innerHTML = chips.map(chip => `<span class="meta-chip">${escapeHtml(chip)}</span>`).join('');
  }

  function renderBoardTabs() {
    elements.boardTabs.forEach(button => {
      button.classList.toggle('is-active', button.dataset.level === state.activeLevel);
    });
  }

  function renderBoard() {
    const apostle = getSelectedApostle();
    const boardNodes = getBoardNodes(apostle);
    if (boardNodes.length) {
      const record = ensureRecord(apostle.id);
      elements.grid.innerHTML = renderRealBoard(apostle, boardNodes, record);
      return;
    }

    const cells = getBoardCells(apostle);
    if (!cells.length) {
      elements.grid.innerHTML = '<p class="empty-note">この使徒にはまだボード情報がありません。</p>';
      return;
    }

    const record = ensureRecord(apostle.id);
    elements.grid.innerHTML = renderShapeBoard(apostle, cells, record);
  }

  function renderRealBoard(apostle, nodes, record) {
    const activeNodes = nodes
      .filter(node => String(node.step) === String(state.activeLevel))
      .sort((a, b) => a.uid - b.uid);
    if (!activeNodes.length) {
      return '<p class="empty-note">このボード番号にはデータがありません。</p>';
    }

    const cells = activeNodes.map(node => toRealCell(node));
    const maxX = Math.max(...activeNodes.map(node => node.x));
    const maxY = Math.max(...activeNodes.map(node => node.y));
    const width = (maxX + 1) * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING * 2;
    const height = (maxY + 1) * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING * 2;
    const config = BOARD_CONFIG[state.activeLevel] || BOARD_CONFIG[1];

    return `
      <section class="shape-board real-board" aria-label="実ボード形状">
        <div class="shape-header">
          <span>${escapeHtml(apostle.name)} / ${escapeHtml(config.label)}</span>
          <span>${activeNodes.length}タイル / 実座標データ</span>
        </div>
        <div class="shape-map real-board-map" style="--board-width: ${width}px; --board-height: ${height}px;">
          ${renderRealBoardLines(activeNodes, width, height)}
          ${cells.map(cell => renderNode(cell, record)).join('')}
        </div>
        <div class="shape-footer">
          <span>Color: 現在 / Plan: 目標</span>
          <span>線は前提ノードから自動生成</span>
        </div>
      </section>
    `;
  }

  function renderShapeBoard(apostle, cells, record) {
    const variant = getShapeVariant(apostle?.basic?.boardShape);
    const activeCells = cells.filter(cell => cell.cellId.split('-')[0] === state.activeLevel);
    const positionedCells = activeCells.map(cell => ({
      ...cell,
      position: getNodePosition(cell.cellId, variant)
    }));
    const lineSvg = renderBoardLines(positionedCells);
    const nodes = positionedCells.map(cell => renderNode(cell, record)).join('');
    const boardShape = apostle?.basic?.boardShape || '形状未設定';
    const config = BOARD_CONFIG[state.activeLevel] || BOARD_CONFIG[1];

    return `
      <section class="shape-board" aria-label="ボード形状">
        <div class="shape-header">
          <span>${escapeHtml(boardShape)} / ${escapeHtml(config.label)}</span>
          <span>Color: 現在 / Plan: 目標</span>
        </div>
        <div class="shape-map">
          ${lineSvg}
          ${nodes}
          <div class="shape-level-tag" style="--x: 8%; --y: 12%;">${escapeHtml(state.activeLevel)}</div>
        </div>
        <div class="shape-footer">
          <span>1ノード +${formatNumber(config.value)}%</span>
          <span>必要クレヨン ${formatNumber(config.cost)}</span>
          <span>${positionedCells.length}タイル</span>
        </div>
      </section>
    `;
  }

  function renderNode(cell, record) {
    const inCurrent = Boolean(record.current[cell.cellId]);
    const inTarget = Boolean(record.target[cell.cellId]);
    const classes = ['node-button'];
    if (inCurrent && inTarget) classes.push('is-both');
    else if (inCurrent) classes.push('is-current');
    else if (inTarget) classes.push('is-target');

    const stateLabel = inCurrent && inTarget ? 'C/P' : inCurrent ? 'C' : inTarget ? 'P' : '';
    const level = cell.cellId.split('-')[0];
    const config = BOARD_CONFIG[level] || { value: 0, cost: 0 };
    const selected = state.selectedCellId === cell.cellId ? ' is-selected' : '';
    const typeClass = cell.nodeType ? ` node-type-${cell.nodeType}` : '';
    const style = cell.position?.unit === 'px'
      ? `left: ${formatNumber(cell.position.x)}px; top: ${formatNumber(cell.position.y)}px;`
      : `--x: ${formatNumber(cell.position.x)}%; --y: ${formatNumber(cell.position.y)}%;`;
    const statLabel = cell.stats?.length
      ? cell.stats.slice(0, 2).map(stat => `${stat.label}: ${formatStatValue(stat)}`).join('<br>')
      : escapeHtml(cell.label);
    const nodeValue = cell.nodeType === 1 ? 'Gate'
      : cell.nodeType === 2 ? 'Start'
      : `Gold ${formatNumber(cell.gold || 0)}`;

    return `
      <button
        type="button"
        class="${classes.join(' ')}${selected}${typeClass}"
        data-cell-id="${escapeHtml(cell.cellId)}"
        style="${style}"
      >
        ${stateLabel ? `<span class="node-state">${stateLabel}</span>` : ''}
        <span class="node-label">${statLabel}</span>
        <span class="node-value">${escapeHtml(nodeValue)}</span>
      </button>
    `;
  }

  function renderTileInfo() {
    const apostle = getSelectedApostle();
    const cells = getBoardCells(apostle);
    const selected = cells.find(cell => cell.cellId === state.selectedCellId)
      || cells.find(cell => cell.cellId.split('-')[0] === state.activeLevel)
      || cells[0];

    if (!selected) {
      elements.tileInfo.innerHTML = '<p class="empty-note">タイルを選択してください。</p>';
      return;
    }

    const level = selected.cellId.split('-')[0];
    const config = BOARD_CONFIG[level] || BOARD_CONFIG[1];
    const statRows = selected.stats?.length
      ? selected.stats.map(stat => `<div><strong>${escapeHtml(stat.label)}</strong><span>${escapeHtml(formatStatValue(stat))}</span></div>`).join('')
      : `<div><strong>${escapeHtml(normalizeStat(selected.label).label)}</strong><span>+${formatNumber(config.value)}%</span></div>`;
    elements.tileInfo.innerHTML = `
      <div class="tile-effect-label">Selected Tile Effect</div>
      <div class="tile-effect-card">
        <div class="tile-stat-stack">${statRows}</div>
        <small>${escapeHtml(selected.cellId)} / ${escapeHtml(config.label)} / Gold ${formatNumber(selected.gold || 0)}</small>
      </div>
    `;
  }

  function renderBoardLines(cells) {
    const sorted = cells.slice().sort((a, b) => a.cellId.localeCompare(b.cellId, 'ja', { numeric: true }));
    const lines = [];
    for (let i = 0; i < sorted.length - 1; i += 1) {
      const from = sorted[i];
      const to = sorted[i + 1];
      lines.push(`<line x1="${formatNumber(from.position.x)}%" y1="${formatNumber(from.position.y)}%" x2="${formatNumber(to.position.x)}%" y2="${formatNumber(to.position.y)}%" />`);
    }

    return `<svg class="shape-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines.join('')}</svg>`;
  }

  function renderRealBoardLines(nodes, width, height) {
    const byUid = new Map(nodes.map(node => [node.uid, node]));
    const lines = [];
    nodes.forEach(node => {
      String(node.needs || '')
        .split(',')
        .map(value => Number(value))
        .filter(Boolean)
        .forEach(needUid => {
          const from = byUid.get(needUid);
          if (!from || from.step !== node.step) return;
          const x1 = from.x * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING + REAL_BOARD_SIZE / 2;
          const y1 = from.y * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING + REAL_BOARD_SIZE / 2;
          const x2 = node.x * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING + REAL_BOARD_SIZE / 2;
          const y2 = node.y * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING + REAL_BOARD_SIZE / 2;
          lines.push(`<line x1="${formatNumber(x1)}" y1="${formatNumber(y1)}" x2="${formatNumber(x2)}" y2="${formatNumber(y2)}" />`);
        });
    });

    return `<svg class="shape-lines" viewBox="0 0 ${formatNumber(width)} ${formatNumber(height)}" aria-hidden="true">${lines.join('')}</svg>`;
  }

  function getShapeVariant(boardShape) {
    const match = String(boardShape || '').match(/Type([A-E])/i);
    return match ? match[1].toUpperCase() : 'A';
  }

  function getNodePosition(cellId, variant) {
    const [levelText, indexText] = cellId.split('-');
    const level = Number(levelText);
    const index = Number(indexText) - 1;
    const positions = SHAPE_LAYOUTS[variant] || SHAPE_LAYOUTS.A;
    const levelPositions = positions[level] || SHAPE_LAYOUTS.A[level] || [];
    return levelPositions[index] || { x: 50, y: 50 };
  }

  function renderSummary() {
    const apostle = getSelectedApostle();
    const current = calculateTotals(apostle, 'current');
    const target = calculateTotals(apostle, 'target');
    const diff = diffTotals(current, target);

    elements.summary.innerHTML = [
      renderSummaryBlock('現在', current),
      renderSummaryBlock('目標', target),
      renderSummaryBlock('差分', diff, true)
    ].join('');
  }

  function renderSummaryBlock(title, totals, isDiff) {
    const statRows = Object.entries(totals.stats)
      .map(stat => {
        const [key, value] = stat;
        if (!value) return '';
        const label = totals.labels?.[key] || key;
        const sign = isDiff && value > 0 ? '+' : '';
        const tone = isDiff ? value > 0 ? ' is-up' : ' is-down' : '';
        return `<div class="stat-row${tone}"><span>${escapeHtml(label)}</span><strong>${sign}${formatNumber(value)}</strong></div>`;
      })
      .filter(Boolean)
      .join('');

    return `
      <section class="summary-block">
        <div class="summary-heading">
          <span>${escapeHtml(title)}</span>
          <small>${formatNumber(totals.nodes)}ノード / コスト ${formatNumber(totals.cost)}</small>
        </div>
        <div class="stat-list">${statRows || '<p class="empty-note">選択なし</p>'}</div>
      </section>
    `;
  }

  function calculateTotals(apostle, side) {
    const record = ensureRecord(apostle.id);
    const cells = getBoardCells(apostle);
    const totals = { nodes: 0, cost: 0, stats: {}, labels: {} };

    cells.forEach(cell => {
      if (!record[side][cell.cellId]) return;
      const level = cell.cellId.split('-')[0];
      const config = BOARD_CONFIG[level] || { value: 0, cost: 0 };
      totals.nodes += 1;
      totals.cost += cell.gold ?? config.cost;
      if (cell.stats?.length) {
        cell.stats.forEach(stat => {
          totals.stats[stat.key] = (totals.stats[stat.key] || 0) + stat.value;
          totals.labels[stat.key] = stat.label;
        });
        return;
      }

      const stat = normalizeStat(cell.label);
      totals.stats[stat.key] = (totals.stats[stat.key] || 0) + config.value;
      totals.labels[stat.key] = stat.label;
    });

    return totals;
  }

  function diffTotals(current, target) {
    const keys = new Set([...Object.keys(current.stats), ...Object.keys(target.stats)]);
    const stats = {};
    keys.forEach(key => {
      const value = (target.stats[key] || 0) - (current.stats[key] || 0);
      if (value) stats[key] = value;
    });
    return {
      nodes: target.nodes - current.nodes,
      cost: target.cost - current.cost,
      stats,
      labels: { ...(current.labels || {}), ...(target.labels || {}) }
    };
  }

  function normalizeStat(label) {
    return STAT_MAP[label] || { key: `unknown:${label}`, label, group: 'unknown' };
  }

  function getBoardCells(apostle) {
    const nodes = getBoardNodes(apostle);
    if (nodes.length) {
      return nodes.map(node => toRealCell(node));
    }
    return Object.entries(apostle?.board?.cells || {}).map(([cellId, label]) => ({ cellId, label }));
  }

  function getBoardNodes(apostle) {
    const unit = getBoardUnit(apostle);
    return unit ? (BOARD_DATA.boards?.[unit.uid] || []) : [];
  }

  function getBoardUnit(apostle) {
    if (!apostle) return null;
    const key = BOARD_ID_ALIASES[apostle.id] || normalizeKey(apostle.id);
    return BOARD_UNITS_BY_KEY.get(key) || null;
  }

  function toRealCell(node) {
    return {
      cellId: `${node.step}-${node.uid}`,
      label: node.type === 2 ? 'Start' : node.type === 1 ? 'Gate' : node.stat,
      nodeType: node.type,
      gold: node.gold,
      stats: decodeBoardStats(node),
      position: {
        unit: 'px',
        x: node.x * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING,
        y: node.y * (REAL_BOARD_SIZE + REAL_BOARD_GAP) + REAL_BOARD_PADDING
      }
    };
  }

  function decodeBoardStats(node) {
    const ids = String(node.stat || '').split(',');
    const values = String(node.value || '').split(',');
    return ids
      .map((id, index) => {
        if (!id || id === '0') return null;
        const def = BOARD_STAT_DEFS[id] || { key: `stat:${id}`, label: `Stat ${id}`, group: 'unknown' };
        let value = Number(values[index] || 0);
        if (!Number.isFinite(value)) return null;
        if (PERCENT_STAT_IDS.has(id)) value /= 10;
        return { ...def, id, value, isPercent: PERCENT_STAT_IDS.has(id) };
      })
      .filter(Boolean);
  }

  function formatStatValue(stat) {
    return `${formatNumber(stat.value)}${stat.isPercent ? '%' : ''}`;
  }

  function groupCells(cells) {
    return cells.reduce((groups, cell) => {
      const level = cell.cellId.split('-')[0];
      groups[level] = groups[level] || [];
      groups[level].push(cell);
      return groups;
    }, {});
  }

  function ensureSelectedApostle() {
    if (!state.selectedId || !apostles.some(apostle => apostle.id === state.selectedId)) {
      state.selectedId = apostles[0]?.id || '';
    }
    ensureRecord(state.selectedId);
  }

  function getSelectedApostle() {
    return apostles.find(apostle => apostle.id === state.selectedId);
  }

  function ensureRecord(apostleId) {
    state.records[apostleId] = state.records[apostleId] || EMPTY_RECORD();
    state.records[apostleId].current = state.records[apostleId].current || {};
    state.records[apostleId].target = state.records[apostleId].target || {};
    return state.records[apostleId];
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        selectedId: saved.selectedId || '',
        mode: saved.mode === 'target' ? 'target' : 'current',
        activeLevel: ['1', '2', '3'].includes(saved.activeLevel) ? saved.activeLevel : '1',
        selectedCellId: saved.selectedCellId || '',
        records: saved.records && typeof saved.records === 'object' ? saved.records : {}
      };
    } catch {
      return { selectedId: '', mode: 'current', activeLevel: '1', selectedCellId: '', records: {} };
    }
  }

  function moveSelection(direction) {
    const sorted = apostles.slice().sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    const currentIndex = sorted.findIndex(apostle => apostle.id === state.selectedId);
    const nextIndex = (currentIndex + direction + sorted.length) % sorted.length;
    state.selectedId = sorted[nextIndex].id;
    ensureRecord(state.selectedId);
    saveState();
    render();
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function formatNumber(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1);
  }

  function normalizeKey(value) {
    return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
})();
