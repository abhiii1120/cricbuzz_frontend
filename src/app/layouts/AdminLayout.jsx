import { Outlet } from "react-router"
import Navbar from "@/components/Navbar";
import {useAuth} from "../../features/auth/hooks/useAuth";

const AdminLayout = () => {
  const  { pathname } = useAuth();
  
  return (
    <div>
      { pathname!=="/login" && <Navbar/> }
      <Outlet/>
    </div>
  )
}

export default AdminLayout