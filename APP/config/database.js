const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'postgres', 'postgres', {
  host: 'db',
  dialect: 'postgres',
});

module.exports = sequelize;
