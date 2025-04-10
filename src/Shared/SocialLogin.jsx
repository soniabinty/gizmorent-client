import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { googleLogin } from "../Redux/authSlice";

const SocialLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleGoogleLogin = async () => {
    try {
      await dispatch(googleLogin()).unwrap();

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome to GizmoRent!',
        timer: 2000,
        showConfirmButton: false
      });

      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error?.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className='px-8 max-sm:px-6'>
      <div className="divider">OR</div>
      <button
        className='btn rounded-lg w-full bg-Primary text-white hover:bg-Primary'
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        <FaGoogle /> {loading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default SocialLogin;
