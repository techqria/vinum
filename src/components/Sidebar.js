import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu>
<<<<<<< HEAD
            <ul className="navbar-nav d-flex flex-column gap-4">
                <li className="nav-item ">
                    <Link className='text-white' to="/" >Página inicial <i className="fa-solid fa-house text-white ms-1"></i></Link>
=======
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Página Inicial</Link>
>>>>>>> de72531bfacdbe30c4e765c3e728e6ba05361717
                </li>
                <li className="nav-item">
                    <Link to="/catalogo" style={{ color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Nosso Catálogo</Link>
                </li>
                <li className="nav-item">
                    <a href="https://www.instagram.com/belavida_bonsvinhos/?igshid=YmMyMTA2M2Y%3D" style={{ color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Instagram<i className="ms-3 fa-brands fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                    <a href="https://www.tiktok.com/@belavida_bonsvinhos?_t=8WanZQTk9Mk&_r=1" style={{ color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Tik Tok<i className="ms-3 fa-brands fa-tiktok"></i></a>
                </li>
            </ul>
        </Menu>
    );
};