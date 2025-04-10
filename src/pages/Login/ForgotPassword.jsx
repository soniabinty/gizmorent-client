import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearResetPasswordState, forgotPassword } from "../../Redux/authSlice";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const { loading, error, resetPasswordSuccess } = useSelector(
        (state) => state.auth
    );

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please enter your email address to reset your password.",
            });
            return;
        }

        dispatch(forgotPassword(email));
    };

    // Show success or error messages
    useEffect(() => {
        if (resetPasswordSuccess) {
            Swal.fire({
                icon: "success",
                title: "Email Sent",
                text: resetPasswordSuccess,
            });
            setEmail("");
            dispatch(clearResetPasswordState());
        } else if (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error,
            });
            dispatch(clearResetPasswordState());
        }
    }, [resetPasswordSuccess, error, dispatch]);

    return (
        <div className="bg-gradient-to-t from-[#ffd166] to-gray-200 h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                <form onSubmit={handlePasswordReset}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter your email"
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-full rounded-lg hover:bg-Primary bg-Primary text-white"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;