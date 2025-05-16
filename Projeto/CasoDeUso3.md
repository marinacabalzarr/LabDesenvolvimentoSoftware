@startuml

actor Aluno
actor Professor
actor EmpresaParceira
actor Administrador
actor Usuario

rectangle SistemaDeMoeda {
  (Trocar moedas por vantagens)
  (Enviar moedas)
  (Cadastrar-se)
  (Autenticar-se)
  (Pré-cadastrar instituições)
  (Pré-cadastrar professores)
  (Consultar extrato)
  (Consultar transações)
  (Cadastrar vantagens)
  (Incluir vantagens)
}

' Relacionamentos do Aluno
Aluno --> (Trocar moedas por vantagens)
(Enviar moedas) --> Aluno
(Incluir vantagens) --> Aluno

' Relacionamentos do Professor
Professor --> (Enviar moedas)

' Relacionamentos de herança
Aluno --|> Usuario
Professor --|> Usuario
EmpresaParceira --|> Usuario

' Relacionamentos do Usuario (comum)
Usuario --> (Cadastrar-se)
Usuario --> (Autenticar-se)
Usuario --> (Consultar extrato)
Usuario --> (Consultar transações)

' Relacionamentos da Empresa Parceira
EmpresaParceira --> (Incluir vantagens)
EmpresaParceira --> (Cadastrar vantagens)

' Relacionamentos do Administrador
Administrador --> (Pré-cadastrar instituições)
Administrador --> (Pré-cadastrar professores)

@enduml
