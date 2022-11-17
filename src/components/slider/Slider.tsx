import React, { useEffect, useState } from "react";

import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import SwiperCore, { Autoplay } from 'swiper';


import { Navigation } from "swiper";


import "swiper/css";

import "swiper/css/navigation";

import "./styles.css";

export const Slider: React.FC<any> = ({ older }) => {

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
        <div className="py-5 px-5" style={{ pointerEvents: older ? 'auto' : 'none' }}>
            <h2 className="mt-5 text-center text-red pb-3">Melhores Ofertas</h2>
            <p className="text-center p-1 fst-italic">Deslize com o mouse pelo carrossel para aproveitar todas as promoções</p>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={true}
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
                        slidesPerView: 4,
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