import styles from './register.module.css'
import ChoiceCard from "../cards/choiceCard";
import {useState} from "react";
import AccountCard from "../cards/accountCard";
import bank from '../../assets/banking.png'
import card from '../../assets/debit-card.png'
import RegisterForm from "./registerForm";
import PasswordForm from "./passwordForm";

const Register = () => {
    const [account, setAccount] = useState(true)
    const [dataAccount, setDataAccount] = useState(false)
    const [logAccount, setLogAccount] = useState(false)
    const [summary, setSummary] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    const [isNormalAccount, setIsNormalAccount] = useState(true)
    const [dataForm, setDataForm] = useState({})
    const [password, setPassword] = useState('')


    const selectAccount = (choice) => {
        setIsNormalAccount(choice)
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
                <div onClick={() => selectAccount(true)}><AccountCard title={"Zwykłe konto "}  img={bank} /></div>
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
      console.log("DONE")
    }

    const renderSummary = () => {
        return(
            <div className={styles.summaryContainer}>
                <div className={styles.wrapperPrint}>{isNormalAccount ? <AccountCard title={"Zwykłe konto "}  img={bank} /> : <AccountCard title={"Konto Intensive "}  img={card}/>}</div>
                <div>
                    <div className={styles.horiz}>
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
                            <p>Nr domu: <b>{dataForm.homeNumber}</b></p>
                            <p>Nr mieszkania: <b>{dataForm.flatNumber}</b></p>
                        </div>
                        <div className={styles.wrapperPrint}>
                            <p><b>Adres korespondencyjny</b></p>
                            <p>Kod pocztowy: <b>{dataForm.zipCodeCorrespondence}</b></p>
                            <p>Miejscowość: <b>{dataForm.cityCorrespondence}</b></p>
                            <p>Ulica: <b>{dataForm.streetCorrespondence}</b></p>
                            <p>Nr domu: <b>{dataForm.homeNumberCorrespondence}</b></p>
                            <p>Nr mieszkania: <b>{dataForm.flatNumberCorrespondence}</b></p>
                        </div>
                    </div>
                    <div className={styles.horiz}>
                        <button onClick={handleOpenAccount} className={styles.applyBtn}>Potwierdź dane i otwórz konto</button>
                    </div>
                </div>
            </div>
        )
    }

    const renderNotFound = () => {
        return (
            <div>

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
