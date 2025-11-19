const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const PublicProcurementPlan = sequelize.define('PublicProcurementPlan', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'public_procurement_plans',
    timestamps: true
});

module.exports = PublicProcurementPlan;
