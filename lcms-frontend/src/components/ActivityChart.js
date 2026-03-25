import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ActivityChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Activity",
        data: [10, 40, 20, 60, 80],
        borderColor: "#00e6ff",
        backgroundColor: "rgba(0,230,255,0.2)",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="card-glass mt-4">
      <h5 className="neon">User Activity</h5>
      <Line data={data} />
    </div>
  );
}

export default ActivityChart;