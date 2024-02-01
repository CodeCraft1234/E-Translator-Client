import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
import { FaBars, FaHome, FaTimes, FaUsers } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

const Dashboard = ({showSidebar, setShowSidebar}) => {
  const { user } = useContext(AuthContext);
  // const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

 /*  const handleClose = () => {
    setShowSidebar(false);
  }; */

  return (
    <div className="relative">
      {/* {!showSidebar && (
        <div
          className="w-12 h-12  text-white cursor-pointer md:hidden flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>
      )} */}

      <div
        className={` min-h-screen text-white  ${
          showSidebar ? "block" : "hidden"
        } md:block`}
      >
       {/*  <div className="absolute right-0 top-0 text-right lg:hidden" onClick={handleClose}>
                <button className="bg-fuchsia-600 p-2">
                  <FaTimes />
                </button>
              </div> */}
 
        <ul className="menu">
          {user && (
            <div className="w-[250px]">
             {/*  <div className="text-right lg:hidden" onClick={handleClose}>
                <button className="bg-fuchsia-600 p-2">
                  <FaTimes />
                </button>
              </div>
 */}
              <div className="avatar bg-black">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  <h1>{user.displayName}</h1>
                </div>
              </div>
              <li className=" ">
                <Link
                  to="/dashboard/adminHome"
                  className="flex items-center py-2"
                >
                  <FaHome className="mr-2" />
                  Admin Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/addblogs"
                  className="flex items-center py-2"
                >
                  <FaBookBookmark className="mr-2" />
                  Add Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/alluser"
                  className="flex items-center py-2"
                >
                  <FaUsers className="mr-2" />
                  All Users
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
