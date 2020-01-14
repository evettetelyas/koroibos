var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


describe('Test the olympians path', () => {
  beforeEach(async () => {
    await database.raw('truncate table olympians cascade');
    await database.raw('truncate table events cascade');

    let olympians = [
			{
      name: 'Evette Telyas',
      sex: 'F',
			age: 30,
			height: 100,
			weight: 100,
			team: 'United States of Evette',
			games: '2020 Summer',
			sport: 'Cheerleading',
			event: 'Cheerleading at 5,000 meters',
			medal: 'Gold',
		},
		{
      name: 'Not Evette Telyas',
      sex: 'F',
			age: 90,
			height: 100,
			weight: 100,
			team: 'United States of Evette',
			games: '2020 Summer',
			sport: 'Cheerleading',
			event: 'Cheerleading at 10,000 meters',
			medal: "Gold",
		},
		{
      name: 'Also Not Evette Telyas',
      sex: 'F',
			age: 10,
			height: 100,
			weight: 100,
			team: 'United States of Evette',
			games: '2020 Summer',
			sport: 'Cheerleading',
			event: 'Cheerleading at 15,000 meters',
			medal: "Gold",
		},
	];

	let event = {
		event_name: 'Cheerleading at 15,000 meters',
		number_of_medalists: 1
	}
		await database('olympians').insert(olympians, 'id');
		await database('events').insert(event, 'id')
  });

  afterEach(() => {
    database.raw('truncate table olympians cascade');
    database.raw('truncate table events cascade');
  });

  describe('test events GET', () => {
    it('happy path', async () => {
      const res = await request(app)
        .get("/api/v1/events");

      expect(res.statusCode).toBe(200);

      expect(res.body[0]).toHaveProperty('sport');
      expect(res.body[0]["sport"]).toBe("Cheerleading");     
      expect(res.body[0]["events"].length).toBe(3);     
    })
	})

	describe('test show events medalists GET', () => {
    it('happy path', async () => {
			const id = await database('events').where({event_name: 'Cheerleading at 15,000 meters'}).then(result => result[0].id)
      const res = await request(app)
        .get(`/api/v1/events/${id}/medalists`);

      expect(res.statusCode).toBe(200);

      expect(res.body).toHaveProperty('event');
      expect(res.body).toHaveProperty('medalists');
      expect(res.body["medalists"].length).toBe(1);     
    })
	})

	describe('test events GET', () => {
    it('sad path', async () => {
      const res = await request(app)
        .get("/api/v1/events/900/medalists");

      expect(res.statusCode).toBe(200);

      expect(res.body["message"]).toBe("no medalists exist for event id 900");     
    })
	})
});