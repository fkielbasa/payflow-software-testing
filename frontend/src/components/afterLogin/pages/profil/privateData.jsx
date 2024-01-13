import styles from "./Profile.module.css";
import TextInputChange from "../../common/TextInputChange";
import ShowChangeBtn from "./ShowChangeBtn";
import React, {useState} from "react";
import {checkEmail, checkPhoneNumber} from "../../../utils/validation";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config, user} from "../../../../config/authConfig";
import {showCorrectData, showErrorAlert} from "../../../utils/alerts";

const PrivateData = (props) => {
    const [email, setEmail]=useState({})
    const [phoneNumber, setPhoneNumber]=useState({})

    const [disableEmail, setDisableEmail] = useState(true)
    const [disablePhoneNumber, setDisablePhoneNumber] = useState(true)

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


    return (
        <div className={[styles.personContactWrapper, styles.cell].join(' ')}>
            <p>Dane prywatne</p>
            <TextInputChange
                name={"email"}
                var={"email"}
                placeholder={props.email}
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
                placeholder={props.phoneNumber}
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
    )
}
export default PrivateData
