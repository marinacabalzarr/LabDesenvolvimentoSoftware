class Transacao {
  constructor(professor_id, aluno_id, quantidade, mensagem, data) {
    this.professor_id = professor_id;
    this.aluno_id = aluno_id;
    this.quantidade = quantidade;
    this.mensagem = mensagem;
    this.data = data || new Date();
  }
}

module.exports = Transacao;