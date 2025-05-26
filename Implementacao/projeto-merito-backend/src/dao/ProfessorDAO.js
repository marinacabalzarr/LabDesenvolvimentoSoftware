const db = require('./Database');
const Professor = require('../models/Professor');

class ProfessorDAO {
  async create(professor) {
    const sql = 'INSERT INTO professores (nome, cpf, departamento, instituicao, saldo) VALUES (?, ?, ?, ?, ?)';
    await db.query(sql, [professor.nome, professor.cpf, professor.departamento, professor.instituicao, professor.saldo]);
  }

  async findById(id) {
    const sql = 'SELECT * FROM professores WHERE id = ?';
    const [result] = await db.query(sql, [id]);
    return result[0];
  }

  async updateSaldo(id, novoSaldo) {
    const sql = 'UPDATE professores SET saldo = ? WHERE id = ?';
    await db.query(sql, [novoSaldo, id]);
  }

  async findAll() {
    return await db.query('SELECT * FROM professores');
  }
}

module.exports = new ProfessorDAO();