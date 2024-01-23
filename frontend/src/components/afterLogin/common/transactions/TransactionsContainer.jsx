import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TransictionsContainer.module.css';
import { config, user } from '../../../../config/authConfig';
import Popup from 'reactjs-popup';
import { useSpring, animated } from 'react-spring';
import TransactionCard from './transactionCard'
import {getCurrencySymbol} from "../../../utils/money";
import { ImCross } from "react-icons/im";
import {FaSort} from "react-icons/fa";

const TransactionsContainer = ({ maxPerPage }) => {

    const [apiData, setApiData] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [personalDataTransfer, setPersonalDataTransfer] = useState({});
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
            await axios.get(
                `http://localhost:8080/api/v1/users/${user.userId}/transfers?last=${100}`,
                config
            )
                .then((response) => {
                    setApiData(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
        };

        getData();
    }, [user.userId, maxPerPage]);

    const personalData = async (id) => {
        axios.get(
            `http://localhost:8080/api/v1/transfers/${id}`,
                config
            )
            .then((response) => {
                console.log(response.data)
                setPersonalDataTransfer(response.data);
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
        setPersonalDataTransfer({});
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
                           contentStyle={{backgroundColor: 'black', padding: '20px',paddingBottom: 30, borderRadius: 10, width: '650px'}}
                    >
                        {selectedTransaction && JSON.stringify(personalDataTransfer) !== '{}' && (
                            <div>
                                <div className={styles.popupHeaderWrapper}>
                                    <div>
                                        <img
                                            src={require('../../../../assets/navbar/payflow.png')}
                                            alt=""
                                        />
                                    </div>
                                    <p
                                        className={styles.closePopup}
                                        onClick={closePopup}
                                    >
                                        <ImCross />
                                    </p>
                                </div>
                                <div className={styles.personalDataContainer}>
                                    <header>
                                        <h3>Szczegóły transakcji:</h3>
                                        <p>{selectedTransaction.date}</p>
                                    </header>
                                    <p>Tytuł: {selectedTransaction.description}</p>
                                    <div>
                                        <p>Kwota: {formatAmount(selectedTransaction.amount, selectedTransaction.currency)}</p>
                                    </div>
                                </div>
                                <div className={styles.personalDataContainer}>
                                    <div className={styles.personalDataWrapper}>
                                        <h3 className={styles.left}>Dane nadawcy:</h3>
                                        <p></p>
                                        <h3 className={styles.right}>Dane odbiorcy:</h3>
                                    </div>
                                    <div className={styles.personalDataWrapper}>
                                        <p className={styles.left}>{personalDataTransfer.sender.firstName} {personalDataTransfer.sender.lastName}</p>
                                        <p className={styles.center}>Imię i nazwisko</p>
                                        <p className={styles.right}>{personalDataTransfer.receiver.firstName} {personalDataTransfer.receiver.lastName}</p>
                                    </div>
                                    <div className={styles.personalDataWrapper}>
                                        <p className={styles.left}>{personalDataTransfer.sender.accountNumber}</p>
                                        <p className={styles.center}>Numer rachunku</p>
                                        <p className={styles.right}>{personalDataTransfer.receiver.accountNumber}</p>
                                    </div>
                                    <div className={styles.personalDataWrapper}>
                                        <p className={styles.left}>{personalDataTransfer.sender.address.zipCode} {personalDataTransfer.sender.address.city}, {personalDataTransfer.sender.address.country}</p>
                                        <p className={styles.center}>Adres</p>
                                        <p className={styles.right}>{personalDataTransfer.receiver.address.zipCode} {personalDataTransfer.receiver.address.city}, {personalDataTransfer.receiver.address.country}</p>
                                    </div>
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
