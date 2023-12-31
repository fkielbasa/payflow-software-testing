import React from 'react';
import styles from "../../elements/forms/GeneralForm.module.css";
import GeneralForm from "../../elements/forms/GeneralForm";

function Credits() {
    const handleSubmit = () => {
        console.log('Przelew wysłany');
        alert('Przelew wysłany');
    };

    return (
        <div className={styles.creditsContainer}>
            <div className={styles.alignContainer}>
                <form className={styles.formStyle} onSubmit={handleSubmit}>
                    <GeneralForm name={"Numer konta"}/>
                    <GeneralForm name={"Odbiorca"}/>
                    <input className={styles.submit} type="submit" value="Wyślij"/>
                </form>
            </div>
        </div>
    );
}

export default Credits;

