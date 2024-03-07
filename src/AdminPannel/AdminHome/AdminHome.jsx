
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { HiUserGroup } from "react-icons/hi2";
import SkilitonLoader from "../SkilitonLoader/SkilitonLoader";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FcFeedback } from "react-icons/fc";


const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0); 
  const AxiosSecure = UseAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosSecure.get("/users"); 
        setTotalUsers(response.data.length); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [AxiosSecure]);

  return (
    <>
      {loading ? (
        <SkilitonLoader />
      ) : (
        
        <div className=" text-white bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] min-h-screen">
       <div>
  <h1 className="flex justify-center  lg:items-center py-4 mb-4 text-white bg-transparent rounded-2xl text-xl font-semibold">
    Welcome back
    <img className="w-24 transform hover:scale-105 hover:rotate-3 transition duration-300 ease-in-out" src={user?.photoURL} alt="photo" />



    <span className="font-bold text-white p-1 rounded-md lg:bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">@{user?.displayName || "Guest"}</span>
  </h1>
</div>

<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:p-20 gap-6">
  <div className="card w-96 h-56 flex-shrink-0">
    <div className="card-body bg-gradient-to-r from-rose-600 to-indigo-600 rounded-xl ml-5">
      <h2 className="card-title text-white text-2xl">
        <HiUserGroup /> Total User
      </h2>
      <p className="text-white text-2xl">Active User: {totalUsers}</p>
      <p className="text-white text-2xl">Total User: 50</p>
      <div className="card-actions justify-center"></div>
    </div>
  </div>

  <div className="card w-96 h-56 flex-shrink-0">
    <div className="card-body bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl ml-5">
      <h2 className="card-title text-white text-2xl ">
        <MdOutlineSubscriptions /> Subscription
      </h2>
      <p className="text-white text-2xl ">Total subscription: 30</p>
      <p className="text-white text-2xl ">Non subscription: 100</p>
      <div className="card-actions justify-center"></div>
    </div>
  </div>

  <div className="card w-96 h-56 flex-shrink-0">
    <div className="card-body bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-xl ml-5">
      <h2 className="card-title text-white text-2xl ">
        <MdOutlineSubscriptions /> Visitors
      </h2>
      <p className="text-white text-2xl ">Total Visitor: 505</p>
      <p className="text-white text-2xl ">Click Users: 70</p>
      <div className="card-actions justify-center"></div>
    </div>
  </div>

  <div className="card w-96 h-56 flex-shrink-0">
    <div className="card-body bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-xl ml-5">
      <h2 className="card-title text-white text-2xl ">
        <FcFeedback /> Feedback & Rating
      </h2>
      <p className="text-white text-2xl ">Ratings: 3.5</p>
      <p className="text-white text-2xl ">Feedback: 20</p>
      <div className="card-actions justify-center"></div>
    </div>
  </div>
</div>

         
        </div>
      )}
    </>
  );
};

export default AdminHome;
