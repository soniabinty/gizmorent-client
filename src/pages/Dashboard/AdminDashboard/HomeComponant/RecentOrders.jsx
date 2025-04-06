
import { TbAdjustmentsSearch } from "react-icons/tb";
const orders = [
  {
    id: 1,
    image: "https://i.ibb.co.com/MDGZ3vbv/Adobe-Express-file-7.png",
    name: "Macbook Pro 13”",
    variants: "2 Variants",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
    statusColor: "badge-success",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/zHXPLs2s/Adobe-Express-file-6.png",
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    statusColor: "badge-warning",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/MDGZ3vbv/Adobe-Express-file-7.png",
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
    statusColor: "badge-success",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/zHXPLs2s/Adobe-Express-file-6.png",
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
    statusColor: "badge-error",
  },

];

const RecentOrders = () => {
  return (
    <div className="p-4 border border-gray-300 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recent Orders</h2>
        <div className="flex space-x-2">
          <button className="btn btn-outline btn-sm">
            <span><TbAdjustmentsSearch /></span>Filter
          </button>
          <button className="btn btn-outline btn-sm">See all</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>Products</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="flex items-center space-x-3 py-2">
                  <img src={order.image} alt={order.name} className="w-10 h-10 rounded-lg" />
                  <div>
                    <p className="font-medium">{order.name}</p>
                    <p className="text-gray-500 text-sm">{order.variants}</p>
                  </div>
                </td>
                <td>{order.category}</td>
                <td className="font-semibold">{order.price}</td>
                <td>
                  <span className={`badge ${order.statusColor} px-3 py-1 text-sm font-semibold`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
