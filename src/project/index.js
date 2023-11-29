import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
// import { Link } from "react-router-dom";
// import * as client from "./yelp-service";
import Nav from "./nav";
import Home from "./home";
import Profile from "./profile";
import SignUp from "./signup";
import Login from "./login";
import Search from "./search";
import Details from "./details";

function Project() {
    const [key, setKey] = useState("home");
    process.env.
    return (

        <div>
            <Nav />
            {key}
            <pre>{JSON.stringify(process.env, null, 2)}</pre>

            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="profile/*" element={<Profile />} />
                <Route path="signup/*" element={<SignUp />} />
                <Route path="login/*" element={<Login />} />
                <Route path="search/*" element={<Search />} />
                <Route path="details/*" element={<Details />} />
            </Routes>
        </div>

    )
}

export default Project;