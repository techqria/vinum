import React, { useState, useEffect } from "react";
import { WineDto } from "../../dto/wine.dto";
import { Link } from 'react-router-dom';
import api from "../../api/api";

export default function SidebarMobile({ scroll, color }) {

    const [wines, setWines] = useState([]);
    const [wineFound, setWineFound] = useState({ name: '', id: '' });

    useEffect(() => {
        api.get("/wine/listAll")
            .then((response) => {
                response.data.forEach(wine => {
                    setWines(wines => [...wines, wine])
                })
            })
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);

    useEffect(() => {
        if (scroll) {
            document.getElementById('sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            color ? document.getElementById('sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)' : document.getElementById('sidebar').style.backgroundColor = "transparent";
        }
    }, [scroll])

    const searchWine = (e) => {
        const value = e.target.value.toLowerCase();

        wines.forEach(wine => {

            let name = wine.name.toLowerCase();

            if (name.includes(value)) {
                setWineFound({ name: wine.name, id: wine._id });
            }

        });

        if (value == '') setWineFound({ name: '', id: '' });
    }

    return (

        <nav id="sidebar" className="zIndex navbar navbar-expand-lg position-fixed w-100 m-0 p-0">
            <div className="container-fluid d-flex justify-content-around pb-3 pt-1 gap-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img width={30} src="https://vinum-wine.s3.amazonaws.com/Menu+Rounded.png" />
                </button>

                <a className="navbar-brand navbar-brand w-50 d-flex justify-content-center text-white m-0" href="/"><img id="img-navbar" className="img-fluid" style={{maxHeight: '90px'}} src="https://vinum-wine.s3.amazonaws.com/logo-Vinum+Wine.svg" alt="logo.svg" />
                <h2 className="ms-3" style={{fontSize: '36px', marginTop: "1.5rem"}}>Vinum <br className="d-md-none"/>Eventos</h2>
                </a>

                <div className="collapse navbar-collapse mt-md-0 mt-3 pt-2" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center gap-3">
                        <li className="nav-item" >
                            <Link className="nav-link text-red scale fw-bold" to="/catalogo">
                                Cat??logo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" target="_blank" href="https://api.whatsapp.com/send?phone=5561996851375&text=Ol??, gostaria de saber mais sobre o Vinum!">Whatsapp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" target="_blank" href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y=">Instagram</a>
                        </li>
                        <li className="nav-item">
                            <input placeholder="Buscar produto" className="form-control bg-transparent text-white" type="search" name="search" onChange={searchWine} />
                            <a className={wineFound.name.length > 0 ? 'd-block text-white mt-2 bg-opacity ps-2 pe-2 pt-1 pb-1' : 'd-none'} href={`/inside/${wineFound?.id}`}>{wineFound?.name}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};