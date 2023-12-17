import React from 'react';
import '../styles/HomeTransictionsStyles.css';
import circleMinus from "../../assets/transations/circleMinus.png";
import circlePlus from "../../assets/transations/circlePlus.png";
import { TransactionData } from '../API/TransactionData';

function WholeTransactions() {
    const reversedTransactions = [...TransactionData].reverse();

    return (
        <div>
            {reversedTransactions.map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
}

function TransactionItem({ transaction }) {
    const { amount, type, currency, name, location, cardUsed, referenceNumber } = transaction;
    const symbol = getCurrencySymbol(currency);
    const source = type === 'negative' ? circleMinus : circlePlus;
    const formattedAmount = formatAmount(amount, symbol, currency);

    return (
        <div>
        <div className="shortPayment">
            <div className="shortPaymentText">
                <img className="transactionCircle" src={source} alt="circle"/>
                <div className="paymentTextPosition">
                    <p className="transactionTextDecoration">{name}</p>
                    <p className="transactionTextDecoration transactionTextSmall">{location}</p>
                </div>
            </div>
            <div className="nextPaymentTextPosition">
                <p className="transactionTextDecoration">{cardUsed}</p>
                <p className="transactionTextDecoration transactionTextSmall">{referenceNumber}</p>
            </div>
            <div className="nextPaymentTextPosition">
            <p className="paymentTextSize">{formattedAmount}</p>
            </div>
        </div>
            <hr/>
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

export default WholeTransactions;
