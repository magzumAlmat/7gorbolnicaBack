// config/config.js
require('dotenv').config(); // ← Загружает .env в process.env
const fs = require('fs');

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
  },

  production: {
    // username: process.env.PROD_DB_USERNAME,
    // password: process.env.PROD_DB_PASSWORD,
    // database: process.env.PROD_DB_NAME,
    // host: process.env.PROD_DB_HOST,
    // port: process.env.PROD_DB_PORT ? parseInt(process.env.PROD_DB_PORT, 10) : 25060,
    // dialect: 'postgres',
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(path.join(__dirname, 'ca-certificate.crt')), // ← путь от config/
    //     rejectUnauthorized: true, // важно!
    //   },
    // },
  },
};