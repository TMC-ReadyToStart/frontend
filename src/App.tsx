import { Route, Routes } from "react-router-dom";

import { LINKS } from "./store";
import { Main, Upload } from "views";
import { Footer, NavBar } from "components";

function App() {
  return (
    <div className="flex relative flex-col min-h-screen bg-background">
      <div className="flex flex-auto w-full h-full">
        <NavBar />
        <Routes>
          <Route path={LINKS.home} element={<Main />} />
          <Route path={LINKS.upload} element={<Upload />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
