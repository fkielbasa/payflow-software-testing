import styles from './newCredit.module.css';
import TextInputChange from "../../common/inputs/TextInputChange";
import SelectAccountNumber from "../transfers/SelectAccountNumber";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {config, user} from "../../../../config/authConfig";
import TextInput from "../../common/inputs/textInput";
import {BASE_URL} from "../../../../config/shared";
import Alert from "../../common/alerts/alert";
import toast from "react-hot-toast";

const NewCredit = (props) => {
    const INTREST_RATE = 2;
    const currentDate = new Date()
    const [dataAccounts, setDataAccounts] = useState([])
    const [fromAccount, setFromAccount] = useState('')
    const [amount, setAmount] = useState('')
    const [monthsNum, setMonthsNum] = useState('1')
    const [toDate, setToDate] = useState(currentDate.toLocaleDateString())
    const [userData, setUserData] = useState({})

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
                    setDataAccounts(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        const getUserData = () => {
            axios
                .get(
                    `${BASE_URL}/api/v1/users/${user.userId}`,
                    config
                )
                .then(res => {
                    setUserData(res.data)
                })
                .catch(er => {

                })
        }
        getUserData()
        getAccountNumbers()
    }, []);

    const addNewCredit = () => {
        if (amount === '' || fromAccount === ''){
            toast('Pola nie mogą być puste')
            return
        }
        const account = dataAccounts.filter((a) => a.number === fromAccount)[0]

        const [dzien, miesiac, rok] = toDate.split('.');
        const formattedDate = `${rok}-${miesiac}-${dzien < 10 ? `0${dzien}` : dzien}`;
        axios
            .post(
                `${BASE_URL}/api/v1/numbers/${account.id}/loan`,
                {
                    amount: amount,
                    endDate: formattedDate,
                    interestRate: INTREST_RATE
                },
                config
            ).then((res) => {
            toast('Pomyślnie dodano kredyt')
            })
            .catch((err) => {
                toast('Dodanie kredytu nie powiodło się')
            })
    }

    return(
        <div className={styles.container}>
            <Alert />
            <header className={styles.headerWrapper}>
                <h3>Formularz przyznania kredytu</h3>
                <span></span>
            </header>
            <div className={styles.formWrapper}>
                <p className={styles.hardText}>Dane kredytobiorcy:</p>
                <div className={styles.infoWrapper}>
                    <span>*</span>
                    <TextInputChange
                        name={"Nazwisko"}
                        var={"t"}
                        placeholder={userData.lastName}
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
                        placeholder={userData.firstName}
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
                        placeholder={userData.email}
                        state={""}
                        type={"text"}
                        clicked={true}
                        disabled={true}
                    />
                </div>
                <div className={styles.accountWrapper}>
                    <p>Wybór rachunku:</p>
                    <SelectAccountNumber
                        data={dataAccounts}
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
                        <p>Wybierz okres kredytu: </p>
                        <div className={styles.dateWrapper}>
                            <input
                                className={styles.inputRange}
                                type="range"
                                min={"1"}
                                max={"24"}
                                defaultValue={"1"}
                                onChange={(event) => calcDate(event.target.value)}
                            />
                            <p>Ilość miesięcy: <span>{monthsNum}</span></p>
                            <p>Data: <span>{toDate}</span></p>
                        </div>
                    </div>
                    <div>
                        <p>Oprocentowanie wynosi: {INTREST_RATE}%</p>
                    </div>
                    <div className={styles.submitWrapper}>
                        <button
                            onClick={addNewCredit}
                            className={styles.submit}
                        >
                            Prześlij
                        </button>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default NewCredit
