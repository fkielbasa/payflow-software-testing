import React, {useEffect, useState} from "react";
import styles from './CardDetails.module.css'

const CustomButton = (props) => {
    return(
    <button className={styles.button} style={{backgroundColor: props.color}} onClick={props.openPopUp}>
        {props.content}
    </button>
    );
}
export default CustomButton;
