const User=require('../app/auth/models/User')
const sequelize = require('../config/db')
const bcrypt = require('bcrypt'); // Import bcrypt

module.exports={
    up:async(queryInterface,Sequelize)=>{
        const hashedPassword = await bcrypt.hash('admin123', 10); // Hash the password
        await User.bulkCreate([
            {email:'admin@mail.ru', password: hashedPassword, roleId: 1}, // Add hashed password
        ])
    },

    down:async(queryInterface,Sequelize)=>{
        await queryInterface.bulkDelete('Users',null,{})
    }
}