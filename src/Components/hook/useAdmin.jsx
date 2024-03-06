// import { useQuery } from "@tanstack/react-query";


// import { AuthContext } from "../../Security/AuthProvider";
// import UseAxiosSecure from "../../Axios/UseAxiosSecure";

// const useAdmin = () => {
//     const {user} = AuthContext();
//     const [axiosSecure] = UseAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/usersInfo/admin/${user?.email}`);
//             console.log('is admin response', res)
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;
import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext); // Use useContext to access the AuthContext
    const AxiosSecure = UseAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            // const res = await AxiosSecure.get(`/usersInfo/admin/${user?.email}` ,{ withCredentials: true });
            const res = await AxiosSecure.get(`/users/admin/${user?.email}` ,{ withCredentials: true });
            console.log('is admin response', res)
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
