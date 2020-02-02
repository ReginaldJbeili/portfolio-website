import React from "react";
import ReactPlayer from "react-player";
import "./Landing.css";
import Nav from "./Nav";

const Landing = () => {
  return (
    <section className="landing-page">
      <Nav />
      <ReactPlayer
        className="landing-video"
        url="https://i.imgur.com/qXDSekV.mp4"
        playing
        loop
        width="100%"
        height="100%"
      />
    </section>
  );
};

export default Landing;
