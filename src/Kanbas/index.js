import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Route, Routes, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import db from "./Database";
import { useEffect, useState } from "react";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        _id: {$oid: "1"},
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        department: "N1", credits: 1, description: "none",
    });
    
    const URL = "http://localhost:4000/api/courses";

    const updateCourse = async (course) => {
        const response = await axios.put(
          `${URL}/${course._id.$oid}`,
          course
        );
        setCourses(
          courses.map((c) => {
            if (c._id.$oid === course._id.$oid) {
              return course;
            }
            return c;
          })
        );
        setCourse({ name: "", number: "" });
      };
    

    const deleteCourse = async (course) => {
        const response = await axios.delete(
          `${URL}/${course._id}`
        );
        setCourses(courses.filter(
          (c) => c._id !== course._id));
      };
    

    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
        //   {_id: {$oid: response.data}, name: course.name, number: course.number, startDate: course.startDate, endDate: course.endDate, department: course.department, credits: course.credits, description: course.description},
            response.data,
          ...courses,
        ]);
        setCourse( { name: "", number: "" } );
      };
    
    const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
    };


    useEffect(() => {
      findAllCourses();
    }, []);

    return (
        <Provider store={store}>
            <div className="d-flex">
                <div className="col-1">
                    <KanbasNavigation />
                </div>
                <div className="d-flex">
                    {<Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<h1>Account</h1>} />
                        <Route path="Dashboard/*" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />
                        } />
                        <Route path="Courses/:courseid/*" element={
                            <Courses courses={courses} />} />
                        <Route path="Courses" element={<h1>Courses</h1>} />
                        <Route path="Calendar/*" element={<h1>Calendar</h1>} />
                        <Route path="Inbox/*" element={<h1>Inbox</h1>} />
                        <Route path="History/*" element={<h1>History</h1>} />
                        <Route path="Studio/*" element={<h1>Studio</h1>} />
                        <Route path="Commons/*" element={<h1>Commons</h1>} />
                        <Route path="Help/*" element={<h1>Help</h1>} />
                    </Routes>}
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;