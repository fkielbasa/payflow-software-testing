import React from 'react';
import '../styles/PagesCSS.css';
import UsdBalance from "../elements/UsdBalance";
import EurBalance from "../elements/EurBalance";

function HomePage() {
    return (
        <div className="HomePage">
            <UsdBalance/>
            <EurBalance/>

        </div>
    );
}

export default HomePage;
