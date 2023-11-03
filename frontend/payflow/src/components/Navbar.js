import React from 'react';
import './css/Navbar.css';
import image1 from "../assets/houses.svg"

function Navbar() {
    return (
        <div className="verticalNavbar">
            <nav>
                <ul>
                    <li>
                        <img className="navImages" src={image1} alt="home"/>
                        <a href="/">Strona główna</a>
                    </li>
                    <li>
                        <img className="navImages" src={image1} alt="home"/>
                        <a href="/">Transakcje</a>
                    </li>
                    <li>
                        <img className="navImages" src={image1} alt="home"/>
                        <a href="/">Przelewy</a>
                    </li>
                    <li>
                        <img className="navImages" src={image1} alt="home"/>
                        <a href="/">Kredyty</a>
                    </li>
                    <li>
                        <img className="navImages" src={image1} alt="home"/>
                        <a href="/">Karty</a><
                    /li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
