const AlunoDAO = require('../dao/AlunoDAO');
const VantagemDAO = require('../dao/VantagemDAO');
const db = require('../dao/Database');
const { enviarEmail } = require('../services/EmailService'); 

const gerarCodigo = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

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
    const codigoCupom = gerarCodigo();

    await db.query(
      'INSERT INTO compras (aluno_id, vantagem_id, data, codigo) VALUES (?, ?, NOW(), ?)',
      [aluno_id, vantagem_id, codigoCupom]
    );

    await AlunoDAO.updateMoeda(aluno_id, novaMoeda);

    const empresa = await db.query(
      'SELECT email, nome FROM empresas_parceiras WHERE id = ?',
      [vantagem.empresa_id]
    );

    const emailEmpresa = empresa[0]?.email || 'empresa@exemplo.com';

    try {
      await enviarEmail(
        aluno.email,
        'Seu Cupom de Vantagem',
        `Olá ${aluno.nome},\n\nVocê comprou a vantagem "${vantagem.descricao}" com sucesso!\n\nCUPOM: ${codigoCupom}\n\nApresente este código no momento da troca presencial.\n\nAtenciosamente,\n\nSistema de Moeda Estudantil`
      );
    } catch (err) {
      console.error('❌ Erro ao enviar e-mail para aluno:', err.message);
    }

    try {
      await enviarEmail(
        emailEmpresa,
        'Vantagem Resgatada por Aluno',
        `Olá ${empresa[0]?.nome},\n\nO aluno ${aluno.nome} comprou a vantagem "${vantagem.nome}".\n\nCódigo do cupom: ${codigoCupom}\n\nVerifique esse código no momento da troca presencial.\n\nAtenciosamente,\n\nSistema de Moeda Estudantil`
      );
    } catch (err) {
      console.error('❌ Erro ao enviar e-mail para empresa:', err.message);
    }

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
      SELECT v.nome, v.descricao, v.imagem, c.codigo, c.data
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