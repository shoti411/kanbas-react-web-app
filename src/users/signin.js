import * as client from "./client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input className="form-control" placeholder="username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control" placeholder="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary" onClick={signin}> Signin </button>

      <h3>Or <Link className="btn btn-secondary" to="/Kanbas/signup">Signup</Link></h3>
    </div>
  );
}
export default Signin;