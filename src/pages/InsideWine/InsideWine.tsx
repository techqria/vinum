import React, { useEffect } from "react";
import { Wine } from "./Wine"
<<<<<<< HEAD
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
=======
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/footer"
>>>>>>> de72531bfacdbe30c4e765c3e728e6ba05361717

export const Inside = () => {

    let { id } = useParams()
    return (
        <>
            <Sidebar />
            <Wine wineId={id} />
            <Footer />
        </>
    )
}