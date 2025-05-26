@startuml

actor Aluno

participant TelaAluno as "Frontend (Routes)"
participant VantagensController as "Controller"
participant VantagensModel as "Model"
participant VantagensDAO as "DAO"
database BancoDeDados

Aluno -> TelaAluno : Acessa tela de vantagens
TelaAluno -> VantagensController : GET /vantagens
VantagensController -> VantagensModel : obterListaVantagens()
VantagensModel -> VantagensDAO : buscarVantagensDisponiveis()
VantagensDAO -> BancoDeDados : SELECT * FROM vantagens
BancoDeDados --> VantagensDAO : listaVantagens
VantagensDAO --> VantagensModel : listaVantagens
VantagensModel --> VantagensController : listaVantagens
VantagensController --> TelaAluno : retornarLista(vantagens)
TelaAluno -> Aluno : Exibe lista de vantagens

@enduml
