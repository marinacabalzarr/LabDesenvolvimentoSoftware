const express = require('express');
const { criarVantagem, listarVantagens } = require('../controllers/VantagemController');

const router = express.Router();

router.post('/vantagens', criarVantagem);
router.get('/vantagens', listarVantagens);

module.exports = router;

