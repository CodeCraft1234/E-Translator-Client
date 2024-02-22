// import { Helmet } from "react-helmet-async";
// import UseBlogs from "../../AxiosFetch/UseBlogs";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import UseAxiosSecure from "../../Axios/UseAxiosSecure";
// import { Link } from "react-router-dom";
// import { MdReadMore } from "react-icons/md";

// const ManageBlogs = () => {
//   const [showFullContent1, setShowFullContent1] = useState(false);
//   const [blogs, refetch] = UseBlogs();
//   const AxiosSecure = UseAxiosSecure();

//   const toggleContent = (cardNumber) => {
//     switch (cardNumber) {
//       case 1:
//         setShowFullContent1(!showFullContent1);
//         break;
//       default:
//         break;
//     }
//   };

//   const renderContent = (content, showFullContent) => {
//     const maxLength = 150;
//     if (showFullContent) {
//       return content;
//     }
//     return content.length > maxLength
//       ? content.substring(0, maxLength) + "..."
//       : content;
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You want to delete this Blog!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete blog",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         AxiosSecure.delete(`/blogs/${id}`).then((res) => {
//           refetch();
//           if (res.data.deletedCount > 0) {
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your blog has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };

//   return (
//     <div className="text-white bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] p-4 lg:px-28 md:px-10 px-5">
//       <Helmet>
//         <title>E-Translator | Manage Blogs</title>
//         <link rel="canonical" href="https://www.tacobell.com/" />
//       </Helmet>

//       <div className="grid gap-6 overflow-hidden ">
//         {blogs.map((blog) => (
//           <>
//             <div
//               key={blog._id}
//               className="bg-[#006bcb] dark:bg-gray-800 p-4 rounded-lg shadow-md "
//             >
//               <img
//                 className=" w-full h-72 rounded-lg"
//                 src={blog.photo}
//                 alt=""
//               />
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold">{blog.title}</h3>
//               <p className="mt-2">
//                 {renderContent(blog.description, showFullContent1)}
//               </p>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={() => toggleContent(1)}
//                 className="text-blue-500 hover:underline"
//               >
//                 {showFullContent1 ? "Read Less" : `Read More `}{" "}
//                 {<MdReadMore className="inline-block" />}
//               </button>
//               <div className=" flex gap-5">
//                 <Link to={`/dashboard/blogs/${blog._id}`}>
//                   <button className="bg-indigo-950 border-b-2 rounded-lg">
//                     <a className="b" href="">
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                       Update
//                     </a>
//                   </button>
//                 </Link>

//                 <button
//                   onClick={() => handleDelete(blog._id)}
//                   className="bg-indigo-950 border-b-2 rounded-lg"
//                 >
//                   <a className="b">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     Delete
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageBlogs;

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import UseBlogs from "../../AxiosFetch/UseBlogs";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import Swal from "sweetalert2";

const TranslationPlatformBlog = () => {
  const [blogs, refetch] = UseBlogs();
  const AxiosSecure = UseAxiosSecure();
  const [showFullContent, setShowFullContent] = useState({});

  const toggleContent = (blogId) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };

  const renderContent = (content, blogId) => {
    const maxLength = 150;
    if (showFullContent[blogId]) {
      return content;
    }
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  const handleDelete = (id) => {
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
        AxiosSecure.delete(`/blogs/${id}`).then((res) => {
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

  return (
    <div className="bg-[#031321] text-white p-4 mt-16 lg:px-28 md:px-10 px-5">
      <Helmet>
        <title> E-Translator | Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="grid gap-6 overflow-hidden ">
        {blogs.map((blog) => (
          <>
            <div
              key={blog._id}
              className="bg-[#006bcb] dark:bg-gray-800 p-4 rounded-lg shadow-md "
            >
              <img
                className=" w-full h-72 rounded-lg"
                src={blog.photo}
                alt=""
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="mt-2 text-gray-300">
                {renderContent(blog.description, blog._id)}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => toggleContent(blog._id)}
                className="text-blue-500 hover:underline"
              >
                {showFullContent[blog._id] ? "Read Less" : "Read More"}
              </button>

              <div className=" flex gap-5">
                <Link to={`/dashboard/blogs/${blog._id}`}>
                  <button className="bg-indigo-950 border-b-2 rounded-lg">
                    <a className="b rounded-lg" href="">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Update
                    </a>
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-indigo-950 border-b-2 rounded-lg"
                >
                  <a className="b">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Delete
                  </a>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TranslationPlatformBlog;
