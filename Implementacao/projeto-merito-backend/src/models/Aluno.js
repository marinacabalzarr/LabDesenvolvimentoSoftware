class Aluno {
    constructor(id, nome, email, senha, cpf, rg, endereco, curso, instituicao, moeda) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.rg = rg;
        this.endereco = endereco;
        this.curso = curso;
        this.instituicao = instituicao;
        this.moeda = moeda || 0;
    }
}

module.exports = Aluno;