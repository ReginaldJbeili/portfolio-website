import React from "react";
import Developer from "../Developer/Developer";
import Nurse from "../Nurse/Nurse";
import Gamer from "../Gamer/Gamer";
import Button from "../Styles/Button.style";
import H2 from "../Styles/H2.style";
import profilepic from "../../assets/images/profilepic.png";
import P from "../Styles/P.style";

import "./About.css";

const About = () => {
  const [toggleDev, setToggleDev] = React.useState(true);
  const [toggleNurse, setToggleNurse] = React.useState(false);
  const [toggleGamer, setToggleGamer] = React.useState(false);

  return (
    <section id="about" className="about-section">
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
          Background
        </Button>
        <Button
          onClick={() => {
            setToggleDev(false);
            setToggleNurse(false);
            setToggleGamer(true);
          }}
        >
          Interests
        </Button>
      </div>
      <div>
        {toggleDev ? <Developer /> : null}
        {toggleNurse ? <Nurse /> : null}
        {toggleGamer ? <Gamer /> : null}
      </div>
    </section>
  );
};

export default About;
