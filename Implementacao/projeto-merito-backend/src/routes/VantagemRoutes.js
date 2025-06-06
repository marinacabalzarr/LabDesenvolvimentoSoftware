const express = require('express');
const { criarVantagem, listarVantagens } = require('../controllers/VantagemController');

const router = express.Router();

router.post('/', criarVantagem);
router.get('/', listarVantagens);

module.exports = router;