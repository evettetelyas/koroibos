const Olympian = require('../models/olympian')
const formatHelper = require('../helpers/formatHelper')

const index = (request, response) => {
	switch (request.query.age) {
		case "youngest":
				Olympian.fetchByAge('asc')
				.then(async data => {
					response.status(200).json(await formatHelper.olympianIndex(data))
				})
				.catch(error => response.status(500).json(error))
			break;
		case "oldest":
				Olympian.fetchByAge('desc')
				.then(async data => {
					response.status(200).json(await formatHelper.olympianIndex(data))
				})
				.catch(error => response.status(500).json(error))
			break;
		default:
			Olympian.all()
			.then(async data => {
				response.status(200).json(await formatHelper.olympianIndex(data))
			})
			.catch(error => response.status(500).json(error))
	};
}

const stats = async (_request, response) => {
	return response.status(200).json(await formatHelper.olympianStats())
}

const events = async (_request, response) => {
	Olympian.sports()
	.then(async data => {
		response.status(200).json(await formatHelper.events(data))
	})
	.catch(error => response.status(500).json(error))
}

const eventMedals = async (request, response) => {
	var id = request.params.id
	Olympian.getMedalists(id)
	.then(async data => {
		switch (data.length) {
			case 0:
				response.status(200).json({message: `no event exists for id ${id}`})
				break;
			default:
				response.status(200).json(await formatHelper.medalists(data))
		}
	})
	.catch(error => response.status(500).json(error))
}


module.exports = {
	index,
	stats,
	events,
	eventMedals
}