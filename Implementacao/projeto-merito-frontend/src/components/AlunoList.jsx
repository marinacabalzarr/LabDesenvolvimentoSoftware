import React, { useState, useEffect } from 'react';
import { getAlunos, deleteAluno } from '../services/alunoService';

const AlunoList = () => {
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
        <div>
            <h2>Lista de Alunos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
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
                            <td>
                                <button class= "delete-btn" onClick={() => handleDelete(aluno.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlunoList;