@startuml

actor Professor
participant TelaProfessor
participant TransacaoRoutes
participant TransacaoController
participant TransacaoModel
database BancoDeDados

Professor -> TelaProfessor : solicitaExtrato()
TelaProfessor -> TransacaoRoutes : GET /api/extrato/professor/:id
TransacaoRoutes -> TransacaoController : extratoProfessor(id)
TransacaoController -> TransacaoModel : extratoProfessor(id)
TransacaoModel -> BancoDeDados : SELECT * FROM transacoes WHERE professor_id = ?
BancoDeDados --> TransacaoModel : listaTransacoes
TransacaoModel --> TransacaoController : listaTransacoes
TransacaoController --> TransacaoRoutes : resposta 200
TransacaoRoutes --> TelaProfessor : listaTransacoes
TelaProfessor --> Professor : exibeExtrato()

@enduml
