const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const ReportOnPublicServicesRendered = sequelize.define('ReportOnPublicServicesRendered', {
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
        allowNull: false
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'report_on_public_services_rendered',
    timestamps: true
});

module.exports = ReportOnPublicServicesRendered;
