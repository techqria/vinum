import React from 'react'
import { Link } from 'react-router-dom'

export const Promos = () => {
    return (
        <section className="container mt-5 mb-5 text-center">
            <h1 className='pb-2 position-relative'>OFERTAS DA SEMANA</h1>
            <div id="carouselPromos" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" /></Link>
                            <p>Vinho tinto Oops</p>
                            <h3 className='text-decoration-line-through'>De 199,00</h3>
                            <p>Por 89,99</p>
                            <button>APROVEITAR</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img width={150} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                            <p>Vinho tinto Oops</p>
                            <h3 className='text-decoration-line-through'>De 199,00</h3>
                            <p>Por 89,99</p>
                            <button>APROVEITAR</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromos" data-bs-slide="prev">
                    <i className="text-red fw-bold fs-2 fa-solid fa-arrow-left"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPromos" data-bs-slide="next">
                    <i className="fa-solid fa-arrow-right text-red fw-bold fs-2"></i>
                </button>
            </div>
        </section>
    )
}