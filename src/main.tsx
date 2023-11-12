import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import "./index.css";
import { queryClient } from "./utils/query.ts";
import Portal from "@/pages/Portal.tsx";
import Login from "@/pages/Login.tsx";
import Secured from "@/pages/Secured.tsx";
import Register from "@/pages/Register.tsx";
import Logout from "@/pages/Logout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Portal children={<Login />} />}
                />
                <Route
                    path="/register"
                    element={<Portal children={<Register />} />}
                />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Secured children={<App />} />} />
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
