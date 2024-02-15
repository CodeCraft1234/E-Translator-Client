import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  return (
    <div className="mt-16 mx-auto max-w-md text-white bg-[#031321] p-6 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto animate-bounce">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-white">{user?.displayName}</h1>
        <p className="text-gray-300">Email: {user?.email}</p>
        <p className="text-gray-300">Role: {user?.role}</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button onClick={handleLogout} className="bg-indigo-950 border-b-2 rounded-lg">
             <a className="b" href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Logout
              </a>
             </button>
        {/* <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Edit
        </button> */}
      </div>
    </div>
  );
};

export default Profile;
