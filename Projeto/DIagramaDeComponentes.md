@startuml
package "Sistema de Aluguel de Automóveis" {

  [Portal Web] -[dashed]-> [Subsistema de Páginas Web]

  package "Subsistema de Páginas Web" {
    [Construtor de Páginas]
    [Gerenciador de Sessões]
  }

  [Portal Web] -[dashed]-> [Subsistema de Gestão de Pedidos e Contratos]

  package "Subsistema de Gestão de Pedidos e Contratos" {
    [Módulo de Cadastro de Usuários]
    [Módulo de Pedidos de Aluguel]
    [Módulo de Análise Financeira]
    [Módulo de Avaliação de Agentes]
    [Módulo de Contratos]
    [Módulo de Veículos]
    [Módulo de Crédito Bancário]
    [Módulo de Identificação e Renda]
  }

  [Módulo de Pedidos de Aluguel] -[dashed]-> [Módulo de Análise Financeira]
  [Módulo de Análise Financeira] -[dashed]-> [Módulo de Avaliação de Agentes]
  [Módulo de Avaliação de Agentes] -[dashed]-> [Módulo de Contratos]

  [Módulo de Contratos] -[dashed]-> [Módulo de Veículos]
  [Módulo de Contratos] -[dashed]-> [Módulo de Crédito Bancário]
  [Módulo de Cadastro de Usuários] -[dashed]-> [Módulo de Identificação e Renda]

}

@enduml
