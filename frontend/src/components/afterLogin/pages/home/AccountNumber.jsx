import React from 'react';
import styles from './AccountNumber.module.css';
import { backgroundStyles1, backgroundStyles2, backgroundStyles3 } from '../../../utils/backgroundStyles';
import { formatAccountNumber } from "../../../utils/formatAccountNumber";
import useZoomEffect from '../../../utils/useZoomEffect';

function AccountNumber(props) {
    const isZoomedIn = useZoomEffect();
    const marginStyle = isZoomedIn ? { marginTop: '0px' } : { marginTop: '15px'};
    const textSmall = isZoomedIn ? {fontSize: '10px'} : {fontSize: '13px' };

    let backgroundStyles;

    if (props.accountNumberType === 'INTENSIVE') {
        backgroundStyles = backgroundStyles1;
    } else if (props.accountNumberType === 'STANDARD') {
        backgroundStyles = backgroundStyles2;
    } else {
        backgroundStyles = backgroundStyles3;
    }

    const accountNumberConst = formatAccountNumber(props.number);

    console.log('accountNumberConst', accountNumberConst);

    return (
        <div
            className={styles.position}
            style={{ ...backgroundStyles }}
        >
            <div className={styles.twoThings}>
                <div className={styles.accountNumberType}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Typ konta bankowego: </p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {props.accountNumberType}</p>
                </div>
                <div className={styles.money}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Waluta:</p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {props.currency}</p>
                </div>
            </div>
            <div className={`${styles.numberPosition}`} style={marginStyle}>
                <div className={styles.number}>
                    <p className={`${styles.textPosition} ${styles.smallText}`} > Numer konta:</p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`} style={textSmall}> {accountNumberConst} </p>
                </div>
            </div>
        </div>
    );
}

export default AccountNumber;
