import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css";
import Data3 from "./Animationfixed.json";
import { Animation } from "react-easy-animations";
import Typewriter from "react-text-writer";
import Lottie from 'react-lottie';
const Banner = () => {
  const defaultOption = {
    loop: true,
    autoplay: true, 
    animationData: Data3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div >

      <section className=" z-0 h-[700px] text-white pt-10  lg:mt-0 md:mt-10">
        <div className="container mt-10 flex lg:flex flex-col p-5  justify-center items-center  mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-col lg:justify-between">

      <section className=" z-0 h-[700px] text-white pt-10  lg:mt-10 md:mt-10">

          <div className="flex flex-col  justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">          
            <TypeAnimation
              sequence={[
                "Lets Decode the World of Word ",
                1000,
                "Lets Decode the World of Text ",
                1000,
                "Lets Decode the World of PDF",
                1000,
                "Lets Decode the World of voice",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3em", display: "inline-block" }}
              repeat={Infinity}
            />
            <p className="mt-6 mb-0 text-lg sm:mb-12 ">
              <Animation
                type="zoomIn"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
              ></Animation>
              <Typewriter
                text={[
                  "  Explore global communication without limits. Seamlessly translate languages, unlocking a world of words at your fingertips.",
                ]}
                speed={40}
                isLoop
                loopDelay={15000}
                ClassName="text-white mb-5 pb-5"
              />
              <br className="hidden md:inline lg:hidden" />
            </p>
            <div className="gap-5 mt-5">
             <button className="bg-indigo-950  border-b-2 lg:mr-5 md:mr-0 mr-0 rounded-lg">
            <Link to={'/translate'}> <a className="b" href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Lets Translate
              </a></Link>
             </button>
             <button className="bg-indigo-950 border-b-2 rounded-lg mt-5">
            <Link to={'/chat'}>
            <a className="b" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Live Support
              </a>
            </Link>
             </button>
            </div>
          </div>
          <div className="flex sm:p-10  items-center justify-center mt-8  pt-16 lg:mt-0 h-96 sm:h-30 lg:h-96 xl:h-112 2xl:h-128">
          <Lottie ClassName='h-[600px] w-[600px]' options={defaultOption}
              height={400}
              width={400}
              />
          </div>          
        </div>
      </section>     
    </div>
  );
};
export default Banner;

