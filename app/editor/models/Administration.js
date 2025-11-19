const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Administration = sequelize.define('Administration', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    position: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Administrations',
    timestamps: true
});

module.exports = Administration;
