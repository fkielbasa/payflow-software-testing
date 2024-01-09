import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';
// import Popup from 'reactjs-popup';
import { useSpring, animated } from 'react-spring';

const NewTransactionsContainer = ({ maxPerPage }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [apiData, setApiData] = useState({});
    // const [selectedTransaction, setSelectedTransaction] = useState(null);
    // const [receiverData, setReceiverData] = useState({});

    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });

    useEffect(() => {
        const getData = async () => {
            axios.get(`http://localhost:8080/api/v1/transfers/${user.userId}`, config)
                .then((response) => {
                    console.log(response.data);
                    // setApiData(response.data.reverse().slice(0, maxPerPage));
                    setApiData(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
        };

        getData();
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

    // const handleTransactionClick = (transaction) => {
    //     setSelectedTransaction(transaction);
    //     // personalData(transaction.receiverAccountId);
    // };
    //
    // const closePopup = () => {
    //     setSelectedTransaction(null);
    //     setReceiverData(null);
    // };

    return (
        <animated.div style={fadeInAnimation}>
            <div>
                {/*{apiData.map((transaction, index) => (*/}
                    <div
                        // key={index}
                        className={`${styles.shortPayment}`}
                        // onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        // onClick={() => handleTransactionClick(transaction)}
                    >
                        <div className={styles.shortPaymentText}>
                            <div className={styles.paymentTextPosition}>
                                <p className={styles.transactionTextDecoration}>{apiData.description}</p>
                            </div>
                        </div>
                        <div className={styles.newPaymentTextPosition}>
                            <div className={styles.lastPaymentTextPosition}>
                                <p className={styles.transactionTextDecoration}>{apiData.sender?.firstname}</p>
                                <p className={`${styles.transactionTextDecoration} ${styles.transactionTextSmall}`}>{apiData.date}</p>
                            </div>
                        </div>
                        <div className={styles.balanceTextPosition}>
                            <p className={styles.paymentTextSize}>
                                {formatAmount(apiData.amount, apiData.currency)}
                            </p>
                        </div>
                    </div>
                {/*))}*/}

                {/*<Popup open={!!selectedTransaction} onClose={closePopup}*/}
                {/*       contentStyle={{backgroundColor: '#D3E0EA', padding: '20px', borderRadius: 5}}>*/}
                {/*    {selectedTransaction && receiverData && (*/}
                {/*        <div>*/}
                {/*            <h2 style={{marginTop: -8}}>Szczegóły transakcji:</h2>*/}
                {/*            <p style={{marginTop: -8}}>Tytuł: {selectedTransaction.description}</p>*/}
                {/*            <p style={{marginTop: -8}}>Odbiorca: {selectedTransaction.receiverFullName}</p>*/}
                {/*            <p style={{marginTop: -8}}>Data: {selectedTransaction.date}</p>*/}
                {/*            <p style={{marginTop: -8}}>Kwota: {formatAmount(selectedTransaction.amount, selectedTransaction.currency)}</p>*/}
                {/*            <h3>Dane odbiorcy:</h3>*/}
                {/*            <p style={{marginTop: -8}}>Kraj: {receiverData.residentialAddress?.country}</p>*/}
                {/*            <p style={{marginTop: -8}}>Miasto: {receiverData.residentialAddress?.city}</p>*/}
                {/*            <p style={{marginTop: -8}}>Kod pocztowy: {receiverData.residentialAddress?.zipCode}</p>*/}

                {/*            <button onClick={closePopup}>Zamknij</button>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</Popup>*/}
            </div>
        </animated.div>
    );
};

export default NewTransactionsContainer;
