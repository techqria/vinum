import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../api/api";
import { Filter } from "../../components/Filter";
import { WineDto } from "../../dto/wine.dto";

export const Wines = () => {

    const location = useLocation();

    const mainFilter = location.state?.filter;

    const [wines, setWines] = useState<WineDto[]>([]);

    const [categoryFilter, setCategoryFilter] = useState<any[]>([]);
    const [priceFilter, setPriceFilter] = useState<any[]>([]);
    const [priceValues, setPriceValues] = useState<any>();

    useEffect(() => {

        api.get("/wine/listAll")
            .then((response) => {
                response.data.forEach((wine: any) => {
                    setWines(wines => [...wines, wine])
                })
            })
            .catch(err => console.error("ops! ocorreu um erro" + err));

        if (mainFilter) setCategoryFilter(categoryFilter => [...categoryFilter, mainFilter])

    }, []);

    useEffect(() => {
        wines.forEach(wine => {
            if (priceFilter.filter((price: any) => (parseInt(wine.sale) <= price.max || price.min >= parseInt(wine.sale))).length > 0) {
                console.log(priceFilter.filter((price: any) => (parseInt(wine.sale) <= price.max || parseInt(wine.sale) >= price.min)), parseInt(wine.sale))
            }
        })
    }, [priceFilter])

    return (
        <section className="container">
            <div className="row d-flex gap-5 justify-content-center">
            <h1 id="headerMenu" className="pb-2 text-center position-relative mb-4">NOSSO CATÁLOGO</h1>

                <Filter priceValues={priceValues} setPriceValues={setPriceValues} setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />

                {
                    wines.map((wine, index) => {
                        if (
                            (categoryFilter.find(category => category == wine.category)) ||
                            (priceFilter.filter((price: any) => (parseInt(wine.sale) <= price.max && parseInt(wine.sale) >= price.min  )).length > 0) ||
                            (categoryFilter.length == 0 && priceFilter.length == 0)) {
                            return (
                                <div key={index} className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                                    <a href={`/inside/${wine._id}`} className="d-flex flex-column align-items-center">
                                        <img className="mw-120 mh-150" src={wine.image} alt="garrafaVinho.svg" />
                                        <p>{wine.name}</p>
                                        {
                                            wine.price != wine.sale ?
                                                <div className="d-flex flex-column">
                                                    <h4 className='text-decoration-line-through'>De R$ {wine.price}</h4>
                                                    <p className="text-center">Por R$ {(wine.sale)}</p>
                                                </div>
                                                :
                                                <h4 className=''>R$ {wine.price}</h4>
                                        }
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