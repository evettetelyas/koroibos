const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

const all = () => database('olympians')
	.select()

const totalMedals = (olympian) => database('olympians')
	.select()
	.where({name: olympian.name})
	.whereNotNull('medal')
	.then(total => total.length)
	.catch(error => error)

const fetchByAge = (type) => database('olympians')
	.select()
	.orderBy('age', type)
	.limit(1)
	.then(total => total)
	.catch(error => error)

module.exports = {
	all,
	totalMedals,
	fetchByAge
}