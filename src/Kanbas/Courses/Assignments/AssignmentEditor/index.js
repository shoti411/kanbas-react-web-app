import '../../../../styles.css';
import './index.css';
import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiOutlinePlus } from 'react-icons/ai';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { CiCircleCheck } from 'react-icons/ci';
import { FaGripVertical } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);


  const { courseid } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseid}/Assignments`);
  };
  return (
    <div class="wd-course-assignments-page-container">
      <div class="d-flex justify-content-between wd-course-assignments-header">
        <div>
          <input placeholder="Search for Assignments" />
        </div>
        <div>
          <button class="btn btn-light">Group</button>
          <button class="btn btn-danger"><AiOutlinePlus/>
            Assignment</button>
          <button class="btn btn-light"><span><HiEllipsisVertical/></span>&nbsp;</button>
        </div>
      </div>
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment.title}
        className="form-control mb-2" />
      <Link
        key={assignment._id}
        to={`/Kanbas/Courses/${courseid}/Assignments`}
        className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;