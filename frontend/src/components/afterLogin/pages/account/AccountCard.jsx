import React, {useEffect, useState} from "react";
import styles from './Account.module.css'
import CreditCard from "../cards/CreditCard";
import {user} from "../../../../config/authConfig";

const AccountCard= (props) => {
    console.log(props.cardNumber)
    return(
      <div>
          <CreditCard currency={props.currency} type={'Karta debetowa'} balance={props.balance}
                      accountNumber={props.cardNumber} owner={user.name} expirationMonth={4}
                      expirationYear={24} cardStyle={1} details={true} id={1} size={"small"}/>
      </div>
    );
}
export default AccountCard;
