// Generates a CSV of wishing data, because I don't have an actual dataset. It's basically a simulator.
const baseRate = 0.006; // 0.6%
const softPityIncrease = (1 - 0.006) / 15; // assuming linear increase

let results:any = []

const simulate = (currentPity = 0) => {
  let end = false;
  let pity = currentPity;
  let standardCharacter = 0;
  let currentSoftPityRate = baseRate;

  while (!end) {
    pity++;
    if (pity <= 75) {
      if (Math.random() <= baseRate) {
        if (Math.random() <= 0.5) {
          standardCharacter = 1
        }
        end = true;
      }
    } else {
      currentSoftPityRate += softPityIncrease;
      if (Math.random() <= currentSoftPityRate) {
        if (Math.random() <= 0.5) {
          standardCharacter = 1
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