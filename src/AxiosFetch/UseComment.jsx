import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";


const UseComment = () => {
    const AxiosSecure=UseAxiosSecure()
    const { refetch, data: comment=[]}=useQuery({
        queryKey:['comment'],
        queryFn: async () => {
            const res=await AxiosSecure.get(`/blogComment/get`)
            return res.data
        }
    })
        console.log(comment)
        return [comment,refetch]
};

export default UseComment;