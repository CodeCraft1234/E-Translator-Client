import { Helmet } from "react-helmet-async";
import UseBlogs from "../../AxiosFetch/UseBlogs";
import { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";


const ManageBlogs = () => {
    const [showFullContent1, setShowFullContent1] = useState(false);
    const [blogs,refetch] = UseBlogs();
    const AxiosSecure=UseAxiosSecure()
    console.log(blogs);
    const toggleContent = (cardNumber) => {
      switch (cardNumber) {
        case 1:
          setShowFullContent1(!showFullContent1);
          break;
      }
    };
  
    const renderContent = (content, showFullContent) => {
      const maxLength = 150;
      if (showFullContent) {
        return content;
      }
      return content.length > maxLength
        ? content.substring(0, maxLength) + "..."
        : content;
    };

    const handleDelete =(id)=>{
        console.log(id)
        Swal.fire({
          title: "Are you sure?",
          text: "You want to delete this Blogs!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete user"
        })
        .then(res=>{
          console.log(res.data)
          AxiosSecure.delete(`/blogs/${id}`).then(res=>{
            console.log(res.data)
            refetch()
            if(res.data.deletedCount>0){
              Swal.fire({
                  title: "deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
          }
          })
        })
      
        
      }
  
    return (
        <div className="bg-base-300  p-4 lg:px-28 md:px-10 px-5">
        <Helmet>
          <title> E-Translator | Manage Blogs</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
  
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="dark:bg-gray-800 flex mt-10 justify-center items-center  dark:text-gray-100"
          >
            <img className="w-60 h-full" src={blog.photo} alt="" />
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-gray-400">{blog.date}</span>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
                ></a>
              </div>
              <div className="mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-2xl font-bold hover:underline"
                >
                  {blog.title}
                </a>
                <p className="mt-2">
                  {" "}
                  {renderContent(`${blog.description}`, showFullContent1)}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button onClick={() => toggleContent(1)}>
                  {" "}
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-400"
                  >
                    {" "}
                    {showFullContent1 ? "Read Less" : "Read More"}
                  </a>
                </button>
  
                <div>
                <button className="btn text-white  btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white">
                Update
              </button>
                <button onClick={()=>handleDelete(blog._id)} className="btn text-white  btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white">
                Delete
              </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ManageBlogs;