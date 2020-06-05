import React from "react";
import "./Nav.css";

import A from "../Styles/A.style";

const Nav = () => {
  return (
    <section className="nav-bar-section">
      {/* <div className="left-side"> */}
      <A className="home" href="#home">
        Home
      </A>
      <A className="about" href="#about">
        About
      </A>
      {/* </div> */}
      {/* <div className="right-side"> */}
      <A className="projects" href="#projects">
        Projects
      </A>
      <A className="contact" href="#contact">
        Contact
      </A>
      {/* </div> */}
    </section>
  );
};

export default Nav;
