import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function Sidebar({scroll, color}) {
    
    useEffect(() => {
        if (scroll){
            document.getElementById('sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else{
            color ? document.getElementById('sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)' : document.getElementById('sidebar').style.backgroundColor = "transparent";
        }
    }, [scroll])

    return (
        <nav className="zIndex position-fixed">

            <button className="btn btn-default button-sidebar d-md-none position-fixed mt-3 ms-3"><i className="text-red fa-solid fa-2x fa-bars"></i></button>

            <div id="sidebar" className="sidebar d-flex justify-content-md-around flex-column flex-md-row">
                <img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
                <ul className="text-white d-flex flex-column flex-md-row justify-content-md-center p-5 gap-4">
                    <li className="text-red fw-bold">Catálogo</li>
                    <li>Whatsapp</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </nav>
    )
}