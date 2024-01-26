import React, {useEffect, useState} from "react";
import styles from './Account.module.css'
import CustomButton from "./CustomButton";
import {ImCross} from "react-icons/im";
import Popup from "reactjs-popup";
import TextInputChange from "../../common/inputs/TextInputChange";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";
import CustomPopUp from "./PopUp";

const CardDetails = (props) => {
    const [pin,setPin] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [action, setAction] = useState(false);
    let status;

    const activateCard = () => {
        console.log(pin)
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
    const changeCardPin = () => {
        axios
            .patch(`${BASE_URL}/api/v1/cards/${props.id}/change-pin`, pin, config)
            .then((res) => {
                console.log("sukces")
            })
            .catch((er) => {
                console.error(er);
            });
        window.location.reload()
    };
    const blockCard = () => {
        axios
            .patch(`${BASE_URL}/api/v1/cards/${props.id}/block`, config)
            .then((res) => {
                console.log("sukces")
            })
            .catch((er) => {
                console.error(er);
            });
        window.location.reload()
    };
    const unblockCard = () => {
        axios
            .patch(`${BASE_URL}/api/v1/cards/${props.id}/unblock`, config)
            .then((res) => {
                console.log("sukces")
            })
            .catch((er) => {
                console.error(er);
            });
        window.location.reload()
    };
    const deleteCard = () => {
        axios
            .delete(`${BASE_URL}/api/v1/cards/${props.id}?pin=${pin.pin}`, config)
            .then((res) => {
                console.log("sukces")
            })
            .catch((er) => {
                console.error(er);
            });
        // window.location.reload()
    };
    status = props.blocked ? "Zablokowana" : props.active ? "Aktywna" : "Nie aktywna";
    const getStatusColor = (status, blocked) => blocked ? 'red' : (status ? 'green' : 'black');
    const handleActivateButtonClick = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };
    const statusColor = getStatusColor(props.active,props.blocked);
    const handlePopupButtonClick = (action) => {
        switch (action) {
            case "activate":
                activateCard();
                break;
            case "changePin":
                changeCardPin();
                break;
            case "delete":
                deleteCard();
                break;
            default:
                break;
        }
        setPopupOpen(false);
    };
    return (
        <div className={styles.inactiveCard} >
            <div>
                <p>Status: <span style={{color: statusColor}}>{status}</span></p>
            </div>
            {!props.active ? (
                <CustomButton
                    color={"green"}
                    content={"Aktywuj kartę"}
                    onClick={() => {
                        setAction('activate');
                        setPopupOpen(true);
                    }}
                />
                ) : (
                props.blocked ? (
                    <CustomButton color={"blue"} content={"Odblokuj kartę"} onClick={unblockCard} />
                ) : (
                    <div className={styles.detailsButtons}>
                        <CustomButton color={"red"} content={"Zablokuj kartę"} onClick={blockCard}/>
                        <CustomButton
                            color={"blue"}
                            content={"Zmień pin"}
                            onClick={() => {
                                setAction('changePin');
                                setPopupOpen(true);
                            }}
                        />
                    </div>
                )
            )}
            <CustomButton
                color={"blue"}
                content={"Usuń kartę"}
                onClick={() => {
                    setAction('delete');
                    setPopupOpen(true);
                }}
            />
            <CustomPopUp open={isPopupOpen} onClose={handleClosePopup} pin={setPin} textButton={"Wyślij"} onClick={ () => handlePopupButtonClick(action)} />
        </div>
    );
}
export default CardDetails;
