import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { auth } from "../Firebase/firebase.config.js";
import { clearUser, setUser } from "../Redux/authSlice";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NavCategory from "../Shared/NavCategory";
import OfferModal from "../pages/Home/OfferModal.jsx";

const Root = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set the user in Redux
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        // User is signed out, clear the user in Redux
        dispatch(clearUser());
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="font-sans relative ">
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Root;
