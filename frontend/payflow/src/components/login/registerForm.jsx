import styles from './registerForm.module.css'
import {useEffect, useState} from "react";
import SelectCountry from "./selectCountry";

const RegisterForm = ({saveDataForm}) => {
    const [sameAddress, setSameAddress] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('Polska')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [homeNumber, setHomeNumber] = useState('')
    const [flatNumber, setFlatNumber] = useState('')
    const [countryAddress, setCountryAddress] = useState('Polska')
    const [zipCodeCorrespondence, setZipCodeCorrespondence] = useState('')
    const [cityCorrespondence, setCityCorrespondence] = useState('')
    const [streetCorrespondence, setStreetCorrespondence] = useState('')
    const [homeNumberCorrespondence, setHomeNumberCorrespondence] = useState('')
    const [flatNumberCorrespondence, setFlatNumberCorrespondence] = useState('')
    const [countryAddressCorrespondence, setCountryAddressCorrespondence] = useState('Polska')

    const selectSameAddress = () => {
        setSameAddress(!sameAddress)
    }

    const validate = () => {
        return checkPhoneNumber(phoneNumber) &&
            checkEmail(email) &&
            checkZipCode(zipCode) &&
            checkZipCode(zipCodeCorrespondence) &&
            checkHomeNumber(homeNumber) &&
            // checkHomeNumber(flatNumber) &&
            checkHomeNumber(homeNumberCorrespondence) &&
            // checkHomeNumber(flatNumberCorrespondence) &&
            isString(firstName) &&
            isString(lastName) &&
            isString(city) &&
            isString(cityCorrespondence)
    }


    useEffect(() => {
        handlerSameAddress()
        console.log("address changed")
    }, [sameAddress]);

    const handlerSameAddress = () => {
        setZipCodeCorrespondence((prevState )=> zipCode);
        setCityCorrespondence((prevState) =>city)
        setStreetCorrespondence(prevState => street)
        setHomeNumberCorrespondence(prevState => homeNumber)
        setFlatNumberCorrespondence(prevState => flatNumber)
        setCountryAddressCorrespondence(prev => countryAddress)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validate()){
            document.getElementById("wrong").style.display='block';
        }else {

            let form = {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                country: country,
                email: email,
                phoneNumber: phoneNumber,
                zipCode: zipCode.substring(0,2)+"-"+zipCode.substring(2),
                city: city,
                street: street,
                homeNumber: homeNumber,
                flatNumber: flatNumber,
                countryAddress: countryAddress,
                zipCodeCorrespondence: zipCodeCorrespondence.substring(0,2)+"-"+zipCodeCorrespondence.substring(2),
                cityCorrespondence: cityCorrespondence,
                streetCorrespondence: streetCorrespondence,
                homeNumberCorrespondence: homeNumberCorrespondence,
                flatNumberCorrespondence: flatNumberCorrespondence,
                countryAddressCorrespondence: countryAddressCorrespondence
            }
            saveDataForm(form)
        }
    }

    const checkPhoneNumber = (number) => {
        const regex = /^\d{9}$/;
        return regex.test(number);
    };
    const checkEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const checkZipCode = (code) => {
        const regex = /^\d{5}$/;
        return regex.test(code);
    };
    const checkHomeNumber = (number) => {
        const regex = /^[a-zA-Z0-9\s]+$/;
        return regex.test(number);
    };
    const isString = (s) => {
        const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
        return regex.test(s);
    };



    return(
        <div className={styles.container}>
            <p className={styles.headline}>Podaj swoje dane</p>
            <form id="form" className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.horz}>
                <div className={styles.dataWrapper}>
                    <p>Dane osobowe</p>
                    <label>Imie</label>
                    <input  type="text" maxLength="50" onChange={(event) => setFirstName(event.target.value)} required/>
                    <label>Nazwisko</label>
                    <input  type="text" maxLength="50" onChange={(event) => setLastName(event.target.value)} required/>
                    <label>Data urodzenia</label>
                    <input  type="date" onChange={(event) => setDateOfBirth(event.target.value)} required/>
                    <SelectCountry setCountry={setCountry} />
                    <label>E-mail</label>
                    <input  type="email"  maxLength="100" onChange={(event) => setEmail(event.target.value)} required/>
                    <label>Nr telefonu</label>
                    <input type="text" minLength="9" maxLength="9" onChange={(event) => setPhoneNumber(event.target.value)} required/>
                </div>
                <div className={styles.dataWrapper}>
                    <p>Adres zamieszkania</p>
                    <label>Kod pocztowy</label>
                    <input  type="text" id="postalCode"  disabled={sameAddress} pattern="[0-9]*" onChange={(event) => setZipCode(event.target.value)} minLength="5"  maxLength="5"  required/>
                    <label>Miejscowość</label>
                    <input  type="text" disabled={sameAddress} maxLength="50" onChange={(event) => setCity(event.target.value)} required/>
                    <label>Ulica</label>
                    <input  type="text" disabled={sameAddress} maxLength="50" onChange={(event) => setStreet(event.target.value)} required/>
                    <label>Nr domu</label>
                    <input  type="text" disabled={sameAddress} maxLength="10" onChange={(event) => setHomeNumber(event.target.value)} required/>
                    <label>Nr mieszkania</label>
                    <input  type="text" disabled={sameAddress} maxLength="10" onChange={(event) => setFlatNumber(event.target.value)}  />
                    <SelectCountry disabled={sameAddress} setCountry={setCountryAddress} />

                </div>
                    <div className={styles.dataWrapper}>
                        <p>Adres zamieszkania korespondencyjny</p>

                        <label>Kod pocztowy</label>
                        <input  disabled={sameAddress} onChange={(event) => setZipCodeCorrespondence(event.target.value)} type="text" pattern="[0-9]*"  maxLength="5"  required/>
                        <label>Miejscowość</label>
                        <input  maxLength="50" disabled={sameAddress} onChange={(event) => setCityCorrespondence(event.target.value)} type="text" required/>
                        <label>Ulica</label>
                        <input  maxLength="50" disabled={sameAddress} onChange={(event) => setStreetCorrespondence(event.target.value)} type="text" required/>
                        <label>Nr domu</label>
                        <input  maxLength="10" disabled={sameAddress} onChange={(event) => setHomeNumberCorrespondence(event.target.value)}  type="text" required/>
                        <label>Nr mieszkania</label>
                        <input  maxLength="10" disabled={sameAddress} onChange={(event) => setFlatNumberCorrespondence(event.target.value)}   type="text" />
                        <SelectCountry disabled={sameAddress} setCountry={setCountryAddressCorrespondence} />
                        <div className={styles.radio}>
                            <input type="checkbox"  onClick={() => selectSameAddress()} />
                            <p>Taki sam jak adres zamieszkania</p>
                        </div>
                    </div>
                </div>
                <p id="wrong" className={styles.wrongData} >Dane są nieprawidłowe! Sprwadź je i prześlij jeszcze raz.</p>
                <div className={styles.btnToCenter}><input type="submit" className={styles.submit}/></div>
            </form>
        </div>
    )
}
export default RegisterForm
