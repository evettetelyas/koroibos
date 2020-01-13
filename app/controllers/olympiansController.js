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


module.exports = {
	index,
	stats
}