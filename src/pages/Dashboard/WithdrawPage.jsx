import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const WithdrawPage = () => {
  const axiosPublic = useAxiosPublic();

  const [withdraw, setWithdraw] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch withdraw history
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axiosPublic.get("/withdraw");
        setWithdraw(response.data);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to fetch withdraw. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [axiosPublic]);

  // Handle status update
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axiosPublic.patch(`/withdraw/${id}`, {
        status: newStatus,
      });
      if (response.data.modifiedCount > 0) {
        setWithdraw((prevWithdraw) =>
          prevWithdraw.map((payment) =>
            payment._id === id ? { ...payment, status: newStatus } : payment
          )
        );
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="bg-white py-12 lg:p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-Primary">Withdraw History</h1>
      {loading ? (
        <p>Loading withdraw...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto p-5 border border-base-300 rounded-2xl bg-base-100">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-Primary">#</th>
                <th className="text-Primary">Customer Email</th>
                <th className="text-Primary">Payment System</th>
                <th className="text-Primary">Amount</th>
                <th className="text-Primary">Date</th>
                <th className="text-Primary">Status</th>
              </tr>
            </thead>
            <tbody>
              {withdraw.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.paymentSystem}</td>
                  <td>{payment.withdrawalAmount}</td>
                  <td>{new Date(payment.date).toLocaleString()}</td>
                  <td>
                    <select
                      value={payment.status}
                      onChange={(e) =>
                        handleStatusChange(payment._id, e.target.value)
                      }
                      disabled={payment.status === "Success"}
                      className={`p-2 rounded font-semibold ${
                        payment.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Success">Success</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WithdrawPage;
