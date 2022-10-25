import React from "react";
import { Wine } from "./Wine"
import { Footer } from "../HomePage/Footer";
import Sidebar from "./sidebar";

export const Inside = () => {
    return(
   <>
    <Sidebar />
    <Wine />
    <Footer />
   </>     
    )
}