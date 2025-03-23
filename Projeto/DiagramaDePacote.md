@startuml
package "Usuarios" {
    class Usuario {
        - id: int
        - nome: String
        - senha: String
        - tipo: Tipo
        + cadastrar(nome: String, senha: String, tipo: Tipo): void
        + logar(nome: String, senha: String): void
    }
    class TipoUsuario {
        - cliente
        - agente
        - funcionario
    }
}

package "Atores" {
    class Cliente {
        - rg: String
        - cpf: String
        - nome: String
        - endereco: String
        - profissao: String
        - entidadesEmpregadoras: String
        - renda: String
        + introduzirPedido(automovel: Automovel): void
        + modificarPedido(pedido: Pedido): void
        + consultarPedido(pedido: Pedido): void
        + listarAutomoveis(automovel: Automovel): void
        + cancelarPedido(pedido: Pedido): void
    }
    class Agente {
        - parecerPositivo: boolean
        + modificarPedido(pedido: Pedido): void
        + avaliarPedido(pedido: Pedido): void
    }
    class FuncionarioSistema {
        + cadastrarAutomovel(): void
        + realizarPedido(automovel: Automovel, cliente: Cliente): void
    }
    class AgenteBanco {
        + realizarContratoCredito(): void
    }
}

package "Negócio" {
    class Pedido {
        - id: int
        - automovel: Automovel
        - cliente: Cliente
        - status: String
    }
    class Automovel {
        - matricula: int
        - ano: String
        - marca: String
        - modelo: String
        - placa: String
    }
    class TipoContrato {
        - propriedadeCliente
        - propriedadeEmpresa
        - propriedadeBanco
    }
}

Usuario <|-- Cliente
Usuario <|-- Agente
Usuario <|-- FuncionarioSistema
FuncionarioSistema --> Pedido
FuncionarioSistema --> Automovel
Agente <|-- AgenteBanco
Pedido --> Cliente
Pedido --> Automovel
@enduml
