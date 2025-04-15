import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Charts = () => {
  const data = [
    { name: "Jan", value: 150 },
    { name: "Feb", value: 380 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 300 },
    { name: "May", value: 180 },
    { name: "Jun", value: 190 },
    { name: "Jul", value: 210 },
    { name: "Aug", value: 90 },
    { name: "Sep", value: 220 },
    { name: "Oct", value: 400 },
    { name: "Nov", value: 230 },
    { name: "Dec", value: 100 },
  ];

  const percentage = [
    { day: "Mon", users: 120 },
    { day: "Tue", users: 150 },
    { day: "Wed", users: 140 },
    { day: "Thu", users: 160 },
    { day: "Fri", users: 130 },
    { day: "Sat", users: 90 },
    { day: "Sun", users: 110 },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-12">
      {/* monthly sale */}
      <div className="w-full max-w-xl mx-auto">
        <div className=" p-4 border border-gray-300 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Monthly Sales</h2>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar
                  radius={[8, 8, 0, 0]}
                  dataKey="value"
                  fill="#8884d8"
                  barSize={15}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* monthly target*/}

      <div className="w-full max-w-xl mx-auto">
        <div className=" p-4 border border-gray-300 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">New Users</h2>
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="User3"
              />
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full border-2 border-white text-sm font-semibold">
                10+
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Added last month</p>
              <p className="text-xl font-semibold">8,490</p>
            </div>
          </div>

          {/* Total Users & Chart */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Total New Users</h2>
          </div>
          <p className="text-2xl font-bold mb-4">5.9K</p>

          {/* Area Chart */}
          <div className="w-full h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={percentage}>
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#3366FF"
                  fill="rgba(51, 102, 255, 0.2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;