const fetchHelper = require('../../app/helpers/fetchHelper')

function formatNa(data) {
	switch (data) {
		case "NA":
			return null
		default:
			return data
	}
};

async function formatter(data) {
	var array = []
	fetchHelper.asyncForEach(data, async (olympian) => {
		let obj = {
			name: olympian.Name,
			sex: olympian.Sex,
			age: formatNa(olympian.Age),
			height: formatNa(olympian.Height),
			weight: formatNa(olympian.Weight),
			team: olympian.Team,
			games: olympian.Games,
			sport: olympian.Sport,
			event: olympian.Event,
			medal: formatNa(olympian.Medal),
		}
		array.push(obj)
	})
	return array;
};

module.exports = {
	formatNa,
	formatter,
}