import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Package from "./Components/Package/Package";
import Review from "./Components/Review/Review";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Package></Package>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Root;