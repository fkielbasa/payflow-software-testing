import React from 'react';
import styles from "../styles/transfers/Transfers.module.css";
import TransferAccountNumber from "../elements/TransferAccountNumber";
import TransferBlik from "../elements/TransferBlik";

function Transfers() {
    return (
        <div className={styles.transfersContainer}>
            <div className={styles.transferType}>
                <h2>Wybierz typ przelewu</h2>
            </div>
            <div className={styles.transferShowFields}>
                <TransferAccountNumber />
                <TransferBlik />
            </div>
        </div>
    );
}

export default Transfers;

