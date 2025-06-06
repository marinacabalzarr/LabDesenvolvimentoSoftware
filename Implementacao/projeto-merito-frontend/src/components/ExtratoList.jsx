import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExtratoList = ({ tipo, id }) => {
  const [extrato, setExtrato] = useState([]);

  useEffect(() => {
    if (tipo && id) {
      const url = tipo === 'professor'
        ? `http://localhost:3001/transacoes/extrato/professor/${id}`
        : `http://localhost:3001/transacoes/extrato/aluno/${id}`;

      axios.get(url).then(res => setExtrato(res.data));
    }
  }, [tipo, id]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Extrato ({tipo})</h2>
      {extrato.length === 0 ? (
        <p>Nenhuma transação encontrada.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Aluno</th>
              <th>Professor</th>
              <th>Quantidade</th>
              <th>Mensagem</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {extrato.map((t, index) => (
              <tr key={index}>
                <td>{t.id}</td>
                <td>{t.nome_aluno}</td>
                <td>{t.nome_professor}</td>
                <td>{t.quantidade}</td>
                <td>{t.mensagem}</td>
                <td>{new Date(t.data).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExtratoList;