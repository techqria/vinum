import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import SwiperCore, { Autoplay } from 'swiper';

import { Navigation } from "swiper";


import "swiper/css";
import "swiper/css/navigation";

import "../../App.css";

export const Slider = () => {

    const [wines, setWines] = useState<WineDto[]>([])

    useEffect(() => {
        api.get("/wine/listAll")
            .then((response) => {
                response.data.forEach((wine: any) => {
                    if ((wine.sale) != '0') setWines(wines => [...wines, wine])
                })
            })
            .catch(err => console.error("ops! ocorreu um erro" + err));
    }, []);

    SwiperCore.use([Autoplay]);

    return (
        <div className="py-4 px-4">
            <h2 className="ofertas text-center text-red pb-3">Melhores Ofertas</h2>
            <p className="text-center p-1">Deslize com o mouse pelo carrossel para aproveitar todas as promoções</p>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }} freeMode={true}
                grabCursor={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                }}
            >
                {
                    wines.map((wine, index) => {
                        if (wine.sale != wine.price) {
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <a href={`/inside/${wine._id}`}><img width={150} src={wine.image} alt="garrafaVinho.svg" /></a>
                                    <p>{wine.name}</p>
                                    <h4 className='text-decoration-line-through'>De R$ {wine.price}</h4>
                                    <p>Por R$ {(wine.sale)}</p>
                                    <a href={`/inside/${wine._id}`} className="btn btn-gold mw-120">APROVEITAR</a>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </SwiperSlide>

                            )
                        }
                    }
                    )
                }
            </Swiper>
        </div>
    )
}