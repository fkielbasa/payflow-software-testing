import styles from './registerForm.module.css'
import {useState} from "react";

const RegisterForm = ({saveDataForm}) => {
    const [sameAddress, setSameAddress] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [homeNumber, setHomeNumber] = useState('')
    const [flatNumber, setFlatNumber] = useState('')
    const [zipCodeCorrespondence, setZipCodeCorrespondence] = useState('')
    const [cityCorrespondence, setCityCorrespondence] = useState('')
    const [streetCorrespondence, setStreetCorrespondence] = useState('')
    const [homeNumberCorrespondence, setHomeNumberCorrespondence] = useState('')
    const [flatNumberCorrespondence, setFlatNumberCorrespondence] = useState('')

    const selectSameAddress = () => {
        setSameAddress(!sameAddress)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (sameAddress){
            setZipCodeCorrespondence(zipCode)
            setCityCorrespondence(city)
            setStreetCorrespondence(street)
            setHomeNumberCorrespondence(homeNumber)
            setFlatNumberCorrespondence(flatNumber)
        }
        let form = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            country: country,
            email: email,
            phoneNumber: phoneNumber,
            zipCode: zipCode,
            city: city,
            street: street,
            homeNumber: homeNumber,
            flatNumber: flatNumber,
            zipCodeCorrespondence: zipCodeCorrespondence,
            cityCorrespondence: cityCorrespondence,
            streetCorrespondence: streetCorrespondence,
            homeNumberCorrespondence: homeNumberCorrespondence,
            flatNumberCorrespondence: flatNumberCorrespondence
        }
        saveDataForm(form)
    }



    return(
        <div className={styles.container}>
            <p className={styles.headline}>Podaj swoje dane</p>
            <form id="form" className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.horz}>
                <div className={styles.dataWrapper}>
                    <p>Dane osobiste</p>
                    <label>Imie</label>
                    <input  type="text" onChange={(event) => setFirstName(event.target.value)} required/>
                    <label>Nazwisko</label>
                    <input  type="text" onChange={(event) => setLastName(event.target.value)} required/>
                    <label>Data urodzenia</label>
                    <input  type="date" onChange={(event) => setDateOfBirth(event.target.value)} required/>
                    <label>Kraj</label>
                    <input  type="text" onChange={(event) => setCountry(event.target.value)} required/>
                    <label>E-mail</label>
                    <input  type="email" onChange={(event) => setEmail(event.target.value)} required/>
                    <label>Nr telefonu</label>
                    <input  type="number" onChange={(event) => setPhoneNumber(event.target.value)} required/>
                </div>
                <div className={styles.dataWrapper}>
                    <p>Adres zamieszkania</p>
                    <label>Kod pocztowy</label>
                    <input  type="tel" pattern="[0-9]*" onChange={(event) => setZipCode(event.target.value)}  maxLength="5"  required/>
                    <label>Miejscowość</label>
                    <input  type="text" onChange={(event) => setCity(event.target.value)} required/>
                    <label>Ulica</label>
                    <input  type="text" onChange={(event) => setStreet(event.target.value)} required/>
                    <label>Nr domu</label>
                    <input  type="text" onChange={(event) => setHomeNumber(event.target.value)} required/>
                    <label>Nr mieszkania</label>
                    <input  onChange={(event) => setFlatNumber(event.target.value)} type="text" />
                </div>
                    <div className={styles.dataWrapper}>
                        <p>Adres zamieszkania korespondencyjny</p>
                        <div className={styles.radio}>
                            <input type="checkbox" onClick={() => selectSameAddress()} />
                            <p>Taki sam jak adres zamieszkania</p>
                        </div>
                        <label>Kod pocztowy</label>
                        <input  disabled={sameAddress} onChange={(event) => setZipCodeCorrespondence(event.target.value)} type="tel" pattern="[0-9]*"  maxLength="5"  required/>
                        <label>Miejscowość</label>
                        <input  disabled={sameAddress} onChange={(event) => setCityCorrespondence(event.target.value)} type="text" required/>
                        <label>Ulica</label>
                        <input  disabled={sameAddress} onChange={(event) => setStreetCorrespondence(event.target.value)} type="text" required/>
                        <label>Nr domu</label>
                        <input  disabled={sameAddress} onChange={(event) => setHomeNumberCorrespondence(event.target.value)}  type="text" required/>
                        <label>Nr mieszkania</label>
                        <input  disabled={sameAddress} onChange={(event) => setFlatNumberCorrespondence(event.target.value)}   type="text" />
                    </div>
                </div>
                <div className={styles.btnToRight}><input type="submit" className={styles.submit}/></div>
            </form>
        </div>
    )
}
export default RegisterForm
