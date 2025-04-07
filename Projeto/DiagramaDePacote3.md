@startuml

package Model {
    class Usuario {
        - id: int
        - nome: String
        - senha: String
        + cadastrar(nome: String, senha: String, tipo: Tipo): void
        + logar(nome: String, senha: String): void
        + modificarPedido(pedido: Pedido): void
    }
    class Cliente {
        - rg: String
        - cpf: String
        - nome: String
        - endereco: String
        - profissao: String
        - limite: int 
        - entidadesEmpregadoras: String [0..3]
        - rendimentos: double [0..3]
        + introduzirPedido(automovel: Automovel): void
        + consultarPedido(pedido: Pedido): void
        + listarAutomoveis(automovel: Automovel): void
        + cancelarPedido(pedido: Pedido): void
    }
    class Agente {
        - parecerPositivo: boolean
        + avaliarPedido(pedido: Pedido): void
    }
    class AgenteBanco {
        + realizarContratoCredito(): void
        + concederContratoCredito(): void
    }
    class AgenteEmpresa {
        + cadastrarAutomovel(): void
        + realizarPedido(automovel: Automovel, cliente: Cliente): void
    }
    enum Status {
        Aprovado
        Cancelado
        Pendente
    }
}

package Controller {
    class Pedido {
        - id: int
        - automovel: Automovel
        - agente: Agente
        - cliente: Cliente
        - status: Status
    }
    class Automovel {
        - matricula: int
        - ano: String
        - marca: String
        - modelo: String
        - placa: String
    }
    class Contrato {
        - id: int
        - tipo: String
        - pedido: Pedido
        - cliente: Cliente
        - agente: Agente
        - valor: Double
    }
}

package View {
    class InterfaceUsuario {
        + exibirMenu(): void
    }
}

Usuario <|-- Cliente
Usuario <|-- Agente
Agente <|-- AgenteEmpresa
Agente <|-- AgenteBanco

AgenteEmpresa "1.." --> Pedido
Automovel "0..1" - "0.." Pedido
( Pedido, Automovel ) .. Contrato

@enduml
