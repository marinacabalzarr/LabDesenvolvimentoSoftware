package br.lds;

import java.util.ArrayList;
import java.util.List;

public class Secretaria extends Usuario {
    private List<Usuario> usuarios;
    private List<Aluno> alunos;
    private List<Professor> professores;
    private List<Disciplina> disciplinas;
    private List<Curso> cursos;

    public Secretaria(String nome, String senha) {
        super(nome, senha);
        this.usuarios = new ArrayList<>();
        this.alunos = new ArrayList<>();
        this.professores = new ArrayList<>();
        this.disciplinas = new ArrayList<>();
        this.cursos = new ArrayList<>();
        this.usuarios.add(this);
    }

    public List<Disciplina> getDisciplinas() {
        return disciplinas;
    }

    public List<Curso> getCursos() {
        return cursos;
    }

    public List<Professor> getProfessores() {
        return professores;
    }

    public List<Aluno> getAlunos() {
        return alunos;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public Aluno getAlunoPorNome(String nome) {
        for (Aluno aluno : alunos) {
            if (aluno.getNome().equalsIgnoreCase(nome)) {
                return aluno;
            }
        }
        return null;
    }

    public void adicionarCurso(Curso curso) {
        if (!cursos.contains(curso)) {
            cursos.add(curso);
            System.out.println("Curso " + curso.getNome() + " adicionado com sucesso!");
        } else {
            System.out.println("Esse curso já está cadastrado.");
        }
    }

    public void listarCursos() {
        if (cursos.isEmpty()) {
            System.out.println("Nenhum curso cadastrado.");
        } else {
            System.out.println("\n=== Cursos Cadastrados ===");
            for (Curso curso : cursos) {
                System.out.println(curso.getNome() + " - Créditos: " + curso.getNumeroDeCreditos());
            }
        }
    }

    public void adicionarDisciplinaAoCurso(Disciplina disciplina, Curso curso) {
        curso.adicionarDisciplina(disciplina);
        adicionarDisciplina(disciplina);
    }

    public void adicionarAluno(Aluno aluno) {
        if (!alunos.contains(aluno)) {
            alunos.add(aluno);
            usuarios.add(aluno);
            System.out.println("Aluno " + aluno.getNome() + " adicionado com sucesso!");
        } else {
            System.out.println("Aluno já cadastrado.");
        }
    }

    public void adicionarProfessor(Professor professor) {
        if (!professores.contains(professor)) {
            professores.add(professor);
            usuarios.add(professor);
            System.out.println("Professor " + professor.getNome() + " adicionado com sucesso!");
        } else {
            System.out.println("Professor já cadastrado.");
        }
    }

    public void adicionarDisciplina(Disciplina disciplina) {
        if (!disciplinas.contains(disciplina)) {
            disciplinas.add(disciplina);
            System.out.println("Disciplina " + disciplina.getNome() + " adicionada com sucesso!");
        } else {
            System.out.println("Disciplina já cadastrada.");
        }
    }

    public void listarAlunos() {
        if (alunos.isEmpty()) {
            System.out.println("Nenhum aluno cadastrado.");
        } else {
            System.out.println("=== Alunos Cadastrados ===");
            for (Aluno aluno : alunos) {
                System.out.println("ID: " + aluno.getId() + " - Nome: " + aluno.getNome());
            }
        }
    }

    public void listarProfessores() {
        if (professores.isEmpty()) {
            System.out.println("Nenhum professor cadastrado.");
        } else {
            System.out.println("=== Professores Cadastrados ===");
            for (Professor professor : professores) {
                System.out.println("Nome: " + professor.getNome());
            }
        }
    }

    public void listarDisciplinas() {
        if (disciplinas.isEmpty()) {
            System.out.println("Nenhuma disciplina cadastrada.");
        } else {
            System.out.println("=== Disciplinas Cadastradas ===");
            for (Disciplina disciplina : disciplinas) {
                String tipo = (disciplina.getTipo() == 1) ? "Obrigatória" : "Optativa";
                System.out.println("Nome: " + disciplina.getNome() + " - Tipo: " + tipo);
            }
        }
    }

    public void listarUsuarios() {
        if (usuarios.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
        } else {
            System.out.println("=== Usuários Cadastrados ===");
            for (Usuario usuario : usuarios) {
                String tipo = usuario instanceof Aluno ? "Aluno" :
                              usuario instanceof Professor ? "Professor" :
                              usuario instanceof Secretaria ? "Secretaria" : "Outro";
                System.out.println("Nome: " + usuario.getNome() + " - Tipo: " + tipo);
            }
        }
    }

    public void gerarCurriculo() {
        if (disciplinas.isEmpty()) {
            System.out.println("Nenhuma disciplina cadastrada para gerar o currículo.");
            return;
        }

        System.out.println("\n=== CURRÍCULO DO SEMESTRE ===");
        for (Disciplina disciplina : disciplinas) {
            String tipo = (disciplina.getTipo() == 1) ? "Obrigatória" : "Optativa";
            System.out.println("\nDisciplina: " + disciplina.getNome());
            System.out.println("Tipo: " + tipo);
            System.out.println("Alunos inscritos: " + disciplina.getNumeroAlunos());

            boolean professorEncontrado = false;
            for (Professor professor : professores) {
                if (professor.ministraDisciplina(disciplina)) {
                    System.out.println("Professor responsável: " + professor.getNome());
                    professorEncontrado = true;
                }
            }
            if (!professorEncontrado) {
                System.out.println("Professor responsável: Nenhum");
            }
        }
        System.out.println("====================================");
    }

    public void abrirPeriodoMatricula(SistemaDeMatricula sistema, java.time.LocalDate inicio, java.time.LocalDate fim) {
        sistema = new SistemaDeMatricula(inicio, fim);
        System.out.println("Período de matrícula aberto de " + inicio + " até " + fim);
    }

    public void verificarDisciplinasAtivas(SistemaDeMatricula sistema, Disciplina[] disciplinas) {
        sistema.verificarDisciplinasAtivas(disciplinas);
    }
}
