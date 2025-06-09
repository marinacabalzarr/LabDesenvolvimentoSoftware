@startuml

actor Aluno

participant TelaAluno as "TelaAluno (Frontend)"
participant VantagensController as "VantagensController"
participant VantagensModel as "VantagemModel"
participant VantagensDAO as "VantagemDAO"
database BancoDeDados

== Listagem de Vantagens ==

Aluno -> TelaAluno : Acessa tela de vantagens
activate TelaAluno
TelaAluno -> VantagensController : GET /vantagens
activate VantagensController
VantagensController -> VantagensModel : obterListaVantagens()
activate VantagensModel
VantagensModel -> VantagensDAO : buscarVantagensDisponiveis()
activate VantagensDAO
VantagensDAO -> BancoDeDados : SELECT * FROM vantagens
activate BancoDeDados
BancoDeDados --> VantagensDAO : listaVantagens
deactivate BancoDeDados
VantagensDAO --> VantagensModel : listaVantagens
deactivate VantagensDAO
VantagensModel --> VantagensController : listaVantagens
deactivate VantagensModel
VantagensController --> TelaAluno : retornarLista(vantagens)
deactivate VantagensController
TelaAluno -> Aluno : Exibe lista de vantagens
deactivate TelaAluno

@enduml
