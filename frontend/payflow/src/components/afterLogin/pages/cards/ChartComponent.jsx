import React, {useState} from 'react';
import BarChart from "./BarChart";
import {UserDataPLN, UserDataUSD} from '../../API/GraphData';
import {UserDataEUR} from '../../API/GraphData';

const ChartComponent = (props) => {
    const type = props.type;

    let chart;
    let backgroundColor;

    ////TODO
    // in the future the color of the graph will be defined by other thing
    // than type of currency
    ////

    if (type === 'USD') {
        chart = UserDataUSD;
        backgroundColor = "#1687A7";
    } else if (type === 'EUR') {
        chart = UserDataEUR;
        backgroundColor = "#1687A7";
    } else if (type === 'PLN') {
        chart = UserDataPLN;
        backgroundColor = "#fc466b";
    }

    const [userData] = useState({
        labels: chart.map((data) => data.year),
        datasets: [{
            label: `${type} na koncie w zenicie finansowej`,
            data: chart.map((data) => data.topBalance),
            backgroundColor: [backgroundColor]
        }]
    });

    return (
        <div>
            <BarChart chartData={userData}/>
        </div>
    );
};

export default ChartComponent;
