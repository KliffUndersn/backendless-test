import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Что в черном ящике",
    },
  },
};

export function BarChart({ value, type }) {
  const data = {
    labels: value.xAxisLabels.split(","),
    datasets: [
      {
        label: value.title,
        data: value.zAxisValues.split(",").map((e) => e),
        backgroundColor: "rgba(255, 99, 235, 0.5)",
      },
    ],
  };
  switch (type) {
    case "line":
      return <Line options={options} data={data} />;
    case "bar":
      return <Bar options={options} data={data} />;
    case "doughnut":
      return <Doughnut options={options} data={data} />;
    default:
      return <Bar options={options} data={data} />;
  }
}
