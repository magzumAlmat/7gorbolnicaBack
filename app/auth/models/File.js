const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db");

const File = sequelize.define("File", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  mimetype: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
    timestamps: true
});

module.exports = File;