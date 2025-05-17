import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AlunoPage from './pages/AlunoPage';
import EmpresaPage from './pages/EmpresaPage';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/alunos" element={<AlunoPage />} />
                <Route path="/empresas" element={<EmpresaPage />} />
            </Routes>
        </Router>
    );
}

export default App;