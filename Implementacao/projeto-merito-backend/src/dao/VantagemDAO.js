const db = require('../dao/Database');
const Vantagem = require('../models/Vantagem');

class VantagemDAO {
    async create(vantagem) {
        const sql = 'INSERT INTO vantagens (nome, descricao, custo_moedas, imagem, empresa_id) VALUES (?, ?, ?, ?, ?)';
        const params = [vantagem.nome, vantagem.descricao, vantagem.custo_moedas, vantagem.imagem, vantagem.empresa_id];
        await db.query(sql, params);
    }

    async readByEmpresa(empresaId) {
        const sql = 'SELECT * FROM vantagens WHERE empresa_id = ?';
        return await db.query(sql, [empresaId]);
    }

    async readAll() {
        const sql = 'SELECT * FROM vantagens';
        return await db.query(sql);
    }

    async findById(id) {
        const sql = 'SELECT * FROM vantagens WHERE id = ?';
        const [vantagem] = await db.query(sql, [id]);
        return vantagem;
    }

}

module.exports = new VantagemDAO();