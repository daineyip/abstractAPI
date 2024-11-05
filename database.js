require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config/config.js')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
  });
  
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.log('Unable to connect to the database (seq):', err);
    });
  
  module.exports = sequelize;