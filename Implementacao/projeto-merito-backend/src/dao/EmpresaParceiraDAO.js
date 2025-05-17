const db = require('../dao/Database');
const EmpresaParceira = require('../models/EmpresaParceira');

class EmpresaParceiraDAO {
    async create(empresa) {
        const sql = 'INSERT INTO empresas_parceiras (nome, email, senha, cnpj) VALUES (?, ?, ?, ?)';
        const params = [empresa.nome, empresa.email, empresa.senha, empresa.cnpj];
        await db.query(sql, params);
    }

    async readAll() {
        const sql = 'SELECT * FROM empresas_parceiras';
        return await db.query(sql);
    }

    async readById(id) {
        const sql = 'SELECT * FROM empresas_parceiras WHERE id = ?';
        const [empresa] = await db.query(sql, [id]);
        return empresa;
    }

    async update(empresa) {
        const sql = 'UPDATE empresas_parceiras SET nome = ?, email = ?, senha = ?, cnpj = ? WHERE id = ?';
        const params = [empresa.nome, empresa.email, empresa.senha, empresa.cnpj, empresa.id];
        await db.query(sql, params);
    }

    async delete(id) {
        const sql = 'DELETE FROM empresas_parceiras WHERE id = ?';
        await db.query(sql, [id]);
    }
}

module.exports = new EmpresaParceiraDAO();