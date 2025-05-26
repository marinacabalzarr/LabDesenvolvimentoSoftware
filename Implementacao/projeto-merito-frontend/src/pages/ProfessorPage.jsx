import React, { useState } from 'react';
import EnvioMoedasForm from '../components/EnvioMoedasForm';
import ExtratoList from '../components/ExtratoList';

const ProfessorPage = () => {
  const [professorId, setProfessorId] = useState('');

  return (
    <div className="main-content">
      <h1>Painel do Professor</h1>

      <EnvioMoedasForm />

      <div style={{ marginTop: '40px' }}>
        <h3>Consultar Extrato</h3>
        <input
          type="number"
          placeholder="ID do professor"
          value={professorId}
          onChange={e => setProfessorId(e.target.value)}
        />
        {professorId && <ExtratoList tipo="professor" id={professorId} />}
      </div>
    </div>
  );
};

export default ProfessorPage;
