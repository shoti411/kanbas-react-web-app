import './index.css';
import { Link } from "react-router-dom";
import db from "../Database";
import { FaRegFileLines } from 'react-icons/fa6';
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-kanbas-course-page">
      <div>
        <h1>Dashboard</h1>
        <hr />
      </div>
      <div class="container-fluid wd-dashboard-published-courses-container">
        <div>
          <h2>Published Courses ({courses.length})</h2>
          <hr />
        </div>
        <div class="row d-flex flex-row flex-wrap">
          <div>
            {courses.map((course) => (
              <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="">
                <div className="card wd-dashboard-card">
                  <img className="card-img-top wd-dashboard-card-image" src="../../logo192.png" alt="Card image cap" />
                  <div className="card-body wd-dashboard-card-text-container">
                    <a className="wd-dashboard-card-link" href="/Kanbas/Courses/Home/index.html">
                      <h5 className="card-title">{course.name}</h5>
                      <div>
                        <p className="card-text">{course.number}</p>
                      </div>
                      <div>
                        {course.startDate} to {course.endDate}
                      </div>
                      <div>
                        <FaRegFileLines />
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>

          </div>

        </div>
      </div>
    </div>
  );
}
export default Dashboard;