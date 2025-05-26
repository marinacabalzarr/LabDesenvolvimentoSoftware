const express = require('express');
const { criarProfessor, listarProfessores } = require('../controllers/ProfessorController');

const router = express.Router();

router.post('/professores', criarProfessor);
router.get('/professores', listarProfessores);

module.exports = router;
