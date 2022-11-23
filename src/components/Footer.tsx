import React from "react"

export default function Footer() {
    return (
        <div className="">


            <footer
                className="text-center text-lg-start text-white mt-5"
                style={{ backgroundColor: "#000000" }}
            >

                <section className="">


                    <div className="row w-100">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase text-red fw-bold mt-4">Vinum Wine Eventos</h6>
                            <p>
                                <i className="fas fa-home mr-3 me-2"></i><a href="#!" className="text-white">SQNW 309 Bloco B - Brasília/DF</a>
                            </p>
                            <p>
                                <i className="fas fa-print mr-3 me-2"></i> <a href="#!" className="text-white">34173679/0001-32</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">

                            <h6 className="text-uppercase fw-bold text-red">Redes Sociais</h6>
                            <p><i className="fas fa-envelope mr-3 me-2"></i>vinum.wineeventos@gmail.com</p>
                            <a href="https://api.whatsapp.com/send?phone=55619968513757&text=Olá, gostaria de saber mais sobre o Vinum!"><p className="text-white"><i className="fa-brands fa-whatsapp mr-3 me-2 text-white"></i>(61) 99685-1375</p></a>
                            <a href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y="><p className="text-white"><i className="fa-brands fa-instagram mr-3 me-2 text-white"></i>vinum_wineeventos</p></a>
                        </div>

                    </div>


                </section>

                <div
                    className="text-center p-3 text-black w-100"
                    style={{ backgroundColor: "#fafafa" }}
                >
                    © 2022 Copyright: 
                    <a className="text-black" href="qriatech.com.br"
                    > qriatech.com.br</a
                    >
                </div>

            </footer>


        </div>

    )
}