import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
const UseUsers = () => {
    const AxiosSecure=UseAxiosSecure()
    const { refetch, data: users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res=await AxiosSecure.get(`/users`)
            return res.data
        }
    })
        console.log(users)
        return [users,refetch]
      
};
export default UseUsers;