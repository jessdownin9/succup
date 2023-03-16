const { Client, Pool } = require('pg');
require('dotenv').config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  ssl: false
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}

const client = new Client(process.env.NODE_ENV === 'production' ? proConfig : devConfig);

client.connect(err => {
  if (err) {
    console.error('error connecting', err.stack)
  } else {
    console.log('connected')
    client.end()
  }
})

const pool = new Pool(process.env.NODE_ENV === 'production' ? proConfig : devConfig);

pool
  .connect()
  .then(client => {
    console.log('connected')
    client.release()
  })
  .catch(err => console.error('error connecting', err.stack))

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
};