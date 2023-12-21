import React from 'react';
import styles from "./Transfers.module.css";
import TransfersAccountNumber from "./TransfersAccountNumber";
import Blik from "./Blik";

function Transfers() {
    return (
        <div className={styles.transfersContainer}>
            <div className={styles.transferType}>
                <h2>Wybierz typ przelewu</h2>
            </div>
            <div className={styles.transferShowFields}>
                <TransfersAccountNumber />
                <Blik />
            </div>
        </div>
    );
}

export default Transfers;

