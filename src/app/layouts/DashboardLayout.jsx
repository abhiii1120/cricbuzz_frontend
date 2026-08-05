import { SocketContext } from "@/context/socket.context";
import React, { useContext } from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const  socket  = useContext(SocketContext);
  console.log(socket);

  socket.on("connected",() => {
    console.log("server connected");
    socket.emit("client:connected",JSON.stringify({
      message:"hello from client"
    }));
  })

  return <Outlet />;
};

export default DashboardLayout;
