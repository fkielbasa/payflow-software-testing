import React, {useState} from 'react';
import styles from "./GeneralForm.module.css";

function GeneralForm(props) {
    const [accountNumber, setAccountNumber] = useState('');


    const [isClickedAccountNumber, setIsClickedAccountNumber] = useState(false);


    const changePositionAccountNumber = () => {
        document.getElementsByName(props.name)[0].value === ""
            ? setIsClickedAccountNumber(!isClickedAccountNumber)
            : setIsClickedAccountNumber(true);
    };


    return (
        <div className={styles.wrapper}>
            <input
                onFocus={() => changePositionAccountNumber()}
                onBlur={() => changePositionAccountNumber()}
                onChange={(event) => setAccountNumber(event.target.value)}
                className={styles.inputStyle}
                type="number"
                name={props.name}
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
                {props.name}
            </div>
        </div>
    );
}

export default GeneralForm;
