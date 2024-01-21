import React, {useEffect, useState} from "react";
import styles from './CardDetails.module.css'

const ActivateButton = (props) => {
    return(
    <button className={styles.button} onClick={props.openPopUp}>
        Aktywuj kartę
    </button>
    );
}
export default ActivateButton;
