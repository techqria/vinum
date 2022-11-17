export default function Footer() {
    return (
        <footer id="footer" className="row m-0 mt-3">

                <div className="text-white d-flex flex-column align-items-center gap-2 mt-4">
                    <p><b>Vinum Wine Eventos</b></p>
                    <p><b>E-mail</b>: vinum.wineeventos@gmail.com</p>
                    <p><b>CNPJ</b>: 34.173679/0001-32</p>
                    SQNW 309 Bloco B - Brasília/DF


                    <div className="mt-4 d-flex flex-column">
                        <h4 className=" mb-2 text-white">Nossas redes sociais</h4>

                        <div className="text-white gap-5 mt-2 d-flex justify-content-center mt-3">
                            <a href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y=" target="_blank">
                                <i className=" fa-brands fa-instagram text-white fa-2xl"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5561996851375" target="_blank">
                                <i className=" fa-brands fa-whatsapp text-white fa-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}