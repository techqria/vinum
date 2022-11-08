import React from "react";
import { Wines } from "./Wines"
import Footer from "../../components/Footer";
import { Ofertas } from "./Ofertas";
import Sidebar from "../../components/Sidebar";

export const Catalogo = () => {
    return (
        <>
            <Sidebar />
            <h2 className="d-flex justify-content-center pb-2  pt-5 position-relative">Catálogo</h2>
            <Ofertas />
            <Wines />
            <Footer /> 
        </>
    )
}