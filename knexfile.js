// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
		connection: 'postgres://localhost/koroibos',
		migrations: {
      directory: './db/migrations'
		},
		seeds: {
      directory: './db/seeds'
    },
		useNullAsDefault: true
  },

	test: {
    client: 'pg',
		connection: 'postgres://localhost/koroibos_test',
		migrations: {
      directory: './db/migrations'
		},
		seeds: {
      directory: './db/seeds'
    },
		useNullAsDefault: true
	},

  production: {
		client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
		migrations: {
      directory: './db/migrations'
		},
		seeds: {
      directory: './db/seeds'
    }
  }

};
