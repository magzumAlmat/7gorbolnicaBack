const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const FinanceReport = sequelize.define('FinanceReport', {
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
    year: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'FinanceReports',
    timestamps: true
});

module.exports = FinanceReport;
