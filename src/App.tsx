import { Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { LINKS } from "./store";
import Main from "./views/Main";

const App = () => {
  return (
    <div className="flex flex-col gap-[70px]">
      <NavBar />
      <Routes>
        <Route path={LINKS.home} element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
