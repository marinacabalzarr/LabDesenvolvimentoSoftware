const Professor = require('../models/Professor');
const dao = require('../dao/ProfessorDAO');

const criarProfessor = async (req, res) => {
  try {
    const { nome, cpf, departamento, instituicao } = req.body;
    const professor = new Professor(nome, cpf, departamento, instituicao, 1000);
    await dao.create(professor);
    res.status(201).send('Professor cadastrado');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const listarProfessores = async (req, res) => {
  try {
    const professores = await dao.findAll();
    res.json(professores);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { criarProfessor, listarProfessores };