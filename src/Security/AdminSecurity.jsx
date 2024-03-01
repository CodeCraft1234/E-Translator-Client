// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAdmin from '../Components/hook/useAdmin';
// import { AuthContext } from './AuthProvider';

// const AdminSecurity = ({children}) => {
//     const {user,loading}=useContext(AuthContext)
//     const [isAdmin,isAdminloading]=useAdmin()
//     const location=useLocation()
//     if(loading||isAdminloading){
//         return <h2 className='text-center text-2xl'>loading</h2>
//     }
//     if(user && isAdmin){
//         return children
//     } 
//     return <Navigate state={location.pathname} to='/Login'></Navigate>
   
// };

// export default AdminSecurity;

// AdminSecurity.jsx

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Components/hook/useAdmin';
import { AuthContext } from './AuthProvider';

const AdminSecurity = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    
    if (loading || isAdminLoading) {
        return <h2 className='text-center text-2xl'>Loading...</h2>;
    }
    
    if (user && isAdmin) {
        return children;
    } 
    
    return <Navigate state={location.pathname} to='/login' />;
};

export default AdminSecurity;



