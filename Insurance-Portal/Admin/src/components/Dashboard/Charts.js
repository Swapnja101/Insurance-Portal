/*import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July" ],
        datasets: [
          {
            label: "Premium Amount (₹)",
            data: [10000, 15000, 12000, 18000, 20000, 25000, 26000],
            borderColor: "rgb(75, 192, 192)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
    };

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, chartConfig);
  }, []);

  return (
    <div className="mt-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Premium Amount Trends</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Charts;
*/

import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null); // Keep track of the chart instance

  useEffect(() => {
    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
        datasets: [
          {
            label: "Premium Amount (₹)",
            data: [10000, 15000, 12000, 18000, 20000, 25000, 26000, 28000],
            borderColor: "rgb(75, 192, 192)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
    };

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance if it exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(ctx, chartConfig);

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="mt-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Premium Amount Trends</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Charts;
