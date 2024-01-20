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

function Home() {
    const fadeInAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });
    const [apiData, setApiData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const currencyRef = useRef(null);
    const accountTypeRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            axios
                .get(`http://localhost:8080/api/v1/users/${user.userId}/numbers`, config)
                .then((response) => {
                    setApiData(response.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        getData();
    }, [user.userId]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleAddNumber = () => {
        closePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Uzyskiwanie wartości z referencji
        const selectedCurrency = currencyRef.current.value;
        const selectedAccountType = accountTypeRef.current.value;

        // Wysyłka danych do API
        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/number',
                {
                    userId: user.userId,
                    currency: selectedCurrency,
                    accountType: selectedAccountType,
                },
                config
            );

            console.log('API Response:', response.data);

            // Dodatkowe operacje po pomyślnej wysyłce
            handleAddNumber();
        } catch (error) {
            console.error('API Error:', error);
            // Obsługa błędów związanych z wysyłką do API
        }
    };

    return (
        <animated.div style={fadeInAnimation}>
            <div className={styles.homePage}>
                <div className={styles.leftSitePosition}>
                    <div className={styles.accountNumberSection}>
                        {apiData.map((numbers, index) => (
                            <div key={index} className={styles.accountNumber}>
                                <AccountNumber
                                    accountNumberType={numbers.accountNumberType}
                                    // balance={numbers.balance}
                                    currency={numbers.currency}
                                    number={numbers.number}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.addAccountNumberPosition}>
                        <ReactiveButton
                            color="primary"
                            style={{ backgroundColor: '#1687A7', fontSize: 20, fontWeight: 'bold' }}
                            onClick={openPopup}
                            idleText="+"
                        />
                    </div>
                </div>
                <div className={styles.rightSitePosition}>
                    <div className={styles.sameHeight}>
                        <p>Ostatnie transakcje</p>
                        <Link to="/transactions" className={styles.linkTo}>
                            Pokaż więcej
                        </Link>
                    </div>
                    <TransactionsContainer maxPerPage={4} />
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
                                            style={{ backgroundColor: '#1687A7', fontWeight: 'bold' }} type="submit" idleText="Dodaj konto bankowe"/>
                        </FormContainer>
                    </PopupContainer>
                </Popup>
            </div>
        </animated.div>
    );
}

export default Home;
