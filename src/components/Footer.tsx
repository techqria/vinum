export default function Footer() {
    return (
        <footer className="container mb-4">
            <div className="row mt-5 pt-5 mb-5 d-flex align-items-center">
                <div className="col-md-12 mt-5 d-flex flex-column">
                    <h4 className="text-center mb-2">Nossas redes sociais</h4>
                    <div className="text-gold d-flex justify-content-center gap-5 mt-2">
                        <a href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y=" target="_blank">
                            <i className="ms-3 fa-brands fa-instagram text-dark fa-2xl"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5561996851375" target="_blank">
                            <i className="ms-3 fa-brands fa-whatsapp text-dark fa-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
    
            <div className="d-column justify-content-center text-center mt-2 mb-5">
                <p><b>E-mail</b>: vinum.wineeventos@gmail.com</p>
                <p><b>Telefone</b>: (61) 996851375</p>
                <p><b>CNPJ</b>: 34.173679/0001-32</p>
                SQNW 309 Bloco B - Brasília/DF
            </div>


            <a href="https://www.qriatech.com.br" target="_blank">

                <h6 className="text-center text-dark">© 2022 QRIA Tech. All Rights Reserved</h6>
            </a>
        </footer>
    )
}