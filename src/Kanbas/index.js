//import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Route, Routes, Navigate } from "react-router";

function Kanbas() {
    return (

        //     <div>
        //         <Nav/>
        //         <h1>Kanbas</h1>
        //    </div>
        <div className="d-flex">
            <div className="col-1">
                <KanbasNavigation />
            </div>
            <div className="d-flex">
                {<Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>} />
                    <Route path="Account/*" element={<h1>Account</h1>} />
                    <Route path="Dashboard/*" element={<Dashboard />} />
                    <Route path="Courses/:courseid/*" element={<Courses />} />
                    <Route path="Courses" element={<h1>Courses</h1>}/>
                    <Route path="Calendar/*" element={<h1>Calendar</h1>} />
                    <Route path="Inbox/*" element={<h1>Inbox</h1>} />
                    <Route path="History/*" element={<h1>History</h1>} />
                    <Route path="Studio/*" element={<h1>Studio</h1>} />
                    <Route path="Commons/*" element={<h1>Commons</h1>} />
                    <Route path="Help/*" element={<h1>Help</h1>} />
                </Routes>}
            </div>
        </div>
    );
}

export default Kanbas;