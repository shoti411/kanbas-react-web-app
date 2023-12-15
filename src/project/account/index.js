import * as client from "./../users/client";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as followsClient from "./../follows/client";
import { setCurrentUser } from "./../users/reducer";
import { useDispatch } from "react-redux";
// import Following from "../follows/index.js";
// import * as likesClient from "../"
function Account() {
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const user = await client.account();
            setUser(user);
            fetchFollowers(user._id);
            fetchFollowing(user._id);
        } catch (error) {
            navigate("/project/signin");
        }
    };
    const signOut = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/project/signin");
    };
    const updateUser = async () => {
        await client.updateUser(user._id, user);
    };

    const fetchFollowers = async (userId) => {
        const followers = await followsClient.findFollowersOfUser(userId);
        setFollowers(followers);
    };

    const fetchFollowing = async (userId) => {
        const following = await followsClient.findFollowedUsersOfUser(userId);
        setFollowing(following);
    };

    useState(() => {
        fetchUser();
    }, []);

    return (
        <div className="container-fluid container">
            <h1>Account</h1>
            <div className="container-fluid">
                {/* {JSON.stringify(account, null, 2)} */}
                {!user && (
                    <div>
                        <Link className="btn btn-primary" to="/project/signin">Signin</Link>
                        <h3>OR</h3>
                        <Link className="btn btn-secondary" to="/project/signup">Signup</Link>
                    </div>
                )}
                {user && (
                    <div className="container">

                        <label className="">
                            First Name:
                            <input className="form-control" value={user.firstName}
                                onChange={(e) => setUser({
                                    ...user,
                                    firstName: e.target.value
                                })} />
                        </label>


                        <label className="">
                            Last Name:
                            <input className="form-control" value={user.lastName}
                                onChange={(e) => setUser({
                                    ...user,
                                    lastName: e.target.value
                                })} />
                        </label>
                        <div></div>
                        <label className="">
                            Date of Birth:
                            <input className="form-control" value={user.dob}
                                onChange={(e) => setUser({
                                    ...user,
                                    dob: e.target.value
                                })} />
                        </label>

                        <div></div>
                        <label className="">
                            Email:
                            <input className="form-control" value={user.email}
                                onChange={(e) => setUser({
                                    ...user,
                                    email: e.target.value
                                })} />
                        </label>

                        <div></div>
                        <label className="">
                            Role:

                            <select className="dropdown" value={user.role} onChange={(e) => setUser({
                                ...user,
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
                            Username:
                            <input className="form-control" value={user.username}
                                onChange={(e) => setUser({
                                    ...user,
                                    username: e.target.value
                                })} />
                        </label>
                        <label className="">
                            Password:
                            <input className="form-control" value={user.password}
                                onChange={(e) => setUser({
                                    ...user,
                                    password: e.target.value
                                })} />
                        </label>
                        <div></div>
                        <div className="container">
                            <button className="btn btn-primary" onClick={updateUser}>
                                Save
                            </button>
                            <button className="btn btn-outline-dark" onClick={signOut}>
                                Signout
                            </button>
                        </div>
                        {/* {user?.role === "ADMIN" && (<Link to="/project/admin/users" className="btn btn-warning w-100">
                            Users
                        </Link>)} */}
                        <h3>Followers</h3>
                        <div className="list-group">
                            {followers.map((follows) => (
                                <Link
                                    to={`/project/users/${follows.follower._id}`}
                                    key={follows._id}
                                    className="list-group-item"
                                >
                                    {follows.follower.firstName} {follows.follower.lastName} (@
                                    {follows.follower.username})
                                </Link>
                            ))}
                        </div>

                        <div className="list-group">
                            <h3>Following</h3>
                            <div className="list-group">
                                {following.map((follows) => (
                                    <Link
                                        key={follows.followed._id}
                                        className="list-group-item"
                                        to={`/project/users/${follows.followed._id}`}
                                    >
                                        {follows.followed.firstName} {follows.followed.lastName} (@
                                        {follows.followed.username})
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>



                )}
            </div>

        </div>
    );
}
export default Account;

