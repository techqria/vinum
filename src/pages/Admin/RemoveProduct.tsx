import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { WineDto } from "../../dto/wine.dto";
import { DeleteImageToS3 } from "../../utils/functionS3";

export const RemoveProduct = () => {

    const navigate = useNavigate();

    const [wines, setWines] = useState<WineDto[]>([]);
    const [wineId, setWineId] = useState('');

    useEffect(() => {
        api.get('/wine/listAll')
            .then(response => setWines(response.data))
            .catch(e => console.log(e))
    }, [])

    async function removeProduct(e: any) {
        e.preventDefault();

        if (wineId != 'default') {

            await DeleteImageToS3(wineId)

            api.delete(`/wine/remove/${wineId}`)
                .then(response => {console.log(response); navigate('/admin')})
                .catch(e => console.log(e))
        }
    }

    return (
        <section className="pt-5 pb-5 bg-dark h-100vh">
            <div className="container">
                <h2 className="fw-bold text-uppercase text-center text-white">Remover produto</h2>

                <form className="mt-4" onSubmit={e => removeProduct(e)}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label text-white">Selecionar Vinho</label>
                        <select id="id" onChange={e => setWineId(e.target.value)} className="form-control bg-dark text-white">
                            <option key="default" value="default">Selecionar Vinho</option>
                            {
                                wines.map(wine => (
                                    <option key={wine._id} value={wine._id}>{wine.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mt-4 mb-3 d-flex justify-content-center">
                        <button className="btn btn-primary">REMOVER</button>
                    </div>
                </form>
            </div>
        </section>
    )
} 
