import React from 'react'
import { Link } from 'react-router-dom';

export const Menu = () => {

    return (
        <section className="container mt-5 pt-5 mb-5">
            <h1 className="pb-2 text-center position-relative mb-5">NOSSO CATÁLOGO</h1>
            <p className="text-center mb-5">
                A Vinum Wine Eventos oferece excelentes rótulos de vinhos, espumantes e destilados para
                atender todos os tipos de gostos e ocasiões! Mais do que boas opções e preços justos,
                queremos estar presentes nos momentos mais especiais da sua vida!</p>
            <div className="card-group">
                <div className="card bg-dark text-white">
                    <Link to="/catalogo"><img src="https://vinum-wine.s3.amazonaws.com/Catalogo/catalogo.jpg" className="card-img" alt="..." /></Link>
                </div>
                <div className="card bg-dark text-white">
                    <Link to="/catalogo"><img src="https://vinum-wine.s3.amazonaws.com/Catalogo/catalogo2.jpg" className="card-img" alt="..." /></Link>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-5 bg-transparent">
                <Link to="/catalogo"><button className='btn btn-gold ps-5 pe-5 fs-4 mt-5'>VER CATÁLOGO</button></Link>
            </div>
        </section>
    )
}