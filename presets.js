// Trickcal Damage Calculator - Preset Data
// You can easily add new characters or enemies here.

const presets = {
    atk: {
        'lily_v15': { atk: 67107, crit: 30000, critDmg: 30000 }
    },
    def: {
        'lily_v15': { def: 67107, critRes: 30000, critDmgRes: 30000 }
    }
};

const ENEMY_PRESETS = {
    "lily_light_v15": {
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
        critDmgRes: 36146,
        special: 100,
        skills: [
            { name: "通常攻撃", mult: 2385 }
        ]
    },
    "meow_ef_11": {
        name: "[EF/微辛1]M.E.O.W",
        hp: 401524,
        atk_p: 1569,
        atk_m: 0,
        def_p: 2792,
        def_m: 2792,
        dmgType: "phys",
        crit: 2396,
        critDmg: 2396,
        critRes: 1946,
        critDmgRes: 1946,
        special: 200,
        weakness: {
            phys: { add: 75 }
        },
        phases: [
            { name: "Phase 1 (5/5)", mult: 1.0, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 2 (4/5)", mult: 1.0923, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 3 (3/5)", mult: 1.1846, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 4 (2/5)", mult: 1.2769, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 5 (1/5)", mult: 1.3692, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] },
            { name: "Phase 6 (0/5)", mult: 1.4615, scaleStats: ['hp', 'atk_p', 'atk_m', 'def_p', 'def_m', 'crit', 'critDmg', 'critRes', 'critDmgRes'] }
        ],
        skills: [
            { name: "叩きつけ[AoE/2段]", mult:50  },
            { name: "張り手[AoE]", mult:150  },
            { name: "ランチャー[AoE/RNG/3発]", mult:240  },
            { name: "ガトリング[AoE/10発?]", mult:150  },
            { name: "波状攻撃[AoE/12発]", mult:200  },
            { name: "火炎放射[AoE/11発]", mult:400  },
            { name: "ミサイル[AoE/RNG/14発?]", mult:700  },
            { name: "溜めレーザー[AoE/14発]", mult:300  }
        ]
    },
    "general_test": {
        name: "テスト用案山子",
        hp: 1000000,
        atk_p: 10000,
        atk_m: 10000,
        def_p: 10000,
        def_m: 10000,
        dmgType: 'phys',
        crit: 10000,
        critDmg: 10000,
        critRes: 10000,
        critDmgRes: 10000,
        special: 100,
        skills: [
            { name: "通常攻撃", mult: 100 },
            { name: "強攻撃", mult: 200 }
        ]
    }
};
