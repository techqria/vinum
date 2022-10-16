import React from 'react'

export const Navbar = () => {
    return (
        <section>
            <nav className="ps-4 position-fixed zIndex-2 bg-transparent">
                <button className="btn btn-default border-0 pt-4">
                    <i className="text-white fa-solid fa-bars"></i>
                </button>
                <ul className="d-none text-white m-0">
                    <li className='mt-5 mb-5'>Ofertas</li>
                    <li className='mt-5 mb-5'>Catálogo</li>
                    <li className='mt-5 mb-5'>Fale Conosco</li>
                    <li className='mt-5 mb-5'>Ofertas</li>
                </ul>
            </nav>
        </section>
    )
}
