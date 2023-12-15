import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
// import { Link } from "react-router-dom";
// import * as client from "./yelp-service";
import store from "./store";
import Nav from "./nav";
import Home from "./home";
import Profile from "./account";
import Search from "./search";
import Details from "./details";
import Signin from "./signin";
import Signup from "./signup";
import Account from "./account";
import UserTable from "./users/table";
// import CurrentUser from "./users/currentUser";
// import ProtectedAdminRoute from "./users/protectedAdminRoute";

function Project() {
    const [key, setKey] = useState("home");
    
        return(
            // <Provider store={store}>
                // {/* <CurrentUser/> */}
                <div>
                    <Nav />
                    {/* {JSON.stringify(process.env, null, 2)}
                    {JSON.stringify(process.env.REACT_APP_YELP_API_KEY, null, 2)} */}

                    <Routes>
                        <Route path="/" element={<Navigate to="home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        {/* <Route path="profile/*" element={<Profile />} /> */}
                        <Route path="signup/*" element={<Signup />} />
                        <Route path="search/*" element={<Search />} />
                        <Route path="details/*" element={<Details />} />
                        {/* <ProtectedAdminRoute>
                        <Route path="users/*" element={<Details />} />  
                        </ProtectedAdminRoute> */}
                    </Routes>
                </div>
            // </Provider>
        )
}

export default Project;