# koroibos
BE4 final
Production URL: 

### To run locally:
1. clone down repo
2. `$ npm install`
3. `$ psql`
4. `$ CREATE DATABASE <db name>;`
5. `$\q`
6. `$ knex migrate:latest`
7. `$ knex seed:run`

### Testing Suite
3. `$ psql`
4. `$ CREATE DATABASE <db name_test>;`
5. `$\q`
6. `$ npm test`

### Endpoints
1. `GET /api/v1/olympians`
1. `GET /api/v1/olympians?age=(oldest/youngest)`
1. `GET /api/v1/olympian_stats`
1. `GET /api/v1/events`
1. `GET /api/v1/events/:id/medalists`
