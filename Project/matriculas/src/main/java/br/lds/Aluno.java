package br.lds;

import java.util.ArrayList;
import java.util.List;

public class Aluno extends Usuario {
    private int id;
    private static int proximoId = 1;
    private List<Disciplina> disciplinasMatriculadas;

    public Aluno(String nome, String senha) {
        super(nome, senha);
        this.id = proximoId++;
        this.disciplinasMatriculadas = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public List<Disciplina> getDisciplinasMatriculadas() {
        return disciplinasMatriculadas;
    }

    public double calcularValorTotal() {
        double valorPorDisciplina = 300.0; // Valor fixo por disciplina
        double valorTotal = disciplinasMatriculadas.size() * valorPorDisciplina;
        return valorTotal;
    }    

    private int contarDisciplinasPorTipo(int tipo) {
        int contador = 0;
        for (Disciplina disciplina : disciplinasMatriculadas) {
            if (disciplina.getTipo() == tipo) {
                contador++;
            }
        }
        return contador;
    }    

    public boolean requisitarMatricula(Disciplina disciplina) {
        int tipo = disciplina.getTipo();
    
        if (tipo == 1 && contarDisciplinasPorTipo(1) >= 4) {
            System.out.println("Você já está matriculado no limite de 4 disciplinas obrigatórias.");
            return false;
        }
    
        if (tipo == 2 && contarDisciplinasPorTipo(2) >= 2) {
            System.out.println("Você já está matriculado no limite de 2 disciplinas optativas.");
            return false;
        }
    
        if (disciplina.matricularAluno(this)) {
            disciplinasMatriculadas.add(disciplina);
            System.out.println("Matricula em " + disciplina.getNome() + " realizada com sucesso.");
            return true;
        } else {
            System.out.println("Não foi possível realizar a matrícula em " + disciplina.getNome());
            return false;
        }
    }
    

    public boolean cancelarMatricula(Disciplina disciplina) {
        if (disciplinasMatriculadas.contains(disciplina)) {
            if (disciplina.cancelarMatricula(this)) {
                disciplinasMatriculadas.remove(disciplina);
                System.out.println("Matrícula cancelada em " + disciplina.getNome());
                return true;
            } else {
                System.out.println("Erro ao cancelar matrícula em " + disciplina.getNome());
                return false;
            }
        } else {
            System.out.println("Você não está matriculado na disciplina " + disciplina.getNome());
            return false;
        }
    }

    public void listarDisciplinasMatriculadas() {
        if (disciplinasMatriculadas.isEmpty()) {
            System.out.println("Você não está matriculado em nenhuma disciplina.");
            return;
        }

        System.out.println("=== Disciplinas Matriculadas ===");
        for (Disciplina disciplina : disciplinasMatriculadas) {
            String tipo = (disciplina.getTipo() == 1) ? "Obrigatória" : "Optativa";
            System.out.println(disciplina.getNome() + " - Tipo: " + tipo);
        }
    }
}
