import React, { useState } from 'react';
import styles from "./GeneralForm.module.css";

function GeneralForm(props) {
    const [formInput, setFormInput] = useState('');
    const [isClickedFormInput, setIsClickedFormInput] = useState(false);
    let requiredDot;

    const changePositionFormInput = () => {
        document.getElementsByName(props.name)[0].value === ""
            ? setIsClickedFormInput(!isClickedFormInput)
            : setIsClickedFormInput(true);
    };

    if (props.required) {
        requiredDot = '*';
    } else {
        requiredDot = '';
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.dot}>
                {requiredDot}
            </div>
            <input
                onFocus={() => changePositionFormInput()}
                onBlur={() => changePositionFormInput()}
                onChange={(event) => setFormInput(event.target.value)}
                className={styles.inputStyle}
                type={props.type}
                name={props.name}
                maxLength={props.maxLength}
                minLength={props.minLength}
                required={props.required}
            />
            <div
                className={
                    props.type === 'date'
                        ? [styles.inputText, styles.changePositionUp].join(' ')
                        : isClickedFormInput
                            ? [styles.inputText, styles.changePositionUp].join(' ')
                            : [styles.inputText, styles.changePositionDown].join(' ')
                }
            >
                {props.showText}
            </div>
        </div>
    );
}

export default GeneralForm;
