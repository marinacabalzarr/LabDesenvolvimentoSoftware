@startuml

actor Aluno
participant TelaAluno
participant CompraRoutes
participant CompraController
participant AlunoDAO
participant VantagemDAO
database BancoDeDados

== Compra de Vantagem ==
Aluno -> TelaAluno : clicarBotaoComprar(vantagemId)
activate TelaAluno
TelaAluno -> CompraRoutes : POST /compras {aluno_id, vantagem_id}
activate CompraRoutes
CompraRoutes -> CompraController : registrarCompra(req)
activate CompraController

CompraController -> AlunoDAO : readById(aluno_id)
activate AlunoDAO
AlunoDAO -> BancoDeDados : SELECT * FROM alunos WHERE id = ?
activate BancoDeDados
BancoDeDados --> AlunoDAO : aluno
deactivate BancoDeDados
AlunoDAO --> CompraController : aluno
deactivate AlunoDAO

CompraController -> VantagemDAO : findById(vantagem_id)
activate VantagemDAO
VantagemDAO -> BancoDeDados : SELECT * FROM vantagens WHERE id = ?
activate BancoDeDados
BancoDeDados --> VantagemDAO : vantagem
deactivate BancoDeDados
VantagemDAO --> CompraController : vantagem
deactivate VantagemDAO

CompraController -> CompraController : verificaSaldo()
alt saldoSuficiente
    CompraController -> BancoDeDados : INSERT INTO compras (...)
    CompraController -> AlunoDAO : updateMoeda(aluno_id, novoSaldo)
    activate AlunoDAO
    AlunoDAO -> BancoDeDados : UPDATE alunos SET moeda = ... WHERE id = ?
    BancoDeDados --> AlunoDAO : ok
    deactivate AlunoDAO
    CompraController --> CompraRoutes : 201 Compra registrada
else saldoInsuficiente
    CompraController --> CompraRoutes : 400 Moedas insuficientes
end
deactivate CompraController
CompraRoutes --> TelaAluno : resposta
deactivate CompraRoutes
TelaAluno -> Aluno : exibeMensagem()

deactivate TelaAluno

@enduml
