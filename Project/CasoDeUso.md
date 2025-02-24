@startuml
actor "Aluno" as aluno
actor "Financeiro" as financeiro
actor "Funcionário do sistema de matrícula" as funcionarioMatricula
actor "Secretária" as secretaria
actor "Professor" as professor
actor "Usuário" as usuario

usuario <|-- aluno
usuario <|-- financeiro
usuario <|-- funcionarioMatricula
usuario <|-- secretaria
usuario <|-- professor

rectangle "Sistema de matrícula" {
    aluno --> (Requisitar matrícula optativa)
    aluno --> (Requisitar matrícula obrigatória)
    aluno --> (Cancelar matrícula)
    
    financeiro --> (Cobrar aluno)
    financeiro <-- (Notificar financeiro)
    
    funcionarioMatricula --> (Verificar possibilidade de matrícula)
    funcionarioMatricula --> (Notificar financeiro)

    
    secretaria --> (Manter informações do professor)
    secretaria --> (Manter informações do aluno)
    secretaria --> (Manter informações da disciplina)
    secretaria --> (Gerar currículo)
    
    professor --> (Visualizar aluno)
    
    usuario --> (Realizar cadastro)
    usuario --> (Realizar login)
}
@enduml
