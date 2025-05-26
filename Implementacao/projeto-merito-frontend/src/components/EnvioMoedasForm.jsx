import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnvioMoedasForm = () => {
    const [professores, setProfessores] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [formData, setFormData] = useState({
        professor_id: '',
        aluno_id: '',
        quantidade: '',
        mensagem: ''
    });

    useEffect(() => {
        axios.get('http://localhost:3000/api/professores').then(res => setProfessores(res.data));
        axios.get('http://localhost:3000/api/alunos').then(res => setAlunos(res.data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.mensagem.trim()) {
            alert("A mensagem é obrigatória.");
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/transacoes', {
                professor_id: parseInt(formData.professor_id),
                aluno_id: parseInt(formData.aluno_id),
                quantidade: parseInt(formData.quantidade),
                mensagem: formData.mensagem
            });
            alert("Moedas enviadas com sucesso!");
            setFormData({ professor_id: '', aluno_id: '', quantidade: '', mensagem: '' });
        } catch (err) {
            console.error(err);
            alert("Erro ao enviar moedas");
        }

        console.log("Dados sendo enviados:", {
            professor_id: parseInt(formData.professor_id),
            aluno_id: parseInt(formData.aluno_id),
            quantidade: parseInt(formData.quantidade),
            mensagem: formData.mensagem
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Professor</label>
            <select name="professor_id" value={formData.professor_id} onChange={handleChange} required>
                <option value="">Selecione</option>
                {professores.map(p => (
                    <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
            </select>

            <label>Aluno</label>
            <select name="aluno_id" value={formData.aluno_id} onChange={handleChange} required>
                <option value="">Selecione</option>
                {alunos.map(a => (
                    <option key={a.id} value={a.id}>{a.nome}</option>
                ))}
            </select>

            <label>Quantidade de moedas</label>
            <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} min="1" required />

            <label>Mensagem</label>
            <textarea name="mensagem" maxLength={100} value={formData.mensagem} onChange={handleChange} required />

            <button type="submit">Enviar Moedas</button>
        </form>
    );
};

export default EnvioMoedasForm;
