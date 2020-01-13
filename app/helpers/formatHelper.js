const Olympian = require('../models/olympian')
const fetchHelper = require('../helpers/fetchHelper')

async function olympianIndex(data) {
	let olympianView = []
	await fetchHelper.asyncForEach(data, async (olympian) => {
		let obj = {
			name: olympian.name,
			team: olympian.team,
			age: olympian.age,
			sport: olympian.sport,
			total_medals_won: await Olympian.totalMedals(olympian).then(num => num)
		}
		olympianView.push(obj);
	});
	return olympianView;
}

async function olympianStats() {
	let obj = {
    olympian_stats: {
      total_competing_olympians: await Olympian.totalCompeting().then(num => num),
      average_weight: {
        unit: "kg",
        male_olympians: await Olympian.avgWeight('M').then(num => num),
        female_olympians: await Olympian.avgWeight('F').then(num => num)
      },
      average_age: await Olympian.avgAge().then(num => num)
    }
	}
	return obj;
}

module.exports = {
	olympianIndex,
	olympianStats
}