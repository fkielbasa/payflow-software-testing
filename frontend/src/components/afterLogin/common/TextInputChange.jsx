import styles from './TextInputChange.module.css'
import {useState} from "react";


const TextInputChange = (props) => {

    const [isInputClicked, setIsInputClicked] = useState(props.clicked)
    const changePositionInput = () => {document.getElementsByName(props.name)[0].value === "" ? setIsInputClicked(!isInputClicked) : setIsInputClicked(true)}

    return(
        <div className={styles.wrapper}>
            <input
                onFocus={() => changePositionInput()}
                onBlur={() => changePositionInput()}
                onChange={(event) => props.state(event.target.value)}
                className={styles.input}
                type={props.type}
                name={props.name}
                value={props.value}
                disabled={props.disabled}
                step={"0.01"}
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
