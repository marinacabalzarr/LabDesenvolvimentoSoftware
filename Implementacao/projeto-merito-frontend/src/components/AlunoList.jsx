import React, { useState, useEffect } from 'react';
import { getAlunos, deleteAluno } from '../services/alunoService';

const AlunoList = ({ onEdit }) => {  // Recebe a função onEdit como prop
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        fetchAlunos();
    }, []);

    const fetchAlunos = async () => {
        try {
            const data = await getAlunos();
            setAlunos(data);
        } catch (error) {
            console.error('Erro ao carregar alunos:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteAluno(id);
            fetchAlunos();
        } catch (error) {
            console.error('Erro ao deletar aluno:', error);
        }
    };

    return (
        <div className="main-content">
        <div>
            <h2>Lista de Alunos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Curso</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.cpf}</td>
                            <td>{aluno.curso}</td>
                            <td className="actions-cell">
                                <button 
                                    onClick={() => onEdit(aluno)}  // Chama a função passada pelo componente pai
                                    className="edit-btn"
                                >
                                    Editar
                                </button>
                                <button 
                                    onClick={() => handleDelete(aluno.id)} 
                                    className="delete-btn"
                                >
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AlunoList;