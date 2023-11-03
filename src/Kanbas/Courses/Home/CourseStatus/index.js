import './../../../../styles.css';
import './index.css';
import { FcCancel } from "react-icons/fc";
import { CiCircleCheck } from 'react-icons/ci';

function CourseStatus() {
    return (
        <div className="d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none wd-course-home-coursestatus-col d-flex">
            <div>
                <h5>Course Status</h5>
            </div>
            <div className="wd-course-status-publish">
                <div>
                    <button className="btn btn-light">
                        <FcCancel />
                        Unpublish
                    </button>
                </div>

                <div>
                    <button className="btn btn-success wd-course-home-coursestatus-published" disabled>
                        <CiCircleCheck />
                        Published
                    </button>
                </div>

            </div>
            <div>
                <div className="list-group">

                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">Import Existing Content</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">Import from Commons</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">Choose Home Page</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">View Course Stream</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">New Announcements</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">New Analytics</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">View Course Notifications</a>
                </div>
            </div>
            <div>
                <h5>To Do</h5>
            </div>
            <hr />
            <div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <span className="badge bg-danger rounded-pill">1</span>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Assignment</div>
                            Out of 100 points
                        </div>
                    </li>
                </ul>
            </div>

            <div className="wd-course-home-coursestatus-viewcalendar">
                <div><h5>Coming Up</h5></div>
                <div><a className="wd-course-home-coursestatus-link" href="#">View Calendar</a></div>
            </div>
            <hr />
            <div>
                <ul className="list-group wd-course-home-coursestatus-list">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Lecture</div>
                            Oct 1, 2023
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">CS4550 Lecture</div>
                            Oct 4, 2023
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Quiz</div>
                            Oct 5, 2023
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <a className="wd-course-home-coursestatus-link" href="#">Show more content</a>
            </div>
        </div>
    );
}

export default CourseStatus;