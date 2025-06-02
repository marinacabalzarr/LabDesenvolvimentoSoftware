@startuml

actor Aluno
participant TelaAluno
participant TransacaoRoutes
participant TransacaoController
participant TransacaoDAO
database BancoDeDados

== Consulta Extrato ==
Aluno -> TelaAluno : solicitaExtrato()
activate TelaAluno
TelaAluno -> TransacaoRoutes : GET /api/extrato/aluno/:id
activate TransacaoRoutes
TransacaoRoutes -> TransacaoController : extratoAluno(id)
activate TransacaoController

TransacaoController -> TransacaoDAO : extratoAluno(id)
activate TransacaoDAO
TransacaoDAO -> BancoDeDados : SELECT * FROM transacoes WHERE aluno_id = ?
activate BancoDeDados
BancoDeDados --> TransacaoDAO : listaTransacoes
deactivate BancoDeDados
TransacaoDAO --> TransacaoController : listaTransacoes
deactivate TransacaoDAO
TransacaoController --> TransacaoRoutes : resposta 200 + dados
deactivate TransacaoController
TransacaoRoutes --> TelaAluno : listaTransacoes
deactivate TransacaoRoutes
TelaAluno -> Aluno : exibeExtrato()
deactivate TelaAluno

@enduml
