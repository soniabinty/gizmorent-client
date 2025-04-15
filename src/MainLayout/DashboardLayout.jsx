import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { auth } from "../Firebase/firebase.config.js";
import Sidebar from "../pages/Dashboard/Sidebar";
import { clearUser, setUser } from "../Redux/authSlice";



const DashboardLayout = () => {
  const authChecked = useSelector((state) => state.auth.authChecked);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          providerId: user.providerData[0]?.providerId || "password",
        }));

      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);


  if (!authChecked) {
    console.log("Auth state not checked yet...");
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen md:flex  bg-white">
      {/* Left Side: Sidebar Component */}

      <Sidebar />

      {/* Right Side: Dashboard Dynamic Content */}
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
