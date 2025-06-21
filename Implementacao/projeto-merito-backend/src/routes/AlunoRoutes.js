const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');
const asyncHandler = require('../utils/asyncHandler');

router.get('/',  asyncHandler(AlunoController.listar));
router.get('/:id', asyncHandler(AlunoController.buscarPorId));
router.post('/', asyncHandler(AlunoController.criar));
router.put('/:id', asyncHandler(AlunoController.atualizar));
router.delete('/:id', asyncHandler(AlunoController.deletar));

module.exports = router;