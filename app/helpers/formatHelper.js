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

module.exports = {
	olympianIndex
}