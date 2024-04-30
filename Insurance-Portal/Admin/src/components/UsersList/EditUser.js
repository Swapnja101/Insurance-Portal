
import React, { useState } from "react";
import axios from "axios";

const EditUser = ({ user, onUpdateUser, onCancelEdit }) => {
  const [editedUser, setEditedUser] = useState({ ...user });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    if (!editedUser.username || !editedUser.email) {
      setError("Please fill in all fields.");
      return;
    }

    axios
    .put(`http://localhost:5000/users/${editedUser._id}`, editedUser)
    .then((response) => {
      onUpdateUser(response.data.user);
      onCancelEdit();
      console.log("User updated successfully");
    })
    .catch((error) => {
      console.error("Error updating user:", error);
      setError("Error updating user. Please try again later.");
    });
  };

  return (
    <div className="bg-white shadow-lg rounded px-8 pt-10 mt-5 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={editedUser.username}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button
          onClick={onCancelEdit}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditUser;
