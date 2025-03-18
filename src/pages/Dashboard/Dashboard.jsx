import React from "react";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";
import AreaChart from "./charts/AreaChart";

const Dashboard = () => {
    return (
        <main className="w-full pt-5 pb-6">
            <div className="container mx-auto">
                <h1 className="text-xl font-large text-center mb-4 md:ml-30">Analytics</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    
                    {/* Left column - Bar Chart and Pie Chart */}
                    <div className="flex flex-col gap-6">
                        <div className="h-72">
                            <BarChart />
                        </div>
                        <div className="h-72">
                            <PieChart />
                        </div>
                    </div>

                    {/* Right column - Area Chart (spans 2 columns) */}
                    <div className="lg:col-span-2 h-full">
                        <AreaChart />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;