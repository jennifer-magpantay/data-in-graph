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
import { childrenAndTeenagersFoundData } from "../data/childrenAndTeenagersFound";

// types
import {
  InspectionsDataType,
  ChildrenAndTeenagersFoundDataType,
} from "../types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  text: string;
  labels: string[];
  label: string;
  dataset: string[];
  color: string;
}

export function LineGraph({ text, labels, label, dataset, color }: Props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
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
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };

  return (
    <div className="graph--container">
      <Line options={options} data={data} />
    </div>
  );
}
