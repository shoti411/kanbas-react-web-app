// import { Navigate, useNavigate } from "react-router";
// import { useSelector } from "react-redux";
// function ProtectedAdminRoute({children}) {
//     const {currentUser} = useSelector((state) => state.usersReducer);
//     const navigate = useNavigate();
//     if (currentUser && currentUser.role === "ADMIN") {
//         return children;
//     }
//     return <Navigate to="/project/signin"/>;
// }

// export default ProtectedAdminRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  if (currentUser && ((currentUser.role !== "MANAGER") || (currentUser.role !== "ADMIN"))) {
    return children;
  }
  return <Navigate to="/project/signin" />;
}

export default ProtectedAdminRoute;