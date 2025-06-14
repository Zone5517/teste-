const Aluno = require('../models/aluno');

exports.getAll = async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
};

exports.create = async (req, res) => {
  const aluno = await Aluno.create(req.body);
  res.status(201).json(aluno);
};
