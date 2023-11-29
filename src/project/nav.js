import { Link, useLocation } from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    return (

        <nav className="nav nav-tabs mt-2">
            <Link to="/project/home"
                className={`nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
            <Link to="/project/profile"
                className={`nav-link ${pathname.includes("profile") ? "active" : ""}`}>Profile</Link>
            <Link to="/project/signup"
                className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Signup</Link>
            <Link to="/project/login"
                className={`nav-link ${pathname.includes("login") ? "active" : ""}`}>Login</Link>
            <Link to="/project/search"
                className={`nav-link ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
            <Link to="/project/details"
                className={`nav-link ${pathname.includes("details") ? "active" : ""}`}>Details</Link>
        </nav>

    )
}
export default Nav;