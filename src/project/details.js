import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as client from "./googlemaps-service.js";
import * as userClient from "./users/client.js";
import * as likesClient from "./likes/client.js";
import './details.css';
import './styles.css';

function Details() {
    const [business, setBusiness] = useState(null);
    const { businessId } = useParams();
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

    const fetchBusiness = async () => {
        const business = await client.findBusinessById(businessId);
        setBusiness(business);
        // console.log(businessId);
        // console.log(business);
    };

    const currentUserlikesBusiness = async () => {
        const _likes = await likesClient.createUserLikesBusiness(
            currentUser._id,
            businessId
        );
        setLikes([_likes, ...likes]);
    }

    useEffect(() => {
        fetchUser();
        fetchBusiness();
        
    },[businessId]);
    return ( 
        <div className="container p-page">
        {business && (
            <>
                <div className="container">
                    <h2>{business?.name}</h2>
                    {JSON.stringify(business, null, 2)}
                </div>
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
            </>
        )}
            
        </div>
     );
}

export default Details;