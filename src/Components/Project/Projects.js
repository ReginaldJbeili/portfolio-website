import React from "react";
import "./Projects.css";
import Grid from "../Grid/Grid";
import Slideshow from "../Slideshow/Slideshow";
import { Route } from "react-router-dom";

import Button from "../Styles/Button.style";

const Projects = () => {
  const [toggleSlideshow, setToggleSlideshow] = React.useState(false);
  const [toggleGrid, setToggleGrid] = React.useState(true);

  return (
    <section id="projects" className="projects-section">
      <div className="project-button-container">
        <Button
          onClick={() => {
            setToggleSlideshow(false);
            setToggleGrid(true);
          }}
          className="project-button-grid"
        >
          Grid
        </Button>
        <Button
          onClick={() => {
            setToggleSlideshow(true);
            setToggleGrid(false);
          }}
          className="project-button-slideshow"
        >
          Slideshow
        </Button>
      </div>

      {toggleSlideshow ? <Route path="/" component={Slideshow} /> : null}
      {toggleGrid ? <Route path="/" component={Grid} /> : null}
    </section>
  );
};

export default Projects;
