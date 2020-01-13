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

async function events(sportData) {
	let sportAry = []
	await fetchHelper.asyncForEach(sportData, async (sport) => {
		let obj = {
			sport: sport,
			events: await Olympian.sportEvents(sport)
		}
		sportAry.push(obj);
	});
	return sportAry;
}

async function eventMedalists(data) {
	let medalistAry = []
	await fetchHelper.asyncForEach(data, async (medalist) => {
		let obj = {
			name: medalist.name,
			team: medalist.team,
			age: medalist.age,
			medal: medalist.medal
		}
		medalistAry.push(obj);
	});
	return medalistAry;
}

async function medalists(data) {
	let obj = {
		event: data[0].event_name,
		medalists: await eventMedalists(data)
	}
	return obj;
}

module.exports = {
	olympianIndex,
	olympianStats,
	events,
	medalists
}