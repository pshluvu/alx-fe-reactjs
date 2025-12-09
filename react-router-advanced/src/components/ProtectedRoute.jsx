import { Navigate } from "react-router-dom";

// ✅ Simulated authentication
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
