import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { ChartConfiguration } from "chart.js";
import { Bar } from "react-chartjs-2";

interface props {
  bardata: {
    week1: { user: number; guest: number };
    week2: { user: number; guest: number };
    week3: { user: number; guest: number };
    week4: { user: number; guest: number };
  };
}
interface BarProps {
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
}
Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart: React.FC<props> = ({ bardata }) => {
  const data = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "User",
        data: [
          bardata.week1.user,
          bardata.week2.user,
          bardata.week3.user,
          bardata.week4.user,
        ],
        backgroundColor: "#98D89E",
        barPercenage: 0.5,
        borderWidth: 5,
        borderColor: "rgb(0,0,0,0)",
        barThickness: 45,
        borderRadius: 10,
      },
      {
        label: "Guest",
        data: [
          bardata.week1.guest,
          bardata.week2.guest,
          bardata.week3.guest,
          bardata.week4.guest,
        ],
        backgroundColor: "#EE8484",
        barPercenage: 0.5,
        borderWidth: 5,
        borderColor: "rgb(0,0,0,0)",
        barThickness: 45,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-row">
      <Bar data={data} options={options}></Bar>
    </div>
  );
};
export default Chart;
