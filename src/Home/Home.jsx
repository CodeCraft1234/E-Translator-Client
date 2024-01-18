import Banner from "../Components/Banner/Banner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Package from "../Components/Package/Package";
import Review from "../Components/Review/Review";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Package></Package>
      <Review></Review>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
