import React from "react";

import { LINKS } from "../store";
import Container from "./Container";

const NavBar = () => {
  const menus = [{ title: "Home", path: LINKS.home }];

  return (
    <nav className="w-full">
      <Container>
        <div>Hello World!</div>
      </Container>
    </nav>
  );
};

export default NavBar;
