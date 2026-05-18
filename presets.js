// Trickcal Damage Calculator - Preset Data
// You can easily add new characters or enemies here.

const PLAYER_PRESETS = {
    "dummy_player": {
        name: "[P] Dummy",
        atk: 30000,
        crit: 25000,
        critDmg: 25000,
        def: 60000,
        critRes: 20000,
        critDmgRes: 20000,
        skills: [
            { name: "通常攻撃1", mult: 100 },
            { name: "通常攻撃2", mult: 50 },
            { name: "通常攻撃3", mult: 80 },
            { name: "通常攻撃4", mult: 120 },
            { name: "通常攻撃5", mult: 150 },
            { name: "強攻撃1", mult: 200 },
            { name: "強攻撃2", mult: 300 },
            { name: "スキル攻撃1", mult: 250 },
            { name: "スキル攻撃2", mult: 500 },
            { name: "スキル攻撃3", mult: 1000 }
        ]
    },
    "dummy_player_2": {
        name: "[P] Dummy 2",
        atk: 60000,
        crit: 50000,
        critDmg: 50000,
        def: 90000,
        critRes: 40000,
        critDmgRes: 40000,
        skills: [
            { name: "通常攻撃1", mult: 100 },
            { name: "通常攻撃2", mult: 50 },
            { name: "通常攻撃3", mult: 80 },
            { name: "通常攻撃4", mult: 120 },
            { name: "通常攻撃4", mult: 150 },
            { name: "強攻撃1", mult: 200 },
            { name: "強攻撃2", mult: 300 },
            { name: "スキル攻撃1", mult: 250 },
            { name: "スキル攻撃2", mult: 500 },
            { name: "スキル攻撃3", mult: 1000 }
        ]
    },
    "dummy_player_3": {
        name: "[P] Dummy 3",
        atk: 90000,
        crit: 50000,
        critDmg: 50000,
        def: 120000,
        critRes: 40000,
        critDmgRes: 40000,
        skills: [
            { name: "通常攻撃1", mult: 100 },
            { name: "通常攻撃2", mult: 50 },
            { name: "通常攻撃3", mult: 80 },
            { name: "通常攻撃4", mult: 120 },
            { name: "通常攻撃4", mult: 150 },
            { name: "強攻撃1", mult: 200 },
            { name: "強攻撃2", mult: 300 },
            { name: "スキル攻撃1", mult: 250 },
            { name: "スキル攻撃2", mult: 500 },
            { name: "スキル攻撃3", mult: 1000 }
        ]
    }
};

