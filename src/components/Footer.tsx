import React from "react"

export default function Footer() {
    return (
        <footer
            className="text-center text-lg-start text-white mt-5 bg-black"
        >
            <section className="container pt-4 pb-4">
                <div className="row w-100 d-flex justify-content-center align-items-start">

                    <div className="col-md-4 d-flex mb-md-0 mb-5 justify-content-center d-flex align-items-center">
                        <img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logo-Vinum+Wine.svg" alt="logo.svg" />
                        <p style={{fontSize: '24px'}}>Vinum <br className="d-md-none"/> Eventos</p>
                    </div>

                    <div className="col-md-4 d-flex mb-md-0 mb-4 justify-content-center align-items-center flex-column">
                        <h6 className="text-uppercase text-red fw-bold">Vinum Eventos</h6>
                        <div className="d-flex justify-content-start flex-column mt-2">
                            <p className="mb-2">
                                <i className="fas fa-home me-2"></i><span className="text-white">SQNW 309 Bloco B - Brasília/DF</span>
                            </p>
                            <p>
                                <i className="fas fa-print me-2"></i> <span className="text-white">34173679/0001-32</span>
                            </p>
                        </div>

                    </div>

                    <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                        <h6 className="text-uppercase fw-bold text-red">Redes Sociais</h6>
                        <div className="d-flex justify-content-start flex-column mt-2">
                            <p className="mb-2"><i className="fas fa-envelope me-2"></i>vinum.wineeventos@gmail.com</p>

                            <a href="https://api.whatsapp.com/send?phone=55619968513757&text=Olá, gostaria de saber mais sobre o Vinum!"><p className="text-white mb-2"><i className="fa-brands fa-whatsapp me-2 text-white"></i>(61) 99685-1375</p></a>
                            <a href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y="><p className="text-white mb-0"><i className="fa-brands fa-instagram me-2 text-white"></i>vinum_wineeventos</p></a>
                        </div>

                    </div>

                </div>
            </section>

            <div
                className="text-center p-3 text-black w-100"
                style={{ backgroundColor: "#fafafa" }}
            >
                © 2022
                <a className="text-black" href="https://qriatech.com.br" target="_blank"> qriatech.com.br</a>
            </div>

        </footer>
    )
}