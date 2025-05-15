@startuml
skinparam linetype ortho

entity "Usuario" as usuario {
  *id : int <<PK>>
  nome : String
  email : String
  senha : String
}

entity "Aluno" as aluno {
  *id : int <<PK, FK>>
  cpf : int
  rg : String
  endereco : String
  curso : String
  moeda : int
  instituicao_id : int <<FK>>
}

entity "Professor" as professor {
  *id : int <<PK, FK>>
  cpf : int
  departamento : String
  moeda : int
  instituicao_id : int <<FK>>
}

entity "EmpresaParceira" as empresa {
  *id : int <<PK, FK>>
  cnpj : String
}

entity "Instituicao" as instituicao {
  *id : int <<PK>>
  nome : String
}

entity "Vantagem" as vantagem {
  *id : int <<PK>>
  nome : String
  descricao : String
  custoEmMoedas : int
  imagem : String
  empresaParceira_id : int <<FK>>
}

entity "Transacao" as transacao {
  *id : int <<PK>>
  data : Date
  valor : int
  tipo : String
  mensagem : String
  remetente_id : int <<FK>>
  destinatario_id : int <<FK>>
}

' Relacionamentos
aluno -- usuario
professor -- usuario
empresa -- usuario

aluno }o--|| instituicao
professor }o--|| instituicao

vantagem }o--|| empresa

transacao }o--|| usuario
transacao }o--|| usuario
@enduml
