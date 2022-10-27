import React from "react";
import { Ofertas } from "./Ofertas";
import { Footer } from "../../Home/Footer";
import { Pagination } from "../wines/Pagination"
import { Wines } from "../wines/Wines"
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