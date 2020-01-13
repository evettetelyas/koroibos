# koroibos
BE4 final

### To run locally:
1. clone down repo
2. ```
$ npm install
$ psql
$ CREATE DATABASE <db name>;
$\q
$ knex migrate:latest
$ knex seed:run
```
3. `npm test` (to run local testing suite)
