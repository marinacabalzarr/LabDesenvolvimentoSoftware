import java.util.ArrayList;
import java.util.List;

public class Curso {
    private String nome;
    private int numeroDeCreditos;
    private List<Disciplina> disciplinas;

    public Curso(String nome, int numeroDeCreditos) {
        this.nome = nome;
        this.numeroDeCreditos = numeroDeCreditos;
        this.disciplinas = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public int getNumeroDeCreditos() {
        return numeroDeCreditos;
    }

    public List<Disciplina> getDisciplinas() {
        return disciplinas;
    }

    public void adicionarDisciplina(Disciplina disciplina) {
        if (!disciplinas.contains(disciplina)) {
            disciplinas.add(disciplina);
            System.out.println("Disciplina " + disciplina.getNome() + " adicionada ao curso " + nome);
        } else {
            System.out.println("Essa disciplina já está vinculada ao curso.");
        }
    }

    public void listarDisciplinas() {
        if (disciplinas.isEmpty()) {
            System.out.println("Nenhuma disciplina cadastrada para o curso " + nome);
        } else {
            System.out.println("=== Disciplinas do curso " + nome + " ===");
            for (Disciplina disciplina : disciplinas) {
                String tipo = (disciplina.getTipo() == 1) ? "Obrigatória" : "Optativa";
                System.out.println(disciplina.getNome() + " - Tipo: " + tipo);
            }
        }
    }
}
