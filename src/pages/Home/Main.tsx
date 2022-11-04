import React from "react";
import { MainHeader } from '../../components/header/MainHeader';
import { Menu } from "./Menu";
import { Promos } from './Promos';
import Cards from "./Cards"
import Footer from "../../components/footer";




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