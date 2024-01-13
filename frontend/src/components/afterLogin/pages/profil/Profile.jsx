import React, {useEffect, useState} from 'react';
import {config, user} from "../../../../config/authConfig";
import styles from './Profile.module.css'
import PasswordChange from "./PasswordChange";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import TextError from "../../common/TextError";
import PersonalData from "./personalData";
import PrivateData from "./privateData";
import AddressData from "./addressData";

const Profile = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const getUserData = () => {
            axios
                .get(
                    `${BASE_URL}/api/v1/users/${user.userId}`,
                    config
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
                    <PersonalData
                        login={userData.login}
                        firstName={userData.firstName}
                        lastName={userData.lastName}
                        nationality={userData.nationality}
                        dateOfBirth={userData.dateOfBirth}
                    />
                    <PrivateData
                        email={userData.email}
                        phoneNumber={userData.phoneNumber}
                    />
                    <AddressData
                        addressData={userData.residentialAddress}
                        type={"RESIDENTIAL"}
                        name={"zamieszkania"}
                    />
                    <AddressData
                        addressData={userData.correspondenceAddress}
                        type={"CORRESPONDENCE"}
                        name={"korespondencyjny"}
                    />
                    {/*<div className={[styles.passwordWrapper, styles.cell].join(' ')}>*/}
                        <PasswordChange />
                    {/*</div>*/}
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

