import React, { useState } from 'react';
import EmpresaList from '../components/EmpresaList';
import EmpresaForm from '../components/EmpresaForm';

const EmpresaPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [currentEmpresa, setCurrentEmpresa] = useState(null);
    const [refreshList, setRefreshList] = useState(false);

    const handleSuccess = () => {
        setShowForm(false);
        setCurrentEmpresa(null);
        setRefreshList(prev => !prev);
    };

    const handleEdit = (empresa) => {
        setCurrentEmpresa(empresa);
        setShowForm(true);
    };

    return (
        <div className="empresa-page-container">
            <h1>Gerenciamento de Empresas</h1>
            
            {showForm ? (
                <EmpresaForm 
                    empresa={currentEmpresa} 
                    onSuccess={handleSuccess} 
                />
            ) : (
                <>
                    <div className="button-container">
                        <button 
                            onClick={() => {
                                setCurrentEmpresa(null);
                                setShowForm(true);
                            }}
                            className="add-button"
                        >
                            {currentEmpresa ? 'Editar Empresa' : 'Adicionar Empresa'}
                        </button>
                    </div>
                    <EmpresaList 
                        onEdit={handleEdit} 
                        refreshTrigger={refreshList} 
                    />
                </>
            )}
        </div>
    );
};

export default EmpresaPage;