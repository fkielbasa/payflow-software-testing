import React, {useEffect, useState} from "react";
import styles from './Account.module.css'
import CustomButton from "./CustomButton";
import {ImCross} from "react-icons/im";
import Popup from "reactjs-popup";
import TextInputChange from "../../common/inputs/TextInputChange";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";

const AccountDetails = (props) => {
    const [pin,setPin] = useState('')
    const [isPopupOpen, setPopupOpen] = useState(false);
    let status;

    const changeCardPin = () => {
        axios
            .patch(`${BASE_URL}/api/v1/cards/${props.id}/activate`, pin, config)
            .then((res) => {
                console.log("sukces")
            })
            .catch((er) => {
                console.error(er);
            });
        window.location.reload()
    };

    // if(props.active && !props.blocked)
    //     status = "Aktywna"
    // else if(!props.active && !props.blocked)
    //     status ="Nie aktywna"
    // else
    //     status = "Zablokowana"
    status = props.blocked ? "Zablokowana" : props.active ? "Aktywna" : "Nie aktywna";
    const getStatusColor = (status) => {
        switch (status) {
            case true:
                return 'green';
            case false:
                return 'red';
            default:
                return 'black';
        }
    }
    const handleActivateButtonClick = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };
    const statusColor = getStatusColor(props.active);
    return (
        <div className={styles.inactiveCard} >
            <div>
                <p>Status: <span style={{color: statusColor}}>{status}</span></p>
            </div>
            {!props.active ? (
            <CustomButton color={"green"} content={"Aktywuj kartę"} openPopUp={handleActivateButtonClick}/>
                ) : (
            <CustomButton color={"red"} content={"Zablokuj kartę"} openPopUp={handleActivateButtonClick}/>
            )}
            <Popup open={isPopupOpen} onClose={handleClosePopup} modal contentStyle={{
                backgroundColor: 'gray',
                padding: '20px',
                paddingBottom: 30,
                borderRadius: 10,
                width: '300px'
            }}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 5}}>
                        <div style={{width: '30%'}}>
                            <img src={require('../../../../assets/navbar/payflow.png')} alt="" style={{width: '90%'}}/>
                        </div>
                        <p style={{color: 'white', fontSize: 20, cursor: 'pointer', margin: 5}}
                           onClick={handleClosePopup}>
                            <ImCross/>
                        </p>
                    </div>
                    <TextInputChange
                        name={"Pin"}
                        placeholder={"Wpisz pin"}
                        type={"text"}
                        var={"pin"}
                        state={setPin}
                        maxLength={4}
                        minLenght={4}
                    />
                </div>
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <button className={styles.activateCard} onClick={changeCardPin}>
                        Aktywuj
                    </button>
                </div>
            </Popup>
        </div>


    );
}
export default AccountDetails;
