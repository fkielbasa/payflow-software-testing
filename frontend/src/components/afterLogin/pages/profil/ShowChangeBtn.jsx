import styles from "./ShowChangeBtn.module.css";
import React from "react";

const ShowChangeBtn = (props) => {

    return(
        <div>
            {props.disable ? (
                <button
                    className={styles.btn}
                    onClick={props.changeDisable}
                >
                    Zmień
                </button>
            ) : (
                <button
                    className={styles.btn}
                    onClick={props.submitData}
                >
                    Zapisz
                </button>
            )
            }
        </div>
    )
}
export default ShowChangeBtn
