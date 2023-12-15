import React from 'react';
import '../styles/TopNavbarStyles.css';

import person from '../../assets/topNavbar/icon/person.svg';
import bell from '../../assets/topNavbar/notification/bell.svg';
// import bellRing from '../../assets/topNavbar/notification/bell-slash.svg';


function Home() {
    return (
        <div className="topNavbar">
            <p>John</p>
            <img className="topNavImages" src={person} alt="person-icon" />
            <img className="topNavImagesSmall" src={bell} alt="person-icon" />
        </div>
    );
}

export default Home;
