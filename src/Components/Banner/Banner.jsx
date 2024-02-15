import { Link } from "react-router-dom";
import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css"

// import { useEffect } from "react";
import { Animation, Typer } from 'react-easy-animations'
import Typewriter from 'react-text-writer'
import { useEffect } from "react";


const Banner = () => {
  useEffect(() => {
    
    const words = [
      'Hello',
      "প্রোগ্রামিং হিরো",
      'বাংলা', 
      'Bonjour',
      'Hola',
      'Ciao',
      'こんにちは',
      '안녕하세요',
      'Привет', 
      'مرحبا', 
      'नमस्ते', 
      'გამარჯობა', 
      'CodeCrafters'
  
    ];
    
    const generateFloatingWords = () => {
      const banner = document.querySelector('.banner-container');
      if (!banner) return;

      words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('floating-word');
        wordElement.textContent = word;
        banner.appendChild(wordElement);
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;

        const duration = (Math.random() * 5 + 5) + 's';
        wordElement.style.animationDuration = duration;

      
        const delay = (Math.random() * 3) + 's';
        wordElement.style.animationDelay = delay;

    
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        wordElement.style.animationDirection = direction;

        
        wordElement.addEventListener('animationend', () => {
          banner.removeChild(wordElement);
        });
      });
    };

    generateFloatingWords();
    const interval = setInterval(generateFloatingWords, 10000);
    return () => clearInterval(interval);
  }, []); 
  

  return (
    <div >
      <section className=" mt-24 h-[650px] text-white   lg:mt-0 md:mt-10">
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
            <Animation
  type="zoomIn"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
  
</Animation>
 <Typewriter
            text={
                [
                "  Explore global communication without limits. Seamlessly translate languages, unlocking a world of words at your fingertips.",
                ]
            }
            speed={40}
            isLoop
            loopDelay={4000}
            ClassName="text-white"
        />
             
              <br className="hidden md:inline lg:hidden" />
           

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
           
          </div>
          <div className="flex  items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img1}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[420px] w-[400px] xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
// import { Link } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";
// import "./Banner.css";
// import { useEffect } from "react";
// import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";

// const Banner = () => {
//   useEffect(() => {
//     const words = [
//       'Hello',
//       "প্রোগ্রামিং হিরো",
//       'বাংলা', 
//       'Bonjour',
//       'Hola',
//       'Ciao',
//       'こんにちは',
//       '안녕하세요',
//       'Привет', 
//       'مرحبا', 
//       'नमस्ते', 
//       'გამარჯობა', 
//       'CodeCrafters'
//     ];
    
//     const generateFloatingWords = () => {
//       const background = document.querySelector('.background-container');
//       if (!background) return;

//       words.forEach(word => {
//         const wordElement = document.createElement('div');
//         wordElement.classList.add('floating-word');
//         wordElement.textContent = word;
//         background.appendChild(wordElement);
//         const x = Math.random() * window.innerWidth;
//         const y = Math.random() * window.innerHeight;
//         wordElement.style.left = `${x}px`;
//         wordElement.style.top = `${y}px`;

//         const duration = (Math.random() * 5 + 5) + 's';
//         wordElement.style.animationDuration = duration;

//         const delay = (Math.random() * 3) + 's';
//         wordElement.style.animationDelay = delay;

//         const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
//         wordElement.style.animationDirection = direction;

//         wordElement.addEventListener('animationend', () => {
//           background.removeChild(wordElement);
//         });
//       });
//     };

//     generateFloatingWords();
//     const interval = setInterval(generateFloatingWords, 10000);
//     return () => clearInterval(interval);
//   }, []); 

//   return (
//     <div>
//       <section className="mt-24 h-[650px] text-white bg-[#1e1b4b] lg:mt-0 md:mt-10 relative">
//         <div className="background-container absolute inset-0 pointer-events-none z-0"></div>
//         <div className="container flex flex-col p-20 justify-center items-center mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between relative z-10">
//           <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
//             <h1 className="text-transparent z-10 relative">
//               <TypeAnimation 
//                 sequence={[
//                   'Lets Decode the World of Word ',
//                   1000,
//                   'Lets Decode the World of Language ',
//                   1000,
//                   'Lets Decode the World of Text ',
//                   1000,
//                   'Lets Decode the World of PDF',
//                   1000,
//                   'Lets Decode the World of Sentence',
//                   1000
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 style={{ fontSize: '3em', display: 'inline-block' }}
//                 repeat={Infinity}
//               />
//             </h1>
//             <p className="mt-6 mb-8 text-lg sm:mb-12">
//               Explore global communication without limits.
//               <br className="hidden md:inline lg:hidden" />
//               Seamlessly translate languages, unlocking a world of words at your fingertips.
//             </p>

//             <div className="gap-5">
//               <button className="bg-indigo-950 border-b-2 mr-5 rounded-lg">
//                 <Link to={'/translate'}>
//                   <span>Lets Translate</span>
//                 </Link>
//               </button>
//               <button className="bg-indigo-950 border-b-2 rounded-lg">
//                 <Link to={'/chat'}>
//                   <span>Live Support</span>
//                 </Link>
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
