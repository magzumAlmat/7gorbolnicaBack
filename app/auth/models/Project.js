const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Project = sequelize.define('Project', {
    
    project_name: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'projects'
});

module.exports = Project;
