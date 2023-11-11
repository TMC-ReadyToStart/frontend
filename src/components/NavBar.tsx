import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { AlignJustify } from "lucide-react";
import { LINKS } from "store";

const NavBar = () => {
  const menus = [{ title: "Home", path: LINKS.home }];
  return (
    <nav className="w-[100px] border-b md:border-0 flex-auto bg-darkBackground">
      <Container>NavBar</Container>
    </nav>
  );
};

export default NavBar;
