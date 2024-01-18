import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Package></Package>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Root;
