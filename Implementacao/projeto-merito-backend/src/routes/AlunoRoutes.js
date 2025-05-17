const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');

router.get('/', AlunoController.listar);
router.get('/:id', AlunoController.buscarPorId);
router.post('/', AlunoController.criar);
router.put('/:id', AlunoController.atualizar);
router.delete('/:id', AlunoController.deletar);

module.exports = router;