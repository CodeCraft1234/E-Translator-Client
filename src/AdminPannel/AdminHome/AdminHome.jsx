
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { HiUserGroup } from "react-icons/hi2";
import SkilitonLoader from "../SkilitonLoader/SkilitonLoader";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { MdOutlineSubscriptions } from "react-icons/md";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0); // State to store the total user count
  const AxiosSecure = UseAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosSecure.get("/users"); // Assuming you have an endpoint to fetch user data
        setTotalUsers(response.data.length); // Update the state with the total user count
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
        <div>
          <h1 className="py-6 text-center text-xl font-semibold">
            Welcome back{" "}
            <span className=" font-bold text-cyan-600"> @{user?.displayName || "Guest"}</span>
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-2">
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
              <div className="card-body bg-[#0660F8] rounded-xl ml-5">
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
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
