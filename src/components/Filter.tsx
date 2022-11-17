import { useEffect } from "react";

export const Filter: React.FC<any> = ({ categoryFilter, setCategoryFilter, setPriceFilter, priceFilter }) => {

    const filterCategory = (e: any) => {
        if (categoryFilter.find((category: any) => category == e.target.id)) {
            const remove = [...categoryFilter];

            const index = categoryFilter.indexOf(e.target.id)

            remove.splice(index, 1)

            setCategoryFilter(remove)
        } else setCategoryFilter((categoryFilter: any) => [...categoryFilter, e.target.id]);

    }
    const filterPrice = (e: any) => {
        if (priceFilter.find((category: any) => category == e.target.id)) {
            const remove = [...priceFilter];

            const index = priceFilter.indexOf(e.target.id)

            remove.splice(index, 1)

            setPriceFilter(remove)
        } else setPriceFilter((priceFilter: any) => [...priceFilter, e.target.id]);
    }

    return (
        <div className="d-flex flex-column gap-3 d-md-flex ">
            <div className="d-flex flex-column border gap-3  border-gold rounded p-4 me-5 mh-500 ">
                <div className="mb-3 border-bottom border-gold">
                    Filtrar por categoria <i className="fa-solid fa-arrow-down-long"></i>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterCategory} type="checkbox" id="branco" />
                    <label htmlFor="branco" className="me-1 pointer">Brancos</label>

                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterCategory} type="checkbox" id="rose" />
                    <label htmlFor="rose" className="me-1 pointer">Roses</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterCategory} type="checkbox" id="tinto" />
                    <label htmlFor="tinto" className="me-1 pointer">Tintos</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterCategory} type="checkbox" id="espumante" />
                    <label htmlFor="espumante" className="me-1 pointer">Espumantes</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterCategory} type="checkbox" id="destilados" />

                    <label htmlFor="destilados" className="me-1 pointer">Destilados</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterCategory} type="checkbox" id="champagne" />

                    <label htmlFor="champagne" className="me-1 pointer">Champagnes</label>
                </div>

            </div>
            <div className="d-flex flex-column border gap-3  border-gold rounded p-4 me-5 mh-400">
                <div className="mb-3 border-bottom border-gold">
                    Filtrar por preço <i className="fa-solid fa-arrow-down-long"></i>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterPrice} type="checkbox" id="30" />
                    <label htmlFor="30" className="me-1 pointer">R$ 30 - 100</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterPrice} type="checkbox" id="100" />
                    <label htmlFor="100" className="me-1 pointer">R$ 100 - 300</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterPrice} type="checkbox" id="300" />
                    <label htmlFor="300" className="me-1 pointer">R$ 300 - 500</label>
                </div>
                <div className="mb-3 d-flex">
                    <input className="pointer me-2" onChange={filterPrice} type="checkbox" id="500" />
                    <label htmlFor="500" className="me-1 pointer">Acima de R$500 </label>
                </div>

            </div>
        </div>
    )
}