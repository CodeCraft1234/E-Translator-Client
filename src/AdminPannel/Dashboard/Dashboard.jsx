import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
import { FaBlog, FaHome, FaUsers } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";

const Dashboard = ({ showSidebar }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="relative ">
      <div
        className={`bg-blue-600 w-72 min-h-screen lg:fixed text-white  ${
          showSidebar ? "block" : "hidden"
        } md:block`}
      >
        <ul className="menu  text-center text-lg md:text-xl">
          {user && (
            <div className="w-[250px]">
              <img
                className="w-44 mx-auto"
                src="https://i.ibb.co/BjZTK4r/E-translator.png"
                alt=""
              />
              <li className=" ">
                <Link to="/dashboard/adminHome" className="flex items-center">
                  <FaHome className="mr-2" />
                Dashboard
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
                  Manage Users
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageBlogs"
                  className="flex items-center py-2"
                >
                  <FaBlog className="mr-2" />
                  Manage Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/userfeedback"
                  className="flex items-center py-2"
                >
                  <FcFeedback className="mr-2" />
                  Users Feedback
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center py-2">
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
