import { Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export default function Logout() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        auth.setAuth(null);
        navigate("/login");
    }, [auth, navigate]);

    return null;
}
