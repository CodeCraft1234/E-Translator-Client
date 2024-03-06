import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
const Root = () => {
  const location=useLocation()
  const noheaderfooter=location.pathname.includes('login')
  
  return (
    <div className="bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]">
          <div >
           { noheaderfooter || <Navbar></Navbar>}
           <div className="min-h-screen mt-10">
           <Outlet></Outlet>
           </div>
            { noheaderfooter || <Footer></Footer>}
        </div>
      <Toaster />
    </div>
  );
};

export default Root;