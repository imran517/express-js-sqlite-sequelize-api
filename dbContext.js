const config = require('./config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: config.db.name
  });
  
module.exports = { sequelize } ;






