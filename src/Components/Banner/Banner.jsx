import { Link } from "react-router-dom";
import img1 from "../../assets/415877263_437231245391700_6340538220268059695_n.png";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css";

// import { useEffect } from "react";
import { Animation, Typer } from "react-easy-animations";
import Typewriter from "react-text-writer";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const words = [
      "Hello",
      "প্রোগ্রামিং হিরো",
      "বাংলা",
      "Bonjour",
      "Hola",
      "Ciao",
      "こんにちは",
      "안녕하세요",
      "Привет",
      "مرحبا",
      "नमस्ते",
      "გამარჯობა",
      "CodeCrafters",
    ];

    const generateFloatingWords = () => {
      const banner = document.querySelector(".banner-container");
      if (!banner) return;

      words.forEach((word) => {
        const wordElement = document.createElement("div");
        wordElement.classList.add("floating-word");
        wordElement.textContent = word;
        banner.appendChild(wordElement);
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;

        const duration = Math.random() * 5 + 5 + "s";
        wordElement.style.animationDuration = duration;

        const delay = Math.random() * 3 + "s";
        wordElement.style.animationDelay = delay;

        const direction = Math.random() > 0.5 ? "normal" : "reverse";
        wordElement.style.animationDirection = direction;

        wordElement.addEventListener("animationend", () => {
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
      <section className="  h-[650px] text-white   lg:mt-0 md:mt-10">
        <div className="container mt-10 flex flex-col p-5  justify-center items-center  mx-auto sm:py-12 lg:py-24 lg:flex-row md:flex-row lg:justify-between">

          <div className="flex flex-col z-50 justify-center text-center rounded-sm lg:max-w-md md:max-w-xs xl:max-w-lg lg:text-left">
           
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Lets Decode the World of Word ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Lets Decode the World of Language ",
                1000,
                "Lets Decode the World of Text ",
                1000,
                "Lets Decode the World of PDF",
                1000,
                "Lets Decode the World of Sentence",
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
                duration="1000ms"
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
                loopDelay={4000}
                ClassName="text-white"
              />

              <br className="hidden md:inline lg:hidden" />
            </p>

            <div className="gap-5">
              <button className="bg-indigo-950  border-b-2 mr-5 rounded-lg">
                <Link to={"/translate"}>
                  {" "}
                  <a className="b rounded-lg" href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Lets Translate
                  </a>
                </Link>
              </button>
              <button className="bg-indigo-950 border-b-2 rounded-lg">
                <Link to={"/chat"}>
                  <a className="b rounded-lg">
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
        {/* <svg className="absolute w-full mx-auto -mt-52" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a2d9ff" fill-opacity="1" d="M0,128L18.5,128C36.9,128,74,128,111,138.7C147.7,149,185,171,222,165.3C258.5,160,295,128,332,122.7C369.2,117,406,139,443,170.7C480,203,517,245,554,256C590.8,267,628,245,665,213.3C701.5,181,738,139,775,101.3C812.3,64,849,32,886,48C923.1,64,960,128,997,149.3C1033.8,171,1071,149,1108,165.3C1144.6,181,1182,235,1218,240C1255.4,245,1292,203,1329,181.3C1366.2,160,1403,160,1422,160L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
</svg> */}
      </section>
      
    </div>
  );
};

export default Banner;

