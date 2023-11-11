import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import "./index.css";
import { queryClient } from "./utils/query.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
