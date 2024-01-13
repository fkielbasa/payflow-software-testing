import styles from './PhoneTransfer.module.css'
import React, {useState} from "react";
import {checkPhoneNumber, checkAmount} from "../../../utils/validation"
import TextInput from "../../common/textInput";
import axios from "axios";
import {config, user} from "../../../../config/authConfig";

const SEND_TRANSFER_POST = "http://localhost:8080/api/v1/transfer/phone-number";
const PhoneTransfer = () => {

    const [phoneNumber, setPhoneNumber]=useState('')
    const [amount, setAmount]=useState('')
    const [desc, setDesc]=useState('')
    const [isWrongData, setIsWrongData] = useState(false)
    const [isSent, setIsSent] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsWrongData(false)
        if (isValidate()){
            sendTransfer()
        } else {
            setIsSent(false)
            setIsWrongData(true)
        }

    }

    const isValidate = () => {
        if (!checkAmount(amount))
            return false
        setAmount(changeComa(amount))
        if (!checkPhoneNumber(phoneNumber))
            return false
        return true
    }


    const sendTransfer = () => {
        axios
            .post(
                SEND_TRANSFER_POST,
                {
                    phoneNumber: phoneNumber,
                    amount: amount,
                    description: desc,
                    senderId: user.userId
                },
                config
            )
            .then((data) => {
                setIsSent(true)
            })
            .catch(er => {
                setIsSent(false)
                setIsWrongData(true)
            })
        document.forms['phoneTransferForm'].reset()
    }

    const changeComa = (amount) => {
        if (amount.includes(','))
            return amount.replace(/\,/, ".");
        return amount
    };

    return(
        <div className={styles.container}>
            <p>Przelew na telefon</p>
            <form name="phoneTransferForm" className={styles.formPhone} onSubmit={handleSubmit} autoComplete="off">

                <TextInput
                    state={setPhoneNumber}
                    name={"Nr telefonu"}
                    type={"number"}
                />
                <TextInput
                    state={setAmount}
                    name={"Kwota przelewu"}
                    type={"number"}
                />
                <TextInput
                    state={setDesc}
                    name={"Opis"}
                    type={"text"}
                />
                <div className={styles.submitWrapper}>
                    <input className={styles.submit} type="submit"  value="Wyślij" />
                </div>
            </form>
            <p className={isSent ? [styles.successionText, styles.textVisible].join(' ') : [styles.successionText, styles.textHidden].join(' ')}>Wysłano</p>
            <p className={isWrongData ? [styles.wrongTransferText, styles.textVisible].join(' ') : [styles.wrongTransferText, styles.textHidden].join(' ')}>Podane dane są złe</p>
        </div>
    )
}
export default PhoneTransfer
