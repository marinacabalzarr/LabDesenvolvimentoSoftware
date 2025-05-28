@startuml

actor EmpresaParceira
participant TelaEmpresa
participant VantagemRoutes
participant VantagemController
participant VantagemModel
database BancoDeDados

EmpresaParceira -> TelaEmpresa : acessaFormVantagem()
EmpresaParceira -> TelaEmpresa : preencheDados()
TelaEmpresa -> VantagemRoutes : POST /api/vantagens
VantagemRoutes -> VantagemController : criarVantagem(req)
VantagemController -> VantagemModel : new Vantagem()
VantagemController -> VantagemModel : VantagemDAO.create()
VantagemModel -> BancoDeDados : INSERT INTO vantagens
BancoDeDados --> VantagemModel : sucesso
VantagemModel --> VantagemController : sucesso
VantagemController --> VantagemRoutes : resposta 201
VantagemRoutes --> TelaEmpresa : mensagem sucesso
TelaEmpresa --> EmpresaParceira : "Vantagem cadastrada com sucesso!"

@enduml
