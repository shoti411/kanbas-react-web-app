import './../../styles.css';
import './index.css';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import db from "../Database";
// import CourseCard from './CourseCard';
import {AiOutlinePlus} from 'react-icons/ai';
import { FaRegFileLines } from 'react-icons/fa6';
import { BsTrashFill } from 'react-icons/bs';
function Dashboard({ courses, course, setCourse, addCourse,
  deleteCourse, updateCourse }) {

  
  

  return (
    <div className="wd-kanbas-course-page">
      <div>
        <h1>Dashboard</h1>
        <hr />
      </div>
      <div className="container-fluid wd-dashboard-published-courses-container">
        <div className="row d-flex flex-row flex-wrap">
          <h2>Published Courses ({courses.length})</h2>
          <hr />
        </div>
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} title="Course Name"/>
        <input value={course.number} className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })} title="Course Number"/>
        <input value={course.startDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })} title="Course Start Date"/>
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} title="Course End Date"/>
        <button className="btn btn-danger" onClick={addCourse} >
          <AiOutlinePlus/>
          Add
        </button>
        <button className="btn btn-light" onClick={updateCourse} >
        Update
        </button>


        <div>
          <div className="col d-flex flex-row flex-wrap">
            {courses.map((course) => (
              <div className="card wd-dashboard-card">
                <Link key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="list-group-item wd-dashboard-card-link">
                  <img className="card-img-top wd-dashboard-card-image" src="../../logo192.png" alt="Card image cap" />
                  <div className="card-body wd-dashboard-card-text-container">
                    <h5 className="card-title">{course.name}</h5>
                    <div>
                      <p className="card-text">{course.number}</p>
                    </div>
                    <div>
                      {course.startDate} to {course.endDate}
                    </div>
                    <div className="row justify-content-between">
                      <div className="col">
                        <button className="btn btn-light"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>
                          Edit <FaRegFileLines />
                        </button>


                      </div>
                      <div className="col">
                        <button className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course);
                          }}>
                          <BsTrashFill/>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                </Link>
              </div>
            ))}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;