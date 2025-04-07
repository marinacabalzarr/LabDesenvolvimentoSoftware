@startuml
!define RECTANGLE class

skinparam componentStyle rectangle
skinparam defaultTextAlignment center

' Nós físicos
node "Dispositivo do Cliente" {
  [Navegador Web Cliente]
}

node "Dispositivo do Agente" {
  [Navegador Web Agente]
}

node "Servidor Central" {
  component "Gestão de Pedidos e Contratos" as Pedidos
  component "Construção Dinâmica de Páginas Web" as Web
  database "Banco de Dados" as DB
}

"Dispositivo do Cliente" -- "Servidor Central": <<HTTP>>
"Dispositivo do Agente" -- "Servidor Central": <<HTTP>>
Web --> Pedidos
Pedidos --> DB
@enduml
