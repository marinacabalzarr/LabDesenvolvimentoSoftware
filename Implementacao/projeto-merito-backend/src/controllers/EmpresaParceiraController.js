const EmpresaParceiraDAO = require('../dao/EmpresaParceiraDAO');
const EmpresaParceira = require('../models/EmpresaParceira');

class EmpresaParceiraController {
    async listar(req, res) {
        try {
            const empresas = await EmpresaParceiraDAO.readAll();
            res.json(empresas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const empresa = await EmpresaParceiraDAO.readById(req.params.id);
            if (empresa) {
                res.json(empresa);
            } else {
                res.status(404).json({ error: 'Empresa não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const empresa = new EmpresaParceira(
                null,
                req.body.nome,
                req.body.email,
                req.body.senha,
                req.body.cnpj
            );
            await EmpresaParceiraDAO.create(empresa);
            res.status(201).json({ message: 'Empresa criada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const empresa = new EmpresaParceira(
                req.params.id,
                req.body.nome,
                req.body.email,
                req.body.senha,
                req.body.cnpj
            );
            await EmpresaParceiraDAO.update(empresa);
            res.json({ message: 'Empresa atualizada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await EmpresaParceiraDAO.delete(req.params.id);
            res.json({ message: 'Empresa deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new EmpresaParceiraController();