import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { inspectionsData } from "../data/inspections";
import { childrenFoundData } from "../data/childrenFound";

ChartJS.register(
  CategoryScale,
  LinearScale,
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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = inspectionsData.map((label) => label.ano);
const data1 = inspectionsData.map((data) => data.quantidade);
console.log(data1);

export const data = {
  labels,
  datasets: [
    {
      label: "Inspecations",
      data: inspectionsData.map((data) => data.quantidade),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Children and Teenagers found",
      data: childrenFoundData.map((data) => data.quantidade),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export function LineGraph() {
  return (
    <div className="graph--container">
      <Line options={options} data={data} />
    </div>
  );
}
