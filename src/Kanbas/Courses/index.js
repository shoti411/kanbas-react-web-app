import './../../styles.css';
import './Modules/index.css';
import './index.css';
import db from "../Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
  const { courseid } = useParams(); // get courseid from hyperlink
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseid) => {
    const response = await axios.get(
      `${URL}/${courseid}`
    );
    setCourse(response.data);
  };

  // const courseFromCourseId = courses.find((course) => course._id === courseid); // get specific course from courses in database
  useEffect(() => {
    findCourseById(courseid);
  }, [courseid]);

  const menuIconStyle = {color: "red"};
  const menuIconSize = 16; // 16 px size
  const {pathname} = useLocation();
  let path = pathname.split("/")[4]; // makes array of pathname - [/Kanbas/Courses/RS101/Home] -> ["","Kanbas","Courses","RS101","Home"]
  if(path === "Zoom%20Meetings") {
    path = "Zoom Meetings";
  }
  
  

  return (
    <div className="col">
      <div className="wd-course-breadcrumb-header d-flex">
        <AiOutlineMenu style={menuIconStyle} size={menuIconSize} className="wd-course-header-bars"/>
        <nav className="wd-course-breadcrumb-navbar" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">{course.number} {course.name}</a></li>
            <li className="breadcrumb-item" aria-current="page">{course.startDate} to {course.endDate} term</li>
            <li className="breadcrumb-item"><a href="#">Sec 01</a></li>
            <li className="breadcrumb-item active" aria-current="page">{path}</li>
          </ol>
        </nav>
      </div>
      <hr />
      <div className="wd-course-page-and-navigation d-flex">
        <CourseNavigation />
        <div
          className="d-flex overflow-y-scroll bottom-0 end-0 container"
          style={{
            left: "320px",
            top: "50px",
          }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<Navigate to="https://piazza.com/class/lm1gi2uzv1x402"/>} />
            <Route path="Zoom Meetings" element={<h2>Zoom Meetings</h2>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;



// import {useParams} from "react-router";
// import db from "../Database";


// function Courses() {
//     const {courseId} = useParams();
//     const course = db.courses.find((course => course._id === courseId));
//     return (
//         <div>
//             <h1>Courses {course.name}</h1>
//             <div class="row">
//                 <div className="col">
                    
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default Courses;