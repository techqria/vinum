import { useState } from "react"
import api from "../../api/api";

export const Login = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: any) => {
        setUser(user => ({
            ...user,
            [e.target.id]: e.target.value
        }));

    }

    const login = (e: any) => {
        e.preventDefault();

        api.get('/user/auth', { params: user })
            .then(result => console.log('result',result))
            .catch(e => console.log(e))
    }

    return (
        <section className="container pt-5 pb-5">
            <form action="">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Usuário</label>
                    <input required onChange={handleChange} id="username" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Senha</label>
                    <input required onChange={handleChange} id="password" type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-outline-primary" onClick={login}>Entrar</button>
                </div>
            </form>
        </section>
    )
}