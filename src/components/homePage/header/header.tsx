import React from "react";

export default function Header() {
    return (
        <section className="pt-5 pb-5 bg-header text-white">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <img width={250} className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
                <h2 className="pt-5 pb-5 text-center fw-light fst-italic">A maior revenda de vinhos de Brasília e região</h2>
            </div>
        </section> 
/*         <div className="header ">
            <div id="caroulsel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#caroulsel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#caroulsel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#caroulsel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://vinum-wine.s3.amazonaws.com/bgHeader.svg" className="d-block w-100" alt="..." />  
                    </div>
                    <div className="carousel-item">
                        <img src="https://vinum-wine.s3.amazonaws.com/bgHeader2.svg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://vinum-wine.s3.amazonaws.com/bgHeader3.svg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div> */
    )
}

 