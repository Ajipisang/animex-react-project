import { Chart as ChartJS } from "chart.js/auto";
import { max, set } from "lodash";
import { use } from "react";
import { Bar,Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
function Overview({item}){
    const [arr, setArr] = useState([]);
    const apiData1 = {
        labels: ["Watching", "Completed", "On Hold", "Dropped", "Plan to Watch"], // Label dataset 1
        data: [item.watching, item.completed, item.on_hold, item.dropped, item.plan_to_watch],
    };

    useEffect(() => {
        item.scores.map((item) => {
           setArr((prev) => [...prev, item.votes]);
        })
    }, [item])

    const apiData2 = {
        labels: ["1⭐", "2⭐", "3⭐", "4⭐", "5⭐", "6⭐", "7⭐", "8⭐", "9⭐", "10⭐"], // Label dataset 2
        data: [item.scores[0].votes, item.scores[1].votes, item.scores[2].votes, item.scores[3].votes, item.scores[4].votes, item.scores[5].votes, item.scores[6].votes, item.scores[7].votes, item.scores[8].votes, item.scores[9].votes],
    };

    const data2 = {
        labels: apiData2.labels, // Label default (diambil dari dataset pertama)
        datasets: [
            {
                label: "number of user (score)", // Label untuk dataset 1
                data: apiData2.data,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(153, 102, 255, 0.2)",

                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(153, 102, 255, 1)",   
                ], 
                borderWidth: 2,
                
                 
            },
           
        ],
    };

    const data = {
        labels: apiData1.labels, // Label default (diambil dari dataset pertama)
        datasets: [
            {
                label: "number of user (status)", // Label untuk dataset 1
                data: apiData1.data,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(153, 102, 255, 1)",
                ], 
                borderWidth: 2,
                
                 
            },
           
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 12,
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "white",
                    font: {
                        size: 11,
                    },
                    
                    
                },
                maxrotation: 0,
                minRotation: 0,
            },
            y: {
                display: false,
                ticks: {
                    color: "white",
                },
            },
        },
    };

    return (
        <>
        <div className="w-full h-[400px] flex">
            <Bar data={data} options={options} />
        </div>
        <div className="w-full mt-5 h-[400px] flex">
            <Line data={data2} options={options} />
        </div>
        </>
    );
}

export default Overview