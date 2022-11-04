export default function Footer() {
    return (
        <footer className="container mt-5 pt-5 pb-4">
            <div className="row mt-5 pt-5 mb-5 d-flex align-items-center">
                <div className="col-md-12 mt-5 d-flex flex-column">
                    <div className="text-gold d-flex justify-content-center gap-5 mt-2">
                        <a href="https://www.instagram.com/belavida_bonsvinhos/" target="_blank">
                            <i className="ms-3 fa-brands fa-instagram text-dark fa-2xl"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5561996851375" target="_blank">
                            <i className="ms-3 fa-brands fa-whatsapp text-dark fa-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <a href="https://www.qriatech.com.br" target="_blank">
                <h6 className="text-center text-dark mt-5 pt-5">© 2022 QRIA Tech. All Rights Reserved</h6>
            </a>
        </footer>
    )
}