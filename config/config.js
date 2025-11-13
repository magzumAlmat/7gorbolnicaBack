const fs = require('fs')
require('dotenv').config();  // ← ДОБАВЬ ЭТУ СТРОКУ!

module.exports={
    development:{
      

        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        dialect: process.env.DB_DIALECT || 'postgres',
    },

    production:{
        // username:'doadmin',
        // password:'REDACTED_SECRET',
        // database:'defaultdb',
        // host:'db-postgresql-nyc1-25118-do-user-11457016-0.b.db.ondigitalocean.com',
        // dialect:'postgres',
        // port:25060,
        // dialectOptions: {
        //     ssl: {
        //       ca: fs.readFileSync('config/ca-certificate.crt')
        //     },
        // },
    }
}


