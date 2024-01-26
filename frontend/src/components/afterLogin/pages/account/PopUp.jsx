import React from 'react'
import Popup from "reactjs-popup";
import {ImCross} from "react-icons/im";
import TextInputChange from "../../common/inputs/TextInputChange";
import styles from "./Account.module.css";

const CustomPopUp = (props) => {
    return(
        <Popup open={props.open} onClose={props.onClose} modal contentStyle={{
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
                       onClick={props.onClose}>
                        <ImCross/>
                    </p>
                </div>
                <TextInputChange
                    name={"Pin"}
                    placeholder={"Wpisz pin"}
                    type={"text"}
                    var={"pin"}
                    state={props.pin}
                    maxLength={4}
                    minLenght={4}
                />
            </div>
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <button className={styles.activateCard} onClick={props.onClick}>
                    {props.textButton}
                </button>
            </div>
        </Popup>
    );
}
export default CustomPopUp;
