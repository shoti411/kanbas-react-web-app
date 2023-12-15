import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "./client";
import * as likesClient from "../likes/client";
import CurrentUser from "./currentUser";

function UserDetails() {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    const fetchUser = async () => {
        const user = await client.findUserById(id);
        setUser(user);
    }
    useEffect(() => {
        fetchUser();
    }, [id]);
    return ( <>
        {currentUser?._id !== id && (
            <>
                {}
            </>
        )}
    </> );
}

export default UserDetails;