import React from 'react';
import styles from './AccountNumber.module.css';


function AccountNumber(props) {
    let backgroundStyles;

    const backgroundStyles1 = {
        background: 'linear-gradient(55deg, rgba(22,135,167,1) 10%, rgba(39,102,120,1) 90%)'
    };
    const backgroundStyles2 = {
        background: 'linear-gradient(225deg, rgba(22,135,167,1) 5%, rgba(29,41,50,1) 95%)'
    };
    const backgroundStyles3 = {
        background: 'linear-gradient(326deg, rgba(39,102,120,1) 5%, rgba(0,198,255,1) 95%)'
    };
    const backgroundStyles4 = {
        background: 'linear-gradient(73deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
    };

    if (props.accountNumberType === 'INTENSIVE') {
        backgroundStyles = backgroundStyles1;
    } else if (props.accountNumberType === 'STANDARD') {
        backgroundStyles = backgroundStyles2;
    } else {
        backgroundStyles = backgroundStyles3;
    }


    return (
        <div
            className={styles.position}
            style={{...backgroundStyles}}
        >
            <div className={styles.twoThings}>
                <div className={styles.accountNumberType}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Typ konta bankowego: </p>
                    <p className={styles.textPosition}> {props.accountNumberType}</p>
                </div>
                <div className={styles.money}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Bilans:</p>
                    <p className={styles.textPosition}> {props.balance}</p>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Waluta:</p>
                    <p className={styles.textPosition}> {props.currency}</p>
                </div>
            </div>
            <div className={styles.number}>
                <p className={`${styles.textPosition} ${styles.smallText}`}> Numer konta:</p>
                <p className={styles.textPosition}> {props.number}</p>
            </div>
        </div>
    );
}

export default AccountNumber;
