import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlunoList from '../components/AlunoList';
import AlunoForm from '../components/AlunoForm';

const AlunoPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [currentAluno, setCurrentAluno] = useState(null);
    const [refreshList, setRefreshList] = useState(false);
    const [vantagens, setVantagens] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/vantagens')
            .then(res => setVantagens(res.data))
            .catch(err => console.error("Erro ao carregar vantagens:", err));
    }, [refreshList]);

    const handleSuccess = () => {
        setShowForm(false);
        setCurrentAluno(null);
        setRefreshList(prev => !prev);
    };

    const handleEdit = (aluno) => {
        setCurrentAluno(aluno);
        setShowForm(true);
    };

    return (
        <div className="aluno-page-container">
            <h1>Gerenciamento de Alunos</h1>
            {showForm ? (
                <AlunoForm 
                    aluno={currentAluno} 
                    onSuccess={handleSuccess} 
                />
            ) : (
                <>
                    <div className="button-container">
                        <button 
                            className="add-button"
                            onClick={() => {
                                setCurrentAluno(null);
                                setShowForm(true);
                            }}
                        >
                            {currentAluno ? 'Editar Aluno' : 'Adicionar Aluno'}
                        </button>
                    </div>
                    <AlunoList 
                        onEdit={handleEdit} 
                        refreshTrigger={refreshList} 
                    />

                    <h2>Vantagens Cadastradas</h2>
                    <ul>
                        {vantagens.map((v) => (
                            <li key={v.id}>{v.descricao}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default AlunoPage;
