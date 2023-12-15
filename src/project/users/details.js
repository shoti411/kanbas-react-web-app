// import React from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import * as client from "./client";
// import * as likesClient from "../likes/client";
// import CurrentUser from "./currentUser";

// function UserDetails() {
//     const [user, setUser] = useState(null);
//     const [currentUser, setCurrentUser] = useState();
//     const {id} = useParams();
//     const navigate = useNavigate();
//     const fetchUser = async () => {
//         const user = await client.findUserById(id);
//         setUser(user);
//     }
//     useEffect(() => {
//         fetchUser();
//     }, [id]);
//     return ( <>
//         {currentUser?._id !== id && (
//             <>
//                 {}
//             </>
//         )}
//     </> );
// }

// export default UserDetails;

import * as client from "./client";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as followsClient from "../follows/client";
import { useSelector } from "react-redux";
import './details.css';
function UserDetails() {
    const [user, setUser] = useState(null);
    // const [currentUser, setCurrentUser] = useState(null); // [1
    const { currentUser } = useSelector((state) => state.usersReducer); // [2
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const { id } = useParams();
    const fetchUser = async () => {
        const user = await client.findUserById(id);
        setUser(user);
        fetchFollowers(user._id);
        fetchFollowing(user._id);
    };
    // const fetchCurrentUser = async () => {
    //   const user = await client.account();
    //   setCurrentUser(user);
    // };
    
    const follow = async () => {
        await followsClient.createUserFollowsUser(currentUser._id, user._id);
    };

    const fetchFollowers = async (userId) => {
        const followers = await followsClient.findFollowersOfUser(userId);
        setFollowers(followers);
    };

    const fetchFollowing = async (userId) => {
        const following = await followsClient.findFollowedUsersOfUser(userId);
        setFollowing(following);
    };

    const alreadyFollowing = () => {
        return followers.find(
            (follows) => follows.follower._id === currentUser._id
        );
    };

    useEffect(() => {
        fetchUser();
        // fetchCurrentUser();
    }, [id]);
    return (
        <div className="container">
            {!currentUser && (
                <div className="">
                    <h2>You need to sign in to see other users!</h2>
                </div>
            )}
            <div></div>

            {currentUser?._id !== id && (
                <>
                    {alreadyFollowing() ? (
                        <button className="btn btn-danger float-end">Unfollow</button>
                    ) : (
                        <button onClick={follow} className="btn btn-primary float-end">
                            Follow
                        </button>
                    )}
                </>
            )}
            
            {currentUser && (
                <>
                    <h1>User Details</h1>
                    <label className="p-ud-text"><h3>First name: {user?.firstName}</h3></label>
                    <div></div>
                    <label className="p-ud-text"><h3>Last name: {user?.lastName}</h3> </label>
                </>
            )}
            {currentUser?.role === "ADMIN" && (
                <div>
                

                    <label className="p-ud-text"><h3>Username: </h3>
                    <input
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        type="text"
                        value={user?.username}
                        className="form-control"
                    /></label>
                <button className="btn btn-outline-success float-end" onClick={() => client.updateUser(user)}>
                        Save
                    </button>
                </div>
            )}
            {currentUser?.role !== "ADMIN" && (<div><label className="p-ud-text"><h3>Username: {user?.username}</h3></label></div>)}
            {((currentUser?.role === "ADMIN") || (currentUser?.role === "MANAGER")) && (
                <div className="">
                    <label className="p-ud-text"><h3>Role: {user?.role}</h3></label>
                </div>
            )}
            {/* <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre> */}
            <h2>Followers</h2>
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
            <h2>Following</h2>
            <div className="list-group">
                {following.map((follows) => (
                    <Link
                        to={`/project/users/${follows.followed._id}`}
                        key={follows._id}
                        className="list-group-item"
                    >
                        {follows.followed.firstName} {follows.followed.lastName} (@
                        {follows.followed.username})
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserDetails;