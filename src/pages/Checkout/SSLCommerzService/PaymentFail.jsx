// src/pages/Checkout/PaymentFail.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentFail = () => {
    const navigate = useNavigate();

    // Optional: Auto redirect after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
                Payment Failed 😞
            </h2>
            <p className="mb-6 text-lg">
                Something went wrong while processing your payment. <br />
                Please try again later or contact support.
            </p>
            <button
                onClick={() => navigate("/")}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
            >
                Go to Homepage
            </button>
            <p className="mt-4 text-sm text-gray-500">(Redirecting in 5 seconds...)</p>
        </div>
    );
};

export default PaymentFail;
