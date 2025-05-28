@startuml

actor Professor
participant TelaProfessor
participant TransacaoRoutes
participant TransacaoController
participant TransacaoModel
participant ProfessorDAO
database BancoDeDados

Professor -> TelaProfessor : preencheFormularioEnvio()
TelaProfessor -> TransacaoRoutes : POST /api/transacoes
TransacaoRoutes -> TransacaoController : enviarMoedas(req)
TransacaoController -> ProfessorDAO : findById(id)
ProfessorDAO -> BancoDeDados : SELECT * FROM professores
BancoDeDados --> ProfessorDAO : dadosProfessor
ProfessorDAO --> TransacaoController : Professor
TransacaoController -> TransacaoModel : new Transacao()
TransacaoController -> TransacaoModel : registrar()
TransacaoModel -> BancoDeDados : INSERT INTO transacoes
BancoDeDados --> TransacaoModel : sucesso
TransacaoController -> ProfessorDAO : updateSaldo()
ProfessorDAO -> BancoDeDados : UPDATE professores SET saldo
BancoDeDados --> ProfessorDAO : sucesso
TransacaoController --> TransacaoRoutes : resposta 201
TransacaoRoutes --> TelaProfessor : mensagem sucesso
TelaProfessor --> Professor : "Moedas enviadas com sucesso!"

@enduml
