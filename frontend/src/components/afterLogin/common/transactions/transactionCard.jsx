import styles from './transactionCard.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import React from "react";
import InfoTransactionWrapper from "./InfoTransactionWrapper";

const TransactionCard = (props) => {
    return(
        <div
            className={styles.container}
            onClick={() => props.handleTransactionClick(props.data)}
        >
            <div className={styles.amountWrapper}>
                {props.userSender ? <FaCircleMinus /> : <FaCirclePlus/>}
                <p>{props.data.amount} <span>{props.data.currency}</span></p>
            </div>
            <div className={styles.descWrapper}>
                <InfoTransactionWrapper
                    prefix={"Opis:"}
                    text={props.data.description.substring(0, 30)+"..."}
                />
            </div>
            <InfoTransactionWrapper
                prefix={"Od:"}
                text={props.data.senderFullName}
            />
            <InfoTransactionWrapper
                prefix={"Do:"}
                text={props.data.receiverFullName}
            />
            <InfoTransactionWrapper
                prefix={"Data:"}
                text={props.data.date}
            />
        </div>
    )
}
export default TransactionCard
