import React from "react";

export const Wine = () => {
    return (
        <section className="container mt-5 mb-5 text-center">
            <h1 className='pb-2 position-relative'>Vinho Tinto Oops</h1>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <img width={150} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
                <h3 className='text-decoration-line-through'>De 199,00</h3>
                <p>Por 89,99</p>
                <button>COMPRAR</button>
            </div>

            <br></br>
            <h1 className="d-flex justify-content-center pb-2 position-relative">Descrição</h1>
            <p>A Casa Grande Arte e Viña é uma vinícola familiar, de tradição italiana e que produz seus vinhos de forma artesanal a partir das uvas colhidas de seus 10 hectares de vinhedos plantados. A linha Colección Artística possui rótulos feitos pelo artista plástico uruguaio Gastón Izaguirre.O vinho Casa Grande Merlot foi produzido a partir de um clone sul-africano e que se adaptou muito bem em Canelones. Macio e envolvente em boca, é uma ótima opção para acompanhar massas, em especial com carnes.</p>
            <h1 className="d-flex justify-content-center pb-2 position-relative">Ficha Técnica</h1>
            <p><b>País de origem</b><p>Uruguai</p></p>
            <p><b>Região</b><p>Canelones</p></p>
            <p><b>Volume</b><p>Volume</p></p>
            <p><b>Coloração</b><p>Tinto</p></p>
            <p><b>Tipo</b><p>Seco</p></p>
            <p><b>Uvas</b><p>Merlot</p></p>
            <p><b>Teor Alcólico</b><p>12,7%</p></p>
            <p><b>Safra</b><p>2018</p></p>
            <p><b>Harmonização</b><p>Carnes, massas com molho branco, massas folhadas</p></p>

        </section>
    )
}