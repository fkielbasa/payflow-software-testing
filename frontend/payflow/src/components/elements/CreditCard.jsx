import React, {useState} from 'react';
// import '../styles/home/Home.module.css';
import styles from '../styles/cards/CreditCards.module.css';
import ChartComponent from "./ChartComponent";
import {Link} from "react-router-dom";
import chip from "../../assets/transations/chip.png";

function CreditCard(props) {
    const [isHovered, setIsHovered] = useState(false);

    let symbol;
    let currentBalanceText;
    let backgroundStyles;

    // account number formatting
    const accountNumberConst = formatAccountNumber(props.accountNumber);
    function formatAccountNumber(accountNumber) {
        const accountString = accountNumber.toString();

        const firstTwoDigits = accountString.substring(0, 2);
        const remainingDigits = accountString.substring(2);

        const chunks = [];
        for (let i = 0; i < remainingDigits.length; i += 4) {
            chunks.push(remainingDigits.substring(i, i + 4));
        }

        return `${firstTwoDigits} ${chunks.join(' ')}`;
    }


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


    if (props.cardStyle === 1) {
        backgroundStyles = backgroundStyles1;
    } else if (props.cardStyle === 2) {
        backgroundStyles = backgroundStyles2;
    } else if (props.cardStyle === 3) {
        backgroundStyles = backgroundStyles3;
    } else if (props.cardStyle === 4) {
        backgroundStyles = backgroundStyles4;
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
        <div style={backgroundStyles}
             className={`${styles.balance} ${isHovered ? styles.hovered : ''}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
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
                                <p className={styles.textDecoration}>{props.Owner}</p>
                            </div>
                            <div className={styles.marginLeft}>
                                <p className={styles.textDecoration}>{props.expirationMonth}/{props.expirationYear}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {props.details ? (
                        <Link className={styles.accountDetails} to="/cards">Szczegóły konta >></Link>
                    ) : null}
                </div>
            </div>
            <div className={styles.chartPosition}>
                {props.graph && <ChartComponent type={props.currency}/>}
            </div>
        </div>
    );
}

export default CreditCard;
