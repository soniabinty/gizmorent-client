import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../MainLayout/Root";
import AboutPage from "../pages/About/AboutPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import GadgetDetail from "../pages/GadgetDetail/GadgetDetail";



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
        path: "about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "gadgetdetail",
        element: <GadgetDetail></GadgetDetail>
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