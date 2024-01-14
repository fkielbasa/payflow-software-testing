import React from 'react';
import styles from './AccountNumber.module.css';
import { backgroundStyles1, backgroundStyles2, backgroundStyles3 } from '../../../utils/backgroundStyles';
import {formatAccountNumber} from "../../../utils/formatAccountNumber";


function AccountNumber(props) {
    let symbol;
    let currentBalanceText;
    let backgroundStyles;

    if (props.accountNumberType === 'INTENSIVE') {
        backgroundStyles = backgroundStyles1;
    } else if (props.accountNumberType === 'STANDARD') {
        backgroundStyles = backgroundStyles2;
    } else {
        backgroundStyles = backgroundStyles3;
    }

    const accountNumberConst = formatAccountNumber(props.number);

    if (props.currency === 'USD') {
        symbol = '$';
        currentBalanceText = `${symbol}${props.balance}`;
    } else if (props.currency === 'EUR') {
        symbol = '€';
        currentBalanceText = `${symbol}${props.balance}`;
    } else if (props.currency === 'PLN') {
        symbol = 'zł';
        currentBalanceText = `${props.balance}${symbol}`;
    }

    return (
        <div
            className={styles.position}
            style={{...backgroundStyles}}
        >
            <div className={styles.twoThings}>
                <div className={styles.accountNumberType}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Typ konta bankowego: </p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {props.accountNumberType}</p>
                </div>
                <div className={styles.money}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Bilans:</p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {currentBalanceText}</p>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Waluta:</p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {props.currency}</p>
                </div>
            </div>
            <div className={`${styles.numberPosition} ${styles.needMarginBottom}`}>
                <div className={styles.number}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Numer konta:</p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {accountNumberConst} </p>
                </div>
            </div>
        </div>
    );
}

export default AccountNumber;
