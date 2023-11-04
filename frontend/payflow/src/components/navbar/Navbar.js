import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';
import image1 from "../../assets/houses.svg"
import image2 from "../../assets/houses-fill.svg"

function Navbar() {
    const location = useLocation();

    const isHomePage = location.pathname === '/homePage';
    const isTransactionsPage = location.pathname === '/transactions';

    return (
        <div className="verticalNavbar">
            <nav>
                <ul>
                    <li>
                        <Link to='/homePage'>
                            <img className="navImages" src={isHomePage ? image2 : image1} alt="home"/>
                            Strona główna
                        </Link>
                    </li>
                    <li>
                        <Link to='/transactions'>
                            <img className="navImages" src={isTransactionsPage ? image2 : image1} alt="home"/>
                            Transakcje
                        </Link>
                    </li>
                    <li>
                        <a href="/">
                            <img className="navImages" src={image1} alt="home"/>
                            Przelewy
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="navImages" src={image1} alt="home"/>
                            Kredyty
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="navImages" src={image1} alt="home"/>
                            Karty
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
