import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

export default function SidebarMobile({ scroll, color }) {

    useEffect(() => {
        if (scroll) {
            document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            color ? document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)' : document.getElementById('navbar').style.backgroundColor = "transparent";
        }
    }, [scroll])

    return (

        <nav id="navbar" className="zIndex navbar navbar-expand-lg bg-black position-fixed w-100">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand navbar-brand mx-auto" href="/"><img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" /></a>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <Link to="/catalogo"><li id="catalogoLink" className="text-red fw-bold list-unstyled">Catálogo</li></Link>
                        <li className="nav-item">
                        </li>' '
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://api.whatsapp.com/send?phone=55619968513757&text=Olá, gostaria de saber mais sobre o Vinum!">Whatsapp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y=">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};