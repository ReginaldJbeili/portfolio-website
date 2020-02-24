import React from "react";
import "./Nav.css";

import A from "../Styles/A.style";

const Nav = () => {
  return (
    <section className="nav-bar-section">
      <A href="#home">Home</A>
      <A href="#about">About</A>
      <A href="#projects">Projects</A>
      <A href="#contact">Contact Me</A>
    </section>
  );
};

export default Nav;
