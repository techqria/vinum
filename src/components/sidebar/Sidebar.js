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
        <nav tabIndex="0" className="zIndex position-fixed">

            <button className="btn btn-default button-sidebar d-md-none position-fixed mt-3 ms-3" ontouchstart=""><i className="ms-5 mt-5 text-red fa-solid fa-2x fa-bars"></i></button>

            <div id="sidebar" className="sidebar d-flex justify-content-md-around justify-content-center flex-column flex-md-row">
                <Link to="/"><img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" /></Link>
                <ul className="text-white d-flex flex-column flex-md-row justify-content-md-center p-5 gap-4">
                    <Link to="/catalogo"><li className="text-red fw-bold">Catálogo</li></Link>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=55619968513757&text=Olá,gostaria de saber mais sobre o Vinum!"><li className="text-white">Whatsapp</li></a>
                    <a target="_blank" href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y="><li className="text-white">Instagram</li></a>
                </ul>
            </div>
        </nav>
    )
}