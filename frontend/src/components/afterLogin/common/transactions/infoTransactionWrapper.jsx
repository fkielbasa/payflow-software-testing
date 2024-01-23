import React from "react";
import styles from './infoTransactionWrapper.module.css'
const InfoTransactionWrapper = (props) => {

    return(
        <div className={styles.container}>
            <span>{props.prefix}</span>
            <p>{props.text}</p>
        </div>
    )
}
export default InfoTransactionWrapper
