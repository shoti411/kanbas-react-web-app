import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Route, Routes, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import db from "./Database";
import { useState } from "react";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

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
                                addNewCourse={addNewCourse}
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