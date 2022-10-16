import React from 'react'
import { ShoppingCart } from "./ShoppingCart";
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-ms bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="#" className='mb-4'><ShoppingCart /></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"  style={{color: '#A71830', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif'}}>Descrição</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/"  style={{color: '#A71830', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif'}}>Página Inicial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"  style={{color: '#A71830', textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'sans-serif'}}>Catálogo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}