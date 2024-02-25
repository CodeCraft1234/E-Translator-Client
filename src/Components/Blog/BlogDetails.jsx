import { IoMdSend } from "react-icons/io";
import { Form, useLoaderData, useParams } from "react-router-dom";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { AuthContext } from "../../Security/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useState } from "react";

const BlogDetails = () => {
    const blog=useLoaderData()
    console.log(blog)
    const AxiosSecure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
    console.log(user)
    const {id}=useParams()
  
    const { refetch, data: comments=[]}=useQuery({
        queryKey:['comment'],
        queryFn: async () => {
          const AxiosSecure=UseAxiosSecure()
            const res=await AxiosSecure.get(`/blogComment/get/${id}`)
            return res.data
        }
    })
        console.log(comments)
        const sortedPosts = comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        const posts=sortedPosts.slice(0,4)
        
        const handleComment=(e)=>{
        e.preventDefault()
        const comment=e.target.comment.value 
        const date=new Date()
        const name=user.displayName 
        const image=user.photoURL
        const email=user.email
        const id=blog._id
        console.log(comment)       
        const commentsInfo={comment,date,name,image,id,email}
        console.log(commentsInfo)
               AxiosSecure.post('/blogComment',commentsInfo)
        .then(res=>{
          refetch()        
          console.log(res.data)
        })
              e.reset()
    }
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
      setIsLiked(!isLiked);
    };
    return (
        <div className="mt-10 grid lg:grid-cols-2 pt-24">
              <div
              key={blog._id}
              className="border p-5 bg-violet-950 border-gray-300 rounded-lg overflow-hidden "
            >
              <img
                className=" w-full h-[500px] rounded-lg"
                src={blog.photo}
                alt=""
              />
              <div className="mt-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="mt-2 text-gray-300">
                {blog.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
                     </div>
            </div>
            <div className="bg-white p-10 ">
                <h1 className="text-2xl font-bold">Comments</h1>
            <div className="p-5 border-2  border-black">
           <div className="p-10 ">
           {
            posts.map(comment=><div className="flex justify-start items-center bg-red-100 p-5 mb-1 rounded-2xl" key={comment._id}>
                <img className="h-14 w-14 rounded-full" src={comment.image} alt="" />
           <div>
           <h1 className="font-bold">{comment.name}</h1>
            <h1>{comment.comment}</h1>
            <div className="grid lg:grid-cols-4 mt-3 text-start justify-center items-center gap-2">
            <button  onClick={handleLike}>
      {isLiked ?  <BiSolidLike /> : <BiLike color="blue" />}
    </button>
    <h1 className="hover:underline">Edit</h1>
    <h1 className="hover:underline">Reply</h1>
    <h1 className="hover:underline">Delete</h1>
            </div>
           </div>
                </div>)
           }
            </div>
<div className="rounded-xl">
       <Form onSubmit={handleComment} className="flex items-center ">
       <textarea name="comment" className="textarea w-96   ml-5 py-2 pl-3 text-sm rounded-md  focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" placeholder="write a comment"></textarea><button className=""><IoMdSend className="inline-block text-6xl" /></button>
       </Form>      
        </div>	
        </div>
            </div>
        </div>
    );
};

export default BlogDetails;