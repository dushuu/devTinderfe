import { useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import AppLayout from "../layouts/Applayout";
import AuthLayout from "../layouts/AuthLayout";

import Auth from "../pages/Auth/Login/login";


const AppRoutes = () => {
  const element = useRoutes([
    {
      children: [
        {
          element: <Navigate to="/dashboard" />,
          path: "",
        },

        {
          element: <Navigate to="/dashboard" />,
          path: "*",
        },
      ],
      element: <AppLayout />,
    },
    {
      children: [
        {
          element: <Auth defaultPage="Login" />,
          path: "/login",
        },
        {
          element: <Auth defaultPage="Signup" />,
          path: "/signup",
        },
      ],
      element: <AuthLayout />,
    },
  ]);

  return element;
};

export default AppRoutes;
