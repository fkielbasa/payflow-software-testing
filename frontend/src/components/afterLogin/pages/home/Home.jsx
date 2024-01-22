import React, { useEffect, useState, useRef } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import TransactionsContainer from '../../common/transactions/TransactionsContainer';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { config, user } from '../../../../config/authConfig';
import AccountNumber from './AccountNumber';
import ReactiveButton from 'reactive-button';
import Popup from 'reactjs-popup';
import {
    PopupContainer,
    FormContainer,
    SpaceObject,
    FormField,
    StyledSelect,
} from './PopupStyles';
import EmptyAccountNumber from "./EmptyAccountNumber";
import TransactionCard from "../../common/transactions/transactionCard";
import {BASE_URL} from "../../../../config/shared";
import TransactionChart from './TransactionChart';


function Home() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });
    const [apiDataAccountNumber, setApiDataAccountNumber] = useState([]);
    const [apiDataTransactions, setApiDataTransactions] = useState([]);
    const [apiDataAllTransactions, setApiDataAllTransactions] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [userAccounts, setUserAccounts] = useState([])
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [receiverData, setReceiverData] = useState({});
    const currencyRef = useRef(null);
    const accountTypeRef = useRef(null);

    useEffect(() => {
        console.log('user.userId', user.userId);
        const getDataAccountNumber = async () => {
            axios
                .get(`${BASE_URL}/api/v1/users/${user.userId}/numbers`, config)
                .then((response) => {
                    console.log('getDataAccountNumber response', response.data)
                    setApiDataAccountNumber(response.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        const getDataTransactions = async () => {
            axios.get(`${BASE_URL}/api/v1/account-numbers/${user.userId}/transfers?last=5`, config)
                .then((response) => {
                    console.log('getDataTransactions response',response.data);
                    setApiDataTransactions(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
        };

        const getDataAllTransactions = async () => {
            axios.get(`${BASE_URL}/api/v1/account-numbers/${user.userId}/transfers`, config)
                .then((response) => {
                    console.log('getDataAllTransactions response',response.data);
                    setApiDataAllTransactions(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
        };

        const getAccountNumbers = () => {
            axios
                .get(`${BASE_URL}/api/v1/users/${user.userId}/numbers`,
                    config
                )
                .then((response) => {
                    setUserAccounts(response.data.map(ac => ac.id))
                    console.log('getAccountNumbers response',response.data.map(ac => ac.id))
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        getDataAccountNumber();
        getDataTransactions();
        getAccountNumbers()
        getDataAllTransactions();
    }, [user.userId]);

    const personalData = async (id) => {
        console.log('id:', id);
        axios.get(`${BASE_URL}/api/v1/transfers/${id}`, config)
            .then((response) => {
                console.log('personalData response:', response.data);
                setReceiverData(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleAddNumber = () => {
        closePopup();
    };

    const checkCurrencyAvailability = async (selectedCurrency) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/users/${user.userId}/numbers`, config);

            // Sprawdź, czy istnieje konto o podanej walucie
            return response.data.some((account) => account.currency === selectedCurrency);
        } catch (error) {
            console.error('API Error:', error);
            return false; // W przypadku błędu zwraca false
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const selectedCurrency = currencyRef.current.value;
        const selectedAccountType = accountTypeRef.current.value;

        // Sprawdź dostępność konta o podanej walucie
        const isCurrencyAvailable = await checkCurrencyAvailability(selectedCurrency);

        if (isCurrencyAvailable) {
            console.error(`Konto w walucie ${selectedCurrency} już istnieje!`);
            return; // Przerwij funkcję w przypadku dostępności konta o podanej walucie
        }

        // Kontynuuj zapytanie POST tylko jeśli nie istnieje konto o podanej walucie
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/users/${user.userId}/number`,
                {
                    currency: selectedCurrency,
                    accountType: selectedAccountType,
                },
                config
            );

            console.log('API Response:', response.data);

            handleAddNumber();

            // Odśwież stronę po udanym zapytaniu POST
            window.location.reload();
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    const handleTransactionClick = (transaction) => {
        setSelectedTransaction(transaction);
        personalData(transaction.id);
    };

    return (
        <animated.div style={fadeInAnimation}>
            <div className={styles.homePage}>
                <div className={styles.accountNumberSection}>
                    {apiDataAccountNumber.map((numbers, index) => (
                        <div key={index} className={styles.giveMeMargin}>
                            <AccountNumber
                                accountNumberType={numbers.accountNumberType}
                                // balance={numbers.balance}
                                currency={numbers.currency}
                                number={numbers.number}
                            />
                        </div>
                    ))}
                    {(apiDataAccountNumber.length === 1 || apiDataAccountNumber.length === 2) &&
                        <EmptyAccountNumber onClick={openPopup}/>}
                </div>
                <div className={styles.content}>
                    <div className={styles.leftSitePosition}>

                        <TransactionChart transactions={apiDataAllTransactions} />



                    </div>
                    <div className={styles.rightSitePosition}>
                        <div className={styles.sameHeight}>
                            <p>Ostatnie transakcje</p>
                            <Link to="/transactions" className={styles.linkTo}>
                                Pokaż więcej
                            </Link>
                        </div>
                        <div className={styles.transactionContainer}>
                            {apiDataTransactions.map((transaction, index) => (
                                <div className={styles.transactionCard}>
                                    <TransactionCard
                                        key={index}
                                        userSender={userAccounts.includes(transaction.senderAccountId)}
                                        data={transaction}
                                        handleTransactionClick={handleTransactionClick}
                                        showAmount
                                        showDate
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Popup open={isPopupOpen} onClose={closePopup}>
                    <PopupContainer>
                        <FormContainer onSubmit={handleSubmit}>
                            <FormField>
                                <SpaceObject>
                                    <label htmlFor="currency">Waluta:</label>
                                </SpaceObject>
                                <StyledSelect name="currency" id="currency" ref={currencyRef}>
                                    <option value="PLN">PLN</option>
                                    <option value="EUR">EUR</option>
                                    <option value="USD">USD</option>
                                </StyledSelect>
                            </FormField>
                            <FormField>
                                <SpaceObject>
                                    <label htmlFor="accountType">Typ konta:</label>
                                </SpaceObject>
                                <StyledSelect name="accountType" id="accountType" ref={accountTypeRef}>
                                    <option value="INTENSIVE">INTENSIVE</option>
                                    <option value="STANDARD">STANDARD</option>
                                </StyledSelect>
                            </FormField>
                            <ReactiveButton color="primary"
                                            style={{backgroundColor: '#1687A7', fontWeight: 'bold'}} type="submit"
                                            idleText="Dodaj konto bankowe"/>
                        </FormContainer>
                    </PopupContainer>
                </Popup>
            </div>
        </animated.div>
    );
}

export default Home;
