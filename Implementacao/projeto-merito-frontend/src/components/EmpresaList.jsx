import React, { useState, useEffect } from 'react';
import { getEmpresas, deleteEmpresa } from '../services/empresaService';

const EmpresaList = () => {
    const [empresas, setEmpresas] = useState([]);

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
        <div>
            <h2>Lista de Empresas</h2>
            <table>
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
                            <td>
                                <button onClick={() => handleDelete(empresa.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmpresaList;