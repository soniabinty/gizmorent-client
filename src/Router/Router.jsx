import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CartList from "../pages/Shopping/CartList";
import Wishlist from "../pages/Shopping/Wishlist";

import AboutPage from "../pages/About/AboutPage";
import GadgetDetail from "../pages/GadgetDetail/GadgetDetail";
import Checkout from "../pages/Checkout/Checkout";
import AdminDashboard from "../MainLayout/Dashboard/AdminDashboard/AdminDashboard";
import Renter from "../BecomeRenter/Renter";

import DashboardLayout from "../MainLayout/DashboardLayout";
import AddGadget from "../pages/Dashboard/AddGadget";
import MyGadget from "../pages/Dashboard/MyGadget";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AllGadgets from "../pages/AllGadgets/AllGadgets";

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
        path: "/gadgetdetail",
        element: <GadgetDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/renter",
        element: <Renter />,
      },
      {
        path: "/allgadgets",
        element: <AllGadgets />,
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
        path: "my-gadget",
        element: <MyGadget />,
      },
    ],
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  },
]);