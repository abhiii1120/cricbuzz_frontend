import Register from "@/features/auth/ui/pages/Register";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import Login from "@/features/auth/ui/pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "@/features/dashboard/ui/pages/Dashboard";
import { useDispatch } from "react-redux";
import { userDetails } from "@/features/auth/state/authAction";
const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(userDetails());
    })();
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Register />,
            },
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      path: "/dashboard",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
