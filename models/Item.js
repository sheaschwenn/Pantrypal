const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  daysUntilExpiration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }

});
