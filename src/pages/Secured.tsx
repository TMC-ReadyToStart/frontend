import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function Secured({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.auth) {
        // if (location.pathname === "/") return null;
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
