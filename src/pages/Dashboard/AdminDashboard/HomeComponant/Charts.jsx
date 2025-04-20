import React, { useEffect, useState } from "react";
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
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Charts = () => {
  const axiosSecure = useAxiosSecure();
  const [avatars, setAvatars] = useState([]);
  const [addedLastMonth, setAddedLastMonth] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosSecure.get("/new-users");
      const data = res.data;
      setAvatars(data.users.slice(0, 3));
      setAddedLastMonth(data.addedLastMonth);
      setTotalUsers(data.totalNewUsers);
      setChartData(data.chart);
      const orderRes = await axiosSecure.get("/monthly-order");
      setOrdersData(orderRes.data);
    };

    fetchData();
  }, [axiosSecure]);

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-12">
      {/* monthly sale */}
      <div className="w-full max-w-xl mx-auto">
        <div className=" p-4 border border-gray-300 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Monthly Sales</h2>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersData}>
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
              {avatars.map((user, index) => (
                <img
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/rQr6L83/default-avatar-icon-of-social-media-user-vector.jpg"
                  }
                  alt={user.name || "User"}
                />
              ))}
              {avatars.length > 3 && (
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full border-2 border-white text-sm font-semibold">
                  {avatars.length - 3}+
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Added last month</p>
              <p className="text-xl font-semibold">
                {addedLastMonth.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Total Users & Chart */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Total New Users</h2>
          </div>
          <p className="text-2xl font-bold mb-4">
            {totalUsers.toLocaleString()}
          </p>

          {/* Area Chart */}
          <div className="w-full h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
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
