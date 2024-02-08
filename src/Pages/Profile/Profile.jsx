// Profile.js

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Security/AuthProvider';

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  // Assuming user data is available through the AuthContext
  const [userData, setUserData] = useState({
    username: user.displayName || 'john_doe', // Use user.displayName if available, otherwise use a default value
    email: user.email || 'john.doe@example.com', // Use user.email if available, otherwise use a default value
  });

  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Perform save operation (e.g., send data to the server)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-xl mx-auto mt-24 p-4 border rounded shadow">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <img
            src={user.photoURL} // Placeholder avatar image
            alt="User Avatar"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <p className="text-gray-600">{user.memberType} Member</p>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Full Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="border rounded w-full py-1 px-2"
          />
        ) : (
          <span className="text-gray-800">{user.displayName}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Email:</label>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="border rounded w-full py-1 px-2"
          />
        ) : (
          <span className="text-gray-800">{user.email}</span>
        )}
      </div>
      {isEditing ? (
        <button
          onClick={handleSaveClick}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEditClick}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
      )}
      <button
        onClick={logOut}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
