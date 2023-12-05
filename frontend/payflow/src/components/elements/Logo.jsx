import React from 'react';
import mainImage from '../../assets/navbar/payflow.png';
import '../styles/LogoStyles.css';

function Logo() {
    return (
        <div>
            <img src={mainImage} alt="Company logo" />
        </div>
    );
}

export default Logo;
