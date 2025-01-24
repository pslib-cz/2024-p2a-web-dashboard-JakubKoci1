document.addEventListener("DOMContentLoaded", () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const chartColor = rootStyles.getPropertyValue('--chart-font-color').trim();
    const chartPointColor = rootStyles.getPropertyValue('--secondary').trim();


    const hours = [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", 
        "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", 
        "14:00", "15:00", "16:00", "17:00"
    ];
    
    const humidityValues = [78, 77, 76, 74, 73, 72, 70, 68, 65, 62, 60, 58, 59, 61, 63, 64, 66, 68]; 
    
    new Chart("humidity", {
        type: "line",
        data: {
            labels: hours,
            datasets: [{
                label: "Vlhkost (%)",
                fill: false,
                lineTension: 0,
                backgroundColor: chartPointColor,
                borderColor: chartColor,
                data: humidityValues
            }]
        },
        options: {
            legend: { 
                display: false,
                labels: {
                    fontColor: chartColor
                }
            },
            scales: {
                xAxes: [{ 
                    ticks: {
                        fontColor: chartColor
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Čas (hodiny)",
                        fontColor: chartColor
                    },
                    gridLines: {
                        color: chartColor,
                        zeroLineColor: chartColor
                    }
                }],
                yAxes: [{ 
                    ticks: { 
                        min: 55, 
                        max: 80,
                        fontColor: chartColor
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Vlhkost (%)",
                        fontColor: chartColor
                    },
                    gridLines: {
                        color: chartColor,
                        zeroLineColor: chartColor
                    }
                }]
            }
        }
    });
});
