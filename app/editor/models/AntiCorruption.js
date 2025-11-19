const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const AntiCorruption = sequelize.define('AntiCorruption', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    documentPath: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'AntiCorruptions',
    timestamps: true
});

module.exports = AntiCorruption;
