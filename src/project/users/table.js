import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import * as client from "./client";
import './table.css';
function UserTable() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });

  const fetchUser = async () => {
    const user = await client.account();
    setCurrentUser(user);
  }

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };


  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
    fetchUser();
  }, []);
  return (
    <div className="container">
      {currentUser && ((currentUser.role !== "MANAGER") || (currentUser.role !== "ADMIN")) && (<div>
        <h1>User List</h1>
        <table className="table p-table">
          <thead>
            {currentUser?.role === "ADMIN" && (
              <>
                <tr>
                  <td>
                    <input value={user.username} placeholder="username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
                  </td>
                  <td>
                    <input value={user.firstName} placeholder="first name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                  </td>
                  <td>
                    <input value={user.lastName} placeholder="last name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                  </td>
                  <td>
                    <input value={user.password} placeholder="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                  </td>
                  <td>
                    <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                      <option value="MANAGER">Manager</option>
                      <option value="COMPANY">Company</option>
                    </select>
                  </td>
                  <td className="text-nowrap">
                    <BsFillCheckCircleFill onClick={updateUser}
                      className="me-2 text-success fs-1 text" />
                    <BsPlusCircleFill onClick={createUser}
                      className="text-success fs-1 text" />
                  </td>
                </tr>
              </>
            )}
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <Link className="text-decoration-none" to={`/project/users/${user._id}`}>
                    @{user.username}
                  </Link>
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                {currentUser?.role === "ADMIN" && (
                  <td className="text-nowrap">
                  <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                  </button>
                  <button className="btn btn-danger me-2">
                    <BsTrash3Fill onClick={() => deleteUser(user)} />
                  </button>
                </td>
                )}
              </tr>))}
          </tbody>
        </table>
      </div>)}
      {currentUser && (currentUser.role !== "MANAGER") && (currentUser.role !== "ADMIN") && (
        <>
          <h2>Unauthorized</h2>
          <div></div>
          <h3>You must be a Manager or Admin to access this list!</h3>
        </>
      )}
      {/* {!currentUser && <Navigate to="/project/signin" />} */}
    </div>
  );
}
export default UserTable;