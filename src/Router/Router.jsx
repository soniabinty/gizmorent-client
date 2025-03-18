import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../MainLayout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CartList from "../pages/Shopping/CartList";
import Wishlist from "../pages/Shopping/Wishlist";



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
        path: "/cart", // Route for CartList page
        element: <CartList></CartList>,
      },
      {
        path: "/wishlist", // Route for Wishlist page
        element: <Wishlist></Wishlist>,
      }
    ]
  },
  {
      
    path: "login",
    element: <Login></Login>
  },
  {
      
    path: "register",
    element: <Register></Register>
  },

]);