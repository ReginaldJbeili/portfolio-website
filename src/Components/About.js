import React from "react";

import Developer from "./Developer";
import Nurse from "./Nurse";
import Gamer from "./Gamer";

import "./About.css";

const About = () => {
  const [toggleDev, setToggleDev] = React.useState(true);
  const [toggleNurse, setToggleNurse] = React.useState(false);
  const [toggleGamer, setToggleGamer] = React.useState(false);

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-button-container">
        <button
          className="button-style"
          onClick={() => {
            setToggleDev(true);
            setToggleNurse(false);
            setToggleGamer(false);
          }}
        >
          Tech Stack
        </button>
        <button
          className="button-style"
          onClick={() => {
            setToggleDev(false);
            setToggleNurse(true);
            setToggleGamer(false);
          }}
        >
          History
        </button>
        <button
          className="button-style"
          onClick={() => {
            setToggleDev(false);
            setToggleNurse(false);
            setToggleGamer(true);
          }}
        >
          Trivia
        </button>
      </div>

      {toggleDev ? <Developer /> : null}
      {toggleNurse ? <Nurse /> : null}
      {toggleGamer ? <Gamer /> : null}
    </section>
  );
};

export default About;
