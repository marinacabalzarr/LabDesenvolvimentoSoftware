@startuml

class Usuario {
    - nome: String
    - senha: String
    + Usuario(nome: String, senha: String)
    + autenticar(senha: String): boolean
}

class Aluno {
    - id: int
    - proximoId: int
    - disciplinasMatriculadas: List<Disciplina>
    + Aluno(nome: String, senha: String)
    + contarDisciplinasPorTipo(tipo: int): int
    + requisitarMatricula(disciplina: Disciplina): boolean
    + cancelarMatricula(disciplina: Disciplina): boolean
    + calcularValorTotal(): double
    + listarDisciplinasMatriculadas(): void
}

class Professor {
    - disciplinasMinistradas: List<Disciplina>
    + Professor(nome: String, senha: String)
    + listarAlunos(disciplina: Disciplina): void
    + adicionarDisciplina(disciplina: Disciplina): void
    + ministraDisciplina(disciplina: Disciplina): boolean
}

class Secretaria {
    - usuarios: List<Usuario>
    - alunos: List<Aluno>
    - professores: List<Professor>
    - disciplinas: List<Disciplina>
    - cursos: List<Curso>
    + Secretaria(nome: String, senha: String)
    + adicionarAluno(aluno: Aluno): void
    + listarAlunos(): void
    + adicionarProfessor(professor: Professor): void
    + listarProfessores(): void
    + adicionarDisciplina(disciplina: Disciplina): void
    + listarDisciplinas(): void
    + listarUsuarios(): void
    + adicionarCurso(curso: Curso): void
    + listarCursos(): void
    + adicionarDisciplinaAoCurso(disciplina: Disciplina, curso: Curso): void
    + gerarCurriculo(): void
    + verificarDisciplinasAtivas(sistema: SistemaDeMatricula, disciplinas: Disciplina[]): void
}

class Disciplina {
    - nome: String
    - tipo: int
    - alunosMatriculados: List<Aluno>
    + Disciplina(nome: String, tipo: int)
    + matricularAluno(aluno: Aluno): boolean
    + cancelarMatricula(aluno: Aluno): boolean
    + verificarAtividade(): boolean
}

class Curso {
    - nome: String
    - disciplinas: List<Disciplina>
    + Curso(nome: String)
    + adicionarDisciplina(disciplina: Disciplina): void
    + listarDisciplinas(): void
}

class SistemaDeMatricula {
    + verificaPossibilidadeMatricula(aluno: Aluno, disciplina: Disciplina): boolean
    + notificarFinanceiro(aluno: Aluno, disciplina: Disciplina): void
}

class Financeiro {
    + cobrarAluno(aluno: Aluno, disciplina: Disciplina): void
}

Usuario <|-- Aluno
Usuario <|-- Professor
Usuario <|-- Secretaria
Usuario <|-- SistemaDeMatricula
Usuario <|-- Financeiro

Aluno *-- Disciplina
Professor *-- Disciplina
Secretaria *-- Curso
Curso *-- Disciplina
Disciplina *-- Aluno

@enduml
