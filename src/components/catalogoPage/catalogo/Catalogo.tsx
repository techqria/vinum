import React from "react";
import { Ofertas } from "./Ofertas";
import { Footer } from "../../homePage/Footer";
import { Navbar } from "./Navbar";
import { Pagination } from "../wines/pagination"
import { Wines } from "../wines/wines"

export const Catalogo = () => {
    return (
        <>  
            <Navbar />
            <Ofertas />
            <Pagination />
            <Wines />
            <Footer />
        </>
    )
}