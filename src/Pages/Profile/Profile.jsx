import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import "./profile.css";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  return (

    <div className="lg:mt-[100px] md:mt-[80px] mt-[80px] mx-auto max-w-md p-6 rounded-lg shadow-md">
      <div className="boxP">
        <div className="loginP">
          <div className="loginBxP">
            <div className="text-center  mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto animate-bounce">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-white">
                {user?.displayName}
              </h1>
              <p className="text-gray-300">Email: {user?.email}</p>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="bg-indigo-950 border-b-2 rounded-lg"
              >
                <a className="b rounded-lg" href="">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Logout
                </a>
              </button>
            </div>
          </div>

<div className="py-36 mt-10">
  
<div className=" p-10  mx-auto max-w-md text-white bg-[#031321] rounded-md shadow-md">
      <div className="text-center pt-16 mb-4">

        <div className="w-24  h-24 rounded-full overflow-hidden mx-auto animate-bounce">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
</div>
  );
};

export default Profile;
