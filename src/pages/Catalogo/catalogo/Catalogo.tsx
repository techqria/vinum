import React from "react";
import { Ofertas } from "./Ofertas";
import { Pagination } from "../wines/Pagination"
import { Wines } from "../wines/Wines"
import  Sidebar  from "./Sidebar";
import Footer from "../../../components/footer";


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