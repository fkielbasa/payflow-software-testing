import React, {useEffect, useState} from "react";
import styles from './CardDetails.module.css'

const CustomButton = (props) => {
    return(
    <button className={styles.button} style={{backgroundColor: props.color}} onClick={props.onClick}>
        {props.content}
    </button>
    );
}
export default CustomButton;
