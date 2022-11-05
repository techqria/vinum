import React from "react";
import { Wine } from "./Wine"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/footer"

export const Inside = () => {
    return(
   <>
    <Sidebar />
    <Wine />
    <Footer />
   </>     
    )
}