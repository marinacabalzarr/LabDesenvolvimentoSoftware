import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VantagemListAluno = ({ alunoId }) => {
  const [vantagens, setVantagens] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetchVantagens();
  }, []);

  const fetchVantagens = async () => {
    try {
      const response = await axios.get('http://localhost:3001/vantagens');
      setVantagens(response.data);
    } catch (error) {
      console.error('Erro ao buscar vantagens:', error);
    } finally {
      setCarregando(false);
    }
  };

  const handleComprar = async (vantagemId) => {
    try {
      await axios.post('http://localhost:3001/compras', {
        aluno_id: alunoId,
        vantagem_id: vantagemId,
      });
      setMensagem('Compra realizada com sucesso!');
    } catch (error) {
      setMensagem(error.response?.data?.error || 'Erro ao realizar compra');
    }
  };

  if (carregando) return <p>Carregando vantagens...</p>;

  return (
    <div>
      <h2>Vantagens Disponíveis</h2>
      {mensagem && <p>{mensagem}</p>}
      <ul>
        {vantagens.map((v) => (
          <li key={v.id} style={{ marginBottom: '1em' }}>
            <strong>{v.nome}</strong> - {v.descricao} ({v.custo_moedas} moedas)
            <button onClick={() => handleComprar(v.id)} style={{ marginLeft: '1em' }}>
              Comprar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VantagemListAluno;