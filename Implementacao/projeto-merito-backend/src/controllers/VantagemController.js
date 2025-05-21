const Vantagem = require('../models/Vantagem');
const dao = require('../dao/VantagemDAO'); // ✅ CERTO
const db = require('../dao/Database');

const criarVantagem = (req, res) => {
  const { descricao } = req.body;
  dao.inserir(new Vantagem(null, descricao))
    .then(() => res.status(201).send('Ok'))
    .catch(err => res.status(500).send(err.message));
};

const listarVantagens = (req, res) => {
  dao.listar()
    .then((dados) => res.json(dados))
    .catch(err => res.status(500).send(err.message));
};

module.exports = {
  criarVantagem,
  listarVantagens
};
