import { Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";
function ProtectedAdminRoute({children}) {
    const {currentUser} = useSelector((state) => state.usersReducer);
    const navigate = useNavigate();
    if (currentUser && currentUser.role === "ADMIN") {
        return children;
    }
    return <Navigate to="/project/signin"/>;
}

export default ProtectedAdminRoute;