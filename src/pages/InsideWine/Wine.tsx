import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";

export const Wine = ({ wineId }: any) => {

    const [wine, setWine] = useState<WineDto>({
        name: '', price: '', sale: '', category: '', country: '',
        vol: '', grapes: '', alcohol: '', description: '', image: '', year: ''
    })

    useEffect(() => {
        api.get(`/wine/find/${wineId}`)
            .then((response) => setWine(response.data))
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);


    return (
        <section className="container text-center">
            <div className="row">
                <h2 className='marginInside position-relative pt-md-0 pt-5'>{wine.name}</h2>
                <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-center">
                        <img width={250} className="scale" src={wine.image} alt="garrafaVinho.svg" />
                        <div className="d-flex flex-column">
                            <h3 className='text-center text-decoration-line-through mb-1'>De R${wine.price}</h3>
                            <p className="text-center">Por R$ {(wine.sale)}</p>
                            <a target="_blank" href={`https://api.whatsapp.com/send?phone=5561996851375&text=Olá, tenho interesse no produto ${wine.name}\n vinumeventos.com.br/inside/${wine._id}`} className="btn btn-gold">COMPRAR</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-md-3">
                    <div className="mb-5 d-flex flex-column align-items-center">
                        <h2 className="pb-2 position-relative text-red mt-4">Ficha Técnica</h2>

                        <div className="d-flex gap-5">

                            <ul className="d-flex flex-column gap-3 mt-4">
                                <li>
                                    <p className="fw-bold mb-0">País de origem</p>
                                    <p>{wine.country}</p>
                                </li>
                                <li>
                                    <p className="fw-bold mb-0">Volume</p>
                                    <p>{wine.vol}</p>
                                </li>
                                <li>
                                    <p className="fw-bold mb-0">Safra</p>
                                    <p>{wine.year}</p>
                                </li>
                            </ul>

                            <ul className="d-flex flex-column gap-3 mt-4">
                                <li>
                                    <p className="fw-bold mb-0">Categoria</p>
                                    <p>{wine.category}</p>
                                </li>
                                <li>
                                    <p className="fw-bold mb-0">Teor Alcólico</p>
                                    <p>{wine.alcohol}</p>
                                </li>
                                <li>
                                    <p className="fw-bold mb-0">Uva(s)</p>
                                    <p>{wine.grapes}</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className=" pt-4 pb-4">
                        <h1 className="pb-2 position-relative">Descrição</h1>
                        <p className="mt-4">{wine.description}</p>
                    </div>
                </div>
            </div>


        </section>
    )
}
