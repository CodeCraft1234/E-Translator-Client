import { useState } from "react";
import { Helmet } from "react-helmet-async";

const TranslationPlatformBlog = () => {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);

  const toggleContent = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowFullContent1(!showFullContent1);
        break;
      case 2:
        setShowFullContent2(!showFullContent2);
        break;
      case 3:
        setShowFullContent3(!showFullContent3);
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

    <div className="bg-base-300 p-4 mt-16 lg:px-28 md:px-10 px-5">
      <div className=" p-8 rounded shadow-md bg-base-100 mb-4 border">

    <div className="bg-base-300 p-4 mt-16 lg:px-28 md:px-10 px-5" >
      <Helmet>
        <title> E-Translator | Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className=" p-8 rounded shadow-md bg-base-100 mb-4 border" >

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
      </div>

      <div className="p-8 rounded shadow-md bg-base-100 mb-4 border">
        <h2 className="text-2xl font-bold mb-4">
          Breaking Down Barriers – Features of Advanced Translation Platforms
        </h2>

        <p className="text-gray-500">
          {renderContent(
            "Modern online language translation platforms offer a range of features designed to enhance user experience and accuracy. From machine learning algorithms to neural machine translation, these platforms continuously evolve to provide high-quality translations across various languages.",
            showFullContent2
          )}
        </p>

        <div className="mt-4">
          <button
            className="btn  btn-outline border-0 btn-sm border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white"
            onClick={() => toggleContent(2)}
          >
            {showFullContent2 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      <div className="p-8 rounded shadow-md bg-base-100 mb-4 border">
        <h2 className="text-2xl font-bold mb-4">
          The Future of Communication – Embracing Multilingualism
        </h2>

        <p className="text-gray-500">
          {renderContent(
            "As we look to the future, the importance of multilingualism in communication cannot be overstated. Online language translation platforms play a pivotal role in fostering a global community where language is no longer a barrier. Businesses can expand their reach, students can access education in diverse languages, and individuals can connect on a personal level regardless of linguistic differences.",
            showFullContent3
          )}
        </p>

        <div className="mt-4">
          <button
            className="btn btn-outline border-0 btn-sm border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white"
            onClick={() => toggleContent(3)}
          >
            {showFullContent3 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationPlatformBlog;
