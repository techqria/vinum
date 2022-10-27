import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
    return (

        <section id="adminpage" className="d-flex flex-column gap-5 justify-content-center align-items-center">
            <img className="mb-4 mt-4 img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo-header.svg" />

            <div className="row d-flex justify-content-around  w-100">
                <div className="col-md-4 mt-5 d-flex justify-content-center">
                    <Link to="/admin/novo-produto" className="p-5 fw-bold fs-5 btn btn-outline-gold text-white">
                        ADICIONAR PRODUTO
                    </Link>
                </div>
                <div className="col-md-4 mt-5 d-flex justify-content-center">
                    <Link to="/admin/alterar-produto" className="p-5 fw-bold fs-5 btn btn-outline-gold text-white">
                        ALTERAR PRODUTO
                    </Link>
                </div>
                <div className="col-md-4 mt-5 d-flex justify-content-center">
                    <Link to="/admin/remover-produto" className="p-5 fw-bold fs-5 btn btn-outline-gold text-white">
                        REMOVER PRODUTO
                    </Link>
                </div>
                <div className="col-md-4 mt-5 d-flex justify-content-center">
                    <Link to="/admin/nova-imagem" className="p-5 fw-bold fs-5 btn btn-outline-gold text-white">
                        ADICIONAR IMAGEM DO CARROSEL
                    </Link>
                </div>

                <div className="col-md-4 mt-5 d-flex justify-content-center">
                    <Link to="/admin/remover-imagem" className="p-5 fw-bold fs-5 btn btn-outline-gold text-white">
                        REMOVER IMAGEM DO CARROSEL
                    </Link>
                </div>
            </div>
        </section>

    )
} 