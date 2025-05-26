@startuml
actor Aluno
participant TelaAluno
participant SistemaDeMoeda
participant BancoDeDados

Aluno -> TelaAluno : Acessa tela de vantagens
TelaAluno -> SistemaDeMoeda : solicitarListaVantagens()
SistemaDeMoeda -> BancoDeDados : consultarVantagensDisponiveis()
BancoDeDados --> SistemaDeMoeda : listaVantagens
SistemaDeMoeda --> TelaAluno : retornarLista(vantagens)
TelaAluno -> Aluno : Exibe lista de vantagens
@enduml
