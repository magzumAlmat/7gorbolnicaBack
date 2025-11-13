const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const PublicProcurementProtocol = sequelize.define('PublicProcurementProtocol', {
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    year: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'public_procurement_protocols',
    timestamps: true
});

module.exports = PublicProcurementProtocol;
