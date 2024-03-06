import { IoMdSend } from "react-icons/io";
import { Form, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useState } from "react";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);

  const AxiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const { id } = useParams();

  const { refetch, data: comments = [] } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/blogComment/get/${id}`);
      return res.data;
    },
  });
  console.log(comments);
  const sortedPosts = comments.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const posts = sortedPosts.slice(0, 4);

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const date = new Date();
    const name = user.displayName;
    const image = user.photoURL;
    const email = user.email;
    const id = blog._id;
    console.log(comment);
    const commentsInfo = { comment, date, name, image, id, email };
    console.log(commentsInfo);
    AxiosPublic.post("/blogComment", commentsInfo).then((res) => {
      refetch();
      console.log(res.data);
      e.target.reset();
    });
  };
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };


  const handleDelete = (id) => {
    const AxiosPublic=UseAxiosPublic()
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Blog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete blog",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/blogComment/${id}`)
        .then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your blog has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  // const handleupdate=(e)=>{
  //   console.log(e)
  //   const AxiosPublic=UseAxiosPublic()
  //   e.preventDefault()
  // const title=e.target.title.value

  // AxiosPublic.patch(`/blogComment/update/${e._id}`,title)
  // .then(res=>{
  //   Swal.fire({
  //     title: "updated!",
  //     text: "This blog has been updated.",
  //     icon: "success"
  //   });
  //   console.log(res.data)      
  //   })
  // }
  return (
    <div className="mt-10 grid lg:grid-cols-2 pt-24">
      <div
        key={blog._id}
        className="border p-5 bg-violet-950 border-gray-300 rounded-lg overflow-hidden "
      >
        <img className=" w-full h-[500px] rounded-lg" src={blog.photo} alt="" />
        <div className="mt-4">
          <h3 className="text-xl text-white font-semibold">{blog.title}</h3>
          <p className="mt-2 text-gray-300">{blog.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4"></div>
      </div>
      <div className="bg-white p-10 ">
        <h1 className="text-2xl font-bold">Comments</h1>
        <div className="p-5 border-2  border-black">
          <div className="p-10 ">
            {posts.map((comment) => (
              <div
                className="flex justify-start items-center bg-red-100 p-5 mb-1 rounded-2xl"
                key={comment._id}
              >
                <img
                  className="h-14 w-14 rounded-full"
                  src={comment.image}
                  alt=""
                />
                <div>
                  <h1 className="font-bold">{comment.name}</h1>
                  <h1>{comment.comment}</h1>
                  <div className="grid lg:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 mt-3 text-start justify-center items-center gap-2">
                    <button onClick={handleLike}>
                      {isLiked ? <BiSolidLike /> : <BiLike color="blue" />}
                    </button>

                    
                    {
                      user?.email === comment.email &&   <button>{/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button className="hover:underline"  onClick={()=>document.getElementById('my_modal_1').showModal()}>Edit</button>
                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Edit Comment!</h3>
                          <form >
                          <input defaultValue={comment.comment} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                          <button className="">
                <IoMdSend className="inline-block text-6xl" />
              </button>
                          </form>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog></button>
                    }
                   
                   
                    <h1 className="hover:underline">Reply</h1>

                    {
                      user?.email === comment.email &&  <button onClick={()=>handleDelete(comment._id)} className=""><h1 className="hover:underline">Delete</h1></button>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl">
            <Form onSubmit={handleComment} className="flex items-center ">
              <textarea
                name="comment"
                className="textarea w-96   ml-5 py-2 pl-3 text-sm rounded-md  focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                placeholder="write a comment"
              ></textarea>
              <button className="">
                <IoMdSend className="inline-block text-6xl" />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
