import React, { useEffect } from "react";
import { Wine } from "./Wine"
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

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