import styles from "./textInput.module.css";
import {useState} from "react";

const TextInput = (props) => {

    const [isInputClicked, setIsInputClicked] = useState(false)
    const changePositionInput = () => {document.getElementsByName(props.name)[0].value === "" ? setIsInputClicked(!isInputClicked) : setIsInputClicked(true)}

    return(
        <div className={styles.wrapper}>
            <input
                onFocus={() => changePositionInput()}
                onBlur={() => changePositionInput()}
                onChange={(event) => props.state(event.target.value)}
                className={styles.input} type={props.type} name={props.name}
                required
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
export default TextInput
