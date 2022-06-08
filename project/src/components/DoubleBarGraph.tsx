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
  indexAxis: "x" | "y";
  text?: string;
  displayLabel: boolean;
  labels: string[] | number[];
  labelA?: string;
  datasetA: string[] | number[];
  colorA: string;
  labelB?: string;
  datasetB: string[] | number[];
  colorB: string;
}

export function DoubleBarGraph({
  indexAxis,
  text,
  displayLabel,
  labels,
  labelA,
  datasetA,
  colorA,
  labelB,
  datasetB,
  colorB,
}: Props) {
  const options = {
    indexAxis: indexAxis,
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
        label: labelA,
        data: datasetA,
        backgroundColor: colorA,
      },
      {
        label: labelB,
        data: datasetB,
        backgroundColor: colorB,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
