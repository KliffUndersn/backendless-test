import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
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
  return type == "line" ? (
    <Line options={options} data={data} />
  ) : (
    <Bar options={options} data={data} />
  );
}
