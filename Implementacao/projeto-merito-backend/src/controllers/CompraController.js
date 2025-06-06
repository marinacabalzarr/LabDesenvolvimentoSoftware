const AlunoDAO = require('../dao/AlunoDAO');
const VantagemDAO = require('../dao/VantagemDAO');
const db = require('../dao/Database');

const registrarCompra = async (req, res) => {
  try {
    const { aluno_id, vantagem_id } = req.body;

    const aluno = await AlunoDAO.readById(aluno_id);
    const vantagem = await VantagemDAO.findById(vantagem_id);

    if (!aluno || !vantagem) {
      return res.status(404).json({ error: 'Aluno ou vantagem não encontrados' });
    }

    if (aluno.moeda < vantagem.custo_moedas) {
      return res.status(400).json({ error: 'Moedas insuficientes' });
    }

    const novaMoeda = aluno.moeda - vantagem.custo_moedas;

    // Registrar compra
    await db.query(
      'INSERT INTO compras (aluno_id, vantagem_id, data) VALUES (?, ?, NOW())',
      [aluno_id, vantagem_id]
    );

    // Atualizar saldo do aluno
    await AlunoDAO.updateMoeda(aluno_id, novaMoeda);

    res.status(201).json({ message: 'Compra registrada com sucesso' });
  } catch (err) {
    console.error('Erro ao registrar compra:', err);
    res.status(500).json({ error: 'Erro ao registrar compra' });
  }
};

const listarComprasPorAluno = async (req, res) => {
  try {
    const { id } = req.params;

    const compras = await db.query(`
      SELECT v.nome, v.descricao, v.imagem 
      FROM compras c
      JOIN vantagens v ON c.vantagem_id = v.id
      WHERE c.aluno_id = ?
    `, [id]);

    res.json(compras);
  } catch (err) {
    console.error('Erro ao buscar compras:', err);
    res.status(500).json({ error: 'Erro ao buscar compras' });
  }
};

module.exports = {
  registrarCompra,
  listarComprasPorAluno
};