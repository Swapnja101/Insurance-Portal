/*import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTableRow from "./UserTableRow";
import EditUser from "./EditUser";

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getAll")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
      });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Search by username"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                onDeleteClick={handleDeleteUser}
                onUpdateClick={handleEditClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <EditUser
          user={selectedUser}
          onCancelEdit={handleCancelEdit}
          onUpdateUser={(updatedUser) => {
            const updatedUsers = users.map((user) =>
              user._id === updatedUser._id ? updatedUser : user
            );
            setUsers(updatedUsers);
          }}
        />
      )}
    </div>
  );
};

export default UserList;
*/
// UserList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTableRow from "./UserTableRow";
import EditUser from "./EditUser";

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getAll")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
        setError("Error deleting user. Please try again later.");
      });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map((user) =>
      user._id === updatedUser._id ? updatedUser : user
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Search by username"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                onDeleteClick={handleDeleteUser}
                onUpdateClick={handleEditClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <EditUser
          user={selectedUser}
          onCancelEdit={handleCancelEdit}
          onUpdateUser={handleUpdateUser}
        />
      )}
    </div>
  );
};

export default UserList;
