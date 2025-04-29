import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { fetchorders } from "../../../../Redux/Feature/OrderSlice";


const COLORS = {
  Ordered: "#00C49F",
  Pending: "#0088FE",
  Delivered: "#A78BFA",
};

const ProductData = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchorders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      const orderedCount = orders.filter((o) => o.status === "ordered").length;
      const pendingCount = orders.filter((o) => o.status === "pending").length;
      const deliveredCount = orders.filter((o) => o.status === "delivered").length;

      const chartData = [
        { name: "Ordered", value: orderedCount },
        { name: "Pending", value: pendingCount },
        { name: "Delivered", value: deliveredCount },
      ];

      setData(chartData);
    }
  }, [orders]);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const activeData = activeIndex !== null ? data[activeIndex] : null;

  return (
    <div className="p-4 border border-gray-300 rounded-xl shadow-md overflow-hidden bg-white">
      <h2 className="text-xl font-semibold mb-4">Delivery Update</h2>
      <div className="relative w-full max-w-sm mx-auto">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              stroke="#fff"
              onMouseLeave={() => setActiveIndex(null)}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.name] || "#ccc"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-lg font-bold text-gray-800">
            {activeData ? activeData.name : "Total"}
          </div>
          <div className="text-xl font-extrabold text-black">
            {activeData
              ? `${Math.round((activeData.value / total) * 100)}%`
              : "100%"}
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-gray-700 justify-items-center">
          {Object.keys(COLORS).map((status, index) => (
            <div key={index} className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[status] }}
              ></span>
              {status}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
