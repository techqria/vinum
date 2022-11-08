import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";

export const Wine = ({ wineId }: any) => {

    const [wine, setWine] = useState<WineDto>({
        name: '', price: '', sale: '', category: '', country: '', region: '',
        vol: '', coloration: '', alcohol: '', description: '', image: '', year: ''
    })

    useEffect(() => {
        api.get(`/wine/find/${wineId}`)
            .then((response) => setWine(response.data))
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);


    return (
        <section className="container pt-5 pb-5 mb-5 text-center">
            <h1 className='pb-2 position-relative'>{wine.name}</h1>

            <div className="d-flex flex-column align-items-center justify-content-center">
                <img width={250} src={wine.image} alt="garrafaVinho.svg" />
                <h3 className='text-decoration-line-through'>De R${wine.price}</h3>
                <p>Por R$ {(wine.sale)}</p>
                <a href="https://api.whatsapp.com/send?phone=5561996851375" className="btn btn-gold">COMPRAR</a>
            </div>

            <div className="mt-5 mb-5 pt-4 pb-4">
                <h1 className="pb-2 position-relative">Descrição</h1>
                <p className="mt-4">{wine.description}</p>
            </div>

            <div className="mt-5 mb-5 pt-4 pb-4">
                <h1 className="pb-2 position-relative">Ficha Técnica</h1>

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
                        <p className="fw-bold mb-0">Tipo</p>
                        <p>{wine.coloration}</p>
                    </li>
                    <li>
                        <p className="fw-bold mb-0">Categoria</p>
                        <p>{wine.category}</p>
                    </li>
                    <li>
                        <p className="fw-bold mb-0">Teor Alcólico</p>
                        <p>{wine.alcohol}</p>
                    </li>
                    <li>
                        <p className="fw-bold mb-0">Safra</p>
                        <p>{wine.year}</p>
                    </li>
                </ul>
            </div>


        </section>
    )
}