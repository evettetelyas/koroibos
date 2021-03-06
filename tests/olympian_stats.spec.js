var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


describe('Test the olympians path', () => {
  beforeEach(async () => {
    await database.raw('truncate table olympians cascade');

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
			event: 'Cheerleading at 5,000 meters',
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
			event: 'Cheerleading at 5,000 meters',
			medal: "Gold",
		},
	];
    await database('olympians').insert(olympians, 'id');
  });

  afterEach(() => {
    database.raw('truncate table olympians cascade');
  });

  describe('test olympian_stats GET', () => {
    it('happy path', async () => {
      const res = await request(app)
        .get("/api/v1/olympian_stats");

      expect(res.statusCode).toBe(200);

      expect(res.body["olympian_stats"]).toHaveProperty('total_competing_olympians');
      expect(res.body["olympian_stats"]["total_competing_olympians"]).toBe(3);

      expect(res.body["olympian_stats"]).toHaveProperty('average_weight');
      expect(res.body["olympian_stats"]["average_weight"]["unit"]).toBe("kg");
      expect(res.body["olympian_stats"]["average_weight"]["male_olympians"]).toBe("0.00");
      expect(res.body["olympian_stats"]["average_weight"]["female_olympians"]).toBe("100.00");

      expect(res.body["olympian_stats"]).toHaveProperty('average_age');
			expect(res.body["olympian_stats"]["average_age"]).toBe("43.33");      
    })
	})
});