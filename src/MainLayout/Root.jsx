import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { auth } from "../Firebase/firebase.config.js";
import { clearUser, setUser } from "../Redux/authSlice";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NavCategory from "../Shared/NavCategory";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set the user in Redux
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));
      } else {
        // User is signed out, clear the user in Redux
        dispatch(clearUser());
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="font-sans">
      <nav>

        <Navbar />
        <NavCategory />
      </nav>

      <div className="">
        <Outlet />

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;