import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


const groupAndSumTransactionsByDate = (transactions) => {
    // Filtruj transakcje do ostatniego miesiąca
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const filteredTransactions = transactions.filter(
        (transaction) => new Date(transaction.date) >= oneMonthAgo
    );

    // Grupuj i sumuj transakcje
    const groupedTransactions = filteredTransactions.reduce((result, transaction) => {
        const date = transaction.date;
        if (!result[date]) {
            result[date] = { date, sum: 0 };
        }
        result[date].sum += parseFloat(transaction.amount);
        return result;
    }, {});

    // Odwróć kolejność dat
    const reversedGroupedTransactions = Object.values(groupedTransactions).reverse();

    return reversedGroupedTransactions;
};

const TransactionChart = ({ transactions, currency }) => {
    const groupedTransactions = groupAndSumTransactionsByDate(transactions);

    const data = {
        labels: groupedTransactions.map((transaction) => transaction.date),
        datasets: [
            {
                label: `Suma wartości transakcji (${currency})`,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(22,135,167,0.4)',
                borderColor: 'rgba(22,135,167,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(22,135,167,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(22,135,167,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: groupedTransactions.map((transaction) => transaction.sum),
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    tooltipFormat: 'DD.MM.YYYY',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default TransactionChart;
