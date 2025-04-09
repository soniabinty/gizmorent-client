import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ordered", value: 10, color: "#00C49F" },
  { name: "Pending", value: 20, color: "#0088FE" },
  { name: "Delivered", value: 15, color: "#A78BFA" },
];

const ProductData = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const activeData = activeIndex !== null ? data[activeIndex] : null;

  return (
    <div  className="p-4 border border-gray-300 bg-white shadow-lg rounded-lg">
       <h2 className="text-2xl font-semibold">Delivery Update</h2>
<div className="relative w-full max-w-sm mx-auto ">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
            stroke="#fff"
            onMouseLeave={() => setActiveIndex(null)}
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Dynamic Center Label */}
      <div className="absolute top-1/2  left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-xl font-extrabold">
          {activeData ? activeData.name : "Total"}
        </div>
        <div className="text-xl font-semibold">
          {activeData
            ? `${Math.round((activeData.value / total) * 100)}%`
            : "100%"}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-gray-700 justify-items-center">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductData;
