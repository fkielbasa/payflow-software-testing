import styles from './passwordForm.module.css'
import {useState} from "react";

const PasswordForm = ({savePassword}) => {

    const [password, setPassword] = useState('');
    const [passwordRepeated, setPasswordRepeated] = useState('');
    const [isStrong, setIsStrong] = useState(false);

    const checkPasswordStrength = (inputPassword) => {

        const hasUpperCase = /[A-Z]/.test(inputPassword);
        const hasLowerCase = /[a-z]/.test(inputPassword);
        const hasDigit = /\d/.test(inputPassword);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(inputPassword);
        const isLengthValid = inputPassword.length >= 8;

        return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLengthValid;
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;


        // Sprawdzanie siły hasła po każdej zmianie
        const passwordIsStrong = checkPasswordStrength(newPassword);
        setIsStrong(passwordIsStrong);
        if (newPassword.length < 4){
            document.getElementById("bad").style.backgroundColor = "red"
            document.getElementById("medium").style.backgroundColor ="transparent"
            document.getElementById("good").style.backgroundColor ="transparent"
            document.getElementById("wrong").style.display='none';
        } else if (newPassword.length < 8){
            document.getElementById("bad").style.backgroundColor = "orange"
            document.getElementById("medium").style.backgroundColor = "orange"
            document.getElementById("good").style.backgroundColor ="transparent"
            document.getElementById("wrong").style.display='none';
        }else if (passwordIsStrong) {
            document.getElementById("bad").style.backgroundColor = "green"
            document.getElementById("medium").style.backgroundColor = "green"
            document.getElementById("good").style.backgroundColor ="green"
            setPassword(newPassword);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (isStrong && password === passwordRepeated){
            savePassword(password)
        } else{
            document.getElementById("wrong").style.display='block';
        }
    }

    return(
        <div className={styles.container}>
            <p className={styles.headline}>Utwórz hasło</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Podaj hasło</label>
                <input type="password" onChange={handlePasswordChange} required />
                <label>Powtórz hasło</label>
                <input type="password" onChange={(event) => setPasswordRepeated(event.target.value)} required />

                <div>
                    <p className={styles.strongText}>Siła hasła</p>
                    <div className={styles.colors}>
                        <div id="bad"></div>
                        <div id="medium"></div>
                        <div id="good"></div>
                    </div>
                    <div>
                        <p className={styles.rulesHeadline}>Hasło powinno zawierać:</p>
                        <ul className={styles.ul}>
                            <li>przynajmniej osiem znaków</li>
                            <li>duże i małe litery</li>
                            <li>cyfry</li>
                            <li>znaki specjalne</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.btnPos}><p id="wrong" className={styles.wrongPassText}>Hasła nie są takie same</p></div>
                <div className={styles.btnPos}>
                    <input className={styles.submit} type="submit"/>
                </div>
            </form>
        </div>
    )
}
export default PasswordForm
