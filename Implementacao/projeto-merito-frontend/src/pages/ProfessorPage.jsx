import React, { useState } from 'react';
import EnvioMoedasForm from '../components/EnvioMoedasForm';
import ExtratoList from '../components/ExtratoList';

const ProfessorPage = () => {
  const [professorId, setProfessorId] = useState('');

  return (
    <div className="painel-professor-container">
      <h1>Painel do Professor - Envio de Moedas</h1>

      <div className="envio-moedas-form">
        <EnvioMoedasForm />
      </div>

      <div className="consulta-extrato">
        <h3>Consultar Extrato do Professor</h3>
        <input
          type="number"
          placeholder="ID do professor"
          value={professorId}
          onChange={e => setProfessorId(e.target.value)}
        />
      </div>

      {professorId && (
        <>
          <div className="extrato-tabela-container">
            <ExtratoList tipo="professor" id={professorId} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfessorPage;