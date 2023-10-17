import db from "../Database";

function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules.filter((module) => module.course === courseId);
    
    return (
        <div>
            <h1>Modules</h1>
            <ul className="list-group">
                {modules.map((module, index) => (
                    <li></li>
                ))}
            </ul>
        </div>
    )
}

export default ModuleList;