import React, { useState } from "react";
import { Wines } from "./Wines"
import Footer from "../../components/Footer";
import { Ofertas } from "./Ofertas";
import Sidebar from "../../components/sidebar/Sidebar";



export const Catalogo = () => {

    const [scroll, setScroll] = useState(false)

    window.addEventListener('scroll', () => {
        checkScroll()
    })

    function checkScroll() {
        if (window.innerWidth > 767) {

            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
    }

    return (
        <>
            <Sidebar scroll={scroll} color={'black'}/>
            <Ofertas />
            <Wines />
            <Footer />
        </>
    )
}