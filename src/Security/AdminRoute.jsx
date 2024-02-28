import { useContext } from "react";
import useAdmin from "../Components/hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Adminroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminloading]=useAdmin()
    const location=useLocation()
    if(loading||isAdminloading){
        return <h2 className='text-center text-2xl'>loading</h2>
    }
    if(user && isAdmin){
        return children
    } 
    return <Navigate state={location.pathname} to='/Login'></Navigate>
    // return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Adminroute;
