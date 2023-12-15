import React, {useState} from 'react';
import BarChart from "./BarChart";
import {UserDataUSD} from './Data';
import {UserDataEUR} from './Data';

const ChartComponent = (props) => {
    const type = props.type;

    let chart;

    if (type === 'USD') {
        chart = UserDataUSD;
    } else if (type === 'EUR') {
        chart = UserDataEUR;
    }

    const [userData] = useState({
        labels: chart.map((data) => data.year),
        datasets: [{
            label: `Środki ${type} na koncie w szczytowym momencie`,
            data: chart.map((data) => data.topBalance),
            backgroundColor: ["#1687A7"]
        }]
    })
    return (
        <div>
            <BarChart chartData={userData}/>

        </div>
    );
};

export default ChartComponent;
