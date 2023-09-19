import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface props {
  doughnutdata: {
    basictees: number;
    customshortpants: number;
    superHoodies: number;
  };
}

const Doughnutgraph: React.FC<props> = ({ doughnutdata }) => {
  const data = {
    labels: ["Basic Tees", "Custom Short pants", "Super Hoodies"],
    datasets: [
      {
        label: "Basic Tees",
        data: [
          doughnutdata.basictees,
          doughnutdata.customshortpants,
          doughnutdata.superHoodies,
        ],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        borderThickness: 0,
      },
    ],
  };
  const options = {
    aspectRatio: 1,
    cutout: 60,
    borderWidth: 0,
    offset: -1,
    borderRadius: 10,
    spacing: -20,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className=" h-full w-fit">
      <Doughnut data={data} options={options}></Doughnut>{" "}
    </div>
  );
};
export default Doughnutgraph;
