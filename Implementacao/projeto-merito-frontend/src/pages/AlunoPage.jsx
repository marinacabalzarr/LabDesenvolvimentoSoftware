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
        axios.get('http://localhost:3000/api/vantagens')
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
                    <h2 className='titulo'>Vantagens Cadastradas</h2>
                    <div className="vantagens-grid">
                        {vantagens.map((v) => (
                            <div key={v.id} className="vantagem-card">
                                <h4>{v.nome}</h4>
                                <p>{v.descricao}</p>
                                <small><b>Custo:</b> {v.custo_moedas} moedas</small>
                            </div>
                        ))}
                    </div>

                </>
            )}
        </div>
    );
};

export default AlunoPage;
