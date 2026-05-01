const fs = require('fs');

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

const samples = [
    { def: 4938, dmg: 6274, cRes: 3907, cDmg: 13091 },
    { def: 6414, dmg: 10488, cRes: 5339, cDmg: 22796 },
    { def: 5250, dmg: 6349, cRes: 3907, cDmg: 13249 }
];

let foundAtk = [];
for (let atk = 1000; atk <= 100000; atk += 10) {
    let skills = samples.map(s => {
        const rate = calcBaseDamageRate(atk, s.def);
        return s.dmg / (atk * rate);
    });
    
    let avg = skills.reduce((a,b)=>a+b)/skills.length;
    let diff = Math.max(...skills) - Math.min(...skills);
    let relDiff = diff / avg;
    
    if (relDiff < 0.1) {
        foundAtk.push({ atk, relDiff, skill: avg });
    }
}

foundAtk.sort((a,b) => a.relDiff - b.relDiff);
console.log("ATK Candidates:");
console.log(foundAtk.slice(0, 10));

let foundCrit = [];
for (let cAtk = 1000; cAtk <= 100000; cAtk += 10) {
    let mults = samples.map(s => {
        return s.cDmg / s.dmg; // target mult
    });
    
    let actualMults = samples.map(s => calcCritMultiplier(cAtk, s.cRes));
    
    let errors = actualMults.map((m, i) => Math.abs(m - mults[i]));
    let maxErr = Math.max(...errors);
    if (maxErr < 0.05) {
        foundCrit.push({ cAtk, maxErr });
    }
}
foundCrit.sort((a,b) => a.maxErr - b.maxErr);
console.log("\nCrit ATK Candidates:");
console.log(foundCrit.slice(0, 10));
