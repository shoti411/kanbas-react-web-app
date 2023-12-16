import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./../users/client.js";
import './../styles.css';
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container p-page">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        className="form-control"
        value={credentials.username}
        placeholder="enter username here"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
        className="form-control"
        value={credentials.password}
        placeholder="enter password here"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;