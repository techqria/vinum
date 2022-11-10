import { useEffect } from "react";

export const Filter: React.FC<any> = ({ categoryFilter, setCategoryFilter, setPriceFilter, priceFilter }) => {

    const filterCategory = (e: any) => {
        if (categoryFilter.find((categoy: any) => categoy == e.target.id)) {
            const remove = [...categoryFilter];

            const index = categoryFilter.indexOf(e.target.id)

            remove.splice(index, 1)

            setCategoryFilter(remove)
        } else setCategoryFilter((categoryFilter: any) => [...categoryFilter, e.target.id]);

    }
    const filterPrice = (e: any) => {
        if (priceFilter.find((categoy: any) => categoy == e.target.id)) {
            const remove = [...priceFilter];

            const index = priceFilter.indexOf(e.target.id)

            remove.splice(index, 1)

            setPriceFilter(remove)
        } else setPriceFilter((priceFilter: any) => [...priceFilter, e.target.id]);
    }

    return (
        <div className="d-flex flex-column gap-3 position-sticky top-10 d-md-flex d-none">
            <div className="d-flex flex-column border gap-3 border-gold rounded p-4 me-5 mh-300 ">
                <div className="mb-3 border-bottom border-gold">
                        Filtrar por categoria <i className="fa-solid fa-arrow-down-long"></i>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="branco" className="me-1 pointer">Branco</label>
                    <input className="pointer" onChange={filterCategory} type="checkbox" id="branco" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="rose" className="me-1 pointer">Rose</label>
                    <input className="pointer" onChange={filterCategory} type="checkbox" id="rose" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="tinto" className="me-1 pointer">Tinto</label>
                    <input className="pointer" onChange={filterCategory} type="checkbox" id="tinto" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="espumante" className="me-1 pointer">Espumantes</label>
                    <input className="pointer" onChange={filterCategory} type="checkbox" id="espumante" />
                </div>

            </div>
            <div className="d-flex flex-column border gap-3 border-gold rounded p-4 me-5 mh-300">
                <div className="mb-3 border-bottom border-gold">
                        Filtrar por preço <i className="fa-solid fa-arrow-down-long"></i>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="50" className="me-1 pointer">$50 - $100</label>
                    <input className="pointer" onChange={filterPrice} type="checkbox" id="50" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="100" className="me-1 pointer">$100 - $150</label>
                    <input className="pointer" onChange={filterPrice} type="checkbox" id="100" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="150" className="me-1 pointer">$150 - $200</label>
                    <input className="pointer" onChange={filterPrice} type="checkbox" id="150" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="200" className="me-1 pointer">$200 ++ </label>
                    <input className="pointer" onChange={filterPrice} type="checkbox" id="200" />
                </div>

            </div>
        </div>
    )
}