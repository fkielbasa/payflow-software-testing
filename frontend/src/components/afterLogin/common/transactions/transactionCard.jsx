import styles from './transactionCard.module.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import React from "react";
import InfoTransactionWrapper from "./infoTransactionWrapper";

const TransactionCard = (props) => {
    return (
        <div
            className={styles.container}
            onClick={() => props.handleTransactionClick(props.data)}
        >
            {props.showAmount && (
                <div className={styles.amountWrapper}>
                    {props.userSender ? <FaCircleMinus /> : <FaCirclePlus />}
                    <p>
                        {props.data.amount} <span>{props.data.currency}</span>
                    </p>
                </div>
            )}
            {props.showDesc && (
                <div className={styles.descWrapper}>
                    <InfoTransactionWrapper
                        prefix={'Opis:'}
                        text={props.data.description.substring(0, 30) + '...'}
                    />
                </div>
            )}
            {props.showSenderInfo && (
                <InfoTransactionWrapper
                    prefix={'Od:'}
                    text={props.data.senderFullName}
                />
            )}
            {props.showReceiverInfo && (
                <InfoTransactionWrapper
                    prefix={'Do:'}
                    text={props.data.receiverFullName}
                />
            )}
            {props.showDate && (
                <InfoTransactionWrapper prefix={'Data:'} text={props.data.date} />
            )}
        </div>
    );
};

export default TransactionCard;
