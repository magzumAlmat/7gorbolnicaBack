const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const CertificateOfAccreditation = sequelize.define('CertificateOfAccreditation', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    issueDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'CertificateOfAccreditations',
    timestamps: true
});

module.exports = CertificateOfAccreditation;
