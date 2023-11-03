import React from 'react';
import mainImage from '../assets/payflow.png';
import './css/Logo.css';

function Logo() {
    return (
        <div className="Logo">
            <img src={mainImage} alt="Company logo" />
        </div>
    );
}

export default Logo;
