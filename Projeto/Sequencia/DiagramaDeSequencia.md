@startuml
actor EmpresaParceira
participant TelaEmpresa
participant SistemaDeMoeda
participant BancoDeDados

EmpresaParceira -> TelaEmpresa : Acessa formulário de cadastro
EmpresaParceira -> TelaEmpresa : Preenche nome, descrição, valor, foto
TelaEmpresa -> SistemaDeMoeda : solicitarCadastroVantagem(dados da vantagem)
SistemaDeMoeda -> BancoDeDados : inserirVantagem(dados)
BancoDeDados --> SistemaDeMoeda : confirmação
SistemaDeMoeda --> TelaEmpresa : exibirMensagem("Vantagem cadastrada com sucesso!")
TelaEmpresa -> EmpresaParceira : Confirmação de cadastro
@enduml
