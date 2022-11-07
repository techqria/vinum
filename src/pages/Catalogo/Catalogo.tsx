import React from "react";
import { Wines } from "./Wines"
import Footer from "../../components/footer";
import { Ofertas } from "./Ofertas";
<<<<<<< HEAD
import Sidebar from "../../components/Sidebar";
=======
import  Sidebar  from "../../components/Sidebar"
>>>>>>> de72531bfacdbe30c4e765c3e728e6ba05361717


export const Catalogo = () => {
    return (
        <>
            <h2 className="d-flex justify-content-center pb-2 mt-5 pt-5 position-relative">Catálogo</h2>
            <Sidebar />
            <Ofertas />
            <Wines />
            <Footer /> 
        </>
    )
}