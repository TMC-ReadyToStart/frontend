import { Button } from "@/components/ui/button";
import { Route, Routes, Navigate, Link } from "react-router-dom";

// import { useQuery } from "@tanstack/react-query";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Routes>
                <Route path="/" element={<Button>Click me</Button>} />
            </Routes>
        </div>
    );
}
