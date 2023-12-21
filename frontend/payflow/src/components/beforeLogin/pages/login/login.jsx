import pic from "../../../../assets/beforeLogin/1.jpg";
import DefaultPageCss from "../startFrontPages/defaultPage.module.css";
import styles from './login.module.css'

const Login = () => {

    return(
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <p>Zaloguj się</p>
                <input type="text" placeholder="Login" required/>
                <input type="password" placeholder="Hasło" required/>
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
