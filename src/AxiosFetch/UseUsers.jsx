import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";


const UseUsers = () => {
    const axiosPublic=UseAxiosPublic()
    const { refetch, data: users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res=await axiosPublic.get(`/users`)
            return res.data
        }
    })
        console.log(users)
        return [users,refetch]
};
export default UseUsers;