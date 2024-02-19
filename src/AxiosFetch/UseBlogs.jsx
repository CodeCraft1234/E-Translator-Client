import { useQuery } from "@tanstack/react-query";

import UseAxiosSecure from "../Axios/UseAxiosSecure";


const UseBlogs = () => {
    const AxiosPublic=UseAxiosSecure()
    const { refetch, data: blogs=[]}=useQuery({
        queryKey:['blogs'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/blogs`)
            return res.data
        }
    })
        console.log(blogs)
        return [blogs,refetch]
}

export default UseBlogs;