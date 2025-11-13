const fs = require('fs')
module.exports={
    development:{
        username:'admin',
        password:'root',
        database:'admin',
        host:'localhost',
        dialect:'postgres'
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


