import React from "react";

export const Rest = () => {
    return (
        <section>
            <nav className="mt-5">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <div className="container d-flex justify-content-between">
                <div className="wine">
                    <img width={75} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                    <p>Vinho tinto Oops</p>
                    <h3 className='text-decoration-line-through'>De 199,00</h3>
                    <p>Por 89,99</p>
                    <button>COMPRAR</button>
                </div>
                <div className="wine">
                    <img width={75} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                    <p>Vinho tinto Oops</p>
                    <h3 className='text-decoration-line-through'>De 199,00</h3>
                    <p>Por 89,99</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <div className="wine">
                    <img width={75} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                    <p>Vinho tinto Oops</p>
                    <h3 className='text-decoration-line-through'>De 199,00</h3>
                    <p>Por 89,99</p>
                    <button>COMPRAR</button>
                </div>
                <div className="wine">
                    <img width={75} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                    <p>Vinho tinto Oops</p>
                    <h3 className='text-decoration-line-through'>De 199,00</h3>
                    <p>Por 89,99</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div className="container d-flex justify-content-between mb-5">
                <div className="wine">
                    <img width={75} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                    <p>Vinho tinto Oops</p>
                    <h3 className='text-decoration-line-through'>De 199,00</h3>
                    <p>Por 89,99</p>
                    <button>COMPRAR</button>
                </div>
                <div className="wine">
                    <img width={75} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                    <p>Vinho tinto Oops</p>
                    <h3 className='text-decoration-line-through'>De 199,00</h3>
                    <p>Por 89,99</p>
                    <button>COMPRAR</button>
                </div>
            </div>
        </section>
    )
}