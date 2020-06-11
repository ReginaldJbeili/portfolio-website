import React from "react";
import "./Nav.css";

import A from "../Styles/A.style";

const Nav = () => {
  return (
    <section className="nav-bar-section">
      {/* <div className="left-side"> */}
      <A className="home" href="#home">
        HOME
      </A>
      <A className="about" href="#about">
        ABOUT
      </A>
      {/* </div> */}
      {/* <div className="right-side"> */}
      <A className="projects" href="#projects">
        PROJECTS
      </A>
      <A className="contact" href="#contact">
        CONTACT
      </A>
      {/* </div> */}
    </section>
  );
};

export default Nav;
