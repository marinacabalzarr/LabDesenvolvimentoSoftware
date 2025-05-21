const db = require('../dao/Database');
const Vantagem = require('../models/Vantagem');

class VantagemDAO {
    async create(vantagem) {
        const sql = 'INSERT INTO vantagens (nome, descricao, custo_moedas, imagem, empresa_id) VALUES (?, ?, ?, ?, ?)';
        const params = [vantagem.nome, vantagem.descricao, vantagem.custoMoedas, vantagem.imagem, vantagem.empresaId];
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
}

module.exports = new VantagemDAO();