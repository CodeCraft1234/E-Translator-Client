




import { Link } from "react-router-dom";
import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";

import { TypeAnimation } from "react-type-animation";
import "./Banner.css"
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

    <div >
      <section className=" mt-24 h-[650px] text-white bg-[#031321]  lg:mt-0 md:mt-10">
        <div className="container  flex flex-col p-20  justify-center items-center  mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
            {/* <h1 className="lg:text-5xl md:text-3xl text-3xl font-extrabold sm:text-6xl ">
              Decode
              <span className=""> the World of Words </span>
            </h1> */}
             <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Lets Decode the World of Word ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Lets Decode the World of Language ',
        1000,
        'Lets Decode the World of Text ',
        1000,
        'Lets Decode the World of PDF',
        1000,
        'Lets Decode the World of Sentence',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block', }}
      repeat={Infinity}
    />
            <p className="mt-6 mb-8 text-lg sm:mb-12 ">
              Explore global communication without limits.
              <br className="hidden md:inline lg:hidden" />
              Seamlessly translate languages, unlocking a world of words at your
              fingertips.
            </p>

            <div className="gap-5">
             <button className="bg-indigo-950  border-b-2 mr-5 rounded-lg">
            <Link to={'/translate'}> <a className="b" href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Lets Translate
              </a></Link>
             </button>
             <button className="bg-indigo-950 border-b-2 rounded-lg">
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
            {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to={"/translate"}>
                <button className="btn  btn-outline border-0 border-[##2b3440] hover:bg-[#2b3440] hover:border-[#2b3440] border-b-4 hover:text-white">
                  Lets Translate
                </button>
              </Link>
              <button className="btn  btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white">
                Explore Us
              </button>
            </div> */}
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img1}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[420px] w-[400px] xl:h-112 2xl:h-128"
            />

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
