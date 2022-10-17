import React from "react";

export const Wine = () => {
    return (
        <section className="container mt-5 mb-5 text-center">
            <h1 className='pb-2 position-relative'>Catena Chardonnay 2020</h1>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <img width={250} src="https://vinum-wine.s3.amazonaws.com/Catalogo/catena.png" alt="garrafaVinho.svg" />
                <h3 className='text-decoration-line-through'>De 181,02</h3>
                <p>Por 149,00</p>
                <button>COMPRAR</button>
            </div>

            <br></br>
            <h1 className="d-flex justify-content-center pb-2 position-relative">Descrição</h1>
            <p>Catena Chardonnay é uma das grandes referências para brancos maturados em barricas de carvalho produzidos na América do Sul, mostrando muita concentração e finesse. Sempre recebe ótimas notas da imprensa especializada, tendo sido chamado de "delicioso" pela revista Wine Spectator. Um excelente branco com um bouquet cativante de frutas brancas e nota mineral. Na boca é macio e pleno, com frutas maduras, mel, baunilha e um agradável e sutil toque tostado.
            </p>

            <h1 className="d-flex justify-content-center pb-2 position-relative">Ficha Técnica</h1>

            <p><b>País de origem</b><p>Argentina</p></p>
            <p><b>Região</b><p>Mendonza</p></p>
            <p><b>Volume</b><p>750ml</p></p>
            <p><b>Coloração</b><p>Branco</p></p>
            <p><b>Tipo</b><p>Seco</p></p>
            <p><b>Uvas</b><p>Uvas provenientes de 4 vinhedos, Agrelo, Villa Bastias, Gualtallary e El Cepillo</p></p>
            <p><b>Teor Alcólico</b><p>13,5%</p></p>
            <p><b>Safra</b><p>2020</p></p>
            <p><b>Harmonização</b><p>Carnes, massas com molho branco, massas folhadas</p></p>

        </section>
    )
}