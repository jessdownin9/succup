const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE
});

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
};