import { Outlet } from "react-router"
import {useAuth} from "../../features/auth/hooks/useAuth"
import { useContext } from "react";
import { SocketContext } from "@/context/socket.context";
import Navbar from "@/components/Navbar";

const AppLayout = () => {
 const { pathname } =  useAuth();

//   const { socket } = useContext(SocketContext);

//   socket.on("connected",()=>{
//     console.log("server connected");
//     socket.emit("client:connected", {
//       message:"hello from client"
//     });
//   })

//   socket.on("getMe", (data)=>{
//     console.log(data);
//   })


  return (
    <div>
      { pathname!=="/login" && <Navbar />}
      <Outlet />
    </div>
  )
}

export default AppLayout