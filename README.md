# koroibos
BE4 final
## Production URL: https://koroiboss.herokuapp.com/

### Tech Stack
- Node.js
- Express.js
- Knex
- Jest

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
#### - `GET /api/v1/olympians`
response:
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
    
#### - `GET /api/v1/olympians?age=(oldest/youngest)`
response:
```
    [
    {
        "name": "Ana Iulia Dascl",
        "team": "Romania",
        "age": 13,
        "sport": "Swimming",
        "total_medals_won": 0
    }
    ]
```
    
#### - `GET /api/v1/olympian_stats`
response:

```
    {
    "olympian_stats": {
        "total_competing_olympians": 2845,
        "average_weight": {
            "unit": "kg",
            "male_olympians": "78.55",
            "female_olympians": "61.94"
        },
        "average_age": "26.23"
      }
    }
```

#### - `GET /api/v1/events`
response:
```
   [
    {
        "sport": "Archery",
        "events": [
            "Archery Men's Individual",
            "Archery Men's Team",
            "Archery Women's Individual",
            "Archery Women's Team"
        ]
    },
    {
        "sport": "Gymnastics",
        "events": [
            "Gymnastics Men's Pommelled Horse",
            "Gymnastics Women's Balance Beam",
            "Gymnastics Women's Team All-Around",
            "Gymnastics Men's Horse Vault",
            "Gymnastics Men's Floor Exercise",
            "Gymnastics Women's Uneven Bars",
            "Gymnastics Men's Team All-Around",
            "Gymnastics Men's Parallel Bars",
            "Gymnastics Women's Floor Exercise",
            "Gymnastics Men's Horizontal Bar",
            "Gymnastics Men's Individual All-Around",
            "Gymnastics Women's Horse Vault",
            "Gymnastics Women's Individual All-Around",
            "Gymnastics Men's Rings"
        ]
    },
    { ... }
    ]
```

#### - `GET /api/v1/events/:id/medalists`
response:
```
   {
    "event": "Wrestling Men's Welterweight, Greco-Roman",
    "medalists": [
        {
            "name": "Migran Arutyunyan",
            "team": "Armenia",
            "age": 27,
            "medal": "Silver"
        },
        {
            "name": "Shmagi Bolkvadze",
            "team": "Georgia",
            "age": 22,
            "medal": "Bronze"
        },
        { ... }
     ]
```

### Contributors
- Evette Telyas (@evettetelyas)
