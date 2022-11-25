import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";
import { UploadImageToS3 } from "../../utils/functionS3";

export const ChangeProduct = () => {

    const navigate = useNavigate();

    const [wines, setWines] = useState<WineDto[]>([]);

    const [currentWine, setCurrentWine] = useState<WineDto>({
        _id: '', name: '', price: '', sale: '', category: '', country: '', vol: '', grapes: '',
        alcohol: '', year: '', description: '', image: '',
    })

    const [selectedFile, setSelectedFile] = useState<File>();

    useEffect(() => {
        api.get('/wine/listAll')
            .then(response => setWines(response.data))
            .catch(e => console.error(e))
    }, [])

    function getCurrentWine(wineId: string) {
        api.get(`/wine/find/${wineId}`)
            .then(response => {
                setCurrentWine(response.data)
            })
            .catch(e => console.error(e))
    }

    function setWine(e: any) {
        const newWine: any = { ...currentWine };

        newWine[e.target.id] = e.target.value;

        setCurrentWine(newWine);

        if (e.target.id == 'id') getCurrentWine(e.target.value)
    }

    async function editWine(e: any) {
        e.preventDefault();
        console.log(selectedFile)
        console.log(currentWine.image)
        let urlImage;
        if (selectedFile){
        urlImage = await UploadImageToS3(selectedFile)
        } else{
            urlImage = currentWine.image
        }
        currentWine.image = urlImage

        api.put(`/wine/update-wine/${currentWine._id}`, currentWine)
            .then(response => navigate('/admin'))
            .catch(e => console.error(e))
    }

    const handleImage = (e: any) => setSelectedFile(e.target.files[0]);


    return (
        <section className="pt-5 pb-5 bg-dark">
            <div className="container">
                <h2 className="fw-bold text-uppercase text-center text-white">Alterar produto</h2>

                <form className="mt-4" onSubmit={e => editWine(e)}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Selecionar</label>
                                <select id="id" onChange={e => setWine(e)} className="form-control bg-dark text-white">
                                    <option key="default" value="default">Selecionar</option>
                                    {
                                        wines.map(wine => (
                                            <option key={wine._id} value={wine._id}>{wine.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Nome</label>
                                <input id="name" maxLength={35} value={currentWine?.name} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Preço</label>
                                <input id="price" value={currentWine?.price} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Preço com Desconto</label>
                                <input id="sale" value={currentWine?.sale} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Região</label>
                                <input id="country" value={currentWine?.country} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Tipo</label>
                                <select value={currentWine.category} onChange={e => setWine(e)} className="form-control bg-dark text-white" name="" id="category">
                                    <option value="">Escolha um tipo</option>
                                    <option value="branco">Branco</option>
                                    <option value="rose">Rose</option>
                                    <option value="tinto">Tinto</option>
                                    <option value="destilados">Destilados</option>
                                    <option value="champagne">Champagnes & Espumantes</option>
                                    <option value="fortificados">Fortificados</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Ano</label>
                                <input id="year" value={currentWine?.year} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Teor Alcólico</label>
                                <input id="alcohol" value={currentWine?.alcohol} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Uva(s)</label>
                                <input id="grapes" value={currentWine?.grapes} required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Selecionar Imagem</label>
                                <input id="image" onChange={handleImage} type="file" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Descrição</label>
                                <textarea id="description" value={currentWine?.description} required onChange={e => setWine(e)} className="form-control bg-dark text-white" ></textarea>
                            </div>
                        </div>

                    </div>

                    <div className="mt-4 mb-3 d-flex justify-content-center">
                        <button className="btn btn-primary">ALTERAR</button>
                    </div>
                </form>
            </div>
        </section>
    )
} 