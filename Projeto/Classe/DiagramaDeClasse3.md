@startuml

class Usuario {
    - id: int
    - nome: String
    - email: String
    - senha: String
    + autenticar(): boolean
    + cadastrar(): boolean
}

class Aluno {
    - cpf: int
    - rg: String
    - endereco: String
    - curso: String
    - instituicao: Instituicao
    - moeda: int
    + consultarExtrato(): List
    + trocarMoedas(vantagem: Vantagem): void
    + receberMoedas(valor: int, mensagem: String): void
    + notificarPorEmail(mensagem: String): void
    + resgatarVantagem(vantagem: Vantagem): void
}

class Professor {
    - cpf: int
    - departamento: String
    - instituicao: Instituicao
    - moeda: int
    + receberSaldoSemestral(): void
    + enviarMoedas(aluno: Aluno, valor: int, mensagem: String): void
    + consultarExtrato(): List
}

class EmpresaParceira {
    - cnpj: String
    + cadastrarVantagem(vantagem: Vantagem): void
    + notificarResgate(codigo: String): void
}

class Instituicao {
    - id: int
    - nome: String
    + associarProfessor(professor: Professor): void
}

class Vantagem {
    - id: int
    - nome: String
    - descricao: String
    - custoEmMoedas: int
    - imagem: String
    + resgatar(): void
}

class Transacao {
    - id: int
    - data: Date
    - valor: int
    - tipo: String
    - mensagem: String
    - remetente: Usuario
    - destinatario: Usuario
    + gerarCodigoResgate(): String
}

Aluno         --|> Usuario
Professor     --|> Usuario
EmpresaParceira --|> Usuario

Aluno         --> Instituicao
Professor     --> Instituicao

Vantagem      --> EmpresaParceira

@enduml
