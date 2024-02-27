import AOS from "aos";
import "aos/dist/aos.css";
import { Tilt } from "react-tilt";
AOS.init();
const ChooseUS = () => {
  const cards = [
    {
      id: 1,
      iconClass: 'https://i.ibb.co/DRDRZxg/precision-modeling-9495577-7781126.webp',
      title: "Precision and Expertise",
      description:
        "In the realm of language translation, precision is the cornerstone of our commitment. With a meticulous approach honed over a decade of dedicated service, our team of seasoned linguists ensures that every word is translated with unparalleled accuracy.",
    },
    {
      id: 2,
      iconClass: 'https://i.ibb.co/Vv53R5f/7969841.webp',
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with the latest translation technology. We employ state-of-the-art tools and methodologies to provide you with efficient, accurate, and timely translations, meeting the demands of a dynamic global landscape.",
    },
    {
      id: 3,
      iconClass: 'https://i.ibb.co/9v8DbX2/support-operator-with-headphones-illustration-for-business-idea-concept-isolated-on-colorful-backgro.webp',
      title: "24 x 7 User Support",
      description:
        "Your queries and concerns are our top priority. Enjoy round-the-clock customer support, ensuring you're never alone on your language journey. Our team is ready to assist you anytime, ensuring a smooth and hassle-free experience.",
    },
    {
      id: 4,
      iconClass: 'https://i.ibb.co/JrqSZ9x/business-growth-3d-icon-png.webp ',
      title: "Business Growth",
      description:
        "Like climbing a mountain, true growth happens during the journey. Our translation services open doors to new markets, fostering global connections and expanding your business horizons.",
    },
    {
      id: 5,
      iconClass: 'https://i.ibb.co/xCk9h4L/3d-illustration-of-a-marketing-strategy-magnet-png.webp',
      title: "Market Strategies",
      description:
        "Break barriers with tailored market strategies. Our translations go beyond words; they adapt to the cultural nuances of your target audience, ensuring your message resonates and drives success.",
    },
    {
      id: 6,
      iconClass: 'https://i.ibb.co/1Tvgpqk/solution-8327146-6648997.webp',
      title: "Cost-Effective Solutions",
      description:
        "Quality should never break the bank. Experience the perfect balance of affordability and excellence. We understand the value of your words, and we make every translation cost-effective.",
    },
  ];

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="container mx-auto pb-5 mt-24">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        <div
          className="section-head col-span-full text-center mb-10"
          data-aos="zoom-in"
        >
          <h4 className="text-3xl font-bold mb-4">
            <span>Why Choose</span> Us?
          </h4>
          <p>
            Benefit from our unparalleled experience in delivering precise and
            culturally nuanced translations. Our team of expert linguists
            ensures that your message retains its intended meaning across
            languages.
          </p>
        </div>

        {cards.map((card, index) => (
          <Tilt key={index} options={defaultOptions} className="col-span-1">
            <div className="item m-4 border-2 shadow-md text-center p-4 rounded-lg hover:bg-[#006bcb] hover:text-white transition duration-500 transform hover:-translate-y-1 hover:scale-105" data-aos="zoom-in">
              <div className="gap-3">
                <img className="h-28 w-28 mx-auto" src={card.iconClass} alt="" />
                <h6 className="text-xl font-semibold mb-2">{card.title}</h6>
              </div>
              <p className="text-sm">{card.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ChooseUS;
