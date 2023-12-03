import React from 'react';
import '../styles/PagesCSS.css';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="usdBalance">
                <div className="balanceText">
                    <div>
                        <p className="textDecoration">Sadlo USD</p>
                        <p className="textDecoration, fontSize">USD $27.37</p>
                    </div>
                    <br/>
                    <div>
                        <p className="textDecoration">Nr. rachunku:</p>
                        <p className="textDecoration">34 2387 0000 4412 4607 5444</p>
                    </div>
                </div>
            </div>
            <div className="eurBalance">
                <div className="balanceText">
                    <div>
                        <p className="textDecoration">Sadlo EUR</p>
                        <p className="textDecoration, fontSize">USD $69.42</p>
                    </div>
                    <br/>
                    <div>
                        <p className="textDecoration">Nr. rachunku:</p>
                        <p className="textDecoration">31 2415 0000 8436 4684 1238</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
