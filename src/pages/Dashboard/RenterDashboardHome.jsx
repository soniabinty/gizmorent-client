import { BsFillCartPlusFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlinePendingActions, MdOutlineRateReview } from "react-icons/md";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const RenterDashboardHome = () => {
  const data = [
    {
      category: "Laptops",
      total_income: 18000,
    },
    {
      category: "Cameras",
      total_income: 12000,
    },
    {
      category: "Smartphones",
      total_income: 15000,
    },
    {
      category: "Gaming Consoles",
      total_income: 9000,
    },
    {
      category: "Drones",
      total_income: 7000,
    },
    {
      category: "Tablets",
      total_income: 8000,
    },
    {
      category: "Smartwatches",
      total_income: 6000,
    },
    {
      category: "VR Headsets",
      total_income: 7500,
    },
    {
      category: "Projectors",
      total_income: 5000,
    },
    {
      category: "Audio Equipment",
      total_income: 11000,
    },
    {
      category: "Wearable Tech",
      total_income: 4500,
    },
    {
      category: "Printers",
      total_income: 5200,
    },
    {
      category: "Televisions",
      total_income: 13000,
    },
    {
      category: "Refrigerators",
      total_income: 14000,
    },
    {
      category: "Washing Machines",
      total_income: 9000,
    },
    {
      category: "Air Conditioners",
      total_income: 12500,
    },
    {
      category: "Microwaves",
      total_income: 6000,
    },
    {
      category: "Home Theaters",
      total_income: 10500,
    },
  ];
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28BFE",
    "#FF6F61",
    "#6A0572",
    "#C71585",
  ];

  // Custom label function
  const renderCustomizedLabel = ({ name, percent }) => {
    return `${name} ${(percent * 100).toFixed(0)}%`;
  };
  return (
    <div className="pt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Revenue */}
        <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md px-6 py-2 items-center justify-between">
          <div
            className={`bg-clip-border  rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
          >
            <FaDollarSign className="w-6 h-6 "></FaDollarSign>
          </div>
          <div className="flex flex-col items-end">
            <p>Total Revenue</p>
            <h3 className="text-2xl font-semibold">$5550</h3>
          </div>
        </div>

        {/* pending */}
        <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md px-6 py-2 items-center justify-between">
          <div
            className={`bg-clip-border  rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
          >
            <MdOutlinePendingActions className="w-6 h-6 " />
          </div>
          <div className="flex flex-col items-end">
            <p>Pending Order</p>
            <h3 className="text-2xl font-semibold">50</h3>
          </div>
        </div>
        {/* total order */}
        <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md px-6 py-2 items-center justify-between">
          <div
            className={`bg-clip-border rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg grid h-16 w-16 place-items-center from-sky-600 to-sky-400 text-white shadow-pink-500/40`}
          >
            <BsFillCartPlusFill className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-end">
            <p>Total Order</p>
            <h3 className="text-2xl font-semibold">50</h3>
          </div>
        </div>
        {/* total reviews */}
        <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md px-6 py-2 items-center justify-between">
          <div
            className={`bg-clip-border rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-pink-500/40`}
          >
            <MdOutlineRateReview className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-end">
            <p>Total Reviews</p>
            <h3 className="text-2xl font-semibold">550</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-6">
        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} margin={{ bottom: 60 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
              <XAxis
                dataKey="category"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis />
              <Tooltip
                formatter={(value) => `$${value.toLocaleString()}`}
                labelFormatter={(label) => `Category: ${label}`}
              />

              <Bar
                dataKey="total_income"
                fill="url(#colorIncome)"
                barSize={40}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  renderCustomizedLabel({ name, percent })
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="total_income"
                nameKey="category"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [
                  `$${value.toLocaleString()}`,
                  props.payload.category,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RenterDashboardHome;
