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

const totalCompeting = () => database('olympians')
	.count()
	.then(total => total[0].count)
	.catch(error => error)

const avgWeight = (gender) => database('olympians')
	.select()
	.avg('weight')
	.where({sex: gender})
	.then(total => parseFloat(total[0].avg).toFixed(2))
	.catch(error => error)

const avgAge = () => database('olympians')
	.select()
	.avg('age')
	.then(total => parseFloat(total[0].avg).toFixed(2))
	.catch(error => error)

module.exports = {
	all,
	totalMedals,
	fetchByAge,
	totalCompeting,
	avgWeight,
	avgAge
}