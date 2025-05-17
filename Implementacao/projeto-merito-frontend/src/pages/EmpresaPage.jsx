import React, { useState } from 'react';
import EmpresaList from '../components/EmpresaList';
import EmpresaForm from '../components/EmpresaForm';

const EmpresaPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [currentEmpresa, setCurrentEmpresa] = useState(null);

    const handleSuccess = () => {
        setShowForm(false);
        setCurrentEmpresa(null);
    };

    return (
        <div>
            <h1>Gerenciamento de Empresas</h1>
            {showForm ? (
                <EmpresaForm 
                    empresa={currentEmpresa} 
                    onSuccess={handleSuccess} 
                />
            ) : (
                <>
                    <button onClick={() => setShowForm(true)}>Adicionar Empresa</button>
                    <EmpresaList />
                </>
            )}
        </div>
    );
};

export default EmpresaPage;