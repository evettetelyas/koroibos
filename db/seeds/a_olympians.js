const csvFilePath = './db/rawData/olympic_data_2016.csv'
const importHelper = require('../../app/helpers/importHelper')
const fs = require('fs');
const path = require('path');
var csvjson = require('csvjson');
var data = fs.readFileSync(path.join(csvFilePath), { encoding : 'utf8'});
var options = {
  delimiter : ',',
  quote     : '"'
};

exports.seed = function(knex) {
	return knex('olympians').del()
	  .then(async () => {
		const olympData = await csvjson.toObject(data, options);
		const formattedOlymps = await importHelper.formatter(olympData)
		return Promise.all([
			knex('olympians').insert(formattedOlymps)
		  .then(() => console.log('Seeding complete!'))
			.catch(error => console.log(`Error seeding data: ${error}`))
		])
	  })
	  .catch(error => console.log(`Error seeding data: ${error}`));
	};
