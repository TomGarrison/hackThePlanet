// CONTAINER 1 BAR
    var ctx = document.getElementById("barChart");
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(0, 77, 77, 0.5)',
                    'rgba(165, 220, 251, 0.5)',
                    'rgba(12, 143, 156, 0.5)',
                    'rgba(9, 88, 210, 0.5)',
                    'rgba(238, 202, 8, 0.5)',
                    'rgba(255, 159, 10, 0.5)'
                ],
                borderColor: [
                    'rgb(0, 77, 77)',
                    'rgb(165, 220, 251)',
                    'rgb(12, 143, 156)',
                    'rgb(9, 88, 210)',
                    'rgb(238, 202, 8)',
                    'rgb(244, 159, 10)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
// CONTAINER 1 BAR END

// CONTAINER 2 LINE START
var line = document.getElementById("lineChart");
var myLineChart = new Chart(line, {
type: 'line',
data: {
    labels: ["Nitrous Oxide","Methane", "Carbon Dioxide", "Fluorinated Gases"],
    datasets: [{
        label: '100-year global warming potential',
        data: [281, 1, 32, 1430 ],
        backgroundColor: [
            'rgba(255, 159, 10, 0.5)'
        ],
        borderColor: [
            'rgba(244, 159, 10, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
// CONTAINER 2 LINE END

// CONTAINER 3 PIE START
var pie = document.getElementById("pieChart");
var myPieChart = new Chart(pie,{
type: 'pie',
data: {
labels: [
    "Red",
    "Blue",
    "Yellow"
],
datasets: [
    {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(165, 220, 251)',
          'rgb(12, 143, 156)',
          'rgb(9, 88, 210)',
        ],
        hoverBackgroundColor: [
          'rgb(144, 212, 250)',
          'rgb(6, 128, 140)',
          'rgb(6, 78, 190)',
        ]
    }]
},
});

// CONTAINER 3 PIE END

// CONTAINER 4 POLAR AREA CHART START
var radar = document.getElementById("radarChart");
var myRadarChart = new Chart(radar, {
type: 'radar',
data: {
labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
datasets: [
    {
        label: "My First dataset",
        backgroundColor: "rgba(255, 159, 10, 0.5)",
        borderColor: "rgba(255, 159, 10, 1)",
        pointBackgroundColor: "rgba(255, 159, 10, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 159, 10, 1)",
        data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
        label: "My Second dataset",
        backgroundColor: "rgba(238, 202, 8, 0.5)",
        borderColor: "rgba(238, 202, 8, 1)",
        pointBackgroundColor: "rgba(238, 202, 8, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(238, 202, 8, 1)",
        data: [28, 48, 40, 19, 96, 27, 100]
    }
]
},
});
// CONTAINER 4 POLAR AREA CHART END

// CONTAINER 5 DOUGHNUT CHART START
var doughnut = document.getElementById("doughnutChart");
var mydoughnutChart = new Chart(doughnut,{
type: 'doughnut',
data: {
labels: [
    "Red",
    "Blue",
    "Yellow"
],
datasets: [
    {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(165, 220, 251)',
          'rgb(12, 143, 156)',
          'rgb(9, 88, 210)',
        ],
        hoverBackgroundColor: [
          'rgb(131, 207, 250)',
          'rgb(4, 122, 134)',
          'rgb(6, 72, 175)',
        ]
    }]
},
});

// CONTAINER 5 END

// CONTAINER 6 START
var polar = document.getElementById("polarChart");
new Chart(polar, {
data: {
datasets: [{
    data: [
        11,
        16,
        7,
        3,
        14
    ],
    backgroundColor: [
      'rgb(0, 77, 77)',
      'rgb(165, 220, 251)',
      'rgb(12, 143, 156)',
      'rgb(9, 88, 210)',
      'rgb(238, 202, 8)',
      'rgb(244, 159, 10)'
    ],
    label: 'My dataset' // for legend
}],
labels: [
    "Red",
    "Green",
    "Yellow",
    "Grey",
    "Blue"
]
},
type: 'polarArea',
});
// CONTAINER 6 END

// CONTAINER 7 START
var bubble = document.getElementById("bubbleChart");
var myBubbleChart = new Chart(bubble,{
type: 'bubble',
options: {
    elements: {
        points: {
            borderWidth: 10,
            borderColor: 'rgb(0, 0, 0)'
        }
    }
},
data: {
datasets: [
    {
        label: 'First Dataset',
        data: [
          {
            x: 0,
            y: 60,
            r: 0
          },
          {
            x: 60,
            y: 0,
            r: 0
          },
            {
                x: 20,
                y: 30,
                r: 15
            },
            {
              x: 40,
              y: 30,
              r: 25
            },
            {
                x: 40,
                y: 10,
                r: 10
            }
        ],
        backgroundColor:'rgb(244, 159, 10)',
        hoverBackgroundColor:'rgb(244, 159, 10)',
    }]
}
});
// CONTAINER 7 END
