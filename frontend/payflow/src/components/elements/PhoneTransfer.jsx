import styles from '../styles/transfers/PhoneTransfer.module.css'
import {useState} from "react";
import {checkPhoneNumber, checkAmount} from "../utils/validation";

const PhoneTransfer = () => {

    const [phoneNumber, setPhoneNumber]=useState('')
    const [amount, setAmount]=useState('')
    const [desc, setDesc]=useState('')
    const [dataTransfer, setDataTransfer]=useState({})
    const [isWrongData, setIsWrongData] = useState(false)

    // Design clicking
    const [isClickedPhoneNumber, setIsClickedPhoneNumber] = useState(false)
    const [isClickedAmount, setIsClickedAmount] = useState(false)
    const [isClickedDesc, setIsClickedDesc] = useState(false)
    const changePositionPhoneNumber = () => {document.getElementsByName("phone")[0].value === "" ? setIsClickedPhoneNumber(!isClickedPhoneNumber) : setIsClickedPhoneNumber(true)}
    const changePositionAmount = () => {document.getElementsByName("amount")[0].value === "" ? setIsClickedAmount(!isClickedAmount) : setIsClickedAmount(true)}
    const changePositionDesc = () => {document.getElementsByName("desc")[0].value === "" ? setIsClickedDesc(!isClickedDesc) : setIsClickedDesc(true)}


    const handleSubmit = (e) => {
        setIsWrongData(false)
        e.preventDefault()
        if (isValidate()){
            setDataTransfer({
                phoneNumber: phoneNumber,
                amount: amount,
                description: desc,
                senderId: 1
            })
            sendTransfer()
        } else {
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
        console.log(dataTransfer)
        fetch("http://localhost:8080/api/transfers/phone-number", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataTransfer)
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(er => console.log(er))
    }

    const changeComa = (amount) => {
        if (!amount.contains(","))
            return amount
        let a = '';
        for(let i=0; i<amount.length; i++){
            if (amount[i] === ',')
                a+='.'
            else
                a+= amount[i]
        }
        return a;
    };

    return(
        <div className={styles.container}>
            <p>Przelew na telefon</p>
            <form className={styles.formPhone} onSubmit={handleSubmit} autoComplete="off">
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionPhoneNumber()} onBlur={() =>changePositionPhoneNumber()}
                           onChange={(event) => setPhoneNumber(event.target.value)}
                           className={styles.inputPhoneTransfer} type="number" name="phone" maxLength="9"  required />
                    <div className={isClickedPhoneNumber ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Nr telefonu</div>
                </div>
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionAmount()} onBlur={() =>changePositionAmount()}
                           onChange={(event) => setAmount(event.target.value)}
                           className={styles.inputPhoneTransfer} type="number" name="amount"  required />
                    <div className={isClickedAmount ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Kwota</div>
                </div>
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionDesc()} onBlur={() =>changePositionDesc()}
                           onChange={(event) => setDesc(event.target.value)}
                           className={styles.inputPhoneTransfer} type="text" name="desc" maxLength="255"  />
                    <div className={isClickedDesc ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Opis (opcjonalnie)</div>
                </div>
                <div className={styles.submitWrapper}>
                    <input className={styles.submit} type="submit"  value="Wyślij" />
                </div>
            </form>
            <p className={isWrongData ? [styles.wrongTransferText, styles.textVisible].join(' ') : [styles.wrongTransferText, styles.textHidden].join(' ')}>Podane dane są złe</p>
        </div>
    )
}
export default PhoneTransfer
