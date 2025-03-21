import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CartList from "../pages/Shopping/CartList";
import Wishlist from "../pages/Shopping/Wishlist";

import AdminDashboard from "../MainLayout/Dashboard/AdminDashboard/AdminDashboard";
import AboutPage from "../pages/About/AboutPage";
import Checkout from "../pages/Checkout/Checkout";
import GadgetDetail from "../pages/GadgetDetail/GadgetDetail";

import DashboardLayout from "../MainLayout/DashboardLayout";
import AllGadgets from "../pages/AllGadgets/AllGadgets";
import AddGadget from "../pages/Dashboard/AddGadget";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import MyGadget from "../pages/Dashboard/MyGadget";
import PackagePage from "../pages/Package/PackagePage";
import OrderForm from "../pages/TrackingPage/OrderForm";
import TrackingPage from "../pages/TrackingPage/TrackingPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <CartList></CartList>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },

      {
        path: "/AdminDashboard",
        element: <AdminDashboard></AdminDashboard>,
      },

      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/gadgetdetail",
        element: <GadgetDetail></GadgetDetail>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/allgadgets",
        element: <AllGadgets></AllGadgets>,
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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "add-gadget",
        element: <AddGadget></AddGadget>,
      },
      {
        path: "my-gadget",
        element: <MyGadget></MyGadget>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },

  {
    path: "register",
    element: <Register></Register>,
  },
]);
