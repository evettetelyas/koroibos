const Olympian = require('../../app/models/olympian')

	async function formatEvents() {
		let events = await Olympian.events()
		let eventArray = []
		for(let i=0; i<events.length;i++){
			let obj = {
				event_name: events[i],
				number_of_medalists: await Olympian.eventMedals(events[i])
			}
			eventArray.push(obj)
		}
		return eventArray;
	}
	
	exports.seed = function(knex) {
		return knex('events').del()
			.then(async () => {
			const formattedEvents = await formatEvents()
			return Promise.all([
				knex('events').insert(formattedEvents)
				.then(() => console.log('Seeding complete!'))
				.catch(error => console.log(`Error seeding data: ${error}`))
			])
			})
			.catch(error => console.log(`Error seeding data: ${error}`));
		};

