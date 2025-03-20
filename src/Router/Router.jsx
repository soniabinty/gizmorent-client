import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";

import AboutPage from '../pages/About/AboutPage';

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CartList from "../pages/Shopping/CartList";
import Wishlist from "../pages/Shopping/Wishlist";

import TrackingPage from "../pages/TrackingPage/TrackingPage";

import AboutPage from '../pages/About/AboutPage'
import GadgetDetail from '../pages/GadgetDetail/GadgetDetail'
import Checkout from '../pages/Checkout/Checkout'
import AllGadgets from "../pages/AllGadgets/AllGadgets";
import AdminDashboard from "../MainLayout/Dashboard/AdminDashboard/AdminDashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/cart",
        element: <CartList></CartList>,
      },
      {

        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },


        path: "/wishlist", 
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/AdminDashboard", 
        element: <AdminDashboard></AdminDashboard>,
      },


      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {

        path: "/tracking",
        element: <TrackingPage></TrackingPage>
      }


        path: "/gadgetdetail",
        element: <GadgetDetail></GadgetDetail>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
},

{
  path: "/allgadgets",
  element: <AllGadgets></AllGadgets>,
},



    ]
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
