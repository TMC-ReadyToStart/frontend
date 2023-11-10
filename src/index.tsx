import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Footer, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { LINKS } from "./store";
import Main from "./views/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className="flex flex-col gap-[70px]">
    <NavBar />
    <Routes>
      <Route path={LINKS.home} element={<Main />} />
    </Routes>
    <Footer />
  </div>
);
