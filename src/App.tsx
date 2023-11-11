import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "@/pages/Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import Quests from "./pages/Quests";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
