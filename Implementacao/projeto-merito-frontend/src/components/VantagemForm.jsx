import React, { useState } from 'react';
import axios from 'axios';

const VantagemForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    custoMoedas: '',
    imagem: '',
    empresaId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/api/vantagens', {
        nome: formData.nome,
        descricao: formData.descricao,
        custoMoedas: parseInt(formData.custoMoedas),
        imagem: formData.imagem,
        empresaId: parseInt(formData.empresaId)
      });
      alert('Vantagem cadastrada com sucesso!');
      onClose(); // fecha o form
    } catch (error) {
      console.error('Erro ao cadastrar vantagem:', error);
      alert('Erro ao cadastrar vantagem. Verifique o console.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>Cadastrar Vantagem</h3>

      <label>Nome:</label>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

      <label>Descrição:</label>
      <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />

      <label>Custo em Moedas:</label>
      <input type="number" name="custoMoedas" value={formData.custoMoedas} onChange={handleChange} required />

      <label>URL da Imagem:</label>
      <input type="text" name="imagem" value={formData.imagem} onChange={handleChange} />

      <label>ID da Empresa:</label>
      <input type="number" name="empresaId" value={formData.empresaId} onChange={handleChange} required />

      <div style={{ marginTop: '10px' }}>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default VantagemForm;