const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const IncomeAndExpenseReport = sequelize.define('IncomeAndExpenseReport', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    reportName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'IncomeAndExpenseReports',
    timestamps: true
});

module.exports = IncomeAndExpenseReport;
