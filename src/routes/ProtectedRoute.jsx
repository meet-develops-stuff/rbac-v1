import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("email"); // Check if token exists (currently only checks if email exists)

    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
