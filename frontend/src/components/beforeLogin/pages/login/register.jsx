import styles from './register.module.css'
import ChoiceCard from "../choice/choiceCard";
import {useState} from "react";
import AccountCard from "../account/accountCard";
import bank from '../../../../assets/beforeLogin/banking.png'
import card from '../../../../assets/beforeLogin/debit-card.png'
import RegisterForm from "./registerForm";
import PasswordForm from "./passwordForm";
import axios from "axios";



const REGISTER_URL = "http://localhost:8080/api/v1/auth/register"

const Register = () => {
    const [account, setAccount] = useState(true)
    const [dataAccount, setDataAccount] = useState(false)
    const [logAccount, setLogAccount] = useState(false)
    const [summary, setSummary] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    const [isStandardAccount, setIsStandardAccount] = useState(true)
    const [dataForm, setDataForm] = useState({})
    const [password, setPassword] = useState('')

    const registerData = {
        firstName: dataForm.firstName,
        lastName: dataForm.lastName,
        dateOfBirth: dataForm.dateOfBirth,
        nationality: dataForm.country,
        email: dataForm.email,
        phoneNumber: dataForm.phoneNumber,
        zipCode: dataForm.zipCode,
        city: dataForm.city,
        street: dataForm.street,
        homeNumber: dataForm.homeNumber,
        apartmentNumber: dataForm.apartmentNumber,
        countryAddress: dataForm.countryAddress,
        zipCodeCorrespondence: dataForm.zipCodeCorrespondence,
        cityCorrespondence: dataForm.cityCorrespondence,
        streetCorrespondence: dataForm.streetCorrespondence,
        homeNumberCorrespondence: dataForm.homeNumberCorrespondence,
        apartmentNumberCorrespondence: dataForm.apartmentNumberCorrespondence,
        countryAddressCorrespondence: dataForm.countryAddressCorrespondence,
        accountType: isStandardAccount ? 'STANDARD' : 'INTENSIVE',
        password: password
    }

    const selectAccount = (choice) => {
        setIsStandardAccount(choice)
        changePage()
        setDataAccount(true)
    }


    const changePage = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }

    const saveDataForm = (data) => {
        setDataForm(data)
        changePage()
        console.log(data)
        setLogAccount(true)
    }

    const savePassword = (pass) => {
        setPassword(pass)
        changePage()
        setSummary(true)
    }

    const renderAccounts = () => {
        return (
            <div className={styles.accountWrapper}>
                <div onClick={() => selectAccount(true)}><AccountCard title={"Standardowe konto "}  img={bank} /></div>
                <div onClick={() => selectAccount(false)}><AccountCard title={"Konto Intensive "}  img={card}/></div>
            </div>
        )
    }

    const renderDataForm = () => {
        return(
            <div className={styles.dataWrapper}>
                <RegisterForm saveDataForm={saveDataForm} />
            </div>
        )
    }

    const renderSecurity = () => {
        return(
            <div>
                <PasswordForm savePassword={savePassword} />
            </div>
        )
    }



    const handleOpenAccount = () => {
        axios
            .post(REGISTER_URL,
                registerData
            )
            .then((response) => {
                console.log(response.data)
                changePage()
            })
            .catch(er => console.log(er))
    }

    const renderSummary = () => {
        return(
            <div className={styles.summaryContainer}>
                <div className={styles.wrapperPrint}>{isStandardAccount ? <AccountCard title={"Zwykłe konto "}  img={bank} /> : <AccountCard title={"Konto Intensive "}  img={card}/>}</div>
                <div>
                    <div className={styles.vertical}>
                        <div className={styles.wrapperPrint}>
                            <p><b>Dane osobiste</b></p>
                            <p>Imię: <b>{dataForm.firstName}</b></p>
                            <p>Nazwisko: <b>{dataForm.lastName}</b></p>
                            <p>Data urodzenia: <b>{dataForm.dateOfBirth}</b></p>
                            <p>Kraj: <b>{dataForm.country}</b></p>
                            <p>E-mail: <b>{dataForm.email}</b></p>
                            <p>Nr telefonu: <b>{dataForm.phoneNumber}</b></p>
                        </div>
                        <div className={styles.wrapperPrint}>
                            <p><b>Adres zamieszkania</b></p>
                            <p>Kod pocztowy: <b>{dataForm.zipCode}</b></p>
                            <p>Miejscowość: <b>{dataForm.city}</b></p>
                            <p>Ulica: <b>{dataForm.street}</b></p>
                            <p>Nr domu/lokalu: <b>{dataForm.homeNumber}</b></p>
                            <p>Nr mieszkania: <b>{dataForm.apartmentNumber}</b></p>
                            <p>Kraj: <b>{dataForm.countryAddress}</b></p>
                        </div>
                        <div className={styles.wrapperPrint}>
                            <p><b>Adres korespondencyjny</b></p>
                            <p>Kod pocztowy: <b>{dataForm.zipCodeCorrespondence}</b></p>
                            <p>Miejscowość: <b>{dataForm.cityCorrespondence}</b></p>
                            <p>Ulica: <b>{dataForm.streetCorrespondence}</b></p>
                            <p>Nr domu/lokalu: <b>{dataForm.homeNumberCorrespondence}</b></p>
                            <p>Nr mieszkania: <b>{dataForm.apartmentNumberCorrespondence}</b></p>
                            <p>Kraj: <b>{dataForm.countryAddressCorrespondence}</b></p>
                        </div>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button onClick={handleOpenAccount} className={styles.applyBtn}>Potwierdź dane i otwórz konto</button>
                    </div>
                </div>
            </div>
        )
    }

    const renderNotFound = () => {
        return (
            <div>
                <p>Ups... Nie znaleziono</p>
        </div>
        )
    }

    const renderRegistered =() =>{
        return (
            <div className={styles.registered}>
                <h3>Twoje konto zostało utworzone!</h3>
                <p>Na adres <b>{dataForm.email}</b> wysłaliśmy ci potrzebne do logowania dane, proszę sprawdź swoją skrzynkę.</p>
            </div>
        )
    }

    const renderPage = () => {
        switch (currentPage){
            case 0:
                return renderAccounts()
            case 1:
                return renderDataForm()
            case 2:
                return renderSecurity()
            case 3:
                return renderSummary()
            case 4:
                return renderRegistered()
            default:
                return renderNotFound()
        }
    }
    return (
        <div className={styles.container}>
            <h1>Otwieram konto</h1>
            <div className={styles.choiceWrapper}>
                <ChoiceCard filled={account} title={"Wybór konta"}/>
                <ChoiceCard filled={dataAccount} title={"Dane"} />
                <ChoiceCard filled={logAccount} title={"Bezpieczeństwo"} />
                <ChoiceCard filled={summary} title={"Podsumowanie"} />
            </div>
            <hr/>
            <div className={styles.data}>
                {renderPage()}
            </div>

        </div>
    )
}
export default Register
