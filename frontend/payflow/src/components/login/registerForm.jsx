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

    const validate = () => {
        return checkPhoneNumber(phoneNumber) && checkEmail(email) && checkZipCode(zipCode) && checkZipCode(zipCodeCorrespondence) && checkHomeNumber(homeNumber) && checkHomeNumber(flatNumber) && checkHomeNumber(homeNumberCorrespondence) && checkHomeNumber(flatNumberCorrespondence) && isString(firstName) && isString(lastName) && isString(city) && isString(cityCorrespondence)
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
        const regex = /^[a-zA-Z]+$/;
        return regex.test(s);
    };



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
                    {/*<input  type="text" onChange={(event) => setCountry(event.target.value)} required/>*/}
                    <select  onChange={(event) => setCountry(event.target.value)} id="country" name="country"  className={styles.select}>
                        <option value="Afganistan">Afganistan</option>
                        <option value="Wyspy Alandzkie">Wyspy Alandzkie</option>
                        <option value="Albania">Albania</option>
                        <option value="Algieria">Algieria</option>
                        <option value="Samoa Amerykańskie">Samoa Amerykańskie</option>
                        <option value="Andora">Andora</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarktyka">Antarktyka</option>
                        <option value="Antigua i Barbuda">Antigua i Barbuda</option>
                        <option value="Argentyna">Argentyna</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbejdżan">Azerbejdżan</option>
                        <option value="Bahamy">Bahamy</option>
                        <option value="Bahrajn">Bahrajn</option>
                        <option value="Bangladesz">Bangladesz</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Białoruś">Białoruś</option>
                        <option value="Belgia">Belgia</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermudy">Bermudy</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Boliwia">Boliwia</option>
                        <option value="Bośnia i Hercegowina">Bośnia i Hercegowina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Wyspa Bouveta">Wyspa Bouveta</option>
                        <option value="Brazylia">Brazylia</option>
                        <option value="Brytyjskie Terytorium Oceanu Indyjskiego">Brytyjskie Terytorium Oceanu
                            Indyjskiego
                        </option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bułgaria">Bułgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Kambodża">Kambodża</option>
                        <option value="Kamerun">Kamerun</option>
                        <option value="Kanada">Kanada</option>
                        <option value="Republika Zielonego Przylądka">Republika Zielonego Przylądka</option>
                        <option value="Kajmany">Kajmany</option>
                        <option value="Republika Środkowoafrykańska">Republika Środkowoafrykańska</option>
                        <option value="Czad">Czad</option>
                        <option value="Chile">Chile</option>
                        <option value="Chiny">Chiny</option>
                        <option value="Wyspa Bożego Narodzenia">Wyspa Bożego Narodzenia</option>
                        <option value="Wyspy Kokosowe">Wyspy Kokosowe</option>
                        <option value="Kolumbia">Kolumbia</option>
                        <option value="Komory">Komory</option>
                        <option value="Kongo">Kongo</option>
                        <option value="Demokratyczna Republika Konga">Demokratyczna Republika Konga</option>
                        <option value="Wyspy Cooka">Wyspy Cooka</option>
                        <option value="Kostaryka">Kostaryka</option>
                        <option value="Wybrzeże Kości Słoniowej">Wybrzeże Kości Słoniowej</option>
                        <option value="Chorwacja">Chorwacja</option>
                        <option value="Kuba">Kuba</option>
                        <option value="Cypr">Cypr</option>
                        <option value="Republika Czeska">Republika Czeska</option>
                        <option value="Dania">Dania</option>
                        <option value="Dżibuti">Dżibuti</option>
                        <option value="Dominika">Dominika</option>
                        <option value="Republika Dominikańska">Republika Dominikańska</option>
                        <option value="Ekwador">Ekwador</option>
                        <option value="Egipt">Egipt</option>
                        <option value="Salwador">Salwador</option>
                        <option value="Gwinea Równikowa">Gwinea Równikowa</option>
                        <option value="Erytrea">Erytrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Etiopia">Etiopia</option>
                        <option value="Falklandy">Falklandy</option>
                        <option value="Wyspy Owcze">Wyspy Owcze</option>
                        <option value="Fidżi">Fidżi</option>
                        <option value="Finlandia">Finlandia</option>
                        <option value="Francja">Francja</option>
                        <option value="Gujana Francuska">Gujana Francuska</option>
                        <option value="Polinezja Francuska">Polinezja Francuska</option>
                        <option value="Francuskie Terytoria Południowe">Francuskie Terytoria Południowe</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Gruzja">Gruzja</option>
                        <option value="Niemcy">Niemcy</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Grecja">Grecja</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Gwadelupa">Gwadelupa</option>
                        <option value="Guam">Guam</option>
                        <option value="Gwatemala">Gwatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Gwinea">Gwinea</option>
                        <option value="Gwinea Bissau">Gwinea Bissau</option>
                        <option value="Gujana">Gujana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Wyspy Heard i McDonald">Wyspy Heard i McDonald</option>
                        <option value="Stolica Apostolska">Stolica Apostolska</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hongkong">Hongkong</option>
                        <option value="Węgry">Węgry</option>
                        <option value="Islandia">Islandia</option>
                        <option value="Indie">Indie</option>
                        <option value="Indonezja">Indonezja</option>
                        <option value="Iran">Iran</option>
                        <option value="Irak">Irak</option>
                        <option value="Irlandia">Irlandia</option>
                        <option value="Wyspa Man">Wyspa Man</option>
                        <option value="Izrael">Izrael</option>
                        <option value="Włochy">Włochy</option>
                        <option value="Jamajka">Jamajka</option>
                        <option value="Japonia">Japonia</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordania">Jordania</option>
                        <option value="Kazachstan">Kazachstan</option>
                        <option value="Kenia">Kenia</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea Północna">Korea Północna</option>
                        <option value="Korea Południowa">Korea Południowa</option>
                        <option value="Kuwejt">Kuwejt</option>
                        <option value="Kirgistan">Kirgistan</option>
                        <option value="Laos">Laos</option>
                        <option value="Łotwa">Łotwa</option>
                        <option value="Liban">Liban</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libia">Libia</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Litwa">Litwa</option>
                        <option value="Luksemburg">Luksemburg</option>
                        <option value="Makau">Makau</option>
                        <option value="Macedonia Północna">Macedonia Północna</option>
                        <option value="Madagaskar">Madagaskar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malezja">Malezja</option>
                        <option value="Malediwy">Malediwy</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Wyspy Marshalla">Wyspy Marshalla</option>
                        <option value="Martynika">Martynika</option>
                        <option value="Mauretania">Mauretania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Majotta">Majotta</option>
                        <option value="Meksyk">Meksyk</option>
                        <option value="Mikronezja">Mikronezja</option>
                        <option value="Mołdawia">Mołdawia</option>
                        <option value="Monako">Monako</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Czarnogóra">Czarnogóra</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Maroko">Maroko</option>
                        <option value="Mozambik">Mozambik</option>
                        <option value="Mjanma">Mjanma</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Holandia">Holandia</option>
                        <option value="Antyle Holenderskie">Antyle Holenderskie</option>
                        <option value="Nowa Kaledonia">Nowa Kaledonia</option>
                        <option value="Nowa Zelandia">Nowa Zelandia</option>
                        <option value="Nikaragua">Nikaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk">Norfolk</option>
                        <option value="Mariany Północne">Mariany Północne</option>
                        <option value="Norwegia">Norwegia</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestyna">Palestyna</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua-Nowa Gwinea">Papua-Nowa Gwinea</option>
                        <option value="Paragwaj">Paragwaj</option>
                        <option value="Peru">Peru</option>
                        <option value="Filipiny">Filipiny</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Polska" selected="selected">Polska</option>
                        <option value="Portugalia">Portugalia</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Katar">Katar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Rumunia">Rumunia</option>
                        <option value="Rosja">Rosja</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Święta Helena">Święta Helena</option>
                        <option value="Saint Kitts i Nevis">Saint Kitts i Nevis</option>
                    </select>
                    <label>E-mail</label>
                    <input  type="email" onChange={(event) => setEmail(event.target.value)} required/>
                    <label>Nr telefonu</label>
                    <input  type="text" maxLength="9" onChange={(event) => setPhoneNumber(event.target.value)} required/>
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
                <p id="wrong" className={styles.wrongData} >Dane są nieprawidłowe! Sprwadź je i prześlij jeszcze raz.</p>
                <div className={styles.btnToRight}><input type="submit" className={styles.submit}/></div>
            </form>
        </div>
    )
}
export default RegisterForm
