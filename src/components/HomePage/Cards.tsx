import React from "react";

export default function Cards() {
    return (

        <div className="card-group mt-3">

            <div className="card text-white container border-light position-relative">
                <img src="https://vinum-wine.s3.amazonaws.com/Cards/vinhoTinto.svg" alt="fundo-card" />
            </div>

            <div className="card container border-light position-relative">
                <img src="https://vinum-wine.s3.amazonaws.com/Cards/vinhoBranco.svg" className="card-img" alt="fundo-card" />
                <div className="card-img-overlay text-white position-absolute"> 
                    <div className="imgWine ms-5">
                    </div>
                </div>
            </div>

            <div className="card container border-light position-relative">
                <img src="https://vinum-wine.s3.amazonaws.com/Cards/vinhoRose.svg" className="card-img" alt="fundo-card" />
                <div className="card-img-overlay text-white position-absolute">
                    <div className="imgWine ms-5">
                    </div>
                </div>
            </div>
        </div>
    );
}
