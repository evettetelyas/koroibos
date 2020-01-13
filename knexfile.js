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
    connection: 'postgres://qoefmjwjkvxkoo:9442d4a2cf20b94e1ffcf0fe91a265cd89ce12165267e051fb929b169c91ac7c@ec2-3-220-86-239.compute-1.amazonaws.com:5432/dcfe875df8orm9',
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
