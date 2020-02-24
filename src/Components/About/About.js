import React from "react";
import Developer from "../Developer/Developer";
import Nurse from "../Nurse/Nurse";
import Gamer from "../Gamer/Gamer";
import Button from "../Styles/Button.style";
import H2 from "../Styles/H2.style";

import "./About.css";

const About = () => {
  const [toggleDev, setToggleDev] = React.useState(true);
  const [toggleNurse, setToggleNurse] = React.useState(false);
  const [toggleGamer, setToggleGamer] = React.useState(false);

  return (
    <section id="about" className="about-section">
      <H2>About Me</H2>
      <div className="about-button-container">
        <Button
          onClick={() => {
            setToggleDev(true);
            setToggleNurse(false);
            setToggleGamer(false);
          }}
        >
          Tech Stack
        </Button>
        <Button
          onClick={() => {
            setToggleDev(false);
            setToggleNurse(true);
            setToggleGamer(false);
          }}
        >
          History
        </Button>
        <Button
          onClick={() => {
            setToggleDev(false);
            setToggleNurse(false);
            setToggleGamer(true);
          }}
        >
          Trivia
        </Button>
      </div>

      {toggleDev ? <Developer /> : null}
      {toggleNurse ? <Nurse /> : null}
      {toggleGamer ? <Gamer /> : null}
    </section>
  );
};

export default About;
