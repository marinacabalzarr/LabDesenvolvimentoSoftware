
import java.time.LocalDate;

public class SistemaDeMatricula {

    private LocalDate inicioPeriodo;
    private LocalDate fimPeriodo;

    public SistemaDeMatricula(LocalDate inicioPeriodo, LocalDate fimPeriodo) {
        this.inicioPeriodo = inicioPeriodo;
        this.fimPeriodo = fimPeriodo;
    }

    public boolean estaNoPeriodoDeMatricula() {
        LocalDate hoje = LocalDate.now();
        return !hoje.isBefore(inicioPeriodo) && !hoje.isAfter(fimPeriodo);
    }

    public void verificaPossibilidadeMatricula(Aluno aluno, Disciplina disciplina, boolean obrigatoria) {
        if (estaNoPeriodoDeMatricula()) {
            aluno.requisitarMatricula(disciplina);
            notificarFinanceiro(aluno, disciplina);
        } else {
            System.out.println("Fora do período de matrícula.");
        }
    }

    public void notificarFinanceiro(Aluno aluno, Disciplina disciplina) {
        Financeiro financeiro = new Financeiro();
        financeiro.cobrarAluno(aluno, disciplina);
    }

    public void verificarDisciplinasAtivas(Disciplina[] disciplinas) {
        for (Disciplina disciplina : disciplinas) {
            if (disciplina.verificaAtividade()) {
                System.out.println("Disciplina ativa: " + disciplina.getNome());
            } else {
                System.out.println("Disciplina cancelada: " + disciplina.getNome());
            }
        }
    }
}
