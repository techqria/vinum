import React from "react";

export default function Header() {
    return (
        <>
            <section className="pt-5 pb-5 bg-header text-white">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <img width={250} className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
                    <h2 className="pt-5 pb-5 text-center fw-light fst-italic">A maior revenda de vinhos de Brasília e região</h2>
                </div>
            </section>
            <div className="subheader w-100 d-flex justify-content-center">

                <div className="d-flex me-5 pt-3">
                    <i className="fa-solid fa-truck pe-1"></i>
                    <p className="">Entrega <b>GRÁTIS</b> em todo o Distrito Federal</p>
                </div>

                <div className="d-flex pt-3">
                    <i className="fa-solid fa-credit-card me-1 pe-1"></i>
                    <p className="">Pagamento 100% <b>SEGURO</b></p>
                </div>
            </div>
        </>
    )
}

