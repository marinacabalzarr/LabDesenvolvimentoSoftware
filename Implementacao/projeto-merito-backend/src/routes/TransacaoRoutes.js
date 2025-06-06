const express = require('express');
const { enviarMoedas, extratoProfessor, extratoAluno } = require('../controllers/TransacaoController');

const router = express.Router();

router.post('/transacoes', enviarMoedas);
router.get('/extrato/professor/:id', extratoProfessor);
router.get('/extrato/aluno/:id', extratoAluno);

module.exports = router;