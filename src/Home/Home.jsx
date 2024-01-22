import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Package from "../Components/Package/Package";
import Review from "../Components/Review/Review";


const Home = () => {
  return (
    <div className="lg:px-28 md:px-10 px-5">
      <Banner></Banner>
      <Package></Package>
      <Review></Review>
      <NewsLetter></NewsLetter>
      <Faq></Faq>
    </div>
  );
};

export default Home;
