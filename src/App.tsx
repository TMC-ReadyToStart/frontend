import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "@/pages/Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import Quests from "./pages/Quests";
import { UserNav } from "./components/user-nav";
import Quest from "./pages/Quest";
import Exam from "@/pages/Exam";
import Result from "@/pages/Result";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

function UI() {
    const store = useStore();

    useEffect(() => {
        if (
            store.questions.length !== 0 ||
            store.currentQuestion !== 0 ||
            store.validAnswers !== 0
        ) {
            store.setCurrentQuestion(0);
            store.setValidAnswers(0);
            store.setQuestions([]);
        }
    }, [store]);

    return (
        <div className="flex flex-col">
            <div className="w-full h-[56px] flex justify-between px-4 items-center border border-slate-200 border-t-0">
                <div>Logo</div>

                <div className="flex justify-end flex-1">
                    <div className="flex items-center justify-center p-2 text-center border-4 border-gray-100 rounded-full aspect-square bg-slate-200">
                        <span>ME</span>
                    </div>
                </div>
            </div>
            <div className="flex items-stretch min-h-screen">
                <div className="w-[200px] min-h-screen flex flex-col self-auto">
                    <div className="flex flex-col flex-1 h-full border shadow-sm h-fullbg-yellow-500">
                        <UserNav />
                    </div>
                </div>
                <Routes>
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/quest" element={<Quest />} />
                </Routes>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/ui/*" element={<UI />} />
                <Route path="/learn" element={<Exam />} />
                <Route path="/result" element={<Result />} />
                <Route path="*" element={<Navigate to="/ui/dashboard" />} />
            </Routes>
        </div>
    );
}
