import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

export default function SidebarMobile({ scroll, color }) {

    useEffect(() => {
        if (scroll) {
            document.getElementById('sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            color ? document.getElementById('sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)' : document.getElementById('sidebar').style.backgroundColor = "transparent";
        }
    }, [scroll])

    return (

        <nav id="sidebar" className="zIndex navbar navbar-expand-lg position-fixed w-100 m-0 p-0">
            <div className="container-fluid d-flex justify-content-around pb-3 gap-3">
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand navbar-brand p-0 w-50 d-flex justify-content-center m-0" href="/"><img id="img-navbar" className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" /></a>

                <div className="collapse navbar-collapse mt-md-0 mt-3" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center gap-3">
                        <li className="nav-item" >
                            <Link className="nav-link text-red scale" to="/catalogo">
                                Catálogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://api.whatsapp.com/send?phone=5561996851375&text=Olá, gostaria de saber mais sobre o Vinum!">Whatsapp</a>
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