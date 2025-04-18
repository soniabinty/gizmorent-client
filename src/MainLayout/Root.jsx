import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { auth } from "../Firebase/firebase.config.js";
import OfferModal from "../pages/Home/OfferModal.jsx";
import { clearUser, setUser } from "../Redux/authSlice";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NavCategory from "../Shared/NavCategory";
import WhatsAppWidget from "../Shared/WhatsAppWidget.jsx";
const Root = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const authChecked = useSelector((state) => state.auth.authChecked);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            providerId: user.providerData[0]?.providerId || "password",
          })
        );
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
    <div className="font-sans relative">
      {isModalOpen && (
        <div className="fixed z-50 inset-0 ">
          <OfferModal setIsModalOpen={setIsModalOpen} />
        </div>
      )}

      <div className={`${isModalOpen ? "blur-sm pointer-events-none" : ""}`}>
        <nav>
          <Navbar />
          <NavCategory />
        </nav>

        <div className="mt-6">
          <Outlet />
        </div>
        <div>
          <WhatsAppWidget></WhatsAppWidget>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Root;
