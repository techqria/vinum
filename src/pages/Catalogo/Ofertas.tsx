import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";

export const Ofertas = () => {

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
        <section className="container">
            <h2 className="text-center mt-5 pt-5 text-red">Melhores Ofertas</h2>

            <div id="carouselPromos" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-around">
                            {
                                wines[0] &&
                                <div key={0} className="d-flex justify-content-center align-items-center">
                                    <a href={`/inside/${wines[0]._id}`} className="d-flex flex-column align-items-center">
                                        <img width={150} src={wines[0].image} alt="garrafaVinho.svg" />
                                        <p>{wines[0].name}</p>
                                        <h4 className='text-decoration-line-through'>De R$ {wines[0].price}</h4>
                                        <p>Por R$ {Number(wines[0].price) - Number(wines[0].sale)}</p>
                                        <button className="btn btn-gold">APROVEITAR</button>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        wines.map((wine, index) => {
                            if (index > 0) {
                                return (
                                    <div key={index}  className="carousel-item">
                                        <div className="d-flex justify-content-around mt-5 pb-5">
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <a href={`/inside/${wine._id}`} className="d-flex flex-column align-items-center">
                                                    <img width={150} src={wine.image} alt="garrafaVinho.svg" />
                                                    <p>{wine.name}</p>
                                                    <h4 className='text-decoration-line-through'>De R$ {wine.price}</h4>
                                                    <p>Por R$ {Number(wine.price) - Number(wine.sale)}</p>
                                                    <button className="btn btn-gold">APROVEITAR</button>
                                                </a>
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

