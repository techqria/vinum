import { useEffect } from "react";

export const Filter: React.FC<any> = ({ categoryFilter, setCategoryFilter, setPriceFilter, priceFilter, priceValues, setPriceValues }) => {

    const filterCategory = (e: any) => {
        if (categoryFilter.find((category: any) => category == e.target.id)) {
            const remove = [...categoryFilter];

            const index = categoryFilter.indexOf(e.target.id)

            remove.splice(index, 1)

            setCategoryFilter(remove)
        } else setCategoryFilter((categoryFilter: any) => [...categoryFilter, e.target.id]);

    }

    useEffect(() => {
        if (priceValues) {
            if (priceFilter.find((price: any) => (price.min == priceValues.min && price.max == priceValues.max))) {
                const remove = [...priceFilter];

                const index = priceFilter.indexOf(priceValues);

                remove.splice(index, 1)

                setPriceFilter(remove)
            } else {
                if (priceFilter.length == 0) setPriceFilter([priceValues]);
                else setPriceFilter((priceFilter: any) => [...priceFilter, priceValues]);
            }
        }

    }, [priceValues])

    
    return (
        <div className="d-flex flex-column gap-3 align-items-center w-100">
            <div className="d-flex flex-md-row flex-column justify-content-center border gap-3 p-2 border-gold rounded w-content  pt-3">
                <div className="mb-3 border-bottom border-gold text-center">
                    Filtrar por categoria
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mb-3 d-flex">
                        <input  checked={categoryFilter.find((category: string) => category === 'branco')   ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="branco" />
                        <label htmlFor="branco" className="me-2  pointer">Brancos</label>
                    </div>
                    <div className="mb-3 d-flex">
                        <input checked={categoryFilter.find((category: string) => category === 'rose') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="rose" />
                        <label htmlFor="rose" className="me-1 pointer">Ros??s</label>
                    </div>
                    <div className="mb-3 d-flex">
                        <input checked={categoryFilter.find((category: string) => category === 'tinto') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="tinto" />
                        <label htmlFor="tinto" className="me-1 pointer">Tintos</label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mb-3 d-flex">
                        <input checked={categoryFilter.find((category: string) => category === 'destilado') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="destilado" />
                        <label htmlFor="destilado" className="me-1 pointer">Destilados</label>
                    </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <input checked={categoryFilter.find((category: string) => category === 'champagnes & espumantes') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="champagnes & espumantes" />
                    <label htmlFor="champagnes & espumantes" className="me-1 pointer">Champagnes & Espumantes</label>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <input checked={categoryFilter.find((category: string) => category === 'fortificado') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="fortificado" />
                    <label htmlFor="fortificados" className="me-1 pointer">Fortificados</label>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <input checked={categoryFilter.find((category: string) => category === 'organicos e veganos') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="organicos e veganos" />
                    <label htmlFor="organicos e veganos" className="me-1 pointer">Org??nicos e Veganos</label>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <input checked={categoryFilter.find((category: string) => category === 'zero alcool') ? true : false} className="pointer me-2" onChange={filterCategory} type="checkbox" id="zero alcool" />
                    <label htmlFor="zero alcool" className="me-1 pointer">Zero ??lcool</label>
                </div>
            </div>

            <div className="d-flex flex-md-row flex-column justify-content-center border gap-3 p-2  border-gold rounded w-content pt-3">

                <div className="mb-3 border-bottom border-gold text-center">
                    Filtrar por pre??o
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mb-3 d-flex">
                        <input className="pointer me-2" onChange={e => setPriceValues({ min: 30, max: 100 })} type="checkbox" id="30" />
                        <label htmlFor="30" className="me-2 pointer">R$ 30 - 100</label>
                    </div>
                    <div className="mb-3 d-flex">
                        <input className="pointer me-2" onChange={e => setPriceValues({ min: 100, max: 300 })} type="checkbox" id="100" />
                        <label htmlFor="100" className="me-1 pointer">R$ 100 - 300</label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mb-3 d-flex">
                        <input className="pointer me-2" onChange={e => setPriceValues({ min: 300, max: 500 })} type="checkbox" id="300" />
                        <label htmlFor="300" className="me-2 pointer">R$ 300 - 500</label>
                    </div>
                    <div className="mb-3 d-flex">
                        <input className="pointer me-2" onChange={e => setPriceValues({ min: 500, max: 12000 })} type="checkbox" id="500" />
                        <label htmlFor="500" className="me-1 pointer">Acima de R$ 500 </label>
                    </div>
                </div>
            </div>
        </div>
    )
}