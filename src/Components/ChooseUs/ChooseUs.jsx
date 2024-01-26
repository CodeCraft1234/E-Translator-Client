const ChooseUS = () => {
  const cards = [
    {
      iconClass: "fa-globe",
      title: "Precision and Expertise",
      description:
        "In the realm of language translation, precision is the cornerstone of our commitment. With a meticulous approach honed over a decade of dedicated service, our team of seasoned linguists ensures that every word is translated with unparalleled accuracy.",
    },
    {
      iconClass: "fa-anchor",
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with the latest translation technology. We employ state-of-the-art tools and methodologies to provide you with efficient, accurate, and timely translations, meeting the demands of a dynamic global landscape.",
    },
    {
      iconClass: "fa-hourglass-half",
      title: "24 x 7 User Support",
      description:
        "Your queries and concerns are our top priority. Enjoy round-the-clock customer support, ensuring you're never alone on your language journey. Our team is ready to assist you anytime, ensuring a smooth and hassle-free experience.",
    },
    {
      iconClass: "fa-database",
      title: "Business Growth",
      description:
        "Like climbing a mountain, true growth happens during the journey. Our translation services open doors to new markets, fostering global connections and expanding your business horizons.",
    },
    {
      iconClass: "fa-upload",
      title: "Market Strategies",
      description:
        "Break barriers with tailored market strategies. Our translations go beyond words; they adapt to the cultural nuances of your target audience, ensuring your message resonates and drives success.",
    },
    {
      iconClass: "fa-camera",
      title: "Cost-Effective Solutions",
      description:
        "Quality should never break the bank. Experience the perfect balance of affordability and excellence. We understand the value of your words, and we make every translation cost-effective without compromising on quality.",
    },
  ];

  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="section-head col-span-full text-center">
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
            <div key={index} className="col-span-1 sm:col-span-1 lg:col-span-1">
              <div className="item bg-gray-600 text-white text-center mr-1 ml-1 p-4 rounded-lg h-full hover:bg-[#5170ea] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <span className={`icon feature_box_col_${index + 1}`}>
                  <i className={`fa ${card.iconClass}`}></i>
                </span>
                <h6 className="text-xl font-semibold mb-2">{card.title}</h6>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
