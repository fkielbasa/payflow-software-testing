import React, {useEffect, useState} from "react";
import axios from "axios";
import {config, user} from "../../../../config/authConfig";
import SelectAccountNumber from "./SelectAccountNumber";
import styles1 from "./PhoneTransfer.module.css";
import styles from './cantor.module.css'

const Cantor = () => {
    const [amount, setAmount]=useState(0.0)
    const [data, setData] = useState([])
    const [fromAccount, setFromAccount] = useState(0)
    const [toAccount, setToAccount] = useState(0)
    const [isClickedAmount, setIsClickedAmount] = useState(false)
    const [error,setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const changePositionAmount = () => {document.getElementsByName("amount")[0].value === "" ? setIsClickedAmount(!isClickedAmount) : setIsClickedAmount(true)}

    useEffect(() => {
        const getAccountNumbers = () => {
            axios
                .get(`http://localhost:8080/api/v1/users/${user.userId}/numbers`,
                config
                )
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        getAccountNumbers()
    }, []);


    const exchangeBalance = (e) => {
        e.preventDefault()
        if (fromAccount === toAccount){
            setError(true)
            setErrorMsg("Wybierz dwa różne rachunki")
            return
        }
        axios
            .post(`http://localhost:8080/api/v1/transfer/exchange`,
                {
                    fromAccount: fromAccount,
                    toAccount: toAccount,
                    amount: amount
                },
                config
                )
            .then((response) => {
                setError(false)
            })
            .catch((error) => {
                setError(true)
                setErrorMsg("Operacja nie powiodła się")
            })
    }

    return(
        <div className={styles.container}>
            <h3>Kantor wymiany walut</h3>
            <form onSubmit={exchangeBalance}>
                <p>Z konta:</p>
                <SelectAccountNumber
                    data={data}
                    selectedAccounts={setFromAccount}
                />
                <p>Na konto:</p>
                <SelectAccountNumber
                    data={data}
                    selectedAccounts={setToAccount}
                />
                <p>Kwota:</p>
                <div className={styles1.wrapper}>
                    <input onFocus={() => changePositionAmount()} onBlur={() => changePositionAmount()}
                           onChange={(event) => setAmount(event.target.value)}
                           className={styles1.inputPhoneTransfer}
                           type="number"
                           step="0.01"
                           name="amount"
                           placeholder={"0,00"}
                           required
                    />
                    <div
                        className={isClickedAmount ? [styles1.inputText, styles1.changePositionUp].join(' ') : [styles1.inputText, styles1.changePositionDown].join(' ')}>Kwota
                    </div>
                </div>
                <div className={styles.submitWrapper}>
                    <input type="submit"/>
                </div>
                {error && (
                    <p>{errorMsg}</p>
                )}
            </form>
        </div>
    )
}
export default Cantor
