import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
import { useState, useEffect } from 'react';

function MyChart() {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const labelss = ["John", "Kevin", "Geroge", "Micheal", "Oreo"];
    useEffect(() => {
        setChartData({
            labels: labelss,
            datasets: [{
                label: "Votes",
                data: [12, 19, 3, 5, 2],
                borderColor: ["rgba(255, 99, 132, 0.2)"],
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            }]
        });

        setChartOptions({
            responsive: true,
            Plugins: {
                legend: {
                    position: top,
                },
                title: {
                    display: true,
                    text: "Voting Results",
                }
            },
        });
    }, [])

    return (
        <div>
            <Bar options={chartOptions} data={chartData} ></Bar>
        </div>
    )
}
export default MyChart