import React, {useEffect, useState} from 'react';
import TextInputChange from "../../common/TextInputChange";
import {config, user} from "../../../../config/authConfig";
import styles from './Profile.module.css'
import ShowChangeBtn from "./ShowChangeBtn";
import PasswordChange from "./PasswordChange";
import {checkEmail, checkPhoneNumber} from "../../../utils/validation";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import TextError from "../../common/TextError";

function Profile() {
    const [userData, setUserData] = useState({})
    const [email, setEmail]=useState({})
    const [phoneNumber, setPhoneNumber]=useState({})
    const [address, setAddress]=useState({
        zipCode: '',
        city: '',
        street: '',
        homeNumber: '',
        flatNumber: '',
        country: ''

    })
    const [addressCorrespondence, setAddressCorrespondence]=useState({
        zipCodeCorrespondence: '',
        cityCorrespondence: '',
        streetCorrespondence: '',
        homeNumberCorrespondence: '',
        flatNumberCorrespondence: '',
        countryCorrespondence: ''
    })
    const [password, setPassword] = useState('')
    const [disableEmail, setDisableEmail] = useState(true)
    const [disablePhoneNumber, setDisablePhoneNumber] = useState(true)
    const [disableAddress, setDisableAddress] = useState(true)
    const [disableAddressCorrespondence, setDisableAddressCorrespondence] = useState(true)

    const showErrorAlert = () => {
        alert('Ups, coś poszło nie tak. Zmiana nie powiodła się.')
    }
    const showCorrectData = () => {
        alert('Podaj prawidłowe dane!')
    }
    const submitChangeEmail = () => {
        if (!checkEmail(email.email)){
            showCorrectData()
            return
        }
        axios
            .patch(
                `${BASE_URL}/api/v1/user/${user.userId}/email`,
                email,
                config
            )
            .then(r => {
                setDisableEmail(true)
            })
            .catch(error => {
                showErrorAlert()
            })
    }


    const submitPhoneNumber = () => {
        if (!checkPhoneNumber(phoneNumber.phoneNumber)){
            showCorrectData()
            return
        }
        axios
            .patch(
                `${BASE_URL}/api/v1/user/${user.userId}/phone-number`,
                phoneNumber,
                config
            )
            .then(r => {
                setDisablePhoneNumber(true)
            })
            .catch(error => {
                showErrorAlert()
            })
    }


    const submitAddress = () => {
        console.log(address)
    }


    const submitAddressCorrespondence = () => {
        console.log(addressCorrespondence)
    }

    useEffect(() => {
        const getUserData = () => {
            axios
                .get(
                    `${BASE_URL}/api/v1/users/${user.userId}`
                )
                .then(res => {
                    setUserData(res.data)
                })
                .catch(er => {

                })
        }
        getUserData()
    }, []);
    return (
        <div className={styles.containerFluid}>
            <h2>Dane Konta</h2>
            {Object.keys(userData).length > 0 ? (
                <div className={styles.container}>
                    <div className={[styles.personDataWrapper, styles.cell].join(' ')}>
                        <p>Dane osobowe</p>
                        <TextInputChange
                            name={"Login"}
                            var={"login"}
                            placeholder={userData.login}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Imię"}
                            var={"firstName"}
                            placeholder={userData.firstName}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Nazwisko"}
                            var={"lastName"}
                            placeholder={userData.lastName}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Kraj"}
                            var={"CountryInfo"}
                            placeholder={userData.nationality}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"data urodzenia"}
                            var={"birthDate"}
                            placeholder={userData.dateOfBirth}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                    </div>
                    <div className={[styles.personContactWrapper, styles.cell].join(' ')}>
                        <p>Dane prywatne</p>
                        <TextInputChange
                            name={"email"}
                            var={"email"}
                            placeholder={userData.email}
                            state={setEmail}
                            type={"text"}
                            clicked={disableEmail}
                            disabled={disableEmail}
                        />
                        <ShowChangeBtn
                            disable={disableEmail}
                            changeDisable={() => setDisableEmail(false)}
                            submitData={submitChangeEmail}
                        />
                        <TextInputChange
                            name={"telefon"}
                            var={"phoneNumber"}
                            placeholder={userData.phoneNumber}
                            state={setPhoneNumber}
                            type={"text"}
                            clicked={disablePhoneNumber}
                            disabled={disablePhoneNumber}
                        />
                        <ShowChangeBtn
                            disable={disablePhoneNumber}
                            changeDisable={() => setDisablePhoneNumber(false)}
                            submitData={submitPhoneNumber}
                        />

                    </div>
                    <div className={[styles.addressWrapper, styles.cell].join(' ')}>
                        <p>Adres zamieszkania</p>
                        <TextInputChange
                            name={"Kod pocztowy"}
                            var={"zipCode"}
                            placeholder={userData.residentialAddress.zipCode}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"Miejscowość"}
                            var={"city"}
                            placeholder={userData.residentialAddress.city}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"ulica"}
                            var={"street"}
                            placeholder={userData.residentialAddress.street}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"nr domu"}
                            var={"homeNumber"}
                            placeholder={userData.residentialAddress.houseNumber}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"Nr mieszkania"}
                            var={"flatNumber"}
                            placeholder={userData.residentialAddress.apartmentNumber}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"Kraj"}
                            var={"country"}
                            placeholder={userData.residentialAddress.country}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <ShowChangeBtn
                            disable={disableAddress}
                            changeDisable={() => setDisableAddress(false)}
                            submitData={submitAddress}
                        />
                    </div>
                    <div className={[styles.correspondenceWrapper, styles.cell].join(' ')}>
                        <p>Adres zamieszkania</p>
                        <TextInputChange
                            name={"Kod pocztowy"}
                            var={"zipCodeCorrespondence"}
                            placeholder={userData.correspondenceAddress.zipCode}
                            state={setAddressCorrespondence}
                            type={"text"}
                            clicked={disableAddressCorrespondence}
                            disabled={disableAddressCorrespondence}
                        />
                        <TextInputChange
                            name={"Miejscowość"}
                            var={"cityCorrespondence"}
                            placeholder={userData.correspondenceAddress.city}
                            state={setAddressCorrespondence}
                            type={"text"}
                            clicked={disableAddressCorrespondence}
                            disabled={disableAddressCorrespondence}
                        />
                        <TextInputChange
                            name={"ulica"}
                            var={"streetCorrespondence"}
                            placeholder={userData.correspondenceAddress.street}
                            state={setAddressCorrespondence}
                            type={"text"}
                            clicked={disableAddressCorrespondence}
                            disabled={disableAddressCorrespondence}
                        />
                        <TextInputChange
                            name={"nr domu"}
                            var={"homeNumberCorrespondence"}
                            placeholder={userData.correspondenceAddress.houseNumber}
                            state={setAddressCorrespondence}
                            type={"text"}
                            clicked={disableAddressCorrespondence}
                            disabled={disableAddressCorrespondence}
                        />
                        <TextInputChange
                            name={"Nr mieszkania"}
                            var={"flatNumberCorrespondence"}
                            placeholder={userData.correspondenceAddress.apartmentNumber}
                            state={setAddressCorrespondence}
                            type={"text"}
                            clicked={disableAddressCorrespondence}
                            disabled={disableAddressCorrespondence}
                        />
                        <TextInputChange
                            name={"Kraj"}
                            var={"countryCorrespondence"}
                            placeholder={userData.correspondenceAddress.country}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddressCorrespondence}
                            disabled={disableAddressCorrespondence}
                        />
                        <ShowChangeBtn
                            disable={disableAddressCorrespondence}
                            changeDisable={() => setDisableAddressCorrespondence(false)}
                            submitData={submitAddressCorrespondence}
                        />
                    </div>
                    <div className={[styles.passwordWrapper, styles.cell].join(' ')}>
                        <PasswordChange savePassword={setPassword}/>
                    </div>
                </div>
            ) : (
                <TextError
                    text={"Wczytanie danych nie powiodło się."}
                />
            )}

        </div>
    );
}

export default Profile;

