import React from "react";
import { Header } from './header/Header';
import { Menu } from "./Menu";
import { Promos } from './Promos';
import { Footer } from './Footer';



export const Main = () => {
    return (
        <>
            <Header />
            <Promos />
            <Menu />
            <Footer />
        </>
    )
}