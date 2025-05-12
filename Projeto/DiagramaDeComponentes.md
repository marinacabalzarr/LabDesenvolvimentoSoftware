@startuml

package "Frontend" {
    [Frontend Web/App]
}

package "Módulos" {
    [Autenticação]
    [Cadastro]
    [Moedas]
    [Vantagens]
    [Administrativo]
}

[Frontend Web/App] ..> [Autenticação]
[Frontend Web/App] ..> [Cadastro]
[Frontend Web/App] ..> [Moedas]
[Frontend Web/App] ..> [Vantagens]
[Frontend Web/App] ..> [Administrativo]

[Serviço de Email]

[Moedas] --> [Serviço de Email] : notificações
[Vantagens] --> [Serviço de Email] : envio de cupons

@enduml
