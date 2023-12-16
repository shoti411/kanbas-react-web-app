import React, { useState, useEffect } from "react";
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
    };

    const currentUserUnlikesBusiness = async () => {
        const status = await likesClient.deleteUserLikesBusiness(
            currentUser._id, businessId
        );
    };

    const fetchLikes = async () => {
        const likes = await likesClient.findUsersThatLikeBusiness(businessId);
        setLikes(likes);
    }

    const alreadyLiked = () => {
        return likes.find(
            (like) => like.user._id === currentUser._id
        );
    };

    useEffect(() => {
        fetchUser();
        fetchBusiness();
        fetchLikes();

    }, [businessId, likes]);
    return (
        <div className="container p-page">
            {business && (
                <>
                    <div className="container">
                        <h2>{business?.name}</h2>
                        <div className="container">
                            <h3>Address Details:</h3>
                            <div className="container">
                                <h5 className="">{business.formatted_address}</h5>
                            </div>
                        </div>
                        <div className="container float-end">
                            <h3>Business Status:</h3>
                            <div className="container">
                                {business?.opening_hours?.open_now ? (<h5 className="green">"Open Right Now!"</h5>) : (<h5 className="red">"Not Open Right Now"</h5>)}
                                <div className="container">
                                    <ul>
                                        {business?.opening_hours.weekday_text?.map((day, index) => (<li>{day}</li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container">
                                <h3>Phone Number:</h3>
                                <div className="container">
                                    <h5 className="">{business.formatted_phone_number}</h5>
                                </div>
                            </div>
                        </div>

                        {/* <div className="container">
                    <div className="container">
                    <h3>Photos:</h3>
                    <div className="container">
                            <ul>
                                {business?.opening_hours.weekday_text?.map((day, index) => (<li>{day}</li>))}
                            </ul>
                    </div>
                    </div>
                    </div> */}

                        {/* {JSON.stringify(business, null, 2)} */}
                    </div>
                    {
                        currentUser && (
                            <>
                                <div className="float-end">
                                    {alreadyLiked() ? (
                                        <button className="btn btn-danger float-end" onClick={currentUserUnlikesBusiness}>Unlike</button>
                                    ) : (
                                        <button onClick={currentUserlikesBusiness} className="btn btn-primary">Like</button>
                                    )}

                                </div>
                                <h2>Likes</h2>
                                <ul className="list-group">
                                    {likes.map((like, index) => (
                                        <Link
                                            key={index}
                                            className="list-group-item"
                                            to={`/project/users/${like?.user?._id}`}>
                                            (@ {like?.user?.username})
                                            </Link>
                                    ))}
                                </ul>
                            </>
                        )
                    }
                </>
            )}

        </div>
    );
}

export default Details;