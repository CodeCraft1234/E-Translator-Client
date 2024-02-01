import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
import { FaHome, FaUsers } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

const Dashboard = ({ showSidebar }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="relative">
      <div
        className={` min-h-screen text-white  ${
          showSidebar ? "block" : "hidden"
        } md:block`}
      >
        <ul className="menu text-center text-lg md:text-xl">
          {user && (
            <div className="w-[250px]">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={user.photoURL} />
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
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2"
                >
                  <FaHome className="mr-2" />
                  Go Home 
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
