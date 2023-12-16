import * as client from "./../users/client.js";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setCurrentUser } from "./../users/reducer";
import { useDispatch } from "react-redux";
import './../styles.css';
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      navigate("/project/account");
    } catch (error) {
      setError(error.message);
    }

  };
  return (
    <div className="container p-page">
      <h1>Signin</h1>
      {error && (
        <div className="container">
          <h6 className="red">{error}</h6>
        </div>
      )}
      <input className="form-control" placeholder="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input className="form-control" placeholder="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button className="btn btn-primary" onClick={signin}> Signin </button>

      <h3>Or <Link className="btn btn-secondary" to="/project/signup">Signup</Link></h3>
    </div>
  );
}
export default Signin;