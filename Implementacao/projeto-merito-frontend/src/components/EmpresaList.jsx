import React, { useState, useEffect } from 'react';
import { getEmpresas, deleteEmpresa } from '../services/empresaService';
import { useNavigate } from 'react-router-dom';

const EmpresaList = ({ onEdit }) => {
    const [empresas, setEmpresas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmpresas();
    }, []);

    const fetchEmpresas = async () => {
        try {
            const data = await getEmpresas();
            setEmpresas(data);
        } catch (error) {
            console.error('Erro ao carregar empresas:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteEmpresa(id);
            fetchEmpresas();
        } catch (error) {
            console.error('Erro ao deletar empresa:', error);
        }
    };

    return (
        <div className="main-content">
            <div className="empresa-list-container">
                <h2>Lista de Empresas</h2>
                <table className="empresa-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>CNPJ</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empresas.map(empresa => (
                            <tr key={empresa.id}>
                                <td>{empresa.id}</td>
                                <td>{empresa.nome}</td>
                                <td>{empresa.email}</td>
                                <td>{empresa.cnpj}</td>
                                <td className="actions-cell">
                                    <button
                                        onClick={() => onEdit(empresa)}  // Usa a prop onEdit
                                        className="edit-btn"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(empresa.id)}
                                        className="delete-btn"
                                    >
                                        Deletar
                                    </button>
                                    <button
                                        onClick={() => navigate(`/empresas/${empresa.id}/vantagens`)}
                                        className="vantagem-btn"
                                    >
                                        Vantagens
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

export default EmpresaList;