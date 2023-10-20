import './index.css';
import {FaRegFileLines} from 'react-icons/fa6';
export default function CourseCard(courseName, courseNumber, courseStartDate, courseEndDate) {
    return ( 
        <div className="card wd-dashboard-card">
            <img className="card-img-top wd-dashboard-card-image" src="../../logo192.png" alt="Card image cap"/>
                <div className="card-body wd-dashboard-card-text-container" style="width: 18rem;">
                    <a className="wd-dashboard-card-link" href="/Kanbas/Courses/Home/index.html">
                        <h5 className="card-title">{courseName}</h5>
                        <div>
                            <p className="card-text">{courseNumber}</p>
                        </div>
                        <div>
                            {courseStartDate} to {courseEndDate}
                        </div>
                        <div>
                            <FaRegFileLines/>
                        </div>
                    </a>
                </div>
        </div>
     );
}