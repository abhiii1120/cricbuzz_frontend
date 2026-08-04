import React, { useEffect, useState, createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
  const [socket] = useState(() => io("http://localhost:3000"));

  useEffect(() => {
    const handleConnect = () => console.log("server connnected");
    socket.on("connect",handleConnect);

    return () => {
      socket.off("connect",handleConnect);
      socket.disconnect();
    }
  },[socket]);
  
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;