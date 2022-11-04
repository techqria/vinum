import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards() {

    const navigate = useNavigate();

    function redirectTo(category: string) {
        navigate('catalogo', {
            state: {
                filter: category
            }
        })
    }

    return (
        <section className="container-fluid mt-5">
            <div className="row card-group">
                <div className="col-md-4 d-flex justify-content-center">
                    <button className="btn btn-default p-0" onClick={e => redirectTo('tintos')}>
                        <img className="img-fluid rounded" src="https://vinum-wine.s3.amazonaws.com/Cards/vinhoTinto.svg" alt="fundo-card" />
                    </button>
                </div>
                <div className="col-md-4 mt-4 d-flex justify-content-center">
                    <button className="btn btn-default p-0" onClick={e => redirectTo('brancos')}>
                        <img className="img-fluid rounded" src="https://vinum-wine.s3.amazonaws.com/Cards/vinhoBranco.svg" alt="fundo-card" />
                    </button>
                </div>
                <div className="col-md-4 mt-4 d-flex justify-content-center">
                    <button className="btn btn-default p-0" onClick={e => redirectTo('roses')}>
                        <img className="img-fluid rounded" src="https://vinum-wine.s3.amazonaws.com/Cards/vinhoRose.svg" alt="fundo-card" />
                    </button>
                </div>
            </div>
        </section>
    );
}
