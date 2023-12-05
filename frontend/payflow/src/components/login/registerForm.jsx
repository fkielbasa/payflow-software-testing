import styles from './registerForm.module.css'
import {useState} from "react";

const RegisterForm = () => {
    const [sameAddress, setSameAddress] = useState(false)


    const selectSameAddress = () => {
        setSameAddress(!sameAddress)
    }

    return(
        <div className={styles.container}>
            <p className={styles.headline}>Podaj swoje dane</p>
            <form className={styles.form}>
                <div className={styles.horz}>
                <div className={styles.dataWrapper}>
                    <p>Dane osobiste</p>
                    <label>Imie</label>
                    <input id="firstName" type="text" required/>
                    <label>Nazwisko</label>
                    <input id="lastName" type="text" required/>
                    <label>Data urodzenia</label>
                    <input id="date" type="date" required/>
                    <label>Kraj</label>
                    <input id="country" type="text" required/>
                    <label>E-mail</label>
                    <input id="email" type="email" required/>
                    <label>Nr telefonu</label>
                    <input id="phone" type="number" required/>
                </div>
                <div className={styles.dataWrapper}>
                    <p>Adres zamieszkania</p>
                    <label>Kod pocztowy</label>
                    <input id="zipCode" type="tel" pattern="[0-9]*"  maxLength="5"  required/>
                    <label>Miejscowość</label>
                    <input id="city" type="text" required/>
                    <label>Ulica</label>
                    <input id="street" type="text" required/>
                    <label>Nr domu</label>
                    <input id="homeNumber" type="text" required/>
                    <label>Nr mieszkania</label>
                    <input id="flatNumber" type="text" required/>
                </div>
                    <div className={styles.dataWrapper}>
                        <p>Adres zamieszkania korespondencyjny</p>
                        <div className={styles.radio}>
                            <input type="checkbox" onClick={() => selectSameAddress()} />
                            <p>Taki sam jak adres zamieszkania</p>
                        </div>
                        <label>Kod pocztowy</label>
                        <input id="zipCodeSecond" disabled={sameAddress} type="tel" pattern="[0-9]*"  maxLength="5"  required/>
                        <label>Miejscowość</label>
                        <input id="citySecond" disabled={sameAddress} type="text" required/>
                        <label>Ulica</label>
                        <input id="streetSecond" disabled={sameAddress} type="text" required/>
                        <label>Nr domu</label>
                        <input id="homeNumberSecond" disabled={sameAddress}  type="text" required/>
                        <label>Nr mieszkania</label>
                        <input id="flatNumberSecond" disabled={sameAddress}   type="text" required/>
                    </div>
                </div>
                <input className={styles.submit} type="submit"/>
            </form>
        </div>
    )
}
export default RegisterForm
