import React, {useState} from 'react';
import TextInputChange from "../../common/TextInputChange";
import {user} from "../../../../config/authConfig";
import styles from './Profile.module.css'
import ShowChangeBtn from "./ShowChangeBtn";
import PasswordForm from "../../../beforeLogin/pages/login/passwordForm";
import PasswordChange from "./PasswordChange";

function Profile() {

    const [privateData, setPrivateData]=useState({})
    const [disablePrivateData, setDisablePrivateData] = useState(true)
    const [address, setAddress]=useState({})
    const [disableAddress, setDisableAddress] = useState(true)
    const [addressCorrespondence, setAddressCorrespondence]=useState({})
    const [disableAddressCorrespondence, setDisableAddressCorrespondence] = useState(true)
    const [password, setPassword] = useState('')

    const changePrivateData = () => setDisablePrivateData(false)

    const submitPrivateData = () => {
        console.log(privateData)
    }
    const changeAddress = () => setDisableAddress(false)

    const submitAddress = () => {
        console.log(address)
    }
    const changeAddressCorrespondence = () => setDisableAddressCorrespondence(false)

    const submitAddressCorrespondence = () => {
        console.log(addressCorrespondence)
    }


    return (
        <div className={styles.containerFluid}>
            <h2>Dane Konta</h2>
            <div className={styles.container}>
                    <div className={[styles.personDataWrapper, styles.cell].join(' ')}>
                        <p>Dane osobowe</p>
                        <TextInputChange
                            name={"Login"}
                            placeholder={user.login}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Imię"}
                            placeholder={user.name}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Nazwisko"}
                            placeholder={"Kowalski"}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Kraj"}
                            placeholder={"polska"}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"data urodzenia"}
                            placeholder={"01-04-2001"}
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
                            placeholder={"test@wp.pl"}
                            state={setPrivateData}
                            type={"text"}
                            clicked={disablePrivateData}
                            disabled={disablePrivateData}
                        />
                        <TextInputChange
                            name={"telefon"}
                            placeholder={"123456789"}
                            state={setPrivateData}
                            type={"text"}
                            clicked={disablePrivateData}
                            disabled={disablePrivateData}
                        />
                        <ShowChangeBtn
                            disable={disablePrivateData}
                            changeDisable={changePrivateData}
                            submitData={submitPrivateData}
                        />
                    </div>
                <div className={[styles.addressWrapper, styles.cell].join(' ')}>
                    <p>Adres zamieszkania</p>
                    <TextInputChange
                        name={"zipCode"}
                        placeholder={"33-100"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"city"}
                        placeholder={"Tarnów"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"street"}
                        placeholder={"Mickiewicza 8"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"homeNumber"}
                        placeholder={"3"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"flatNumber"}
                        placeholder={"4a"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"Kraj"}
                        placeholder={"Polska"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <ShowChangeBtn
                        disable={disableAddress}
                        changeDisable={changeAddress}
                        submitData={submitAddress}
                    />
                </div>
                <div className={[styles.correspondenceWrapper, styles.cell].join(' ')}>
                    <p>Adres zamieszkania</p>
                    <TextInputChange
                        name={"zipCode"}
                        placeholder={"33-100"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"city"}
                        placeholder={"Tarnów"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"street"}
                        placeholder={"Mickiewicza 8"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"homeNumber"}
                        placeholder={"3"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"flatNumber"}
                        placeholder={"4a"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"Kraj"}
                        placeholder={"Polska"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <ShowChangeBtn
                        disable={disableAddressCorrespondence}
                        changeDisable={changeAddressCorrespondence}
                        submitData={submitAddressCorrespondence}
                    />
                </div>
                <div className={[styles.passwordWrapper, styles.cell].join(' ')}>
                    <PasswordChange savePassword={password} />
                </div>
            </div>

        </div>
    );
}

export default Profile;

