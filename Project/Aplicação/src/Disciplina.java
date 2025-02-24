public class Disciplina {
    private String nome;
    private int numeroAlunos;
    public Disciplina(String nome) {
        this.nome = nome;
        this.numeroAlunos = 0;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public int getNumeroAlunos() {
        return numeroAlunos;
    }
    public void matricularAluno() {
        if (numeroAlunos < 60) {
            numeroAlunos++;
        } else {
            System.out.println("Matrículas encerradas para a disciplina: " + nome);
        }
    }
    public void cancelarMatricula() {
        if (numeroAlunos > 0) {
            numeroAlunos--;
        }
    }
    public boolean isObrigatoria(){
        return true;
    }
    public boolean verificaAtividade(){
        return numeroAlunos >= 3;
    }
}
