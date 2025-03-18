import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CartList from "../pages/Shopping/CartList";
import Wishlist from "../pages/Shopping/Wishlist";
import AboutPage from '../pages/About/AboutPage'
import GadgetDetail from '../pages/GadgetDetail/GadgetDetail'
import Checkout from '../pages/Checkout/Checkout'

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
      
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/gadgetdetail",
        element: <GadgetDetail></GadgetDetail>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
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
