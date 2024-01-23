import styles from "./Profile.module.css";
import TextInputChange from "../../common/inputs/TextInputChange";
import React from "react";

const PersonalData = (props) => {

    return(
        <div className={[styles.personDataWrapper, styles.cell].join(' ')}>
            <p>Dane osobowe</p>
            <TextInputChange
                name={"Login"}
                var={"login"}
                placeholder={props.login}
                state={''}
                type={"text"}
                clicked
                disabled
            />
            <TextInputChange
                name={"Imię"}
                var={"firstName"}
                placeholder={props.firstName}
                state={''}
                type={"text"}
                clicked
                disabled
            />
            <TextInputChange
                name={"Nazwisko"}
                var={"lastName"}
                placeholder={props.lastName}
                state={''}
                type={"text"}
                clicked
                disabled
            />
            <TextInputChange
                name={"Kraj"}
                var={"CountryInfo"}
                placeholder={props.nationality}
                state={''}
                type={"text"}
                clicked
                disabled
            />
            <TextInputChange
                name={"data urodzenia"}
                var={"birthDate"}
                placeholder={props.dateOfBirth}
                state={''}
                type={"text"}
                clicked
                disabled
            />
        </div>
    )
}
export default PersonalData
