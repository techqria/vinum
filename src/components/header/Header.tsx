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
            <div className="bg-gold w-100 d-flex justify-content-center align-items-center gap-2 pt-3 pb-3">
                <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-truck pe-1"></i>
                    <p className="p-0 m-0 ">Entrega <b>GRÁTIS</b> em todo DF</p>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-credit-card me-1 pe-1"></i>
                    <p className="p-0 m-0">Pagamento 100% <b>SEGURO</b></p>
                </div>
            </div>
        </>
    )
}

