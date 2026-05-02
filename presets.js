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
        skills: [
            { name: "通常攻撃", mult: 2385 }
        ]
    },
    "meow_ef_11_P1": {
        name: "[EF/微辛1]M.E.O.W(5/5)",
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
        skills: [
            { name: "叩きつけ[AoE/2段]", mult: 100  },
            { name: "張り手[AoE]", mult: 300  },
            { name: "ランチャー[AoE/RNG/3発]", mult: 480  },
            { name: "ガトリング[AoE/10発?]", mult: 300  },
            { name: "波状攻撃[AoE/12発]", mult: 400  },
            { name: "火炎放射[AoE/11発]", mult: 800  },
            { name: "ミサイル[AoE/RNG/14発?]", mult: 1400  },
            { name: "溜めレーザー[AoE/14発]", mult: 600  }
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
        skills: [
            { name: "通常攻撃", mult: 100 },
            { name: "強攻撃", mult: 200 }
        ]
    }
};
