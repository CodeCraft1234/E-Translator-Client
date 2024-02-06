import { useState } from "react";
import { Helmet } from "react-helmet-async";
import UseBlogs from "../../AxiosFetch/UseBlogs";

const TranslationPlatformBlog = () => {
  const [blogs] = UseBlogs();
  const [showFullContent, setShowFullContent] = useState(Array(blogs.length).fill(false));

  const toggleContent = (index) => {
    const newShowFullContent = [...showFullContent];
    newShowFullContent[index] = !newShowFullContent[index];
    setShowFullContent(newShowFullContent);
  };

  const renderContent = (content, index) => {
    const maxLength = 150;
    const currentShowFullContent = showFullContent[index];

    if (currentShowFullContent) {
      return content;
    }

    return content.length > maxLength ? content.substring(0, maxLength) + "..." : content;
  };

  return (
    <div className="bg-base-300 p-4 mt-16 lg:px-28 md:px-10 px-5">
      <Helmet>
        <title> E-Translator | Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {blogs.map((blog, index) => (
        <div
          key={blog._id}
          className="dark:bg-gray-800 flex mt-10 justify-center items-center dark:text-gray-100"
        >
          <img className="w-60 h-full" src={blog.photo} alt="" />
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">{blog.date}</span>
              <a
                rel="noopener noreferrer"
                href="#-1"
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
                {renderContent(`${blog.description}`, index)}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button onClick={() => toggleContent(index)}>
                <a
                  rel="noopener noreferrer"
                  href="#-2"
                  className="btn btn-outline border-0 border-[#0165c3] hover:bg-[#0165c3] hover:border-[#0165c3] border-b-4 hover:text-white btn-sm"
                >
                  {showFullContent[index] ? "Read Less" : "Read More"}
                </a>
              </button>

              <div>
                <a
                  rel="noopener noreferrer"
                  href="#-3"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TranslationPlatformBlog;
