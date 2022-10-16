import React from "react";
import { Ofertas } from "./Ofertas";
import { Footer } from "../../homePage/Footer";
import { Navbar } from "./Navbar";
import { Rest } from "../wines/rest"

export const Catalogo = () => {
    return (
        <>  
            <Navbar />
            <Ofertas />
            <Rest />
            <Footer />
        </>
    )
}