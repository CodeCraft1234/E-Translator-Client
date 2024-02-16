
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
        
        <div className=" text-white bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] p-10 min-h-screen">
          <div className="">
          <h1 className="flex justify-center items-center py-4 mb-4 text-white bg-slate-500 rounded-2xl  text-xl font-semibold">
            Welcome back
            <img className="w-24" src={user?.photoURL} alt="photo" />
            <span className="font-bold text-cyan-600">@{user?.displayName || "Guest"}</span>
          </h1>
          </div>

          <div className="grid  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
            <div className="card w-96 bg-base-100  h-56 flex-shrink-0">
              <div className="card-body bg-[#D35400] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl">
                  <HiUserGroup /> Total User
                </h2>
                <p className="text-white text-2xl">Active User: {totalUsers}</p>
                <p className="text-white text-2xl">Total User: 50</p>
                
                <div className="card-actions justify-center">
                 
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100  h-56 flex-shrink-0">
              <div className="card-body bg-[#1F618D] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl ">
                  <MdOutlineSubscriptions /> Subscription
                </h2>
                <p className="text-white text-2xl ">Total subscription: 30</p>
                <p className="text-white text-2xl ">Non subscription: 100</p>
                <div className="card-actions justify-center">
                
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 h-56 flex-shrink-0">
              <div className="card-body bg-[#3D8600] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl ">
                  <MdOutlineSubscriptions /> Visitors
                </h2>
                <p className="text-white text-2xl ">Total Visitor: 505</p>
                <p className="text-white text-2xl ">Click Users: 70</p>
                <div className="card-actions justify-center">
                
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 h-56 flex-shrink-0">
              <div className="card-body bg-[#34495E] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl ">
                  <FcFeedback  /> Feedback & Rating
                </h2>
                <p className="text-white text-2xl ">Ratings: 3.5</p>
                <p className="text-white text-2xl ">Feedback: 20</p>
                <div className="card-actions justify-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
