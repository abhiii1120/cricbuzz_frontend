import Register from "@/features/auth/ui/pages/Register";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "@/features/auth/ui/pages/Login";
import Dashboard from "@/features/dashboard/ui/pages/Dashboard";
import { useDispatch } from "react-redux";
import { userDetails } from "@/features/auth/state/authAction";
import Matches from "@/features/match/pages/Matches";
import Player from "@/features/player/pages/Player";
import LiveDashboard from "@/features/live-dashboard/pages/LiveDashboard";
import AdminHome from "@/features/admin/pages/AdminHome";
import AppLayout from "../layouts/AppLayout";
import AdminLayout from "../layouts/AdminLayout";
import LandingPge from "@/features/landing_page/pages/LandingPge";
const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(userDetails());
    })();
  }, []);
  let router = createBrowserRouter([
    {
      path: "",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <LandingPge />,
        },
        {
          path:'dashboard',
          element:<Dashboard/>
        },
        {
          path: "match/:seriesId?",
          element: <Matches />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "player",
          element: <Player />,
        },
        {
          path: "live/:match_id",
          element: <LiveDashboard />,
        },
      ],
    },
    {
      path: "",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <AdminHome />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
