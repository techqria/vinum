import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu>
            <ul className="navbar-nav d-flex flex-column ms-4 gap-5">
                <li className="nav-item scale">
                    <a className='text-white text-uppercase' href="/" >
                        <img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
                    </a>
                </li>
                <li className="nav-item scale">
                    <a className='text-white text-uppercase' href="/catalogo">Nosso Catálogo <i className="fa-light fa-wine-glass-empty"></i></a>
                </li>
                <li className="nav-item scale">
                    <a target="_blank" className='text-white text-uppercase' href='https://api.whatsapp.com/send?text=Olá, Vinum Wine, tenho interesse em seus vinhos!&phone=5561996851375'>Whatsapp<i className="ms-2 fa-brands fa-whatsapp"></i></a>
                </li>
                <li className="nav-item scale">
                    <a target="_blank" className='text-white text-uppercase' href="https://www.instagram.com/belavida_bonsvinhos/?igshid=YmMyMTA2M2Y%3D">Instagram<i className="ms-2 fa-brands fa-instagram"></i></a>
                </li>
                <li className="nav-item scale">
                    <a target="_blank" className='text-white text-uppercase' href="https://www.tiktok.com/@belavida_bonsvinhos?_t=8WanZQTk9Mk&_r=1">Tik Tok<i className="ms-2 fa-brands fa-tiktok"></i></a>
                </li>

            </ul>
        </Menu>
    );
};