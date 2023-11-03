import React from 'react';
import './css/Navbar.css';

function Navbar() {
    return (
        <div className="vertical-navbar">
            <nav>
                <ul>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/">Transakcje</a></li>
                    <li><a href="/">Przelewy</a></li>
                    <li><a href="/">Kredyty</a></li>
                    <li><a href="/">Karty</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
