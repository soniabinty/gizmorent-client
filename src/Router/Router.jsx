import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../MainLayout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
     
    ]
  },
  {
      
    path: "login",
    element: <Login></Login>
 
}
]);