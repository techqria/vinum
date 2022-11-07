import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import api from '../../api/api'
import { WineDto } from '../../dto/wine.dto'


export const Promos = () => {
    const [wines, setWines] = useState<WineDto[]>([])

    useEffect(() => {
        api.get("/wine/listAll")
            .then((response) => {
                response.data.forEach((wine: any) => {
                    if (Number(wine.sale) > 0) setWines(wines => [...wines, wine])
                })
            })
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);

    return (
        <section className="container mt-5 pt-5 mb-5 text-center">
            <h1 className='pb-2 position-relative'>OFERTAS DA SEMANA</h1>
            <div id="carouselPromos" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-around mt-5">
                            {
                                wines[0] &&
                                <div key={0} className="d-flex flex-column justify-content-center">
                                    <Link to="/inside"><img width={150} src={wines[0].image} alt="garrafaVinho.svg" /></Link>
                                    <p>{wines[0].name}</p>
                                    <h4 className='text-decoration-line-through'>De R$ {wines[0].price}</h4>
                                    <p>Por R$ {Number(wines[0].price) - Number(wines[0].sale)}</p>
                                    <button className="btn btn-gold">APROVEITAR</button>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        wines.map((wine, index) => {
                            if (index > 0) {
                                return (
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-around mt-5">
                                            <div key={index} className="d-flex flex-column justify-content-center">
                                                <Link to="/inside"><img width={150} src={wine.image} alt="garrafaVinho.svg" /></Link>
                                                <p>{wine.name}</p>
                                                <h4 className='text-decoration-line-through'>De R$ {wine.price}</h4>
                                                <p>Por R$ {Number(wine.price) - Number(wine.sale)}</p>
                                                <button className="btn btn-gold">APROVEITAR</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            return null
                        })
                    }
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