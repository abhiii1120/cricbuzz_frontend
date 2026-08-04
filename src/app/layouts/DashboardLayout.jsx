import { SocketContext } from "@/context/socket.context";
import React, { useContext } from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const  socket  = useContext(SocketContext);
  console.log(socket);

  return <Outlet />;
};

export default DashboardLayout;
