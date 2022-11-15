import React from "react";
import { useNavigate } from "react-router-dom";

export const Cards: React.FC<any> = ({ older }) => {

    const navigate = useNavigate();

    function redirectTo(category: string) {
        navigate('catalogo', {
            state: {
                filter: category
            }
        })
    }

    return (
        <section id="card-group" className="container-fluid mt-2" style={{ pointerEvents: older ? 'auto' : 'none' }}>
            <div className="row card-group">
                <div className="col-md-4 mt-4 d-flex justify-content-center">
                    <button className="btn btn-default p-0 " onClick={e => redirectTo('tinto')}>
                        <img className="img-fluid rounded" src="https://vinum-wine.s3.amazonaws.com/Cards/card-atual-tintos.svg" alt="fundo-card" />
                    </button>
                </div>
                <div className="col-md-4 mt-4 d-flex justify-content-center">
                    <button className="btn btn-default p-0" onClick={e => redirectTo('branco')}>
                        <img className="img-fluid rounded" src="https://vinum-wine.s3.amazonaws.com/Cards/card-atual-brancos.svg" alt="fundo-card" />
                    </button>
                </div>
                <div className="col-md-4 mt-4 d-flex justify-content-center">
                    <button className="btn btn-default p-0" onClick={e => redirectTo('rose')}>
                        <img className="img-fluid rounded" src="https://vinum-wine.s3.amazonaws.com/Cards/card-atual-roses.svg" alt="fundo-card" />
                    </button>
                </div>
            </div>
        </section>
    );
}
