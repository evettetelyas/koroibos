# koroibos
BE4 final
## Production URL: https://koroiboss.herokuapp.com/

### To run locally:
- clone down repo
- `$ npm install`
- `$ psql`
- `$ CREATE DATABASE <db name>;`
- `$ \q`
- `$ knex migrate:latest`
- `$ knex seed:run`

### Testing Suite
- `$ psql`
- `$ CREATE DATABASE <db name_test>;`
- `$ \q`
- `$ npm test`

### Endpoints
### [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3928eb753f59d2d66b31)
- `GET /api/v1/olympians`
    *sample response*
    ```
    [
    {
        "name": "Andreea Aanei",
        "team": "Romania",
        "age": 22,
        "sport": "Weightlifting",
        "total_medals_won": 0
    },
    {
        "name": "Nstor Abad Sanjun",
        "team": "Spain",
        "age": 23,
        "sport": "Gymnastics",
        "total_medals_won": 0
    },
    { ... }
    ]
    ```
- `GET /api/v1/olympians?age=(oldest/youngest)`
- `GET /api/v1/olympian_stats`
- `GET /api/v1/events`
- `GET /api/v1/events/:id/medalists`
