import React from "react";
import { useState, useEffect } from "react";
import { MainHeader } from '../../components/header/MainHeader';
import { Menu } from "./Menu";
import Footer from "../../components/Footer";
import { Slider } from "../../components/slider/Slider";
import { Alert } from "../../components/Alert";
import { Cards } from "./Cards";

export const Main = () => {

    const [scroll, setScroll] = useState(false)

    const [older, setOlder] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('older')) setOlder(true)
        console.log('effect')
    }, [])

    useEffect(() => {
        console.log('scroll')
    }, [scroll])

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
            <Alert older={older} setOlder={setOlder}/>
            <MainHeader older={older} scroll={scroll} />
            <Cards older={older} />
            <Slider older={older} />
            <Menu older={older} />
            <Footer  />
        </>
    )
}