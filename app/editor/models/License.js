const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const License = sequelize.define('License', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    licenseName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Licenses',
    timestamps: true
});

module.exports = License;
