import React, {useState} from 'react';
import BarChart from "./BarChart";
import {UserDataPLN, UserDataUSD} from './Data';
import {UserDataEUR} from './Data';

const ChartComponent = (props) => {
    const type = props.type;

    let chart;

    if (type === 'USD') {
        chart = UserDataUSD;
    } else if (type === 'EUR') {
        chart = UserDataEUR;
    } else if (type === 'PLN') {
        chart = UserDataPLN;
    }

    const [userData] = useState({
        labels: chart.map((data) => data.year),
        datasets: [{
            label: `${type} na koncie w zenicie finansowej`,
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
