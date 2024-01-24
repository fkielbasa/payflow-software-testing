import React, {useEffect, useState} from "react";
import AccountData from "./AccountData";
import axios from "axios";
import styles from './Account.module.css'
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";
import {useLocation} from "react-router-dom";
import AccountCard from "./AccountCard";
import AccountDetails from "./AccountDetails";
import Card from "./NewCard";

const Account = () => {
    const [accountData, setAccountData] = useState({})
    const [cardData, setCardData] = useState({})
    const location = useLocation();
    const [expirationMonth, setExpirationMonth] = useState(null);
    const [expirationYear, setExpirationYear] = useState(null);
    const { state } = location;
    const accountId = state ? state.accountId : null;
    useEffect(() => {
            console.log("id: " + accountId);
            const getAccountDetails = () => {
                axios
                    .get(`${BASE_URL}/api/v1/numbers/${accountId}`, config)
                    .then((res) => {
                        setAccountData(res.data);
                        console.log(res.data);
                    })
                    .catch((er) => {
                        console.error(er);
                    });
            };
            const getCardDetails = () => {
                axios
                    .get(`${BASE_URL}/api/v1/numbers/${accountId}/card`, config)
                    .then((res) => {
                        setCardData(res.data);
                        extractMonthAndYear(res.data.validDate);
                        console.log(res.data);
                        })
                    .catch((er) => {
                            console.error(er);
                        });
            }
            getAccountDetails()
            getCardDetails();
    }, [accountId]);

    const extractMonthAndYear = (validDate) => {
        const date = new Date(validDate);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedMonth = month < 10 ? `0${month}` : month;

        setExpirationMonth(formattedMonth);
        setExpirationYear(year.toString().slice(2));
    };

    return (
        <div className={styles.mainContainer}>
        <div className={styles.accountLeftContainer}>
            <div className={styles.accountDataContainer}>
            {accountData && Object.keys(accountData).length > 0 ? (
                <div className={styles.leftContainer}>
                    <AccountData
                        type={accountData.accountNumberType}
                        balance={accountData.balance}
                        number={accountData.number}
                        currency={accountData.currency}
                    />
                </div>
            ) : (
                <p>Brak danych do wyświetlenia</p>
            )}
            </div>
            <p>TUTAJ BĘDZIE KIEDYŚ WYKRES??</p>
            JAK BĘDZIE TO BĘDZIE
        </div>
        <div className={styles.accountRightContainer}>
            {cardData && Object.keys(cardData).length > 0 ? (
                <div className={styles.rightContainer}>
                    Karta
                    <AccountCard
                        owner={cardData.owner}
                        balance={accountData.balance}
                        currency={accountData.currency}
                        cardNumber={cardData.cardNumber}
                        cvv={cardData.cvv}
                        month={expirationMonth}
                        year={expirationYear}
                    />
                    <AccountDetails
                        id={cardData.id}
                        active={cardData.active}
                        blocked={cardData.blocked}
                    />
                </div>
            ) : (
                <Card accountId={accountId}/>
            )}
        </div>
        </div>
    );

}
export default Account
