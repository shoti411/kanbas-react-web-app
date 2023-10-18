import Nav from "../Nav";

function Kanbas() {
    return (
        <div>
            <Nav/>
            <h1>Kanbas</h1>
       </div>
        // <div className="d-flex">
        //     <KanbasNavigation />
        //     <div>
        //         <Routes>
        //             <Route path="Account" element={<h1>Account</h1>} />
        //             <Route path="Dashboard" element={<h1>Dashboard</h1>} />
        //             <Route path="Courses/courseid:/*" element={<h1>Courses</h1>} />
        //             <Route path="Calendar" element={<h1>Calendar</h1>} />
        //         </Routes>
        //     </div>
        // </div>
    );
}

export default Kanbas;