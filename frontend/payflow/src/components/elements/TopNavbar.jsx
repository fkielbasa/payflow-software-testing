import React from 'react';
import '../styles/navbars/TopNavbarStyles.css';

import person from '../../assets/topNavbar/icon/person.svg';
import bell from '../../assets/topNavbar/notification/bell.svg';
// import bellRing from '../../assets/topNavbar/notification/bell-slash.svg';


function Home() {
    return (
        <div className="topNavbar">
            <div className="topNavPositionFixed">
            <p>John</p>
            <img className="topNavImages" src={person} alt="person-icon" />
            <img className="topNavImagesSmall" src={bell} alt="person-icon" />
        </div>
        </div>
    );
}

export default Home;
