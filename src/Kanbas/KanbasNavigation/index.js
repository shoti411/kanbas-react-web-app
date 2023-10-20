import './../../styles.css';
import './index.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from '../Dashboard';
import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import { BsInbox } from 'react-icons/bs';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {FaNetworkWired} from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

function KanbasNavigation() {
    // const account = {
    //     name: "Account",
    //     icon: <i className="fa fa-user fa-2x" style="color: gray"></i>,
    // };
    // const dashboard = {
    //     name: "Dashboard",
    //     icon: <i className="fa fa-solid fa-gauge fa-2x" style="color: red"></i>,
    // };
    // const courses = {
    //     name: "Courses",
    //     icon: <i className="fa fa-solid fa-book fa-2x" style="color: red"></i>,
    // };
    // const calendar = {
    //     name: "Calendar",
    //     icon: <i className="fa fa-regular fa-calendar fa-2x" style="color: red"></i>,
    // };
    // const inbox = {
    //     name: "Inbox",
    //     icon: <i className="fa fa-solid fa-inbox fa-2x" style="color: red"></i>,
    // };
    // const history = {
    //     name: "History",
    //     icon: <i className="fa fa-regular fa-clock fa-2x" style="color: red"></i>,
    // };
    // const studio = {
    //     name: "Studio",
    //     icon: <i className="fa fa-solid fa-network-wired fa-2x" style="color: red"></i>,
    // };
    // const commons = {
    //     name: "Commons",
    //     icon: <i className="fa fa-solid fa-arrow-right fa-2x" style="color: red"></i>,
    // };
    // const help = {
    //     name: "Help",
    //     icon: <i className="fa fa-regular fa-circle-question fa-2x" style="color: red"></i>,
    // };
    const styleaccount = {color: "gray"};
    const stylelistitem = {color: "red", fontSize: "1.5em"};
    const defaulticonsizeinpixels = 16; // 16px is default size
    const iconsize = 2 * defaulticonsizeinpixels; 
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <BiUserCircle style={styleaccount} size={iconsize}/>,
        Dashboard: <RiDashboard3Fill style={stylelistitem} size={iconsize}/>,
        Courses: <FaBook  style={stylelistitem} size={iconsize}/>,
        Calendar: <BsFillCalendar2WeekFill  style={stylelistitem} size={iconsize}/>,
        Inbox: <BsInbox  style={stylelistitem} size={iconsize}/>,
        History: <AiOutlineClockCircle  style={stylelistitem} size={iconsize}/>,
        Studio: <FaNetworkWired style={stylelistitem} size={iconsize}/>,
        Commons: <AiOutlineArrowRight style={stylelistitem} size={iconsize}/>,
        Help: <AiOutlineQuestionCircle style={stylelistitem} size={iconsize}/>,
    }

    const { pathname } = useLocation();
    return (
        <div className="flex-column mb-auto text-center d-flex flex-column flex-shrink-0 list-group wd-kanbas-navigation-container">
            <div className="wd-logomark-container">
                <a href="https://northeastern.instructure.com/"></a>
            </div>
            <div style={{ width: 84 }}>
            <ul className="nav nav-bar nav-flush flex-column mb-auto text-center wd-kanbas-navigation">
                {links.map((link, index) => (
                        <li className={`nav-item ${pathname.includes(link) && "active"}`}>
                            <Link
                                key={index}
                                to={`/Kanbas/${link}`}
                                className={`nav-link`}>
                                    <div className="wd-kanbas-navigation-icon-container">
                                        {linkToIconMap[link]}
                                    </div>
                                    <div className="wd-kanbas-navigation-item-text">
                                        {link}
                                    </div>
                            </Link>
                        </li>
                    ))}
            </ul>
            </div>
        </div>

    );
}
export default KanbasNavigation;





// { Link, useLocation } from "react-router-dom";
// n KanbasNavigation() {
//     links = ["Account"]
// } <Route path="Kanbas/Courses/*" element={}/>

/*
                        <Routes>
                            <Route path="/" element={<Dashboard/>} />
                            
                        </Routes>
*/