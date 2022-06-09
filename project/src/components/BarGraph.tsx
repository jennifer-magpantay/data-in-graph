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
  indexAxis?: "x" | "y";
  displayLabel: boolean;
  text?: string;
  labels: string[];
  label?: string;
  dataset: string[] | number[];
  color: string;
}

export function BarGraph({
  indexAxis,
  displayLabel,
  text,
  labels,
  label,
  dataset,
  color,
}: Props) {
  const options = {
    indexAxis: indexAxis,
    scales: {
      y: {
        ticks: {
          callback: function (value: string, index: number, ticks: {}): any {
            const label = this.getLabelForValue(value);
            if (label.length >= 50) {
              const labelSliced: string = label.slice(0, 50);
              return `${labelSliced} ...`;
            }
            return label;
          },
        },
      },
    },
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
