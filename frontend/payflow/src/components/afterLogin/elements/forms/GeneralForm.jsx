import React, {useState} from 'react';
import styles from "./GeneralForm.module.css";

function GeneralForm(props) {
    const [formInput, setFormInput] = useState('');


    const [isClickedFormInput, setIsClickedFormInput] = useState(false);


    const changePositionFormInput = () => {
        document.getElementsByName(props.name)[0].value === ""
            ? setIsClickedFormInput(!isClickedFormInput)
            : setIsClickedFormInput(true);
    };


    return (
        <div className={styles.wrapper}>
            <input
                onFocus={() => changePositionFormInput()}
                onBlur={() => changePositionFormInput()}
                onChange={(event) => setFormInput(event.target.value)}
                className={styles.inputStyle}
                type={props.type}
                name={props.name}
                maxLength={props.maxLength}
                required={props.required}
            />
            <div
                className={
                    isClickedFormInput
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
