import Login from "../LogIn/LogIn";
import Main from "../Main/Main";
import {
    createBrowserRouter,
  } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";


export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element:<Home></Home>,
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "signup",
            element:<SignUp></SignUp>,
          },
          {
            path: "ProtectedRoute",
            element:<PrivateRoute><ProtectedRoute></ProtectedRoute></PrivateRoute>,
          },

        ]
    }
]);