const EmpresaParceiraDAO = require('../dao/EmpresaParceiraDAO');
const EmpresaParceira = require('../models/EmpresaParceira');
// Refatorado por Thaís
// Adicionei validações para e-mail, senha, CNPJ e nome da empresa nos métodos de criar e atualizar  
// Caso os critérios de validação não sejam atendidos, os erros são exibidos no terminal

class EmpresaParceiraController {
    async listar(req, res) {
        try {
            const empresas = await EmpresaParceiraDAO.readAll();
            res.json(empresas);
        } catch (error) {
            console.error('Erro ao listar empresas:', error.message);
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const empresa = await EmpresaParceiraDAO.readById(req.params.id);
            if (empresa) {
                res.json(empresa);
            } else {
                console.error('Empresa não encontrada com o ID:', req.params.id);
                res.status(404).json({ error: 'Empresa não encontrada' });
            }
        } catch (error) {
            console.error('Erro ao buscar empresa por ID:', error.message);
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const { nome, email, senha, cnpj } = req.body;

            if (!nome || nome.trim() === '') {
                console.error('Erro: Nome da empresa é obrigatório.');
                return res.status(400).json({ error: 'Nome da empresa é obrigatório.' });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.error('Erro: E-mail inválido.');
                return res.status(400).json({ error: 'E-mail inválido.' });
            }

            if (!senha || senha.length < 6) {
                console.error('Erro: A senha deve ter no mínimo 6 caracteres.');
                return res.status(400).json({ error: 'A senha deve ter no mínimo 6 caracteres.' });
            }

            const cnpjNumerico = cnpj.replace(/\D/g, '');
            if (!/^\d{14}$/.test(cnpjNumerico)) {
                console.error('Erro: CNPJ deve conter exatamente 14 dígitos numéricos.');
                return res.status(400).json({ error: 'CNPJ deve conter exatamente 14 dígitos numéricos.' });
            }

            if (BigInt(cnpjNumerico) < 0n) {
                console.error('Erro: CNPJ não pode ser negativo.');
                return res.status(400).json({ error: 'CNPJ não pode ser negativo.' });
            }

            const empresa = new EmpresaParceira(null, nome, email, senha, cnpj);
            await EmpresaParceiraDAO.create(empresa);
            res.status(201).json({ message: 'Empresa criada com sucesso' });

        } catch (error) {
            console.error('Erro ao criar empresa:', error.message);
            res.status(500).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { nome, email, senha, cnpj } = req.body;

            if (!nome || nome.trim() === '') {
                console.error('Erro: Nome da empresa é obrigatório.');
                return res.status(400).json({ error: 'Nome da empresa é obrigatório.' });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.error('Erro: E-mail inválido.');
                return res.status(400).json({ error: 'E-mail inválido.' });
            }

            if (!senha || senha.length < 6) {
                console.error('Erro: A senha deve ter no mínimo 6 caracteres.');
                return res.status(400).json({ error: 'A senha deve ter no mínimo 6 caracteres.' });
            }

            const cnpjNumerico = cnpj.replace(/\D/g, '');
            if (!/^\d{14}$/.test(cnpjNumerico)) {
                console.error('Erro: CNPJ deve conter exatamente 14 dígitos numéricos.');
                return res.status(400).json({ error: 'CNPJ deve conter exatamente 14 dígitos numéricos.' });
            }

            if (BigInt(cnpjNumerico) < 0n) {
                console.error('Erro: CNPJ não pode ser negativo.');
                return res.status(400).json({ error: 'CNPJ não pode ser negativo.' });
            }

            const empresa = new EmpresaParceira(req.params.id, nome, email, senha, cnpj);
            await EmpresaParceiraDAO.update(empresa);
            res.json({ message: 'Empresa atualizada com sucesso' });

        } catch (error) {
            console.error('Erro ao atualizar empresa:', error.message);
            res.status(500).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await EmpresaParceiraDAO.delete(req.params.id);
            res.json({ message: 'Empresa deletada com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar empresa:', error.message);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new EmpresaParceiraController();

