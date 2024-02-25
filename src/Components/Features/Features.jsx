import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/6435775.jpg";
import img2 from "../../assets/download (3).jpg";
import img3 from "../../assets/4209048.jpg";
import img4 from "../../assets/photo-tan.webp";
import img5 from "../../assets/istockphoto-1061357610-612x612.jpg";
import img6 from "../../assets/api-application-programming-interface-software-600nw-2295572201.webp";
import img7 from "../../assets/download (2).jpg";
import img8 from "../../assets/istockphoto-1281150061-612x612.jpg";
import img9 from "../../assets/pricing.jpg";
import img10 from "../../assets/website translation.jpg";
import img11 from '../../assets/pdf_to_text.jpg'
import img12 from '../../assets/images 12.png'
import { Helmet } from "react-helmet-async";
import BG from "./BG";

const Features = () => {
  const features = [
    {
      image: img1,
      name: "Multi-Language Support",
      description: `Ensure that your website supports a wide range of languages for both input and output translations. This feature aims to make your platform accessible to users worldwide, facilitating effective communication in their preferred languages.`,
    },
    {
      image: img2,
      name: "Real Time Translation",
      description: `Provide users with instant translation results as they type, enhancing the overall user experience. This real-time feature ensures quick and dynamic translation feedback, making the communication process smoother and more efficient.`,
    },
    {
      image: img3,
      name: "Speech-to-Text and Text-to-Speech",
      description: `Integrate advanced functionalities for speech-to-text and text-to-speech capabilities. This feature accommodates users who prefer audio interactions, offering a versatile and inclusive approach to translation.`,
    },
    {
      image: img4,
      name: "Image Translation",
      description: `Enable users to translate text using their device's camera, ensuring quick and easy translations from images. This feature leverages visual content for seamless language interpretation, expanding the scope of translation beyond text inputs.`,
    },
    {
      image: img5,
      name: "Privacy and Security",
      description: `Implement robust data handling practices, especially when dealing with sensitive or personal information. This feature emphasizes the importance of user privacy and data security, instilling trust in users who rely on your translation service.`,
    },
    {
      image: img6,
      name: "API Integration",
      description: `Offer an Application Programming Interface (API) for developers, allowing them to seamlessly integrate your translation service into their applications. This feature extends the usability of your service, fostering collaboration with third-party developers.`,
    },
    {
      image: img7,
      name: "Collaborative Translation with Chat Tool",
      description: `Enable users to collaboratively work on translations in real-time, providing a chat tool for discussions. This feature promotes community engagement and facilitates a collective approach to refining translations through discussions, questions, and feedback.`,
    },
    {
      image: img8,
      name: "User-Friendly Interface",
      description: `Design an intuitive and user-friendly interface with clear instructions for users to input and receive translations. This feature focuses on enhancing the overall user experience by providing an easy-to-use platform with transparent guidance.`,
    },
    {
      image: img9,
      name: "Subscription Plans or Premium Features",
      description: `Consider offering subscription plans or premium features for users requiring advanced functionalities or a higher volume of translations. This feature caters to diverse user needs, offering customized plans for those seeking additional translation capabilities.`,
    },
    {
      image: img10,
      name: " Website Translation",
      description: `Implementing real-time translation on your website enables users to receive instant translation feedback as they type, fostering a seamless and responsive translation experience. This feature enhances user engagement and accessibility by breaking down language barriers in real-time.`,
    },
    {

      image: img11,
      name: "PDF to Text Translator",
      description:
        "Effortlessly convert PDF documents to editable text with our intuitive PDF to Text Translator. Unlock the content within PDFs, making it easily accessible and editable in just a few clicks.",
    },
    {
      image:img12,
      name:' Contextual translation suggestions',
      description:
      ' Contextual translation suggestions provide relevant translations based on the context of the text being inputted. These suggestions help users select the most appropriate translation for their specific content, improving accuracy and comprehension. By analyzing the surrounding words and phrases, contextual suggestions offer nuanced translations tailored to the users needs, enhancing the overall translation experience.'

    }
  ];

  const featureVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpanded = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="lg:px-24 md:px-8 mt-10 text-white bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]  px-5  border-b-2">
      <Helmet>
        <title> E-Translator | Features</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <BG></BG>


      <h3 className="pt-20 text-center text-5xl font-bold py-10 ">

        Our features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-16 mx-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="max-w-xs rounded-xl shadow-2xl border"
            variants={featureVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={feature.image}
              alt=""
              className="border  object-center w-full rounded-t-md h-44 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8 ">
              <div className="space-y-2">
                <h2 className="text-2xl text-white font-semibold tracking">
                  {feature.name}
                </h2>
                <p className="dark:text-gray-200 text-white">
                  {expandedIndex === index
                    ? feature.description
                    : `${feature.description.slice(0, 100)}${
                        feature.description.length > 100 ? "..." : ""
                      } `}
                  {feature.description.length > 100 && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleToggleExpanded(index)}
                    >
                      {expandedIndex === index ? "Show Less" : "Show More"}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
