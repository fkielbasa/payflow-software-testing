import React, {useEffect, useState} from "react";
import AccountData from "./AccountData";
import axios from "axios";
import styles from './Account.module.css'
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";
import {useLocation} from "react-router-dom";
import AccountCard from "./AccountCard";

const Account = () => {
    const [accountData, setAccountData] = useState({})
    const [cardData, setCardData] = useState({})
    const location = useLocation();

    const { state } = location;
    const accountId = state ? state.accountId : null;
    useEffect(() => {
            console.log("id: " + accountId);
            console.log(localStorage)
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
                    .get(`${BASE_URL}/api/v1/numbers/2/cards`, config)
                    .then((res) => {
                        setCardData(res.data[0]);
                        console.log(res.data[0]);
                        })
                    .catch((er) => {
                            console.error(er);
                        });
            }
        getAccountDetails()
        getCardDetails();
    }, [accountId]);

    return (
        <div className={styles.accountContainer}>
            <div className={styles.leftContainer}>
                {accountData && Object.keys(accountData).length > 0 && (
                    <AccountData
                        type={accountData.accountNumberType}
                        balance={accountData.balance}
                        number={accountData.number}
                        currency={accountData.currency}
                    />
                )}
            </div>
            <div className={styles.rightContainer}>
                {cardData && Object.keys(cardData).length > 0 && (
                <AccountCard
                    balance={accountData.balance}
                    currency={accountData.currency}
                    cardNumber={cardData.cardNumber}
                    cvv={cardData.cvv}
                    validDate={cardData.validDate}
                />
                )}
            </div>
        </div>
    );
}
export default Account
