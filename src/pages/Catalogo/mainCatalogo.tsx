import React, { useState } from "react";
import { Wines } from "./Wines"
import Footer from "../../components/Footer";

import Sidebar from "../../components/sidebar/Sidebar";
import { Caroulsel } from '../../components/Caroulsel'



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
            <div className="pt-3"></div>
            <Caroulsel/>
            <Wines />
            <Footer />
        </>
    )
}