// Trickcal Damage Calculator - Apostle Data
// Generated from: トリッカル使徒データ Google Sheet

const APOSTLE_LIBRARY = [
  {
    "id": "amelia",
    "name": "アメリア",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "エルフ",
      "role": "支援",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 1,
      "atkP": 4,
      "atkM": 0,
      "defP": 1,
      "defM": 1,
      "crit": 4,
      "critDmg": 4,
      "critRes": 1,
      "critDmgRes": 1
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 250,
              "2": 275,
              "3": 300,
              "4": 325,
              "5": 350,
              "6": 375,
              "7": 400,
              "8": 425,
              "9": 450,
              "10": 475,
              "11": 500,
              "12": 525,
              "13": 550,
              "14": 575,
              "15": 600
            }
          },
          {
            "valueKind": "感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "サテライト戦術爆撃",
        "description": "サテライト信号弾を発射してレーザー爆撃を行い、敵に範囲物理ダメージを与え、感電を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 1080,
              "2": 1188,
              "3": 1296,
              "4": 1404,
              "5": 1512,
              "6": 1620,
              "7": 1728,
              "8": 1836,
              "9": 1944,
              "10": 2052,
              "11": 2160,
              "12": 2268,
              "13": 2376,
              "14": 2484,
              "15": 2592
            }
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 6
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/感電状態"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/感電状態",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "超伝導レーザーキヤノン",
        "description": "最新型のレーザーキャノンを発射し、敵に6回の範囲物理ダメージを与える。過熱後はより広範囲の物理ダメージを与える（2ヒット＋加熱後4ヒット）。敵が感電状態の場合、気絶を付与する。",
        "cooldownSeconds": 32
      },
      {
        "effects": [
          {
            "valueKind": "感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム/指定範囲内"
          },
          {
            "valueKind": "感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム/指定範囲内",
            "levels": {
              "1": 10,
              "2": 10.5,
              "3": 11,
              "4": 11.5,
              "5": 12,
              "6": 12.5,
              "7": 13,
              "8": 13.5,
              "9": 14,
              "10": 14.5,
              "11": 15,
              "12": 15.5,
              "13": 16,
              "14": 16.5,
              "15": 17
            }
          },
          {
            "valueKind": "感電",
            "valueClass": "対象数",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム/指定範囲内",
            "fixedValue": 2
          },
          {
            "valueKind": "感電",
            "valueClass": "クールタイム",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム/指定範囲内",
            "fixedValue": 10
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "指定範囲内の敵をランダムで感電させる。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵/範囲",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵にレーザーを発射して範囲物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 175
          },
          {
            "valueKind": "感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 3
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で強化レーザーを発射して範囲物理ダメージを与え、感電を付与する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "王子エレナ",
      "levels": {
        "1": {
          "name": "王子さまの恵み",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "超高速サンダーレーザー",
          "stats": [],
          "effects": [
            {
              "valueKind": "強化攻撃発動確率増加",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "自身",
              "fixedValue": 15
            },
            {
              "valueKind": "普通攻撃のダメージ量増加",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "敵/感電状態",
              "targetSkill": "普通攻撃",
              "fixedValue": 40
            },
            {
              "valueKind": "パッシブ感電対象数",
              "valueClass": "対象数",
              "effectType": "パッシブ",
              "effectTarget": "敵/指定範囲内",
              "fixedValue": 3
            }
          ],
          "description": "強化攻撃の発動確率が増加する。感電状態の敵に与える普通攻撃のダメージ量が増加する。パッシブスキルで付与する感電の対象数が3体になる。"
        },
        "3": {
          "name": "援軍要請の件",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "物理攻撃力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "毎秒SP回復量",
              "valueClass": "SP量",
              "effectType": "バフ",
              "effectTarget": "味方/後列",
              "fixedValue": 4
            }
          ],
          "description": "後列の味方の1秒ごとのSP回復量を増加させる。"
        }
      }
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "aya",
    "name": "アヤ",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "冷静",
      "race": "魔女",
      "role": "攻撃",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 44
    },
    "statTypes": {
      "hp": 4,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 5,
      "critDmgRes": 5
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 260,
              "2": 275,
              "3": 290,
              "4": 305,
              "5": 320,
              "6": 335,
              "7": 350,
              "8": 365,
              "9": 380,
              "10": 395,
              "11": 410,
              "12": 425
            }
          },
          {
            "valueKind": "スキルダメージ量減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 50
          },
          {
            "valueKind": "スキルダメージ量減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 6
          },
          {
            "valueKind": "SP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 15
          }
        ],
        "skillType": "低学年",
        "skillName": "あられ蝶",
        "description": "敵に蝶を飛ばす。蝶は衝突した際に敵に魔法ダメージを数回与え、スキルダメージ量を減少させる。蝶が敵に衝突すると、自身のSPが回復する。SP回復効果は同じ対象に一度だけ発動する。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 250,
              "2": 265,
              "3": 280,
              "4": 295,
              "5": 310,
              "6": 325,
              "7": 340,
              "8": 355,
              "9": 370,
              "10": 385,
              "11": 400,
              "12": 415
            }
          },
          {
            "valueKind": "繰り返し回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 5
          },
          {
            "valueKind": "凍傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "凍傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 10
          }
        ],
        "skillType": "高学年",
        "skillName": "雪花満開",
        "description": "敵に雪の花を咲かせる。雪の花は敵に範囲魔法ダメージを与え、凍傷を付与する。ダメージを受けたランダムな敵に新しい雪の花を咲かせ、敵に範囲魔法ダメージを与える。雪の花は同じ対象に一度だけ咲く。",
        "cooldownSeconds": 28
      },
      {
        "effects": [
          {
            "valueKind": "会心被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "冷静の味方使徒",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心被ダメージ量が減少する。冷静の味方使徒の攻撃力を増加させる。この効果はアヤがフィールドにいなくても発動する。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 100
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "氷刃雪花を振って敵に魔法ダメージを2回与える。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 190
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 2
          },
          {
            "valueKind": "攻撃速度減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 20
          },
          {
            "valueKind": "攻撃速度減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 4
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で氷刃雪花を振って敵に範囲魔法ダメージを2回与える。2回目の攻撃は敵の攻撃速度を減少させる。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "alice",
    "name": "アリス",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "幽霊",
      "role": "攻撃",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 40
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "[傘持参]総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 270,
              "2": 295,
              "3": 320,
              "4": 345,
              "5": 370,
              "6": 395,
              "7": 420,
              "8": 445,
              "9": 470,
              "10": 495,
              "11": 520,
              "12": 545
            }
          },
          {
            "valueKind": "[傘持参]総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "[傘持参]感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "[傘持参]感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 4
          },
          {
            "valueKind": "[残り火注意]総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260
            }
          },
          {
            "valueKind": "[残り火注意]火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "[残り火注意]火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 7
          },
          {
            "valueKind": "[かすり傷注意]総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "levels": {
              "1": 180,
              "2": 205,
              "3": 230,
              "4": 255,
              "5": 280,
              "6": 305,
              "7": 330,
              "8": 355,
              "9": 380,
              "10": 405,
              "11": 430,
              "12": 455
            }
          },
          {
            "valueKind": "[かすり傷注意]総魔法ダメージ",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 3
          },
          {
            "valueKind": "[かすり傷注意]総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 4
          },
          {
            "valueKind": "[かすり傷注意]気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム"
          },
          {
            "valueKind": "[かすり傷注意]気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "ティータイム？",
        "description": "簡易占いの3つの効果のうち1つを発動する。\n傘持参: 範囲魔法ダメージを2回与え、感電を付与する。\n残り火注意: 範囲魔法ダメージを与え火傷を付与する。\nかすり傷注意: ランダムな敵3体に魔法ダメージを4回与え、気絶を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "[傘持参]総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 405,
              "2": 440,
              "3": 475,
              "4": 510,
              "5": 545,
              "6": 580,
              "7": 615,
              "8": 650,
              "9": 685,
              "10": 720,
              "11": 755,
              "12": 790
            }
          },
          {
            "valueKind": "[傘持参]総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "[傘持参]感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "[傘持参]感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 6
          },
          {
            "valueKind": "[残り火注意]総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 1200,
              "2": 1320,
              "3": 1440,
              "4": 1560,
              "5": 1680,
              "6": 1800,
              "7": 1920,
              "8": 2040,
              "9": 2160,
              "10": 2280,
              "11": 2400,
              "12": 2520
            }
          },
          {
            "valueKind": "[残り火注意]火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "[残り火注意]火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 10
          },
          {
            "valueKind": "[かすり傷注意]総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "levels": {
              "1": 270,
              "2": 305,
              "3": 340,
              "4": 375,
              "5": 410,
              "6": 445,
              "7": 480,
              "8": 515,
              "9": 550,
              "10": 585,
              "11": 620,
              "12": 655
            }
          },
          {
            "valueKind": "[かすり傷注意]総魔法ダメージ",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 3
          },
          {
            "valueKind": "[かすり傷注意]総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 4
          },
          {
            "valueKind": "[かすり傷注意]気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム"
          },
          {
            "valueKind": "[かすり傷注意]気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム",
            "fixedValue": 4
          }
        ],
        "skillType": "高学年",
        "skillName": "ワンダーランド",
        "description": "直前に引いたアルカナカードに応じてスキルを強化し、発動する。\nアルカナを使用していない場合は、かすり傷注意が発動する。",
        "cooldownSeconds": 40
      },
      {
        "effects": [
          {
            "valueKind": "SP減少",
            "valueClass": "固定値",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "levels": {
              "1": 16,
              "2": 17,
              "3": 18,
              "4": 19,
              "5": 20,
              "6": 21,
              "7": 22,
              "8": 23,
              "9": 24,
              "10": 25,
              "11": 26,
              "12": 27
            }
          },
          {
            "valueKind": "SP回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 23,
              "3": 26,
              "4": 29,
              "5": 32,
              "6": 35,
              "7": 38,
              "8": 41,
              "9": 44,
              "10": 47,
              "11": 50,
              "12": 53
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃時、敵のSPを減少させ、自身のSPを回復する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "トランプを飛ばして敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 200
          },
          {
            "valueKind": "アルカナ出現",
            "valueClass": "回数",
            "effectType": "スキル変更",
            "effectTarget": "自身",
            "fixedValue": 4
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "4回攻撃するごとにランダムなアルカナが出現し、強化攻撃が変更される。"
      }
    ],
    "favoriteCard": {
      "name": "アリスのデタラメな呪術",
      "kind": "スペル",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "[赤カード]魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "fixedValue": 300
              },
              {
                "valueKind": "[赤カード]与ダメージ減少",
                "valueClass": "倍率",
                "effectType": "デバフ",
                "effectTarget": "敵",
                "fixedValue": 30
              },
              {
                "valueKind": "[赤カード]与ダメージ減少",
                "valueClass": "持続時間",
                "effectType": "デバフ",
                "effectTarget": "敵",
                "fixedValue": 5
              },
              {
                "valueKind": "[黄カード]魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "fixedValue": 300
              },
              {
                "valueKind": "[黄カード]気絶",
                "valueClass": "状態付与",
                "effectType": "デバフ",
                "effectTarget": "敵"
              },
              {
                "valueKind": "[黄カード]気絶",
                "valueClass": "持続時間",
                "effectType": "デバフ",
                "effectTarget": "敵",
                "fixedValue": 3
              },
              {
                "valueKind": "[青カード]魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "fixedValue": 300
              },
              {
                "valueKind": "[青カード]SP減少",
                "valueClass": "固定値",
                "effectType": "デバフ",
                "effectTarget": "敵",
                "fixedValue": 50
              }
            ],
            "skillName": "ランダム効果",
            "description": "ランダムで赤/黄/青のカード効果を発動する。赤は与ダメージ減少、黄は気絶、青はSP減少。"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "毎秒SP回復量",
              "valueClass": "固定値",
              "effectType": "パッシブ",
              "effectTarget": "自身",
              "fixedValue": 10
            },
            "skillName": "愛用Lv3",
            "description": "毎秒SP回復量が増加する。"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "allet",
    "name": "アレット",
    "basic": {
      "rarity": 2,
      "personality": "純粋",
      "race": "エルフ",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 5,
      "atkP": 2,
      "atkM": 0,
      "defP": 5,
      "defM": 5,
      "crit": 2,
      "critDmg": 2,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 300,
              "2": 330,
              "3": 360,
              "4": 390,
              "5": 420,
              "6": 450,
              "7": 480,
              "8": 510,
              "9": 540,
              "10": 570,
              "11": 600,
              "12": 630
            }
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "ショベルアタック",
        "description": "ショベルを振り回して敵にダメージを与え、気絶を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "シールド",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 25,
              "2": 27,
              "3": 29,
              "4": 31,
              "5": 33,
              "6": 35,
              "7": 37,
              "8": 39,
              "9": 41,
              "10": 43,
              "11": 45,
              "12": 47
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "シールド",
            "effectTarget": "自身",
            "fixedValue": 7
          },
          {
            "valueKind": "シールド破壊時の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 200,
              "2": 210,
              "3": 220,
              "4": 230,
              "5": 240,
              "6": 250,
              "7": 260,
              "8": 270,
              "9": 280,
              "10": 290,
              "11": 300,
              "12": 310
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "鎮圧準備",
        "description": "ダメージを吸収するシールドを自身に生成する。シールドが破壊されるか持続時間が終わると、敵に範囲物理ダメージを与える。",
        "cooldownSeconds": 16
      },
      {
        "effects": {
          "valueKind": "防御力増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "すべての防御力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "盾で突進して敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "ed",
    "name": "イード",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "冷静",
      "race": "エルフ",
      "role": "守備",
      "position": "前列",
      "attackType": "魔法",
      "initialSp": 160,
      "spRecoveryPerSecond": 40
    },
    "statTypes": {
      "hp": 5,
      "atkP": 0,
      "atkM": 2,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 5,
      "critDmgRes": 5
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "シールド",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 24,
              "2": 26,
              "3": 28,
              "4": 30,
              "5": 32,
              "6": 34,
              "7": 36,
              "8": 38,
              "9": 40,
              "10": 42,
              "11": 44,
              "12": 46,
              "13": 48,
              "14": 50,
              "15": 52
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "シールド",
            "effectTarget": "自身",
            "fixedValue": 8
          },
          {
            "valueKind": "保護",
            "valueClass": "状態付与",
            "effectType": "バフ",
            "effectTarget": "イードを除く味方全員"
          },
          {
            "valueKind": "保護",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "イードを除く味方全員",
            "fixedValue": 10
          },
          {
            "valueKind": "保護発動回数",
            "valueClass": "回数",
            "effectType": "バフ",
            "effectTarget": "イードを除く味方全員",
            "fixedValue": 2
          },
          {
            "valueKind": "味方シールド",
            "valueClass": "倍率",
            "effectType": "シールド",
            "effectTarget": "保護が発動した味方",
            "reference": "最大HP",
            "levels": {
              "1": 48,
              "2": 53,
              "3": 56,
              "4": 60,
              "5": 63,
              "6": 66,
              "7": 71,
              "8": 74,
              "9": 78,
              "10": 81,
              "11": 84,
              "12": 89,
              "13": 92,
              "14": 96,
              "15": 99
            }
          },
          {
            "valueKind": "味方シールド",
            "valueClass": "持続時間",
            "effectType": "シールド",
            "effectTarget": "保護が発動した味方",
            "fixedValue": 12
          }
        ],
        "skillType": "低学年",
        "skillName": "薄暗い境界線",
        "description": "自身にシールドを生成し、イードを除く味方全員に保護を付与する。この効果は最大2回発動する。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "周囲の敵/範囲",
            "levels": {
              "1": 700,
              "2": 770,
              "3": 840,
              "4": 910,
              "5": 980,
              "6": 1050,
              "7": 1120,
              "8": 1190,
              "9": 1260,
              "10": 1330,
              "11": 1400,
              "12": 1470,
              "13": 1540,
              "14": 1610,
              "15": 1680
            }
          },
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "周囲の敵/範囲",
            "fixedValue": 4
          },
          {
            "valueKind": "SP減少",
            "valueClass": "固定値",
            "effectType": "デバフ",
            "effectTarget": "周囲の敵/範囲",
            "levels": {
              "1": 96,
              "2": 104,
              "3": 112,
              "4": 120,
              "5": 128,
              "6": 136,
              "7": 144,
              "8": 152,
              "9": 160,
              "10": 168,
              "11": 176,
              "12": 184,
              "13": 192,
              "14": 200,
              "15": 208
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "あなたと私の宇宙",
        "description": "周囲の敵に範囲魔法ダメージを4回与え、SPを減少させる。",
        "cooldownSeconds": 38
      },
      {
        "effects": [
          {
            "valueKind": "無敵",
            "valueClass": "状態付与",
            "effectType": "バフ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "無敵",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 3,
              "2": 3.3,
              "3": 3.6,
              "4": 3.9,
              "5": 4.2,
              "6": 4.5,
              "7": 4.8,
              "8": 5.1,
              "9": 5.4,
              "10": 5.7,
              "11": 6,
              "12": 6.3,
              "13": 6.6,
              "14": 6.9,
              "15": 7.2
            }
          },
          {
            "valueKind": "目隠し免疫",
            "valueClass": "状態免疫",
            "effectType": "パッシブ",
            "effectTarget": "自身"
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "ウェーブ開始時に一定時間、自身に無敵を付与する。目隠しの免疫を持つ。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 120
          },
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵にレーザーを4回発射して魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "発動条件被弾数",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 5
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "前方の敵/範囲",
            "fixedValue": 240
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "fixedValue": 20
          },
          {
            "valueKind": "攻撃力減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "ダメージを受けた敵",
            "fixedValue": 30
          },
          {
            "valueKind": "攻撃力減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ダメージを受けた敵",
            "fixedValue": 6
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "直接ダメージを5回受けるたびに、前方の敵に範囲魔法ダメージを与え、自身のHPを回復する。ダメージを受けた敵は攻撃力が減少する。"
      }
    ],
    "favoriteCard": {
      "name": "ルシ - イードドリーム",
      "kind": "スペル",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "最大HP増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "味方全員",
                "fixedValue": 15
              },
              {
                "valueKind": "SP回復周期",
                "valueClass": "周期",
                "effectType": "回復",
                "effectTarget": "自身と周囲の味方",
                "fixedValue": 5
              },
              {
                "valueKind": "SP回復",
                "valueClass": "固定値",
                "effectType": "回復",
                "effectTarget": "自身と周囲の味方",
                "fixedValue": 30
              }
            ],
            "skillName": "愛用カード効果",
            "description": "デッキにイードが編成されている場合、味方全員の最大HPが増加し、一定時間ごとに自身と周囲の味方のSPを回復する。"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "HP回復量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 30
            },
            "skillName": "愛用カード効果",
            "description": "イードのHP回復量が増加する。"
          }
        ]
      }
    },
    "aside": {
      "name": "イード・ジ・エターナルブレット",
      "levels": {
        "1": {
          "name": "心優しいイード",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "まだ夢から覚めていない",
          "stats": [],
          "effects": [
            {
              "valueKind": "防御力増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 25
            },
            {
              "valueKind": "防御力増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 5
            },
            {
              "valueKind": "追加シールド",
              "valueClass": "倍率",
              "effectType": "シールド",
              "effectTarget": "残りHP割合が最も低い味方",
              "targetSkill": "低学年スキル",
              "reference": "最大HP",
              "levels": {
                "1": 24,
                "2": 26,
                "3": 28,
                "4": 30,
                "5": 32,
                "6": 34,
                "7": 36,
                "8": 38,
                "9": 40,
                "10": 42,
                "11": 44,
                "12": 46,
                "13": 48,
                "14": 50,
                "15": 52
              }
            },
            {
              "valueKind": "追加シールド",
              "valueClass": "持続時間",
              "effectType": "シールド",
              "effectTarget": "残りHP割合が最も低い味方",
              "targetSkill": "低学年スキル",
              "fixedValue": 8
            },
            {
              "valueKind": "SP回復",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "保護が発動した味方",
              "targetSkill": "保護",
              "fixedValue": 30
            }
          ],
          "description": "強化攻撃使用時、一定時間、自身の防御力を増加させる。低学年スキル使用時、残りHP割合が最も低い味方に追加でシールドを付与する。保護が発動した味方のSPを回復させる。"
        },
        "3": {
          "name": "共に見る夢",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "HP",
              "increaseP": 4
            },
            {
              "statApplyTo": "全体",
              "statName": "会心抵抗",
              "increaseP": 4
            }
          ],
          "effects": [
            {
              "valueKind": "最大HP増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全員",
              "fixedValue": 18
            }
          ],
          "description": "味方全員の最大HPを増加させる。"
        }
      }
    },
    "board": {
      "race": "エルフ",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "ifrit",
    "name": "イフリート",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "精霊",
      "role": "攻撃",
      "position": "前列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "領域内の敵",
            "levels": {
              "1": 130,
              "2": 143,
              "3": 156,
              "4": 169,
              "5": 182,
              "6": 195,
              "7": 208,
              "8": 221,
              "9": 234,
              "10": 247,
              "11": 260,
              "12": 273
            }
          },
          {
            "valueKind": "火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "領域内の敵"
          },
          {
            "valueKind": "火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "領域内の敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "グツグツ",
        "description": "炎の領域を生成して領域内の敵に魔法ダメージを与え、火傷を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "初回落下時魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "中央の敵/範囲",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "中央の敵/範囲"
          },
          {
            "valueKind": "火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "中央の敵/範囲",
            "fixedValue": 6
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 80,
              "2": 88,
              "3": 96,
              "4": 104,
              "5": 112,
              "6": 120,
              "7": 128,
              "8": 136,
              "9": 144,
              "10": 152,
              "11": 160,
              "12": 168
            }
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 10
          }
        ],
        "skillType": "高学年",
        "skillName": "キャンプファイア",
        "description": "空中に跳び上がった後、真ん中にいる敵に落下し、範囲魔法ダメージを与え、火傷を付与する。その後10回範囲魔法ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "基本攻撃のダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 30,
              "2": 32,
              "3": 34,
              "4": 36,
              "5": 38,
              "6": 40,
              "7": 42,
              "8": 44,
              "9": 46,
              "10": 48,
              "11": 50,
              "12": 52
            }
          },
          {
            "valueKind": "火傷免疫",
            "valueClass": "状態免疫",
            "effectType": "パッシブ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "火傷の与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身のスキルで発生した火傷",
            "levels": {
              "1": 24,
              "2": 28,
              "3": 32,
              "4": 36,
              "5": 40,
              "6": 44,
              "7": 48,
              "8": 52,
              "9": 56,
              "10": 60,
              "11": 64,
              "12": 68
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃のダメージ量が増加し、火傷の免疫を得る。イフリートのスキルで発生した火傷のダメージ量が増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "剣を振るい、敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "ui",
    "name": "ウイ",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "活発",
      "race": "精霊",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 100,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 1,
      "defP": 4,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "持続HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/最大9名",
            "reference": "最大HP",
            "levels": {
              "1": 3,
              "2": 3.3,
              "3": 3.6,
              "4": 3.9,
              "5": 4.2,
              "6": 4.5,
              "7": 4.8,
              "8": 5.1,
              "9": 5.4,
              "10": 5.7,
              "11": 6,
              "12": 6.3,
              "13": 6.6,
              "14": 6.9,
              "15": 7.2
            }
          },
          {
            "valueKind": "持続SP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/最大9名",
            "reference": "最大SP",
            "levels": {
              "1": 1,
              "2": 1.1,
              "3": 1.2,
              "4": 1.3,
              "5": 1.4,
              "6": 1.5,
              "7": 1.6,
              "8": 1.7,
              "9": 1.8,
              "10": 1.9,
              "11": 2,
              "12": 2.1,
              "13": 2.2,
              "14": 2.3,
              "15": 2.4
            }
          },
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲/最大9名",
            "levels": {
              "1": 250.5,
              "2": 275.55,
              "3": 300.6,
              "4": 325.65,
              "5": 350.7,
              "6": 375.75,
              "7": 400.8,
              "8": 425.85,
              "9": 450.9,
              "10": 475.95,
              "11": 501,
              "12": 526.05,
              "13": 551.1,
              "14": 576.15,
              "15": 601.2
            }
          },
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲/最大9名",
            "fixedValue": 6
          },
          {
            "valueKind": "カエル雨",
            "valueClass": "持続時間",
            "effectType": "回復/攻撃",
            "effectTarget": "自身周囲",
            "fixedValue": 6
          },
          {
            "valueKind": "適用対象数",
            "valueClass": "対象数",
            "effectType": "回復/攻撃",
            "effectTarget": "味方と敵",
            "fixedValue": 9
          }
        ],
        "skillType": "低学年",
        "skillName": "カエル雨",
        "description": "自身の周囲にカエルの雨を降らせて1秒ごとに味方のHPとSPを回復させ、敵に範囲魔法ダメージを与える。回復とダメージはそれぞれ最大9名の味方と敵に適用される。"
      },
      {
        "effects": [
          {
            "valueKind": "対象数",
            "valueClass": "対象数",
            "effectType": "バフ/デバフ",
            "effectTarget": "対象",
            "fixedValue": 3
          },
          {
            "valueKind": "HP全回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方",
            "reference": "最大HP",
            "fixedValue": 100
          },
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "シールド",
            "effectTarget": "残りHP割合が最も低い味方",
            "reference": "最大HP",
            "levels": {
              "1": 5,
              "2": 6,
              "3": 7,
              "4": 8,
              "5": 9,
              "6": 10,
              "7": 11,
              "8": 12,
              "9": 13,
              "10": 14,
              "11": 15,
              "12": 16,
              "13": 17,
              "14": 18,
              "15": 19
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "シールド",
            "effectTarget": "残りHP割合が最も低い味方",
            "fixedValue": 6
          },
          {
            "valueKind": "SP全回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "残りSP割合が最も低い味方",
            "reference": "最大SP",
            "fixedValue": 100
          },
          {
            "valueKind": "変異",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵"
          },
          {
            "valueKind": "変異",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 3,
              "2": 3.2,
              "3": 3.4,
              "4": 3.6,
              "5": 3.8,
              "6": 4,
              "7": 4.2,
              "8": 4.4,
              "9": 4.6,
              "10": 4.8,
              "11": 5,
              "12": 5.2,
              "13": 5.4,
              "14": 5.6,
              "15": 5.8
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "カエルの言うとおり！",
        "description": "エルの歌で対象3体にそれぞれ効果を付与する。残りHP割合が最も低い味方のHPを全回復させ、シールドを付与する。残りSP割合が最も低い味方のSPを全回復する。ランダムな敵に変異を付与する。",
        "cooldownSeconds": 20
      },
      {
        "effects": {
          "valueKind": "スキル攻撃の被ダメージ量減少",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "味方全員",
          "levels": {
            "1": 12,
            "2": 13,
            "3": 14,
            "4": 15,
            "5": 16,
            "6": 17,
            "7": 18,
            "8": 19,
            "9": 20,
            "10": 21,
            "11": 22,
            "12": 23,
            "13": 24,
            "14": 25,
            "15": 26
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "味方全員に対するスキル攻撃による被ダメージ量が減少する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "精霊魔法を放って敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 160
          },
          {
            "valueKind": "SP回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "周囲の味方",
            "fixedValue": 20
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率でエルが敵を舌ではたいて魔法ダメージを与え、周囲の味方のSPを回復する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "アンハッピーウイ",
      "levels": {
        "1": {
          "name": "エルはケロケロ",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "ポジティブの王ウイ",
          "stats": [],
          "effects": [
            {
              "valueKind": "活発追加",
              "valueClass": "固定値",
              "effectType": "パッシブ",
              "effectTarget": "自身",
              "fixedValue": 1
            },
            {
              "valueKind": "ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "中列の味方",
              "targetSkill": "低学年スキル",
              "fixedValue": 16
            },
            {
              "valueKind": "ダメージ量増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "中列の味方",
              "targetSkill": "低学年スキル",
              "fixedValue": 7
            }
          ],
          "description": "活発を1個追加する。低学年スキル使用時、中列の味方のダメージ量を増加させる。"
        },
        "3": {
          "name": "長ぐつをはいたウイ",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "HP",
              "increaseP": 4
            },
            {
              "statApplyTo": "全体",
              "statName": "魔法攻撃力",
              "increaseP": 4
            }
          ],
          "effects": [
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "中列の味方",
              "fixedValue": 14
            }
          ],
          "description": "中列の味方の敵からの被ダメージ量が減少する。"
        }
      }
    },
    "board": {
      "race": "精霊",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "vivi",
    "name": "ヴィヴィ",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "純粋",
      "race": "竜族",
      "role": "守備",
      "position": "前列",
      "attackType": "魔法",
      "initialSp": 150,
      "spRecoveryPerSecond": 50
    },
    "statTypes": {
      "hp": 5,
      "atkP": 0,
      "atkM": 2,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 5,
      "critDmgRes": 5
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 33,
              "2": 37,
              "3": 40,
              "4": 43,
              "5": 46,
              "6": 48,
              "7": 51,
              "8": 53,
              "9": 56,
              "10": 59,
              "11": 61,
              "12": 64,
              "13": 66,
              "14": 69,
              "15": 72
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "敵防御力減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "敵/自身周囲",
            "fixedValue": 40
          },
          {
            "valueKind": "敵防御力減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/自身周囲",
            "fixedValue": 7
          }
        ],
        "skillType": "低学年",
        "skillName": "わたくしに触れられまして？",
        "description": "自身にダメージを吸収する水銀シールドを付与する。\nシールドが破壊されるか、持続時間が終わると、周囲の対象の防御力を減少させる。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/指定範囲内で最遠",
            "levels": {
              "1": 360,
              "2": 430,
              "3": 500,
              "4": 570,
              "5": 640,
              "6": 710,
              "7": 780,
              "8": 850,
              "9": 920,
              "10": 990,
              "11": 1060,
              "12": 1130,
              "13": 1200,
              "14": 1270,
              "15": 1340
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 33,
              "2": 37,
              "3": 40,
              "4": 43,
              "5": 46,
              "6": 48,
              "7": 51,
              "8": 53,
              "9": 56,
              "10": 59,
              "11": 61,
              "12": 64,
              "13": 66,
              "14": 69,
              "15": 72
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "クイックシルバーランス",
        "description": "水銀の槍を指定範囲内で最も遠い敵に飛ばして魔法ダメージを与え、自身にシールドを生成する。",
        "cooldownSeconds": 42
      },
      {
        "effects": {
          "valueKind": "HP回復量",
          "valueClass": "倍率",
          "effectType": "ヒール",
          "effectTarget": "自身",
          "reference": "最大HP",
          "levels": {
            "1": 4.2,
            "2": 4.8,
            "3": 5.3,
            "4": 5.9,
            "5": 6.4,
            "6": 7,
            "7": 7.6,
            "8": 8.1,
            "9": 8.7,
            "10": 9.2,
            "11": 9.8,
            "12": 10.4,
            "13": 10.9,
            "14": 11.5,
            "15": 12
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃が命中すると、自身のHPを回復する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "刀を操り敵に魔法ダメージを2回与える。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 260
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定の確率で刀で敵を4回刺し、範囲魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {
      "name": "ヴィヴィの銀色の指揮棒",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": {
              "valueKind": "魔法ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "effectTarget": "敵/指定範囲内で最遠",
              "levels": {
                "1": 720,
                "2": 860,
                "3": 1000,
                "4": 1140,
                "5": 1280,
                "6": 1420,
                "7": 1560,
                "8": 1700,
                "9": 1840,
                "10": 2120,
                "11": 2260,
                "12": 2260,
                "13": 2400,
                "14": 2540,
                "15": 2680
              }
            },
            "targetSkill": "高学年",
            "skillName": "クイックシルバーフィナーレ",
            "description": "水銀の槍を指定範囲内で最も遠い敵に飛ばして確定会心魔法ダメージを与え、自身にシールドを付与する"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "最大HP",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "自身",
              "fixedValue": 9
            },
            "skillName": "愛用Lv3",
            "description": "最大HPが増加する。"
          },
          {
            "effects": {
              "valueKind": "毎秒SP回復量",
              "valueClass": "固定値",
              "effectType": "パッシブ",
              "effectTarget": "自身",
              "fixedValue": 10
            },
            "skillName": "愛用Lv3",
            "description": "毎秒SP回復量が増加する。"
          }
        ]
      }
    },
    "aside": {
      "name": "鎖で閉ざされた箱",
      "levels": {
        "1": {
          "name": "閉ざされた記憶の箱",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "わたくしがお守りいたしますわ",
          "stats": [],
          "effects": [
            {
              "valueKind": "被スキルダメージ量減少",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "自身",
              "fixedValue": 33
            },
            {
              "valueKind": "SP減少量",
              "valueClass": "SP量",
              "effectType": "デバフ",
              "effectTarget": "敵",
              "targetSkill": "基本攻撃",
              "fixedValue": 45
            },
            {
              "valueKind": "ワールドボスSP減少量",
              "valueClass": "SP量",
              "effectType": "デバフ",
              "effectTarget": "敵",
              "targetSkill": "基本攻撃",
              "fixedValue": 15
            },
            {
              "valueKind": "シールド",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身以外の残りHP割合が最も少ない味方",
              "targetSkill": "低学年スキル",
              "reference": "最大HP",
              "levels": {
                "1": 33,
                "2": 37,
                "3": 40,
                "4": 43,
                "5": 46,
                "6": 48,
                "7": 51,
                "8": 53,
                "9": 56,
                "10": 59,
                "11": 61,
                "12": 64,
                "13": 66,
                "14": 69,
                "15": 72
              }
            },
            {
              "valueKind": "シールド",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "自身以外の残りHP割合が最も少ない味方",
              "targetSkill": "低学年スキル",
              "fixedValue": 6
            },
            {
              "valueKind": "追加発射対象数",
              "valueClass": "対象数",
              "effectType": "攻撃",
              "effectTarget": "ランダムな敵",
              "targetSkill": "高学年スキル",
              "reference": "現在の対象スキル",
              "fixedValue": 2
            }
          ],
          "description": "敵からの被スキルダメージ量が減少する。\r\n基本攻撃が命中時、攻撃した敵のSPを減少させる。\r\n(ワールドボスはSP減少量が低下する。)\r\n低学年スキル使用後、自身を除き、残りHP割合が最も低い味方に水銀シールドを付与する。\r\n高学年スキルの水銀の槍が、ランダムな2体に追加で発射される。"
        },
        "3": {
          "name": "名誉あるヴィヴィ",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "HP",
              "increaseP": 4
            },
            {
              "statApplyTo": "全体",
              "statName": "魔法防御力",
              "increaseP": 4
            }
          ],
          "effects": [
            {
              "valueKind": "被ダメージ量を減少",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "味方全体",
              "fixedValue": 6
            },
            {
              "valueKind": "攻撃速度を増加",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "味方全体",
              "fixedValue": 5.25
            }
          ],
          "description": "味方全員の敵からの被ダメージ量を減少させる。\r\n味方全員の攻撃速度を増加させる。"
        }
      }
    },
    "board": {
      "race": "竜族",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "ashur",
    "name": "エシュール",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "妖精",
      "role": "攻撃",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 150,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 5,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 500,
              "2": 550,
              "3": 600,
              "4": 650,
              "5": 700,
              "6": 750,
              "7": 800,
              "8": 850,
              "9": 900,
              "10": 950,
              "11": 1000,
              "12": 1050
            }
          },
          {
            "valueKind": "発射数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "パンテミック",
        "description": "パンを6個放ち、ぶつかった敵に魔法ダメージを与える"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 400,
              "2": 440,
              "3": 480,
              "4": 520,
              "5": 560,
              "6": 600,
              "7": 640,
              "8": 680,
              "9": 720,
              "10": 760,
              "11": 800,
              "12": 840
            }
          },
          {
            "valueKind": "2回目の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "跳ね返り先の敵",
            "levels": {
              "1": 400,
              "2": 440,
              "3": 480,
              "4": 520,
              "5": 560,
              "6": 600,
              "7": 640,
              "8": 680,
              "9": 720,
              "10": 760,
              "11": 800,
              "12": 840
            }
          },
          {
            "valueKind": "跳ね返り数",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "パンテオ",
        "description": "真ん中の敵に巨大なケーキを投げ落とし、範囲魔法ダメージを与える",
        "cooldownSeconds": 28
      },
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 35,
              "2": 38,
              "3": 41,
              "4": 44,
              "5": 47,
              "6": 50,
              "7": 53,
              "8": 56,
              "9": 59,
              "10": 62,
              "11": 65,
              "12": 68
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "クールタイム",
            "valueClass": "クールタイム",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 25
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "HPが50%以下になると、自分にシールドを生成する"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 75
          },
          {
            "valueKind": "火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "炎の呪文を発射して敵に魔法ダメージを与える"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 100
          },
          {
            "valueKind": "2回目の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "跳ね返り先の敵",
            "fixedValue": 150
          },
          {
            "valueKind": "跳ね返り数",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 3
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "燃えるパンを発射して敵に魔法ダメージを与える"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "espi",
    "name": "エスピー",
    "basic": {
      "rarity": 2,
      "personality": "冷静",
      "race": "幽霊",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 520,
              "2": 570,
              "3": 620,
              "4": 670,
              "5": 720,
              "6": 770,
              "7": 820,
              "8": 870,
              "9": 920,
              "10": 970,
              "11": 1020,
              "12": 1070
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 10
          }
        ],
        "skillType": "低学年",
        "skillName": "ゆらゆら炎",
        "description": "幽霊ろうそくを飛ばし、敵に魔法ダメージを2回与え、沈黙を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 200,
              "2": 220,
              "3": 240,
              "4": 260,
              "5": 280,
              "6": 300,
              "7": 320,
              "8": 340,
              "9": 360,
              "10": 380,
              "11": 400,
              "12": 420
            }
          },
          {
            "valueKind": "SP減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "levels": {
              "1": 35.2,
              "2": 39.2,
              "3": 43.2,
              "4": 47.2,
              "5": 51.2,
              "6": 55.2,
              "7": 59.2,
              "8": 63.2,
              "9": 67.2,
              "10": 71.2,
              "11": 75.2,
              "12": 79.2
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "スケキヨで～す！",
        "description": "瞬間移動した後、敵に魔法ダメージを与えSPを減少させる。",
        "cooldownSeconds": 12
      },
      {
        "effects": [
          {
            "valueKind": "1秒ごとのSP回復量追加",
            "valueClass": "固定値",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 12,
              "2": 14,
              "3": 16,
              "4": 18,
              "5": 20,
              "6": 22,
              "7": 24,
              "8": 26,
              "9": 28,
              "10": 30,
              "11": 32,
              "12": 34
            }
          },
          {
            "valueKind": "SP回復量追加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "HPが100%未満になると一定時間、1秒ごとにSP回復量が追加で増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "ろうそくを飛ばし、敵に魔法ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "総魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 125
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率でろうそくを2本飛ばし、敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "epica",
    "name": "エピカ",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 20
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 60,
              "2": 63,
              "3": 66,
              "4": 69,
              "5": 72,
              "6": 75,
              "7": 78,
              "8": 81,
              "9": 84,
              "10": 87,
              "11": 90,
              "12": 93
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "周囲の味方",
            "levels": {
              "1": 8,
              "2": 8.5,
              "3": 9,
              "4": 9.5,
              "5": 10,
              "6": 10.5,
              "7": 11,
              "8": 11.5,
              "9": 12,
              "10": 12.5,
              "11": 13,
              "12": 13.5
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身と周囲の味方",
            "fixedValue": 9
          },
          {
            "valueKind": "強化攻撃化",
            "valueClass": "スキル変更",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "普通攻撃_強化"
          }
        ],
        "skillType": "低学年",
        "skillName": "ドラマチック演出",
        "description": "一定時間、自身と周囲の味方の攻撃速度を増加させ、基本攻撃が強化された普通攻撃に置き換わる。"
      },
      {
        "effects": [
          {
            "valueKind": "召喚獣物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 200,
              "2": 220,
              "3": 240,
              "4": 260,
              "5": 280,
              "6": 300,
              "7": 320,
              "8": 340,
              "9": 360,
              "10": 380,
              "11": 400,
              "12": 420
            }
          },
          {
            "valueKind": "基本攻撃扱い",
            "valueClass": "状態付与",
            "effectType": "攻撃",
            "effectTarget": "召喚獣物理ダメージ"
          },
          {
            "valueKind": "演奏",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "周囲の味方",
            "fixedValue": 25
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "周囲の味方",
            "fixedValue": 8
          }
        ],
        "skillType": "高学年",
        "skillName": "教主様に捧げる",
        "description": "教主を称える英雄譚を演奏する。演奏が終わるまでエピコンがランダムな敵に物理ダメージを与える。この攻撃は基本攻撃のダメージとみなされる。一定時間、周囲の味方の攻撃力が増加する。",
        "cooldownSeconds": 40
      },
      {
        "effects": [
          {
            "valueKind": "会心増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "会心ダメージ増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心と会心ダメージが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "エピコンに敵を攻撃させ、物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵/範囲",
          "fixedValue": 400
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "勇敢なエピコンが一定確率で敵に範囲物理ダメージを与える。"
      }
    ],
    "favoriteCard": {
      "name": "エピカの高貴なる英雄讃歌",
      "kind": "スペル",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "ダメージ量増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "味方全員",
                "fixedValue": 15
              },
              {
                "valueKind": "攻撃速度増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "味方全員",
                "fixedValue": 10
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "味方全員",
                "reference": "味方の使徒が戦闘不能",
                "fixedValue": 15
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "味方全員",
                "reference": "味方の使徒が戦闘不能",
                "fixedValue": 10
              }
            ],
            "skillName": "愛用カード効果",
            "description": "デッキにエピカが編成されている場合、味方全員のダメージ量と攻撃速度を増加させる。味方の使徒が戦闘不能になった時、味方全員の被ダメージ量を減少させる。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "攻撃速度増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "reference": "ウェーブ開始時",
                "fixedValue": 50
              },
              {
                "valueKind": "攻撃速度増加",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "自身",
                "reference": "ウェーブ開始時",
                "fixedValue": 15
              }
            ],
            "skillName": "愛用カード効果",
            "description": "ウェーブ開始時に15秒間エピカの攻撃速度が増加する。"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "erpin",
    "name": "エルフィン",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "妖精",
      "role": "攻撃",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 519.75,
              "2": 574.2,
              "3": 628.65,
              "4": 683.1,
              "5": 737.55,
              "6": 792,
              "7": 846.45,
              "8": 900.9,
              "9": 955.35,
              "10": 1009.8,
              "11": 1064.25,
              "12": 1118.7
            }
          },
          {
            "valueKind": "発射数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "魔弾の暴走",
        "description": "魔力弾を3個発射しランダムな敵に範囲魔法ダメージ"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 500,
            "2": 550,
            "3": 600,
            "4": 650,
            "5": 700,
            "6": 750,
            "7": 800,
            "8": 850,
            "9": 900,
            "10": 950,
            "11": 1000,
            "12": 1050
          }
        },
        "skillType": "高学年",
        "skillName": "どけえぇぇぇ！！！……え？",
        "description": "杖に魔力を込めて突撃し敵に範囲魔法ダメージ",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "SP回復量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "純粋の味方",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃のSP回復量が増加"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵に魔法ダメージ"
      },
      {
        "effects": {
          "valueKind": "SP回復",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "fixedValue": 35
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率でケーキを食べSP回復"
      }
    ],
    "favoriteCard": {
      "name": "エルフィンのアイスケーキ",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "SP回復",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 35
              },
              {
                "valueKind": "スキルダメージ量増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 60
              }
            ],
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "一定確率でアイスケーキを食べSP回復し次のスキルダメージ量を増加"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "魔法攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "エルフィンの魔法攻撃力、会心、会心ダメージが増加"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "elena",
    "name": "エレナ",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "エルフ",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 50
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260
            }
          },
          {
            "valueKind": "感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          },
          {
            "valueKind": "感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "戦術ドローンMK-2",
        "description": "前方にパルス波を放出して、敵に範囲物理ダメージを与え、感電を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 700,
              "2": 770,
              "3": 840,
              "4": 910,
              "5": 980,
              "6": 1050,
              "7": 1120,
              "8": 1190,
              "9": 1260,
              "10": 1330,
              "11": 1400,
              "12": 1470
            }
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 8
          },
          {
            "valueKind": "最後の爆破の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 300,
              "2": 330,
              "3": 360,
              "4": 390,
              "5": 420,
              "6": 450,
              "7": 480,
              "8": 510,
              "9": 540,
              "10": 570,
              "11": 600,
              "12": 630
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "コードネーム：D-CAT",
        "description": "特殊ドローンを送り出した後、パルス波を周囲に放出し、敵に8回範囲物理ダメージを与える。",
        "cooldownSeconds": 28
      },
      {
        "effects": [
          {
            "valueKind": "アメリア編成",
            "valueClass": "条件",
            "effectType": "条件",
            "effectTarget": "自身"
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 26,
              "3": 28,
              "4": 30,
              "5": 32,
              "6": 34,
              "7": 36,
              "8": 38,
              "9": 40,
              "10": 42,
              "11": 44,
              "12": 46
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "アメリアがデッキに編成されている場合、被ダメージ量が減少する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 90
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "最後の一撃の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 60
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "エネルギー弾を発射して敵に物理ダメージを3回与える。最後の一撃はより高いダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 600
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で過充電されたエネルギー弾を発射して敵にダメージを与える。"
      }
    ],
    "favoriteCard": {
      "name": "エレナの強化ドローン",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "物理ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲",
                "levels": {
                  "1": 1260,
                  "2": 1540,
                  "3": 1820,
                  "4": 2100,
                  "5": 2380,
                  "6": 2660,
                  "7": 2940,
                  "8": 3220,
                  "9": 3500,
                  "10": 3780,
                  "11": 4060,
                  "12": 4340
                }
              },
              {
                "valueKind": "物理ダメージ",
                "valueClass": "ヒット数",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲",
                "fixedValue": 8
              },
              {
                "valueKind": "最後の爆破の物理ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲",
                "levels": {
                  "1": 540,
                  "2": 660,
                  "3": 780,
                  "4": 900,
                  "5": 1020,
                  "6": 1140,
                  "7": 1260,
                  "8": 1380,
                  "9": 1500,
                  "10": 1620,
                  "11": 1740,
                  "12": 1860
                }
              },
              {
                "valueKind": "気絶",
                "valueClass": "状態付与",
                "effectType": "デバフ",
                "effectTarget": "敵/範囲"
              },
              {
                "valueKind": "気絶",
                "valueClass": "持続時間",
                "effectType": "デバフ",
                "effectTarget": "敵/範囲",
                "fixedValue": 3
              }
            ],
            "targetSkill": "高学年",
            "skillName": "D-CATパルス波",
            "description": "強化された特殊ドローンを送った後、パルス波を周囲に放出して敵に8回の範囲物理ダメージを与え、気絶させる。"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "攻撃速度増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 100
            },
            "skillName": "愛用Lv3",
            "description": "エレナの攻撃速度が増加する。"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "gabia",
    "name": "ガヴィア",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "精霊",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 200,
      "spRecoveryPerSecond": 50
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 2,
      "defP": 2,
      "defM": 2,
      "crit": 1,
      "critDmg": 1,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "残りHP割合が最も低い味方3名",
            "reference": "最大HP",
            "levels": {
              "1": 25,
              "2": 28,
              "3": 31,
              "4": 34,
              "5": 37,
              "6": 40,
              "7": 43,
              "8": 46,
              "9": 49,
              "10": 52,
              "11": 55,
              "12": 58
            }
          },
          {
            "valueKind": "シールド破壊時ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 220,
              "2": 242,
              "3": 264,
              "4": 286,
              "5": 308,
              "6": 330,
              "7": 352,
              "8": 374,
              "9": 396,
              "10": 418,
              "11": 440,
              "12": 462
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "残りHP割合が最も低い味方3名",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "かえす……よ",
        "description": "残りHP割合が最も低い味方3名にシールドを付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "無敵",
            "valueClass": "状態免疫",
            "effectType": "バフ",
            "effectTarget": "残りHP割合が最も低い味方"
          },
          {
            "valueKind": "無敵",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "残りHP割合が最も低い味方",
            "levels": {
              "1": 4,
              "2": 4.2,
              "3": 4.4,
              "4": 4.6,
              "5": 4.8,
              "6": 5,
              "7": 5.2,
              "8": 5.4,
              "9": 5.6,
              "10": 5.8,
              "11": 6,
              "12": 6.2
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "守って……みせる",
        "description": "残りHP割合が最も低い味方に無敵を付与する。",
        "cooldownSeconds": 23
      },
      {
        "effects": [
          {
            "valueKind": "沈黙",
            "valueClass": "状態免疫",
            "effectType": "バフ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 35,
              "2": 38,
              "3": 41,
              "4": 44,
              "5": 47,
              "6": 50,
              "7": 53,
              "8": 56,
              "9": 59,
              "10": 62,
              "11": 65,
              "12": 68
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "シールド",
            "valueClass": "クールタイム",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 25
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "沈黙の免疫を持つ。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "岩石を突き出し、敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "carren",
    "name": "カレン",
    "basic": {
      "rarity": 2,
      "personality": "活発",
      "race": "妖精",
      "role": "支援",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 2,
      "defP": 2,
      "defM": 2,
      "crit": 3,
      "critDmg": 3,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": {
          "valueKind": "HP回復",
          "valueClass": "倍率",
          "effectType": "回復",
          "effectTarget": "残りHP割合が最も低い味方",
          "reference": "自身の最大HP",
          "levels": {
            "1": 8,
            "2": 8.7,
            "3": 9.4,
            "4": 10.1,
            "5": 10.8,
            "6": 11.5,
            "7": 12.2,
            "8": 12.9,
            "9": 13.6,
            "10": 14.3,
            "11": 15,
            "12": 15.7
          }
        },
        "skillType": "低学年",
        "skillName": "キャロットヒーリング",
        "description": "ニンジンの力で残りHP割合が最も低い味方を回復させる。"
      },
      {
        "effects": [
          {
            "valueKind": "1回あたりのHP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "HPが最も少ない味方3名",
            "reference": "自身の最大HP",
            "levels": {
              "1": 15,
              "2": 16.5,
              "3": 18,
              "4": 19.5,
              "5": 21,
              "6": 22.5,
              "7": 24,
              "8": 25.5,
              "9": 27,
              "10": 28.5,
              "11": 30,
              "12": 31.5
            }
          },
          {
            "valueKind": "対象数",
            "valueClass": "対象数",
            "effectType": "回復",
            "effectTarget": "HPが最も少ない味方",
            "fixedValue": 3
          },
          {
            "valueKind": "回復回数",
            "valueClass": "回数",
            "effectType": "回復",
            "effectTarget": "HPが最も少ない味方3名",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "シェイク・ア・キャロット",
        "description": "HPが最も少ない味方3名のHPを3回回復させる。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "HP治癒量増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "HP治癒量が増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を唱えて敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "canna",
    "name": "カンナ",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "エルフ",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 330,
            "2": 363,
            "3": 396,
            "4": 429,
            "5": 462,
            "6": 495,
            "7": 528,
            "8": 561,
            "9": 594,
            "10": 627,
            "11": 660,
            "12": 693
          }
        },
        "skillType": "低学年",
        "skillName": "でかいのかますぞ！",
        "description": "特殊砲弾を発射して敵に物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 525,
            "2": 570,
            "3": 615,
            "4": 660,
            "5": 705,
            "6": 750,
            "7": 795,
            "8": 840,
            "9": 885,
            "10": 930,
            "11": 975,
            "12": 1020
          }
        },
        "skillType": "高学年",
        "skillName": "ラムボム",
        "description": "追跡する羊爆弾を発射し、敵に物理ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "最大HP増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "強化攻撃確率増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "最大HPが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "攻撃力が最も高い敵と周囲",
          "fixedValue": 125
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "攻撃力が最も高い敵に砲弾を発射して範囲物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "攻撃力が最も高い敵と周囲",
            "fixedValue": 250
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "攻撃力が最も高い敵と周囲"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "攻撃力が最も高い敵と周囲",
            "fixedValue": 1.5
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "攻撃力が最も高い敵に衝撃砲弾を発射して範囲物理ダメージを与え、気絶を付与する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "kidian",
    "name": "ギデオン",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "竜族",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 200,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "1回の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 300,
              "2": 335,
              "3": 370,
              "4": 405,
              "5": 440,
              "6": 475,
              "7": 510,
              "8": 545,
              "9": 580,
              "10": 615,
              "11": 650,
              "12": 685
            }
          },
          {
            "valueKind": "基本攻撃回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "遺物1個ごとの追加攻撃回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 1
          },
          {
            "valueKind": "最大追加攻撃回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "遺物0：総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 600,
              "2": 670,
              "3": 740,
              "4": 810,
              "5": 880,
              "6": 950,
              "7": 1020,
              "8": 1090,
              "9": 1160,
              "10": 1230,
              "11": 1300,
              "12": 1370
            }
          },
          {
            "valueKind": "遺物1：総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 900,
              "2": 1005,
              "3": 1110,
              "4": 1215,
              "5": 1320,
              "6": 1425,
              "7": 1530,
              "8": 1635,
              "9": 1740,
              "10": 1845,
              "11": 1950,
              "12": 2055
            }
          },
          {
            "valueKind": "遺物2：総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 1200,
              "2": 1340,
              "3": 1480,
              "4": 1620,
              "5": 1760,
              "6": 1900,
              "7": 2040,
              "8": 2180,
              "9": 2320,
              "10": 2460,
              "11": 2600,
              "12": 2740
            }
          },
          {
            "valueKind": "遺物3：総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 1500,
              "2": 1675,
              "3": 1850,
              "4": 2025,
              "5": 2200,
              "6": 2375,
              "7": 2550,
              "8": 2725,
              "9": 2900,
              "10": 3075,
              "11": 3250,
              "12": 3425
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "アウトサイドカット",
        "description": "敵に突進し、物理ダメージを2回与える。遺物を1個装着するごとに攻撃回数が増加する。"
      },
      {
        "effects": [
          {
            "valueKind": "1回の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "残りHP割合が最も低い敵の周囲",
            "levels": {
              "1": 200,
              "2": 215,
              "3": 230,
              "4": 245,
              "5": 260,
              "6": 275,
              "7": 290,
              "8": 305,
              "9": 320,
              "10": 335,
              "11": 350,
              "12": 365
            }
          },
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "残りHP割合が最も低い敵の周囲",
            "levels": {
              "1": 600,
              "2": 645,
              "3": 690,
              "4": 735,
              "5": 780,
              "6": 825,
              "7": 870,
              "8": 915,
              "9": 960,
              "10": 1005,
              "11": 1050,
              "12": 1095
            }
          },
          {
            "valueKind": "攻撃回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "残りHP割合が最も低い敵の周囲",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "シャドウダイブ",
        "description": "影に隠れた後、残りHP割合が最も低い敵の付近に現れ、範囲物理ダメージを3回与える。",
        "cooldownSeconds": 24
      },
      {
        "effects": [
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 28,
              "3": 32,
              "4": 36,
              "5": 40,
              "6": 44,
              "7": 48,
              "8": 52,
              "9": 56,
              "10": 60,
              "11": 64,
              "12": 68
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "スキルを使用すると攻撃力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "短剣を振るい、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "kyarot",
    "name": "キャロット",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "妖精",
      "role": "支援",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 4,
      "atkP": 0,
      "atkM": 1,
      "defP": 4,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "範囲内の味方",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21,
              "13": 22,
              "14": 23,
              "15": 24
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "範囲内の味方",
            "fixedValue": 8
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "範囲内の味方",
            "levels": {
              "1": 25,
              "2": 26,
              "3": 27,
              "4": 28,
              "5": 29,
              "6": 30,
              "7": 31,
              "8": 32,
              "9": 33,
              "10": 34,
              "11": 35,
              "12": 36,
              "13": 37,
              "14": 38,
              "15": 39
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "範囲内の味方",
            "fixedValue": 8
          }
        ],
        "skillType": "低学年",
        "skillName": "炭酸水液発射",
        "description": "サトウキビの樹液を振って発射する。発射された樹液は、しばらくして自身に落ちる。樹液は、範囲内の味方の攻撃力を増加させ、被ダメージ量を減少させる。"
      },
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "範囲内の味方",
            "reference": "最大HP",
            "fixedValue": 6
          },
          {
            "valueKind": "HP回復",
            "valueClass": "回数",
            "effectType": "回復",
            "effectTarget": "範囲内の味方",
            "fixedValue": 12
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 40,
              "2": 44,
              "3": 48,
              "4": 52,
              "5": 56,
              "6": 60,
              "7": 64,
              "8": 68,
              "9": 72,
              "10": 76,
              "11": 80,
              "12": 84,
              "13": 88,
              "14": 92,
              "15": 96
            }
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 12
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "真ん中にいる敵"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "真ん中にいる敵",
            "fixedValue": 8
          }
        ],
        "skillType": "高学年",
        "skillName": "樹液ポンプ発射！",
        "description": "味方と敵にそれぞれサトウキビの樹液を12回ずつ発射する。味方に発射された樹液は範囲内の味方のHPを回復させる。敵に発射された樹液は範囲内の敵に範囲魔法ダメージを与える。最後に発射された樹液は真ん中にいる敵に範囲魔法ダメージを与え、沈黙を付与する。",
        "cooldownSeconds": 32
      },
      {
        "effects": [
          {
            "valueKind": "SP回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "自身と周囲の味方",
            "levels": {
              "1": 1,
              "2": 2,
              "3": 3,
              "4": 4,
              "5": 5,
              "6": 6,
              "7": 7,
              "8": 8,
              "9": 9,
              "10": 10,
              "11": 11,
              "12": 12,
              "13": 13,
              "14": 14,
              "15": 15
            }
          },
          {
            "valueKind": "SP回復周期",
            "valueClass": "周期",
            "effectType": "回復",
            "effectTarget": "自身と周囲の味方",
            "fixedValue": 2
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "2秒ごとに自身と周囲の味方のSPを回復する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 85
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "サトウキビを投げつけて敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "発動攻撃回数",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 4
          },
          {
            "valueKind": "SP回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "周囲の味方",
            "fixedValue": 50
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "4回目の攻撃の代わりに、魔法成長肥料を撒いて周囲の味方のSPを回復する。"
      }
    ],
    "favoriteCard": {
      "name": "キャロットのサトウキビ",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "対象追加",
                "valueClass": "対象数",
                "effectType": "スキル変更",
                "effectTarget": "自身と最もHP割合が低い味方",
                "reference": "低学年",
                "fixedValue": 2
              },
              {
                "valueKind": "攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "levels": {
                  "1": 20,
                  "2": 21,
                  "3": 22,
                  "4": 23,
                  "5": 24,
                  "6": 25,
                  "7": 26,
                  "8": 27,
                  "9": 28,
                  "10": 29,
                  "11": 30,
                  "12": 31,
                  "13": 32,
                  "14": 33,
                  "15": 34
                }
              },
              {
                "valueKind": "攻撃力増加",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "fixedValue": 8
              },
              {
                "valueKind": "HP回復量増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "fixedValue": 20
              },
              {
                "valueKind": "HP回復量増加",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "fixedValue": 8
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "levels": {
                  "1": 31,
                  "2": 32,
                  "3": 33,
                  "4": 34,
                  "5": 35,
                  "6": 36,
                  "7": 37,
                  "8": 38,
                  "9": 39,
                  "10": 40,
                  "11": 41,
                  "12": 42,
                  "13": 43,
                  "14": 44,
                  "15": 45
                }
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "fixedValue": 8
              }
            ],
            "targetSkill": "低学年",
            "skillName": "急成長の樹液発射",
            "description": "サトウキビの樹液を振って発射する。発射された樹液は、しばらくして自身と最もHP割合が低い味方に落ちる。樹液は範囲内の味方の攻撃力、HP回復量を増加させ、被ダメージ量を減少させる。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "最大HP増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "物理防御力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "魔法防御力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用カード効果",
            "description": "キャロットのHP、物理防御力、魔法防御力が増加する。"
          }
        ]
      }
    },
    "aside": {
      "name": "おひさま",
      "levels": {
        "1": {
          "name": "すくすく育って！",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "ニンジンの鮮度維持",
          "stats": [],
          "effects": [
            {
              "valueKind": "シールド",
              "valueClass": "倍率",
              "effectType": "シールド",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃_強化",
              "reference": "最大HP",
              "fixedValue": 30
            },
            {
              "valueKind": "シールド",
              "valueClass": "持続時間",
              "effectType": "シールド",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 5
            },
            {
              "valueKind": "SP回復",
              "valueClass": "固定値",
              "effectType": "回復",
              "effectTarget": "自身",
              "targetSkill": "シールド破壊時",
              "fixedValue": 45
            }
          ],
          "description": "強化攻撃にシールドが追加される。シールドが破壊されると、追加でSPを回復する。"
        },
        "3": {
          "name": "アイスニンジン",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "後列の味方",
              "fixedValue": 19.5
            }
          ],
          "description": "後列の味方が敵に与えるダメージ量を増加させる。"
        }
      }
    },
    "board": {
      "race": "妖精",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "kyuri",
    "name": "キュウイ",
    "basic": {
      "rarity": 1,
      "personality": "純粋",
      "race": "妖精",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 2,
      "defP": 2,
      "defM": 2,
      "crit": 3,
      "critDmg": 3,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": {
          "valueKind": "HP回復",
          "valueClass": "倍率",
          "effectType": "回復",
          "effectTarget": "残りHP割合が最も低い味方",
          "reference": "自身の最大HP",
          "levels": {
            "1": 5,
            "2": 6.3,
            "3": 7.5,
            "4": 8.8,
            "5": 10,
            "6": 11.3,
            "7": 12.5,
            "8": 13.8,
            "9": 15,
            "10": 16.3,
            "11": 17.5,
            "12": 18.8
          }
        },
        "skillType": "低学年",
        "skillName": "キュウリ投げ",
        "description": "キュウリの力で残りHP割合が最も低い味方を回復する。"
      },
      {
        "effects": {
          "valueKind": "HP回復",
          "valueClass": "倍率",
          "effectType": "回復",
          "effectTarget": "残りHP割合が最も低い味方",
          "reference": "自身の最大HP",
          "levels": {
            "1": 10,
            "2": 12,
            "3": 14,
            "4": 16,
            "5": 18,
            "6": 20,
            "7": 22,
            "8": 24,
            "9": 26,
            "10": 28,
            "11": 30,
            "12": 32
          }
        },
        "skillType": "高学年",
        "skillName": "教主の祝福-キュウイ",
        "description": "教主の力を借り、残りHP割合が最も低い味方を回復する。",
        "cooldownSeconds": 16
      },
      {
        "effects": {
          "valueKind": "HP治癒量増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 30,
            "2": 33,
            "3": 36,
            "4": 39,
            "5": 42,
            "6": 45,
            "7": 48,
            "8": 51,
            "9": 54,
            "10": 57,
            "11": 60,
            "12": 63
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "HP治癒量が増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を唱えて敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "chloe",
    "name": "クロエ",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "狂気",
      "race": "妖精",
      "role": "守備",
      "position": "前列",
      "attackType": "魔法",
      "initialSp": 200,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 5,
      "atkP": 0,
      "atkM": 2,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 5,
      "critDmgRes": 5
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "ぬいぐるみの意志",
            "valueClass": "持続時間",
            "effectType": "スキル変更",
            "effectTarget": "自身",
            "levels": {
              "1": 8,
              "2": 8.4,
              "3": 8.8,
              "4": 9.2,
              "5": 9.6,
              "6": 10,
              "7": 10.4,
              "8": 10.8,
              "9": 11.2,
              "10": 11.6,
              "11": 12,
              "12": 12.4
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 40,
              "2": 44,
              "3": 48,
              "4": 52,
              "5": 56,
              "6": 60,
              "7": 64,
              "8": 68,
              "9": 72,
              "10": 76,
              "11": 80,
              "12": 84
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "普通攻撃ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 7
          },
          {
            "valueKind": "普通攻撃ダメージ量増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10
          },
          {
            "valueKind": "普通攻撃ダメージ量増加",
            "valueClass": "最大スタック",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 9
          }
        ],
        "skillType": "低学年",
        "skillName": "メリごラウンド！",
        "description": "セバスチャンにまたがって一定時間ぬいぐるみの意志を発動し、自身にシールドを生成する。基本攻撃を行うごとに一定時間自身の普通攻撃のダメージ量が増加する。"
      },
      {
        "effects": [
          {
            "valueKind": "プリチーセバスチャン召喚",
            "valueClass": "対象数",
            "effectType": "召喚",
            "effectTarget": "自身",
            "fixedValue": 7
          },
          {
            "valueKind": "1体あたりの魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 160,
              "2": 176,
              "3": 192,
              "4": 208,
              "5": 224,
              "6": 240,
              "7": 256,
              "8": 272,
              "9": 288,
              "10": 304,
              "11": 320,
              "12": 336
            }
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          }
        ],
        "skillType": "高学年",
        "skillName": "プリチーセバスチャン",
        "description": "プリチーセバスチャンを7体召喚する。プリチーセバスチャンは敵にぶつかると爆発して範囲魔法ダメージを与え、ノックバックさせる。",
        "cooldownSeconds": 50
      },
      {
        "effects": {
          "valueKind": "普通攻撃の被ダメージ量減少",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 24,
            "2": 26,
            "3": 28,
            "4": 30,
            "5": 32,
            "6": 34,
            "7": 36,
            "8": 38,
            "9": 40,
            "10": 42,
            "11": 44,
            "12": 46
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "普通攻撃の被ダメージ量が減少する。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 125
          },
          {
            "valueKind": "ぬいぐるみの意志の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 192
          },
          {
            "valueKind": "ぬいぐるみの意志の魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "ぬいぐるみの意志の最後の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 288
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "腕を振って敵に魔法ダメージを与える。ぬいぐるみの意志発動時は効果が変更される。"
      },
      {
        "effects": [
          {
            "valueKind": "発動間隔",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 300
          },
          {
            "valueKind": "挑発",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          },
          {
            "valueKind": "挑発",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 2
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "3回攻撃するごとに両腕を叩きつけて敵を挑発し、範囲魔法ダメージを与え、ノックバックさせる。ぬいぐるみの意志発動中は強化攻撃を使用できない。"
      }
    ],
    "favoriteCard": {
      "name": "クロエの万能裁縫箱",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "普通攻撃の被ダメージ量減少",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "levels": {
                  "1": 24,
                  "2": 26,
                  "3": 28,
                  "4": 30,
                  "5": 32,
                  "6": 34,
                  "7": 36,
                  "8": 38,
                  "9": 40,
                  "10": 42,
                  "11": 44,
                  "12": 46,
                  "13": 48,
                  "14": 50,
                  "15": 52
                }
              },
              {
                "valueKind": "周期",
                "valueClass": "周期",
                "effectType": "攻撃",
                "effectTarget": "敵/周囲",
                "fixedValue": 2
              },
              {
                "valueKind": "魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/周囲",
                "fixedValue": 230
              },
              {
                "valueKind": "糸爆弾",
                "valueClass": "状態付与",
                "effectType": "デバフ",
                "effectTarget": "敵/周囲"
              },
              {
                "valueKind": "糸爆弾",
                "valueClass": "最大スタック",
                "effectType": "デバフ",
                "effectTarget": "敵/周囲",
                "fixedValue": 5
              },
              {
                "valueKind": "糸爆弾魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/周囲",
                "fixedValue": 346
              }
            ],
            "targetSkill": "パッシブ",
            "skillName": "パッシブスキル",
            "description": "普通攻撃の被ダメージ量が減少する。ぬいぐるみの意志発動中、2秒ごとに周囲の敵に魔法ダメージを与える。ダメージを受けた敵は糸爆弾が付与される。糸爆弾は最大5つまでスタックする。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "魔法攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "クロエの魔法攻撃力、会心抵抗、会心ダメージ抵抗が増加する。"
          }
        ]
      }
    },
    "aside": {
      "name": "ファッションカバークロエ",
      "levels": {
        "1": {
          "name": "セレブリティ・クロエ",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "F/W クロエルック",
          "stats": [],
          "effects": [
            {
              "valueKind": "気絶",
              "valueClass": "状態免疫",
              "effectType": "バフ",
              "effectTarget": "自身"
            },
            {
              "valueKind": "変異",
              "valueClass": "状態免疫",
              "effectType": "バフ",
              "effectTarget": "自身"
            },
            {
              "valueKind": "直接ダメージ被弾回数",
              "valueClass": "回数",
              "effectType": "条件",
              "effectTarget": "自身",
              "fixedValue": 14
            },
            {
              "valueKind": "挑発",
              "valueClass": "状態付与",
              "effectType": "デバフ",
              "effectTarget": "敵/周囲"
            },
            {
              "valueKind": "挑発",
              "valueClass": "持続時間",
              "effectType": "デバフ",
              "effectTarget": "敵/周囲",
              "fixedValue": 3
            },
            {
              "valueKind": "魔法ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "effectTarget": "敵/周囲",
              "fixedValue": 300
            },
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 30
            },
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 7
            },
            {
              "valueKind": "HP回復",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "自身",
              "reference": "最大HP",
              "fixedValue": 1
            },
            {
              "valueKind": "HP回復",
              "valueClass": "周期",
              "effectType": "回復",
              "effectTarget": "自身",
              "fixedValue": 1
            },
            {
              "valueKind": "HP回復",
              "valueClass": "持続時間",
              "effectType": "回復",
              "effectTarget": "自身",
              "fixedValue": 7
            }
          ],
          "description": "気絶と変異の免疫を持つ。直接ダメージによって14回ダメージを受けると、周囲の敵を挑発して範囲魔法ダメージを与える。ぬいぐるみの意志が発動すると、一定時間、攻撃速度が増加し、1秒ごとにHPが回復する。"
        },
        "3": {
          "name": "ランウェイオープニング",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "魔法防御力",
              "increaseP": 4
            },
            {
              "statApplyTo": "全体",
              "statName": "会心抵抗",
              "increaseP": 4
            }
          ],
          "effects": [
            {
              "valueKind": "与ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "fixedValue": 19.5
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "fixedValue": 8.8
            }
          ],
          "description": "前列の味方の敵への与ダメージ量を増加させ、前列味方の敵からの被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "妖精",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "kommy",
    "name": "コミー",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "獣人",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 5,
      "atkP": 2,
      "atkM": 0,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復持続",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 12.5,
              "2": 13.25,
              "3": 14,
              "4": 14.75,
              "5": 15.5,
              "6": 16.25,
              "7": 17,
              "8": 17.75,
              "9": 18.5,
              "10": 19.25,
              "11": 20,
              "12": 20.75
            }
          },
          {
            "valueKind": "HP回復持続",
            "valueClass": "持続時間",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 4
          },
          {
            "valueKind": "デバフ",
            "valueClass": "状態免疫",
            "effectType": "バフ",
            "effectTarget": "自身"
          }
        ],
        "skillType": "低学年",
        "skillName": "ふかふかタイム",
        "description": "睡眠中、1秒ごとにコミーのHPが回復する。眠っている間はデバフに免疫を持つ。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 450,
              "2": 495,
              "3": 540,
              "4": 585,
              "5": 630,
              "6": 675,
              "7": 720,
              "8": 765,
              "9": 810,
              "10": 855,
              "11": 900,
              "12": 945
            }
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "与ダメージ量",
            "levels": {
              "1": 30,
              "2": 33,
              "3": 36,
              "4": 39,
              "5": 42,
              "6": 45,
              "7": 48,
              "8": 51,
              "9": 54,
              "10": 57,
              "11": 60,
              "12": 63
            }
          },
          {
            "valueKind": "与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 50,
              "2": 54,
              "3": 58,
              "4": 62,
              "5": 66,
              "6": 70,
              "7": 74,
              "8": 78,
              "9": 82,
              "10": 86,
              "11": 90,
              "12": 94
            }
          },
          {
            "valueKind": "巨大化",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 12
          }
        ],
        "skillType": "高学年",
        "skillName": "エルフ族特製アニマル缶",
        "description": "着地時に衝撃波を起こして範囲物理ダメージを与え、HPを回復する。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "最大HP増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "最大HPが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 150
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵を枕で殴りつけて物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 300
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 1.5
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で枕を強く殴りつけて敵に物理ダメージを与え、気絶を付与する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "sari",
    "name": "サリー",
    "basic": {
      "rarity": 2,
      "personality": "純粋",
      "race": "幽霊",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "指定範囲内で最も遠い敵の周囲",
          "levels": {
            "1": 180,
            "2": 200,
            "3": 220,
            "4": 240,
            "5": 260,
            "6": 280,
            "7": 300,
            "8": 320,
            "9": 340,
            "10": 360,
            "11": 380,
            "12": 400
          }
        },
        "skillType": "低学年",
        "skillName": "いたずらの笑み",
        "description": "指定範囲内で最も遠い敵の付近に素早く移動した後、鎌を振り回して物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 400,
              "2": 440,
              "3": 480,
              "4": 520,
              "5": 560,
              "6": 600,
              "7": 640,
              "8": 680,
              "9": 720,
              "10": 760,
              "11": 800,
              "12": 840
            }
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "超ポジティブトリック",
        "description": "敵に鎌で物理ダメージを与えて沈黙を付与する。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "会心増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 70
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "鎌を振り回して、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "sylla",
    "name": "シーラ",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "精霊",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内で最も遠い敵",
            "levels": {
              "1": 500,
              "2": 565,
              "3": 630,
              "4": 695,
              "5": 760,
              "6": 825,
              "7": 890,
              "8": 955,
              "9": 1020,
              "10": 1085,
              "11": 1150,
              "12": 1215
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内で最も遠い敵",
            "fixedValue": 5
          }
        ],
        "skillType": "低学年",
        "skillName": "ラピッドアロー",
        "description": "矢を目に止まらない速さで5回発射し、指定範囲内で最も遠い敵に物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "指定範囲内で最も遠い敵",
          "levels": {
            "1": 840,
            "2": 930,
            "3": 1020,
            "4": 1110,
            "5": 1200,
            "6": 1290,
            "7": 1380,
            "8": 1470,
            "9": 1560,
            "10": 1650,
            "11": 1740,
            "12": 1830
          }
        },
        "skillType": "高学年",
        "skillName": "ヘクトパスカルスイング！",
        "description": "風の精霊を飛ばして指定範囲内で最も遠い敵に物理ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "基本攻撃ダメージ量増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 30,
            "2": 32,
            "3": 34,
            "4": 36,
            "5": 38,
            "6": 40,
            "7": 42,
            "8": 44,
            "9": 46,
            "10": 48,
            "11": 50,
            "12": 52
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃のダメージ量が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "指定範囲内で最も遠い敵",
          "fixedValue": 150
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "矢を発射し、指定範囲内で最も遠い敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "shaydi",
    "name": "シェイディ",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "幽霊",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 25
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "最初の打撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "射程距離内で最も後ろにいる敵",
            "levels": {
              "1": 420,
              "2": 468,
              "3": 516,
              "4": 564,
              "5": 612,
              "6": 660,
              "7": 708,
              "8": 756,
              "9": 804,
              "10": 852,
              "11": 900,
              "12": 948
            }
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "射程距離内で最も後ろにいる敵",
            "levels": {
              "1": 630,
              "2": 702,
              "3": 774,
              "4": 846,
              "5": 918,
              "6": 990,
              "7": 1062,
              "8": 1134,
              "9": 1206,
              "10": 1278,
              "11": 1350,
              "12": 1422
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "射程距離内で最も後ろにいる敵",
            "fixedValue": 13
          },
          {
            "valueKind": "SP減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "射程距離内で最も後ろにいる敵",
            "levels": {
              "1": 15,
              "2": 16.5,
              "3": 18,
              "4": 19.5,
              "5": 21,
              "6": 22.5,
              "7": 24,
              "8": 25.5,
              "9": 27,
              "10": 28.5,
              "11": 30,
              "12": 31.5
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "明かり消してごらん？",
        "description": "瞬間移動して射程距離内で最も後ろにいる敵に物理ダメージを13回与え、SPを減少させる。最初の斬撃はより高いダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 701.4,
              "2": 771.54,
              "3": 841.68,
              "4": 911.82,
              "5": 981.96,
              "6": 1052.1,
              "7": 1122.24,
              "8": 1192.38,
              "9": 1262.52,
              "10": 1332.66,
              "11": 1402.8,
              "12": 1472.94
            }
          },
          {
            "valueKind": "攻撃回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "fixedValue": 6
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 6,
              "2": 6.5,
              "3": 7,
              "4": 7.5,
              "5": 8,
              "6": 8.5,
              "7": 9,
              "8": 9.5,
              "9": 10,
              "10": 10.5,
              "11": 11,
              "12": 11.5
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "タイム・オブ・シェイディ",
        "description": "次元を移動しながらランダムな敵に物理ダメージを6回与え、沈黙を付与する。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "SP回復",
          "valueClass": "固定値",
          "effectType": "回復",
          "effectTarget": "自身",
          "levels": {
            "1": 6,
            "2": 7,
            "3": 8,
            "4": 9,
            "5": 10,
            "6": 11,
            "7": 12,
            "8": 13,
            "9": 14,
            "10": 15,
            "11": 16,
            "12": 17
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "直接ダメージを受けるとSPが回復する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 175
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "鎖鎌を振り回して、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "jade",
    "name": "ジェイド",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "竜族",
      "role": "攻撃",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 25
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 200,
              "2": 225,
              "3": 250,
              "4": 275,
              "5": 300,
              "6": 325,
              "7": 350,
              "8": 375,
              "9": 400,
              "10": 425,
              "11": 450,
              "12": 475
            }
          },
          {
            "valueKind": "翡翠玉1～2スタック時ダメージ倍率",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 1.2
          },
          {
            "valueKind": "翡翠玉3スタック時ダメージ倍率",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 1.5
          }
        ],
        "skillType": "低学年",
        "skillName": "ゲルマニウム翡翠電気毛布",
        "description": "翡翠玉のスタック数が多いほど、範囲魔法の与ダメージが増加する。最大スタック状態で発動すると翡翠玉を全て失う。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 4
          },
          {
            "valueKind": "翡翠玉獲得",
            "valueClass": "回数",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "SP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 15
          }
        ],
        "skillType": "高学年",
        "skillName": "ゲルマニウム覚醒",
        "description": "地面を割って鉱物を噴出させ、敵に4回範囲魔法ダメージを与え、翡翠玉を3スタック獲得し、SPを回復する。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "魔法攻撃力増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 19,
            "2": 20,
            "3": 21,
            "4": 22,
            "5": 23,
            "6": 24,
            "7": 25,
            "8": 26,
            "9": 27,
            "10": 28,
            "11": 29,
            "12": 30
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "翡翠玉が3スタックの時に強化攻撃で翡翠を摂取すると、魔法攻撃力が増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を唱えて敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "翡翠玉獲得",
            "valueClass": "回数",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 1
          },
          {
            "valueKind": "翡翠玉最大スタック",
            "valueClass": "回数",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "fixedValue": 30
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で翡翠を摂取し、翡翠玉を1スタック獲得する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "xion",
    "name": "シオン・ザ・DB",
    "basic": {
      "rarity": 3,
      "eldain": "不死者",
      "personality": "憂鬱",
      "race": "幽霊",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 50,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 4,
      "atkP": 5,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "1回あたりの物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/最も遠い敵",
            "levels": {
              "1": 200,
              "2": 215,
              "3": 230,
              "4": 245,
              "5": 260,
              "6": 275,
              "7": 290,
              "8": 305,
              "9": 320,
              "10": 335,
              "11": 350,
              "12": 365
            }
          },
          {
            "valueKind": "魔弾獲得",
            "valueClass": "固定値",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 2
          },
          {
            "valueKind": "魔弾最大数",
            "valueClass": "固定値",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "魔弾の物理ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 5
          }
        ],
        "skillType": "低学年",
        "skillName": "魔・弾・の・射・手★",
        "description": "闇の力を集めて魔弾を2個獲得し、指定範囲内で最も遠い敵に物理ダメージを与える。攻撃時に魔弾を消費し、魔弾の数量に応じて攻撃回数が増加する。魔弾は最大6個まで獲得可能。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲/最も遠い敵",
            "levels": {
              "1": 200,
              "2": 215,
              "3": 230,
              "4": 245,
              "5": 260,
              "6": 275,
              "7": 290,
              "8": 305,
              "9": 320,
              "10": 335,
              "11": 350,
              "12": 365
            }
          },
          {
            "valueKind": "魔弾獲得",
            "valueClass": "固定値",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 1
          },
          {
            "valueKind": "魔弾最大数",
            "valueClass": "固定値",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "魔弾の物理ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 5
          }
        ],
        "skillType": "高学年",
        "skillName": "アポカリプス★ゼロ",
        "description": "指定範囲内で最も遠い敵に範囲物理ダメージを与え、魔弾を1個獲得する。魔弾は最大6個まで獲得可能。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "物理攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 23,
              "3": 26,
              "4": 29,
              "5": 32,
              "6": 35,
              "7": 38,
              "8": 41,
              "9": 44,
              "10": 47,
              "11": 50,
              "12": 53
            }
          },
          {
            "valueKind": "物理攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "魔弾獲得時に一定時間、物理攻撃力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵/最も遠い敵",
          "fixedValue": 200
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "弾丸を発射し、指定範囲内で最も遠い敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "発動間隔",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 350
          },
          {
            "valueKind": "目隠し",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          },
          {
            "valueKind": "目隠し",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 6
          },
          {
            "valueKind": "魔弾獲得",
            "valueClass": "固定値",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 1
          },
          {
            "valueKind": "魔弾の物理ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 5
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "3回攻撃するごとに敵に範囲物理ダメージと目隠しを付与し、魔弾を1個獲得する。魔弾は最大6個まで獲得可能。"
      }
    ],
    "favoriteCard": {
      "name": "シオンの黒マント",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": {
              "valueKind": "物理ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "effectTarget": "敵/最も遠い敵",
              "fixedValue": 200
            },
            "targetSkill": "普通攻撃_基本",
            "skillName": "基本",
            "description": "弾丸を発射し、指定された射程距離内で最も離れている敵に物理ダメージを与える。一定確率で強化の弾丸を発射し、より高い物理ダメージを与える。"
          },
          {
            "effects": {
              "valueKind": "強化の弾丸物理ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "effectTarget": "敵/最も遠い敵",
              "fixedValue": 444
            },
            "targetSkill": "普通攻撃_強化",
            "skillName": "基本",
            "description": "弾丸を発射し、指定された射程距離内で最も離れている敵に物理ダメージを与える。一定確率で強化の弾丸を発射し、より高い物理ダメージを与える。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "物理攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "シオンの物理攻撃力、会心、会心ダメージが増加する。"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "sist",
    "name": "シスト",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "竜族",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 200,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 5,
      "critDmg": 5,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 15,
              "2": 17,
              "3": 19,
              "4": 21,
              "5": 23,
              "6": 25,
              "7": 27,
              "8": 29,
              "9": 31,
              "10": 33,
              "11": 35,
              "12": 37,
              "13": 39,
              "14": 41,
              "15": 43
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 15,
              "2": 17,
              "3": 19,
              "4": 21,
              "5": 23,
              "6": 25,
              "7": 27,
              "8": 29,
              "9": 31,
              "10": 33,
              "11": 35,
              "12": 37,
              "13": 39,
              "14": 41,
              "15": 43
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10
          }
        ],
        "skillType": "低学年",
        "skillName": "マウントガン",
        "description": "マウントガンを発射すると、自身の攻撃力と攻撃速度が増加する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/残りHP割合が最も低い敵",
            "levels": {
              "1": "600～1000",
              "2": "630～1150",
              "3": "660～1300",
              "4": "690～1450",
              "5": "720～1600",
              "6": "750～1750",
              "7": "780～1900",
              "8": "810～2050",
              "9": "840～2200",
              "10": "870～2350",
              "11": "900～2500",
              "12": "930～2650",
              "13": "960～2800",
              "14": "990～2950",
              "15": "1020～3100"
            }
          },
          {
            "valueKind": "最大追加発動回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "自身",
            "fixedValue": 2
          }
        ],
        "skillType": "高学年",
        "skillName": "弾丸のお届け物で～す",
        "description": "弾丸を発射し、残りHP割合が最も低い敵に物理ダメージを与える。敵を撃破すると、スキルを追加で使用する。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "クールタイム減少",
          "valueClass": "固定値",
          "effectType": "バフ",
          "effectTarget": "自身",
          "fixedValue": "秒",
          "levels": {
            "1": 1,
            "2": 1.1,
            "3": 1.2,
            "4": 1.3,
            "5": 1.4,
            "6": 1.5,
            "7": 1.6,
            "8": 1.7,
            "9": 1.8,
            "10": 1.9,
            "11": 2,
            "12": 2.1,
            "13": 2.2,
            "14": 2.3,
            "15": 2.4
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃が命中すると、高学年スキルのクールタイムが減少する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 110
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵にガラクタを投げつけてダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "ブランドバック",
      "levels": {
        "1": {
          "name": "商売の天才シスト",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "友情をかけた勝負",
          "stats": [],
          "effects": [
            {
              "valueKind": "ランダムな味方の使徒",
              "valueClass": "対象数",
              "effectType": "バフ",
              "effectTarget": "味方/アタッカー",
              "targetSkill": "低学年スキル",
              "fixedValue": 2
            },
            {
              "valueKind": "攻撃力増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/アタッカー",
              "targetSkill": "低学年スキル",
              "reference": "低学年スキルのレベルに依存"
            },
            {
              "valueKind": "攻撃力増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "味方/アタッカー",
              "targetSkill": "低学年スキル",
              "fixedValue": 10
            },
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/アタッカー",
              "targetSkill": "低学年スキル",
              "reference": "低学年スキルのレベルに依存"
            },
            {
              "valueKind": "乱数最大固定",
              "valueClass": "条件",
              "effectType": "スキル変更",
              "effectTarget": "自身",
              "targetSkill": "高学年スキル"
            }
          ],
          "description": "低学年スキルのバフを獲得時、ランダムな味方アタッカー使徒の攻撃力と攻撃速度を増加させる。アタッカー使徒がいない場合は、ランダムな味方に適用される。高学年スキルは、常に最大物理ダメージ量を与える。"
        },
        "3": {
          "name": "味方ターゲット商品",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "物理攻撃力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "会心増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 6
            },
            {
              "valueKind": "会心ダメージ増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 6
            }
          ],
          "description": "味方全員の会心と会心ダメージを増加させる。"
        }
      }
    },
    "board": {
      "race": "竜族",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "shoupan",
    "name": "シュパン",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "妖精",
      "role": "支援",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 100,
      "spRecoveryPerSecond": 44
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 1,
      "defP": 4,
      "defM": 4,
      "crit": 1,
      "critDmg": 1,
      "critRes": 5,
      "critDmgRes": 5
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "周囲の味方",
            "reference": "対象の最大HP",
            "fixedValue": 20
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "周囲の味方",
            "reference": "自分の攻撃力",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          },
          {
            "valueKind": "回数",
            "valueClass": "回数",
            "effectType": "回復",
            "effectTarget": "周囲の味方",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "無責任な配達人",
        "description": "郵便物を落とすごとに周囲の味方を回復"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 500,
              "2": 550,
              "3": 600,
              "4": 650,
              "5": 700,
              "6": 750,
              "7": 800,
              "8": 850,
              "9": 900,
              "10": 950,
              "11": 1000,
              "12": 1050
            }
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 10
          },
          {
            "valueKind": "防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方",
            "levels": {
              "1": 20,
              "2": 21,
              "3": 22,
              "4": 23,
              "5": 24,
              "6": 25,
              "7": 26,
              "8": 27,
              "9": 28,
              "10": 29,
              "11": 30,
              "12": 31
            }
          },
          {
            "valueKind": "防御力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方",
            "fixedValue": 10
          }
        ],
        "skillType": "高学年",
        "skillName": "シュパン配送",
        "description": "疾走しながら郵便物をばらまき敵に範囲魔法ダメージ",
        "cooldownSeconds": 36
      },
      {
        "effects": [
          {
            "valueKind": "被スキルダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 26,
              "3": 28,
              "4": 30,
              "5": 32,
              "6": 34,
              "7": 36,
              "8": 38,
              "9": 40,
              "10": 42,
              "11": 44,
              "12": 46
            }
          },
          {
            "valueKind": "移動速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 50
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "敵のスキル攻撃の被ダメージ量が減少"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 55
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "郵便物を飛ばして魔法ダメージ"
      },
      {
        "effects": {
          "valueKind": "HP回復",
          "valueClass": "倍率",
          "effectType": "回復",
          "effectTarget": "残りHP割合が最も低い味方",
          "reference": "対象の最大HP",
          "fixedValue": 15
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "2回目の攻撃の代わりに残りHP割合が低い味方を回復"
      }
    ],
    "favoriteCard": {
      "name": "シュパンの魔法リュック",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "HP回復",
                "valueClass": "倍率",
                "effectType": "回復",
                "effectTarget": "残りHP割合が最も低い味方",
                "reference": "対象の最大HP",
                "fixedValue": 15
              },
              {
                "valueKind": "シールド",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "回復させた味方",
                "reference": "最大HP",
                "fixedValue": 30
              }
            ],
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "強化攻撃で味方を回復しシールド付与と防御力増加"
          },
          {
            "effects": {
              "valueKind": "シールド",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "回復させた味方",
              "fixedValue": 6
            },
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "シールド持続時間"
          },
          {
            "effects": {
              "valueKind": "防御力増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "回復させた味方",
              "fixedValue": 36
            },
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "防御力増加"
          },
          {
            "effects": {
              "valueKind": "防御力増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "回復させた味方",
              "fixedValue": 6
            },
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "防御力増加の持続時間"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "クールタイム減少",
              "valueClass": "固定値",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 5
            },
            "targetSkill": "高学年",
            "skillName": "シュパン配送",
            "description": "高学年スキルのクールタイムが減少"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "jubee",
    "name": "ジュビー",
    "basic": {
      "rarity": 2,
      "personality": "活発",
      "race": "精霊",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "召喚獣物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "HP割合が最も低い敵",
            "levels": {
              "1": 40,
              "2": 43,
              "3": 46,
              "4": 49,
              "5": 52,
              "6": 55,
              "7": 58,
              "8": 61,
              "9": 64,
              "10": 67,
              "11": 70,
              "12": 73
            }
          },
          {
            "valueKind": "召喚獣スキル物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "HP割合が最も低い敵",
            "levels": {
              "1": 90,
              "2": 100,
              "3": 110,
              "4": 120,
              "5": 130,
              "6": 140,
              "7": 150,
              "8": 160,
              "9": 170,
              "10": 180,
              "11": 190,
              "12": 200
            }
          },
          {
            "valueKind": "最大召喚数",
            "valueClass": "対象数",
            "effectType": "召喚",
            "effectTarget": "友達のミツバチ",
            "levels": {
              "1": 2,
              "2": 2,
              "3": 2,
              "4": 2,
              "5": 2,
              "6": 2,
              "7": 3,
              "8": 3,
              "9": 3,
              "10": 3,
              "11": 3,
              "12": 3
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "友達が来たビー",
        "description": "友達のミツバチを呼び寄せる。友達のミツバチはHP割合が最も低い敵を針で攻撃して物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身と召喚獣",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身と召喚獣",
            "levels": {
              "1": 20,
              "2": 21,
              "3": 22,
              "4": 23,
              "5": 24,
              "6": 25,
              "7": 26,
              "8": 27,
              "9": 28,
              "10": 29,
              "11": 30,
              "12": 31
            }
          },
          {
            "valueKind": "バフ",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身と召喚獣",
            "fixedValue": 8
          }
        ],
        "skillType": "高学年",
        "skillName": "ハッピーハッビー",
        "description": "自身と友達のミツバチの攻撃力と攻撃速度を増加させる。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "召喚獣防御力増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "召喚獣",
          "levels": {
            "1": 16,
            "2": 18,
            "3": 20,
            "4": 22,
            "5": 24,
            "6": 26,
            "7": 28,
            "8": 30,
            "9": 32,
            "10": 34,
            "11": 36,
            "12": 38
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "召喚獣の防御力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 120
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "針を飛ばし、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "silphir",
    "name": "シルフィール",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "竜族",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 200,
      "spRecoveryPerSecond": 50
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 140,
              "2": 154,
              "3": 168,
              "4": 182,
              "5": 196,
              "6": 210,
              "7": 224,
              "8": 238,
              "9": 252,
              "10": 266,
              "11": 280,
              "12": 294
            }
          },
          {
            "valueKind": "SP減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 15,
              "2": 16.5,
              "3": 18,
              "4": 19.5,
              "5": 21,
              "6": 22.5,
              "7": 24,
              "8": 25.5,
              "9": 27,
              "10": 28.5,
              "11": 30,
              "12": 31.5
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "青空の支配者",
        "description": "敵に範囲物理ダメージを与え、SPを減少させる。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 350,
              "2": 385,
              "3": 420,
              "4": 455,
              "5": 490,
              "6": 525,
              "7": 560,
              "8": 595,
              "9": 630,
              "10": 665,
              "11": 700,
              "12": 735
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 8
          }
        ],
        "skillType": "高学年",
        "skillName": "シルフィールZアタック",
        "description": "敵に短剣を8本投げつける。",
        "cooldownSeconds": 14
      },
      {
        "effects": [
          {
            "valueKind": "基本攻撃ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 30,
              "2": 32,
              "3": 34,
              "4": 36,
              "5": 38,
              "6": 40,
              "7": 42,
              "8": 44,
              "9": 46,
              "10": 48,
              "11": 50,
              "12": 52
            }
          },
          {
            "valueKind": "強化攻撃確率増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃のダメージ量と強化攻撃確率が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "短剣を投げつけ、敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 96
          },
          {
            "valueKind": "最後の一撃の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 64
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "SP減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 10
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で短剣を3回投げ、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "snorky",
    "name": "スノキー",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "魔女",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 40
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 4,
      "defM": 4,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/前列",
            "reference": "最大HP",
            "levels": {
              "1": 24,
              "2": 26,
              "3": 28,
              "4": 30,
              "5": 32,
              "6": 34,
              "7": 36,
              "8": 38,
              "9": 40,
              "10": 42,
              "11": 44,
              "12": 46,
              "13": 48,
              "14": 50,
              "15": 52
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方/前列",
            "fixedValue": 6
          },
          {
            "valueKind": "物理防御力減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "敵/周囲",
            "fixedValue": 50
          },
          {
            "valueKind": "物理防御力減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/周囲",
            "fixedValue": 5
          },
          {
            "valueKind": "持続HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "攻撃力",
            "levels": {
              "1": 180,
              "2": 200,
              "3": 220,
              "4": 240,
              "5": 260,
              "6": 280,
              "7": 300,
              "8": 320,
              "9": 340,
              "10": 360,
              "11": 380,
              "12": 400,
              "13": 420,
              "14": 440,
              "15": 460
            }
          },
          {
            "valueKind": "持続HP回復",
            "valueClass": "周期",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 1
          },
          {
            "valueKind": "持続HP回復",
            "valueClass": "持続時間",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "違法豆乳",
        "description": "所持している闇豆乳を飲み、前列の味方にシールドを付与する。シールドが破壊されるか、持続時間が終わると、周囲の敵の物理防御力を減少させる。自身と近接する敵が3体以上の場合、1秒ごとに自身のHPを回復する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/周囲",
            "levels": {
              "1": 450,
              "2": 495,
              "3": 540,
              "4": 585,
              "5": 630,
              "6": 675,
              "7": 720,
              "8": 765,
              "9": 810,
              "10": 855,
              "11": 900,
              "12": 945,
              "13": 990,
              "14": 1035,
              "15": 1080
            }
          },
          {
            "valueKind": "強化物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/周囲",
            "levels": {
              "1": 900,
              "2": 990,
              "3": 1080,
              "4": 1170,
              "5": 1260,
              "6": 1350,
              "7": 1440,
              "8": 1530,
              "9": 1620,
              "10": 1710,
              "11": 1800,
              "12": 1890,
              "13": 1980,
              "14": 2070,
              "15": 2160
            }
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/周囲"
          }
        ],
        "skillType": "高学年",
        "skillName": "エリア占拠",
        "description": "高く跳び上がって地面を踏みつけ、自身を中心とする周囲の敵に範囲物理ダメージを与え、ノックバックさせる。自身と近接する敵が3体以上の場合、物理ダメージとノックバック距離が増加する。",
        "cooldownSeconds": 28
      },
      {
        "effects": [
          {
            "valueKind": "ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 28,
              "3": 32,
              "4": 36,
              "5": 40,
              "6": 44,
              "7": 48,
              "8": 52,
              "9": 56,
              "10": 60,
              "11": 64,
              "12": 68,
              "13": 72,
              "14": 76,
              "15": 80
            }
          },
          {
            "valueKind": "ダメージ量増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23,
              "13": 24,
              "14": 25,
              "15": 26
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃時、自身のダメージ量が増加し、被ダメージ量が減少する。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 225
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵を素早く蹴り、物理ダメージを3回与える。"
      },
      {
        "effects": [
          {
            "valueKind": "発動間隔",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 350
          },
          {
            "valueKind": "連続発動",
            "valueClass": "条件",
            "effectType": "攻撃",
            "effectTarget": "自身"
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "普通攻撃を3回行うごとに、味方陣営から最も近い敵に向かって前方へ飛び蹴りを放ち、範囲物理ダメージを与える。強化攻撃は一定確率でもう一度発動し、連続で発動するたびに発動確率が減少する。"
      }
    ],
    "favoriteCard": {
      "name": "スノキーのフェドーラ",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "物理ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲",
                "fixedValue": 700
              },
              {
                "valueKind": "気絶",
                "valueClass": "状態付与",
                "effectType": "デバフ",
                "effectTarget": "敵/範囲"
              },
              {
                "valueKind": "気絶確率",
                "valueClass": "倍率",
                "effectType": "デバフ",
                "effectTarget": "敵/範囲",
                "fixedValue": 50
              },
              {
                "valueKind": "気絶",
                "valueClass": "持続時間",
                "effectType": "デバフ",
                "effectTarget": "敵/範囲",
                "fixedValue": 2
              }
            ],
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "普通攻撃を3回行うごとに、味方陣営から最も近い敵に向かって前方へ飛び蹴りを放ち、範囲物理ダメージを与え、一定確率で気絶を付与する。強化攻撃は一定確率でもう一度発動し、連続で発動するたびに発動確率が減少する。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "物理攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "物理防御力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "魔法防御力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "スノキーの物理攻撃力、物理防御力、魔法防御力が増加する。"
          }
        ]
      }
    },
    "aside": {
      "name": "ビッグボススノキー",
      "levels": {
        "1": {
          "name": "夢はビッグボス",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "義理の代名詞",
          "stats": [],
          "effects": [
            {
              "valueKind": "シールド",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "reference": "最大HP",
              "fixedValue": 24
            },
            {
              "valueKind": "シールド",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "fixedValue": 12
            },
            {
              "valueKind": "ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "fixedValue": 32
            },
            {
              "valueKind": "ダメージ量増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "fixedValue": 12
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/周囲",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 24
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "味方/周囲",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 3
            }
          ],
          "description": "ウェーブ開始時に前列の味方にシールドを付与し、与えるダメージ量を増加させる。強化攻撃時、周囲の味方の被ダメージ量を減少させる。"
        },
        "3": {
          "name": "拳の味を見せてやる",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "物理攻撃力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "物理防御力",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 7.5
            }
          ],
          "description": "味方全員の敵からの被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "魔女",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "speaki",
    "name": "スピッキー",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "幽霊",
      "role": "攻撃",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 5,
      "critDmg": 5,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内の敵3体",
            "levels": {
              "1": 297,
              "2": 331.65,
              "3": 366.3,
              "4": 400.95,
              "5": 435.6,
              "6": 470.25,
              "7": 504.9,
              "8": 539.55,
              "9": 574.2,
              "10": 608.85,
              "11": 643.5,
              "12": 678.15
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内の敵3体",
            "fixedValue": 3
          },
          {
            "valueKind": "対象数",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内の敵",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "パンプキンマジック",
        "description": "かぼちゃを育てる呪文を唱え、指定範囲内の敵3体に3回魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "会心ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身と攻撃力が最も高い味方",
            "levels": {
              "1": 18,
              "2": 19,
              "3": 20,
              "4": 21,
              "5": 22,
              "6": 23,
              "7": 24,
              "8": 25,
              "9": 26,
              "10": 27,
              "11": 28,
              "12": 29
            }
          },
          {
            "valueKind": "会心ダメージ量増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身と攻撃力が最も高い味方",
            "fixedValue": 12
          }
        ],
        "skillType": "高学年",
        "skillName": "お菓子くれなきゃいたずらしちゃうぞ～☆",
        "description": "自身と攻撃力が最も高い味方の会心ダメージ量を増加させる。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "会心率増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 30,
            "2": 33,
            "3": 36,
            "4": 39,
            "5": 42,
            "6": 45,
            "7": 48,
            "8": 51,
            "9": 54,
            "10": 57,
            "11": 60,
            "12": 63
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心率が増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "かぼちゃを発射し、敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "selene",
    "name": "セリーネ",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "幽霊",
      "role": "守備",
      "position": "前列",
      "attackType": "魔法",
      "initialSp": 150,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 5,
      "atkP": 0,
      "atkM": 2,
      "defP": 5,
      "defM": 5,
      "crit": 2,
      "critDmg": 2,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "1回ごとの魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 30,
              "2": 33,
              "3": 36,
              "4": 39,
              "5": 42,
              "6": 45,
              "7": 48,
              "8": 51,
              "9": 54,
              "10": 57,
              "11": 60,
              "12": 63,
              "13": 66,
              "14": 69,
              "15": 72
            }
          },
          {
            "valueKind": "ダメージ間隔",
            "valueClass": "周期",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 0.3
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 2.5
          }
        ],
        "skillType": "低学年",
        "skillName": "これが愛よ",
        "description": "遠い敵へハートを飛ばし、通過/爆発で範囲魔法ダメージと気絶を与える。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/残りHP割合最低",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260,
              "13": 1320,
              "14": 1380,
              "15": 1440
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 36,
              "2": 38,
              "3": 40,
              "4": 42,
              "5": 44,
              "6": 46,
              "7": 48,
              "8": 50,
              "9": 52,
              "10": 54,
              "11": 56,
              "12": 58,
              "13": 60,
              "14": 62,
              "15": 64
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 8
          }
        ],
        "skillType": "高学年",
        "skillName": "ピンクダスト",
        "description": "残りHP割合が最も低い敵に魔法ダメージを与え、撃破時に自身へシールドを生成する。",
        "cooldownSeconds": 28
      },
      {
        "effects": [
          {
            "valueKind": "会心抵抗増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42,
              "13": 44,
              "14": 46,
              "15": 48
            }
          },
          {
            "valueKind": "挑発",
            "valueClass": "状態免疫",
            "effectType": "バフ",
            "effectTarget": "自身"
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心抵抗が増加し、挑発に免疫を持つ。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 75
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "袖を振るい、敵に魔法ダメージを2回与える。"
      },
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "fixedValue": 10
          },
          {
            "valueKind": "挑発",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "挑発",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 3
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "3回目の攻撃の代わりに自身を回復し、敵を挑発する。"
      }
    ],
    "favoriteCard": {
      "name": "セリーネの夜幻影",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲/残りHP割合最低",
                "levels": {
                  "1": 900,
                  "2": 990,
                  "3": 1080,
                  "4": 1170,
                  "5": 1260,
                  "6": 1350,
                  "7": 1440,
                  "8": 1530,
                  "9": 1620,
                  "10": 1710,
                  "11": 1800,
                  "12": 1890,
                  "13": 1980,
                  "14": 2070,
                  "15": 2160
                }
              },
              {
                "valueKind": "シールド",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "reference": "最大HP",
                "levels": {
                  "1": 30,
                  "2": 33,
                  "3": 36,
                  "4": 39,
                  "5": 42,
                  "6": 45,
                  "7": 48,
                  "8": 51,
                  "9": 54,
                  "10": 57,
                  "11": 60,
                  "12": 63,
                  "13": 66,
                  "14": 69,
                  "15": 72
                }
              },
              {
                "valueKind": "シールド",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 8
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 30
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 8
              }
            ],
            "targetSkill": "高学年",
            "skillName": "チャンネルNo.5",
            "description": "ポーズ後、HP割合が低い敵に範囲魔法ダメージを与え、自身にシールドと被ダメージ量減少を付与する。"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "クールタイム減少",
              "valueClass": "固定値",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 10
            },
            "targetSkill": "高学年",
            "skillName": "愛用Lv3",
            "description": "セリーネの高学年スキルのクールタイムが減少する。"
          }
        ]
      }
    },
    "aside": {
      "name": "セレブ・セリーネ",
      "levels": {
        "1": {
          "name": "悪戯好きなセリーネ",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 22.5
            }
          ],
          "effects": []
        },
        "2": {
          "name": "煽り専門ElTuber",
          "stats": [],
          "effects": [
            {
              "valueKind": "SP回復",
              "valueClass": "固定値",
              "effectType": "回復",
              "effectTarget": "自身",
              "fixedValue": 6
            },
            {
              "valueKind": "攻撃速度減少",
              "valueClass": "倍率",
              "effectType": "デバフ",
              "effectTarget": "敵/挑発対象",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 33
            },
            {
              "valueKind": "攻撃速度減少",
              "valueClass": "持続時間",
              "effectType": "デバフ",
              "effectTarget": "敵/挑発対象",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 4
            },
            {
              "valueKind": "強化攻撃HP回復倍率",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 2
            }
          ],
          "description": "直接ダメージを受けるとSPを回復する。強化攻撃で挑発した敵の攻撃速度を減少させ、強化攻撃のHP回復割合が2倍になる。"
        },
        "3": {
          "name": "寄付チャレンジ",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "魔法防御力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/前列",
              "fixedValue": 9.7
            }
          ],
          "description": "前列の味方の被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "taida",
    "name": "タイダー",
    "basic": {
      "rarity": 2,
      "personality": "活発",
      "race": "エルフ",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 270,
            "2": 297,
            "3": 324,
            "4": 351,
            "5": 378,
            "6": 405,
            "7": 432,
            "8": 459,
            "9": 486,
            "10": 513,
            "11": 540,
            "12": 567
          }
        },
        "skillType": "低学年",
        "skillName": "DX-シューター",
        "description": "強力な弾丸を発射し、敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 297,
              "2": 326.7,
              "3": 356.4,
              "4": 386.1,
              "5": 415.8,
              "6": 445.5,
              "7": 475.2,
              "8": 504.9,
              "9": 534.6,
              "10": 564.3,
              "11": 594,
              "12": 623.7
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "タンタン……パン！？",
        "description": "強力な弾丸を敵に3回発射し、範囲物理ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "会心ダメージ増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 25,
            "2": 30,
            "3": 35,
            "4": 40,
            "5": 45,
            "6": 50,
            "7": 55,
            "8": 60,
            "9": 65,
            "10": 70,
            "11": 75,
            "12": 80
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心ダメージが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "弾丸を発射し、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "chopi",
    "name": "チョッピー",
    "basic": {
      "rarity": 2,
      "personality": "憂鬱",
      "race": "獣人",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 198,
              "2": 217.8,
              "3": 237.6,
              "4": 257.4,
              "5": 277.2,
              "6": 297,
              "7": 316.8,
              "8": 336.6,
              "9": 356.4,
              "10": 376.2,
              "11": 396,
              "12": 415.8
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "ニャオ～",
        "description": "大声を出して敵に範囲物理ダメージを3回与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 620,
              "2": 682,
              "3": 744,
              "4": 806,
              "5": 868,
              "6": 930,
              "7": 992,
              "8": 1054,
              "9": 1116,
              "10": 1178,
              "11": 1240,
              "12": 1302
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 10
          }
        ],
        "skillType": "高学年",
        "skillName": "グルル～、ワン！",
        "description": "両腕を振り回して敵に物理ダメージを10回与える。",
        "cooldownSeconds": 28
      },
      {
        "effects": {
          "valueKind": "会心増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "斧を振り回して敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "diana",
    "name": "ディアナ",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "獣人",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 2,
      "defP": 2,
      "defM": 2,
      "crit": 2,
      "critDmg": 2,
      "critRes": 5,
      "critDmgRes": 5
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "最初のHP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/残りHP割合低い3名",
            "reference": "対象最大HP",
            "levels": {
              "1": 22,
              "2": 24,
              "3": 26,
              "4": 28,
              "5": 30,
              "6": 32,
              "7": 34,
              "8": 36,
              "9": 38,
              "10": 40,
              "11": 42,
              "12": 44,
              "13": 46,
              "14": 48,
              "15": 50
            }
          },
          {
            "valueKind": "2回目のHP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/残りHP割合低い3名",
            "reference": "攻撃力",
            "levels": {
              "1": 190,
              "2": 205,
              "3": 220,
              "4": 235,
              "5": 250,
              "6": 265,
              "7": 280,
              "8": 295,
              "9": 310,
              "10": 325,
              "11": 340,
              "12": 355,
              "13": 370,
              "14": 385,
              "15": 400
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "ナチュラルヒーリング",
        "description": "残りHP割合が低い味方3名を回復し、追加回復を行う。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 300,
              "2": 330,
              "3": 360,
              "4": 390,
              "5": 420,
              "6": 450,
              "7": 480,
              "8": 510,
              "9": 540,
              "10": 570,
              "11": 600,
              "12": 630,
              "13": 660,
              "14": 690,
              "15": 720
            }
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 11
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          }
        ],
        "skillType": "高学年",
        "skillName": "真の癒し手",
        "description": "前方へ気功波を放ち、敵に範囲魔法ダメージを11回与え、ノックバックさせる。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "会心被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42,
              "13": 44,
              "14": 46,
              "15": 48
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/狂気",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23,
              "13": 24,
              "14": 25,
              "15": 26
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心被ダメージ量を減少し、狂気性格の味方の攻撃力を増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を発射し、敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 150
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/残りHP割合最低",
            "reference": "与ダメージ量",
            "fixedValue": 275
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "強化呪文で敵に魔法ダメージを与え、HP割合が低い味方を回復する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "ちびディアナ",
      "levels": {
        "1": {
          "name": "子ジカの応援？",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "すごい治療法",
          "stats": [],
          "effects": [
            {
              "valueKind": "強化攻撃回復対象",
              "valueClass": "対象数",
              "effectType": "回復",
              "effectTarget": "味方",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 3
            },
            {
              "valueKind": "会心被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/狂気/自身除く",
              "fixedValue": 66
            }
          ],
          "description": "強化攻撃の回復対象が3体に増加する。戦闘開始時、自身を除く狂気の味方の会心被ダメージ量を減少させる。"
        },
        "3": {
          "name": "自然の力",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "魔法防御力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "与ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/中列",
              "fixedValue": 13.6
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/中列",
              "fixedValue": 5.9
            }
          ],
          "description": "中列の味方の与ダメージ量を増加し、被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "獣人",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "naia",
    "name": "ナイア",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "精霊",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 44
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 3,
      "defP": 2,
      "defM": 2,
      "crit": 3,
      "critDmg": 3,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方",
            "reference": "対象の最大HP",
            "fixedValue": 15
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方",
            "reference": "自分の攻撃力",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          },
          {
            "valueKind": "回数",
            "valueClass": "回数",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方",
            "fixedValue": 20
          },
          {
            "valueKind": "状態異常解除",
            "valueClass": "状態解除",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方"
          }
        ],
        "skillType": "低学年",
        "skillName": "それ洗ったの？",
        "description": "残りHP割合が最も低い味方を20回回復し状態異常を解除"
      },
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方",
            "reference": "対象の最大HP",
            "levels": {
              "1": 10,
              "2": 12,
              "3": 14,
              "4": 16,
              "5": 18,
              "6": 20,
              "7": 22,
              "8": 24,
              "9": 26,
              "10": 28,
              "11": 30,
              "12": 32
            }
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 360,
              "2": 396,
              "3": 432,
              "4": 468,
              "5": 504,
              "6": 540,
              "7": 576,
              "8": 612,
              "9": 648,
              "10": 684,
              "11": 720,
              "12": 756
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "水の洗礼を受けなさい！",
        "description": "波を召喚して味方を回復し敵に魔法ダメージ",
        "cooldownSeconds": 26
      },
      {
        "effects": {
          "valueKind": "クールタイム減少",
          "valueClass": "固定値",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 1,
            "2": 1.5,
            "3": 2,
            "4": 2.5,
            "5": 3,
            "6": 3.5,
            "7": 4,
            "8": 4.5,
            "9": 5,
            "10": 5.5,
            "11": 6,
            "12": 6.5
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "高学年スキルのクールタイムが減少"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 45
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵に魔法ダメージ"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 48
          },
          {
            "valueKind": "最後の一撃の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 72
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "水鉄砲を3回発射して敵に魔法ダメージ"
      }
    ],
    "favoriteCard": {
      "name": "ナイアのイルカ水鉄砲",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": {
              "valueKind": "戦闘開始時SP回復",
              "valueClass": "固定値",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 150
            },
            "targetSkill": "低学年",
            "skillName": "キレイにしてあげる！",
            "description": "戦闘開始時にSPが回復"
          },
          {
            "effects": [
              {
                "valueKind": "HP回復",
                "valueClass": "倍率",
                "effectType": "回復",
                "effectTarget": "残りHP割合が最も低い味方",
                "reference": "対象の最大HP",
                "fixedValue": 20
              },
              {
                "valueKind": "HP回復",
                "valueClass": "倍率",
                "effectType": "回復",
                "effectTarget": "残りHP割合が最も低い味方",
                "reference": "自分の攻撃力",
                "levels": {
                  "1": 20,
                  "2": 22,
                  "3": 24,
                  "4": 26,
                  "5": 28,
                  "6": 30,
                  "7": 32,
                  "8": 34,
                  "9": 36,
                  "10": 38,
                  "11": 40,
                  "12": 42
                }
              }
            ],
            "targetSkill": "低学年",
            "skillName": "キレイにしてあげる！",
            "description": "味方を20回回復し最大HP超過分をシールドに転換"
          },
          {
            "effects": {
              "valueKind": "回数",
              "valueClass": "回数",
              "effectType": "回復",
              "effectTarget": "残りHP割合が最も低い味方",
              "fixedValue": 20
            },
            "targetSkill": "低学年",
            "skillName": "キレイにしてあげる！",
            "description": "回復回数"
          },
          {
            "effects": {
              "valueKind": "シールド転換割合",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "回復対象",
              "fixedValue": 20
            },
            "targetSkill": "低学年",
            "skillName": "キレイにしてあげる！",
            "description": "シールド転換割合"
          },
          {
            "effects": {
              "valueKind": "シールド",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "回復対象",
              "fixedValue": 8
            },
            "targetSkill": "低学年",
            "skillName": "キレイにしてあげる！",
            "description": "シールド持続時間"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "魔法攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "ナイアの魔法攻撃力、会心抵抗、会心ダメージ抵抗が増加"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "ner",
    "name": "ネル",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "妖精",
      "role": "支援",
      "position": "前列",
      "attackType": "魔法",
      "initialSp": 200,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 1,
      "defP": 4,
      "defM": 4,
      "crit": 1,
      "critDmg": 1,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "無敵",
            "valueClass": "状態免疫",
            "effectType": "バフ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "無敵",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方全体",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42,
              "13": 44,
              "14": 46,
              "15": 48
            }
          },
          {
            "valueKind": "与ダメージ量増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方全体",
            "fixedValue": 8
          }
        ],
        "skillType": "低学年",
        "skillName": "世界樹の啓示",
        "description": "自身に無敵を付与し、味方全員の与ダメージ量を増加する。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/周囲",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260,
              "13": 1320,
              "14": 1380,
              "15": 1440
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/周囲",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23,
              "13": 24,
              "14": 25,
              "15": 26
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方/周囲",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "エーダルの祝福",
        "description": "周囲の味方の被ダメージ量を減少し、周囲の敵に範囲魔法ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "SP回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "自身/味方周囲",
            "levels": {
              "1": 1,
              "2": 2,
              "3": 3,
              "4": 4,
              "5": 5,
              "6": 6,
              "7": 7,
              "8": 8,
              "9": 9,
              "10": 10,
              "11": 11,
              "12": 12,
              "13": 13,
              "14": 14,
              "15": 15
            }
          },
          {
            "valueKind": "SP回復",
            "valueClass": "周期",
            "effectType": "回復",
            "effectTarget": "自身/味方周囲",
            "fixedValue": 2
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "2秒ごとに自身と周囲の味方のSPを回復する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 80
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "斧を振り回して敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "聖君エルフィン",
      "levels": {
        "1": {
          "name": "女王特別補佐役",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "司祭長の無敵権",
          "stats": [],
          "effects": [
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "基本攻撃",
              "fixedValue": 15
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "基本攻撃",
              "fixedValue": 3
            },
            {
              "valueKind": "HP回復",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "自身",
              "targetSkill": "最大HP",
              "fixedValue": 3
            },
            {
              "valueKind": "SP回復",
              "valueClass": "固定値",
              "effectType": "回復",
              "effectTarget": "自身",
              "fixedValue": 30
            },
            {
              "valueKind": "無敵",
              "valueClass": "状態免疫",
              "effectType": "バフ",
              "effectTarget": "自身/前衛使徒",
              "targetSkill": "高学年スキル"
            },
            {
              "valueKind": "無敵",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "自身/前衛使徒",
              "targetSkill": "高学年スキル",
              "fixedValue": 5
            }
          ],
          "description": "基本攻撃命中時、自身の被ダメージ量を減少し、HPとSPを回復する。高学年スキル使用時、自身と前衛使徒に無敵を付与する。"
        },
        "3": {
          "name": "世界樹の名前で！",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "魔法攻撃力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "与ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 10.5
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 4.5
            }
          ],
          "description": "味方全員の与ダメージ量を増加し、被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "妖精",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "butter",
    "name": "バター",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 5,
      "critDmg": 5,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "攻撃ごとの物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 160,
              "2": 176,
              "3": 192,
              "4": 208,
              "5": 224,
              "6": 240,
              "7": 256,
              "8": 272,
              "9": 288,
              "10": 304,
              "11": 320,
              "12": 336
            }
          },
          {
            "valueKind": "攻撃の最大回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "バターフライ！",
        "description": "対象が複数いる場合、跳ね返る弾丸を発射して敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 400,
              "2": 440,
              "3": 480,
              "4": 520,
              "5": 560,
              "6": 600,
              "7": 640,
              "8": 680,
              "9": 720,
              "10": 760,
              "11": 800,
              "12": 840
            }
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/範囲",
            "fixedValue": 2
          }
        ],
        "skillType": "高学年",
        "skillName": "ストラ～イク！",
        "description": "巨大な石を発射し、敵に範囲物理ダメージを与え、気絶を付与する。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "会心率増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 30,
              "2": 33,
              "3": 36,
              "4": 39,
              "5": 42,
              "6": 45,
              "7": 48,
              "8": 51,
              "9": 54,
              "10": 57,
              "11": 60,
              "12": 63
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/活発",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心率が増加する。活発の味方使徒の攻撃力を増加させる。この効果はバターがフィールドにいなくても発動する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵に大きな石を発射して物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 150
          },
          {
            "valueKind": "確定会心",
            "valueClass": "条件",
            "effectType": "攻撃",
            "effectTarget": "敵"
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で犬用ガムを発射し、敵に確定会心物理ダメージを与える。"
      }
    ],
    "favoriteCard": {
      "name": "バターのイエローカード",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "物理ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "fixedValue": 150
              },
              {
                "valueKind": "強化物理ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲",
                "fixedValue": 250
              },
              {
                "valueKind": "怒り獲得",
                "valueClass": "固定値",
                "effectType": "条件",
                "effectTarget": "自身",
                "fixedValue": 4
              },
              {
                "valueKind": "怒り必要回数",
                "valueClass": "固定値",
                "effectType": "条件",
                "effectTarget": "自身",
                "fixedValue": 100
              },
              {
                "valueKind": "確定会心",
                "valueClass": "条件",
                "effectType": "攻撃",
                "effectTarget": "敵/範囲"
              }
            ],
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "味方が直接ダメージを受けると怒りを4回獲得し、100回になると強化攻撃が変更される。強化攻撃では銃を取り出し、範囲内の敵に確定会心物理ダメージを与える。怒りはバターが倒された状態でも獲得でき、獲得した怒りは消えない。"
          }
        ],
        "3": [
          {
            "effects": {
              "valueKind": "クールタイム減少",
              "valueClass": "固定値",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 5
            },
            "targetSkill": "高学年",
            "skillName": "愛用Lv3",
            "description": "バターの高学年スキルのクールタイムが減少する。バターの強化攻撃確率が増加する。"
          },
          {
            "effects": {
              "valueKind": "強化攻撃確率増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 20
            },
            "targetSkill": "普通攻撃_強化",
            "skillName": "愛用Lv3",
            "description": "バターの高学年スキルのクールタイムが減少する。バターの強化攻撃確率が増加する。"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "patula",
    "name": "パトラ",
    "basic": {
      "rarity": 1,
      "personality": "冷静",
      "race": "妖精",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 150,
              "2": 165,
              "3": 180,
              "4": 195,
              "5": 210,
              "6": 225,
              "7": 240,
              "8": 255,
              "9": 270,
              "10": 285,
              "11": 300,
              "12": 315
            }
          },
          {
            "valueKind": "毒",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "毒",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "ミントでも食らえ！",
        "description": "ミントを付けたフライ返しで敵を殴って物理ダメージを与え、毒を付与する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 200,
            "2": 220,
            "3": 240,
            "4": 260,
            "5": 280,
            "6": 300,
            "7": 320,
            "8": 340,
            "9": 360,
            "10": 380,
            "11": 400,
            "12": 420
          }
        },
        "skillType": "高学年",
        "skillName": "教主の天罰 - パトラ",
        "description": "教主の力を借りて敵に物理ダメージを与える。",
        "cooldownSeconds": 30
      },
      {
        "effects": {
          "valueKind": "攻撃力増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "攻撃力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 50
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "フライ返しを叩きつけ、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "picora",
    "name": "ピコラ",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "魔女",
      "role": "支援",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 2,
      "defP": 2,
      "defM": 2,
      "crit": 3,
      "critDmg": 3,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/残りHP割合低い3名",
            "reference": "攻撃力",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260
            }
          },
          {
            "valueKind": "ステッカーHP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/ステッカー対象",
            "reference": "対象最大HP",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23
            }
          },
          {
            "valueKind": "会心抵抗増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/ステッカー対象",
            "levels": {
              "1": 11,
              "2": 12,
              "3": 13,
              "4": 14,
              "5": 15,
              "6": 16,
              "7": 17,
              "8": 18,
              "9": 19,
              "10": 20,
              "11": 21,
              "12": 22
            }
          },
          {
            "valueKind": "物理防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/ステッカー対象",
            "levels": {
              "1": 11,
              "2": 12,
              "3": 13,
              "4": 14,
              "5": 15,
              "6": 16,
              "7": 17,
              "8": 18,
              "9": 19,
              "10": 20,
              "11": 21,
              "12": 22
            }
          },
          {
            "valueKind": "ステッカー",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方/ステッカー対象",
            "fixedValue": 8
          }
        ],
        "skillType": "低学年",
        "skillName": "限定ステッカー",
        "description": "残りHP割合が最も低い味方3名にステッカーを貼り、HPを回復する。ステッカーは追加回復、会心抵抗、物理防御力増加を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "状態異常解除",
            "valueClass": "状態解除",
            "effectType": "回復",
            "effectTarget": "味方/最大HP最高"
          },
          {
            "valueKind": "挑発",
            "valueClass": "周期",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "挑発",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 2
          },
          {
            "valueKind": "最大HP増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/最大HP最高",
            "levels": {
              "1": 25,
              "2": 27,
              "3": 29,
              "4": 31,
              "5": 33,
              "6": 35,
              "7": 37,
              "8": 39,
              "9": 41,
              "10": 43,
              "11": 45,
              "12": 47
            }
          },
          {
            "valueKind": "最大HP増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方/最大HP最高",
            "fixedValue": 8
          }
        ],
        "skillType": "高学年",
        "skillName": "これであなたもファッショニスタ",
        "description": "最大HPが最も高い味方の状態異常を解除してスタイリングする。最大HPを増加させ、一定時間敵を挑発する。",
        "cooldownSeconds": 32
      },
      {
        "effects": {
          "valueKind": "会心抵抗増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "味方全体",
          "levels": {
            "1": 10,
            "2": 11,
            "3": 12,
            "4": 13,
            "5": 14,
            "6": 15,
            "7": 16,
            "8": 17,
            "9": 18,
            "10": 19,
            "11": 20,
            "12": 21
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "味方全員の会心抵抗が増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 60
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を唱えて敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 120
          },
          {
            "valueKind": "呪文",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率でランダムな対象に呪文を2つ唱え、魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {
      "name": "ピコラのファッションポーチ",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "HP回復",
                "valueClass": "倍率",
                "effectType": "回復",
                "effectTarget": "味方/残りHP割合低い3名",
                "reference": "攻撃力",
                "levels": {
                  "1": 600,
                  "2": 660,
                  "3": 720,
                  "4": 780,
                  "5": 840,
                  "6": 900,
                  "7": 960,
                  "8": 1020,
                  "9": 1080,
                  "10": 1140,
                  "11": 1200,
                  "12": 1260,
                  "13": 1320,
                  "14": 1380,
                  "15": 1440
                }
              },
              {
                "valueKind": "ステッカーHP回復",
                "valueClass": "倍率",
                "effectType": "回復",
                "effectTarget": "味方/ステッカー対象",
                "reference": "対象最大HP",
                "levels": {
                  "1": 12,
                  "2": 13,
                  "3": 14,
                  "4": 15,
                  "5": 16,
                  "6": 17,
                  "7": 18,
                  "8": 19,
                  "9": 20,
                  "10": 21,
                  "11": 22,
                  "12": 23,
                  "13": 24,
                  "14": 25,
                  "15": 26
                }
              },
              {
                "valueKind": "会心抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "味方/ステッカー対象",
                "levels": {
                  "1": 11,
                  "2": 12,
                  "3": 13,
                  "4": 14,
                  "5": 15,
                  "6": 16,
                  "7": 17,
                  "8": 18,
                  "9": 19,
                  "10": 20,
                  "11": 21,
                  "12": 22,
                  "13": 23,
                  "14": 24,
                  "15": 25
                }
              },
              {
                "valueKind": "物理防御力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "味方/ステッカー対象",
                "levels": {
                  "1": 11,
                  "2": 12,
                  "3": 13,
                  "4": 14,
                  "5": 15,
                  "6": 16,
                  "7": 17,
                  "8": 18,
                  "9": 19,
                  "10": 20,
                  "11": 21,
                  "12": 22,
                  "13": 23,
                  "14": 24,
                  "15": 25
                }
              },
              {
                "valueKind": "1秒ごとのHP回復",
                "valueClass": "倍率",
                "effectType": "回復",
                "effectTarget": "味方/ステッカー対象",
                "reference": "対象最大HP",
                "levels": {
                  "1": 1,
                  "2": 2,
                  "3": 3,
                  "4": 4,
                  "5": 5,
                  "6": 6,
                  "7": 7,
                  "8": 8,
                  "9": 9,
                  "10": 10,
                  "11": 11,
                  "12": 12,
                  "13": 13,
                  "14": 14,
                  "15": 15
                }
              },
              {
                "valueKind": "HP回復",
                "valueClass": "周期",
                "effectType": "回復",
                "effectTarget": "味方/ステッカー対象",
                "fixedValue": 1
              },
              {
                "valueKind": "ステッカー",
                "valueClass": "持続時間",
                "effectType": "バフ",
                "effectTarget": "味方/ステッカー対象",
                "fixedValue": 8
              }
            ],
            "targetSkill": "低学年",
            "skillName": "初回限定ステッカー",
            "description": "味方3名にステッカーを貼り、HPを回復させる。ステッカー中は追加回復、会心抵抗、物理防御力増加、継続HP回復を付与する。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "魔法攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "ピコラの魔法攻撃力、会心抵抗、会心ダメージ抵抗が増加する。"
          }
        ]
      }
    },
    "aside": {
      "name": "ショッピングが大好き",
      "levels": {
        "1": {
          "name": "ショッピング王ピコラ",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "ピコラのステッカーはオマケ！",
          "stats": [],
          "effects": [
            {
              "valueKind": "最大HP増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 20
            },
            {
              "valueKind": "ステッカー対象数",
              "valueClass": "対象数",
              "effectType": "バフ",
              "effectTarget": "残りHP割合が最も低い味方",
              "targetSkill": "強化攻撃",
              "fixedValue": 2
            },
            {
              "valueKind": "ピコラのステッカー",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "残りHP割合が最も低い味方2名",
              "targetSkill": "強化攻撃",
              "fixedValue": 7
            },
            {
              "valueKind": "HP回復",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "ステッカー対象",
              "targetSkill": "対象の最大HP",
              "fixedValue": 22
            },
            {
              "valueKind": "HP回復回数",
              "valueClass": "回数",
              "effectType": "回復",
              "effectTarget": "ステッカー対象",
              "fixedValue": 2
            },
            {
              "valueKind": "与ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "ステッカー対象",
              "fixedValue": 30
            },
            {
              "valueKind": "クールタイム減少",
              "valueClass": "固定値",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "高学年スキル",
              "fixedValue": 12
            }
          ],
          "description": "最大HPが増加する。強化攻撃後、一定時間、残りHP割合が最も低い味方2名にピコラのステッカーを貼る。ピコラのステッカーはHPを2回回復させ、与ダメージ量を増加させる。高学年スキルのクールタイムが減少する。"
        },
        "3": {
          "name": "おしゃれピープル、集合！",
          "stats": [
            {
              "statApplyTo": "味方全体",
              "statName": "HP",
              "increaseP": 3
            },
            {
              "statApplyTo": "味方全体",
              "statName": "会心ダメージ抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 7.5
            }
          ],
          "description": "味方全員の敵からの被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "魔女",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "bigwood",
    "name": "ビッグウッド",
    "basic": {
      "rarity": 2,
      "personality": "純粋",
      "race": "精霊",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 5,
      "atkP": 5,
      "atkM": 0,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 25,
              "2": 27,
              "3": 29,
              "4": 31,
              "5": 33,
              "6": 35,
              "7": 37,
              "8": 39,
              "9": 41,
              "10": 43,
              "11": 45,
              "12": 47
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "環境保護",
        "description": "自身に魔法のシールドを生成する。"
      },
      {
        "effects": [
          {
            "valueKind": "HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "攻撃力",
            "levels": {
              "1": 375,
              "2": 390,
              "3": 405,
              "4": 420,
              "5": 435,
              "6": 450,
              "7": 465,
              "8": 480,
              "9": 495,
              "10": 510,
              "11": 525,
              "12": 540
            }
          },
          {
            "valueKind": "回復回数",
            "valueClass": "回数",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 3
          },
          {
            "valueKind": "挑発",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "挑発",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "高学年",
        "skillName": "あたしを見て～",
        "description": "敵を挑発した後、HPを3回回復する。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "魔法被ダメージ量減少",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 24,
            "2": 26,
            "3": 28,
            "4": 30,
            "5": 32,
            "6": 34,
            "7": 36,
            "8": 38,
            "9": 40,
            "10": 42,
            "11": 44,
            "12": 46
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "魔法被ダメージ量が減少する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "拳を振るい、敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 300
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 3
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で単体対象に拳を振り回し、物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "hilde",
    "name": "ヒルデ",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "エルフ",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 100,
      "spRecoveryPerSecond": 44
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 1,
      "defP": 4,
      "defM": 4,
      "crit": 1,
      "critDmg": 1,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "ウエーブHP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/周囲",
            "reference": "自身最大HP",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21,
              "13": 22,
              "14": 23,
              "15": 24
            }
          },
          {
            "valueKind": "持続HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方/HP80%未満2名",
            "reference": "自身最大HP",
            "levels": {
              "1": 4.3,
              "2": 4.6,
              "3": 4.9,
              "4": 5.2,
              "5": 5.5,
              "6": 5.8,
              "7": 6.1,
              "8": 6.4,
              "9": 6.7,
              "10": 7,
              "11": 7.3,
              "12": 7.6,
              "13": 7.9,
              "14": 8.2,
              "15": 8.5
            }
          },
          {
            "valueKind": "持続HP回復",
            "valueClass": "持続時間",
            "effectType": "回復",
            "effectTarget": "味方/HP80%未満2名",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "フィトンチッドウエーブ",
        "description": "周囲の味方全員を1回回復し、追加でHP80%未満の味方2名を継続回復する。"
      },
      {
        "effects": [
          {
            "valueKind": "攻撃ごとの魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 340,
              "2": 370,
              "3": 400,
              "4": 430,
              "5": 460,
              "6": 490,
              "7": 520,
              "8": 550,
              "9": 580,
              "10": 610,
              "11": 640,
              "12": 670,
              "13": 700,
              "14": 730,
              "15": 760
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "味方/範囲",
            "levels": {
              "1": 65,
              "2": 67,
              "3": 69,
              "4": 71,
              "5": 73,
              "6": 75,
              "7": 77,
              "8": 79,
              "9": 81,
              "10": 83,
              "11": 85,
              "12": 87,
              "13": 89,
              "14": 91,
              "15": 93
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "味方/範囲",
            "levels": {
              "1": 7,
              "2": 7.25,
              "3": 7.5,
              "4": 7.75,
              "5": 8,
              "6": 8.25,
              "7": 8.5,
              "8": 8.75,
              "9": 9,
              "10": 9.25,
              "11": 9.5,
              "12": 9.75,
              "13": 10,
              "14": 10.25,
              "15": 10.5
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "過剰医療",
        "description": "敵に範囲魔法ダメージを与え、範囲内の味方を巨大化させ、攻撃速度を増加させる。",
        "cooldownSeconds": 36
      },
      {
        "effects": [
          {
            "valueKind": "状態異常解除",
            "valueClass": "状態解除",
            "effectType": "回復",
            "effectTarget": "味方/指定範囲内1人"
          },
          {
            "valueKind": "クールタイム",
            "valueClass": "クールタイム",
            "effectType": "回復",
            "effectTarget": "味方/指定範囲内1人",
            "levels": {
              "1": 23,
              "2": 22,
              "3": 21,
              "4": 20,
              "5": 19,
              "6": 18,
              "7": 17,
              "8": 16,
              "9": 15,
              "10": 14,
              "11": 13,
              "12": 12,
              "13": 11,
              "14": 10,
              "15": 9
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "指定範囲内の味方1人の状態異常を全て解除する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "銃型注射器を発射して敵に魔法ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "HP回復",
          "valueClass": "倍率",
          "effectType": "回復",
          "effectTarget": "味方/HP割合最低",
          "reference": "自身最大HP",
          "fixedValue": 20
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "3回目の攻撃の代わりに、HP割合が最も少ない味方のHPを回復する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "温泉のヒルデ",
      "levels": {
        "1": {
          "name": "自己治療",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法防御力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "医療従事者保護法",
          "stats": [],
          "effects": [
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方/強化攻撃回復対象",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 60
            },
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "味方/強化攻撃回復対象",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 6
            },
            {
              "valueKind": "強化攻撃HP回復倍率",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "味方/強化攻撃回復対象",
              "targetSkill": "普通攻撃_強化",
              "fixedValue": 2
            }
          ],
          "description": "強化攻撃の回復対象の攻撃速度を増加させ、強化攻撃のHP回復割合が2倍になる。"
        },
        "3": {
          "name": "温泉の効能",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "魔法攻撃力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "魔法被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 10.5
            }
          ],
          "description": "味方全員の敵からの魔法被ダメージ量が減少する。"
        }
      }
    },
    "board": {
      "race": "エルフ",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "festa",
    "name": "フェスタ",
    "basic": {
      "rarity": 2,
      "personality": "憂鬱",
      "race": "エルフ",
      "role": "支援",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 5,
      "atkM": 0,
      "defP": 4,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "与ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 50
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 4,
              "2": 4.3,
              "3": 4.6,
              "4": 4.9,
              "5": 5.2,
              "6": 5.5,
              "7": 5.8,
              "8": 6.1,
              "9": 6.4,
              "10": 6.7,
              "11": 7,
              "12": 7.3
            }
          },
          {
            "valueKind": "バフ解除",
            "valueClass": "解除",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          }
        ],
        "skillType": "低学年",
        "skillName": "ロックンピース！",
        "description": "ロックを演奏し、範囲内の対象にノイズを付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10,
            "levels": {
              "1": 25,
              "2": 26,
              "3": 27,
              "4": 28,
              "5": 29,
              "6": 30,
              "7": 31,
              "8": 32,
              "9": 33,
              "10": 34,
              "11": 35,
              "12": 36
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10,
            "levels": {
              "1": 50,
              "2": 52,
              "3": 54,
              "4": 56,
              "5": 58,
              "6": 60,
              "7": 62,
              "8": 64,
              "9": 66,
              "10": 68,
              "11": 70,
              "12": 72
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 10,
            "levels": {
              "1": 30,
              "2": 31,
              "3": 32,
              "4": 33,
              "5": 34,
              "6": 35,
              "7": 36,
              "8": 37,
              "9": 38,
              "10": 39,
              "11": 40,
              "12": 41
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "スポットライト",
        "description": "赤い照明: 10秒間、防御力が増加する。",
        "cooldownSeconds": 20
      },
      {
        "effects": {
          "valueKind": "基本攻撃与ダメージ量増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 30,
            "2": 32,
            "3": 34,
            "4": 36,
            "5": 38,
            "6": 40,
            "7": 42,
            "8": 44,
            "9": 46,
            "10": 48,
            "11": 50,
            "12": 52
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃のダメージ量が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 150
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "ギターで敵を叩きつけ物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "blanchet",
    "name": "ブランセ",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "精霊",
      "role": "攻撃",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 5,
      "critDmg": 5,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 280,
              "2": 308,
              "3": 336,
              "4": 364,
              "5": 392,
              "6": 420,
              "7": 448,
              "8": 476,
              "9": 504,
              "10": 532,
              "11": 560,
              "12": 588
            }
          },
          {
            "valueKind": "最後の一撃の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 420,
              "2": 462,
              "3": 504,
              "4": 546,
              "5": 588,
              "6": 630,
              "7": 672,
              "8": 714,
              "9": 756,
              "10": 798,
              "11": 840,
              "12": 882
            }
          },
          {
            "valueKind": "最大跳ね返り回数",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "シンクローズ",
        "description": "敵に最大3回跳ね返るシンクローズを投げつけ、魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 480,
              "2": 528,
              "3": 576,
              "4": 624,
              "5": 672,
              "6": 720,
              "7": 768,
              "8": 816,
              "9": 864,
              "10": 912,
              "11": 960,
              "12": 1008
            }
          },
          {
            "valueKind": "最後の一撃の総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 720,
              "2": 792,
              "3": 864,
              "4": 936,
              "5": 1008,
              "6": 1080,
              "7": 1152,
              "8": 1224,
              "9": 1296,
              "10": 1368,
              "11": 1440,
              "12": 1512
            }
          },
          {
            "valueKind": "シンクローズ",
            "valueClass": "回数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "確定会心",
            "valueClass": "条件",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "青い鳥の花園",
        "description": "敵にシンクローズを3回放つ。最後の一撃は確定会心範囲ダメージを与え、全攻撃が沈黙を付与する。",
        "cooldownSeconds": 20
      },
      {
        "effects": [
          {
            "valueKind": "スキルダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 23,
              "3": 26,
              "4": 29,
              "5": 32,
              "6": 35,
              "7": 38,
              "8": 41,
              "9": 44,
              "10": 47,
              "11": 50,
              "12": 53
            }
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態免疫",
            "effectType": "バフ",
            "effectTarget": "自身"
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "スキルダメージ量が増加し、沈黙に免疫を得る。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 60
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "青い薔薇を飛ばして敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 180
          },
          {
            "valueKind": "苦痛",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "苦痛",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で青い薔薇を飛ばして敵に魔法ダメージを与え、苦痛を付与する。"
      }
    ],
    "favoriteCard": {
      "name": "ブランセの花束",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 280,
                  "2": 308,
                  "3": 336,
                  "4": 364,
                  "5": 392,
                  "6": 420,
                  "7": 448,
                  "8": 476,
                  "9": 504,
                  "10": 532,
                  "11": 560,
                  "12": 588
                }
              },
              {
                "valueKind": "最後の一撃の魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 420,
                  "2": 462,
                  "3": 504,
                  "4": 546,
                  "5": 588,
                  "6": 630,
                  "7": 672,
                  "8": 714,
                  "9": 756,
                  "10": 798,
                  "11": 840,
                  "12": 882
                }
              },
              {
                "valueKind": "強化シンクローズの魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 340,
                  "2": 374,
                  "3": 408,
                  "4": 442,
                  "5": 476,
                  "6": 510,
                  "7": 544,
                  "8": 578,
                  "9": 612,
                  "10": 646,
                  "11": 680,
                  "12": 714
                }
              },
              {
                "valueKind": "強化シンクローズの最後の一撃の魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 510,
                  "2": 561,
                  "3": 612,
                  "4": 663,
                  "5": 714,
                  "6": 765,
                  "7": 816,
                  "8": 867,
                  "9": 918,
                  "10": 969,
                  "11": 1020,
                  "12": 1071
                }
              },
              {
                "valueKind": "強化シンクローズ発動確率",
                "valueClass": "倍率",
                "effectType": "条件",
                "effectTarget": "自身",
                "fixedValue": 75
              },
              {
                "valueKind": "強化シンクローズ発動回数",
                "valueClass": "回数",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "fixedValue": 2
              }
            ],
            "targetSkill": "低学年",
            "skillName": "シンクローズ・ブロッサム",
            "description": "最大3回跳ね返るシンクローズを放つ。一定確率で強化されたシンクローズを2回放つ。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "魔法攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "ブランセの魔法攻撃力、会心、会心ダメージが増加する。"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "fricle",
    "name": "フリックル",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "魔女",
      "role": "攻撃",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 20
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 300,
              "2": 330,
              "3": 360,
              "4": 390,
              "5": 420,
              "6": 450,
              "7": 480,
              "8": 510,
              "9": 540,
              "10": 570,
              "11": 600,
              "12": 630
            }
          },
          {
            "valueKind": "召喚獣消滅時魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 60
          },
          {
            "valueKind": "召喚獣消滅時魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 120
          }
        ],
        "skillType": "低学年",
        "skillName": "スティンギングゲートキーパー",
        "description": "敵に範囲魔法ダメージを与え、召喚された棘の触手を全て消滅させる。"
      },
      {
        "effects": [
          {
            "valueKind": "毎秒魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "近い敵3体",
            "levels": {
              "1": 70,
              "2": 80,
              "3": 90,
              "4": 100,
              "5": 110,
              "6": 120,
              "7": 130,
              "8": 140,
              "9": 150,
              "10": 160,
              "11": 170,
              "12": 180
            }
          },
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "持続時間",
            "effectType": "攻撃",
            "effectTarget": "近い敵3体",
            "fixedValue": 5
          },
          {
            "valueKind": "バインド",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "近い敵3体"
          },
          {
            "valueKind": "バインド",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "近い敵3体",
            "fixedValue": 5
          },
          {
            "valueKind": "沈黙",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "近い敵3体"
          },
          {
            "valueKind": "沈黙",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "近い敵3体",
            "fixedValue": 7
          },
          {
            "valueKind": "棘の触手召喚",
            "valueClass": "召喚",
            "effectType": "召喚",
            "effectTarget": "敵",
            "fixedValue": 1
          }
        ],
        "skillType": "高学年",
        "skillName": "ガードオブトーチャー",
        "description": "棘の蔓で最も近くにいる敵3名を縛り付け、1秒ごとに魔法ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "狂気対象与ダメージ量増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 40,
            "2": 44,
            "3": 48,
            "4": 52,
            "5": 56,
            "6": 60,
            "7": 64,
            "8": 68,
            "9": 72,
            "10": 76,
            "11": 80,
            "12": 84
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "狂気の敵へのダメージが増加する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "追跡する蔓を発射し、敵に魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "棘の触手召喚",
            "valueClass": "召喚",
            "effectType": "召喚",
            "effectTarget": "敵",
            "fixedValue": 1
          },
          {
            "valueKind": "召喚獣魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "近くの敵",
            "fixedValue": 15
          },
          {
            "valueKind": "召喚獣消滅時魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 30
          },
          {
            "valueKind": "召喚獣消滅時魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 60
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で棘の触手を召喚する。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "haley",
    "name": "ヘイリー",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "エルフ",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 316.8,
              "2": 346.5,
              "3": 376.2,
              "4": 405.9,
              "5": 435.6,
              "6": 465.3,
              "7": 495,
              "8": 524.7,
              "9": 554.4,
              "10": 584.1,
              "11": 613.8,
              "12": 643.5
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3
          },
          {
            "valueKind": "苦痛",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "命中した敵"
          },
          {
            "valueKind": "苦痛",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "命中した敵",
            "fixedValue": 5
          }
        ],
        "skillType": "低学年",
        "skillName": "受け入れ難い人物",
        "description": "鞭を3回振り回して敵に範囲物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "毎秒物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 58,
              "2": 63.8,
              "3": 69.6,
              "4": 75.4,
              "5": 81.2,
              "6": 87,
              "7": 92.8,
              "8": 98.6,
              "9": 104.4,
              "10": 110.2,
              "11": 116,
              "12": 121.8
            }
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "持続時間",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 7
          },
          {
            "valueKind": "目隠し",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "目隠し",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 10
          }
        ],
        "skillType": "高学年",
        "skillName": "プランB",
        "description": "煙幕地帯で範囲物理持続ダメージを与える。",
        "cooldownSeconds": 32
      },
      {
        "effects": [
          {
            "valueKind": "対象苦痛状態時与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 23,
              "3": 26,
              "4": 29,
              "5": 32,
              "6": 35,
              "7": 38,
              "8": 41,
              "9": 44,
              "10": 47,
              "11": 50,
              "12": 53
            }
          },
          {
            "valueKind": "対象火傷状態時与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 23,
              "3": 26,
              "4": 29,
              "5": 32,
              "6": 35,
              "7": 38,
              "8": 41,
              "9": 44,
              "10": 47,
              "11": 50,
              "12": 53
            }
          },
          {
            "valueKind": "対象毒状態時与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 23,
              "3": 26,
              "4": 29,
              "5": 32,
              "6": 35,
              "7": 38,
              "8": 41,
              "9": 44,
              "10": 47,
              "11": 50,
              "12": 53
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "敵が苦痛、火傷、毒状態の場合、状態異常の種類数に応じてダメージが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "fixedValue": 85
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵に鞭を振るい、範囲物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "発動間隔",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 4
          },
          {
            "valueKind": "物理攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 20
          },
          {
            "valueKind": "物理攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "魔法防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 40
          },
          {
            "valueKind": "魔法防御力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "4回攻撃するごとに鞭を整える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "宇宙船艦",
      "levels": {
        "1": {
          "name": "宇宙船艦ヘイリー",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "地球をフライバイ",
          "stats": [],
          "effects": [
            {
              "valueKind": "攻撃力増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "condition": "強化攻撃バフ獲得時",
              "effectTarget": "自身を除く中列の味方使徒",
              "fixedValue": 32
            },
            {
              "valueKind": "攻撃力増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "condition": "強化攻撃バフ獲得時",
              "effectTarget": "自身を除く中列の味方使徒",
              "fixedValue": 6
            },
            {
              "valueKind": "防御力増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "condition": "強化攻撃バフ獲得時",
              "effectTarget": "自身を除く中列の味方使徒",
              "fixedValue": 16
            },
            {
              "valueKind": "防御力増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "condition": "強化攻撃バフ獲得時",
              "effectTarget": "自身を除く中列の味方使徒",
              "fixedValue": 6
            },
            {
              "valueKind": "苦痛",
              "valueClass": "状態付与",
              "effectType": "デバフ",
              "effectTarget": "低学年スキルの最後の一撃",
              "targetSkill": "敵",
              "reference": "低学年スキル"
            },
            {
              "valueKind": "苦痛",
              "valueClass": "持続時間",
              "effectType": "デバフ",
              "effectTarget": "低学年スキルの最後の一撃",
              "targetSkill": "敵",
              "reference": "低学年スキル",
              "fixedValue": 5
            },
            {
              "valueKind": "軍艦召喚",
              "valueClass": "召喚",
              "effectType": "召喚",
              "effectTarget": "高学年スキル使用時",
              "targetSkill": "自身",
              "reference": "高学年スキル"
            },
            {
              "valueKind": "砲弾総物理ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "condition": "軍艦召喚時",
              "effectTarget": "前方の敵",
              "targetSkill": "高学年スキル",
              "fixedValue": 2250
            },
            {
              "valueKind": "砲弾物理ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "condition": "軍艦召喚時",
              "effectTarget": "前方の敵",
              "targetSkill": "高学年スキル",
              "fixedValue": 375
            },
            {
              "valueKind": "砲弾数",
              "valueClass": "ヒット数",
              "effectType": "攻撃",
              "condition": "軍艦召喚時",
              "effectTarget": "前方の敵",
              "targetSkill": "高学年スキル",
              "fixedValue": 6
            }
          ],
          "description": "強化攻撃バフの獲得時、自身を除く中列の味方使徒の攻撃力と防御力を増加させる。低学年スキルの最後の一撃に確定で苦痛を付与する。高学年スキル使用時、軍艦が召喚される。軍艦は前方の敵に砲弾を6発降らせ、範囲物理ダメージを与える。"
        },
        "3": {
          "name": "味方基地防衛作戦",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "会心",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "物理防御力",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "味方全員",
              "fixedValue": 7.5
            }
          ],
          "description": "味方全員の敵からの被ダメージ量を減少させる。"
        }
      }
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "beni",
    "name": "ベニー",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 5,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "攻撃力",
            "levels": {
              "1": 600,
              "2": 660,
              "3": 720,
              "4": 780,
              "5": 840,
              "6": 900,
              "7": 960,
              "8": 1020,
              "9": 1080,
              "10": 1140,
              "11": 1200,
              "12": 1260
            }
          },
          {
            "valueKind": "会心率増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 16,
              "2": 16.4,
              "3": 16.8,
              "4": 17.2,
              "5": 17.6,
              "6": 18,
              "7": 18.4,
              "8": 18.8,
              "9": 19.2,
              "10": 19.6,
              "11": 20,
              "12": 20.4
            }
          },
          {
            "valueKind": "会心ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 60,
              "2": 64,
              "3": 68,
              "4": 72,
              "5": 76,
              "6": 80,
              "7": 84,
              "8": 88,
              "9": 92,
              "10": 96,
              "11": 100,
              "12": 104
            }
          },
          {
            "valueKind": "会心系バフ",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 8
          }
        ],
        "skillType": "低学年",
        "skillName": "魚ウマウマ",
        "description": "魚を食べてHPを回復する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 660,
              "2": 726,
              "3": 792,
              "4": 858,
              "5": 924,
              "6": 990,
              "7": 1056,
              "8": 1122,
              "9": 1188,
              "10": 1254,
              "11": 1320,
              "12": 1386
            }
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 4
          }
        ],
        "skillType": "高学年",
        "skillName": "ぶった切るよ～！",
        "description": "斧で地面を叩きつけ、範囲物理ダメージを与える。",
        "cooldownSeconds": 58
      },
      {
        "effects": {
          "valueKind": "SP回復",
          "valueClass": "固定値",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 6,
            "2": 7,
            "3": 8,
            "4": 9,
            "5": 10,
            "6": 11,
            "7": 12,
            "8": 13,
            "9": 14,
            "10": 15,
            "11": 16,
            "12": 17
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "直接ダメージを受けるとSPが回復する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "斧を振り回して、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "belita",
    "name": "ベリータ",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "魔女",
      "role": "攻撃",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "levels": {
            "1": 430,
            "2": 473,
            "3": 516,
            "4": 559,
            "5": 602,
            "6": 645,
            "7": 688,
            "8": 731,
            "9": 774,
            "10": 817,
            "11": 860,
            "12": 903
          }
        },
        "skillType": "低学年",
        "skillName": "ディメンションバースト",
        "description": "次元エネルギーを爆発させ範囲魔法ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 949.62,
              "2": 1039.58,
              "3": 1129.55,
              "4": 1219.51,
              "5": 1309.48,
              "6": 1399.44,
              "7": 1489.4,
              "8": 1579.37,
              "9": 1669.33,
              "10": 1759.3,
              "11": 1849.26,
              "12": 1939.22
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 12
          }
        ],
        "skillType": "高学年",
        "skillName": "クリムゾンレイン",
        "description": "クリムゾンレインで爆撃し、敵に12回範囲魔法ダメージを与える。",
        "cooldownSeconds": 22
      },
      {
        "effects": {
          "valueKind": "前列使徒対象与ダメージ量増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 40,
            "2": 44,
            "3": 48,
            "4": 52,
            "5": 56,
            "6": 60,
            "7": 64,
            "8": 68,
            "9": 72,
            "10": 76,
            "11": 80,
            "12": 84
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "前列の使徒への与ダメージ量が上昇する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "爆撃魔法を発動させて敵に範囲魔法ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "fixedValue": 200
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率でマナを凝縮した爆撃魔法を発動させて敵に範囲魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "veroo",
    "name": "ベル",
    "basic": {
      "rarity": 1,
      "personality": "憂鬱",
      "race": "幽霊",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 60,
              "2": 66,
              "3": 72,
              "4": 78,
              "5": 84,
              "6": 90,
              "7": 96,
              "8": 102,
              "9": 108,
              "10": 114,
              "11": 120,
              "12": 126
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "fixedValue": 2
          },
          {
            "valueKind": "最後の一撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 100,
              "2": 110,
              "3": 120,
              "4": 130,
              "5": 140,
              "6": 150,
              "7": 160,
              "8": 170,
              "9": 180,
              "10": 190,
              "11": 200,
              "12": 210
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "斧が飛ぶよ～",
        "description": "斧を3個投げ、ランダムな敵に物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 200,
            "2": 220,
            "3": 240,
            "4": 260,
            "5": 280,
            "6": 300,
            "7": 320,
            "8": 340,
            "9": 360,
            "10": 380,
            "11": 400,
            "12": 420
          }
        },
        "skillType": "高学年",
        "skillName": "教主の天罰 - ベル",
        "description": "教主の力を借りて敵に物理ダメージを与える。",
        "cooldownSeconds": 26
      },
      {
        "effects": {
          "valueKind": "攻撃速度増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "攻撃速度が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "斧を投げつけ、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "velvet",
    "name": "ベルベット",
    "basic": {
      "rarity": 3,
      "personality": "冷静",
      "race": "魔女",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 200,
      "spRecoveryPerSecond": 25
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 4,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "攻撃力",
            "levels": {
              "1": 200,
              "2": 215,
              "3": 230,
              "4": 245,
              "5": 260,
              "6": 275,
              "7": 290,
              "8": 305,
              "9": 320,
              "10": 335,
              "11": 350,
              "12": 365
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 25,
              "2": 27,
              "3": 29,
              "4": 31,
              "5": 33,
              "6": 35,
              "7": 37,
              "8": 39,
              "9": 41,
              "10": 43,
              "11": 45,
              "12": 47
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "挑発",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "挑発",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "かかってきな！",
        "description": "敵を挑発してHPを回復する。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 216,
              "2": 237.6,
              "3": 259.2,
              "4": 280.8,
              "5": 302.4,
              "6": 324,
              "7": 345.6,
              "8": 367.2,
              "9": 388.8,
              "10": 410.4,
              "11": 432,
              "12": 453.6
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 11
          },
          {
            "valueKind": "最後の一撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 54,
              "2": 59.4,
              "3": 64.8,
              "4": 70.2,
              "5": 75.6,
              "6": 81,
              "7": 86.4,
              "8": 91.8,
              "9": 97.2,
              "10": 102.6,
              "11": 108,
              "12": 113.4
            }
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "無敵",
            "valueClass": "状態付与",
            "effectType": "バフ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "無敵",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "魔法：遠心分離",
        "description": "高速回転して斧で周囲を薙ぎ払い、敵に範囲物理ダメージを11回与える。",
        "cooldownSeconds": 20
      },
      {
        "effects": {
          "valueKind": "最大HP増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "最大HPが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "fixedValue": 125
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "斧を振るい、敵に範囲物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "posher",
    "name": "ポーシャー",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "魔女",
      "role": "支援",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 200,
      "spRecoveryPerSecond": 50
    },
    "statTypes": {
      "hp": 1,
      "atkP": 0,
      "atkM": 4,
      "defP": 1,
      "defM": 1,
      "crit": 4,
      "critDmg": 4,
      "critRes": 1,
      "critDmgRes": 1
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "HP割合が最も少ない味方",
            "reference": "攻撃力",
            "levels": {
              "1": "350～700",
              "2": "375～750",
              "3": "400～800",
              "4": "425～850",
              "5": "450～900",
              "6": "475～950",
              "7": "500～1000",
              "8": "525～1050",
              "9": "550～1100",
              "10": "575～1150",
              "11": "600～1200",
              "12": "625～1250",
              "13": "650～1300",
              "14": "675～1350",
              "15": "700～1400"
            }
          },
          {
            "valueKind": "赤ポーションの魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": "650～1000",
              "2": "690～1080",
              "3": "690～1080",
              "4": "690～1080",
              "5": "690～1080",
              "6": "690～1080",
              "7": "690～1080",
              "8": "690～1080",
              "9": "690～1080",
              "10": "690～1080",
              "11": "690～1080",
              "12": "1090～1880",
              "13": "1130～1960",
              "14": "1170～2040",
              "15": "1210～2120"
            }
          },
          {
            "valueKind": "黄ポーションの魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": "480～800",
              "2": "540～860",
              "3": "600～920",
              "4": "660～980",
              "5": "720～1040",
              "6": "780～1100",
              "7": "840～1160",
              "8": "900～1220",
              "9": "960～1280",
              "10": "1020～1340",
              "11": "1080～1400",
              "12": "1140～1460",
              "13": "1200～1520",
              "14": "1260～1580",
              "15": "1320～1640"
            }
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "どれにしようかな？",
        "description": "緑のポーションで味方HPを回復"
      },
      {
        "effects": [
          {
            "valueKind": "変異",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵2体"
          },
          {
            "valueKind": "変異",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵2体",
            "levels": {
              "1": 3,
              "2": 3.2,
              "3": 3.4,
              "4": 3.6,
              "5": 3.8,
              "6": 4,
              "7": 4.2,
              "8": 4.4,
              "9": 4.6,
              "10": 4.8,
              "11": 5,
              "12": 5.2,
              "13": 5.4,
              "14": 5.6,
              "15": 5.8
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "いももかぼちゃの仲間でしょ！",
        "description": "ランダムな敵2体に変異を付与",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "被スキルダメージ量減少",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 24,
            "2": 26,
            "3": 28,
            "4": 30,
            "5": 32,
            "6": 34,
            "7": 36,
            "8": 38,
            "9": 40,
            "10": 42,
            "11": 44,
            "12": 46,
            "13": 48,
            "14": 50,
            "15": 52
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "スキル攻撃の被ダメージ量が減少"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "ポーションを投げつけ魔法ダメージ"
      },
      {
        "effects": {
          "valueKind": "総魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "ランダムな敵",
          "fixedValue": 250
        },
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "4回目の攻撃時にポーション2個で総魔法ダメージ"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "みんなのポーション",
      "levels": {
        "1": {
          "name": "ポーション職人ポーシャー",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "臨床実験大成功",
          "stats": [],
          "effects": [
            {
              "valueKind": "SP回復量",
              "valueClass": "固定値",
              "effectType": "回復",
              "effectTarget": "後列の味方",
              "targetSkill": "低学年スキル",
              "fixedValue": "20～50"
            },
            {
              "valueKind": "変異対象追加",
              "valueClass": "対象数",
              "effectType": "デバフ",
              "effectTarget": "敵",
              "targetSkill": "高学年スキル",
              "fixedValue": 1
            }
          ],
          "description": "低学年スキルを使用すると、後列の味方のSPを回復する。高学年スキルに変異が1体追加される。"
        },
        "3": {
          "name": "新薬革命",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "会心抵抗",
              "increaseP": 6
            },
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ抵抗",
              "increaseP": 6
            }
          ],
          "effects": []
        }
      }
    },
    "board": {
      "race": "魔女",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "mago",
    "name": "マーゴ",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "獣人",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 150,
      "spRecoveryPerSecond": 44
    },
    "statTypes": {
      "hp": 2,
      "atkP": 0,
      "atkM": 2,
      "defP": 2,
      "defM": 2,
      "crit": 3,
      "critDmg": 3,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "毎秒HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方全体",
            "reference": "自身の最大HP",
            "levels": {
              "1": 5,
              "2": 5.6,
              "3": 6.2,
              "4": 6.8,
              "5": 7.4,
              "6": 8,
              "7": 8.6,
              "8": 9.2,
              "9": 9.8,
              "10": 10.4,
              "11": 11,
              "12": 11.6
            }
          },
          {
            "valueKind": "HP回復",
            "valueClass": "持続時間",
            "effectType": "回復",
            "effectTarget": "味方全体",
            "fixedValue": 8
          }
        ],
        "skillType": "低学年",
        "skillName": "マーゴマックスリカバリー",
        "description": "1秒ごとに味方全員のHPを回復させる。"
      },
      {
        "effects": {
          "valueKind": "総魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 846.5,
            "2": 942.9727273,
            "3": 1039.445455,
            "4": 1135.918182,
            "5": 1232.390909,
            "6": 1328.863636,
            "7": 1425.336364,
            "8": 1521.809091,
            "9": 1618.281818,
            "10": 1714.754545,
            "11": 1811.227273,
            "12": 1907.7
          }
        },
        "skillType": "高学年",
        "skillName": "メェ～龍拳！",
        "description": "敵に友達のヒツジを突進させ、魔法ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "バフ解除",
            "valueClass": "解除",
            "effectType": "デバフ",
            "effectTarget": "指定範囲内の敵1体"
          },
          {
            "valueKind": "バフ解除",
            "valueClass": "クールタイム",
            "effectType": "デバフ",
            "effectTarget": "指定範囲内の敵1体",
            "levels": {
              "1": 23,
              "2": 22,
              "3": 21,
              "4": 20,
              "5": 19,
              "6": 18,
              "7": 17,
              "8": 16,
              "9": 15,
              "10": 14,
              "11": 13,
              "12": 12
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "指定範囲内の敵1名にかかったバフをすべて解除する。"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を発射し、敵に魔法ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "maestromk2",
    "name": "マエストロMK2",
    "basic": {
      "rarity": 2,
      "personality": "狂気",
      "race": "エルフ",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 5,
      "atkP": 5,
      "atkM": 0,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "シールド",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "前列の味方",
            "reference": "最大HP",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          },
          {
            "valueKind": "シールド",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "前列の味方",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "ロボティックマトリクス",
        "description": "前列の味方にシールドを付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 100,
              "2": 110,
              "3": 120,
              "4": 130,
              "5": 140,
              "6": 150,
              "7": 160,
              "8": 170,
              "9": 180,
              "10": 190,
              "11": 200,
              "12": 210
            }
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "ソナーショックウェーブ",
        "description": "範囲内の対象に衝撃波を放出し、物理ダメージを与える。",
        "cooldownSeconds": 16
      },
      {
        "effects": [
          {
            "valueKind": "基本攻撃与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 30,
              "2": 32,
              "3": 34,
              "4": 36,
              "5": 38,
              "6": 40,
              "7": 42,
              "8": 44,
              "9": 46,
              "10": 48,
              "11": 50,
              "12": 52
            }
          },
          {
            "valueKind": "毒免疫",
            "valueClass": "免疫",
            "effectType": "パッシブ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "苦痛免疫",
            "valueClass": "免疫",
            "effectType": "パッシブ",
            "effectTarget": "自身"
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "基本攻撃のダメージ量が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 175
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "拳を振るい、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "mayo",
    "name": "マヨ",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "妖精",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "最も攻撃力が高い敵",
            "levels": {
              "1": 118.8,
              "2": 130.6818182,
              "3": 142.5636364,
              "4": 154.4454545,
              "5": 166.3272727,
              "6": 178.2090909,
              "7": 190.0909091,
              "8": 201.9727273,
              "9": 213.8545455,
              "10": 225.7363636,
              "11": 237.6181818,
              "12": 249.5
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "最も攻撃力が高い敵",
            "fixedValue": 3
          },
          {
            "valueKind": "毒",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "最も攻撃力が高い敵"
          },
          {
            "valueKind": "毒",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "最も攻撃力が高い敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "収集家のルール",
        "description": "最も攻撃力が高い敵に毒矢を放って物理ダメージを3回与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 140,
              "2": 154,
              "3": 168,
              "4": 182,
              "5": 196,
              "6": 210,
              "7": 224,
              "8": 238,
              "9": 252,
              "10": 266,
              "11": 280,
              "12": 294
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "fixedValue": 8
          },
          {
            "valueKind": "毒",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵"
          },
          {
            "valueKind": "毒",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵",
            "fixedValue": 4
          }
        ],
        "skillType": "高学年",
        "skillName": "それは私のコレクションっす。",
        "description": "毒矢を発射し、ランダムな敵に8回物理ダメージを与える。",
        "cooldownSeconds": 11
      },
      {
        "effects": [
          {
            "valueKind": "強化攻撃与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 28,
              "3": 32,
              "4": 36,
              "5": 40,
              "6": 44,
              "7": 48,
              "8": 52,
              "9": 56,
              "10": 60,
              "11": 64,
              "12": 68
            }
          },
          {
            "valueKind": "毒終了時追加物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "毒が消えた敵",
            "levels": {
              "1": 25,
              "2": 28,
              "3": 31,
              "4": 34,
              "5": 37,
              "6": 40,
              "7": 43,
              "8": 46,
              "9": 49,
              "10": 52,
              "11": 55,
              "12": 58
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃のダメージ量が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "吹き矢を飛ばして敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 125
          },
          {
            "valueKind": "毒",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "毒",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で毒矢を飛ばして敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "marie",
    "name": "マリー",
    "basic": {
      "rarity": 2,
      "personality": "活発",
      "race": "妖精",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 150,
              "2": 160,
              "3": 170,
              "4": 180,
              "5": 190,
              "6": 200,
              "7": 210,
              "8": 220,
              "9": 230,
              "10": 240,
              "11": 250,
              "12": 260
            }
          },
          {
            "valueKind": "火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "爆弾のお届け物です～",
        "description": "特製爆弾を投げつけて敵に範囲物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "levels": {
            "1": 250,
            "2": 270,
            "3": 290,
            "4": 310,
            "5": 330,
            "6": 350,
            "7": 370,
            "8": 390,
            "9": 410,
            "10": 430,
            "11": 450,
            "12": 470
          }
        },
        "skillType": "高学年",
        "skillName": "は～じけるよ～！",
        "description": "高性能爆弾を設置した後、爆発させて敵に範囲物理ダメージを与える。",
        "cooldownSeconds": 40
      },
      {
        "effects": [
          {
            "valueKind": "強化攻撃確率増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          },
          {
            "valueKind": "強化攻撃与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 28,
              "3": 32,
              "4": 36,
              "5": 40,
              "6": 44,
              "7": 48,
              "8": 52,
              "9": 56,
              "10": 60,
              "11": 64,
              "12": 68
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃の確率が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵に爆弾を投げつけて物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 125
          },
          {
            "valueKind": "火傷",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "火傷",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で強化爆弾を投げつけて敵に範囲物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "mynx",
    "name": "ミンス",
    "basic": {
      "rarity": 1,
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 128.7,
              "2": 141.57,
              "3": 154.44,
              "4": 167.31,
              "5": 180.18,
              "6": 193.05,
              "7": 205.92,
              "8": 218.79,
              "9": 231.66,
              "10": 244.53,
              "11": 257.4,
              "12": 270.27
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "ガオオ～",
        "description": "大声を出して敵に範囲物理ダメージを3回与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 360,
            "2": 396,
            "3": 432,
            "4": 468,
            "5": 504,
            "6": 540,
            "7": 576,
            "8": 612,
            "9": 648,
            "10": 684,
            "11": 720,
            "12": 756
          }
        },
        "skillType": "高学年",
        "skillName": "教主の天罰 - ミンス",
        "description": "教主の力を借りて敵に物理ダメージを与える。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "攻撃力増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "攻撃力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "剣を振るい、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "maison",
    "name": "メゾン",
    "basic": {
      "rarity": 1,
      "personality": "狂気",
      "race": "幽霊",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 20
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 120,
              "2": 132,
              "3": 144,
              "4": 156,
              "5": 168,
              "6": 180,
              "7": 192,
              "8": 204,
              "9": 216,
              "10": 228,
              "11": 240,
              "12": 252
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "fixedValue": 2
          },
          {
            "valueKind": "最後の一撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 80,
              "2": 88,
              "3": 96,
              "4": 104,
              "5": 112,
              "6": 120,
              "7": 128,
              "8": 136,
              "9": 144,
              "10": 152,
              "11": 160,
              "12": 168
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "手裏剣飛ばすよ～！",
        "description": "手裏剣を3個投げ、ランダムな敵に物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "levels": {
            "1": 300,
            "2": 330,
            "3": 360,
            "4": 390,
            "5": 420,
            "6": 450,
            "7": 480,
            "8": 510,
            "9": 540,
            "10": 570,
            "11": 600,
            "12": 630
          }
        },
        "skillType": "高学年",
        "skillName": "教主の天罰 - メゾン",
        "description": "教主の力を借りて敵に物理ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "会心増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 60
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "手裏剣を投げ、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "meluna",
    "name": "メロナ",
    "basic": {
      "rarity": 2,
      "personality": "冷静",
      "race": "精霊",
      "role": "支援",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 1,
      "atkP": 0,
      "atkM": 4,
      "defP": 1,
      "defM": 1,
      "crit": 4,
      "critDmg": 4,
      "critRes": 1,
      "critDmgRes": 1
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 50,
              "2": 55,
              "3": 60,
              "4": 65,
              "5": 70,
              "6": 75,
              "7": 80,
              "8": 85,
              "9": 90,
              "10": 95,
              "11": 100,
              "12": 105
            }
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "味方全員",
            "reference": "与ダメージ量",
            "levels": {
              "1": 480,
              "2": 510,
              "3": 540,
              "4": 570,
              "5": 600,
              "6": 630,
              "7": 660,
              "8": 690,
              "9": 720,
              "10": 750,
              "11": 780,
              "12": 810
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "fixedValue": 5
          }
        ],
        "skillType": "低学年",
        "skillName": "メロンに、メロメロン！",
        "description": "メロンの雨を5回降らせて敵に範囲魔法ダメージを与え、味方全員のHPを回復する。",
        "cooldownSeconds": 0
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 100,
              "2": 110,
              "3": 120,
              "4": 130,
              "5": 140,
              "6": 150,
              "7": 160,
              "8": 170,
              "9": 180,
              "10": 190,
              "11": 200,
              "12": 210
            }
          },
          {
            "valueKind": "爆発魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/範囲",
            "levels": {
              "1": 100,
              "2": 110,
              "3": 120,
              "4": 130,
              "5": 140,
              "6": 150,
              "7": 160,
              "8": 170,
              "9": 180,
              "10": 190,
              "11": 200,
              "12": 210
            }
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方",
            "reference": "与ダメージ量",
            "levels": {
              "1": 260,
              "2": 272,
              "3": 284,
              "4": 296,
              "5": 308,
              "6": 320,
              "7": 332,
              "8": 344,
              "9": 356,
              "10": 368,
              "11": 380,
              "12": 392
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "メーロンマスクX",
        "description": "巨大メロンをランダムな敵に向かって転がし、範囲魔法ダメージを与える。目標に到達すると爆発してダメージを与え、残りHP割合が最も低い味方のHPを回復する。",
        "cooldownSeconds": 14
      },
      {
        "effects": {
          "valueKind": "強化攻撃確率増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "自身",
          "levels": {
            "1": 10,
            "2": 11,
            "3": 12,
            "4": 13,
            "5": 14,
            "6": 15,
            "7": 16,
            "8": 17,
            "9": 18,
            "10": 19,
            "11": 20,
            "12": 21
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃確率が増加する。",
        "cooldownSeconds": 0
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "メロンを投げつけ、敵にダメージを与える。",
        "cooldownSeconds": 0
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 100
          },
          {
            "valueKind": "目隠し",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "目隠し",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "levels": {
              "1": 3
            }
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で高級メロンを投げつけて敵にダメージを与え、目隠しを付与する。",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "momo",
    "name": "モモ",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "後列",
      "attackType": "魔法",
      "initialSp": 100,
      "spRecoveryPerSecond": 20
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 4,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "召喚獣の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 30,
              "2": 34,
              "3": 38,
              "4": 42,
              "5": 46,
              "6": 50,
              "7": 54,
              "8": 58,
              "9": 62,
              "10": 66,
              "11": 70,
              "12": 74,
              "13": 78,
              "14": 82,
              "15": 86
            }
          },
          {
            "valueKind": "召喚獣の自爆ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "周囲の敵",
            "levels": {
              "1": 45,
              "2": 51,
              "3": 57,
              "4": 63,
              "5": 69,
              "6": 75,
              "7": 81,
              "8": 87,
              "9": 93,
              "10": 99,
              "11": 105,
              "12": 111,
              "13": 117,
              "14": 123,
              "15": 129
            }
          },
          {
            "valueKind": "召喚",
            "valueClass": "持続時間",
            "effectType": "召喚",
            "effectTarget": "分身",
            "fixedValue": 12
          },
          {
            "valueKind": "被ダメージ耐久度",
            "valueClass": "回数",
            "effectType": "召喚",
            "effectTarget": "分身",
            "fixedValue": 3
          },
          {
            "valueKind": "召喚獣",
            "valueClass": "対象数",
            "effectType": "召喚",
            "effectTarget": "分身",
            "levels": {
              "1": 2,
              "2": 2,
              "3": 2,
              "4": 2,
              "5": 2,
              "6": 3,
              "7": 3,
              "8": 3,
              "9": 3,
              "10": 3,
              "11": 4,
              "12": 4,
              "13": 4,
              "14": 4,
              "15": 4
            }
          },
          {
            "valueKind": "感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "周囲の敵"
          },
          {
            "valueKind": "感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "周囲の敵",
            "fixedValue": 2
          }
        ],
        "skillType": "低学年",
        "skillName": "倍返しで抱きしめるっ",
        "description": "ランダムな敵に魔法ダメージを与える分身を召喚する"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "指定範囲の敵",
            "levels": {
              "1": 370,
              "2": 395,
              "3": 420,
              "4": 445,
              "5": 470,
              "6": 495,
              "7": 520,
              "8": 545,
              "9": 570,
              "10": 595,
              "11": 620,
              "12": 645,
              "13": 670,
              "14": 695,
              "15": 720
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "指定範囲の敵",
            "fixedValue": 4
          },
          {
            "valueKind": "召喚獣",
            "valueClass": "対象数",
            "effectType": "召喚",
            "effectTarget": "分身",
            "fixedValue": 1
          },
          {
            "valueKind": "召喚獣の魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵",
            "levels": {
              "1": 30,
              "2": 34,
              "3": 38,
              "4": 42,
              "5": 46,
              "6": 50,
              "7": 54,
              "8": 58,
              "9": 62,
              "10": 66,
              "11": 70,
              "12": 74,
              "13": 78,
              "14": 82,
              "15": 86
            }
          },
          {
            "valueKind": "召喚獣の自爆ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "周囲の敵",
            "levels": {
              "1": 45,
              "2": 51,
              "3": 57,
              "4": 63,
              "5": 69,
              "6": 75,
              "7": 81,
              "8": 87,
              "9": 93,
              "10": 99,
              "11": 105,
              "12": 111,
              "13": 117,
              "14": 123,
              "15": 129
            }
          }
        ],
        "skillType": "高学年",
        "skillName": "秒殺リスサンダー",
        "description": "範囲魔法ダメージを4回与える",
        "cooldownSeconds": 30
      },
      {
        "effects": [
          {
            "valueKind": "発動条件",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 2
          },
          {
            "valueKind": "クールタイム",
            "valueClass": "クールタイム",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 15,
              "2": 14.5,
              "3": 14,
              "4": 13.5,
              "5": 13,
              "6": 12.5,
              "7": 12,
              "8": 11.5,
              "9": 11,
              "10": 10.5,
              "11": 10,
              "12": 9.5,
              "13": 9,
              "14": 8.5,
              "15": 8
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 16,
              "2": 17,
              "3": 18,
              "4": 19,
              "5": 20,
              "6": 21,
              "7": 22,
              "8": 23,
              "9": 24,
              "10": 25,
              "11": 26,
              "12": 27,
              "13": 28,
              "14": 29,
              "15": 30
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 16,
              "2": 17,
              "3": 18,
              "4": 19,
              "5": 20,
              "6": 21,
              "7": 22,
              "8": 23,
              "9": 24,
              "10": 25,
              "11": 26,
              "12": 27,
              "13": 28,
              "14": 28,
              "15": 30
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "2回直接ダメージを受けると才気煥発を発動する"
      },
      {
        "effects": [
          {
            "valueKind": "総魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 150
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "敵に電気手裏剣を2回投げ、魔法ダメージを与える"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "伝説の手裏剣",
      "levels": {
        "1": {
          "name": "桜花手裏剣",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "魔法攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "目覚めたニンジャ",
          "stats": [],
          "effects": [
            {
              "valueKind": "召喚獣の自爆ダメージ増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "召喚獣",
              "targetSkill": "召喚獣自爆",
              "fixedValue": 200
            },
            {
              "valueKind": "SP回復量",
              "valueClass": "固定値",
              "effectType": "回復",
              "effectTarget": "自身",
              "targetSkill": "召喚獣破壊時",
              "fixedValue": 10
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "高学年スキル",
              "fixedValue": 50
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "高学年スキル",
              "fixedValue": 3
            }
          ],
          "description": "召喚獣の自爆ダメージが増加する。召喚獣が破壊されると、自身のSPを回復する。高学年スキル使用時、一定時間、モモの被ダメージ量が減少する。"
        },
        "3": {
          "name": "モモ～ハッ！",
          "stats": [],
          "effects": [
            {
              "valueKind": "与ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 10.5
            },
            {
              "valueKind": "被ダメージ量減少",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "味方全体",
              "fixedValue": 4.5
            }
          ],
          "description": "味方全員の敵への与ダメージ量が増加し、味方全員の敵からの被ダメージ量が減少する。"
        }
      }
    },
    "board": {
      "race": "獣人",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "yumimi",
    "name": "ユミミ",
    "basic": {
      "rarity": 2,
      "personality": "狂気",
      "race": "獣人",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "指定範囲内で最も遠い敵",
          "levels": {
            "1": 200,
            "2": 220,
            "3": 240,
            "4": 260,
            "5": 280,
            "6": 300,
            "7": 320,
            "8": 340,
            "9": 360,
            "10": 380,
            "11": 400,
            "12": 420
          }
        },
        "skillType": "低学年",
        "skillName": "発射！シュー～",
        "description": "指定範囲内で最も遠い敵に強化された矢を発射して物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "最も離れている敵/範囲内の敵",
            "levels": {
              "1": 300,
              "2": 330,
              "3": 360,
              "4": 390,
              "5": 420,
              "6": 450,
              "7": 480,
              "8": 510,
              "9": 540,
              "10": 570,
              "11": 600,
              "12": 630
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "最も離れている敵/範囲内の敵",
            "fixedValue": 5
          }
        ],
        "skillType": "高学年",
        "skillName": "発射！矢の雨！",
        "description": "力を溜めて空へ矢を放ち、最も離れている敵に範囲物理ダメージを5回与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": {
          "valueKind": "攻撃速度増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 20,
            "2": 22,
            "3": 24,
            "4": 26,
            "5": 28,
            "6": 30,
            "7": 32,
            "8": 34,
            "9": 36,
            "10": 38,
            "11": 40,
            "12": 42
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "攻撃速度が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "指定範囲内で最も遠い敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "指定範囲内で最も遠い敵に矢を発射して敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "yomi",
    "name": "ヨミ",
    "basic": {
      "rarity": 3,
      "eldain": "星を望む者",
      "personality": "憂鬱",
      "race": "？？？",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "initialSp": 220,
      "spRecoveryPerSecond": 40
    },
    "statTypes": {
      "hp": 3,
      "atkP": 0,
      "atkM": 2,
      "defP": 4,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "月光内の味方",
            "levels": {
              "1": 20,
              "2": 21,
              "3": 22,
              "4": 23,
              "5": 24,
              "6": 25,
              "7": 26,
              "8": 27,
              "9": 28,
              "10": 29,
              "11": 30,
              "12": 31
            }
          },
          {
            "valueKind": "防御力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "月光内の味方",
            "fixedValue": 6
          },
          {
            "valueKind": "攻撃力減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "月光内の敵",
            "levels": {
              "1": 30,
              "2": 31,
              "3": 32,
              "4": 33,
              "5": 34,
              "6": 35,
              "7": 36,
              "8": 37,
              "9": 38,
              "10": 39,
              "11": 40,
              "12": 41
            }
          },
          {
            "valueKind": "攻撃力減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "月光内の敵",
            "fixedValue": 6
          },
          {
            "valueKind": "月光",
            "valueClass": "持続時間",
            "effectType": "召喚",
            "effectTarget": "月光",
            "fixedValue": 8
          },
          {
            "valueKind": "基本攻撃強化",
            "valueClass": "スキル変更",
            "effectType": "バフ",
            "effectTarget": "自身"
          }
        ],
        "skillType": "低学年",
        "skillName": "向月葵",
        "description": "最大HPが最も高い味方を照らす月光を召喚する"
      },
      {
        "effects": [
          {
            "valueKind": "味方SP回復",
            "valueClass": "固定値",
            "effectType": "回復",
            "effectTarget": "月光内の味方",
            "levels": {
              "1": 10,
              "2": 10,
              "3": 11,
              "4": 11,
              "5": 12,
              "6": 12,
              "7": 13,
              "8": 13,
              "9": 14,
              "10": 14,
              "11": 15,
              "12": 15
            }
          },
          {
            "valueKind": "1秒ごとの魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "月光内の敵",
            "levels": {
              "1": 250,
              "2": 270,
              "3": 290,
              "4": 310,
              "5": 330,
              "6": 350,
              "7": 370,
              "8": 390,
              "9": 410,
              "10": 430,
              "11": 450,
              "12": 470
            }
          },
          {
            "valueKind": "敵SP減少",
            "valueClass": "固定値",
            "effectType": "デバフ",
            "effectTarget": "月光内の敵",
            "levels": {
              "1": 15,
              "2": 10,
              "3": 16,
              "4": 16,
              "5": 17,
              "6": 17,
              "7": 18,
              "8": 18,
              "9": 19,
              "10": 19,
              "11": 20,
              "12": 20
            }
          },
          {
            "valueKind": "月光",
            "valueClass": "持続時間",
            "effectType": "召喚",
            "effectTarget": "月光",
            "fixedValue": 12
          }
        ],
        "skillType": "高学年",
        "skillName": "心を込めたお迎えを",
        "description": "雲を晴らす月光を召喚し、味方SP回復と敵への魔法ダメージ/SP減少を行う",
        "cooldownSeconds": 26
      },
      {
        "effects": {
          "valueKind": "HP回復量増加",
          "valueClass": "倍率",
          "effectType": "バフ",
          "effectTarget": "味方全体",
          "levels": {
            "1": 12,
            "2": 13,
            "3": 14,
            "4": 15,
            "5": 16,
            "6": 17,
            "7": 18,
            "8": 19,
            "9": 20,
            "10": 21,
            "11": 22,
            "12": 23
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "味方全員のHP回復量が増加する"
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 60
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "呪文を唱えて敵に魔法ダメージを与える"
      },
      {
        "effects": [
          {
            "valueKind": "魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "ランダムな敵2体",
            "fixedValue": 300
          },
          {
            "valueKind": "攻撃速度減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵2体",
            "fixedValue": 40
          },
          {
            "valueKind": "攻撃速度減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "ランダムな敵2体",
            "fixedValue": 3
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "fixedValue": 16
          },
          {
            "valueKind": "HP回復",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "残りHP割合が最も低い味方",
            "reference": "最大HP",
            "fixedValue": 16
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "ランダムな敵2体に魔法ダメージを与える"
      }
    ],
    "favoriteCard": {
      "name": "ヨミの向月葵の花",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "防御力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "月光内の味方",
                "levels": {
                  "1": 20,
                  "2": 21,
                  "3": 22,
                  "4": 23,
                  "5": 24,
                  "6": 25,
                  "7": 26,
                  "8": 27,
                  "9": 28,
                  "10": 29,
                  "11": 30,
                  "12": 31
                }
              },
              {
                "valueKind": "与ダメージ量増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "月光内の味方",
                "levels": {
                  "1": 10,
                  "2": 11,
                  "3": 12,
                  "4": 13,
                  "5": 14,
                  "6": 15,
                  "7": 16,
                  "8": 17,
                  "9": 18,
                  "10": 19,
                  "11": 20,
                  "12": 21
                }
              }
            ],
            "targetSkill": "低学年",
            "skillName": "満月の使者",
            "description": "満月を最大2個召喚し月光内の味方を強化"
          },
          {
            "effects": {
              "valueKind": "バフ",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "effectTarget": "月光内の味方",
              "fixedValue": 6
            },
            "targetSkill": "低学年",
            "skillName": "満月の使者",
            "description": "バフの持続時間"
          },
          {
            "effects": {
              "valueKind": "攻撃力減少",
              "valueClass": "倍率",
              "effectType": "デバフ",
              "effectTarget": "月光内の敵",
              "levels": {
                "1": 30,
                "2": 31,
                "3": 32,
                "4": 33,
                "5": 34,
                "6": 35,
                "7": 36,
                "8": 37,
                "9": 38,
                "10": 39,
                "11": 40,
                "12": 41
              }
            },
            "targetSkill": "低学年",
            "skillName": "満月の使者",
            "description": "月光内の敵の攻撃力を減少"
          },
          {
            "effects": {
              "valueKind": "攻撃力減少",
              "valueClass": "持続時間",
              "effectType": "デバフ",
              "effectTarget": "月光内の敵",
              "fixedValue": 6
            },
            "targetSkill": "低学年",
            "skillName": "満月の使者",
            "description": "攻撃力減少の持続時間"
          },
          {
            "effects": {
              "valueKind": "月光",
              "valueClass": "持続時間",
              "effectType": "召喚",
              "effectTarget": "月光",
              "fixedValue": 8
            },
            "targetSkill": "低学年",
            "skillName": "満月の使者",
            "description": "月光の持続時間"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "魔法攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ抵抗増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "ヨミの魔法攻撃力、会心抵抗、会心ダメージ抵抗が増加"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "？？？",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "risty",
    "name": "リスティ",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "エルフ",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理"
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/HP最高/範囲",
            "levels": {
              "1": 135,
              "2": 148,
              "3": 161,
              "4": 174,
              "5": 187,
              "6": 200,
              "7": 213,
              "8": 226,
              "9": 239,
              "10": 252,
              "11": 265,
              "12": 278,
              "13": 291,
              "14": 304,
              "15": 317
            }
          },
          {
            "valueKind": "最後の一撃の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/HP最高/範囲",
            "levels": {
              "1": 270,
              "2": 297,
              "3": 324,
              "4": 351,
              "5": 378,
              "6": 405,
              "7": 432,
              "8": 459,
              "9": 486,
              "10": 513,
              "11": 540,
              "12": 567,
              "13": 594,
              "14": 621,
              "15": 648
            }
          },
          {
            "valueKind": "再探索",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "敵が倒されなかった場合",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "テクノマンシー",
        "description": "HPが最も高い敵に範囲物理ダメージを与える。敵が倒されなかった場合、最大3回まで再度敵を探し出し範囲物理ダメージを与える。最後の一撃はより高いダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "残りHP割合が最も低い敵3体",
            "levels": {
              "1": 40,
              "2": 43,
              "3": 45,
              "4": 48,
              "5": 51,
              "6": 53,
              "7": 56,
              "8": 59,
              "9": 61,
              "10": 64,
              "11": 67,
              "12": 69,
              "13": 72,
              "14": 75,
              "15": 77
            }
          },
          {
            "valueKind": "ブロック数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "残りHP割合が最も低い敵3体",
            "fixedValue": 10
          },
          {
            "valueKind": "対象数",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "最後の一撃の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "残りHP割合が最も低い敵3体",
            "levels": {
              "1": 160,
              "2": 171,
              "3": 181,
              "4": 192,
              "5": 203,
              "6": 213,
              "7": 224,
              "8": 235,
              "9": 245,
              "10": 256,
              "11": 267,
              "12": 277,
              "13": 288,
              "14": 299,
              "15": 309
            }
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "ボクセルグリッチ",
        "description": "残りHP割合が最も低い敵3体にブロックを10個ずつ落として物理ダメージを与える。最後に落ちるブロックはより高いダメージを与え、気絶を付与する。スキル発動中に対象を変更できる。",
        "cooldownSeconds": 26
      },
      {
        "effects": {
          "valueKind": "気絶",
          "valueClass": "持続時間",
          "effectType": "パッシブ",
          "effectTarget": "敵",
          "reference": "高学年スキル",
          "levels": {
            "1": 4,
            "2": 4.2,
            "3": 4.4,
            "4": 4.6,
            "5": 4.8,
            "6": 5,
            "7": 5.2,
            "8": 5.4,
            "9": 5.6,
            "10": 5.8,
            "11": 6,
            "12": 6.2,
            "13": 6.4,
            "14": 6.6,
            "15": 6.8
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "高学年スキルの気絶の持続時間が変更される。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 80
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "飲み干した缶を投げて敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 120
          },
          {
            "valueKind": "確定会心",
            "valueClass": "固定値",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 1
          },
          {
            "valueKind": "発動条件",
            "valueClass": "回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "reference": "普通攻撃",
            "fixedValue": 4
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "4回攻撃するごとに敵の個人情報を収集し、確定会心物理ダメージを与える。"
      }
    ],
    "favoriteCard": {
      "name": "リスティの模造グローブ",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "ハッキング",
                "valueClass": "固定値",
                "effectType": "条件",
                "effectTarget": "敵",
                "fixedValue": 3
              },
              {
                "valueKind": "確定会心",
                "valueClass": "条件",
                "effectType": "攻撃",
                "effectTarget": "敵"
              },
              {
                "valueKind": "SP回復",
                "valueClass": "固定値",
                "effectType": "バフ",
                "effectTarget": "自身"
              }
            ],
            "targetSkill": "普通攻撃_強化",
            "skillName": "強化",
            "description": "3回攻撃するごとに敵をハッキングし、確定会心物理ダメージを与える。強化攻撃使用後、自身のSPを回復する。"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "物理攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ステータス増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "targetSkill": "愛用Lv3",
            "skillName": "愛用Lv3",
            "description": "リスティの物理攻撃力増加9%、会心増加9%、会心ダメージ増加9%"
          }
        ]
      }
    },
    "aside": {
      "name": "本日のPOTG",
      "levels": {
        "1": {
          "name": "リーグ・オブ・エルフ最強者",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "天才ハッカーの登場",
          "stats": [],
          "effects": [
            {
              "valueKind": "SP回復",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "自身",
              "targetSkill": "低学年スキル",
              "fixedValue": 75
            },
            {
              "valueKind": "SP回復クールタイム",
              "valueClass": "クールタイム",
              "effectType": "回復",
              "effectTarget": "自身",
              "targetSkill": "低学年スキル",
              "fixedValue": 10
            },
            {
              "valueKind": "追加物理ダメージ",
              "valueClass": "倍率",
              "effectType": "攻撃",
              "effectTarget": "残りHP割合が最も低い敵3体",
              "targetSkill": "高学年スキル",
              "fixedValue": 160
            },
            {
              "valueKind": "追加攻撃",
              "valueClass": "回数",
              "effectType": "攻撃",
              "effectTarget": "残りHP割合が最も低い敵3体",
              "targetSkill": "高学年スキル",
              "fixedValue": 3
            }
          ],
          "description": "低学年スキルで敵を退治すると、SPを回復する。高学年スキル使用後、残りHP割合が最も低い敵3体に追加で3回物理ダメージを与える。"
        },
        "3": {
          "name": "リスティのスーパーセーブ",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "物理防御力",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "SP回復量",
              "valueClass": "固定値",
              "effectType": "バフ",
              "effectTarget": "後列の味方",
              "fixedValue": 4
            }
          ],
          "description": "後列の味方の1秒ごとのSP回復量を増加させる。"
        }
      }
    },
    "board": {
      "race": "エルフ",
      "boardType": "攻撃+防御",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体防御",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体HP",
      "bt2_3": "全体防御",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "renewa",
    "name": "リニュア",
    "basic": {
      "rarity": 3,
      "eldain": "永遠のこだま",
      "personality": "狂気",
      "race": "エルフ"
    },
    "statTypes": {},
    "skills": null,
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": null
  },
  {
    "id": "leets",
    "name": "リッツ",
    "basic": {
      "rarity": 3,
      "personality": "狂気",
      "race": "竜族",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 40
    },
    "statTypes": {
      "hp": 4,
      "atkP": 5,
      "atkM": 0,
      "defP": 4,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 200,
              "2": 220,
              "3": 240,
              "4": 260,
              "5": 280,
              "6": 300,
              "7": 320,
              "8": 340,
              "9": 360,
              "10": 380,
              "11": 400,
              "12": 420
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 60
          },
          {
            "valueKind": "最大物理ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 90,
              "2": 100,
              "3": 110,
              "4": 120,
              "5": 130,
              "6": 140,
              "7": 150,
              "8": 160,
              "9": 170,
              "10": 180,
              "11": 190,
              "12": 200
            }
          },
          {
            "valueKind": "最大被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 80
          },
          {
            "valueKind": "苦痛",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "苦痛",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "精錬の一撃",
        "description": "少しの間力を溜め、力を溜め終わると敵に範囲物理ダメージ"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 100,
              "2": 110,
              "3": 120,
              "4": 130,
              "5": 140,
              "6": 150,
              "7": 160,
              "8": 170,
              "9": 180,
              "10": 190,
              "11": 200,
              "12": 210
            }
          },
          {
            "valueKind": "最後の一撃の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 150,
              "2": 165,
              "3": 180,
              "4": 195,
              "5": 210,
              "6": 225,
              "7": 240,
              "8": 255,
              "9": 270,
              "10": 285,
              "11": 300,
              "12": 315
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3
          }
        ],
        "skillType": "高学年",
        "skillName": "鍛冶乱撃",
        "description": "敵を3回切りつけ、範囲物理ダメージを与える",
        "cooldownSeconds": 30
      },
      {
        "effects": [
          {
            "valueKind": "与ダメージ量増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 60,
              "2": 66,
              "3": 72,
              "4": 78,
              "5": 84,
              "6": 90,
              "7": 96,
              "8": 102,
              "9": 108,
              "10": 114,
              "11": 120,
              "12": 126
            }
          },
          {
            "valueKind": "被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 26,
              "3": 28,
              "4": 30,
              "5": 32,
              "6": 34,
              "7": 36,
              "8": 38,
              "9": 40,
              "10": 42,
              "11": 44,
              "12": 46
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "目標の敵への与ダメージ量が増加"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 60
          },
          {
            "valueKind": "2回目の物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 90
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "大剣を薙ぎ払って敵に範囲物理ダメージを2回与える"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 200
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で敵に範囲物理ダメージを与える"
      }
    ],
    "favoriteCard": {
      "name": "リッツのすり減った砥石",
      "kind": "遺物",
      "levels": {
        "1": [
          {
            "effects": [
              {
                "valueKind": "与ダメージ量増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "levels": {
                  "1": 60,
                  "2": 66,
                  "3": 72,
                  "4": 78,
                  "5": 84,
                  "6": 90,
                  "7": 96,
                  "8": 102,
                  "9": 108,
                  "10": 114,
                  "11": 120,
                  "12": 126
                }
              },
              {
                "valueKind": "被ダメージ量減少",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "levels": {
                  "1": 24,
                  "2": 26,
                  "3": 28,
                  "4": 30,
                  "5": 32,
                  "6": 34,
                  "7": 36,
                  "8": 38,
                  "9": 40,
                  "10": 42,
                  "11": 44,
                  "12": 46
                }
              }
            ],
            "targetSkill": "パッシブ",
            "skillName": "パッシブスキル",
            "description": "目標敵への与ダメージ量増加と被ダメージ量減少、基本攻撃ダメージ増加"
          },
          {
            "effects": {
              "valueKind": "基本攻撃ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "fixedValue": 100
            },
            "targetSkill": "パッシブ",
            "skillName": "パッシブスキル",
            "description": "基本攻撃のダメージ量増加"
          },
          {
            "effects": {
              "valueKind": "被ダメージ無効",
              "valueClass": "状態免疫",
              "effectType": "バフ",
              "effectTarget": "自身"
            },
            "targetSkill": "低学年",
            "skillName": "精錬の一撃",
            "description": "力を溜めている間、目標の敵からダメージを受けない"
          }
        ],
        "3": [
          {
            "effects": [
              {
                "valueKind": "物理攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              },
              {
                "valueKind": "会心ダメージ増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "自身",
                "fixedValue": 9
              }
            ],
            "skillName": "愛用Lv3",
            "description": "リッツの物理攻撃力、会心、会心ダメージが増加"
          }
        ]
      }
    },
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "HP+攻撃",
      "bt1_1": "全体攻撃",
      "bt1_2": "全体HP",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "rim",
    "name": "リム",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "幽霊",
      "role": "攻撃",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 16,
              "2": 16.5,
              "3": 17,
              "4": 17.5,
              "5": 18,
              "6": 18.5,
              "7": 19,
              "8": 19.5,
              "9": 20,
              "10": 20.5,
              "11": 21,
              "12": 21.5
            }
          },
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 250,
              "2": 280,
              "3": 310,
              "4": 340,
              "5": 370,
              "6": 400,
              "7": 430,
              "8": 460,
              "9": 490,
              "10": 520,
              "11": 550,
              "12": 580
            }
          },
          {
            "valueKind": "苦痛",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "苦痛",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 10
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          }
        ],
        "skillType": "低学年",
        "skillName": "スクラッチサイド",
        "description": "闇が降り、HPを回復する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 400,
              "2": 430,
              "3": 460,
              "4": 490,
              "5": 520,
              "6": 550,
              "7": 580,
              "8": 610,
              "9": 640,
              "10": 670,
              "11": 700,
              "12": 730
            }
          },
          {
            "valueKind": "最後の一撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 600,
              "2": 630,
              "3": 660,
              "4": 690,
              "5": 720,
              "6": 750,
              "7": 780,
              "8": 810,
              "9": 840,
              "10": 870,
              "11": 900,
              "12": 930
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 2
          },
          {
            "valueKind": "HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最後の一撃与ダメージ量",
            "fixedValue": 250
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          }
        ],
        "skillType": "高学年",
        "skillName": "グリムリーパー",
        "description": "グリムの力を解放し、敵に斬撃を放ち、範囲物理ダメージを与える。",
        "cooldownSeconds": 56
      },
      {
        "effects": {
          "valueKind": "撃破時HP回復量",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "reference": "最大HP",
          "levels": {
            "1": 16,
            "2": 16.5,
            "3": 17,
            "4": 17.5,
            "5": 18,
            "6": 18.5,
            "7": 19,
            "8": 19.5,
            "9": 20,
            "10": 20.5,
            "11": 21,
            "12": 21.5
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "直接ダメージで敵を倒すと、自身のHPを回復する。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 100
          },
          {
            "valueKind": "苦痛",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "苦痛",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "鎌を薙ぎ払って敵に範囲物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "rudd",
    "name": "ルード",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "竜族",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 3,
      "atkM": 0,
      "defP": 5,
      "defM": 4,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 160,
              "2": 175,
              "3": 190,
              "4": 205,
              "5": 220,
              "6": 235,
              "7": 250,
              "8": 265,
              "9": 280,
              "10": 295,
              "11": 310,
              "12": 325
            }
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "ノイズ",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 3.5
          },
          {
            "valueKind": "即時HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 6,
              "2": 6.5,
              "3": 7,
              "4": 7.5,
              "5": 8,
              "6": 8.5,
              "7": 9,
              "8": 9.5,
              "9": 10,
              "10": 10.5,
              "11": 11,
              "12": 11.5
            }
          },
          {
            "valueKind": "毎秒HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 6,
              "2": 6.5,
              "3": 7,
              "4": 7.5,
              "5": 8,
              "6": 8.5,
              "7": 9,
              "8": 9.5,
              "9": 10,
              "10": 10.5,
              "11": 11,
              "12": 11.5
            }
          },
          {
            "valueKind": "HP回復",
            "valueClass": "持続時間",
            "effectType": "回復",
            "effectTarget": "自身",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "もぉいっちょぉ！",
        "description": "叫び声を上げて敵に範囲物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 90,
              "2": 99,
              "3": 108,
              "4": 117,
              "5": 126,
              "6": 135,
              "7": 144,
              "8": 153,
              "9": 162,
              "10": 171,
              "11": 180,
              "12": 189
            }
          },
          {
            "valueKind": "最後の一撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "levels": {
              "1": 60,
              "2": 66,
              "3": 72,
              "4": 78,
              "5": 84,
              "6": 90,
              "7": 96,
              "8": 102,
              "9": 108,
              "10": 114,
              "11": 120,
              "12": 126
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "範囲内の敵",
            "fixedValue": 5
          },
          {
            "valueKind": "HP回復量",
            "valueClass": "倍率",
            "effectType": "回復",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 12,
              "2": 13,
              "3": 14,
              "4": 15,
              "5": 16,
              "6": 17,
              "7": 18,
              "8": 19,
              "9": 20,
              "10": 21,
              "11": 22,
              "12": 23
            }
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "範囲内の敵",
            "fixedValue": 2
          }
        ],
        "skillType": "高学年",
        "skillName": "インパクトプレス",
        "description": "地面を強く5回叩きつけ、敵に範囲物理ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "物理被ダメージ量減少",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 24,
              "2": 26,
              "3": 28,
              "4": 30,
              "5": 32,
              "6": 34,
              "7": 36,
              "8": 38,
              "9": 40,
              "10": 42,
              "11": 44,
              "12": 46
            }
          },
          {
            "valueKind": "発動条件",
            "valueClass": "被弾回数",
            "effectType": "条件",
            "effectTarget": "自身",
            "fixedValue": 6
          },
          {
            "valueKind": "無敵",
            "valueClass": "状態付与",
            "effectType": "バフ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "無敵",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 2
          },
          {
            "valueKind": "無敵",
            "valueClass": "クールタイム",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 15
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "物理被ダメージ量が減少する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "拳を振るい、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  },
  {
    "id": "rufo",
    "name": "ルポ",
    "basic": {
      "rarity": 3,
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 4,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内で最も後ろにいる敵",
            "levels": {
              "1": 420,
              "2": 462,
              "3": 504,
              "4": 546,
              "5": 588,
              "6": 630,
              "7": 672,
              "8": 714,
              "9": 756,
              "10": 798,
              "11": 840,
              "12": 882
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内で最も後ろにいる敵",
            "fixedValue": 4
          }
        ],
        "skillType": "低学年",
        "skillName": "ルポ流神速斬り",
        "description": "瞬間移動した後、指定範囲内で最も後ろにいる敵に4回物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内で最も後ろにいる敵/範囲内の敵",
            "levels": {
              "1": 350,
              "2": 385,
              "3": 420,
              "4": 455,
              "5": 490,
              "6": 525,
              "7": 560,
              "8": 595,
              "9": 630,
              "10": 665,
              "11": 700,
              "12": 735
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "指定範囲内で最も後ろにいる敵/範囲内の敵",
            "fixedValue": 8
          },
          {
            "valueKind": "防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 50
          },
          {
            "valueKind": "ノックバック",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "指定範囲内で最も後ろにいる敵/範囲内の敵"
          }
        ],
        "skillType": "高学年",
        "skillName": "奥義：狐旋風！",
        "description": "瞬間移動して素早く回転し、指定範囲内で最も後ろにいる敵に範囲物理ダメージを8回与える。",
        "cooldownSeconds": 24
      },
      {
        "effects": {
          "valueKind": "強化攻撃与ダメージ量増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 24,
            "2": 28,
            "3": 32,
            "4": 36,
            "5": 40,
            "6": 44,
            "7": 48,
            "8": 52,
            "9": 56,
            "10": 60,
            "11": 64,
            "12": 68
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "強化攻撃のダメージ量が増加する。"
      },
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 100
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "短剣を振るい、敵に2回物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 200
          },
          {
            "valueKind": "目くらまし",
            "valueClass": "状態付与",
            "effectType": "バフ",
            "effectTarget": "自身"
          },
          {
            "valueKind": "目くらまし",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 4
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で短剣を薙ぎ払って敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "name": "ブレーンルポ",
      "levels": {
        "1": {
          "name": "反アニマル缶戦線の知識王",
          "stats": [
            {
              "statApplyTo": "本人",
              "statName": "最大HP",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "物理攻撃力",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心",
              "increaseP": 6
            },
            {
              "statApplyTo": "本人",
              "statName": "会心ダメージ",
              "increaseP": 6
            }
          ],
          "effects": []
        },
        "2": {
          "name": "三銃士の大冒険",
          "stats": [],
          "effects": [
            {
              "valueKind": "普通攻撃ダメージ量増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃",
              "fixedValue": 200
            },
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "倍率",
              "effectType": "バフ",
              "condition": "自身に目くらまし付与時",
              "effectTarget": "自身",
              "fixedValue": 75
            },
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "持続時間",
              "effectType": "バフ",
              "condition": "自身に目くらまし付与時",
              "effectTarget": "自身",
              "fixedValue": 6
            },
            {
              "valueKind": "クールタイム減少",
              "valueClass": "クールタイム",
              "effectType": "バフ",
              "condition": "自身に目くらまし付与時",
              "effectTarget": "自身",
              "targetSkill": "高学年スキル",
              "fixedValue": 4
            },
            {
              "valueKind": "初回普通攻撃強化",
              "valueClass": "スキル変更",
              "effectType": "パッシブ",
              "condition": "ウェーブ開始時",
              "effectTarget": "自身",
              "targetSkill": "普通攻撃"
            }
          ],
          "description": "普通攻撃の与ダメージが増加する。自身に目くらましが付与されると攻撃速度が増加し、高学年スキルのクールタイムが減少する。ウェーブ開始時、自身の最初の普通攻撃は強化攻撃で発動する。"
        },
        "3": {
          "name": "最高の戦友なのだ！",
          "stats": [
            {
              "statApplyTo": "全体",
              "statName": "物理攻撃力",
              "increaseP": 3
            },
            {
              "statApplyTo": "全体",
              "statName": "会心ダメージ抵抗",
              "increaseP": 3
            }
          ],
          "effects": [
            {
              "valueKind": "攻撃速度増加",
              "valueClass": "倍率",
              "effectType": "パッシブ",
              "effectTarget": "味方全員",
              "fixedValue": 7
            }
          ],
          "description": "味方全員の攻撃速度を増加させる。"
        }
      }
    },
    "board": {
      "race": "獣人",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "layze",
    "name": "レイジー",
    "basic": {
      "rarity": 2,
      "personality": "冷静",
      "race": "エルフ",
      "role": "攻撃",
      "position": "後列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 30
    },
    "statTypes": {
      "hp": 3,
      "atkP": 4,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 4,
      "critDmg": 4,
      "critRes": 2,
      "critDmgRes": 2
    },
    "skills": [
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "levels": {
            "1": 200,
            "2": 220,
            "3": 240,
            "4": 260,
            "5": 280,
            "6": 300,
            "7": 320,
            "8": 340,
            "9": 360,
            "10": 380,
            "11": 400,
            "12": 420
          }
        },
        "skillType": "低学年",
        "skillName": "XG・レーザー",
        "description": "強力なレーザーを発射し、敵に範囲物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "直線範囲の敵",
            "levels": {
              "1": 400,
              "2": 430,
              "3": 460,
              "4": 490,
              "5": 520,
              "6": 550,
              "7": 580,
              "8": 610,
              "9": 640,
              "10": 670,
              "11": 700,
              "12": 730
            }
          },
          {
            "valueKind": "感電",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "直線範囲の敵"
          },
          {
            "valueKind": "感電",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "直線範囲の敵",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "XG-MK2 レーザー",
        "description": "強力なレーザーをチャージして発射し、直線範囲の対象に範囲物理ダメージを与える。",
        "cooldownSeconds": 32
      },
      {
        "effects": {
          "valueKind": "会心ダメージ増加",
          "valueClass": "倍率",
          "effectType": "パッシブ",
          "effectTarget": "自身",
          "levels": {
            "1": 25,
            "2": 30,
            "3": 35,
            "4": 40,
            "5": 45,
            "6": 50,
            "7": 55,
            "8": 60,
            "9": 65,
            "10": 70,
            "11": 75,
            "12": 80
          }
        },
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心ダメージが増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "fixedValue": 80
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "レーザーを発射して敵に範囲物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "bt1_1": "全体防御",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体攻撃",
      "bt2_2": "全体会心",
      "bt2_3": "全体HP",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "levi",
    "name": "レヴィ",
    "basic": {
      "rarity": 3,
      "personality": "憂鬱",
      "race": "魔女",
      "role": "攻撃",
      "position": "中列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 37
    },
    "statTypes": {
      "hp": 4,
      "atkP": 3,
      "atkM": 0,
      "defP": 3,
      "defM": 3,
      "crit": 5,
      "critDmg": 5,
      "critRes": 3,
      "critDmgRes": 3
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "総物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 240,
              "2": 270,
              "3": 300,
              "4": 330,
              "5": 360,
              "6": 390,
              "7": 420,
              "8": 450,
              "9": 480,
              "10": 510,
              "11": 540,
              "12": 570
            }
          },
          {
            "valueKind": "ヒット数",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 3
          },
          {
            "valueKind": "最後の一撃物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 160,
              "2": 180,
              "3": 200,
              "4": 220,
              "5": 240,
              "6": 260,
              "7": 280,
              "8": 300,
              "9": 320,
              "10": 340,
              "11": 360,
              "12": 380
            }
          }
        ],
        "skillType": "低学年",
        "skillName": "ニンブルカッター",
        "description": "ダガーを素早く振り回し、敵に3回物理ダメージを与える。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "範囲内の敵",
          "levels": {
            "1": 420,
            "2": 460,
            "3": 500,
            "4": 540,
            "5": 580,
            "6": 620,
            "7": 660,
            "8": 700,
            "9": 740,
            "10": 780,
            "11": 820,
            "12": 860
          }
        },
        "skillType": "高学年",
        "skillName": "レヴィ・ザ・レッド",
        "description": "切り札の長刀を一瞬で抜刀し、素早くダッシュして敵に範囲物理ダメージを与える。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "会心率増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 30,
              "2": 33,
              "3": 36,
              "4": 39,
              "5": 42,
              "6": 45,
              "7": 48,
              "8": 51,
              "9": 54,
              "10": 57,
              "11": 60,
              "12": 63
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "自身",
            "levels": {
              "1": 40,
              "2": 43,
              "3": 46,
              "4": 49,
              "5": 52,
              "6": 55,
              "7": 58,
              "8": 61,
              "9": 64,
              "10": 67,
              "11": 70,
              "12": 73
            }
          },
          {
            "valueKind": "攻撃速度増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "自身",
            "fixedValue": 6
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "会心率が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 100
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "ダガーを振るい、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "抵抗+会心",
      "bt1_1": "全体会心",
      "bt1_2": "全体会心抵抗",
      "bt2_1": "全体会心",
      "bt2_2": "全体HP",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体会心",
      "bt3_2": "全体HP",
      "bt3_3": "全体防御",
      "bt3_4": "全体会心抵抗",
      "cells": {}
    }
  },
  {
    "id": "rohne",
    "name": "ローネ",
    "basic": {
      "rarity": 3,
      "personality": "純粋",
      "race": "エルフ",
      "role": "守備",
      "position": "前列",
      "attackType": "物理",
      "initialSp": 0,
      "spRecoveryPerSecond": 50
    },
    "statTypes": {
      "hp": 5,
      "atkP": 1,
      "atkM": 0,
      "defP": 5,
      "defM": 5,
      "crit": 3,
      "critDmg": 3,
      "critRes": 4,
      "critDmgRes": 4
    },
    "skills": [
      {
        "effects": [
          {
            "valueKind": "攻撃力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "最も攻撃力が高い味方1体",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "攻撃力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "最も攻撃力が高い味方1体",
            "fixedValue": 8
          },
          {
            "valueKind": "防御力増加",
            "valueClass": "倍率",
            "effectType": "バフ",
            "effectTarget": "最も攻撃力が高い味方3体",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "防御力増加",
            "valueClass": "持続時間",
            "effectType": "バフ",
            "effectTarget": "最も攻撃力が高い味方3体",
            "fixedValue": 6
          }
        ],
        "skillType": "低学年",
        "skillName": "チョコより甘いオペレーション",
        "description": "最も攻撃力が高い味方1名の攻撃力を増加させる。"
      },
      {
        "effects": [
          {
            "valueKind": "挑発",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "周囲の最も攻撃力が高い敵2体"
          },
          {
            "valueKind": "挑発",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "周囲の最も攻撃力が高い敵2体",
            "fixedValue": 6
          },
          {
            "valueKind": "攻撃力減少",
            "valueClass": "倍率",
            "effectType": "デバフ",
            "effectTarget": "周囲の最も攻撃力が高い敵2体",
            "levels": {
              "1": 10,
              "2": 11,
              "3": 12,
              "4": 13,
              "5": 14,
              "6": 15,
              "7": 16,
              "8": 17,
              "9": 18,
              "10": 19,
              "11": 20,
              "12": 21
            }
          },
          {
            "valueKind": "攻撃力減少",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "周囲の最も攻撃力が高い敵2体",
            "fixedValue": 6
          }
        ],
        "skillType": "高学年",
        "skillName": "降参！降参だってば……",
        "description": "周囲の最も攻撃力が高い敵2体を挑発する。",
        "cooldownSeconds": 18
      },
      {
        "effects": [
          {
            "valueKind": "防御力増加",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "levels": {
              "1": 20,
              "2": 22,
              "3": 24,
              "4": 26,
              "5": 28,
              "6": 30,
              "7": 32,
              "8": 34,
              "9": 36,
              "10": 38,
              "11": 40,
              "12": 42
            }
          },
          {
            "valueKind": "毎秒HP回復量",
            "valueClass": "倍率",
            "effectType": "パッシブ",
            "effectTarget": "自身",
            "reference": "最大HP",
            "levels": {
              "1": 0.3,
              "2": 0.3,
              "3": 0.3,
              "4": 0.6,
              "5": 0.6,
              "6": 0.6,
              "7": 0.9,
              "8": 0.9,
              "9": 0.9,
              "10": 1.2,
              "11": 1.2,
              "12": 1.2
            }
          }
        ],
        "skillType": "パッシブ",
        "skillName": "パッシブスキル",
        "description": "防御力が増加する。"
      },
      {
        "effects": {
          "valueKind": "物理ダメージ",
          "valueClass": "倍率",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 150
        },
        "skillType": "普通攻撃_基本",
        "skillName": "基本",
        "description": "剣を振り回して敵に物理ダメージを与える。"
      },
      {
        "effects": [
          {
            "valueKind": "物理ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 150
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵",
            "fixedValue": 2
          }
        ],
        "skillType": "普通攻撃_強化",
        "skillName": "強化",
        "description": "一定確率で本気の攻撃を行い、敵に物理ダメージを与える。"
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "会心+HP",
      "bt1_1": "全体会心",
      "bt1_2": "全体HP",
      "bt2_1": "全体会心",
      "bt2_2": "全体防御",
      "bt2_3": "全体会心抵抗",
      "bt3_1": "全体攻撃",
      "bt3_2": "全体会心",
      "bt3_3": "全体HP",
      "bt3_4": "全体防御",
      "cells": {}
    }
  }
];

const APOSTLE_INDEX = Object.fromEntries(APOSTLE_LIBRARY.map(apostle => [apostle.id, apostle]));
