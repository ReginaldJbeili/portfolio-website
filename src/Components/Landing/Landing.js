import React from "react";
import "./Landing.css";
import H1 from "../Styles/H1.style";
import H2 from "../Styles/H2.style";
import A2 from "../Styles/A2.style";

const Landing = () => {
  return (
    <section id="home" className="landing-page">
      <H1>REGINALD JBEILI</H1>

      <H1 className="h1-sub">SOFTWARE DEVELOPER</H1>
      <H2>
        Transitioned from the operating theatre as a scrub nurse into tech.
        Looking for a junior developer role where my strengths (critical
        thinking, calm under pressure, empathy, and hard work) can be leveraged
        while improving on my technical abilities.
      </H2>
      <A2
        className="a-sub"
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
