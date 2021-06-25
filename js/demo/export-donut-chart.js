
const data2 = {
  labels: [
    "Mineral fuels",
    "Vehicles",
    "Machinery",
    "Gems & precious metals",
    "Wood",
  ],
  datasets: [
    {
      label: "Canada Top 5 Exports",
      data: [17.7, 11.9, 7.4, 5.9, 3.4],
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

const config2 = {
  type: "doughnut",
  data: data2,
};

var myChart2 = new Chart(document.getElementById("export-chart"), config2);