import React, {useState} from 'react';
// import '../styles/home/Home.module.css';
import styles from './CreditCards.module.css';
// import ChartComponent from "./ChartComponent";
import { backgroundStyles1, backgroundStyles2, backgroundStyles3, backgroundStyles4 } from '../../../utils/backgroundStyles';
import {Link} from "react-router-dom";
import chip from "../../../../assets/transations/chip.png";
import {formatAccountNumber} from "../../../utils/formatAccountNumber";

function CreditCard(props) {
    const [isHovered, setIsHovered] = useState(false);

    let symbol;
    let currentBalanceText;
    let backgroundStyles;

    let sizeStyles;
    if (props.size === 'small') {
        sizeStyles = {
            width: '320px',
            height: '175px',
        };
    } else if (props.size === 'big') {
        sizeStyles = {
            width: '640px',
            height: '350px',
        };
    }

    // account number formatting
    const accountNumberConst = formatAccountNumber(props.accountNumber);

    const toValue = props.to === '/cards' ? '/cards' : `/cards/${props.id}`;


    if (props.type === 'INTENSIVE') {
        backgroundStyles = backgroundStyles1;
    } else if (props.type === 'STANDARD') {
        backgroundStyles = backgroundStyles2;
    } else {
        backgroundStyles = backgroundStyles3;
    }


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
        <Link
            style={{ ...backgroundStyles, ...sizeStyles }} // Łącz style tła i rozmiaru
              className={`${styles.balance} ${isHovered ? styles.hovered : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              to={toValue}


        >
            <div className={styles.balanceText}>
                <div className={styles.directionText}>
                    <div className={styles.textLeft}>
                        <p className={`${styles.textDecoration} ${styles.fontSize}`}>{props.currency}</p>
                        <p className={styles.textDecoration}>{props.type}</p>
                    </div>
                    <div className={styles.textRight}>
                        <p className={`${styles.textDecoration} ${styles.fontSize} ${styles.paddingRight}`}>{currentBalanceText}</p>
                    </div>
                </div>
                <div className={styles.chipPlace}>
                    <img className={styles.chip} src={chip} alt="chip"/>
                </div>
                <div>
                    <p className={`${styles.textDecoration} ${styles.fontSize}`}>{accountNumberConst}</p>
                    <div className={styles.marginTop}>
                        <div className={styles.directionText}>
                            <div className={styles.textLeft}>
                                <p className={styles.textDecoration}>{props.owner}</p>
                            </div>
                            <div className={styles.marginLeft}>
                                <p className={styles.textDecoration}>{props.expirationMonth}/{props.expirationYear}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {props.details ? (
                        <p className={styles.accountDetails}>Szczegóły konta >></p>
                    ) : null}
                </div>
            </div>

        </Link>
    );
}

export default CreditCard;
