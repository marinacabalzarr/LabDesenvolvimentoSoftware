const AlunoDAO = require('../dao/AlunoDAO');
const VantagemDAO = require('../dao/VantagemDAO');
const db = require('../dao/Database');
const { enviarEmail } = require('../services/EmailService'); 

// Função auxiliar para gerar código de cupom
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

    // Registrar compra com código
    await db.query(
      'INSERT INTO compras (aluno_id, vantagem_id, data, codigo) VALUES (?, ?, NOW(), ?)',
      [aluno_id, vantagem_id, codigoCupom]
    );

    // Atualizar saldo do aluno
    await AlunoDAO.updateMoeda(aluno_id, novaMoeda);

    // Buscar e-mail da empresa parceira
    const empresa = await db.query(
      'SELECT email, nome FROM empresas_parceiras WHERE id = ?',
      [vantagem.empresa_id]
    );

    const emailEmpresa = empresa[0]?.email || 'empresa@exemplo.com';

    // Enviar e-mail ao aluno
    const mensagemAluno = `
Olá ${aluno.nome},

Você comprou a vantagem "${vantagem.descricao}" com sucesso!

CUPOM: ${codigoCupom}

Apresente este código no momento da troca presencial.

Atenciosamente,

Sistema de Moeda Estudantil
    `;

    // Enviar e-mail à empresa
    const mensagemEmpresa = `
Olá ${empresa[0]?.nome},

O aluno ${aluno.nome} comprou a vantagem "${vantagem.nome}".

Código do cupom: ${codigoCupom}

Verifique esse código no momento da troca presencial.

Atenciosamente,

Sistema de Moeda Estudantil
    `;

    // Enviar e-mails protegidos
    try {
      await enviarEmail(aluno.email, 'Seu Cupom de Vantagem', mensagemAluno);
    } catch (err) {
      console.error('❌ Erro ao enviar e-mail para aluno:', err.message);
    }

    try {
      await enviarEmail(emailEmpresa, 'Vantagem Resgatada por Aluno', mensagemEmpresa);
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