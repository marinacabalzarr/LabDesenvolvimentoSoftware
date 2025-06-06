const db = require('../dao/Database');
const Aluno = require('../models/Aluno');

class AlunoDAO {
    async create(aluno) {
        const sql = 'INSERT INTO alunos (nome, email, senha, cpf, rg, endereco, curso, instituicao, moeda) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const params = [aluno.nome, aluno.email, aluno.senha, aluno.cpf, aluno.rg, aluno.endereco, aluno.curso, aluno.instituicao, aluno.moeda];
        await db.query(sql, params);
    }

    async readAll() {
        const sql = 'SELECT * FROM alunos';
        return await db.query(sql);
    }

    async readById(id) {
        const sql = 'SELECT * FROM alunos WHERE id = ?';
        const [aluno] = await db.query(sql, [id]);
        return aluno;
    }

    async update(aluno) {
        const sql = 'UPDATE alunos SET nome = ?, email = ?, senha = ?, cpf = ?, rg = ?, endereco = ?, curso = ?, instituicao = ?, moeda = ? WHERE id = ?';
        const params = [aluno.nome, aluno.email, aluno.senha, aluno.cpf, aluno.rg, aluno.endereco, aluno.curso, aluno.instituicao, aluno.moeda, aluno.id];
        await db.query(sql, params);
    }

    async delete(id) {
        const sql = 'DELETE FROM alunos WHERE id = ?';
        await db.query(sql, [id]);
    }

    async adicionarMoedas(id, quantidade) {
        const sql = 'UPDATE alunos SET moeda = moeda + ? WHERE id = ?';
        await db.query(sql, [quantidade, id]);
    }

    async updateMoeda(id, novaMoeda) {
        const sql = 'UPDATE alunos SET moeda = ? WHERE id = ?';
        await db.query(sql, [novaMoeda, id]);
    }

}

module.exports = new AlunoDAO();