const express = require('express');
const router = express.Router();
const EmpresaParceiraController = require('../controllers/EmpresaParceiraController');

router.get('/', EmpresaParceiraController.listar);
router.get('/:id', EmpresaParceiraController.buscarPorId);
router.post('/', EmpresaParceiraController.criar);
router.put('/:id', EmpresaParceiraController.atualizar);
router.delete('/:id', EmpresaParceiraController.deletar);

module.exports = router;