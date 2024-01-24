import React, {useEffect, useState} from "react";
import styles from './Account.module.css'
import CreditCard from "../cards/CreditCard";

const AccountCard= (props) => {
    console.log(props.cardNumber)
    return(
        <div className={styles.cardBottomMargin}>
          <CreditCard currency={props.currency}
                      type={'Karta debetowa'}
                      balance={props.balance}
                      accountNumber={props.cardNumber}
                      owner={props.owner}
                      expirationMonth={props.month}
                      expirationYear={props.year}
                      cardStyle={4}
                      details={false} id={1} size={"small"}/>
        </div>
    );
}
export default AccountCard;
