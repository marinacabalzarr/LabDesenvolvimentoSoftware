import java.time.LocalDate;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        SistemaDeMatricula sistema = new SistemaDeMatricula(LocalDate.of(2025, 3, 1), LocalDate.of(2025, 3, 15));
        Secretaria secretaria = new Secretaria("Secretaria", "senha123");

        Scanner scanner = new Scanner(System.in);
        int opcao = -1;

        while (opcao != 0) {
            System.out.println("\n=== Menu de Açoes ===");
            System.out.println("1. Adicionar novo aluno");
            System.out.println("2. Adicionar novo professor");
            System.out.println("3. Cadastrar novo curso");
            System.out.println("4. Criar nova disciplina");
            System.out.println("5. Associar disciplina a professor");
            System.out.println("6. Matricular aluno em disciplina");
            System.out.println("7. Cancelar matrícula de aluno");
            System.out.println("8. Listar alunos matriculados em uma disciplina");
            System.out.println("9. Verificar disciplinas ativas");
            System.out.println("10. Listar todos os alunos");
            System.out.println("11. Gerar currículo do semestre");
            System.out.println("12. Listar todos os usuários");
            System.out.println("13. Cobrar aluno");
            System.out.println("0. Sair");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.print("Nome do aluno: ");
                    String nomeAluno = scanner.next();
                    System.out.print("Senha do aluno: ");
                    String senhaAluno = scanner.next();
                    Aluno novoAluno = new Aluno(nomeAluno, senhaAluno);
                    secretaria.adicionarAluno(novoAluno);
                    break;

                case 2:
                    System.out.print("Nome do professor: ");
                    String nomeProfessor = scanner.next();
                        System.out.print("Senha do professor: ");
                        String senhaProfessor = scanner.next();
                        Professor novoProfessor = new Professor(nomeProfessor, senhaProfessor);
                        secretaria.adicionarProfessor(novoProfessor);
                        break;

                        case 3:
                        System.out.print("Nome do curso: ");
                        String nomeCurso = scanner.next();
                        System.out.print("Número de créditos: ");
                        int numeroDeCreditos = scanner.nextInt();
                    
                        Curso novoCurso = new Curso(nomeCurso, numeroDeCreditos);
                        secretaria.adicionarCurso(novoCurso);
                        break;
                    
                    case 4:
                        if (secretaria.getCursos().isEmpty()) {
                            System.out.println("Nenhum curso disponível. Cadastre um curso primeiro.");
                            break;
                        }
                    
                        System.out.print("Nome da disciplina: ");
                        String nomeDisciplina = scanner.next();
                        System.out.print("Tipo da disciplina (1 = Obrigatória, 2 = Optativa): ");
                        int tipoDisciplina = scanner.nextInt();
                    
                        // Mostrar lista de cursos disponíveis para associar a disciplina
                        System.out.println("Escolha o curso para associar a disciplina:");
                        for (int i = 0; i < secretaria.getCursos().size(); i++) {
                            System.out.println((i + 1) + ". " + secretaria.getCursos().get(i).getNome());
                        }
                    
                        int idCurso = scanner.nextInt();
                        Curso curso = secretaria.getCursos().get(idCurso - 1);
                    
                        Disciplina novaDisciplina = new Disciplina(nomeDisciplina, tipoDisciplina);
                        secretaria.adicionarDisciplinaAoCurso(novaDisciplina, curso);
                        break;
                    
                case 5:
                    if (secretaria.getProfessores().isEmpty()) {
                        System.out.println("Nenhum professor cadastrado.");
                        break;
                    }
                    if (secretaria.getDisciplinas().isEmpty()) {
                        System.out.println("Nenhuma disciplina cadastrada.");
                        break;
                    }

                    System.out.println("Escolha o professor para associar (ID): ");
                    for (int i = 0; i < secretaria.getProfessores().size(); i++) {
                        System.out.println((i + 1) + ". " + secretaria.getProfessores().get(i).getNome());
                    }
                    int idProfessor = scanner.nextInt();
                    Professor professor = secretaria.getProfessores().get(idProfessor - 1);

                    System.out.println("Escolha a disciplina para associar (ID): ");
                    for (int i = 0; i < secretaria.getDisciplinas().size(); i++) {
                        System.out.println((i + 1) + ". " + secretaria.getDisciplinas().get(i).getNome());
                    }
                    int idDisciplina = scanner.nextInt();
                    Disciplina disciplina = secretaria.getDisciplinas().get(idDisciplina - 1);

                    professor.adicionarDisciplina(disciplina);
                    break;

                case 6:
                    System.out.print("Nome do aluno: ");
                    nomeAluno = scanner.next();
                    Aluno aluno = secretaria.getAlunoPorNome(nomeAluno);

                    if (aluno != null) {
                        System.out.println("Escolha a disciplina para matrícula (ID):");
                        for (int i = 0; i < secretaria.getDisciplinas().size(); i++) {
                            System.out.println((i + 1) + ". " + secretaria.getDisciplinas().get(i).getNome());
                        }
                        idDisciplina = scanner.nextInt();
                        disciplina = secretaria.getDisciplinas().get(idDisciplina - 1);
                        aluno.requisitarMatricula(disciplina);
                    } else {
                        System.out.println("Aluno nao encontrado.");
                    }
                    break;

                case 7:
                    System.out.print("Nome do aluno: ");
                    nomeAluno = scanner.next();
                    aluno = secretaria.getAlunoPorNome(nomeAluno);

                    if (aluno != null) {
                        System.out.println("Escolha a disciplina para cancelar (ID):");
                        for (int i = 0; i < secretaria.getDisciplinas().size(); i++) {
                            System.out.println((i + 1) + ". " + secretaria.getDisciplinas().get(i).getNome());
                        }
                        idDisciplina = scanner.nextInt();
                        disciplina = secretaria.getDisciplinas().get(idDisciplina - 1);
                        aluno.cancelarMatricula(disciplina);
                    } else {
                        System.out.println("Aluno nao encontrado.");
                    }
                    break;

                case 8:
                System.out.println("Escolha a disciplina para listar alunos (ID):");
                for (int i = 0; i < secretaria.getDisciplinas().size(); i++) {
                    System.out.println((i + 1) + ". " + secretaria.getDisciplinas().get(i).getNome());
                }
                idDisciplina = scanner.nextInt();
                disciplina = secretaria.getDisciplinas().get(idDisciplina - 1);

                if (disciplina.getNumeroAlunos() > 0) {
                    System.out.println("Alunos matriculados em " + disciplina.getNome() + ":");
                    for (Aluno a : disciplina.getAlunosMatriculados()) {
                        System.out.println(" - " + a.getNome());
                    }
                } else {
                    System.out.println("Nenhum aluno matriculado nessa disciplina.");
                }
                break;

                case 9:
                    System.out.println("=== Verificação de Disciplinas Ativas ===");
                    Disciplina[] disciplinasArray = secretaria.getDisciplinas().toArray(new Disciplina[0]);
                    sistema.verificarDisciplinasAtivas(disciplinasArray);
                    break;

                case 10:
                    secretaria.listarAlunos();
                    break;

                case 11:
                    secretaria.gerarCurriculo(); 
                    break;

                case 12:
                    secretaria.listarUsuarios();
                    break;

                case 13:
                    System.out.print("Nome do aluno para cobrança: ");
                    nomeAluno = scanner.next();
                    aluno = secretaria.getAlunoPorNome(nomeAluno);
                
                    if (aluno != null) {
                        double valorTotal = aluno.calcularValorTotal();
                        if (valorTotal > 0) {
                            System.out.println("\n=== DETALHES DA COBRANÇA ===");
                            aluno.listarDisciplinasMatriculadas();
                            System.out.printf("Valor total a ser pago: R$ %.2f\n", valorTotal);
                        } else {
                            System.out.println("O aluno não está matriculado em nenhuma disciplina.");
                        }
                    } else {
                        System.out.println("Aluno nao encontrado.");
                    }
                    break;

                case 0:
                    System.out.println("Saindo...");
                    break;

                default:
                    System.out.println("Opção inválida.");
                    break;
            }
        }

        scanner.close();
    }
}
