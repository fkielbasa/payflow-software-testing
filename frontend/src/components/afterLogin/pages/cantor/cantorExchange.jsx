import React, {useEffect, useState} from "react";
import axios from "axios";
import {config, user} from "../../../../config/authConfig";
import SelectAccountNumber from "../transfers/SelectAccountNumber";
import styles from './cantorExchange.module.css'

const CantorExchange = () => {
    const [amount, setAmount]=useState(0.0)
    const [data, setData] = useState([])
    const [fromAccount, setFromAccount] = useState(0)
    const [toAccount, setToAccount] = useState(0)
    const [error,setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')


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

    useEffect(() => {


        getAccountNumbers()
    }, []);


    const exchangeBalance = (e) => {
        e.preventDefault()
        if (fromAccount === toAccount || fromAccount === 0 || toAccount === 0){
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
                getAccountNumbers()
            })
            .catch((error) => {
                setError(true)
                setErrorMsg("Operacja nie powiodła się")
            })
        document.getElementById("formCantor").reset();
    }

    return(
        <div className={styles.container}>
            <h3>Kantor wymiany walut</h3>
            <form
                id={"formCantor"}
                onSubmit={exchangeBalance}
            >
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
                <div className={styles.inputWrapper}>
                    <input
                        type="number"
                        step={"0.01"}
                        className={styles.inputAmount}
                        placeholder={"0"}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <div className={styles.submitWrapper}>
                    <input type="submit"/>
                </div>
                {error && (
                    <p className={styles.errorMsg}>{errorMsg}</p>
                )}
            </form>
        </div>
    )
}
export default CantorExchange
