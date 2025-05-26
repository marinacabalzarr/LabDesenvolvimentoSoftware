import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AlunoPage from './pages/AlunoPage';
import EmpresaPage from './pages/EmpresaPage';
import Navbar from './components/Navbar';
import ProfessorPage from './pages/ProfessorPage';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/alunos" element={<AlunoPage />} />
                <Route path="/empresas" element={<EmpresaPage />} />
                <Route path="/professor" element={<ProfessorPage />} />
            </Routes>
        </Router>
    );
}

export default App;