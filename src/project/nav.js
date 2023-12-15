import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './nav.css';
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Nav() {
    const { currentUser } = useSelector((state) => state.usersReducer); // so when user is logged in - this only gets populated until server responds
    const { pathname } = useLocation();

    useEffect(() => {

    }, [])
    return (
        <div className="container p-navback">
            <nav className="navbar navbar-light mt-2 d-flex container-fluid p-nav">
                <a className="navbar-brand">Business Reviewer</a>


                <div className={`nav-item ${pathname.includes("home") ? "active" : ""}`}>
                    <Link to="/project/home"
                        className={`nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
                </div>
                <div className={`nav-item ${pathname.includes("search") ? "active" : ""}`}>
                    <Link to="/project/search"
                        className={`nav-link ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
                </div>
                <div className={`nav-item ${pathname.includes("details") ? "active" : ""}`}>
                    <Link to="/project/details"
                        className={`nav-link ${pathname.includes("details") ? "active" : ""}`}>Details</Link>
                </div>
                {!currentUser && (
                    <>
                        <div className={`nav-item ${pathname.includes("signin") ? "active" : ""}`}>
                            <Link to="/project/signin"
                                className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Signin</Link>
                        </div>

                        <div className={`nav-item ${pathname.includes("signup") ? "active" : ""}`}>
                            <Link to="/project/signup"
                                className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Signup</Link>
                        </div>
                    </>
                )}
                {currentUser && (
                    <>
                        {currentUser.role === "ADMIN" && (
                            <div className={`nav-item ${pathname.includes("users") ? "active" : ""}`}>
                                <Link to="/project/users"
                                    className={`nav-link ${pathname.includes("users") ? "active" : ""}`}>Users</Link>
                            </div>
                        )}
                        <div className={`nav-item ${pathname.includes("account") ? "active" : ""}`}>
                            <Link to="/project/account"
                                className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
                        </div>
                        
                    </>
                )}
            </nav>
        </div>
    )
}
export default Nav;