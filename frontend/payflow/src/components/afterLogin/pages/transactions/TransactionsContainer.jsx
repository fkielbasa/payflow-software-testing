import React, { useState } from 'react';
import styles from './TransictionsContainer.module.css';
import circleMinus from "../../../../assets/transations/circleMinus.png";
import circlePlus from "../../../../assets/transations/circlePlus.png";
import {TransactionData} from "../../API/TransactionData";

function TransactionsContainer({ screenName, maxPerPage }) {
    const sortedTransactions = [...TransactionData]
        .sort((a, b) => {
            console.log('a.date:', a.date);
            console.log('b.date:', b.date);
            console.log('new Date(b.date) - new Date(a.date):', new Date(b.date) - new Date(a.date));
            return new Date(b.date) - new Date(a.date);
        })
        .slice(0, maxPerPage);

    return (
        <div>
            {sortedTransactions.map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} screenName={screenName} />
            ))}
        </div>
    );
}

function TransactionItem({ transaction, screenName }) {
    const {amount, type, currency, name, location, cardUsed, referenceNumber, firstLastName, date} = transaction;
    const symbol = getCurrencySymbol(currency);
    const source = type === 'negative' ? circleMinus : circlePlus;
    const formattedAmount = formatAmount(amount, symbol, currency);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${styles.shortPayment} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.shortPaymentText}>
                <img className={styles.transactionCircle} src={source} alt="circle"/>
                <div className={styles.paymentTextPosition}>
                    <p className={styles.transactionTextDecoration}>{name}</p>
                    <p className={`${styles.transactionTextDecoration} ${styles.transactionTextSmall}`}>{location}</p>
                </div>
            </div>
            {screenName === 'transactions' && (
                <div className={styles.newPaymentTextPosition}>
                    <div className={styles.firstPaymentTextPosition}>
                        <p className={styles.transactionTextDecoration}>{cardUsed}</p>
                        <p className={`${styles.transactionTextDecoration} ${styles.transactionTextSmall}`}>{referenceNumber}</p>
                    </div>
                    <div className={styles.lastPaymentTextPosition}>
                        <p className={styles.transactionTextDecoration}>{firstLastName}</p>
                        <p className={`${styles.transactionTextDecoration} ${styles.transactionTextSmall}`}>{date}</p>
                    </div>
                </div>

            )}
            <div className={styles.balanceTextPosition}>
                <p className={styles.paymentTextSize}>{formattedAmount}</p>
            </div>
        </div>
    );
}

function getCurrencySymbol(currency) {
    switch (currency) {
        case 'PLN':
            return 'zł';
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        default:
            return '';
    }
}

function formatAmount(amount, symbol, currency) {
    if (currency === 'PLN') {
        return `${amount.toFixed(2)}${symbol}`;
    } else {
        return `${symbol}${amount.toFixed(2)}`;
    }
}

export default TransactionsContainer;
