// import { Navigate, useNavigate } from "react-router";
// import { useSelector } from "react-redux";
// function ProtectedContent({children}) {
//     const {currentUser} = useSelector((state) => state.usersReducer);
//     const navigate = useNavigate();
//     if (currentUser) {
//         return children;
//     }
//     return null;
// }

// export default ProtectedContent;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedContent({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  if (currentUser) {
    return children;
  }
  return null;
}

export default ProtectedContent;