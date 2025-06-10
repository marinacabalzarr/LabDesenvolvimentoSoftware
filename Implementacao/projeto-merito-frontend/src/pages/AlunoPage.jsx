import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlunoList from '../components/AlunoList';
import AlunoForm from '../components/AlunoForm';
import ExtratoList from '../components/ExtratoList';

const AlunoPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentAluno, setCurrentAluno] = useState(null);
  const [refreshList, setRefreshList] = useState(false);
  const [vantagens, setVantagens] = useState([]);
  const [alunoId, setAlunoId] = useState('');
  const [minhasVantagens, setMinhasVantagens] = useState([]);
  const [showMinhasVantagens, setShowMinhasVantagens] = useState(false);
  const [moedas, setMoedas] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/vantagens')
      .then(res => setVantagens(res.data))
      .catch(err => console.error("Erro ao carregar vantagens:", err));
  }, [refreshList]);

  const handleSuccess = () => {
    setShowForm(false);
    setCurrentAluno(null);
    setRefreshList(prev => !prev);
  };

  const handleEdit = (aluno) => {
    setCurrentAluno(aluno);
    setShowForm(true);
  };

  const handleResgatar = (vantagemId, custo) => {
    if (!alunoId) {
      alert("Informe o ID do aluno para resgatar uma vantagem.");
      return;
    }

    if (moedas < custo) {
      alert("Moedas insuficientes.");
      return;
    }

    axios.post('http://localhost:3001/compras', {
      aluno_id: parseInt(alunoId),
      vantagem_id: parseInt(vantagemId)
    }).then(() => {
      alert("Vantagem comprada com sucesso!");
      setRefreshList(prev => !prev);
      buscarMinhasVantagens(alunoId);
      buscarSaldoAluno(alunoId);
    }).catch(err => {
      console.error("Erro ao comprar:", err);
      alert(err.response?.data?.error || "Erro ao comprar vantagem.");
    });
  };

  const buscarMinhasVantagens = (id) => {
    axios.get(`http://localhost:3001/compras/${id}`)
      .then(res => {
        setMinhasVantagens(res.data);
        setShowMinhasVantagens(true);
      }).catch(err => {
        console.error("Erro ao buscar compras:", err);
      });
  };

  const buscarSaldoAluno = (id) => {
    axios.get(`http://localhost:3001/alunos/${id}`)
      .then(res => setMoedas(res.data.moeda || 0))
      .catch(err => console.error("Erro ao buscar saldo:", err));
  };

  useEffect(() => {
    if (alunoId) {
      buscarSaldoAluno(alunoId);
      buscarMinhasVantagens(alunoId);
    }
  }, [alunoId, refreshList]);

  return (
    <div className="aluno-page-container">
      <h1>Gerenciamento de Alunos</h1>

      {showForm ? (
        <AlunoForm aluno={currentAluno} onSuccess={handleSuccess} />
      ) : (
        <>
          <div className="button-container">
            <button
              className="add-button"
              onClick={() => {
                setCurrentAluno(null);
                setShowForm(true);
              }}
            >
              {currentAluno ? 'Editar Aluno' : 'Adicionar Aluno'}
            </button>
          </div>

          <AlunoList
            onEdit={handleEdit}
            refreshTrigger={refreshList}
            onMostrarVantagens={id => {
              setAlunoId(id);
              buscarMinhasVantagens(id);
              buscarSaldoAluno(id);
            }}
          />

          {showMinhasVantagens && (
            <div className="vantagens-lista">
              <h3>Vantagens Compradas</h3>
              <ul>
                {minhasVantagens.map((v, i) => (
                  <li key={i}>{v.nome} — {v.descricao}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="container">
            <h2 className="titulo2">Vantagens Cadastradas</h2>
            <div className="vantagens-grid">
              {vantagens.map((v) => (
                <div key={v.id} className="vantagem-card">
                  <img src={v.imagem} alt={v.nome} />
                  <h4>{v.nome}</h4>
                  <p>{v.descricao}</p>
                  <small style={{ color: 'green', fontWeight: 'bold' }}>{v.custo_moedas} moedas</small><br />
                  <button className="resgatar-btn" onClick={() => handleResgatar(v.id, v.custo_moedas)}>Comprar</button>
                </div>
              ))}
            </div>
          </div>

          <div className="consulta-extrato-2">
            <h3 className="titulo3">Consultar Extrato do Aluno</h3>
            <input
              type="number"
              placeholder="ID do aluno"
              value={alunoId}
              onChange={e => setAlunoId(e.target.value)}
            />
            <p>Moedas disponíveis: <strong>{moedas}</strong></p>
          </div>

          {alunoId && (
            <div className="extrato-tabela-container-2">
              <ExtratoList tipo="aluno" id={alunoId} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AlunoPage;