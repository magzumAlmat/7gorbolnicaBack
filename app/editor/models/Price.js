const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Price = sequelize.define('Price', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    year: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    path: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Prices',
    timestamps: true
});

module.exports = Price;
