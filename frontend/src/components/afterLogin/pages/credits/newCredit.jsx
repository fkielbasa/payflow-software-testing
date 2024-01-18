import styles from './newCredit.module.css';
import TextInputChange from "../../common/inputs/TextInputChange";
import SelectAccountNumber from "../transfers/SelectAccountNumber";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {config, user} from "../../../../config/authConfig";
import TextInput from "../../common/inputs/textInput";

const NewCredit = (props) => {
    const currentDate = new Date()
    const [data, setData] = useState([])
    const [fromAccount, setFromAccount] = useState('')
    const [amount, setAmount] = useState('')
    const [monthsNum, setMonthsNum] = useState('1')
    const [toDate, setToDate] = useState('')


    const calcDate = (value) => {
        setMonthsNum(value)
        const d = new Date(currentDate)
        d.setMonth(currentDate.getMonth() + parseInt(value))
        setToDate(d.toLocaleDateString())
    }

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

    return(
        <div>
            <header className={styles.headerWrapper}>
                <h3>Formularz przyznania kredytu</h3>
                <span></span>
            </header>
            <div>
                <p className={styles.hardText}>Dane kredytobiorcy:</p>
                <div className={styles.infoWrapper}>
                    <span>*</span>
                    <TextInputChange
                        name={"Nazwisko"}
                        var={"t"}
                        placeholder={"test"}
                        state={""}
                        type={"text"}
                        clicked={true}
                        disabled={true}
                    />
                </div>
                <div className={styles.infoWrapper}>
                    <span>*</span>
                    <TextInputChange
                        name={"Imię"}
                        var={"t"}
                        placeholder={"test"}
                        state={""}
                        type={"text"}
                        clicked={true}
                        disabled={true}
                    />
                </div>
                <div className={styles.infoWrapper}>
                    <span>*</span>
                    <TextInputChange
                        name={"Email"}
                        var={"t"}
                        placeholder={"test@wp.pl"}
                        state={""}
                        type={"text"}
                        clicked={true}
                        disabled={true}
                    />
                </div>
            </div>
            <div className={styles.accountWrapper}>
                <p>Wybór rachunku:</p>
                <SelectAccountNumber
                    data={data}
                    selectedAccounts={setFromAccount}
                />
            </div>
            <div className={styles.detailsWrapper}>
                <TextInput
                    name={"Kwota"}
                    state={setAmount}
                    type={"number"}
                />
                <div>
                    <p>Wybierz: </p>
                    <div className={styles.dateWrapper}>
                        <input
                            type="range"
                            min={"1"}
                            max={"24"}
                            defaultValue={"1"}
                            onChange={(event) => calcDate(event.target.value)}
                        />
                        <p>Ilość miesięcy: {monthsNum}</p>
                        <p>Data: {toDate}</p>
                    </div>
                </div>
                <div>
                    <p>Intrest rate</p>
                    <input type="range"/>
                </div>
            </div>


        </div>
    )
}
export default NewCredit
