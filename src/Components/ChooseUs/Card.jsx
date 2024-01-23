const Card = ({ icon, title, description }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4">
      <div className="bg-white hover:bg-[#f91942] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <span className={`text-5xl text-${icon}-500`}></span>
        <h2 className="text-xl font-medium text-gray-900 mt-4 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
