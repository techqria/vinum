import React from 'react'
import { Link } from 'react-router-dom';

const wines = [
    {
        name: 'vinho 12 anos',
        category: 'brancho',
        description: 'muito branco',
        id: '89176254312'
    },
    {
        name: 'espumante 12 anos',
        category: 'rosa',
        description: 'muito rosa',
        id: '1273617213'
    }
]

export const Menu = () => {

    return (

        <>

            <section className="container mt-5 mb-5">
                <h1 className="pb-2 text-center position-relative">NOSSO CATÁLOGO</h1>

                <p className="text-center">
                    A Vinum Wine Eventos oferece excelentes rótulos de vinhos, espumantes e destilados para
                    atender todos os tipos de gostos e ocasiões! Mais do que boas opções e preços justos,
                    queremos estar presentes nos momentos mais especiais da sua vida!</p>
                <div className="d-flex justify-content-center gap-5">
                    <img width={120} src="https://vinum-wine.s3.amazonaws.com/bgCatalogo.svg" className="img-fluid" alt="vinum catalogo " />
                    <img width={120} src="https://vinum-wine.s3.amazonaws.com/Catalogo/NossoCatalogo2.png" className="img-fluid" alt="vinum catalogo " />
                </div>

                <div className="d-flex justify-content-center pt-3 bg-transparent">
                    <Link to="/catalogo"><button>VER CATÁLOGO</button></Link>
                </div>
            </section>
        </>

    )
}