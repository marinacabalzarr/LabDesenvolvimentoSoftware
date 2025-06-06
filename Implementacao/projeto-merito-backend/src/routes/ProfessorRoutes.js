const express = require('express');
const { criarProfessor, listarProfessores } = require('../controllers/ProfessorController');

const router = express.Router();

router.post('/', criarProfessor);
router.get('/', listarProfessores);

module.exports = router;