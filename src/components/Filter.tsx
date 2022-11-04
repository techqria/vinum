export const Filter: React.FC<any> = ({ filter, setFilter }) => {

    const wineFilters = (e: any) => {
        if (filter.find((categoy: any) => categoy == e.target.id)) {
            const remove = [...filter];

            const index = filter.indexOf(e.target.id)

            remove.splice(index, 1)

            setFilter(remove)
        } else setFilter((filter: any) => [...filter, e.target.id]);
        
    }

    return (
        <div className="d-flex flex-column position-sticky gap-3 border p-3 me-4 mh-300 top-10">
            <div className="mb-3">
                <label htmlFor="branco" className="me-1 pointer">Branco</label>
                <input className="pointer" onChange={wineFilters} type="checkbox" id="branco" />
            </div>
            <div className="mb-3">
                <label htmlFor="rose" className="me-1 pointer">Rose</label>
                <input className="pointer" onChange={wineFilters} type="checkbox" id="rose" />
            </div>
            <div className="mb-3">
                <label htmlFor="tinto" className="me-1 pointer">Tinto</label>
                <input className="pointer" onChange={wineFilters} type="checkbox" id="tinto" />
            </div>
            <div className="mb-3">
                <label htmlFor="espumante" className="me-1 pointer">Espumantes</label>
                <input className="pointer" onChange={wineFilters} type="checkbox" id="espumante" />
            </div>
            <div className="mb-3">
                <label htmlFor="outros" className="me-1 pointer">Outros</label>
                <input className="pointer" onChange={wineFilters} type="checkbox" id="outros" />
            </div>
        </div>
    )
}