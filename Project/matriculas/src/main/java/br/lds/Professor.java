package br.lds;

import java.util.HashSet;
import java.util.Set;

public class Professor extends Usuario {
    private Set<Disciplina> disciplinasMinistradas;

    public Professor(String nome, String senha) {
        super(nome, senha);
        this.disciplinasMinistradas = new HashSet<>();
    }

    public void adicionarDisciplina(Disciplina disciplina) {
        if (disciplinasMinistradas.contains(disciplina)) {
            System.out.println("Este professor já está associado à disciplina: " + disciplina.getNome());
        } else {
            disciplinasMinistradas.add(disciplina);
            System.out.println("Disciplina " + disciplina.getNome() + " associada ao professor " + getNome());
        }
    }

    public void listarAlunos(Disciplina disciplina) {
        if (disciplinasMinistradas.contains(disciplina)) {
            int totalAlunos = disciplina.getNumeroAlunos();
            if (totalAlunos == 0) {
                System.out.println("Nenhum aluno cadastrado nesta disciplina.");
            } else {
                System.out.println("Alunos matriculados em " + disciplina.getNome() + ": " + totalAlunos);
            }
        } else {
            System.out.println("Você não está autorizado a visualizar esta disciplina.");
        }
    }

    public boolean ministraDisciplina(Disciplina disciplina) {
        return disciplinasMinistradas.contains(disciplina);
    }
    
}
