import React from "react";
import { MainHeader } from './header/mainHeader';
import { Menu } from "./Menu";
import { Promos } from './Promos';
import { Footer } from './Footer';
import Cards from "./Cards"




export const Main = () => {
    return (
        <>
            <MainHeader />
            <Cards />
            <Promos />
            <Menu />
            <Footer />
        </>
    )
}