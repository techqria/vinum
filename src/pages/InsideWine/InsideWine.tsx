import React, { useEffect, useState } from "react";
import { Wine } from "./Wine"
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import SidebarMobile from "../../components/sidebar/SidebarMobile";

export const Inside = () => {

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

    let { id } = useParams()
    return (
        <>
            <SidebarMobile scroll={scroll} color={'black'}/>
            <Wine wineId={id} />
            <Footer />
        </>
    )
}