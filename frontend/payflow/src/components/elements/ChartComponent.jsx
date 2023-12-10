import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
    const data = {
        labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec'],
        datasets: [
            {
                label: 'Przychody',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55],
            },
        ],
    };

    return (
        <div>
            <h2>Przykładowy wykres</h2>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default ChartComponent;
