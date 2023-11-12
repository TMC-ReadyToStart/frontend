import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Portal({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (auth.auth) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}
