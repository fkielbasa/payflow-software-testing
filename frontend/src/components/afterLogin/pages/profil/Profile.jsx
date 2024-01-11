import React, {useState} from 'react';
import TextInputChange from "../../common/TextInputChange";
import {user} from "../../../../config/authConfig";
import styles from './Profile.module.css'
import ShowChangeBtn from "./ShowChangeBtn";
import PasswordChange from "./PasswordChange";

function Profile() {

    const [privateData, setPrivateData]=useState({
        email: '',
        phoneNumber: ''
    })
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
    const [disablePrivateData, setDisablePrivateData] = useState(true)
    const [disableAddress, setDisableAddress] = useState(true)
    const [disableAddressCorrespondence, setDisableAddressCorrespondence] = useState(true)

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
                            var={"login"}
                            placeholder={user.login}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Imię"}
                            var={"firstName"}
                            placeholder={user.name}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Nazwisko"}
                            var={"lastName"}
                            placeholder={"Kowalski"}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"Kraj"}
                            var={"CountryInfo"}
                            placeholder={"polska"}
                            state={''}
                            type={"text"}
                            clicked
                            disabled
                        />
                        <TextInputChange
                            name={"data urodzenia"}
                            var={"birthDate"}
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
                            var={"email"}
                            placeholder={"test@wp.pl"}
                            state={setPrivateData}
                            type={"text"}
                            clicked={disablePrivateData}
                            disabled={disablePrivateData}
                        />
                        <TextInputChange
                            name={"telefon"}
                            var={"phone"}
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
                        name={"Kod pocztowy"}
                        var={"zipCode"}
                        placeholder={"33-100"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"Miejscowość"}
                        var={"city"}
                        placeholder={"Tarnów"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"ulica"}
                        var={"street"}
                        placeholder={"Mickiewicza 8"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"nr domu"}
                        var={"homeNumber"}
                        placeholder={"3"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"Nr mieszkania"}
                        var={"flatNumber"}
                        placeholder={"4a"}
                        state={setAddress}
                        type={"text"}
                        clicked={disableAddress}
                        disabled={disableAddress}
                    />
                    <TextInputChange
                        name={"Kraj"}
                        var={"country"}
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
                        name={"Kod pocztowy"}
                        var={"zipCodeCorrespondence"}
                        placeholder={"33-100"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"Miejscowość"}
                        var={"cityCorrespondence"}
                        placeholder={"Tarnów"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"ulica"}
                        var={"streetCorrespondence"}
                        placeholder={"Mickiewicza 8"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"nr domu"}
                        var={"homeNumberCorrespondence"}
                        placeholder={"3"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"Nr mieszkania"}
                        var={"flatNumberCorrespondence"}
                        placeholder={"4a"}
                        state={setAddressCorrespondence}
                        type={"text"}
                        clicked={disableAddressCorrespondence}
                        disabled={disableAddressCorrespondence}
                    />
                    <TextInputChange
                        name={"Kraj"}
                        var={"countryCorrespondence"}
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
                    <PasswordChange savePassword={setPassword} />
                </div>
            </div>

        </div>
    );
}

export default Profile;

