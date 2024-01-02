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
                <h3>Formularz przyznania kredytu</h3>
                <form className={styles.formStyle} onSubmit={handleSubmit}>
                    <div className={styles.textJustify}>
                        <p className={styles.hardText}>Dane identyfikacyjne:</p>
                    </div>
                    <GeneralForm showText={"Numer wniosku"} name={"applicationNumber"} type={"number"} maxLength={26}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Miejscowość"} name={"place"} type={"text"} maxLength={40} minLength={0}
                                 required={true}/>
                    <GeneralForm showText={"Dzień"} name={"day"} type={"date"} maxLength={40} minLength={0}
                                 required={true}/>
                    <hr className={styles.hardHrLine}/>
                    <div className={styles.textJustify}>
                        <p className={styles.hardText}>Dane kredytobiorcy:</p>
                    </div>
                    <GeneralForm showText={"Nazwisko"} name={"surname"} type={"text"} maxLength={40} minLength={0}
                                 required={true}/>
                    <GeneralForm showText={"Imie"} name={"name"} type={"text"} maxLength={40} minLength={0}
                                 required={true}/>
                    <GeneralForm showText={"Drugie imie"} name={"secondName"} type={"text"} maxLength={40} minLength={0}
                                 required={false}/>
                    <GeneralForm showText={"PESEL"} name={"pesel"} type={"number"} maxLength={11} minLength={0}
                                 required={true}/>
                    <GeneralForm showText={"Nr. telefonu"} name={"phoneNumber"} type={"number"} maxLength={9} minLength={0}
                                 required={true}/>
                    <GeneralForm showText={"Adres email"} name={"email"} type={"text"} maxLength={40} minLength={0}
                                 required={true}/>
                    <GeneralForm showText={"Dokument tożsamości"} name={"identityCard"} type={"text"} maxLength={9}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Ważny do"} name={"identityCardExpired"} type={"date"} maxLength={40}
                                 minLength={0} required={true}/>
                    <hr className={styles.lightHrLine}/>
                    <div className={styles.textJustify}>
                        <p className={styles.lightText}>Dane zamieszkania:</p>
                    </div>
                    <GeneralForm showText={"Kod pocztowy"} name={"zipCode"} type={"text"} maxLength={10}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Miejscowość"} name={"residence"} type={"text"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Ulica"} name={"street"} type={"text"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Nr. domu/mieszkania"} name={"houseApartmentNumber"} type={"number"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Okres zamieszkania od"} name={"residenceFrom"} type={"date"} maxLength={40}
                                 minLength={0} required={true}/>
                    <div className={styles.buttonJustify}>
                        <input className={styles.submit} type="submit" value="Prześlij"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Credits;

