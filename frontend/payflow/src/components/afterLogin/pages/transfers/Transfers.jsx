import React from 'react';
import styles from "../styles/transfers/Transfers.module.css";
import TransferAccountNumber from "../elements/TransferAccountNumber";
import Blik from "../elements/Blik";
import PhoneTransfer from "../elements/PhoneTransfer";

function Transfers() {
    return (
        <div className={styles.transfersContainer}>
            <div className={styles.transferType}>
                <h2>Wybierz typ przelewu</h2>
            </div>
            <div className={styles.transferShowFields}>
                <TransferAccountNumber />
                <div>
                    <Blik />
                    <PhoneTransfer />
                </div>
            </div>
        </div>
    );
}

export default Transfers;

