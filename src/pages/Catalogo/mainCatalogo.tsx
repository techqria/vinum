import React, { useState } from "react";
import { Wines } from "./Wines"
import Footer from "../../components/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarMobile from "../../components/sidebar/SidebarMobile";

import {Slider} from "./Slider";


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
            <SidebarMobile scroll={scroll} color={'black'}/>
            <Slider />
            <Wines />
            <Footer />
        </>
    )
}