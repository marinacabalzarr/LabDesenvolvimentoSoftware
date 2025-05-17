import React, { useState } from 'react';
import { createEmpresa, updateEmpresa } from '../services/empresaService';

const EmpresaForm = ({ empresa, onSuccess }) => {
    const [formData, setFormData] = useState({
        nome: empresa?.nome || '',
        email: empresa?.email || '',
        senha: empresa?.senha || '',
        cnpj: empresa?.cnpj || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (empresa?.id) {
                await updateEmpresa(empresa.id, formData);
            } else {
                await createEmpresa(formData);
            }
            onSuccess();
        } catch (error) {
            console.error('Erro ao salvar empresa:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
            </div>
            <div>
                <label>CNPJ:</label>
                <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default EmpresaForm;