import React, {useState} from 'react';
import styles from "./TransfersAccountNumber.module.css";


function TransfersAccountNumber() {
    const [accountNumber, setAccountNumber] = useState('');
    const [recipient, setRecipient] = useState('');
    const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [transferDay, setTransferDay] = useState('');

    const [isClickedAccountNumber, setIsClickedAccountNumber] = useState(false);
    const [isClickedRecipient, setIsClickedRecipient] = useState(false);
    const [isClickedRecipientAccountNumber, setIsClickedRecipientAccountNumber] = useState(false);
    const [isClickedTitle, setIsClickedTitle] = useState(false);
    const [isClickedAmount, setIsClickedAmount] = useState(false);
    const [isClickedCurrency, setIsClickedCurrency] = useState(false);
    const [isClickedTransferDay, setIsClickedTransferDay] = useState(false);

    const changePositionAccountNumber = () => {
        document.getElementsByName("account")[0].value === ""
            ? setIsClickedAccountNumber(!isClickedAccountNumber)
            : setIsClickedAccountNumber(true);
    };

    const changePositionRecipient = () => {
        document.getElementsByName("recipient")[0].value === ""
            ? setIsClickedRecipient(!isClickedRecipient)
            : setIsClickedRecipient(true);
    };

    const changePositionRecipientAccountNumber = () => {
        document.getElementsByName("recipientAccountNumber")[0].value === ""
            ? setIsClickedRecipientAccountNumber(!isClickedRecipientAccountNumber)
            : setIsClickedRecipientAccountNumber(true);
    };

    const changePositionTitle = () => {
        document.getElementsByName("title")[0].value === ""
            ? setIsClickedTitle(!isClickedTitle)
            : setIsClickedTitle(true);
    };

    const changePositionAmount = () => {
        document.getElementsByName("amount")[0].value === ""
            ? setIsClickedAmount(!isClickedAmount)
            : setIsClickedAmount(true);
    };

    const changePositionCurrency = () => {
        document.getElementsByName("currency")[0].value === ""
            ? setIsClickedCurrency(!isClickedCurrency)
            : setIsClickedCurrency(true);
    };

    const changePositionTransferDay = () => {
        document.getElementsByName("transferDay")[0].value === ""
            ? setIsClickedTransferDay(!isClickedTransferDay)
            : setIsClickedTransferDay(true);
    };

    const handleSubmit = () => {
        console.log('Przelew wysłany');
        alert('Przelew wysłany');
    };

    return (
        <div className={styles.transferAccountNumberContainer}>
            <h3>Na numer konta</h3>
            <form className={styles.formStyle} onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionAccountNumber()}
                        onBlur={() => changePositionAccountNumber()}
                        onChange={(event) => setAccountNumber(event.target.value)}
                        className={styles.inputStyle}
                        type="number"
                        name="account"
                        maxLength="26"
                        required
                    />
                    <div
                        className={
                            isClickedAccountNumber
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionDown].join(' ')
                        }
                    >
                        Numer konta
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionRecipient()}
                        onBlur={() => changePositionRecipient()}
                        onChange={(event) => setRecipient(event.target.value)}
                        className={styles.inputStyle}
                        type="text"
                        name="recipient"
                        required
                    />
                    <div
                        className={
                            isClickedRecipient
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionDown].join(' ')
                        }
                    >
                        Odbiorca
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionRecipientAccountNumber()}
                        onBlur={() => changePositionRecipientAccountNumber()}
                        onChange={(event) => setRecipientAccountNumber(event.target.value)}
                        className={styles.inputStyle}
                        type="number"
                        name="recipientAccountNumber"
                        maxLength="26"
                        required
                    />
                    <div
                        className={
                            isClickedRecipientAccountNumber
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionDown].join(' ')
                        }
                    >
                        Numer konta odbiorcy
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionTitle()}
                        onBlur={() => changePositionTitle()}
                        onChange={(event) => setTitle(event.target.value)}
                        className={styles.inputStyle}
                        type="text"
                        name="title"
                        maxLength="30"
                        required
                    />
                    <div
                        className={
                            isClickedTitle
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionDown].join(' ')
                        }
                    >
                        Tytuł
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionAmount()}
                        onBlur={() => changePositionAmount()}
                        onChange={(event) => setAmount(event.target.value)}
                        className={styles.inputStyle}
                        type="number"
                        name="amount"
                        step="0.01"
                        required
                    />
                    <div
                        className={
                            isClickedAmount
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionDown].join(' ')
                        }
                    >
                        Kwota
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionCurrency()}
                        onBlur={() => changePositionCurrency()}
                        onChange={(event) => setCurrency(event.target.value)}
                        className={styles.inputStyle}
                        type="text"
                        name="currency"
                        required
                    />
                    <div
                        className={
                            isClickedCurrency
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionDown].join(' ')
                        }
                    >
                        Waluta
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <input
                        onFocus={() => changePositionTransferDay()}
                        onBlur={() => changePositionTransferDay()}
                        onChange={(event) => setTransferDay(event.target.value)}
                        className={styles.inputStyle}
                        type="date"
                        name="transferDay"
                        required
                    />
                    <div
                        className={
                            isClickedTransferDay
                                ? [styles.inputText, styles.changePositionUp].join(' ')
                                : [styles.inputText, styles.changePositionUp].join(' ')
                        }
                    >
                        Data przelewu
                    </div>
                </div>
                <div className={styles.submitWrapper}>
                    <input className={styles.submit} type="submit" value="Wyślij"/>
                </div>
            </form>
        </div>
    );
}

export default TransfersAccountNumber;
