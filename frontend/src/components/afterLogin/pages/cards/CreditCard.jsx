import React, {useState} from 'react';
// import '../styles/home/Home.module.css';
import styles from './CreditCards.module.css';
// import ChartComponent from "./ChartComponent";
import { backgroundStyles1, backgroundStyles2, backgroundStyles3, backgroundStyles4 } from '../../../utils/backgroundStyles';
import {Link} from "react-router-dom";
import chip from "../../../../assets/transations/chip.png";
import {formatAccountNumber} from "../../../utils/formatAccountNumber";
import logo from "../../../../assets/navbar/payflow.png";
import refresh from "../../../../assets/refresh.svg";

function CreditCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    let symbol;
    let currentBalanceText;
    let backgroundStyles;

    const formatExpirationDate = (rawDate) => {
        const dateObject = new Date(rawDate);
        const options = {month: '2-digit', year: '2-digit'};
        return dateObject.toLocaleDateString('en-US', options);
    };

    // account number formatting
    const cardNumberConst = formatAccountNumber(props.cardNumber);

    const toValue = props.to === '/cards' ? '/cards' : `/cards/${props.id}`;

    if (props.currency === 'USD') {
        symbol = '$';
        currentBalanceText = `${symbol}${props.balance}`;
        backgroundStyles = backgroundStyles1;
    } else if (props.currency === 'EUR') {
        symbol = '€';
        currentBalanceText = `${symbol}${props.balance}`;
        backgroundStyles = backgroundStyles2;
    } else if (props.currency === 'PLN') {
        symbol = 'zł';
        currentBalanceText = `${props.balance}${symbol}`;
        backgroundStyles = backgroundStyles3;
    }

    return (
        <div
            style={{...backgroundStyles, transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}
            className={`${styles.balance} ${isHovered ? styles.hovered : ''}`}
            to={toValue}
        >
            <div className={styles.balanceText}>
                <div className={styles.directionText}>
                    <div className={styles.textLeft}>
                        <p className={`${styles.textDecoration} ${styles.fontSize}`}>{props.currency}</p>
                        {/*<p className={styles.textDecoration}>{props.type}</p>*/}
                    </div>
                    <div className={styles.centerThat}>
                        <div
                            className={styles.otherSiteContainer}
                            onClickCapture={() => setIsHovered(true)}
                            onClickCapture={() => {
                                setIsHovered(false);
                                setIsFlipped(false);
                            }}
                            onClick={() => setIsFlipped(!isFlipped)}>
                            <img className={styles.otherSite} src={refresh} alt="refresh"/>
                        </div>
                    </div>
                    <div className={styles.textRight}>
                        <p className={`${styles.textDecoration} ${styles.fontSize} ${styles.paddingRight}`}>{currentBalanceText}</p>
                    </div>
                </div>
                <div className={styles.chipPlace}>
                    <img className={styles.chip} src={chip} alt="chip"/>
                </div>
                <div>
                    <p className={`${styles.textDecoration} ${styles.fontSize}`}>{cardNumberConst}</p>
                    <div className={styles.marginTop}>
                        <div className={styles.directionText}>
                            <div className={styles.ownerText}>
                                <p className={styles.textDecoration}>{props.owner}</p>
                            </div>
                            <div>
                                <p className={styles.textDecoration}>{formatExpirationDate(props.expiration)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {props.details ? (
                        <p className={styles.accountDetails}>Szczegóły karty >></p>
                    ) : null}
                </div>
            </div>
            {isFlipped && (
                <div
                    className={styles.backSide}
                    style={{
                        ...backgroundStyles,
                    }}
                >
                    <div className={styles.centerThatReverse}>
                        <div
                            className={styles.otherSiteContainer}
                            onClickCapture={() => setIsHovered(false)}
                            onClickCapture={() => {
                                setIsHovered(true);
                                setIsFlipped(true);
                            }}
                            onClick={() => setIsFlipped(!isFlipped)}>
                            <img className={styles.otherSite} src={refresh} alt="refresh"/>
                        </div>
                    </div>
                    <div className={styles.revertContainer}>
                        <div className={styles.cardSlider}></div>
                        <div className={styles.rotate}>
                            <p>CVV: {props.cvv}</p>
                        </div>
                    </div>
                    <div className={styles.invertShadow}>
                        <div className={styles.revertContainer}>
                            <p className={styles.fontSize}>{cardNumberConst}</p>
                            <p className={`${styles.textDecoration} ${styles.anotherMarginTop}`}>{props.owner}</p>
                        </div>
                        <div className={styles.expDateRevert}>
                            <p className={styles.textDecoration}>{formatExpirationDate(props.expiration)}</p>
                        </div>
                    </div>
                    <div className={styles.revert}>
                        <img className={styles.photo} src={logo} alt="logo"/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreditCard;
