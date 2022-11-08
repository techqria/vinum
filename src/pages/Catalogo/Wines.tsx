import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../api/api";
import { Filter } from "../../components/Filter";
import { WineDto } from "../../dto/wine.dto";

export const Wines = () => {

    const location = useLocation()

    const [wines, setWines] = useState<WineDto[]>([])

    const [categoryFilter, setCategoryFilter] = useState<any[]>([]);
    const [priceFilter, setPriceFilter] = useState<any[]>([]);

    useEffect(() => {
        api.get("/wine/listAll")
            .then((response) => {
                response.data.forEach((wine: any) => {
                    setWines(wines => [...wines, wine])
                })
            })
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);

    return (
        <section className="container mt-5 pt-5 d-flex position-relative">
            <Filter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />

            <div className="row d-flex gap-5 justify-content-center">
                {
                    wines.map((wine, index) => {
                        if (categoryFilter.find(category => category == wine.category) || (categoryFilter.length == 0) || (priceFilter.find(price => Number(price) == Number(wine.price) ))) {
                            return (
                                <div key={index} className="col-md-3 mt-5 d-flex flex-column align-items-center justify-content-center">
                                    <a href={`/inside/${wine._id}`} className="d-flex flex-column align-items-center">
                                        <img width={150} src={wine.image} alt="garrafaVinho.svg" />
                                        <p>{wine.name}</p>
                                        <h4 className='text-decoration-line-through'>De R$ {wine.price}</h4>
                                        <p>Por R$ {(wine.sale)}</p>
                                        <a href={`/inside/${wines[0]._id}`} className="btn btn-gold mw-120">APROVEITAR</a>
                                    </a>
                                </div>
                            )
                        } else return null
                    })
                }
            </div>
        </section>
    )
} 