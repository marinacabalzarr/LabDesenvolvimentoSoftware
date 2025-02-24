@startuml
abstract class Usuario {
- nome: String
- id: int
- senha: String
+ realizaLogin(String senha): void
+ realizaCadastro(): void
}
class Professor {
+ vizualizaAluno(Aluno aluno): void
+ disciplinasLecionadas(): void
}
class Aluno {
+ requisitarMatriculaObrigatoria(): void
+ requisitarMatriculaOptativa(): void
+ cancelarMatricula(): void
+ disciplinasCadastradas(): void
}
class Curso {
- nome: String
- numeroCreditos: int
}
class Disciplina {
- nome: String
- numeroAlunos: int
- tipo: Tipo
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
enum TipoDisciplina(){
1,2
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
