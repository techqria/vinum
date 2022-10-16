import React from "react";
import { Ofertas } from "./Ofertas";
import { Footer } from "../../homePage/Footer";
import { Navbar } from "./Navbar";

export const Catalogo = () => {
    return (
        <>  
            <Navbar />
            <Ofertas />
            <Footer />
        </>
    )
}