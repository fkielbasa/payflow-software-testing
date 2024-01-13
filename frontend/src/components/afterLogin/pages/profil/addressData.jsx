import styles from "./Profile.module.css";
import TextInputChange from "../../common/TextInputChange";
import ShowChangeBtn from "./ShowChangeBtn";
import React, {useState} from "react";
import {checkHomeNumber, checkZipCode, isString} from "../../../utils/validation";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config, user} from "../../../../config/authConfig";
import {showCorrectData, showErrorAlert} from "../../../utils/alerts";

const AddressData = (props) => {
    const [address, setAddress]=useState({
        zipCode: '',
        city: '',
        street: '',
        houseNumber: '',
        flatNumber: '',
        country: ''

    })
    const [disableAddress, setDisableAddress] = useState(true)

    const validateAddress = (address) => {
        console.log(address)
        return checkZipCode(address.zipCode)
            && isString(address.city)
            && isString(address.street)
            && checkHomeNumber(address.houseNumber)
            && isString(address.country)
    }

    const submitAddress = () => {
        if (!validateAddress(address)){
            showCorrectData()
            return
        }
        axios
            .put(
                `${BASE_URL}/api/v1/user/${user.userId}/address?type=${props.type}`,
                address,
                config
            )
            .then(r => {
                setDisableAddress(true)
            })
            .catch(error => {
                showErrorAlert()
            })
    }

    return (
        <div className={[styles.addressWrapper, styles.cell].join(' ')}>
            {props.addressData
                && Object.keys(props.addressData).length > 0 ? (
                    <div>
                        <p>Adres {props.name}</p>
                        <TextInputChange
                            name={"Kod pocztowy"}
                            var={`zipCode${props.type}`}
                            placeholder={props.addressData.zipCode}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"Miejscowość"}
                            var={`city${props.type}`}
                            placeholder={props.addressData.city}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"ulica"}
                            var={`street${props.type}`}
                            placeholder={props.addressData.street}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"nr domu"}
                            var={`houseNumber${props.type}`}
                            placeholder={props.addressData.houseNumber}
                            state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"Nr mieszkania"}
                            var={`flatNumber${props.type}`}
                            placeholder={props.addressData.apartmentNumber} state={setAddress}
                            type={"text"}
                            clicked={disableAddress}
                            disabled={disableAddress}
                        />
                        <TextInputChange
                            name={"Kraj"}
                            var={`country${props.type}`}
                            placeholder={props.addressData.country}
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
                ) : (
                    <p>Brak danych</p>
                )
            }
            </div>
    )
}
export default AddressData
