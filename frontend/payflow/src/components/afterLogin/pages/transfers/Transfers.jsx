import React from 'react';
import styles from "./Transfers.module.css";
import TransferAccountNumber from "./TransfersAccountNumber";
import Blik from "./Blik";
import PhoneTransfer from "./PhoneTransfer";

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

