import { CheckCircle } from "lucide-react"; // Optional icon lib
import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-4">
                    Thank you for your payment. Your transaction has been successfully completed.
                </p>
                <Link
                    to="/"
                    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
