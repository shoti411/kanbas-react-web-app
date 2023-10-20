import '../../../styles.css';
import './AssignmentEditor/index.css';
import './index.css';
import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlinePlus } from 'react-icons/ai';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { CiCircleCheck } from 'react-icons/ci';
import { FaGripVertical } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';



function Assignments() {
  const { courseid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseid);
  return (
    <div>
      <div className="wd-course-assignments-page-container">
        <div className="d-flex justify-content-between wd-course-assignments-header">
          <div>
            <input placeholder="Search for Assignments" />
          </div>
          <div>
            <button className="btn btn-light">Group</button>
            <button className="btn btn-danger"><AiOutlinePlus />
              Assignment</button>
            <button className="btn btn-light"><span><HiEllipsisVertical /></span>&nbsp;</button>
          </div>
        </div>
        <hr />
        <div className="">
          <div>
            <ul className="list-group wd-course-home-modules-list">
              <li className="list-group-item-secondary">
                <div className="wd-course-home-modules-list-title">
                  <div className="wd-course-home-modules-list-title-left">
                    <div className="wd-course-home-modules-list-title-vertical-ellipses">
                      <FaGripVertical />
                    </div>
                    <div>
                      <h5>Assignments</h5>
                    </div>
                  </div>
                  <div>
                    <div className="float-end wd-course-home-modules-icons-container">
                      <div className="wd-course-home-modules-list-icons">
                        <label className="wd-course-assignments-label">40% of Total</label>
                        <AiOutlinePlus />
                        <HiEllipsisVertical />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseid}/Assignments/${assignment._id}`}
              className="list-group-item">

              <div className="wd-course-assignments-list-assignment-container">
                <div className="wd-course-assignments-list-item-container">

                  <div className="wd-course-assignments-list-item-icon-container">
                    <FaGripVertical/>
                  </div>
                  <div className="wd-course-assignments-list-item-icon-container">
                    <FaRegPenToSquare/>
                  </div>
                  <div className="wd-course-assignments-list-item-assignment-container">
                    <a href="/Kanbas/Courses/Assignments/AssignmentEditor/edit.html" className="list-group-item list-group-item-action" aria-current="true">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{assignment.title}</h5>
                      </div>
                      <p className="mb-1">{assignment._id}</p>
                      <small>Due Sep 18, 2022 at 11:59pm | 100 points</small>
                    </a>
                  </div>
                </div>
                <div className="float-end wd-course-assignment-list-item-right">
                  <div className="wd-course-assignments-list-item-icon-container">
                    <CiCircleCheck/>
                  </div>
                  <div className="wd-course-assignments-list-item-icon-container">
                    <HiEllipsisVertical />
                  </div>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;