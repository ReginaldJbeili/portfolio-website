import React from "react";
import "./Landing.css";
import H1 from "../Styles/H1.style";
import A2 from "../Styles/A2.style";

const Landing = () => {
  return (
    <section id="home" className="landing-page">
      <H1>I am</H1>

      <H1>Reginald Jbeili</H1>

      <H1 className="h1-sub">Software Developer</H1>

      <H1>Welcome to my website</H1>

      <A2
        className="h1-sub"
        href="https://drive.google.com/file/d/1x9g8bEpA1MtU6HhbDQNhGwwnRMKsf0Nj/view?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
      >
        View my CV here
      </A2>
    </section>
  );
};

export default Landing;
