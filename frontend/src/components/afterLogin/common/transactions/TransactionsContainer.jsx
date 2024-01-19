import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';
import Popup from 'reactjs-popup';
import { useSpring, animated } from 'react-spring';
import {formatAccountNumber} from "../../../utils/formatAccountNumber";
import circleMinus from "../../../../assets/transations/circleMinus.png";
import circlePlus from "../../../../assets/transations/circlePlus.png";
import TransactionCard from "./transactionCard";
import {getCurrencySymbol} from "../../../utils/money";

const TransactionsContainer = ({ maxPerPage }) => {

    const [apiData, setApiData] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [receiverData, setReceiverData] = useState({});
    const [userAccounts, setUserAccounts] = useState([])

    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)', width: '100%'},
        to: {opacity: 1, transform: 'translateY(0)', width: '100%'},
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


    const getAccountNumbers = () => {
        axios
            .get(`http://localhost:8080/api/v1/users/${user.userId}/numbers`,
                config
            )
            .then((response) => {
                setUserAccounts(response.data.map(ac => ac.id))
                console.log(response.data.map(ac => ac.id))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {


        getAccountNumbers()
    }, []);

    return (
        <animated.div style={fadeInAnimation}>
            <div className={styles.containerFluid}>
                <div className={styles.sort}>
                    <p>te</p>
                    <p>te</p>
                    <p>te</p>
                    <p>te</p>
                </div>
                <div className={styles.container}>
                    {apiData.map((transaction, index) => (
                        <TransactionCard
                            key={index}
                            userSender={userAccounts.includes(transaction.senderAccountId)}
                            data={transaction}
                        />
                        // <div
                        //     key={index}
                        //     className={`${styles.shortPayment} ${hoveredIndex === index ? styles.hovered : ''}`}
                        //     onMouseEnter={() => setHoveredIndex(index)}
                        //     onMouseLeave={() => setHoveredIndex(null)}
                        //     onClick={() => handleTransactionClick(transaction)}
                        // >
                        //     <div className={styles.imagePosition}>
                        //         {transaction.receiverAccountId === user.userId ? (
                        //             <img src={circlePlus} alt="circlePlus" className={styles.imgWidth}/>
                        //         ) : (
                        //             <img src={circleMinus} alt="circleMinus" className={styles.imgWidth}/>
                        //         )}
                        //     </div>
                        //     <div className={styles.shortPaymentText}>
                        //         <div className={styles.paymentTextPosition}>
                        //             <p className={styles.transactionTextDecoration}>{transaction.description}</p>
                        //         </div>
                        //     </div>
                        //     <div className={styles.newPaymentTextPosition}>
                        //         <div className={styles.lastPaymentTextPosition}>
                        //             <p className={styles.transactionTextDecoration}>{transaction.receiverFullName}</p>
                        //             <p className={`${styles.transactionTextDecoration} ${styles.transactionTextSmall}`}>{transaction.date}</p>
                        //         </div>
                        //     </div>
                        //     <div className={styles.balanceTextPosition}>
                        //         <p className={styles.paymentTextSize}>
                        //             {formatAmount(transaction.amount, transaction.currency)}
                        //         </p>
                        //     </div>
                        // </div>
                    ))}

                    <Popup open={!!selectedTransaction} onClose={closePopup}
                           contentStyle={{backgroundColor: '#1687A7', padding: '15px', borderRadius: 10}}>
                        {selectedTransaction && receiverData && (
                            <div>
                                <div style={{backgroundColor: '#F6F5F5', borderRadius: 5, padding: '10px'}}>
                                    <h3 style={{marginTop: -4}}>Szczegóły transakcji:</h3>
                                    <p style={{marginTop: -8}}>Tytuł: {selectedTransaction.description}</p>
                                    <p style={{marginTop: -8}}>Odbiorca: {selectedTransaction.receiverFullName}</p>
                                    <p style={{marginTop: -8}}>Data: {selectedTransaction.date}</p>
                                    <p style={{
                                        marginTop: -8,
                                        marginBottom: -4
                                    }}>Kwota: {formatAmount(selectedTransaction.amount, selectedTransaction.currency)}</p>
                                </div>
                                <div style={{margin: 15}}/>
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
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: 2,
                                    marginBottom: -10
                                }}>
                                    <button style={{
                                        backgroundColor: '#276678',
                                        borderRadius: 5,
                                        color: 'white',
                                        borderColor: '#1687A7',
                                        boxShadow: 0,
                                        width: 80,
                                        height: 28
                                    }} onClick={closePopup}>Zamknij
                                    </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>

        </animated.div>
    );
};

export default TransactionsContainer;
