import React, {useEffect, useState} from "react";
import AccountData from "./AccountData";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";
import {useLocation} from "react-router-dom";
const Account = () => {
    const [accountData, setAccountData] = useState({})
    const location = useLocation();

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
            getAccountDetails();
    }, [accountId]);

    return (
        <div>
            {accountData && Object.keys(accountData).length > 0 && (
                <AccountData
                    type={accountData.accountNumberType}
                    balance={accountData.balance}
                    number={accountData.number}
                    currency={accountData.currency}
                />
            )}
        </div>
    );
}
export default Account
