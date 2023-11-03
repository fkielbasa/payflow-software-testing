import React from 'react';
import mainImage from '../../assets/payflow.png';
import './Logo.css';

function Logo() {
    return (
        <div>
            <img src={mainImage} alt="Company logo" />
        </div>
    );
}

export default Logo;
