@startuml

actor EmpresaParceira
participant TelaEmpresa as "TelaEmpresa (Frontend)"
participant VantagemRoutes as "VantagemRoutes"
participant VantagemController as "VantagemController"
participant VantagemModel as "VantagemModel"
participant VantagemDAO as "VantagemDAO"
database BancoDeDados

== Cadastro de Vantagens ==

EmpresaParceira -> TelaEmpresa : acessaFormVantagem()
EmpresaParceira -> TelaEmpresa : preencheDados()
TelaEmpresa -> VantagemRoutes : POST /vantagens {dados}
activate VantagemRoutes
VantagemRoutes -> VantagemController : criarVantagem(req)
activate VantagemController
VantagemController -> VantagemModel : new Vantagem()
VantagemController -> VantagemDAO : create(vantagem)
activate VantagemDAO
VantagemDAO -> BancoDeDados : INSERT INTO vantagens
activate BancoDeDados
BancoDeDados --> VantagemDAO : sucesso
deactivate BancoDeDados
VantagemDAO --> VantagemController : sucesso
deactivate VantagemDAO
VantagemController --> VantagemRoutes : 201 Created
deactivate VantagemController
VantagemRoutes --> TelaEmpresa : mensagem de sucesso
deactivate VantagemRoutes
TelaEmpresa -> EmpresaParceira : "Vantagem cadastrada com sucesso!"
deactivate TelaEmpresa

@enduml
