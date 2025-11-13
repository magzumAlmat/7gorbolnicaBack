const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const User = require('./User');
const Project = require('./Project');

const UserProject = sequelize.define('UserProject', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    project_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'User_projects',
    timestamps: true
});

UserProject.belongsTo(User, { foreignKey: 'user_id' });
UserProject.belongsTo(Project, { foreignKey: 'project_id' });

module.exports = UserProject;