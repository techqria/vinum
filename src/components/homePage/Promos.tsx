import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import api from '../../api/api'
import { WineDto } from '../../dto/wine.dto'


export const Promos = () => {
    const [wines, setWines] = useState<WineDto[]>([])

    useEffect(() => {
        api
            .get("/wine/listAll")
            .then((response) => {
                console.log(response.data)
                setWines(response.data)

            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <section className="container mt-5 mb-5 text-center">
            <h1 className='pb-2 position-relative'>OFERTAS DA SEMANA</h1>
            <div id="carouselPromos" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-around mt-5">
                            {
                                wines.map((wine, index) => {
                                    return (
                                        <div key={index} className="d-flex flex-column justify-content-center">
                                            <Link to="/inside"><img width={150} src={wine.image} alt="garrafaVinho.svg" /></Link>
                                            <p>{wine.name}</p>
                                            <h3 className='text-decoration-line-through'></h3>
                                            <p></p>
                                            <button>APROVEITAR</button>

                                        </div>
                                    )
                                }
                                )
                            }

                        </div>
                    </div>
                    <div className="carousel-item active">
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