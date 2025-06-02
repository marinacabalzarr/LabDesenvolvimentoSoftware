@startuml

actor Professor
participant TelaProfessor
participant TransacaoRoutes
participant TransacaoController
participant TransacaoDAO
database BancoDeDados

== Consulta Extrato ==
Professor -> TelaProfessor : solicitaExtrato()
activate TelaProfessor
TelaProfessor -> TransacaoRoutes : GET /api/extrato/professor/:id
activate TransacaoRoutes
TransacaoRoutes -> TransacaoController : extratoProfessor(id)
activate TransacaoController

TransacaoController -> TransacaoDAO : extratoProfessor(id)
activate TransacaoDAO
TransacaoDAO -> BancoDeDados : SELECT * FROM transacoes WHERE professor_id = ?
activate BancoDeDados
BancoDeDados --> TransacaoDAO : listaTransacoes
deactivate BancoDeDados
TransacaoDAO --> TransacaoController : listaTransacoes
deactivate TransacaoDAO
TransacaoController --> TransacaoRoutes : resposta 200 + dados
deactivate TransacaoController
TransacaoRoutes --> TelaProfessor : listaTransacoes
deactivate TransacaoRoutes
TelaProfessor -> Professor : exibeExtrato()
deactivate TelaProfessor

@enduml
