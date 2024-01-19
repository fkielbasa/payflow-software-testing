import React from "react";

const InfoTransactionWrapper = (props) => {

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{fontSize: 12, fontWeight: 'bold'}}>{props.prefix}</span>
            <p style={{margin: 0}}>{props.text}</p>
        </div>
    )
}
export default InfoTransactionWrapper
