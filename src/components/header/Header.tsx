import React from "react";

export default function Header() {
    return (
        <>
            <section className="pt-5 pb-5 bg-header text-white">
                <div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
                    <p className="fs-2 mt-5 pt-5 pb-5 text-center fw-light fst-italic">Pensando em <b>você</b>, oferecemos os {'\n'} melhores vinhos com os menores preços.</p>
                </div>
            </section>

            <div className="bg-gold d-flex justify-content-center">
                <div className="ms-md-0 ms-3 container d-flex justify-content-center align-items-center gap-3 pt-3 pb-3">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <i className="fa-solid fa-truck me-2"></i>
                        <p className="p-0 m-0 ">Entrega <span className="fw-bold">GRÁTIS</span></p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-credit-card me-2"></i>
                        <p className="p-0 m-0">Pagamento 100% <span className="fw-bold">SEGURO</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

