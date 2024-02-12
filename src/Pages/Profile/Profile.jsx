import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  return (
    <div className="mt-24 mx-auto max-w-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-md shadow-md">
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
        <button
          onClick={handleLogout}
          className="btn btn-outline bg-[#006bcb] text-white border-0 border-[#006bcb] hover:bg-[#005999] hover:border-[#005999] border-b-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
