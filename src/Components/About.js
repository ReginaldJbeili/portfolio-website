import React from "react";

const About = () => {
  const [toggleMe, setToggleMe] = React.useState(true);
  const [toggleDev, setToggleDev] = React.useState(false);
  const [toggleNurse, setToggleNurse] = React.useState(false);
  const [toggleGamer, setToggleGamer] = React.useState(false);
  const [toggleFriend, setToggleFriend] = React.useState(false);

  return (
    <section>
      <h2>Me</h2>
      <button
        onClick={() => {
          setToggleMe(true);
          setToggleDev(false);
          setToggleNurse(false);
          setToggleGamer(false);
          setToggleFriend(false);
        }}
      >
        This is me
      </button>
      <button
        onClick={() => {
          setToggleMe(false);
          setToggleDev(true);
          setToggleNurse(false);
          setToggleGamer(false);
          setToggleFriend(false);
        }}
      >
        I'm a developer
      </button>
      <button
        onClick={() => {
          setToggleMe(false);
          setToggleDev(false);
          setToggleNurse(true);
          setToggleGamer(false);
          setToggleFriend(false);
        }}
      >
        I'm a nurse
      </button>
      <button
        onClick={() => {
          setToggleMe(false);
          setToggleDev(false);
          setToggleNurse(false);
          setToggleGamer(true);
          setToggleFriend(false);
        }}
      >
        I'm a gamer
      </button>
      <button
        onClick={() => {
          setToggleMe(false);
          setToggleDev(false);
          setToggleNurse(false);
          setToggleGamer(false);
          setToggleFriend(true);
        }}
      >
        I'm a friend
      </button>
      {toggleMe ? "My story" : null}
      {toggleDev ? "My Developer Story" : null}
      {toggleNurse ? "My Nurse Story" : null}
      {toggleGamer ? "My Gamer Story" : null}
      {toggleFriend ? "My Friend Story" : null}
    </section>
  );
};

export default About;
