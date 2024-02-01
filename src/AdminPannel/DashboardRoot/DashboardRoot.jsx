import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardRoot = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div className="flex relative">
        <div className=" lg:w-[15%] grid lg:grid-cols-[140px] top-0 gap-8 lg:gap-8 bg-blue-400">
          <Dashboard
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          ></Dashboard>
        </div>
        <div className="h-32 rounded-lg w-full lg:w-[85%] lg:col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 text-right lg:hidden "
        onClick={()=>setShowSidebar(!showSidebar)}
      >
        <button className="bg-fuchsia-600 p-2">
        {showSidebar ? <FaTimes/> : <FaBars/>}
        </button>
      </div>

    </div>
  );
};

export default DashboardRoot;

/* import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";


const DashboardRoot = () => {
    return(
        <div>
            <div>
                <Dashboard/>
                <Outlet/>
            </div>
        </div>
    )}
export default DashboardRoot; */