const ENEMY_PRESETS = {
    "lily_light_v15": {
        name: "[次元15] リリー(活発)",
        hp: 661796770,
        atk_p: 28118,
        atk_m: 28118,
        def_p: 52196,
        def_m: 52196,
        dmgType: 'mag',
        crit: 44178,
        critDmg: 44178,
        critRes: 36146,
        critDmgRes: 36146,
        special: 2385,
        skills: [
            { name: "通常攻撃", mult: 100 }
        ]
    },
    "meow_ef_11": {
        name: "[EF/微辛1] M.E.O.W",
        hp: 401524,
        atk_p: 1507,
        atk_m: 1507,
        def_p: 2792,
        def_m: 2792,
        dmgType: "phys",
        crit: 2370,
        critDmg: 2370,
        critRes: 1946,
        critDmgRes: 1946,
        special: 214,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09230083, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.18460416, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.27690499, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.36920583, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.46150666, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_12": {
        name: "[EF/微辛2] M.E.O.W",
        hp: 2179702,
        atk_p: 3609,
        atk_m: 3609,
        def_p: 6696,
        def_m: 6696,
        dmgType: "phys",
        crit: 5674,
        critDmg: 5674,
        critRes: 4648,
        critDmgRes: 4648,
        special: 385,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09677149, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19354297, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29031446, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.38708594, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.48385743, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_21": {
        name: "[EF/小辛1] M.E.O.W",
        hp: 4745749,
        atk_p: 5360,
        atk_m: 5360,
        def_p: 9946,
        def_m: 9946,
        dmgType: "phys",
        crit: 8436,
        critDmg: 8436,
        critRes: 6899,
        critDmgRes: 6899,
        special: 528,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09782418, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19564836, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29347254, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.39129693, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.48912111, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_22": {
        name: "[EF/小辛2] M.E.O.W",
        hp: 11848508,
        atk_p: 8470,
        atk_m: 8470,
        def_p: 15796,
        def_m: 15796,
        dmgType: "phys",
        crit: 13400,
        critDmg: 13400,
        critRes: 10950,
        critDmgRes: 10950,
        special: 790,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09862904, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19725800, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29588696, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.39451592, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.49314488, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_31": {
        name: "[EF/中辛1] M.E.O.W",
        hp: 26286605,
        atk_p: 12700,
        atk_m: 12700,
        def_p: 23594,
        def_m: 23594,
        dmgType: "phys",
        crit: 19986,
        critDmg: 19986,
        critRes: 16342,
        critDmgRes: 16342,
        special: 1129,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09908179, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19816359, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29724535, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.39632714, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.49540894, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_32": {
        name: "[EF/中辛2]M.E.O.W",
        hp: 58588935,
        atk_p: 19000,
        atk_m: 19000,
        def_p: 35280,
        def_m: 35280,
        dmgType: "phys",
        crit: 29900,
        critDmg: 29900,
        critRes: 24450,
        critDmgRes: 24450,
        special: 1643,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09938597, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19877194, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29815792, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.39754389, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.49692986, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_41": {
        name: "[EF/麻辣1] M.E.O.W",
        hp: 127799868,
        atk_p: 28100,
        atk_m: 28100,
        def_p: 52200,
        def_m: 52200,
        dmgType: "phys",
        crit: 44200,
        critDmg: 44200,
        critRes: 36100,
        critDmgRes: 36100,
        special: 2385,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09958470, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19916940, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29875410, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.39833881, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.49792351, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/9発?]", mult: 150 },
            { name: "波状攻撃[AoE/12発]", mult: 200 },
            { name: "火炎放射[AoE/11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/14発]", mult: 300 }
        ]
    },
    "meow_ef_42": {
        name: "[EF/麻辣2] M.E.O.W",
        hp: 286321339,
        atk_p: 42110,
        atk_m: 42110,
        def_p: 78200,
        def_m: 78200,
        dmgType: "phys",
        crit: 66180,
        critDmg: 66180,
        critRes: 54150,
        critDmgRes: 54150,
        special: 3528,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.09972275, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.19944550, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.29916825, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.39889100, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.49861376, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/全2段]", mult: 50 },
            { name: "張り手[AoE]", mult: 150 },
            { name: "ランチャー[AoE/RNG/3発]", mult: 240 },
            { name: "ガトリング[AoE/全弾9発?]", mult: 150 },
            { name: "波状攻撃[AoE/全弾12発]", mult: 200 },
            { name: "火炎放射[AoE/全弾11発]", mult: 400 },
            { name: "ミサイル[AoE/RNG/全弾14発?]", mult: 700 },
            { name: "溜めレーザー[AoE/全弾14発]", mult: 300 },
            { name: "--------------------------", mult: 100 },
            { name: "叩きつけ[AoE/2段hit]", mult: 100 },
            { name: "ガトリング[AoE/9発hit]", mult: 1350 },
            { name: "波状攻撃[AoE/12発hit]", mult: 2400 },
            { name: "火炎放射[AoE/11発hit]", mult: 4400 },
            { name: "ミサイル[AoE/RNG/2発hit]", mult: 1400 },
            { name: "溜めレーザー[AoE/14発hit]", mult: 4200 }
        ]
    },
    "dummy_enemy": {
        name: "[E] Dummy",
        hp: 1000000,
        atk_p: 30000,
        atk_m: 30000,
        def_p: 60000,
        def_m: 60000,
        dmgType: 'phys',
        crit: 25000,
        critDmg: 25000,
        critRes: 20000,
        critDmgRes: 20000,
        special: 100,
        skills: [
            { name: "通常攻撃1", mult: 100 },
            { name: "通常攻撃2", mult: 50 },
            { name: "通常攻撃3", mult: 80 },
            { name: "通常攻撃4", mult: 120 },
            { name: "通常攻撃5", mult: 150 },
            { name: "強攻撃1", mult: 200 },
            { name: "強攻撃2", mult: 300 },
            { name: "スキル攻撃1", mult: 500 },
            { name: "スキル攻撃2", mult: 1000 }
        ]
    }
};
