import React, { useState } from "react";
import { createContext } from "react";

export const socketContext = createContext(null);

const socketContext = ({ children }) => {
  const [socket, setSocket] = useState(null);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};

export default socketContext;
