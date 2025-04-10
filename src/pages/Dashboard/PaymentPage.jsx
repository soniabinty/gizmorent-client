/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const PaymentPage = () => {
    const axiosPublic = useAxiosPublic();

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch payments on component mount
    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axiosPublic.get("/initiate-payment");
                setPayments(response.data);
            } catch (err) {
                setError("Failed to fetch payments. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, [axiosPublic]);

    // Handle status update
    const handleStatusUpdate = async (transactionId) => {
        try {
            const response = await axiosPublic.post("/update-payment-status", {
                transactionId,
                status: "Successful",
            });

            if (response.data.success) {
                setPayments((prevPayments) =>
                    prevPayments.map((payment) =>
                        payment.transactionId === transactionId
                            ? { ...payment, status: "Successful" }
                            : payment
                    )
                );
                alert("Payment status updated successfully");
            } else {
                alert(response.data.error || "Failed to update the payment status");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while updating the payment status");
        }
    };

    // Render table
    return (
        <div className="bg-white p-5 lg:p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-Primary">Payment History</h1>
            {loading ? (
                <p>Loading payments...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto p-5 border border-base-300 rounded-2xl bg-base-100">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-Primary">#</th>
                                <th className="text-Primary">Transaction ID</th>
                                <th className="text-Primary">Customer Name</th>
                                <th className="text-Primary">Amount</th>
                                <th className="text-Primary">Status</th>
                                <th className="text-Primary">Date</th>
                                <th className="text-Primary">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={payment.transactionId}>
                                    <th>{index + 1}</th>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.customer?.cus_name || "N/A"}</td>
                                    <td>{payment.amount.toFixed(2)}</td>
                                    <td
                                        className={
                                            payment.status === "Successful"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }
                                    >
                                        {payment.status}
                                    </td>
                                    <td>{new Date(payment.date).toLocaleString()}</td>
                                    <td>
                                        {payment.status === "Pending" && (
                                            <button
                                                onClick={() => handleStatusUpdate(payment.transactionId)}
                                                className="btn bg-Primary text-white btn-sm"
                                            >
                                                Mark as Successful
                                            </button>
                                        )}
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

export default PaymentPage;