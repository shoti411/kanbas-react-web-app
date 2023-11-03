import './../../styles.css';
import './index.css';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { FaRegFileLines } from 'react-icons/fa6';
function CourseCard(courseId, courseName, courseNumber, courseStartDate, courseEndDate) {
    return (
        <div className="card wd-dashboard-card">
            <Link key={courseId}
                to={`/Kanbas/Courses/${courseId}`}
                className="list-group-item wd-dashboard-card-link">

                <img className="card-img-top wd-dashboard-card-image" src="../../logo192.png" alt="Card image cap" />
                <div className="card-body wd-dashboard-card-text-container">
                    <h5 className="card-title">{courseName}</h5>
                    <div>
                        <p className="card-text">{courseNumber}</p>
                    </div>
                    <div>
                        {courseStartDate} to {courseEndDate}
                    </div>
                    <div>
                        <FaRegFileLines />
                    </div>
                </div>

            </Link>
        </div>
    );
}
export default CourseCard;