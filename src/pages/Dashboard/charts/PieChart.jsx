import React from "react";
import { Chart } from "react-google-charts";

const PieChart = () => {
    // Updated data based on company's 2025 expenses
    const data = [
        ["Category", "Amount (in USD)"],
        ["Salaries", 500000],
        ["Marketing", 150000],
        ["Research & Development", 200000],
        ["Operations", 300000],
        ["Miscellaneous", 50000],
    ];

    const options = {
        title: "Company Expenses - 2025",
        backgroundColor: "transparent",
        chartArea: { width: "90%", height: "80%" },
        legend: { position: "right" },
        pieSliceText: "value",
        tooltip: { showColorCode: true },
        slices: {
            0: { color: "#4CAF50" }, // Salaries (Green)
            1: { color: "#2196F3" }, // Marketing (Blue)
            2: { color: "#FF9800" }, // R&D (Orange)
            3: { color: "#9C27B0" }, // Operations (Purple)
            4: { color: "#F44336" }, // Miscellaneous (Red)
        },
    };

    return (
        <div className="w-full sm:ml-50 h-full bg-white rounded-xl shadow-lg p-4 border border-gray-200">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="100%"
                loader={
                    <div className="w-full h-full flex items-center justify-center">
                        Loading Chart...
                    </div>
                }
            />
        </div>
    );
};

export default PieChart;
