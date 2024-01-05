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
                    <div className={styles.twoSides}>
                        <div className={styles.side}>
                            <p className={styles.hardText}>Dane kredytobiorcy:</p>
                            <GeneralForm showText={"Nazwisko"} name={"surname"} type={"text"} maxLength={40}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Imie"} name={"name"} type={"text"} maxLength={40} minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Drugie imie"} name={"secondName"} type={"text"} maxLength={40}
                                         minLength={0}
                                         required={false}/>
                            <GeneralForm showText={"PESEL"} name={"pesel"} type={"number"} maxLength={11} minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Nr. telefonu"} name={"phoneNumber"} type={"number"} maxLength={9}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Adres email"} name={"email"} type={"text"} maxLength={40}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Dokument tożsamości"} name={"identityCard"} type={"text"}
                                         maxLength={9}
                                         minLength={0} required={true}/>
                            <GeneralForm showText={"Ważny do"} name={"identityCardExpired"} type={"date"} maxLength={40}
                                         minLength={0} required={true}/>
                            <GeneralForm showText={"Stan cywilny"} name={"maritalStatus"} type={"text"}
                                         maxLength={40}
                                         minLength={0} required={true}/>
                        </div>
                        <div className={styles.side}>
                            <p className={styles.hardText}>Dochody Wnioskodawny:</p>
                            <GeneralForm showText={"Nazwa zakładu pracy/przedsiębiorstwa/nr. świadczenia"}
                                         name={"workName"} type={"text"} maxLength={80}
                                         minLength={0} required={true}/>
                            <GeneralForm showText={"Numer NIP"} name={"nip"} type={"number"} maxLength={20}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Kod pocztowy miejsca pracy"} name={"workPostcardCode"} type={"text"}
                                         maxLength={10} minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Miejscowość"} name={"placeOfWork"} type={"text"} maxLength={40}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Ulica"} name={"streetWork"} type={"text"} maxLength={40}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Nr. domu/mieszkania"} name={"workHouseApartmentNumber"}
                                         type={"text"}
                                         maxLength={40}
                                         minLength={0} required={true}/>
                            <GeneralForm showText={"Nr. telefonu"} name={"workPhoneNumber"} type={"number"}
                                         maxLength={10}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Stanowisko"} name={"position"} type={"text"} maxLength={40}
                                         minLength={0}
                                         required={true}/>
                            <GeneralForm showText={"Średni miesięczny dochód brutto"} name={"income"} type={"number"}
                                         maxLength={40} minLength={0}
                                         required={true}/>
                        </div>
                    </div>
                    <hr className={styles.hardHrLine}/>
                    <p className={styles.hardText}>Dane zamieszkania:</p>
                    <GeneralForm showText={"Kod pocztowy"} name={"zipCode"} type={"text"} maxLength={10}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Miejscowość"} name={"residence"} type={"text"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Ulica"} name={"street"} type={"text"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Nr. domu/mieszkania"} name={"houseApartmentNumber"} type={"text"}
                                 maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Okres zamieszkania od"} name={"residenceFrom"} type={"date"}
                                 maxLength={40}
                                 minLength={0} required={true}/>
                    <hr className={styles.hardHrLine}/>
                    <p className={styles.hardText}>Obciążenia wnioskodawcy:</p>
                    <GeneralForm showText={"Ilość osób na utrzymaniu"} name={"maintenance"} type={"number"} maxLength={20}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Wysokość miesięcznych wydatków"} name={"spending"} type={"number"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Okres trwania kredytu (msc.)"} name={"startDate"} type={"number"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Numer rachunku obciążenia"} name={"ra"} type={"number"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Wysokość kredytu"} name={"creditBalance"} type={"number"} maxLength={40}
                                 minLength={0} required={true}/>
                    <GeneralForm showText={"Oprocentowanie"} name={"op"} type={"number"} maxLength={40}
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
