@startuml
actor "Usuário" as Usuario
actor "Cliente" as Cliente
actor "Agente" as Agente
actor "AgenteBanco" as AgenteBanco
actor "Funcionário do sistema" as FuncSistema

package SistemaAluguelCarros{
usecase "Realizar cadastro" as (Realizar cadastro)
usecase "Realizar login" as (Realizar login)
usecase "Introduzir pedido" as (Introduzir pedido)
usecase "Modificar pedido" as (Modificar pedido)
usecase "Consultar pedido" as (Consultar pedido)
usecase "Cancelar pedido" as (Cancelar pedido)
usecase "Avaliar pedido" as (Avaliar pedido)
usecase "Analisar financeiramente" as (Analisar financeiramente)
usecase "Executar contrato" as (Executar contrato)
usecase "Realizar pedido" as (Realizar pedido)
usecase "Conceder contrato" as (Conceder contrato)
usecase "Realizar contrato de credito" as (Realizar contrato credito)
usecase "Listar automoveis" as (Listar automoveis)
}
Usuario --> (Realizar cadastro)
Usuario --> (Realizar login)
Cliente --> (Introduzir pedido)
Cliente --> (Modificar pedido)
Cliente --> (Cancelar pedido)
Cliente --> (Consultar pedido)
Cliente --> (Listar automoveis)
Agente--> (Modificar pedido)
Agente--> (Avaliar pedido)
Agente --> (Analisar financeiramente)
Agente--> (Executar contrato)
Agente --> (Conceder contrato)
AgenteBanco --> (Realizar contrato credito)
FuncSistema --> (Realizar pedido)

Usuario <|-- Cliente
Usuario <|-- Agente
Agente <|-- AgenteBanco
Usuario <|-- FuncSistema

@enduml
