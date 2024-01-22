import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    
    const signup=()=>{
        setLoading(true)
    }
    
    const login=()=>{
        setLoading(true)
    }

    const Googlelogin=()=>{
        setLoading(true)
    }

    useEffect(()=>{
        setLoading(false)
    },[])

    const info={user,loading,login,signup,Googlelogin
    }
    return <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;