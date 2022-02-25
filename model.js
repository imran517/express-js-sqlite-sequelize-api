const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbContext')

const Task = sequelize.define('Task', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    priority: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'task',
    timestamps: false
    // Other model options go here
  });

const ServiceResult = {
    status: "",
    method: "",
    data: null,
    message: ""
};

module.exports = {Task};