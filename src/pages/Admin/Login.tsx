import { useState } from "react"
import { useNavigate } from "react-router";
import api from "../../api/api";
import { UserDto } from "../../dto/user.dto";

export const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState<UserDto>({
        username: '',
        password: ''
    });

    const [error, setError] = useState(false)

    const handleChange = (e: any) => {
        setUser(user => ({
            ...user,
            [e.target.id]: e.target.value
        }));

    }

    const login = (e: any) => {
        e.preventDefault();

        api.post('/user/auth', user)
            .then(result => {
                if (result.data) {
                    localStorage.setItem('logged', result.data._id)
                    navigate('/admin')
                    window.location.reload()
                    return
                }
                setError(true)

            })
            .catch(e => console.log(e))
    }

    return (
        <section className="container pt-5 pb-5">
            <div className="mb-3 position-relative bg-black w-100">
                <img className="img-fluid position-absolute" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
            </div>
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
                {
                    error &&
                    <div className="mb-3">
                        <p className="text-danger">Usuário ou senha inválida</p>
                    </div>
                }

            </form>
        </section>
    )
}