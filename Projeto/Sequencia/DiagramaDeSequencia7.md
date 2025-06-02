@startuml

actor Professor
participant TelaProfessor
participant TransacaoRoutes
participant TransacaoController
participant TransacaoDAO
participant ProfessorDAO
database BancoDeDados

== Envio de Moedas ==
Professor -> TelaProfessor : preencheFormularioEnvio()
activate TelaProfessor
TelaProfessor -> TransacaoRoutes : POST /api/transacoes
activate TransacaoRoutes
TransacaoRoutes -> TransacaoController : enviarMoedas(req)
activate TransacaoController

TransacaoController -> ProfessorDAO : findById(professor_id)
activate ProfessorDAO
ProfessorDAO -> BancoDeDados : SELECT * FROM professores WHERE id = ?
activate BancoDeDados
BancoDeDados --> ProfessorDAO : dadosProfessor
deactivate BancoDeDados
ProfessorDAO --> TransacaoController : Professor
deactivate ProfessorDAO

TransacaoController -> TransacaoDAO : registrar(transacao)
activate TransacaoDAO
TransacaoDAO -> BancoDeDados : INSERT INTO transacoes (...)
BancoDeDados --> TransacaoDAO : sucesso
deactivate TransacaoDAO

TransacaoController -> ProfessorDAO : updateSaldo(id, novoSaldo)
activate ProfessorDAO
ProfessorDAO -> BancoDeDados : UPDATE professores SET saldo = ?
BancoDeDados --> ProfessorDAO : sucesso
deactivate ProfessorDAO

TransacaoController --> TransacaoRoutes : resposta 201
deactivate TransacaoController
TransacaoRoutes --> TelaProfessor : mensagem sucesso
deactivate TransacaoRoutes
TelaProfessor -> Professor : "Moedas enviadas com sucesso!"
deactivate TelaProfessor

@enduml
