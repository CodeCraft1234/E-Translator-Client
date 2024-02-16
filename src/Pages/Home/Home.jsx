import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Faq from "../../Components/Faq/Faq";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Package from "../../Components/Package/Package";
import Review from "../../Components/Review/Review";
import LiveChat from "../LiveChat/LiveChat";




const Home = () => {
  return (
    <div className="lg:px-28 bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]   text-white md:px-10 px-5">

       <Helmet>
        <title> E-Translator | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <LiveChat/>
      <Package></Package>
      <Review></Review>
      <ChooseUs></ChooseUs>
      <NewsLetter></NewsLetter>
      <Faq></Faq>
      
    
    </div>
  );
};

export default Home;
