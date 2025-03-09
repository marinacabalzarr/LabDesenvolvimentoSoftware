@startuml
abstract class Usuario {
- nome: String
- id: int
- senha: String
+ realizaLogin(String senha): void
}
class Professor {
+ vizualizaAluno(Aluno aluno): void
}
class Aluno {
- id: String
+ requisitarMatricula(): void
+ cancelarMatricula(): void
}
class Curso {
- nome: String
- numeroCreditos: int
}
class Disciplina {
- nome: String
- numeroAlunos: int
+ isObrigatoria(): boolean
+ verificaAtividade(): boolean
}
class Secretaria {
+ gerarCurriculo(): void
+ criarCurso(): void
+ adicionarDisciplina(): void
+ removerDisciplina(): void
+ adicionarUsuario(): void
+ removerUsuario(): void
}
class Financeiro {
+ cobrarAluno(Aluno aluno, Disciplina disciplina): void
}
class SistemaDeMatricula {
+ verificaPossibilidadeMatricula(Aluno aluno, Disciplina disciplina): void
+ notificarFinanceiro(Aluno aluno, Disciplina disciplina): void
}
Usuario <|-- Professor
Usuario <|-- Aluno
Usuario <|-- SistemaDeMatricula
Usuario <|-- Financeiro
Usuario <|-- Secretaria
Curso *-- Disciplina
@enduml
