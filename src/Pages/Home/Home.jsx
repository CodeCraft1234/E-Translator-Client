import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Faq from "../../Components/Faq/Faq";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Package from "../../Components/Package/Package";
import Review from "../../Components/Review/Review";
import Card from "../../Components/Card";


const Home = () => {
  return (
    <div className="lg:px-28 bg-[#031321] text-white md:px-10 px-5">
       <Helmet>
        <title> E-Translator | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Package></Package>
      <Review></Review>
      <ChooseUs></ChooseUs>
      <NewsLetter></NewsLetter>
      <Faq></Faq>
      <Card></Card>
    </div>
  );
};

export default Home;
