import React, { useState } from 'react';
import { createAluno, updateAluno } from '../services/alunoService';

const AlunoForm = ({ aluno, onSuccess }) => {
    const [formData, setFormData] = useState({
        nome: aluno?.nome || '',
        email: aluno?.email || '',
        senha: aluno?.senha || '',
        cpf: aluno?.cpf || '',
        rg: aluno?.rg || '',
        endereco: aluno?.endereco || '',
        curso: aluno?.curso || '',
        instituicao: aluno?.instituicao || '',
        moeda: aluno?.moeda || 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (aluno?.id) {
                await updateAluno(aluno.id, formData);
            } else {
                await createAluno(formData);
            }
            onSuccess();
        } catch (error) {
            console.error('Erro ao salvar aluno:', error);
        }
    };

    return (
        <form className="main-content" onSubmit={handleSubmit}>
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
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} minLength="11" required />
            </div>
            <div>
                <label>RG:</label>
                <input type="text" name="rg" value={formData.rg} onChange={handleChange} minLength="8" required />
            </div>
            <div>
                <label>Endereço:</label>
                <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
            </div>
            <div>
                <label>Curso:</label>
                <input type="text" name="curso" value={formData.curso} onChange={handleChange} required />
            </div>
            <div>
                <label>Instituição:</label>
                <input type="text" name="instituicao" value={formData.instituicao} onChange={handleChange} required />
            </div>
            <button className="secondary-btn" type="submit">Salvar</button>
        </form>
    );
};

export default AlunoForm;