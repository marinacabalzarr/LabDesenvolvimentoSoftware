const express = require('express');
const router = express.Router();
const { registrarCompra, listarComprasPorAluno } = require('../controllers/CompraController');

router.post('/', registrarCompra);
router.get('/:id', listarComprasPorAluno);

module.exports = router;