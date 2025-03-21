import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function OrderForm() {
    const [order, setOrder] = useState({ orderId: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (order.orderId !== "12345" || order.email !== "test@example.com") {
            Swal.fire({
                icon: "error",
                title: "Order Not Found",
                text: "Please check your Order ID and Email and try again.",
            });
            return;
        }
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your order has been placed successfully!",
        }).then(() => {
            navigate("/tracking-page");
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-gray-50 p-8 shadow-md rounded-lg w-full max-w-xl">
                <p className="text-gray-600 mb-4">
                    To place your order, enter your Order ID and Billing Email below.
                    Ensure the details are correct before proceeding.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Order ID</label>
                        <input
                            type="text"
                            name="orderId"
                            value={order.orderId}
                            onChange={handleChange}
                            placeholder="Found in your order confirmation email."
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Billing Email</label>
                        <input
                            type="email"
                            name="email"
                            value={order.email}
                            onChange={handleChange}
                            placeholder="Email you used during checkout."
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                    >
                        PLACE ORDER
                    </button>
                </form>
                <p className="text-gray-500 text-sm mt-4">
                    By placing an order, you agree to our <a href="#" className="text-blue-500">Terms & Conditions</a> and
                    <a href="#" className="text-blue-500"> Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
}