import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <section className="nav-bar-section">
      <p>Reginald Jbeili</p>
      <a className="landing-a home" href="#home">
        Home
      </a>
      <a className="landing-a about" href="#about">
        About
      </a>
      <a className="landing-a projects" href="#projects">
        Projects
      </a>
      <a className="landing-a contact" href="#contact">
        Contact Me
      </a>
    </section>
  );
};

export default Nav;
