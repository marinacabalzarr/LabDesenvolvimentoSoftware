const db = require('./Database');
const Transacao = require('../models/Transacao');

class TransacaoDAO {
  async registrar(transacao) {
    const sql = 'INSERT INTO transacoes (professor_id, aluno_id, quantidade, mensagem, data) VALUES (?, ?, ?, ?, ?)';
    await db.query(sql, [
      transacao.professor_id,
      transacao.aluno_id,
      transacao.quantidade,
      transacao.mensagem,
      transacao.data
    ]);
  }

  async extratoProfessor(id) {
    const sql = 'SELECT * FROM transacoes WHERE professor_id = ? ORDER BY data DESC';
    return await db.query(sql, [id]);
  }

  async extratoAluno(id) {
    const sql = 'SELECT * FROM transacoes WHERE aluno_id = ? ORDER BY data DESC';
    return await db.query(sql, [id]);
  }
}

module.exports = new TransacaoDAO();
