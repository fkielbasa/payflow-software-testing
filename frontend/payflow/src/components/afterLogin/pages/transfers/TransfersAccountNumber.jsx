import React from 'react';
import styles from "./TransfersAccountNumber.module.css";


function TransfersAccountNumber() {
    const handleSubmit = () => {
        console.log('Przelew wysłany')
        alert('Przelew wysłany');

    };

    return (
        <div className={styles.transferAccountNumberContainer}>
            <h3>Na numer konta</h3>
            <form className={styles.addForm} onSubmit={handleSubmit}>
                <label className={styles.addLabel}>
                    Na numer konta:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <label className={styles.addLabel}>
                    Odbiorca:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <label className={styles.addLabel}>
                    Numer konta odbiorcy:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <label className={styles.addLabel}>
                    Tytuł:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <label className={styles.addLabel}>
                    Kwota:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <label className={styles.addLabel}>
                    Waluta:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <label className={styles.addLabel}>
                    Data przelewu:
                    <input
                        className={`${styles.formControl} ${styles.addMargin}`}
                        type="text"
                        name=""
                    />
                </label>
                <button className={`${styles.btn} ${styles.btnColor}`} type="submit">Wyślij</button>
            </form>
        </div>
    );
}

export default TransfersAccountNumber;
