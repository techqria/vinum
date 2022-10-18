import React from "react";

export default function Subheader() {
    return (
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
    )
}