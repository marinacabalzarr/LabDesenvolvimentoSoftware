@startuml
left to right direction
actor Aluno
actor Professor
actor EmpresaParceira
actor Administrador
actor Usuario

rectangle SistemaDeMoeda {
  (Receber moedas)
  (Trocar moedas por vantagens)
  (Enviar moedas a alunos)
  (Justificar envio de moedas)
  (Cadastrar-se)
  (Consultar extrato professor)
  (Autenticar-se)
  (Pré-cadastrar instituições)
  (Pré-cadastrar professores)
  (Cadastrar vantagem)
  (Consultar extrato aluno)
  (Adicionar descricao)
  (Adicionar foto do produto)
  (Incluir vantagens)
}

Aluno --> (Receber moedas)
Aluno --> (Trocar moedas por vantagens)
Aluno --> (Consultar extrato aluno)

Professor --> (Enviar moedas a alunos)
Professor --> (Justificar envio de moedas)
Professor --> (Consultar extrato professor)

Aluno --|> Usuario
Professor --|> Usuario
EmpresaParceira --|> Usuario

Usuario --> (Cadastrar-se)
Usuario --> (Autenticar-se)

EmpresaParceira --> (Adicionar foto do produto)
EmpresaParceira --> (Incluir vantagens)
EmpresaParceira --> (Adicionar descricao)

Administrador --> (Pré-cadastrar instituições)
Administrador --> (Pré-cadastrar professores)
Administrador --> (Cadastrar vantagem)
@enduml
