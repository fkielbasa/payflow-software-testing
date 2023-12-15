import React, {useState} from 'react';
import BarChart from "./BarChart";
import {UserData} from './Data';

const ChartComponent = () => {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Środki USD na koncie w szczytowym momencie",
            data: UserData.map((data) => data.topBalanceUSD),
            backgroundColor: ["#1687A7"]
        }]
    })
   return (
       <div>
           <div style={{width: 700}}>
                <BarChart chartData={userData} />
           </div>
       </div>
   );
};

export default ChartComponent;
