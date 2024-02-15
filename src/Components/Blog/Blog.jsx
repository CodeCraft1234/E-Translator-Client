import { useState } from "react";
import { Helmet } from "react-helmet-async";
import UseBlogs from "../../AxiosFetch/UseBlogs";
import { MdReadMore } from "react-icons/md";




const TranslationPlatformBlog = () => {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [blogs, refetch] = UseBlogs();


  const toggleContent = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowFullContent1(!showFullContent1);
        break;
      default:
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

 
  return (
    <div className="bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] text-white p-4 mt-16 lg:px-28 md:px-10 px-5">
      <Helmet>
        <title> E-Translator | Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="grid gap-6  overflow-hidden ">
        {blogs.map((blog) => (
          <>
            <div key={blog._id} className="bg-[#006bcb] border-2  dark:bg-gray-800 p-4 rounded-lg shadow-md ">
              <img
                className=" w-full h-96  rounded-lg"
                src={blog.photo}
                alt="" /></div>
             <div className="mt-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="mt-2 ">
                {renderContent(blog.description, showFullContent1)}
              </p>
             </div><div className="flex justify-between items-center mt-4">
              <button onClick={() => toggleContent(1)} className="text-blue-500 inline-block hover:underline">
                {showFullContent1 ? "Read Less"  : `Read More `} {<MdReadMore className="inline-block" />}
              </button>
             
            </div></>
        ))}
      </div>
    </div>
  );
};

export default TranslationPlatformBlog;
