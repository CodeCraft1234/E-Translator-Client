import { useQuery } from "@tanstack/react-query";

import UseAxiosPublic from "../Axios/UseAxiosPublic";


const UseComment = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: comment=[]}=useQuery({
        queryKey:['comment'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/blogComment/get`)
            return res.data
        }
    })
        console.log(comment)
        return [comment,refetch]
};

export default UseComment;