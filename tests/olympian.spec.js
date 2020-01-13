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

  describe('test olympians GET', () => {
    it('happy path', async () => {
      const res = await request(app)
        .get("/api/v1/olympians");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(3);

      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]["name"]).toBe('Evette Telyas');

      expect(res.body[0]).toHaveProperty('team');
      expect(res.body[0]["team"]).toBe('United States of Evette');

      expect(res.body[0]).toHaveProperty('age');
			expect(res.body[0]["age"]).toBe(30);      
			
			expect(res.body[0]).toHaveProperty('total_medals_won');
      expect(res.body[0]["total_medals_won"]).toBe(1);
    });
	});
	
	describe('test olympians GET youngest', () => {
    it('happy path', async () => {
      const res = await request(app)
        .get("/api/v1/olympians?age=youngest");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);

      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]["name"]).toBe('Also Not Evette Telyas');

      expect(res.body[0]).toHaveProperty('team');
      expect(res.body[0]["team"]).toBe('United States of Evette');

      expect(res.body[0]).toHaveProperty('age');
			expect(res.body[0]["age"]).toBe(10);      
			
			expect(res.body[0]).toHaveProperty('total_medals_won');
      expect(res.body[0]["total_medals_won"]).toBe(1);
    });
	});
	
	describe('test olympians GET youngest', () => {
    it('happy path', async () => {
      const res = await request(app)
        .get("/api/v1/olympians?age=oldest");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);

      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]["name"]).toBe('Not Evette Telyas');

      expect(res.body[0]).toHaveProperty('team');
      expect(res.body[0]["team"]).toBe('United States of Evette');

      expect(res.body[0]).toHaveProperty('age');
			expect(res.body[0]["age"]).toBe(90);      
			
			expect(res.body[0]).toHaveProperty('total_medals_won');
      expect(res.body[0]["total_medals_won"]).toBe(1);
    });
  });
});