const pgp = require('pg-promise')();

const db = pgp({
  user: 'postgres',
  password: 'root',
  database: 'testemaya',
  port: 5432,
  host: 'localhost'
})

module.exports = db;