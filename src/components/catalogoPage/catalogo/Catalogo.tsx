import React from "react";
import { Ofertas } from "./Ofertas";
import { Footer } from "../../homePage/Footer";
import { Pagination } from "../wines/pagination"
import { Wines } from "../wines/wines"
import  Sidebar  from "./Sidebar";


export const Catalogo = () => {
    return (
        <>  
            <Sidebar/>
            <Ofertas />
            <Pagination />
            <Wines />
            <Footer />
        </>
    )
}