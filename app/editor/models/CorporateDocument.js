const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const CorporateDocument = sequelize.define('CorporateDocument', {
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
    tableName: 'corporate_documents',
    timestamps: true
});

module.exports = CorporateDocument;
