import './../../../styles.css';
import './index.css';
import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Grades"];
    const { courseid } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="" style={{ width: 150 }}>
            <ul className="wd-course-navigation">
                {links.map((link, index) => (
                    <li className={` ${pathname.includes(link) && "active"}`}>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseid}/${link}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default CourseNavigation;
