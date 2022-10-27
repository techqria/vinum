import { useState } from "react"
import api from "../../api/api";

export const NewProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [vol, setVol] = useState('');
    const [coloration, setColoration] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const [wine, setWine] = useState(
        {
            name: '', price: '', sale: '', category: '', country: '', region: '', vol: '',
            coloration: '',  alcohol: '', grapes: '', year: '', description: '', image: '',
        }
    )

    function newWine(e: any) {

        e.preventDefault()

        setWine({
            ...wine,
            name: name,
            price,
            sale,
            category,
            country,
            region,
            vol,
            grapes: 'uvas',
            coloration,
            alcohol,
            year,
            description,
            image: 'image',
        })

            console.log(wine)

        api.post('/wine/createwine', wine)
            .then(response => console.log(response))
            .catch(e => console.log(e))


    }

    return (
        <section className="container mt-5 mb-5">
            <h2 className="fw-bold text-uppercase text-center">Adicionar novo produto</h2>

            <form action="" className="mt-4" onSubmit={(e) => newWine(e)}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Nome</label>
                            <input required onChange={e => setName(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Preço</label>
                            <input required onChange={e => setPrice(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Desconto</label>
                            <input required onChange={e => setSale(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Categoria</label>
                            <input required onChange={e => setCategory(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">País</label>
                            <input required onChange={e => setCountry(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Região</label>
                            <input required onChange={e => setRegion(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Quantidade</label>
                            <input required onChange={e => setVol(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Coloração</label>
                            <input required onChange={e => setColoration(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Ano</label>
                            <input required onChange={e => setYear(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Teor Alcólico</label>
                            <input required onChange={e => setAlcohol(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Descrição</label>
                            <textarea required onChange={e => setDescription(e.target.value)} className="form-control" ></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Selecionar Imagem</label>
                            <input onChange={e => setImage('')} type="file" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-3 d-flex justify-content-center">
                    <button className="btn btn-primary">ADICIONAR</button>
                </div>
            </form>
        </section>
    )
} 