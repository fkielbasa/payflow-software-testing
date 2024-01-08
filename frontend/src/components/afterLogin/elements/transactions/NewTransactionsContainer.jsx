import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';

const NewTransactionsContainer = ({ maxPerPage }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getDataAccountNumbers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/account-numbers/${user.userId}/transfers`, config);
                console.log('response.data', response.data);

                // Przygotuj dane w odpowiednim formacie
                const formattedData = response.data.map((transaction) => ({
                    ...transaction,
                    userAddress: null, // Dodaj pole userAddress
                }));

                // Odwracanie kolejności danych przy pobieraniu
                setApiData(formattedData.reverse().slice(0, maxPerPage));

                // Pobierz userAddress dla każdego receiverAccountId
                await Promise.all(
                    formattedData.map((transaction) => getDataUsers(transaction.receiverAccountId))
                );
            } catch (error) {
                console.error(error);
            }
        };

        const getDataUsers = async (receiverAccountId) => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/users/${receiverAccountId}`, config);
                console.log('userData', response.data);

                // Zaktualizuj dane o userAddress dla danego receiverAccountId
                setApiData((prevData) => {
                    return prevData.map((transaction) =>
                        transaction.receiverAccountId === receiverAccountId
                            ? {...transaction, userAddress: response.data}
                            : transaction
                    );
                });
            } catch (error) {
                console.error(error);
            }
        };

        getDataAccountNumbers();
    }, [user.userId, maxPerPage]);

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
                            {transaction.userAddress && transaction.userAddress.residentialAddress && (
                                <div>
                                    <p>{transaction.userAddress.residentialAddress.city}</p>
                                    <p>{transaction.userAddress.residentialAddress.street}</p>
                                    <p>{transaction.userAddress.residentialAddress.houseNumber}</p>
                                    <p>{transaction.userAddress.residentialAddress.apartmentNumber}</p>
                                    <p>{transaction.userAddress.residentialAddress.zipCode}</p>
                                </div>
                            )}
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
