import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';

const NewTransactionsContainer = ({ maxPerPage }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [apiData, setApiData] = useState([]);
    // const [userAddresses, setUserAddresses] = useState([]); // Zmiana: zamiast obiektu, użyj tablicy

    useEffect(() => {
        const getData = () => {
            axios.get(`http://localhost:8080/api/v1/account-numbers/${user.userId}/transfers`, config)
                .then(
                    (response) => {
                        setApiData(response.data.reverse().slice(0, maxPerPage));
                        // setApiData(response.data);
                        console.log(response.data);
                        console.log(response.data.receiverAccountId)
                        // personalData(response.data.receiverAccountId)
                    }
                )
                .catch(err => {
                    console.error(err);
                })
        }


        getData();
    }, []);

    // const personalData = (id) => {
    //     console.log(id)
    //     axios.get(`http://localhost:8080/api/v1/users/${id}`, config)
    //         .then(
    //             (response) => {
    //                 console.log(response.data);
    //             }
    //         )
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }


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

    return (
        <div>
            {apiData.map((transaction, index) => (
                <div
                    key={index}
                    className={`${styles.shortPayment} ${hoveredIndex === index ? styles.hovered : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
        </div>
    );
};

export default NewTransactionsContainer;
