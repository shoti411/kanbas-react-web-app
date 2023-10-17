import db from "../Database";
import 

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                
            </div>
            <pre>
                <code>{JSON.stringify(courses, null, 2)}</code>
            </pre>
        </div>
    );
}

export default Dashboard;