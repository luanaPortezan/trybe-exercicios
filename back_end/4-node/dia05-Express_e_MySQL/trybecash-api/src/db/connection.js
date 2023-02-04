// src/db/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;