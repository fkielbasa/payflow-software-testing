import React, {useEffect, useState} from "react";
import styles from './Account.module.css'
import TextInputChange from "../../common/inputs/TextInputChange";
import {formatAccountNumber} from "../../../utils/formatAccountNumber";

const AccountData = (props) => {
    return (
    <div className={styles.containerData}>
        <p>Dane rachunku</p>
        <TextInputChange
            name={"Typ konta"}
            placeholder={props.type}
            type={"text"}
            var={"type"}
            clicked
            disabled
        />
        <TextInputChange
            name={"Saldo"}
            placeholder={props.balance+" "+props.currency}
            type={"text"}
            var={"balance"}
            clicked
            disabled
        />
        <TextInputChange
            name={"Numer konta"}
            placeholder={formatAccountNumber(props.number)}
            type={"text"}
            var={"number"}
            clicked
            disabled
        />
        <TextInputChange
            name={"Waluta"}
            placeholder={props.currency}
            type={"text"}
            var={"currency"}
            clicked
            disabled
        />
    </div>
);
}
export default AccountData;
