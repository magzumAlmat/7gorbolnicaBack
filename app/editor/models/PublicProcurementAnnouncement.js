const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const PublicProcurementAnnouncement = sequelize.define('PublicProcurementAnnouncement', {
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
    year: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'public_procurement_announcements',
    timestamps: true
});

module.exports = PublicProcurementAnnouncement;
