export default function Footer() {
    return (
        <footer className="container mt-5 pt-5 pb-4">
            <div className="row mt-5 pt-5 mb-5 d-flex align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <a href="#">
                        <img className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo-header.svg" />
                    </a>
                </div>
                <div className="col-md-4 mt-5 last-cols">
                    <div className="text-gold d-flex justify-content-center gap-5">
                        <a href="https://www.instagram.com/thiagosprime/" target="_blank">
                            <i className="ms-3 fa-brands fa-instagram text-dark fa-2xl"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5561999822472" target="_blank">
                            <i className="ms-3 fa-brands fa-tiktok text-dark fa-2xl"></i>
                        </a>
                    </div>
                </div>

            </div>
            <h6 className="text-center text-dark mt-5 pt-5">© 2022 QRIA Tech. All Rights Reserved</h6>
        </footer>
    )
}