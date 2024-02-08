import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    // Add the logic to handle logout
    logOut();
    window.location.href = "/";
  };

  // const handleEdit = () => {
  //   // Add the logic to handle edit
  //   console.log("Edit button clicked");
  // };

  return (
    <div className="mt-24 mx-auto max-w-md bg-blue-300 p-6 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg font-semibold mt-2">Member Type</h1>
        <h1 className="text-xl font-bold">{user?.displayName}</h1>
        <p className="text-gray-500">Email: {user?.email}</p>

      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleLogout}
          className="btn  btn-outline border-0 border-[#006bcb] hover:bg-[#006bcb] hover:border-[#006bcb] border-b-4 hover:text-white"
        >
          Logout
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
