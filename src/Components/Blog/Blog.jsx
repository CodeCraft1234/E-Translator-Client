import { useState } from "react";
import { Helmet } from "react-helmet-async";
import UseBlogs from "../../AxiosFetch/UseBlogs";

const TranslationPlatformBlog = () => {
  const [blogs, refetch] = UseBlogs();
  

  // Maintain individual states for each blog post
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

  return (

    <div className="bg-gradient-to-r my-10 from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] text-white pt-24 mt-10 lg:px-28 md:px-10 px-5">

      <Helmet>
        <title> E-Translator | Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="grid gap-6 overflow-hidden ">
        {blogs.map((blog) => (
          <>
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
            </div>
            </div>
            
          </>
        ))}
      </div>
    </div>
  );
};

export default TranslationPlatformBlog;
