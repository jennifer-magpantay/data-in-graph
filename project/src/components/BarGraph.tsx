import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  text?: string;
  displayLabel: boolean;
  labels: string[] | number[];
  label?: string;
  dataset: string[] | number[];
  color: string;
}

export function BarGraph({
  text,
  displayLabel,
  labels,
  label,
  dataset,
  color,
}: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: displayLabel,
        position: "top" as const,
      },
      title: {
        display: true,
        text: text,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: dataset,
        backgroundColor: color,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
