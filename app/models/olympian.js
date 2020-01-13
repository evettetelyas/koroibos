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
	.pluck('name')
	.distinct()
	.then(total => total.length)
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

const sportEvents = (sport) => database('olympians')
	.select()
	.where({sport: sport})
	.pluck('event')
	.distinct()

const sports = () => database('olympians')
	.select()
	.pluck('sport')
	.distinct()

const events = () => database('olympians')
	.select()
	.pluck('event')
	.distinct()

const eventMedals = (event) => database('olympians')
	.select()
	.where({event: event})
	.whereNotNull('medal')
	.then(total => total.length)
	.catch(error => error)

const getMedalists = async (id) => database('olympians')
	.join('events', 'events.event_name', '=', 'olympians.event')
	.where('events.id', id)
	.whereNotNull('medal')
	.orderBy('olympians.event')
	.then(result => result)
	.catch(error => error)

module.exports = {
	all,
	totalMedals,
	fetchByAge,
	totalCompeting,
	avgWeight,
	avgAge,
	sportEvents,
	sports,
	events,
	eventMedals,
	getMedalists
}