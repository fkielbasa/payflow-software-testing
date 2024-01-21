import React, {useEffect, useState} from "react";
import styles from './Account.module.css'

const AccountDetails = (props) => {
    console.log("Aktywna" +props.blocked)
    let status;
    if(props.active){
        status = "Aktywna"
    }
    else{
        status ="Nie aktywna"
    }
    const getStatusColor = (status) => {
        switch (status) {
            case true:
                return 'green';
            case false:
                return 'red';
            default:
                return 'black';
        }
    };
    const statusColor = getStatusColor(props.active);
    return (
        <div>
            <p style={{display: 'inline'}}>Status: </p>
            <p style={{color: statusColor,display: 'inline'}}> {status}</p>
            Tu może coś będzie idk???
        </div>
    );
}
export default AccountDetails;
