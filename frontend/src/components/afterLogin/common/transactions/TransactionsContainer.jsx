import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';
import Popup from 'reactjs-popup';
import { useSpring, animated } from 'react-spring';
import {formatAccountNumber} from "../../../utils/formatAccountNumber";
import TransactionCard from "./transactionCard";
import {getCurrencySymbol} from "../../../utils/money";
import { ImCross } from "react-icons/im";
import {FaSort} from "react-icons/fa";

const TransactionsContainer = ({ maxPerPage }) => {

    const [apiData, setApiData] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [receiverData, setReceiverData] = useState({});
    const [userAccounts, setUserAccounts] = useState([])
    const [sortByAmount, setSortByAmount] = useState(false)
    const [sortByDesc, setSortByDesc] = useState(false)
    const [sortBySender, setSortBySender] = useState(false)
    const [sortByReceiver, setSortByReceiver] = useState(false)
    const [sortByDate, setSortByDate] = useState(false)

    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)', width: '100%'},
        to: {opacity: 1, transform: 'translateY(0)', width: '100%'},
    });



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

    useEffect(() => {
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
        getAccountNumbers()
    }, []);


    const sortByBalance = () => {
        const newD = [...apiData]
        sortByAmount ? newD.sort((a,b) => a.amount - b.amount ) : newD.sort((a,b) => b.amount - a.amount)
        setApiData(newD)
        setSortByAmount(!sortByAmount)
    }

    const sortByDescription = () => {
        const newD = [...apiData]
        sortByDesc ? newD.sort((a,b) => a.description.toLowerCase().localeCompare(b.description.toLowerCase())) : newD.sort((a,b) => b.description.toLowerCase().localeCompare(a.description.toLowerCase()))
        setApiData(newD)
        setSortByDesc(!sortByDesc)
    }

    const sortSender = () => {
        const newD = [...apiData]
        sortBySender ? newD.sort((a,b) => a.senderFullName.toLowerCase().localeCompare(b.senderFullName.toLowerCase())) : newD.sort((a,b) => b.senderFullName.toLowerCase().localeCompare(a.senderFullName.toLowerCase()))
        setApiData(newD)
        setSortBySender(!sortBySender)
    }

    const sortReceiver = () => {
        const newD = [...apiData]
        sortByReceiver ? newD.sort((a,b) => a.receiverFullName.toLowerCase().localeCompare(b.receiverFullName.toLowerCase())) : newD.sort((a,b) => b.receiverFullName.toLowerCase().localeCompare(a.receiverFullName.toLowerCase()))
        setApiData(newD)
        setSortByReceiver(!sortByReceiver)
    }

    const sortDate = () => {
        const newD = [...apiData]
        sortByDate ? newD.sort((a,b) => a.date.toLowerCase().localeCompare(b.date.toLowerCase())) : newD.sort((a,b) => b.date.toLowerCase().localeCompare(a.date.toLowerCase()))
        setApiData(newD)
        setSortByDate(!sortByDate)
    }

    return (
        <animated.div style={fadeInAnimation}>
            <div className={styles.containerFluid}>
                <div className={styles.sort}>
                    <div  onClick={sortByBalance}>
                        <p>Saldo</p>
                        <FaSort/>
                    </div>
                    <div onClick={sortByDescription} style={{width: '25%'}}>
                        <p>Opis</p>
                        <FaSort/>
                    </div>
                    <div  onClick={sortSender}>
                        <p>Nadawca</p>
                        <FaSort/>
                    </div>
                    <div onClick={sortReceiver}>
                        <p>Odbiorca</p>
                        <FaSort/>
                    </div>
                    <div onClick={sortDate}>
                        <p>Data</p>
                        <FaSort/>
                    </div>
                </div>
                <div className={styles.container}>
                    {apiData.map((transaction, index) => (
                        <TransactionCard
                            key={index}
                            userSender={userAccounts.includes(transaction.senderAccountId)}
                            data={transaction}
                            handleTransactionClick={handleTransactionClick}
                        />
                    ))}

                    <Popup open={!!selectedTransaction} onClose={closePopup}
                           contentStyle={{backgroundColor: 'black', padding: '20px',paddingBottom: 30, borderRadius: 10, width: '400px'}}>
                        {selectedTransaction && receiverData && (
                            <div>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding: 5}}>
                                    <div style={{width: '30%'}}>
                                        <img
                                            src={require('../../../../assets/navbar/payflow.png')}
                                            alt=""
                                            style={{width: '90%'}}
                                        />
                                    </div>
                                    <p
                                        style={{color: 'white', fontSize: 20, cursor: 'pointer', margin: 5}}
                                        onClick={closePopup}
                                    >
                                        <ImCross />
                                    </p>
                                </div>
                                <div style={{backgroundColor: '#F6F5F5', borderRadius: 5, padding: '10px'}}>
                                    <h3 style={{marginTop: -4}}>Szczegóły transakcji:</h3>
                                    <p style={{marginTop: -8, wordWrap: 'break-word'}}>Tytuł: {selectedTransaction.description}</p>
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
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </animated.div>
    );
};

export default TransactionsContainer;
