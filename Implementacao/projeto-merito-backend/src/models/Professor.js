class Professor {
  constructor(nome, cpf, departamento, instituicao, saldo = 0) {
    this.nome = nome;
    this.cpf = cpf;
    this.departamento = departamento;
    this.instituicao = instituicao;
    this.saldo = saldo;
  }
}

module.exports = Professor;