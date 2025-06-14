const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Aluno = db.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  responsavel: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Aluno;
