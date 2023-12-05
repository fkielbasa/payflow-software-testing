import styles from './register.module.css'
import ChoiceCard from "../cards/choiceCard";
import {useState} from "react";
import AccountCard from "../cards/accountCard";
import bank from '../../assets/banking.png'
import card from '../../assets/debit-card.png'
import RegisterForm from "./registerForm";

const Register = () => {
    const [account, setAccount] = useState(true)
    const [dataAccount, setDataAccount] = useState(false)
    const [logAccount, setLogAccount] = useState(false)
    const [summary, setSummary] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    const [isNormalAccount, setIsNormalAccount] = useState(true)
    const [dataForm, setDataForm] = useState({})


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

    const renderNotFound = () => {
        return (<div>
            er
        </div>)
    }

    const renderPage = () => {
        switch (currentPage){
            case 0:
                return renderAccounts()
            case 1:
                return renderDataForm()
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
