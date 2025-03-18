import React from "react";
import { Chart } from "react-google-charts";

const AreaChart = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2022", 1000, 400],
    ["2023", 1170, 460],
    ["2024", 660, 1120],
    ["2025", 1030, 540],
  ];
  
  const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "80%", height: "75%" },
    backgroundColor: 'transparent',
    legend: { position: 'top' },
    lineWidth: 3,
    colors: ['#1b9e77', '#d95f02'],
    pointSize: 5,
  };
  
  return (
    <div className="px-2 sm:ml-50 h-full bg-white rounded-xl shadow-lg p-4 border border-gray-200">
      <Chart
        chartType="AreaChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
        loader={<div className="w-full h-full flex items-center justify-center">Loading Chart...</div>}
      />
    </div>
  )
}

export default AreaChart;