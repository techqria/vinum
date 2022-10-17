import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/catalogo" style={{ color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Catálogo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Redes Sociais</Link>
                </li>
            </ul>
        </Menu>
    );
};