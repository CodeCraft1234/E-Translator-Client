import { useState } from "react";
import { motion } from "framer-motion";

import { Helmet } from "react-helmet-async";
import { FaFacebook,  FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const MeetTeam = () => {
    const Teams = [
        {
           
            name: "Dibyendu Pramanik",
            designation: "CodeCraft Maestro",
            description:
            "Steering CodeCraft with unmatched leadership and expertise."
        },
        {
            
            name: "Benjir Sultana",
            designation: "Coding Sorceress",
            description:
            "Infusing a female perspective and coding wizardry into the team."
        },
        {
            
            name: "Shakil Ahmed",
            designation: "Algorithm Alchemist",
            description:
            "Mastering complex algorithms with a magical analytical mindset."
        },
        {
            
            name: "Robiul Islam",
            designation: "Innovation Architect",
            description:
            "Architecting innovative solutions that redefine problem-solving."
        },
        {
            
            name: "Md. Assaduzzaman",
            designation: "CodeCraft Artisan",
            description:
            "Crafting software masterpieces with unparalleled programming prowess."
        },
        {
            
            name: "Sourav Datta",
            designation: "Creative Code Maverick",
            description:
            "Unleashing creativity to revolutionize coding for effective solutions."
        }
    
        
        
    ];
    const featureVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -10 },
        visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="lg:px-24 md:px-8 px-5 ">
            <Helmet>
                <title> E-Translator | Meet Our Team</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h3 className="mt-20 text-center text-5xl font-bold py-10 text-blue-500">
                Our Amazing People
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-10 mx-10">
                {Teams.map((Team, index) => (
                    <motion.div
                        key={index}
                        className="w-80 p-6 rounded-lg  bg-white"
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
                        <div className="flex justify-center">
                            <motion.h2
                                style={{ color: hoveredIndex === index ? "white" : "black" }}
                            >
                                <div className="avatar ">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </motion.h2>
                        </div>
                        <div className="">
                            <motion.h2
                                className="mb-2 mt-2 text-xl font-semibold flex justify-center "
                                style={{ color: hoveredIndex === index ? "white" : "black" }}
                            >
                                {Team.name}
                            </motion.h2>
                            <motion.p
                                className="text-base dark:text-gray-400 flex justify-center text-center"
                                style={{ color: hoveredIndex === index ? "white" : "black" }}
                            >
                                {Team.designation}
                            </motion.p>
                            <motion.p
                                className="text-base mt-6 dark:text-gray-400 flex justify-center text-center italic"
                                style={{ color: hoveredIndex === index ? "white" : "black" }}
                            >
                                {Team.description}
                            </motion.p>
                            <motion.p
                                className="text-base mt-6 dark:text-gray-400 flex justify-center text-center italic"
                                style={{ color: hoveredIndex === index ? "white" : "black" }}
                            >
                                <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:scale-150"></FaTwitter>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://youtube.com/"
              target="_blank"
            >
              <FaYoutube className="text-2xl hover:scale-150"></FaYoutube>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://facebook.com/"
              target="_blank"
            >
              <FaFacebook className="text-2xl hover:scale-150"></FaFacebook>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagramSquare className="text-2xl hover:scale-150"></FaInstagramSquare>
            </a>
          </div>
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MeetTeam;
