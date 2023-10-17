import {useParams} from "react-router";
import db from "../Database";


function Courses() {
    const {courseId} = useParams();
    const course = db.courses.find((course => course._id === courseId));
    return (
        <div>
            <h1>Courses {course.name}</h1>
            <div class="row">
                <div classname="col">
                    
                </div>
            </div>
        </div>
    )
}


export default Courses;