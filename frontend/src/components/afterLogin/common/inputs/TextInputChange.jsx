import styles from './TextInputChange.module.css'
import {useEffect, useState} from "react";


const TextInputChange = (props) => {

    const [isInputClicked, setIsInputClicked] = useState(false)
    const changePositionInput = () => {document.getElementsByName(props.var)[0].value === "" ? setIsInputClicked(!isInputClicked) : setIsInputClicked(true)}

    useEffect(() => {
        changePositionInput()
    }, [props.clicked]);

    return(
        <div className={styles.wrapper}>
            <input
                onFocus={() => changePositionInput()}
                onBlur={() => changePositionInput()}
                onChange={(event) => props.state((prev) => ({...prev,[props.var]: event.target.value}))}
                className={styles.input}
                type={props.type}
                name={props.var}
                // value={props.disabled ? props.value : null}
                placeholder={props.disabled ? props.placeholder : ''}
                disabled={props.disabled}
                step={"0.01"}
                autoComplete="off"
            />
            <div
                className=
                    {isInputClicked ? (
                        [styles.inputText, styles.changePositionUp].join(' ')
                    ) : (
                        [styles.inputText, styles.changePositionDown].join(' ')
                    )}
            >
                {props.name}
            </div>
        </div>
    )
}
export default TextInputChange
