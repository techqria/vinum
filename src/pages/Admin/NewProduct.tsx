import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";
import { UploadImageToS3 } from "../../utils/functionS3";

export const NewProduct = () => {

    const navigate = useNavigate();

    const [newWine, setNewWine] = useState<WineDto>(
        {
            name: '', price: '', sale: '', category: '', country: '', region: '', vol: '',
            coloration: '', alcohol: '', year: '', description: '', image: '',
        }
    )

    const [selectedFile, setSelectedFile] = useState<File>();

    function setWine(e: any) {
        const wine: any = { ...newWine };
        wine[e.target.id] = e.target.value;

        setNewWine(wine);
    }

    async function addWine(e: any) {
        e.preventDefault()

        const urlImage = await UploadImageToS3(selectedFile)

        newWine.image = urlImage

        api.post('/wine/createwine', newWine)
            .then(response => navigate('/admin'))
            .catch(e => console.log(e))
    }

    const handleImage = (e: any) => setSelectedFile(e.target.files[0]);

    return (
        <section className="pt-5 pb-5 bg-dark">
            <div className="container">
                <h2 className="fw-bold text-uppercase text-center text-white">Adicionar novo produto</h2>

                <form action="" className="mt-4" onSubmit={(e) => addWine(e)}>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Nome</label>
                                <input id="name" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Preço</label>
                                <input id="price" placeholder="R$0,00" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Preço com Desconto</label>
                                <input id="sale" placeholder="R$0,00" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Categoria</label>
                                <input id="category" placeholder="Vinho, Espumante, Rose" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">País</label>
                                <input id="country" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Tipo</label>
                                <input id="coloration" placeholder="Seco, Tinto, Branco" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Ano</label>
                                <input id="year" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Teor Alcólico</label>
                                <input id="alcohol" placeholder="12,5" required onChange={e => setWine(e)} type="text" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Descrição</label>
                                <textarea id="description" required onChange={e => setWine(e)} className="form-control bg-dark text-white" ></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label text-white">Selecionar Imagem</label>
                                <input id="image" onChange={handleImage} type="file" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mb-3 d-flex justify-content-center">
                        <button className="btn btn-primary">ADICIONAR</button>
                    </div>
                </form>
            </div>

        </section>
    )
} 
