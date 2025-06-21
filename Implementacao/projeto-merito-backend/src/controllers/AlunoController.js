const AlunoDAO = require('../dao/AlunoDAO');
const Aluno = require('../models/Aluno');

class AlunoController {
    async listar(req, res) {
        const alunos = await AlunoDAO.readAll();
        res.json(alunos);
    }

    async buscarPorId(req, res) {
        const aluno = await AlunoDAO.readById(req.params.id);
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.json(aluno);
    }

    async criar(req, res) {
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
    }

    async atualizar(req, res) {
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
    }

    async deletar(req, res) {
        await AlunoDAO.delete(req.params.id);
        res.json({ message: 'Aluno deletado com sucesso' });
    }
}

module.exports = new AlunoController();