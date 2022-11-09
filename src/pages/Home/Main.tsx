import React from "react";
import { useState } from "react";
import { MainHeader } from '../../components/header/MainHeader';
import { Menu } from "./Menu";
import { Promos } from './Promos';
import Cards from "./Cards"
import Footer from "../../components/Footer";

export const Main = () => {
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
            <MainHeader scroll={scroll}/>
            <Cards />
            <Promos />
            <Menu />
            <Footer />
        </>
    )
}