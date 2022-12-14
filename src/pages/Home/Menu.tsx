import { Link } from 'react-router-dom';

export const Menu: React.FC<any> = ({ older }) => {

    return (
        <section className="container mt-1 mb-5 pb-5" style={{ pointerEvents: older ? 'auto' : 'none' }}>
            <h1 id="headerMenu" className="pb-2 text-center position-relative mb-4">NOSSO CATÁLOGO</h1>
            <p className="text-center mb-5">
                A Vinum Wine Eventos oferece excelentes rótulos de vinhos, espumantes e destilados para atender todos os paladares e ocasiões!
                Mais do que boas opções e preços justos, queremos estar presentes nos momentos mais especiais da sua vida!</p>
            <div className="card-group d-flex gap-3">
                <div className="card bg-dark text-white d-md-flex d-none">
                    <Link to="/catalogo"><img src="https://vinum-wine.s3.amazonaws.com/Catalogo/catalogo.jpg" className="card-img" alt="..." /></Link>
                </div>
                <div className="card bg-dark text-white">
                    <Link to="/catalogo"><img src="https://vinum-wine.s3.amazonaws.com/Catalogo/catalogo3.jpg" className="card-img" alt="..." /></Link>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4 bg-transparent">
                <Link to="/catalogo"><button className='btn btn-gold ps-5 pe-5 fs-4'>VER CATÁLOGO</button></Link>
            </div>
        </section>
    )
}
