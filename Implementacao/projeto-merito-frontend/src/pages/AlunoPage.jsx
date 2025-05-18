import React, { useState } from 'react';
import AlunoList from '../components/AlunoList';
import AlunoForm from '../components/AlunoForm';

const AlunoPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [currentAluno, setCurrentAluno] = useState(null);
    const [refreshList, setRefreshList] = useState(false);

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
                </>
            )}
        </div>
    );
};

export default AlunoPage;