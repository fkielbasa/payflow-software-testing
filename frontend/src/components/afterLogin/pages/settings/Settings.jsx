import React, {useState} from 'react';
import TextInputChange from "../../common/TextInputChange";
import {user} from "../../../../config/authConfig";
import TextInput from "../../common/textInput";
import styles from './Settings.module.css'

function Settings() {

    const [value, setValue]=useState('')

    return (
        <div>
            <h2>Ustawienia</h2>
            <div>
                <p>Dane osobowe</p>
                <TextInputChange
                    name={"Login"}
                    value={user.login}
                    state={setValue}
                    type={"text"}
                    clicked
                    disabled
                />
                <TextInputChange
                    name={"Imię"}
                    value={user.name}
                    state={setValue}
                    type={"text"}
                    clicked
                    disabled
                />
                <TextInputChange
                    name={"Nazwisko"}
                    value={"Kowalski"}
                    state={setValue}
                    type={"text"}
                    clicked
                    disabled
                />
                <TextInputChange
                    name={"Kraj"}
                    value={"polska"}
                    state={setValue}
                    type={"text"}
                    clicked
                    disabled
                />
            </div>
            <div>
                <p>Dane prywatne</p>
                <TextInputChange
                    name={"email"}
                    value={"test@wp.pl"}
                    state={setValue}
                    type={"text"}
                    clicked
                    // disabled
                />
                <TextInputChange
                    name={"telefon"}
                    value={"123456789"}
                    state={setValue}
                    type={"text"}
                    clicked
                    // disabled
                />

            </div>
        </div>
    );
}

export default Settings;

