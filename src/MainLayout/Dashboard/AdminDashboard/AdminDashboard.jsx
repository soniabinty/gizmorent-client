import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("statistics");

  // Sample data for the chart
  const chartData = [
    { name: "Products", value: 120 },
    { name: "Orders", value: 80 },
    { name: "Revenue", value: 5000 },
    { name: "Users", value: 50 },
  ];

  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin" },
  ]);

  // Sample seller data
  const [sellers, setSellers] = useState([
    { id: 1, name: "Seller One", email: "seller1@example.com", status: "Pending" },
    { id: 2, name: "Seller Two", email: "seller2@example.com", status: "Approved" },
  ]);

  // Function to update user role
  const updateUserRole = (id, newRole) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  // Function to approve seller
  const approveSeller = (id) => {
    setSellers(
      sellers.map((seller) =>
        seller.id === id ? { ...seller, status: "Approved" } : seller
      )
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-Primary text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab("statistics")}
              className={`block w-full text-left p-2 rounded-lg ${
                activeTab === "statistics" ? "bg-Accent" : "hover:bg-Accent/50"
              }`}
            >
              Statistics
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("manage-users")}
              className={`block w-full text-left p-2 rounded-lg ${
                activeTab === "manage-users" ? "bg-Accent" : "hover:bg-Accent/50"
              }`}
            >
              Manage Users
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("approve-seller")}
              className={`block w-full text-left p-2 rounded-lg ${
                activeTab === "approve-seller" ? "bg-Accent" : "hover:bg-Accent/50"
              }`}
            >
              Approve Seller
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "statistics" && (
          <div>
            <h1 className="text-3xl font-bold text-Primary mb-6">Statistics</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-Secondary">Total Products</h2>
                <p className="text-3xl font-bold">120</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-Secondary">Total Orders</h2>
                <p className="text-3xl font-bold">80</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-Secondary">Total Revenue</h2>
                <p className="text-3xl font-bold">$5000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-Secondary">Total Users</h2>
                <p className="text-3xl font-bold">50</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-Secondary mb-4">Overview</h2>
              <BarChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#ff6b00" />
              </BarChart>
            </div>
          </div>
        )}

        {activeTab === "manage-users" && (
          <div>
            <h1 className="text-3xl font-bold text-Primary mb-6">Manage Users</h1>

            {/* User Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Role</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">{user.role}</td>
                      <td className="p-2">
                        <button
                          onClick={() => updateUserRole(user.id, "Renter")}
                          className="bg-Accent text-white px-3 py-1 rounded-lg mr-2"
                        >
                          Make Renter
                        </button>
                        <button
                          onClick={() => updateUserRole(user.id, "Admin")}
                          className="bg-Primary text-white px-3 py-1 rounded-lg"
                        >
                          Make Admin
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "approve-seller" && (
          <div>
            <h1 className="text-3xl font-bold text-Primary mb-6">Approve Seller</h1>

            {/* Seller Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sellers.map((seller) => (
                    <tr key={seller.id} className="border-b">
                      <td className="p-2">{seller.name}</td>
                      <td className="p-2">{seller.email}</td>
                      <td className="p-2">{seller.status}</td>
                      <td className="p-2">
                        {seller.status === "Pending" && (
                          <button
                            onClick={() => approveSeller(seller.id)}
                            className="bg-Primary text-white px-3 py-1 rounded-lg"
                          >
                            Approve
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;