import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaClock,
  FaCode,
  FaComment,
  FaDesktop,
  FaDirections,
  FaGlobe,
  FaLock,
  FaMicrophone,
  FaStar,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaGlobe className="h-16 w-16 mb-2 " />,
      name: "Multi-Language Support",
      description:
        "Ensure that your website supports a wide range of languages for both input and output translations.",
    },
    {
      icon: <FaClock className="h-16 w-16 mb-2"></FaClock>,
      name: "Real Time Translation",
      description:
        "Provide real-time translation results as users type to enhance the user experience..",
    },
    {
      icon: <FaMicrophone className="h-16 w-16 mb-2"></FaMicrophone>,
      name: "Speech-to-Text and Text-to-Speech",
      description:
        "Integrate speech-to-text and text-to-speech functionalities for users who prefer audio interaction",
    },
    {
      icon: <FaCamera className="h-16 w-16 mb-2"></FaCamera>,
      name: "Camera Translation",
      description:
        "Translate text using your devices camera for quick and easy translations",
    },
    {
      icon: <FaLock className="h-16 w-16 mb-2"></FaLock>,
      name: "Privacy and Security",
      description:
        "Implement secure data handling practices, especially when dealing with sensitive or personal information",
    },
    {
      icon: <FaCode className="h-16 w-16 mb-2"></FaCode>,
      name: "API Integration",
      description:
        "Offer an API for developers who want to integrate your translation service into their applications",
    },
    {
      icon: <FaComment className="h-16 w-16 mb-2"></FaComment>,
      name: "Collaborative Translation with Chat Tool",
      description:
        "Enable users to work together on translations in real-time and to discuss translation choices, ask questions, or provide feedback to each other",
    },
    {
      icon: <FaDesktop className="h-16 w-16 mb-2"></FaDesktop>,
      name: " User-Friendly Interface",
      description:
        "Design an intuitive and easy-to-use interface with clear instructions for users to input and receive translations",
    },
    {
      icon: <FaStar className="h-16 w-16 mb-2"></FaStar>,
      name: "Subscription Plans or Premium Features",
      description:
        "Consider offering subscription plans or premium features for users who require advanced functionalities or a higher volume of translations",
    },
    {
      icon: <FaDirections className="h-16 w-16 mb-2"></FaDirections>,
      name: "Translation Direction",
      description:
        "Provide real-time translation results as users type to enhance the user experience.",
    },
  ];
  const featureVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="lg:px-24 md:px-8 px-5 ">
      <h3 className="mt-20 text-center text-5xl font-bold py-10 ">
        Our features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-10 mx-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-80 p-6 rounded-lg shadow-2xl bg-white"
            variants={featureVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0 }}
            whileHover={{
              scale: 1.2,
              background:
                hoveredIndex === index
                  ? "linear-gradient(to right, #006bcb, #1b71d2)"
                  : "white",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <motion.h2
                style={{ color: hoveredIndex === index ? "white" : "black" }}
              >
                {feature.icon}
              </motion.h2>
            </div>
            <div className="">
              <motion.h2
                className="mb-2 text-xl font-semibold"
                style={{ color: hoveredIndex === index ? "white" : "black" }}
              >
                {feature.name}
              </motion.h2>
              <motion.p
                className="text-base dark:text-gray-400"
                style={{ color: hoveredIndex === index ? "white" : "black" }}
              >
                {feature.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
