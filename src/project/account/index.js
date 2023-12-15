import * as client from "./../users/client.js";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import * as followsClient from "./../follows/client.js";
// import * as likesClient from "../"
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const [likes, setLikes] = useState([]);
    const [followers, setFollowers] = useState([]);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();
    const fetchAccount = async () => {
        // try {
        //     const account = await client.account();
        //     setAccount(account);
        // } catch (error) {
        //     navigate("/project/signin");
        // }
        const account = await client.account();
        setAccount(account);

    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };
    const deleteUser = async () => {
        const status = await client.deleteUser(id, account);
        navigate("/project/users");
    };

    const followUser = async () => {
        const status = await followsClient.createUserFollowsUser(id);
    };

    const fetchFollowers = async () => {
        const followers = await followsClient.findFollowersOfUser(id);
        setFollowers(followers);
    }



    useEffect(() => {
        if (id) {
            findUserById(id);
            fetchFollowers();
        } else {
            fetchAccount();
        }
    }, [id]);

    return (
        <div className="container-fluid container">
            <h1>Account</h1>
            <div className="container-fluid">
                {/* {JSON.stringify(account, null, 2)} */}
                {!account && (
                    <div>
                        <Link className="btn btn-primary" to="/project/signin">Signin</Link>
                        <h3>OR</h3>
                        <Link className="btn btn-secondary" to="/project/signup">Signup</Link>
                    </div>
                )}
                {account && (
                    <div>
                        <div className="float-end">
                            <button onClick={followUser} className="btn btn-success">Follow</button>
                        </div>
                        <label className="">
                            First Name:
                            <input className="form-control" value={account.firstName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    firstName: e.target.value
                                })} />
                        </label>


                        <label className="">
                            Last Name:
                            <input className="form-control" value={account.lastName}
                                onChange={(e) => setAccount({
                                    ...account,
                                    lastName: e.target.value
                                })} />
                        </label>
                        <div></div>
                        <label className="">
                            Date of Birth:
                            <input className="form-control" value={account.dob}
                                onChange={(e) => setAccount({
                                    ...account,
                                    dob: e.target.value
                                })} />
                        </label>

                        <div></div>
                        <label className="">
                            Email:
                            <input className="form-control" value={account.email}
                                onChange={(e) => setAccount({
                                    ...account,
                                    email: e.target.value
                                })} />
                        </label>

                        <div></div>
                        <label className="">
                            Role:

                            <select className="dropdown" value={account.role} onChange={(e) => setAccount({
                                ...account,
                                role: e.target.value
                            })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="MANAGER">Manager</option>
                                <option value="COMPANY">Company</option>
                            </select>
                        </label>
                        <div></div>
                        <label className="">
                            Password:
                            <input className="form-control" value={account.password}
                                onChange={(e) => setAccount({
                                    ...account,
                                    password: e.target.value
                                })} />
                        </label>
                        <div></div>
                        <div className="vertical-center">
                            <button className="btn btn-primary" onClick={save}>
                                Save
                            </button>
                        </div>

                        <div className="list-group">
                            <h3>Followers</h3>
                            {followers.map((follows, index) => (
                                <Link key={index} className="list-group-item" to={`/project/users/${follows.follower._id}`}>{follows.follower.username}</Link>
                            ))}
                        </div>

                        {account && account.role === "ADMIN" && (<Link to="/project/admin/users" className="btn btn-warning w-100">
                            Users
                        </Link>)}
                        <button className="btn btn-outline-dark" onClick={signout}>
                            Signout
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
}
export default Account;

