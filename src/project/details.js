import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// import * as client from "./client";
import * as userClient from "./users/client.js";
import * as likesClient from "./likes/client.js";
import './styles.css';

function Details() {
    const [currentUser, setCurrentUser] = useState(null);
    const [likes, setLikes] = useState([]);
    
    const fetchUser = async () => {
        try {
            const user = await userClient.account();
            setCurrentUser(user);
        } catch (error) {
            setCurrentUser(null);
        }

    };

    const currentUserlikesBusiness = async () => {
        const _likes = await likesClient.createUserLikesBusiness(
            currentUser._id,
            // businessId
        );
        setLikes([_likes, ...likes]);
    }

    useEffect(() => {
        fetchUser();
    })
    return ( 
        <div className="container">
            {
                currentUser && (
                    <div className="float-end">
                        <button onClick={currentUserlikesBusiness} className="btn btn-primary">Like</button>
                    </div>
                )
            }
            <h2>Likes</h2>
            <ul className="list-group">
                {likes.map((like, index) => (
                    <Link key={index} className="list-group-item" to={`/project/users/${like.user._id}`}>{like.user.username}</Link>
                ))}
            </ul>
        </div>
     );
}

export default Details;