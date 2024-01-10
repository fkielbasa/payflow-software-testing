import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';
import Popup from 'reactjs-popup';
import { useSpring, animated } from 'react-spring';
import {formatAccountNumber} from "../../../utils/formatAccountNumber";

const TransactionsContainer = ({ maxPerPage }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [apiData, setApiData] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [receiverData, setReceiverData] = useState({});

    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });

    // const fadeInAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });


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
        axios.get(`http://localhost:8080/api/v1/transfers/${id}`, config)
            .then((response) => {
                console.log('personalData response:', response.data);
                setReceiverData(response.data);
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
        // personalData(transaction.receiverAccountId);
        personalData(transaction.id);
    };

    const closePopup = () => {
        setSelectedTransaction(null);
        setReceiverData(null);
    };

    return (
        <animated.div style={fadeInAnimation}>
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

                <Popup open={!!selectedTransaction} onClose={closePopup}
                       contentStyle={{backgroundColor: '#D3E0EA', padding: '25px', borderRadius: 5}}>
                    {selectedTransaction && receiverData && (
                        <div>
                            <div style={{backgroundColor: '#F6F5F5', borderRadius: 5, padding: '10px'}}>
                                <h3 style={{marginTop: -4}}>Szczegóły transakcji:</h3>
                                <p style={{marginTop: -8}}>Tytuł: {selectedTransaction.description}</p>
                                <p style={{marginTop: -8}}>Odbiorca: {selectedTransaction.receiverFullName}</p>
                                <p style={{marginTop: -8}}>Data: {selectedTransaction.date}</p>
                                <p style={{marginTop: -8, marginBottom: -4}}>Kwota: {formatAmount(selectedTransaction.amount, selectedTransaction.currency)}</p>
                            </div>
                            <div style={{margin: 25}}/>
                            <div style={{backgroundColor: '#F6F5F5', borderRadius: 5, padding: '10px'}}>
                                <h3 style={{marginTop: -4}}>Dane odbiorcy:</h3>
                                <p style={{marginTop: -8}}>Numer
                                    konta: {formatAccountNumber(receiverData.receiver?.accountNumber)}</p>
                                {receiverData.receiver?.address && (
                                    <>
                                        <p style={{marginTop: -8}}>Kraj: {receiverData.receiver.address?.country}</p>
                                        <p style={{marginTop: -8}}>Miasto: {receiverData.receiver.address?.city}</p>
                                        <p style={{marginTop: -8, marginBottom: -4}}>Kod
                                            pocztowy: {receiverData.receiver.address?.zipCode}</p>
                                    </>
                                )}
                            </div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: 12, marginBottom: -12}}>
                                <button style={{backgroundColor: '#276678', borderRadius: 5, color: 'white', borderColor: '#276678'}} onClick={closePopup}>Zamknij</button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        </animated.div>
    );
};

export default TransactionsContainer;
