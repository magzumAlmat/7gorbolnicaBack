const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const CorporateDocument = sequelize.define('CorporateDocument', {
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