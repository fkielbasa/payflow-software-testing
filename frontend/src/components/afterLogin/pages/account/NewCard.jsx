import React, {useEffect} from 'react';
import styles from "./Account.module.css";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";
const Card = (props) => {
        const createNewCard = () => {
            axios
                .post(`${BASE_URL}/api/v1/numbers/${props.accountId}/card`, config)
                .then((res) => {
                    console.log("suckes");
                })
                .catch((er) => {
                    console.error(er);
                });
            window.location.reload()
        };

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.addCardButton} onClick={createNewCard}>
                +
            </button>
        </div>
    );
}
export default Card;
