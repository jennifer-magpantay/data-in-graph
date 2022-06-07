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
  text?: string;
  displayLabel: boolean;
  labels: string[];
  label?: string;
  dataset: string[];
  color: string;
}

export function LineGraph({
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
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
