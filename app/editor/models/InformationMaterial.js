const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const InformationMaterial = sequelize.define('InformationMaterial', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    urlOfFile: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'InformationMaterials',
    timestamps: true
});

module.exports = InformationMaterial;
