$(document).ready(function (){



    /*Bar Chart Start*/


    var barChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: 'Maintenance',
                backgroundColor: "#EDE7F6",
                data: [140,
                    691,
                    636,
                    662,
                    686,
                    668
                ]
            },{
                label: 'Investment',
                backgroundColor: "#90CAF9",
                data: [140,
                    180,
                    636,
                    662,
                    686,
                    668
                ]
            }, {
                label: 'Loss',
                backgroundColor: "##2196F3",
                data: [140,
                    50,
                    156,
                    184,
                    186,
                    142
                ]
            }, {
                label: 'Profit',
                backgroundColor: "#673AB7",
                data: [140,
                    200,
                    166,
                    125,
                    112,
                    122
                ]
            }]
    };

    var barchart = document.getElementById("barChart").getContext("2d");
    window.myBar = new Chart(barchart, {
        responsive:true,
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: "",
            },
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 12,
                    padding: 74
                }
            },
            tooltips: {
                mode: 'label'
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 0.4
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });


    /*Bar Chart End*/

    /*Line Chart Start*/

    var linechart = document.getElementById('myChart').getContext("2d");

    var myChart = new Chart(linechart, {
        type: 'line',
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
            datasets: [{
                label: "Data",
                borderColor: "#80b6f4",
                pointBorderColor: "#80b6f4",
                pointBackgroundColor: "#5E35B1",
                pointHoverBackgroundColor: "#5E35B1",
                pointHoverBorderColor: "#80b6f4",
                pointBorderWidth: 0,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [10, 12, 15, 17, 18, 17, 16]
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    labelColor: function(tooltipItem, chart) {
                        return {
                            borderColor: 'rgb(255, 0, 0)',
                            backgroundColor: 'rgb(255, 0, 0)'
                        }
                    }
                }
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        display: false,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    /*Line Chart End*/

})