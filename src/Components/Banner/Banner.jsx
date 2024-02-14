// import { Link } from "react-router-dom";
// import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";
// import BannerBg from "./BannerBg";


// const Banner = () => {
//   return (
//     <div className="banner-container relative">
      
//       <section className=" mt-10 lg:mt-0 md:mt-10">
//         <div className="container flex flex-col  justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between">
//           <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
//             <h1 className="lg:text-5xl md:text-3xl text-3xl font-extrabold sm:text-6xl ">
//               Decode
//               <span className=""> the World of Words </span>
//             </h1>
//             <p className="mt-6 mb-8 text-lg sm:mb-12 ">
//               Explore global communication without limits.
//               <br className="hidden md:inline lg:hidden" />
//               Seamlessly translate languages, unlocking a world of words at your
//               fingertips.
//             </p>
//             <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//               <Link to={"/translate"}>
//                 <button className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
//                   Lets Translate
//                 </button>
//               </Link>
//               <button className="btn  btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white">
//                 Explore Us
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
//             <img
//               src={img1}
//               alt=""
//               className="object-contain h-72 sm:h-80 lg:h-[420px] w-[400px] xl:h-112 2xl:h-128"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Banner;

// Banner.js




import { Link } from "react-router-dom";
import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";
import "./Banner.css"; 


import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   console.log(container);
  // }, []);
  useEffect(() => {
    // Define an array of words or phrases
    const words = [
      'Hello',
      "প্রোগ্রামিং হিরো",
      'বাংলা', 
      'Bonjour',
      'Hola',
      'Ciao',
      'こんにちは',
      '안녕하세요',
      'Привет', // Russian: "Hello"
      'مرحبا', // Arabic: "Hello"
      'नमस्ते', // Hindi: "Hello"
      'გამარჯობა', // Georgian: "Hello"
      'CodeCrafters'
  
    ];
    
  
    

    // Function to generate and animate floating words
    const generateFloatingWords = () => {
      const banner = document.querySelector('.banner-container');

      words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('floating-word');
        wordElement.textContent = word;
        banner.appendChild(wordElement);

        // Randomize starting position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;

        // Randomize animation duration
        const duration = (Math.random() * 5 + 5) + 's';
        wordElement.style.animationDuration = duration;

        // Randomize animation delay
        const delay = (Math.random() * 3) + 's';
        wordElement.style.animationDelay = delay;

        // Randomize animation direction
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        wordElement.style.animationDirection = direction;

        // Remove word after animation ends
        wordElement.addEventListener('animationend', () => {
          banner.removeChild(wordElement);
        });
      });
    };

    generateFloatingWords();

    // Set interval to generate new words periodically
    const interval = setInterval(generateFloatingWords, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); 


  return (
    <div className="banner-container relative">
      <div className="particles-background">
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#5170EA",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        /> */}
        {/* <BannerBg></BannerBg> */}
      </div>
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between relative">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-extrabold sm:text-6xl ">
            Decode
            <span className=""> the World of Words </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 ">
            Explore global communication without limits.
            <br className="hidden md:inline lg:hidden" />
            Seamlessly translate languages, unlocking a world of words at your
            fingertips.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to={"/translate"}>
              <button className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
                Lets Translate
              </button>
            </Link>
            <button className="btn  btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white">
              Explore Us
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img1}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-[420px] w-[400px] xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
