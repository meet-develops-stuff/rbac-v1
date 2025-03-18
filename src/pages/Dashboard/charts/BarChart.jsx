import React from 'react'
import { Chart } from "react-google-charts";

const BarChart = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2022", 1000, 400],
    ["2023", 1170, 460],
    ["2024", 660, 1120],
    ["2025", 1030, 540],
  ];
  
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
    chartArea: { width: '80%', height: '70%' },
    backgroundColor: 'transparent',
    legend: { position: 'top' },
  };
  
  return (
    <div className="w-full sm:ml-50 mr-100 h-full bg-white rounded-xl shadow-lg p-4 border border-gray-200">
      <Chart
        chartType="Bar"
        data={data}
        options={options}
        width="100%"
        height="100%"
        loader={<div className="w-full h-full flex items-center justify-center">Loading Chart...</div>}
      />
    </div>
  )
}

export default BarChart