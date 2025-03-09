import java.util.ArrayList;
import java.util.List;

public class Disciplina {
    private String nome;
    private int tipo; // 1 = Obrigatória, 2 = Optativa
    private List<Aluno> alunosMatriculados;

    public Disciplina(String nome, int tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.alunosMatriculados = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public int getTipo() {
        return tipo;
    }

    public int getNumeroAlunos() {
        return alunosMatriculados.size();
    }

    public List<Aluno> getAlunosMatriculados() {
        return alunosMatriculados;
    }

    public boolean matricularAluno(Aluno aluno) {
        if (alunosMatriculados.size() >= 60) {
            System.out.println("Disciplina " + nome + " já atingiu o número máximo de alunos.");
            return false;
        }
        if (alunosMatriculados.contains(aluno)) {
            System.out.println("Aluno já está matriculado em " + nome);
            return false;
        }
        alunosMatriculados.add(aluno);
        System.out.println("Aluno " + aluno.getNome() + " matriculado em " + nome);
        return true;
    }

    public boolean cancelarMatricula(Aluno aluno) {
        if (alunosMatriculados.contains(aluno)) {
            alunosMatriculados.remove(aluno);
            System.out.println("Aluno " + aluno.getNome() + " foi removido da disciplina " + nome);
            return true;
        } else {
            System.out.println("Aluno não está matriculado em " + nome);
            return false;
        }
    }

    public boolean verificaAtividade() {
        return alunosMatriculados.size() >= 3;
    }
    
}
