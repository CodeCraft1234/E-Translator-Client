import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1280px] mx-auto">
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
      </div>
    </div>
  );
};

export default Root;

