import React, {useEffect, useState} from 'react';
import styles from './AccountNumber.module.css';
import { backgroundStyles1, backgroundStyles2, backgroundStyles3 } from '../../../utils/backgroundStyles';
import { formatAccountNumber } from "../../../utils/formatAccountNumber";
import useZoomEffect from '../../../utils/useZoomEffect';

function AccountNumber(props) {
    const [showDetailsButton, setShowDetailsButton] = useState(false);

    const handleDetailsButtonClick = () => {
        props.onDetailsButtonClick();
        console.log("click");
    };

    const handleClick = () => {
        props.onClick(props);
    };

    useEffect(() => {
        setShowDetailsButton(true);
    }, [props.isClicked]);

    useEffect(() => {
        setShowDetailsButton(false);
    }, [props.number]); // Schowaj szczegóły po zmianie numeru konta.


    // const isZoomedIn = useZoomEffect();
    // const marginStyle = isZoomedIn ? { marginTop: '0px' } : { marginTop: '15px' };
    // const textSmall = isZoomedIn ? { fontSize: '10px' } : { fontSize: '13px' };

    let backgroundStyles;

    if (props.accountNumberType === 'INTENSIVE') {
        backgroundStyles = backgroundStyles1;
    } else if (props.accountNumberType === 'STANDARD') {
        backgroundStyles = backgroundStyles2;
    } else {
        backgroundStyles = backgroundStyles3;
    }

    const accountNumberConst = formatAccountNumber(props.number);

    // useEffect(() => {
    //     if (isClicked) {
    //         const timeoutId = setTimeout(() => {
    //             setIsClicked(false);
    //         }, 175);
    //
    //         return () => clearTimeout(timeoutId);
    //     }
    // }, [isClicked]);

    // const handleClick = () => {
    //     setIsClicked(true);
    //     props.onClick(props);
    // };

    return (
        <div
            className={styles.position}
            style={{
                ...backgroundStyles,
                transform: props.isClicked ? 'scale(1.05)' : 'scale(1)',
            }}
            onClick={handleClick}
        >
            <div className={styles.twoThings}>
                <div className={styles.accountNumberType}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Typ konta: </p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {props.accountNumberType}</p>
                </div>
                <div className={styles.money}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Waluta:</p>
                    <p className={`${styles.textPosition} ${styles.boldedText}`}> {props.currency}</p>
                </div>
            </div>
            <div className={`${styles.numberPosition}`}>
                <div className={styles.number}>
                    <p className={`${styles.textPosition} ${styles.smallText}`}> Numer konta:</p>
                    <p className={`${styles.textPosition} ${styles.smallerText} ${styles.boldedText}`}
                    > {accountNumberConst} </p>
                </div>
            </div>
            <div
                style={{justifyContent: "flex-end", marginTop: '5%', display: props.isClicked ? 'block' : 'none'}}
                onClick={handleDetailsButtonClick}
            >
                Szczegóły
            </div>
        </div>
    );
}

export default AccountNumber;
