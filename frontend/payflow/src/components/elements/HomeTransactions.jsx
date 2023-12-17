import React from 'react';
import '../styles/HomeTransictionsStyles.css';
import circleMinus from "../../assets/transations/circleMinus.png";
import circlePlus from "../../assets/transations/circlePlus.png";
import { TransactionData } from '../API/TransactionData';

function HomeTransictions(props) {
    const reversedTransactions = [...TransactionData].reverse().slice(0, props.maxPerPage);

    return (
        <div>
            {reversedTransactions.map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
}

function TransactionItem({ transaction }) {
    const { amount, type, name, location, currency } = transaction;
    const symbol = getCurrencySymbol(currency);
    const source = type === 'negative' ? circleMinus : circlePlus;
    const formattedBalance = formatBalance(amount, symbol, currency);

    return (
        <div className="shortPayment">
            <div className="shortPaymentText">
                <img className="transactionCircle" src={source} alt="circle"/>
                <div className="paymentTextPosition">
                    <p className="transactionTextDecoration">{name}</p>
                    <p className="transactionTextDecoration transactionTextSmall">{location}</p>
                </div>
            </div>
            <p className="paymentTextSize">{formattedBalance}</p>
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

function formatBalance(amount, symbol, currency) {
    if (currency === 'PLN') {
        return `${amount.toFixed(2)}${symbol}`;
    } else {
        return `${symbol}${amount.toFixed(2)}`;
    }
}

export default HomeTransictions;
