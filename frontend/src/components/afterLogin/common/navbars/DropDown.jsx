import React, {useEffect, useState} from "react";
import stylesDropDown from "./DropDown.module.css";
import {formatAccountNumber} from "../../../utils/formatAccountNumber";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config, user} from "../../../../config/authConfig";
import { useNavigate } from "react-router-dom";
const DropdownList = (props) => {
    let navigate = useNavigate();
    const [accountData, setAccountData] = useState([])

    useEffect(() => {
        const getData = async () => {
            axios.get(`${BASE_URL}/api/v1/users/${user.userId}/numbers`, config)
                .then((response) => {
                    console.log('response.data', response.data);
                    setAccountData(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
        };

        getData();
    }, [user.userId]);

    const handleAccountSelect = (accountId) => {
        console.log(accountId)
        props.status(false);
        props.onAccountSelect(accountId)
        navigate('/account',{state:{accountId}})
    };

    return (
        <ul className={stylesDropDown.dropdownList}>
            {accountData.map((account, index) => (
                <li key={index} onClick={() => handleAccountSelect(account.id)}>
                    {account.currency}
                </li>
            ))}
        </ul>
    );
}
export default DropdownList;
