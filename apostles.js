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
      "spRecoveryPerSecond": 30,
      "boardType": "防御+抵抗",
      "boardShape": "エルフTypeA"
    },
    "statTypes": {
      "hp": 1,
      "atkP": 4,
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
        "description": "最新型のレーザーキャノンを発射し、敵に6回の範囲物理ダメージを与える。過熱後はより広範囲の物理ダメージを与える。敵が感電状態の場合、気絶を付与する。",
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
      "raceBoardType": "エルフTypeA",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "spRecoveryPerSecond": 44,
      "boardType": "攻撃+防御",
      "boardShape": "魔女TypeC"
    },
    "statTypes": {
      "hp": 4,
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
              "12": 23
            }
          }
        ],
        "skillType": "パッシブ",
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
      "raceBoardType": "魔女TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "幽霊TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": [
          {
            "valueKind": "傘魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 270,
              "12": 545
            }
          },
          {
            "valueKind": "傘魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
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
            "fixedValue": 4
          },
          {
            "valueKind": "残り火魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 600,
              "12": 1260
            }
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
            "fixedValue": 7
          },
          {
            "valueKind": "ひっかき傷魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "levels": {
              "1": 180,
              "12": 455
            }
          },
          {
            "valueKind": "ひっかき傷魔法ダメージ",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 3
          },
          {
            "valueKind": "ひっかき傷魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 4
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム",
            "fixedValue": 3
          }
        ],
        "skillType": "低学年",
        "skillName": "ティータイム？",
        "description": "ランダムなアルカナを引き、そのアルカナに応じた魔法ダメージを与える。傘は敵に魔法ダメージを2回与え、感電を付与する。残り火は敵に魔法ダメージを与え、火傷を付与する。ひっかき傷はランダムな3体の敵に魔法ダメージを4回与え、気絶を付与する。"
      },
      {
        "effects": [
          {
            "valueKind": "傘魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 405,
              "12": 790
            }
          },
          {
            "valueKind": "傘魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "fixedValue": 2
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
          },
          {
            "valueKind": "残り火魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵",
            "levels": {
              "1": 1200,
              "12": 2520
            }
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
            "fixedValue": 10
          },
          {
            "valueKind": "ひっかき傷魔法ダメージ",
            "valueClass": "倍率",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "levels": {
              "1": 270,
              "12": 655
            }
          },
          {
            "valueKind": "ひっかき傷魔法ダメージ",
            "valueClass": "対象数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 3
          },
          {
            "valueKind": "ひっかき傷魔法ダメージ",
            "valueClass": "ヒット数",
            "effectType": "攻撃",
            "effectTarget": "敵/ランダム",
            "fixedValue": 4
          },
          {
            "valueKind": "気絶",
            "valueClass": "状態付与",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム"
          },
          {
            "valueKind": "気絶",
            "valueClass": "持続時間",
            "effectType": "デバフ",
            "effectTarget": "敵/ランダム",
            "fixedValue": 4
          }
        ],
        "skillType": "高学年",
        "skillName": "ワンダーランド",
        "description": "直前に引いたアルカナを強化して使用する。引いたアルカナがない場合、ひっかき傷を使用する。",
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
              "12": 53
            }
          }
        ],
        "skillType": "パッシブ",
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
        "description": "4回攻撃するごとにランダムなアルカナが出現し、強化攻撃が変更される。"
      }
    ],
    "favoriteCard": {
      "name": "アリスのデタラメな呪術",
      "kind": "スペル",
      "levels": {
        "0": [
          {
            "effects": {
              "valueKind": "HP回復",
              "valueClass": "倍率",
              "effectType": "回復",
              "effectTarget": "味方全体",
              "reference": "最大HP",
              "levels": {
                "1": "5〜10",
                "2": "5〜12",
                "3": "5〜14",
                "4": "5〜16",
                "5": "5〜18",
                "6": "5〜20",
                "7": "5〜22",
                "8": "5〜24",
                "9": "5〜26",
                "10": "5〜28",
                "11": "5〜30",
                "12": "5〜32",
                "13": "5〜34",
                "14": "5〜36",
                "15": "5〜38"
              }
            },
            "skillName": "基礎効果",
            "description": "5秒ごとに味方全体のHPを回復する。"
          },
          {
            "effects": {
              "valueKind": "SP回復",
              "valueClass": "固定値",
              "effectType": "回復",
              "effectTarget": "味方全体",
              "fixedValue": "1〜10"
            },
            "skillName": "基礎効果",
            "description": "5秒ごとに味方全体のSPを回復する。"
          }
        ],
        "1": [
          {
            "effects": [
              {
                "valueKind": "赤カード魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 300
                }
              },
              {
                "valueKind": "与ダメージ減少",
                "valueClass": "倍率",
                "effectType": "デバフ",
                "effectTarget": "敵",
                "fixedValue": 30
              },
              {
                "valueKind": "与ダメージ減少",
                "valueClass": "持続時間",
                "effectType": "デバフ",
                "effectTarget": "敵",
                "fixedValue": 5
              },
              {
                "valueKind": "黄カード魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 300
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
              },
              {
                "valueKind": "青カード魔法ダメージ",
                "valueClass": "倍率",
                "effectType": "攻撃",
                "effectTarget": "敵",
                "levels": {
                  "1": 300
                }
              },
              {
                "valueKind": "SP減少",
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
      "raceBoardType": "幽霊TypeC",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "エルフTypeE"
    },
    "statTypes": {},
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
            "12": 42
          }
        },
        "skillType": "パッシブ",
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
      "raceBoardType": "エルフTypeE",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "エルフTypeC"
    },
    "statTypes": {},
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
      "raceBoardType": "エルフTypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "精霊TypeB"
    },
    "statTypes": {},
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
              "12": 68
            }
          }
        ],
        "skillType": "パッシブ",
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
      "raceBoardType": "精霊TypeB",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "精霊TypeD"
    },
    "statTypes": {},
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
              "12": 526,
              "13": 551.1,
              "14": 576.1,
              "15": 601.2
            }
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
            "12": 23,
            "13": 24,
            "14": 25,
            "15": 26
          }
        },
        "skillType": "パッシブ",
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
      "raceBoardType": "精霊TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "spRecoveryPerSecond": 50,
      "boardType": "会心+HP",
      "boardShape": "龍族TypeB"
    },
    "statTypes": {
      "hp": 5,
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
        "description": "自身にダメージを吸収する水銀シールドを付与する。\nシールドが破壊されるか、持続時間が終わると、周囲の対象の防御力を減少させる。",
        "cooldownSeconds": 0
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
        "description": "基本攻撃が命中すると、自身のHPを回復する。",
        "cooldownSeconds": 0
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 75,
          "valueClass": "倍率"
        },
        "skillType": "普通攻撃_基本",
        "description": "刀を操り敵に魔法ダメージを2回与える。",
        "cooldownSeconds": 0
      },
      {
        "effects": {
          "valueKind": "魔法ダメージ",
          "effectType": "攻撃",
          "effectTarget": "敵",
          "fixedValue": 260,
          "valueClass": "倍率"
        },
        "skillType": "普通攻撃_強化",
        "description": "一定の確率で刀で敵を4回刺し、範囲魔法ダメージを与える。",
        "cooldownSeconds": 0
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
      "raceBoardType": "龍族TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "妖精TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "抵抗+会心",
      "raceBoardType": "妖精TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "幽霊TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "抵抗+会心",
      "raceBoardType": "幽霊TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "獣人TypeD"
    },
    "statTypes": {},
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
              "12": 42
            }
          }
        ],
        "skillType": "パッシブ",
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
      "raceBoardType": "獣人TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "妖精TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "攻撃+防御",
      "raceBoardType": "妖精TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "エルフTypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "攻撃+防御",
      "raceBoardType": "エルフTypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "精霊TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
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
      "raceBoardType": "精霊TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "carren",
    "name": "カレン",
    "basic": {
      "personality": "活発",
      "race": "妖精",
      "role": "支援",
      "position": "後列",
      "boardType": "抵抗+会心",
      "boardShape": "妖精TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "抵抗+会心",
      "raceBoardType": "妖精TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "エルフTypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "raceBoardType": "エルフTypeA",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "龍族TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "防御+抵抗",
      "raceBoardType": "龍族TypeC",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "妖精TypeA"
    },
    "statTypes": {},
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
                "levels": {
                  "1": 2
                }
              },
              {
                "valueKind": "攻撃力増加",
                "valueClass": "倍率",
                "effectType": "バフ",
                "effectTarget": "範囲内の味方",
                "levels": {
                  "1": 20,
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
      "raceBoardType": "妖精TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "kyuri",
    "name": "キュウイ",
    "basic": {
      "personality": "純粋",
      "race": "妖精",
      "role": "支援",
      "position": "中列",
      "attackType": "魔法",
      "boardType": "HP+攻撃",
      "boardShape": "妖精TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "HP+攻撃",
      "raceBoardType": "妖精TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "妖精TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "会心+HP",
      "raceBoardType": "妖精TypeE",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "獣人TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "防御+抵抗",
      "raceBoardType": "獣人TypeE",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "sari",
    "name": "サリー",
    "basic": {
      "personality": "純粋",
      "race": "幽霊",
      "role": "攻撃",
      "boardType": "会心+HP",
      "boardShape": "幽霊TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "会心+HP",
      "raceBoardType": "幽霊TypeC",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "精霊TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
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
      "raceBoardType": "精霊TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "幽霊TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "raceBoardType": "幽霊TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "龍族TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "防御+抵抗",
      "raceBoardType": "龍族TypeC",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "幽霊TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "防御+抵抗",
      "raceBoardType": "幽霊TypeD",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "龍族TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "抵抗+会心",
      "raceBoardType": "龍族TypeA",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "妖精TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "抵抗+会心",
      "raceBoardType": "妖精TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "精霊TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "攻撃+防御",
      "raceBoardType": "精霊TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "龍族TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "会心+HP",
      "raceBoardType": "龍族TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "魔女TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "攻撃+防御",
      "raceBoardType": "魔女TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "幽霊TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "raceBoardType": "幽霊TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "幽霊TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "raceBoardType": "幽霊TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "taida",
    "name": "タイダー",
    "basic": {
      "personality": "活発",
      "race": "エルフ",
      "role": "攻撃",
      "position": "後列",
      "boardType": "HP+攻撃",
      "boardShape": "エルフTypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "HP+攻撃",
      "raceBoardType": "エルフTypeB",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "chopi",
    "name": "チョッピー",
    "basic": {
      "personality": "憂鬱",
      "race": "獣人",
      "role": "攻撃",
      "position": "中列",
      "boardType": "防御+抵抗",
      "boardShape": "獣人TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "防御+抵抗",
      "raceBoardType": "獣人TypeE",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "獣人TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "抵抗+会心",
      "raceBoardType": "獣人TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "精霊TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "会心+HP",
      "raceBoardType": "精霊TypeE",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "妖精TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "攻撃+防御",
      "raceBoardType": "妖精TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "獣人TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "攻撃+防御",
      "raceBoardType": "獣人TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "patula",
    "name": "パトラ",
    "basic": {
      "personality": "冷静",
      "race": "妖精",
      "role": "攻撃",
      "boardType": "攻撃+防御",
      "boardShape": "妖精TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "攻撃+防御",
      "raceBoardType": "妖精TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "魔女TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "防御+抵抗",
      "raceBoardType": "魔女TypeE",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "精霊TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
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
      "raceBoardType": "精霊TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "エルフTypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "HP+攻撃",
      "raceBoardType": "エルフTypeB",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "エルフTypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "攻撃+防御",
      "raceBoardType": "エルフTypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "精霊TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "精霊",
      "boardType": "会心+HP",
      "raceBoardType": "精霊TypeE",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "魔女TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "HP+攻撃",
      "raceBoardType": "魔女TypeD",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "エルフTypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "raceBoardType": "エルフTypeA",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "獣人TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "会心+HP",
      "raceBoardType": "獣人TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "会心+HP",
      "boardShape": "魔女TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "会心+HP",
      "raceBoardType": "魔女TypeA",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
    }
  },
  {
    "id": "veroo",
    "name": "ベル",
    "basic": {
      "personality": "憂鬱",
      "race": "幽霊",
      "role": "攻撃",
      "boardType": "攻撃+防御",
      "boardShape": "幽霊TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "攻撃+防御",
      "raceBoardType": "幽霊TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "魔女TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "抵抗+会心",
      "raceBoardType": "魔女TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "魔女TypeE"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "防御+抵抗",
      "raceBoardType": "魔女TypeE",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "獣人TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "HP+攻撃",
      "raceBoardType": "獣人TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "maestromk2",
    "name": "マエストロMK2",
    "basic": {
      "personality": "狂気",
      "race": "エルフ",
      "role": "守備",
      "position": "前列",
      "boardType": "会心+HP",
      "boardShape": "エルフTypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "会心+HP",
      "raceBoardType": "エルフTypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "防御+抵抗",
      "boardShape": "妖精TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "防御+抵抗",
      "raceBoardType": "妖精TypeB",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "妖精TypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "妖精",
      "boardType": "HP+攻撃",
      "raceBoardType": "妖精TypeA",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "mynx",
    "name": "ミンス",
    "basic": {
      "personality": "活発",
      "race": "獣人",
      "role": "攻撃",
      "position": "前列",
      "boardType": "HP+攻撃",
      "boardShape": "獣人TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "HP+攻撃",
      "raceBoardType": "獣人TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "maison",
    "name": "メゾン",
    "basic": {
      "personality": "狂気",
      "race": "幽霊",
      "role": "攻撃",
      "boardType": "抵抗+会心",
      "boardShape": "幽霊TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "抵抗+会心",
      "raceBoardType": "幽霊TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "精霊TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
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
      "raceBoardType": "精霊TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "HP+攻撃",
      "boardShape": "獣人TypeC"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "HP+攻撃",
      "raceBoardType": "獣人TypeC",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "yumimi",
    "name": "ユミミ",
    "basic": {
      "personality": "狂気",
      "race": "獣人",
      "role": "攻撃",
      "position": "後列",
      "boardType": "会心+HP",
      "boardShape": "獣人TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "会心+HP",
      "raceBoardType": "獣人TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "攻撃+防御",
      "boardShape": "？？？"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "？？？",
      "boardType": "攻撃+防御",
      "raceBoardType": "？？？",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体防御",
        "2-1": "全体攻撃",
        "2-2": "全体HP",
        "2-3": "全体防御",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体会心抵抗"
      }
    }
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
      "boardType": "HP+攻撃",
      "boardShape": "龍族TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "HP+攻撃",
      "raceBoardType": "龍族TypeD",
      "cells": {
        "1-1": "全体攻撃",
        "1-2": "全体HP",
        "2-1": "全体攻撃",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "幽霊TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "幽霊",
      "boardType": "抵抗+会心",
      "raceBoardType": "幽霊TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "龍族TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "竜族",
      "boardType": "会心+HP",
      "raceBoardType": "龍族TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "獣人TypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "獣人",
      "boardType": "抵抗+会心",
      "raceBoardType": "獣人TypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
    }
  },
  {
    "id": "layze",
    "name": "レイジー",
    "basic": {
      "personality": "冷静",
      "race": "エルフ",
      "role": "攻撃",
      "position": "後列",
      "boardType": "防御+抵抗",
      "boardShape": "エルフTypeA"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "防御+抵抗",
      "raceBoardType": "エルフTypeA",
      "cells": {
        "1-1": "全体防御",
        "1-2": "全体会心抵抗",
        "2-1": "全体攻撃",
        "2-2": "全体会心",
        "2-3": "全体HP",
        "3-1": "全体攻撃",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "抵抗+会心",
      "boardShape": "魔女TypeB"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "魔女",
      "boardType": "抵抗+会心",
      "raceBoardType": "魔女TypeB",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体会心抵抗",
        "2-1": "全体会心",
        "2-2": "全体HP",
        "2-3": "全体会心抵抗",
        "3-1": "全体会心",
        "3-2": "全体HP",
        "3-3": "全体防御",
        "3-4": "全体会心抵抗"
      }
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
      "boardType": "会心+HP",
      "boardShape": "エルフTypeD"
    },
    "statTypes": {},
    "skills": [
      {
        "effects": null,
        "skillType": "低学年",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "高学年"
      },
      {
        "effects": null,
        "skillType": "パッシブ",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_基本",
        "cooldownSeconds": 0
      },
      {
        "effects": null,
        "skillType": "普通攻撃_強化",
        "cooldownSeconds": 0
      }
    ],
    "favoriteCard": {},
    "aside": {
      "levels": {}
    },
    "board": {
      "race": "エルフ",
      "boardType": "会心+HP",
      "raceBoardType": "エルフTypeD",
      "cells": {
        "1-1": "全体会心",
        "1-2": "全体HP",
        "2-1": "全体会心",
        "2-2": "全体防御",
        "2-3": "全体会心抵抗",
        "3-1": "全体攻撃",
        "3-2": "全体会心",
        "3-3": "全体HP",
        "3-4": "全体防御"
      }
    }
  }
];

const APOSTLE_INDEX = Object.fromEntries(APOSTLE_LIBRARY.map(apostle => [apostle.id, apostle]));
