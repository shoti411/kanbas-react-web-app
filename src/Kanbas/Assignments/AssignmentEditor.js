import React from "react";
import db from "../Database";
import {useParams} from "react-router-dom";


function assignmentEditor() {
    const {assignmentId, courseId} = useParams();

    const assignment = db.assignments.find((a) => a._id === assignmentId);
    

    const handleSave = () => {
        console.log("actually save the assignment TBD");
        // go back to assignments
        NavigationPreloadManager('/Kanbas/Courses/${courseId}/Assignments');
    }
    return (
        <div>
            <h1>Assignment Editor!!! {assignment.title}</h1>
            <input className="form-control" defaultValue={assignment.title} />
            <button className="btn btn-success">Save</button>
            <Link className="btn btn-warning">Cancel</Link>
            
            
        </div>
    );
}

export default assignmentEditor;