import React, {useState} from 'react';
import styles from "./TransfersAccountNumber.module.css";
import TextInput from "../../common/textInput";


function TransfersAccountNumber() {
    const [accountNumber, setAccountNumber] = useState('');
    const [recipient, setRecipient] = useState('');
    const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');



    const handleSubmit = () => {
        console.log('Przelew wysłany');
        alert('Przelew wysłany');
    };

    return (
        <div className={styles.transferAccountNumberContainer}>
            <h3>Na numer konta</h3>
            <form className={styles.formStyle} onSubmit={handleSubmit}>
                <TextInput
                    state={setAccountNumber}
                    name={"Number konta"}
                    type={"number"}
                />
                <TextInput
                    state={setRecipient}
                    name={"Odbiorca"}
                    type={"text"}
                />
                <TextInput
                    state={setRecipientAccountNumber}
                    name={"Numer konta odbiorcy"}
                    type={"text"}
                />
                <TextInput
                    state={setTitle}
                    name={"Tytuł"}
                    type={"text"}
                />
                <TextInput
                    state={setAmount}
                    name={"Kwota"}
                    type={"number"}
                />
                <div className={styles.submitWrapper}>
                    <input className={styles.submit} type="submit" value="Wyślij"/>
                </div>
            </form>
        </div>
    );
}

export default TransfersAccountNumber;
