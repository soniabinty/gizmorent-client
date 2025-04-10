import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";

import AdminDashboard from "../MainLayout/Dashboard/AdminDashboard/AdminDashboard";
import DashboardLayout from "../MainLayout/DashboardLayout";
import AboutPage from "../pages/About/AboutPage";
import AllGadgets from "../pages/AllGadgets/AllGadgets";
import Renter from "../pages/BecomeRenter/Renter";
import Checkout from "../pages/Checkout/Checkout";
import AddGadget from "../pages/Dashboard/AddGadget";
import HomeAdmin from "../pages/Dashboard/AdminDashboard/HomeAdmin";
import RenterApproval from '../pages/Dashboard/AdminDashboard/RenterApproval/RenterApproval.jsx';
import DashboardHome from "../pages/Dashboard/DashboardHome";
import MyGadget from "../pages/Dashboard/MyGadget";
import UpdateGadget from "../pages/Dashboard/UpdateGadget";
import UserProfiles from "../pages/Dashboard/UserProfile/UserProfiles";
import GadgetDetail from "../pages/GadgetDetail/GadgetDetail";
import Home from "../pages/Home/Home";
import ForgotPassword from "../pages/Login/ForgotPassword";
import Login from "../pages/Login/Login";
import ResetPasswordPage from "../pages/Login/ResetPasswordPage";
import PackagePage from "../pages/Package/PackagePage";
import Register from "../pages/Register/Register";
import CartList from "../pages/Shopping/CartList";
import Wishlist from "../pages/Shopping/Wishlist";
import OrderForm from "../pages/TrackingPage/OrderForm";
import TrackingPage from "../pages/TrackingPage/TrackingPage";
import CreditPayment from "../pages/Checkout/Creditpayment/CreditPayment.jsx";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <CartList />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/AdminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/gadgetdetail/:id",
        element: <GadgetDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },

      {
        path: "/creditpayment",
        element: <CreditPayment></CreditPayment>,
      },
      {
        path: "/renter",
        element: <Renter />,
      },
      {
        path: "/allgadgets",
        element: <AllGadgets />,
      },
      {
        path: "/tracking-page",
        element: <TrackingPage></TrackingPage>,
      },
      {
        path: "/tracking",
        element: <OrderForm></OrderForm>,
      },
      {
        path: "/pricing",
        element: <PackagePage></PackagePage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "add-gadget",
        element: <AddGadget />,
      },
      {
        path: "update-gadget/:id",
        element: <UpdateGadget />,
        loader: ({ params }) => fetch(`http://localhost:3000/gadgets/${params.id}`),
      },
      {
        path: "my-gadget",
        element: <MyGadget />,
      },
      {
        path: "userprofile",
        element: <UserProfiles />,
      },
      // admin
      {
        path: "adminhome",
        element: <HomeAdmin></HomeAdmin>,
      },
      {
        path: "renterapprove",
        element: <RenterApproval></RenterApproval>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);