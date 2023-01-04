// Generates a CSV of wishing data, because I don't have an actual dataset. It's basically a simulator.
import fs from 'fs';

const standard = ["Jean", "Diluc", "Mona", "Qiqi", "Keqing", "Tighnari"];

const baseRate = 0.006; // 0.6%
const softPityIncrease = (1 - 0.006) / 15; // assuming linear increase

let results:any = []

const simulate = (currentPity = 0) => {
  let end = false;
  let pity = currentPity;
  let standardCharacter = "n/a";
  let currentSoftPityRate = baseRate;

  while (!end) {
    pity++;
    if (pity <= 75) {
      if (Math.random() <= baseRate) {
        // Win a 5*. Check if 50/50 is won.
        if (Math.random() <= 0.5) {
          standardCharacter =
            standard[Math.floor(Math.random() * standard.length)];
        }
        end = true;
      }
    } else {
      currentSoftPityRate += softPityIncrease;
      if (Math.random() <= currentSoftPityRate) {
        if (Math.random() <= 0.5) {
          standardCharacter =
            standard[Math.floor(Math.random() * standard.length)];
        }
        end = true;
      }
    }
  }

  results.push({
    starting_pity: currentPity,
    pity: pity,
    standard: standardCharacter
  })
};

for (let i = 0; i < 1000; i++) {
    let starting = Math.floor(Math.random() * 90);
    simulate(starting);
}

let saveObject = {
    table: results
}

let jsonSaveObject = JSON.stringify(saveObject);

fs.writeFile('results.json', jsonSaveObject, () => {});

console.log(results);