import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ Import useAuth

function ProtectedRoute({ children }) {
  const user = useAuth(); // ✅ Use the hook to get auth status

  if (!user.isLoggedIn) {
    // Redirect unauthenticated users
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;

