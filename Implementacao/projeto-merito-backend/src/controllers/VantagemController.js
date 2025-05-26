const Vantagem = require('../models/Vantagem');
const dao = require('../dao/VantagemDAO');
const db = require('../dao/Database');

const criarVantagem = async (req, res) => {
  try {
    console.log("Payload recebido:", req.body);
    const { nome, descricao, custo_moedas, imagem, empresa_id } = req.body;
    const vantagem = new Vantagem(nome, descricao, custo_moedas, imagem, empresa_id);
    await dao.create(vantagem);
    res.status(201).send('Vantagem criada com sucesso');
  } catch (err) {
    console.error("Erro em criarVantagem:", err);
    res.status(500).send(err.message);
  }
};

const listarVantagens = async (req, res) => {
  try {
    const vantagens = await dao.readAll();
    res.json(vantagens);
  } catch (err) {
    console.error("Erro em listarVantagens:", err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  criarVantagem,
  listarVantagens
};
