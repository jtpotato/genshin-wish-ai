import { isQiqi, responseStore } from './stores';

const standard = ['Diluc', 'Mona', 'Qiqi', 'Jean', 'Keqing', 'Tignari'];

const baseRate = 0.006; // 0.6%
const softPityIncrease = (1 - 0.006) / 15; // assuming linear increase

export const simulate = (currentPity = 0) => {
	isQiqi.set(false);

	let end = false;
	let pity = currentPity;
	let currentSoftPityRate = baseRate;
	let response = '';

	while (!end) {
		pity++;

		if (pity > 90) {
			pity = 90;
		}

		if (pity <= 75) {
			if (Math.random() <= baseRate) {
				if (Math.random() <= 0.5) {
					const character = standard[Math.floor(Math.random() * standard.length)];
					if (character == 'Qiqi') {
						isQiqi.set(true);
					}
					response = `You lost the 50/50 to ${character} 😭.`;
				}
				end = true;
			}
		} else {
			currentSoftPityRate += softPityIncrease;
			if (Math.random() <= currentSoftPityRate) {
				if (Math.random() <= 0.5) {
					const character = standard[Math.floor(Math.random() * standard.length)];
					if (character == 'Qiqi') {
						isQiqi.set(true);
					}
					response = `You lost the 50/50 to ${character} 😭.`;
				}
				end = true;
			}
		}
	}

	response += ` You got a 5 star at ${pity} pity.`;

	responseStore.set(response);
};
