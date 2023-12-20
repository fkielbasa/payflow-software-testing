import React, { useState } from 'react';
import styles from "../styles/transfers/TransfesBlik.module.css";

function TransferBlik() {
    const [blikCode, setBlikCode] = useState(null);

    const generateBlikCode = () => {
        const newBlikCode = Math.floor(100000 + Math.random() * 900000); // Generowanie sześcio-cyfrowego kodu
        setBlikCode(newBlikCode);
    };

    const handleButton = () => {
        generateBlikCode();
        alert('Blik');
    };

    return (
        <div className={styles.transferBlikContainer}>
            <h3>Blikiem</h3>
            <button onClick={handleButton} className={styles.btnColor} type="submit">Wygeneruj nowy kod Blik</button>
            <br/>
            <div className={styles.blik}>
                {blikCode !== null && <p>Kod Blik: {blikCode}</p>}
            </div>
        </div>
    );
}

export default TransferBlik;
