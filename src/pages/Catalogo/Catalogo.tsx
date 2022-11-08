import React from "react";
import { Wines } from "./Wines"
import Footer from "../../components/Footer";
import { Ofertas } from "./Ofertas";
import Sidebar from "../../components/Sidebar";

export const Catalogo = () => {
    return (
        <>
            <Sidebar />
            <Ofertas />
            <Wines />
            <Footer /> 
        </>
    )
}