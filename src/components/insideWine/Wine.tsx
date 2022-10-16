import React from "react";

export const Wine = () => {
    return (
        <section className="container d-flex justify-content-center">
            <h1 className="d=flex justify-content-center">Vinho Tinto Oops</h1>
            <img width={150} src="https://vinum-wine.s3.amazonaws.com/garrafaVinho.svg" alt="garrafaVinho.svg" />
            <h3 className='text-decoration-line-through'>De 199,00</h3>
            <p>Por 89,99</p>
            <button>Comprar</button>
            <br></br>
            <h1 className="d-flex justify-content-center pb-2 position-relative">Descrição</h1>
            <p>A Casa Grande Arte e Viña é uma vinícola familiar, de tradição italiana e que produz seus vinhos de forma artesanal a partir das uvas colhidas de seus 10 hectares de vinhedos plantados. A linha Colección Artística possui rótulos feitos pelo artista plástico uruguaio Gastón Izaguirre.O vinho Casa Grande Merlot foi produzido a partir de um clone sul-africano e que se adaptou muito bem em Canelones. Macio e envolvente em boca, é uma ótima opção para acompanhar massas, em especial com carnes.</p>
            <h1 className="d-flex justify-content-center pb-2 position-relative">Ficha Técnica</h1>
            <p>País de origem</p>
            <p>Uruguai</p>

            <p>Região</p>
            <p>Canelones</p>

            <p>Volume</p>
            <p>750ml</p>

            <p>Coloração</p>
            <p>Tinto</p>

            <p>Tipo</p>
            <p>Seco</p>

            <p>Uvas</p>
            <p>Merlot</p>

            <p>Teor Alcólico</p>
            <p>12,7%</p>

            <p>Safra</p>
            <p>2018</p>

            <p>Harmonização</p>
            <p>Carnes, massas com molho branco, massas folhadas</p>

        </section>
    )
}