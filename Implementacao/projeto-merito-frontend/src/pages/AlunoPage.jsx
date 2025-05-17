import React, { useState } from 'react';
import AlunoList from '../components/AlunoList';
import AlunoForm from '../components/AlunoForm';

const AlunoPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [currentAluno, setCurrentAluno] = useState(null);

    const handleSuccess = () => {
        setShowForm(false);
        setCurrentAluno(null);
    };

    return (
        <div>
            <h1>Gerenciamento de Alunos</h1>
            {showForm ? (
                <AlunoForm 
                    aluno={currentAluno} 
                    onSuccess={handleSuccess} 
                />
            ) : (
                <>
                    <button onClick={() => setShowForm(true)}>Adicionar Aluno</button>
                    <AlunoList />
                </>
            )}
        </div>
    );
};

export default AlunoPage;