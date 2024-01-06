import pic from "../../../../assets/beforeLogin/1.jpg";
import DefaultPageCss from "../defaultInfoPages/defaultPage.module.css";
import styles from './login.module.css'
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const switchRoute = () => {
        navigate('/home')
        window.location.reload()
    }

    const handleLogin = (e) => {
        e.preventDefault()

        console.log(login)
        console.log(password)
        axios
            .post('http://localhost:8080/api/v1/auth/authenticate',
                {
                    login: login,
                    password: password
                }
                )
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                switchRoute()
            })
            .catch((error) => console.log(error))

    }

    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleLogin}>
                <p>Zaloguj się</p>
                <input
                    type="text"
                    placeholder="Login"
                    required
                    onChange={(event) => setLogin(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Hasło"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div>
                    <input className={styles.submit} type="submit"/>
                </div>
            </form>
            <div>
                <img src={pic} alt="Zdjęcie przedstawia bank" className={DefaultPageCss.pic}/>
            </div>
        </div>
    )
}

export default Login
