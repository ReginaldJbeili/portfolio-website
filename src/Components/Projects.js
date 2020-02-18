import React from "react";
import "./Projects.css";
import Grid from "./Grid";
import Slideshow from "./Slideshow";
// import { Route, Switch } from "react-router-dom";

const Projects = () => {
  const [toggleSlideshow, setToggleSlideshow] = React.useState(true);
  const [toggleGrid, setToggleGrid] = React.useState(false);
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-button-container">
        <button
          onClick={() => {
            setToggleSlideshow(true);
            setToggleGrid(false);
          }}
        >
          Slideshow
        </button>
        <button
          onClick={() => {
            setToggleSlideshow(false);
            setToggleGrid(true);
          }}
        >
          Grid
        </button>
      </div>
      {toggleSlideshow ? <Slideshow /> : null}
      {toggleGrid ? <Grid /> : null}
    </section>
  );
};

export default Projects;
