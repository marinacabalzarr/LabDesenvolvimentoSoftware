const db = require('./Database');

class CompraDAO {
  async registrar(aluno_id, vantagem_id) {
    const sql = 'INSERT INTO compras (aluno_id, vantagem_id, data) VALUES (?, ?, NOW())';
    await db.query(sql, [aluno_id, vantagem_id]);
  }

  async listarPorAluno(aluno_id) {
    const sql = `
      SELECT v.nome, v.descricao 
      FROM compras c 
      JOIN vantagens v ON c.vantagem_id = v.id 
      WHERE c.aluno_id = ?
    `;
    return await db.query(sql, [aluno_id]);
  }
}

module.exports = new CompraDAO();