
@startuml
rectangle "Frontend React" {
    [Portal de Acesso]
}

rectangle "Backend API" {
    [Serviços de Negócio]
}

rectangle "Camada DAO" {
    [DAOs]
}

database "Banco de Dados" {
    [MySqlWorkbench]
}

rectangle "Serviço de Email" {
    [Envio de Notificações]
}

[Portal de Acesso] --> [Serviços de Negócio]
[Serviços de Negócio] --> [DAOs]
[DAOs] --> [MySqlWorkbench]
[Serviços de Negócio] --> [Envio de Notificações]

@enduml
