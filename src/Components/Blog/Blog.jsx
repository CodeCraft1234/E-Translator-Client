import { useState } from "react";
import { Helmet } from "react-helmet-async";
import UseBlogs from "../../AxiosFetch/UseBlogs";

const TranslationPlatformBlog = () => {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [blogs]=UseBlogs()
  console.log(blogs)
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

  return (

    <div className="bg-base-300 p-4 mt-16 lg:px-28 md:px-10 px-5">
       <Helmet>
        <title> E-Translator | Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {
        blogs.map(blog=><div key={blog._id} className="dark:bg-gray-800 flex mt-10 justify-center items-center  dark:text-gray-100">
        <img className="w-60 h-full" src={blog.photo} alt="" />
    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
     
      <div className="flex items-center justify-between">
        <span className="text-sm dark:text-gray-400">{blog.date}</span>
        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"></a>
      </div>
      <div className="mt-3">
        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{blog.title}</a>
        <p className="mt-2">   {renderContent(
              `${blog.description}`,
              showFullContent1
            )}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button  onClick={() => toggleContent(1)}> <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400"> {showFullContent1 ? "Read Less" : "Read More"}</a></button>
        
        <div>
          <a rel="noopener noreferrer" href="#" className="flex items-center">
            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
            <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
          </a>
        </div>
      </div>
    </div>
  </div>)
      }


       {/* <div className=" p-8 rounded shadow-md bg-base-100 mb-4 border" >

        <h2 className="text-2xl font-bold mb-4">
          Revolutionizing Communication with Online Language Translation
        </h2>

        <p className="text-gray-500">
          {renderContent(
            "Language barriers can be significant obstacles in today's interconnected world. Whether you're a business expanding globally, a student studying abroad, or an individual connecting with people from diverse backgrounds, effective communication is key. In this blog post, we explore the transformative power of online language translation platforms in breaking down language barriers and fostering seamless communication.",
            showFullContent1
          )}
        </p>

        <div className="mt-4">
          <button
            className="btn  btn-outline border-0 btn-sm border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white"
            onClick={() => toggleContent(1)}
          >
            {showFullContent1 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>  */}
    </div>
  );
};

export default TranslationPlatformBlog;
