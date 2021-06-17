const data1 = {
  labels: [
    "Machinery",
    "Vehicles",
    "Electrical machinery",
    "Mineral fuels",
    "Gems & precious metals",
  ],
  datasets: [
    {
      label: "Canada Top 5 Imports",
      data: [15.1, 13.9, 9.8, 5, 4.3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config1 = {
  type: "doughnut",
  data: data1,
};

var myChart1 = new Chart(document.getElementById("import-chart"), config1);
