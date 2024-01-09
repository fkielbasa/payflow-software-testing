import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';
import Popup from 'reactjs-popup';

const NewTransactionsContainer = ({ maxPerPage }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [apiData, setApiData] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [receiverData, setReceiverData] = useState({});

    useEffect(() => {
        const getData = async () => {
            axios.get(`http://localhost:8080/api/v1/account-numbers/${user.userId}/transfers`, config)
                .then((response) => {
                    console.log(response.data);
                    setApiData(response.data.reverse().slice(0, maxPerPage));
                })
                .catch(err => {
                    console.error(err);
                })
        };

        getData();
    }, [user.userId, maxPerPage]);

    const personalData = async (id) => {
        console.log('id:', id);
        axios.get(`http://localhost:8080/api/v1/users/${id}`, config)
            .then((response) => {
                console.log('personalData response:', response.data[0]);
                setReceiverData(response.data[0]);
            })
            .catch(err => {
                console.error(err);
            })
    };

    const getCurrencySymbol = (currency) => {
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
    };

    const formatAmount = (amount, currency) => {
        const symbol = getCurrencySymbol(currency);
        if (currency === 'PLN') {
            return `${amount}${symbol}`;
        } else {
            return `${symbol}${amount}`;
        }
    };

    const handleTransactionClick = (transaction) => {
        setSelectedTransaction(transaction);
        personalData(transaction.receiverAccountId);
    };

    const closePopup = () => {
        setSelectedTransaction(null);
        setReceiverData(null);
    };

    return (
        <div>
            {apiData.map((transaction, index) => (
                <div
                    key={index}
                    className={`${styles.shortPayment} ${hoveredIndex === index ? styles.hovered : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleTransactionClick(transaction)}
                >
                    <div className={styles.shortPaymentText}>
                        <div className={styles.paymentTextPosition}>
                            <p className={styles.transactionTextDecoration}>{transaction.description}</p>
                        </div>
                    </div>
                    <div className={styles.newPaymentTextPosition}>
                        <div className={styles.lastPaymentTextPosition}>
                            <p className={styles.transactionTextDecoration}>{transaction.receiverFullName}</p>
                            <p className={`${styles.transactionTextDecoration} ${styles.transactionTextSmall}`}>{transaction.date}</p>
                        </div>
                    </div>
                    <div className={styles.balanceTextPosition}>
                        <p className={styles.paymentTextSize}>
                            {formatAmount(transaction.amount, transaction.currency)}
                        </p>
                    </div>
                </div>
            ))}

            <Popup open={!!selectedTransaction} onClose={closePopup} contentStyle={{ backgroundColor: '#D3E0EA', padding: '20px', borderRadius: 5 }}>
                {selectedTransaction && receiverData && (
                    <div>
                        <h2>Szczegóły transakcji</h2>
                        <p>Tytuł: {selectedTransaction.description}</p>
                        <p>Odbiorca: {selectedTransaction.receiverFullName}</p>
                        <p>Data: {selectedTransaction.date}</p>
                        <p>Kwota: {formatAmount(selectedTransaction.amount, selectedTransaction.currency)}</p>
                        <h2>Dane odbiorcy</h2>
                        <p>Kraj: {receiverData.residentialAddress?.country}</p>
                        <p>Miasto: {receiverData.residentialAddress?.city}</p>
                        <p>Kod pocztowy: {receiverData.residentialAddress?.zipCode}</p>

                        <button onClick={closePopup}>Zamknij</button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default NewTransactionsContainer;
