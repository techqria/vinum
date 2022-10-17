import React from "react";
import { Link } from 'react-router-dom';

export const Wines = () => {
    return (
        <>
            <div className="container d-flex justify-content-between mt-5">
                <div className="wine">
                    <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                    <p>Catena Chardonnay</p>
                    <h3 className='text-decoration-line-through'>De 181,02</h3>
                    <p>Por 149,00</p>
                    <button>COMPRAR</button>
                </div>
                <div className="wine">
                    <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                    <p>Catena Chardonnay</p>
                    <h3 className='text-decoration-line-through'>De 181,02</h3>
                    <p>Por 149,00</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div className="container d-flex justify-content-between mt-5">
                <div className="wine">
                    <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                    <p>Catena Chardonnay</p>
                    <h3 className='text-decoration-line-through'>De 181,02</h3>
                    <p>Por 149,00</p>
                    <button>COMPRAR</button>
                </div>
                <div className="wine">
                    <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                    <p>Catena Chardonnay</p>
                    <h3 className='text-decoration-line-through'>De 181,02</h3>
                    <p>Por 149,00</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div className="container d-flex justify-content-between mb-5 mt-5">
                <div className="wine">
                    <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                    <p>Catena Chardonnay</p>
                    <h3 className='text-decoration-line-through'>De 181,02</h3>
                    <p>Por 149,00</p>
                    <button>COMPRAR</button>
                </div>
                <div className="wine">
                    <Link to="/inside"><img width={150} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" /></Link>
                    <p>Catena Chardonnay</p>
                    <h3 className='text-decoration-line-through'>De 181,02</h3>
                    <p>Por 149,00</p>
                    <button>COMPRAR</button>
                </div>
            </div>
        </>
    )
} 