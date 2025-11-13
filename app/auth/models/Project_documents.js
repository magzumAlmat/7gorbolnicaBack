const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Project = require('./Project');
const Document = require('./Document');

const ProjectDocument = sequelize.define('ProjectDocument', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    project_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    document_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'Project_documents',
    timestamps: true
});

ProjectDocument.belongsTo(Project, { foreignKey: 'project_id' });
ProjectDocument.belongsTo(Document, { foreignKey: 'document_id' });

module.exports = ProjectDocument;