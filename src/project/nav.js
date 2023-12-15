import { Link, useLocation } from "react-router-dom";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Nav() {
    // const currentUser = useSelector((state) => state.usersReducer); // so when user is logged in - this only gets populated until server responds
    const { pathname } = useLocation();
    return (

        <nav className="nav nav-tabs mt-2 d-flex container-fluid">
            <Link to="/project/home"
                className={`nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
            <Link to="/project/account"
                className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>

            
            {// if there is current user, then render this
            //    !currentUser &&
(                
            <>
                <Link to="/project/signup"
                    className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Signup</Link>
                <Link to="/project/signin"
                    className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Signin</Link>
            </>
            )}

            <Link to="/project/search"
                className={`nav-link ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
            <Link to="/project/details"
                className={`nav-link ${pathname.includes("details") ? "active" : ""}`}>Details</Link>
        </nav>

    )
}
export default Nav;