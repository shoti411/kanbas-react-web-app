import Nav from "../nav";
import * as client from "../googlemaps-service.js";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as userClient from "./../users/client";
import { useSelector } from "react-redux";
import './../styles.css';

function Home() {
    const [users, setUsers] = useState([]);
    var [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const [popularUsers, setPopularUsers] = useState([]);
    const [mostPUser, setMostPUser] = useState(null);


    const fetchUser = async () => {
        const user = await userClient.account();
        setCurrentUser(user);
    }
    const fetchUsers = async () => {
        const users = await userClient.findAllUsers();
        setUsers(users);

        setMostPUser(user)

        shuffle(users);
        setMostPUser(users)
        // var i = 4;
        // while (i > 0) {
        //     setPopularUsers(...popularUsers, randomPick(i));
        //     i--;
        // };
        // console.log(users);
    };

    function randomPick(i) {
        users.map((user, index) => {
            if (index === i) {
                return user;
            }
        });
        return currentUser;
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    // the 3rd index


    useEffect(() => {
        fetchUsers();
        fetchUser();
    }, []);


    return (

        <div className="container container-fluid p-page">
            <h1>Home</h1>
            {currentUser && (
                <>
                    <div className="container">
                        <h3>Welcome {currentUser.username}</h3>
                    </div>
                </>
            )}

            {currentUser && (
                <>
                    <div className="container">
                        <h3>
                            Please Message Any of the Luke (an Admin) if you have any questions!
                        </h3>
                        <Link
                            to={`/project/users/65500111ea7ead465908d1fb`}
                            className="list-group-item"
                            >
                                Luke Po (@luke)
                            </Link>

                    </div>
                </>
                )}

                

            {/* <div className="container">
        
                <h3>Popular Users:</h3>
                <div className="list-group">
                    {popularUsers  {popularUsers.map((puser) => (

                        <>{puser}</>
                    ))} }
                </div>
            </div> */}

            <div className="container">
                <h3>Popular Businesses Currently</h3>
                        <div className="list-group">
                                <Link
                                    to={`/project/details/ChIJOUJ8JLd744kR_6K-CWV9F84`}
                                    key="ChIJOUJ8JLd744kR_6K-CWV9F84"
                                    className="list-group-item"
                                >
                                    Office of Prevention and Education at Northeastern (OPEN)
                                </Link>
                                <Link
                                    to={`/project/details/ChIJh4xeB4Bw44kRKyShG2CZPrM`}
                                    key="ChIJh4xeB4Bw44kRKyShG2CZPrM"
                                    className="list-group-item"
                                >
                                    McDonald's
                                </Link>
                        </div>
            </div>

        </div>
    );
}

                        {/* <Link
                            to={`/project/users/${puser._id}`}
                            key={puser._id}
                            className="list-group-item"
                        >
                            {puser.follower.firstName} {puser.follower.lastName} (@
                            {puser.follower.username})
                        </Link> */}

export default Home;