
import "../Pages/Home/Home.css"
const Card = () => {


    const images=['https://i.ibb.co/KX1Whj5/Flag-of-the-United-Kingdom-svg.webp',

   'https://i.ibb.co/zRfFspr/translate-english-to-french-spanish-and-arabic.jpg' ,

    'https://i.ibb.co/SKRqPKN/set-of-online-languages-learning-language-courses-language-classes-banner-templates-for-web-and-mobi.jpg']

   
    return (
        <div className="flex justify-center items-center h-screen">
        <img
          src="https://i.ibb.co/KX1Whj5/Flag-of-the-United-Kingdom-svg.webp
         g" // Replace with your image URL
          alt="Rotating Image"
          className="rotate-animation h-20 w-20 rounded-full"
        />
      </div>
    );
};

export default Card;