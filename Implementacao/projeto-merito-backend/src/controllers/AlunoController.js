const AlunoDAO = require('../dao/AlunoDAO');
const Aluno = require('../models/Aluno');

class AlunoController {
    async listar(req, res) {
        try {
            const alunos = await AlunoDAO.readAll();
            res.json(alunos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const aluno = await AlunoDAO.readById(req.params.id);
            if (aluno) {
                res.json(aluno);
            } else {
                res.status(404).json({ error: 'Aluno não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const aluno = new Aluno(
                null,
                req.body.nome,
                req.body.email,
                req.body.senha,
                req.body.cpf,
                req.body.rg,
                req.body.endereco,
                req.body.curso,
                req.body.instituicao,
                req.body.moeda
            );
            await AlunoDAO.create(aluno);
            res.status(201).json({ message: 'Aluno criado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const aluno = new Aluno(
                req.params.id,
                req.body.nome,
                req.body.email,
                req.body.senha,
                req.body.cpf,
                req.body.rg,
                req.body.endereco,
                req.body.curso,
                req.body.instituicao,
                req.body.moeda
            );
            await AlunoDAO.update(aluno);
            res.json({ message: 'Aluno atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await AlunoDAO.delete(req.params.id);
            res.json({ message: 'Aluno deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AlunoController();