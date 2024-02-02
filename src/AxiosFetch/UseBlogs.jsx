import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";


const UseBlogs = () => {
    const AxiosPublic=UseAxiosPublic()
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