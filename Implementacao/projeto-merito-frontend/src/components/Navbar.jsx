import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/empresas">Empresas</Link></li>
                <li><Link to="/alunos">Alunos</Link></li>
                <li><Link to="/professor">Professores</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;